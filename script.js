// navbar links
const navbar = document.querySelector(".navbar");
        a=navbar.querySelectorAll("a");
        a. forEach(function(element){
        	element.addEventListener("click",function(){
        		for(let i=0; i<a.length; i++){
        			a[i].classList.remove("active");

        		}
        		this.classList.add("active")
        		 	document.querySelector(".navbar").classList.toggle("show");

        	})


        })
 //ham-burger
 const hamBurger=document.querySelector(".ham-burger");
 hamBurger.addEventListener("click",function(){
 	document.querySelector(".navbar").classList.toggle("show");

 } )      

