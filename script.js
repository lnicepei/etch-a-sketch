let n = 0;
hotLoad();
function hotLoad(){
    n = parseInt(prompt("enter number of row & columns(less than a 32)"));
    document.getElementById('container').style.width = n * 25 + 'px';
    document.getElementById('container').style.height = n * 25 + 'px';
    
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
        
        document.getElementById('resetbutton').addEventListener('click', reseter, false);
    }else{
        alert("enter a number less than a 100");
        // document.location.reload();
    }
}
function reseter(){            
    const divs = document.querySelectorAll(".square");
    divs.forEach(div => { divs.forEach(d => document.getElementById('container').removeChild(d));
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
});         
}
function colorSelected (element) {
    document.getElementsByClassName('#container > .square > .hover').style.backgroundColor = element.value
}
