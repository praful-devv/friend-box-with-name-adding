let flag = 0
let like = document.querySelector('#like')
like.addEventListener('click',function(){

    if(flag === 0){
        like.style.color = 'red'
        flag = 1

    }
    else{
         like.style.color = "white";
         flag = 0;
    }

})

let h1 = document.querySelector('h1')

let arr = []
let add = document.querySelector("#addfriend");
let h2 = document.querySelector("h2");
add.addEventListener('click',function(){
    arr = prompt("name")
    h2.innerHTML = arr
})

let section = document.querySelector('section')
section.addEventListener('dblclick',function(){
    
    if(flag === 0){

        like.style.color = 'red'
        like.style.color = 'red'
        flag = 1
    }
    else{

         like.style.color = "white";
         flag = 0;
    }
})