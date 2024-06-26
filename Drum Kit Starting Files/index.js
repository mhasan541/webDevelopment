
// detecting button press
for(let i =0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
   
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);


});
/// detecting keyboard press
document.addEventListener("keydown", function(event){
    makeSound(event.key)
})

function makeSound(key){
    switch(key){
        case "w":
            const tom1 = new Audio('./sounds/tom-1.mp3')
            tom1.play()
        break;
        case "a":
            const tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play()    
        break;
        case "s":
            const tom3 = new Audio('./sounds/tom-3.mp3')
            tom3.play()
        break    
        case "d":
            const tom5 = new Audio('./sounds/tom-4.mp3');
            tom5.play()    
        break;
        case "j":
            const tom6 = new Audio('./sounds/snare.mp3')
            tom6.play()
        break;
        case "k":
            const tom7 = new Audio('./sounds/crash.mp3')
            tom7.play()
        break;
        case "l":
            const tom4 = new Audio('./sounds/kick-bass.mp3')
            tom4.play()
        break;
    
        default: console.log(buttonInnerHTML)    
       }     
    }
};