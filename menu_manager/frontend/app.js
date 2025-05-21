const API = "http://localhost:5000/api";
const dishList = document.getElementById('dishList');
const dishModal = document.getElementById('dishModal');
const dishForm = document.getElementById('dishForm');
const toast = document.getElementById('toast');
let editing = false;

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

function loadDishes() {
  fetch(`${API}/dishes`)
    .then(res => res.json())
    .then(dishes => {
      dishList.innerHTML = '';
      dishes.forEach(d => {
        let div = document.createElement('div');
        div.className = 'dish-card';
        div.innerHTML = `
          <div class="dish-info">
            <strong>${d.name}</strong> - $${d.price}<br/>
            <small>${d.description}</small>
          </div>
          <div class="dish-actions">
            <button onclick="editDish('${d.name}')">Edit</button>
            <button onclick="deleteDish('${d.name}')">Delete</button>
          </div>
        `;
        dishList.appendChild(div);
      });
    });
}

window.editDish = function(name) {
  fetch(`${API}/dish/${name}`)
    .then(res => res.json())
    .then(d => {
      dishForm.dishName.value = d.name;
      dishForm.dishDesc.value = d.description;
      dishForm.dishPrice.value = d.price;
      dishForm.editName.value = d.name;
      editing = true;
      dishModal.showModal();
    });
}

window.deleteDish = function(name) {
  fetch(`${API}/dish/${name}`, {method: 'DELETE'})
    .then(res => res.json())
    .then(_ => { showToast('Dish deleted!'); loadDishes(); });
}

document.getElementById('openAdd').onclick = () => {
  dishForm.reset();
  editing = false;
  dishModal.showModal();
};

dishForm.onsubmit = function(e) {
  e.preventDefault();
  let data = {
    name: dishForm.dishName.value,
    description: dishForm.dishDesc.value,
    price: parseFloat(dishForm.dishPrice.value)
  };
  let url = `${API}/dish`;
  let method = 'POST';
  if (editing) {
    url += '/' + dishForm.editName.value;
    method = 'PUT';
  }
  fetch(url, {
    method: method,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  }).then(res => res.json())
    .then(_ => {
      showToast('Saved!');
      dishModal.close();
      loadDishes();
    });
};
document.getElementById('cancelBtn').onclick = () => dishModal.close();

window.onload = loadDishes;
