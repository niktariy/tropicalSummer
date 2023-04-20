let $mainTheme = document.getElementsByClassName('main')[0];
let $flower = document.getElementsByClassName('flower--main')[0];
let $burgerButton = document.getElementsByClassName('burger')[0];
let cBig = document.getElementById('circle--big');
let cSmall = document.getElementById('circle--small');
let pink_color = 'rgb(255, 204, 213)';
let violet_color = 'rgb(217, 204, 255)';
let orange_color = 'rgb(255, 230, 204)';
let bigSize = 0;
let smallSize = 0;

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);
openMenu();
setInterval(setMainColor(), 1800);

function openMenu() {
  if (document.body.clientWidth <= 600) {
    $burgerButton.addEventListener('click', function () {
      document.getElementsByClassName('menu')[0].fadeToggle(200);
    });
  }
}

function setMainColor() {
  let time = new Date().getHours();
  let mainClasses = $mainTheme.classList;

  if (time >= 4 && time < 11) {
    mainClasses.add('theme__morning');
  } else if (time >= 11 && time <= 18) {
    mainClasses.add('theme__day');
  } else {
    mainClasses.add('theme__evening');
  }
  switchTheme();
}

function switchTheme() {
  let currentBackgroundColor = getComputedStyle($mainTheme).getPropertyValue("background-color");
  let flowerImage = document.createElement('img');
  flowerImage.setAttribute('alt', 'main flower');

  switch (currentBackgroundColor) {
    case pink_color:
      flowerImage.setAttribute('src', 'img/Veron_flower.svg');
      break;
    case violet_color:
      flowerImage.setAttribute('src', 'img/Veron_flower.svg');
      break;
    case orange_color:
      flowerImage.setAttribute('src', 'img/Veron_flower.svg');
      break;
    default:
      flowerImage.setAttribute('src', 'img/Veron_flower.svg');
      break;
  }
  $flower.appendChild(flowerImage);
}

function handleResize() {
  debugger;
  let bodyHeight = document.body.clientHeight;

  bigSize = bodyHeight / 2 + 120;
  smallSize = bodyHeight / 16;

  setCirclesSize(bigSize + 'px', smallSize + 'px');
}

function setCirclesSize(s1, s2) {
  cBig.style.height = s1;
  cBig.style.width = s1;

  cSmall.style.height = s2;
  cSmall.style.width = s2;
}
