let n = 1;

etch();

function etch(){

    do{
        n = parseInt(prompt("enter number of row & columns(50 or less)"));
        if(n > 50 || n < 1){alert("enter correct number");}
    }while(n > 50 || n == 0)
    
    for(let i = 0; i < n; i++){
        for(let k = 0; k < n; k++){
            const div = document.createElement('div');
            div.setAttribute("class", "square");
            div.style.width = 75 / n + 'vh';
            div.style.height = 75 / n + 'vh';

            document.getElementById('container').appendChild(div);
            
            div.addEventListener("mouseover", function adder() {
                div.classList.toggle('hover');
                this.removeEventListener('mouseover', adder, false);
            }, false);
        }
    }
    
    document.getElementById('resetbutton').addEventListener('click', reseter, false);
    document.getElementById('resizer').addEventListener('click', resizer, false);
}
   
function reseter(){     

    const divs = document.querySelectorAll(".square");
    divs.forEach(div => { divs.forEach(d => document.getElementById('container').removeChild(d));

    for(let i = 0; i < n; i++){
            for(let k = 0; k < n; k++){
                const div = document.createElement('div');
                div.setAttribute("class", "square");
                div.style.width = 75 / n + 'vh';
                div.style.height = 75 / n + 'vh';

                document.getElementById('container').appendChild(div);

                div.addEventListener("mouseover", function adder() {
                    div.classList.toggle('hover');
                    this.removeEventListener('mouseover', adder, false);
                }, false);
            }
            
        }
});       
}
function resizer(){

    const divs = document.querySelectorAll(".square");
    divs.forEach(div => { divs.forEach(d => document.getElementById('container').removeChild(d));

    do{
        n = parseInt(prompt("enter number of row & columns(50 or less)"));

        if(n > 50){alert("enter number 50 or less");}
    }while(n > 50)

    for(let i = 0; i < n; i++){
            for(let k = 0; k < n; k++){
                const div = document.createElement('div');
                div.setAttribute("class", "square");
                div.style.width = 75 / n + 'vh';
                div.style.height = 75 / n + 'vh';

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