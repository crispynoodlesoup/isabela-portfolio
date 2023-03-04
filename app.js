const leftImageRow = document.querySelector(".image-scroll-left");
const rightImageRow = document.querySelector(".image-scroll-right");

const imageList = [
  "IMG_7366.jpg",
  "IMG_7365.jpg",
  "IMG_7374.jpg",
  "IMG_7369.jpg",
  "IMG_7370.jpg",
];

const imageList2 = [
  "IMG_7364.jpg",
  "IMG_7363.jpg",
  "IMG_7367.jpg",
  "IMG_7368.jpg",
  "IMG_7371.jpg",
  "IMG_7372.jpg",
];

imageList.forEach((name) => {
  img = document.createElement("img");
  img.src = `./assets/images/${name}`;
  leftImageRow.appendChild(img);
});

imageList.forEach((name) => {
  img = document.createElement("img");
  img.src = `./assets/images/${name}`;
  leftImageRow.appendChild(img);
});

imageList2.forEach((name) => {
  img = document.createElement("img");
  img.src = `./assets/images/${name}`;
  rightImageRow.appendChild(img);
});

imageList2.forEach((name) => {
  img = document.createElement("img");
  img.src = `./assets/images/${name}`;
  rightImageRow.appendChild(img);
});
