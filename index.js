// document.querySelectorAll("button").addEventListener("click",handleClick);

// Creación array con query a todos los botones de la página
var allDrumButtons=document.querySelectorAll(".drum");

// Se añade event listener (click) a los botones y se llama a dos funciones (animación y sonido)
for(var i=0;i<allDrumButtons.length;i++){
  allDrumButtons[i].addEventListener("click", function(){

    var buttonInnerHTML=this.innerHTML;
  
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}

// Se añade event listener (keypress) a todo el documento html
document.addEventListener("keydown",function(keydown){ 
  
  makeSound(keydown.key); 

  buttonAnimation(keydown.key);

});

// Se crea función que reproduce sonido 
function makeSound(key){

  var key=key;

  switch (key) {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
    break;
    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
    break;
    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
    break;
    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
    break;
    case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
    break;
    case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
    break;
    case "l":
        var  kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
    break;
    default:
      console.log(buttonInnerHTML);
  }
}

// Se crea función que añade la clase al elemento para su "animación". Tambien se crea una función que quita la clase depues de unos milisegundos. 
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}


// function(){
//   this.style.color ="white";
// }

// function(){
//   var audio = new Audio("sounds/tom-1.mp3");
//   audio.play();
// }

// function handleClick(){
//   alert("I got clicked!");
// }

