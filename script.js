let n = parseInt(prompt("enter number of row & columns(less than a 100)"));
document.getElementById('container').style.width = n * 27 + 'px';
document.getElementById('container').style.height = n * 27 + 'px';

if(n < 100){
    for(let i = 0; i < n; i++){
        for(let k = 0; k < n; k++){
            const div = document.createElement('div');
            div.setAttribute("class", "square");
            document.getElementById('container').appendChild(div);
            div.addEventListener("mouseover", function adder() {
                div.classList.toggle('hover');
                this.removeEventListener('mouseover', adder, false);
              }, false);
        }
    
    }

}else{
    alert("enter a number less than a 100");
    // document.location.reload();
}

document.getElementById('resetbutton').addEventListener('click', function (){
    n = parseInt(prompt("enter number of row & columns(less than a 100)"));
    
}, false);
  
