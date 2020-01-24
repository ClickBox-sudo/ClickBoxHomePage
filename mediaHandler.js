function myFunction() {
    var w = window.innerWidth;
var h = window.innerHeight;
  if(w<700){
    document.body.style.backgroundColor = "yellow";
  }if(w>700){
    document.body.style.backgroundColor = "blue";
  }
  console.log('bla',w)
  }
  
  var x = [window.matchMedia("(max-width: 400px)"),window.matchMedia("(max-width: 700px)"),window.matchMedia("(max-width: 400px)")]
   // Call listener function at run time
  window.addEventListener('resize',myFunction)