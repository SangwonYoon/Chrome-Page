const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenNumber = Math.floor(Math.random() * images.length);
const chosenImage = images[chosenNumber];

document.body.style.backgroundImage = `url(img/${chosenImage})`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";

/*
const quoteSentence = document.querySelector("#quote > span");
if(chosenNumber%2 == 1){
    quoteSentence.style.color = "black";
} else{
    quoteSentence.style.color = "white";
}
*/