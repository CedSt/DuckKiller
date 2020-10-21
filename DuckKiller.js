var container = document.querySelector('#container');
var movingSquare = document.querySelector('#square');
var speed = 50;
movingSquare.style.top = '0px';
movingSquare.style.left = '0px';

document.addEventListener('keydown', (event) => {
  var top = parseInt(movingSquare.style.top);
  var left = parseInt(movingSquare.style.left);

  console.log(event);

  if (event.key == 'ArrowRight') {
    if(left < 1400) {
      left += speed;
    }
  }

  if (event.key == 'ArrowLeft') {
    if(left > 0) {
      left -= speed; 
    }
  }

  if (event.key == 'ArrowUp') {
    if (top > 0) {
      top -= speed;
    }
  }

  if (event.key == 'ArrowDown') {
    if(top < 700) {
      top += speed; 
    }
  }



  movingSquare.style.left = left + 'px';
  movingSquare.style.top = top + 'px';
});


var death = document.querySelector('#square');

death.addEventListener('click', () => {

  var red = 'Images/deadduck.PNG';

  death.style.background.hover = 'url(' + red + ')';
  
});