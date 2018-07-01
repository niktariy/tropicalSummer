var main = $('.theme'),
    flower = $('.flower--main'),
    flower_image = '<img src="img/Veron_flower.svg">',
    hours = new Date().getHours(),
    pink_color = 'rgb(255, 204, 213)',
    violet_color = 'rgb(217, 204, 255)',
    orange_color = 'rgb(255, 230, 204)';

var setMainColor = function(time){
  if (time >= 4 && time < 11) {
      main.addClass('theme__morning');
  } else if (time >= 11 && time <= 18){
      main.addClass('theme__day');
  } else {
      main.addClass('theme__evening');
  }
}
setInterval(setMainColor(hours), 1800)

switch ($('.main').css('background-color')){
  case pink_color:
    flower.append(flower_image);
    break;
  case violet_color:
    flower.append(flower_image);
    break;
  case orange_color:
    flower.append(flower_image);
    break;
  default:
    flower.append(flower_image);
    break;
};

var cBig = $('#circle--big')
    cSmall = $('#circle--small');
    bigSize = document.body.clientHeight / 2 + 120;
    smallSize = document.body.clientHeight / 16 ;

function setCirclesSize(s1, s2) {
  $(cBig).height(s1).width(s1);
  $(cSmall).height(s2).width(s2);
};
setCirclesSize(bigSize, smallSize);


function openMenu(){
  if (document.body.clientWidth <= 600){
    $('.burger').bind('click', function(){
      $('.menu').fadeToggle(200);
    });
  }
};

openMenu();
window.addEventListener("resize",function() {
    if (document.body.clientWidth <= 600){
        $('.circles').animate({
            top: '80%'
        });
    }

    bigSize = document.body.clientHeight / 2 + 120;
    smallSize = document.body.clientHeight / 16 ;
    setCirclesSize(bigSize, smallSize);

});
