const burger = document.querySelector('.burger');
const nav = document.querySelector('.links');

const navSlide = () => {
    burger.addEventListener('click',() => {
        //toggle nav
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        if(burger.classList.contains('toggle')){
            document.body.style.backgroundColor = "rgba(77, 73, 73, 0.2)";
        }
        else{
            document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
        }
    });
   
}

navSlide();
// burger.addEventListener('click',()=>{
//     burger.classList.toggle('toggle');
// })