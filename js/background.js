const images = ["0.jpg", "1.jpg", "2.jpg"];

// 랜덤 이미지 가져오기
const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `imgs/${chosenImage}`;

// body에 html 추가
// document.body.Prepend(); body 맨 앞에 element 추가
// document.body.appendChild(); body 맨 뒤에 element 추가
// document.body.appendChild(bgImage);

const container = document.querySelector(".container");
container.style.background = `url(./imgs/${chosenImage}) center center`;
