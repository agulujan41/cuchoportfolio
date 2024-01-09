document.addEventListener('readystatechange', function(e) {
    if(document.readyState === "loading"){
     console.log("content is loading")
    }
    else if(document.readyState === "interactive"){ 
     console.log("dom content loaded but resources like image or script has not been loaded yet.")
    }
    else{
        console.log("loading complete.")
        var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
    nav.classList.add('bg-dark', 'shadow');
    } else {
    nav.classList.remove('bg-dark', 'shadow');
    }
});
window.addEventListener('resize', function () {
    if (window.innerWidth < 1000) {
    nav.classList.add('bg-dark', 'shadow');
    } else {
    nav.classList.remove('bg-dark', 'shadow');
    }
});
var btnNav = document.querySelector('.navbar-toggler');
        
  
      
    }
   });
