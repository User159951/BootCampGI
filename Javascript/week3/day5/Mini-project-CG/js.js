document.addEventListener('DOMContentLoaded', function() {
    const main = document.getElementById('main');
    const totalDivs = 60 * 30; // Based HTML (60 columns x 30 rows)
    
    main.innerHTML = '';
    
    // Create and append all the divs
    for (let i = 0; i < totalDivs; i++) {
        const div = document.createElement('div');
        main.appendChild(div);
    }
    
  
    let color = null;
    let mousedown = false;

    let body = document.getElementsByTagName("body")[0];
    let color_blocks = document.querySelectorAll("#sidebar > *");
    let fill_blocks = document.querySelectorAll("#main > *");
    let clear_button = document.getElementsByTagName("button")[0];

    clear_button.addEventListener("click", function(){
        for (fill_block of fill_blocks){
            fill_block.style.backgroundColor = "white";
        }
    });

    body.addEventListener("mousedown", function(){
        mousedown = true;
    });

    body.addEventListener("mouseup", function(){
        mousedown = false;
    });

    for (color_block of color_blocks){
        color_block.addEventListener("click", function(event){
            color = event.target.style.backgroundColor;
        });
    }

    for (fill_block of fill_blocks){
        fill_block.addEventListener("mousedown", function(event){
            if (color != null) event.target.style.backgroundColor = color;
        });
        fill_block.addEventListener("mouseover", function(event){
            if (mousedown && color != null) event.target.style.backgroundColor = color;
        });
    }
});