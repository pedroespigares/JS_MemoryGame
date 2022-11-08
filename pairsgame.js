function getRandomNumber() {
  return Math.floor(Math.random() * 4);
}


let images = ["media/aki.jpg","media/denji.jpg","media/kobeni.jpg","media/power.jpg"];

let htmlImages = document.querySelectorAll("img");


for (let i = 0; i < htmlImages.length; i++) {
    htmlImages[i].src = images[getRandomNumber()];
}