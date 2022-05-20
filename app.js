const burger = document.querySelector('.burger');
const nav = document.querySelector('.links');
const button  =document.querySelectorAll('.dropdown');




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

    // dropdown of sublinks
    button.forEach((btn,event)=>{
        btn.addEventListener('click',()=>{
            btn.classList.toggle('active');
        });
    });
    
}

navSlide();
