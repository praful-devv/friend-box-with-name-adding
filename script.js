let like = document.querySelector('#like')
like.addEventListener('click',function(){
    like.style.backgroundColor = 'red'
})



let arr = []
let add = document.querySelector("#addfriend");
let h2 = document.querySelector("h2");
add.addEventListener('click',function(){
    arr = prompt("name")
    h2.innerHTML = arr
})