(function(userName) {
  const nav = document.querySelector('nav');

  const userDiv = document.createElement('div');
  userDiv.className = 'user-info';

  const nameSpan = document.createElement('span');
  nameSpan.textContent = userName;

  const profileImg = document.createElement('img');
  profileImg.src = 'https://i.pravatar.cc/40'; // Placeholder image

  userDiv.appendChild(nameSpan);
  userDiv.appendChild(profileImg);

  nav.appendChild(userDiv);
})('John');
