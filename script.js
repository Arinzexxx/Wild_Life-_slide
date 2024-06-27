let nextdon = document.getElementById('next');
let prevdon = document.getElementById('prev');
let carousetdom = document.querySelector('.carouset');
let listItemdom = document.querySelector('.carouset .list');
let thumbnailsdom = document.querySelector('.carouset .thumbnail')

nextdon.onclick = function () {
  showSlider('next');
  // console.log(333);
}

prevdon.onclick = function () {
  showSlider('prev');
}

let timeRunning = 3000;
let timeAutoNext = 7000;
let runtimeOut;

let runAutoRun = setTimeout(() => {
  nextdon.click();
}, timeAutoNext);


function showSlider(type) {
  let itemSlider = document.querySelectorAll('.carouset .list .item');
  let itemThumbnail = document.querySelectorAll('.carouset .thumbnail .item');

  if (type === 'next') {
    listItemdom.appendChild(itemSlider[0]);
    thumbnailsdom.appendChild(itemThumbnail[0]);
    carousetdom.classList.add('next');
  } else {
    let positionlastitem = itemSlider.length - 1;
    listItemdom.prepend(itemSlider[positionlastitem]);
    thumbnailsdom.prepend(itemThumbnail[positionlastitem]);
    carousetdom.classList.add('prev');
  }

  clearTimeout(runtimeOut);
  runtimeOut = setTimeout(() => {
    carousetdom.classList.remove('next');
    carousetdom.classList.remove('prev');
  }, timeRunning)

  clearTimeout(runAutoRun);
  // runAutoRun = setTimeout(() => {
  //   nextdon.click();
  // }, timeAutoNext);
}