$(document).ready(function() {
    /* Stick Navi */

    $('.js--section-about').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
        }
    },{
        offset: '60px'
      });

/* scroll on */

$('.js--scroll-to-about').click(function (){
    $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000)
  });

/* Navi Scroll */

  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  /* Animate on scroll */

  $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn');
  }, {
      offset:'50%'
  })

  $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated pulse');
  }, {
      offset:'50%'
  })


  /* Mobile Navi*/
  $('.js--nav-icon').click(function(){
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    nav.slideToggle(200);
    if(icon.hasClass('ion-navicon-round')){
        icon.removeClass('ion-navicon-round');
        icon.addClass('ion-close-round');
    }else{
        icon.removeClass('ion-close-round');
        icon.addClass('ion-navicon-round');
    }

    return false;
})

});
      

    /* Tic Tac Toe */
let ticTacStart = () => {
let selector;
selector = document.querySelectorAll(".game-box");
document.querySelector('.player-X').classList.add('active');
document.querySelector('.player-X').classList.remove('winner');
document.querySelector('.player-O').classList.remove('active');
document.querySelector('.player-O').classList.remove('winner');

$(document).ready(function(){
    $(`.player-O`).fadeIn();
});

$(document).ready(function(){
    $(`.player-X`).fadeIn();
});

selector = [...selector];

selector.forEach(el => {
    el.innerHTML = '';
})

let bit = 1; //turn manager
let arrX = [];
let arrO = [];

let wins = [
    ['one', 'two', 'three'],
    ['four', 'five', 'six'],
    ['seven', 'eight', 'nine'],
    ['one', 'four', 'seven'],
    ['two', 'five', 'eight'],
    ['three', 'six', 'nine'],
    ['one', 'five', 'nine'],
    ['seven', 'five', 'three']
]


let checkWin = (picks, turn) => {
    for(i = 0; i < 8; i++){
        let count = 0;
        for(j = 0; j < 3; j++){
            if(picks.includes(wins[i][j])){
                count++;
            }
        }
        if(count > 2) { //if tictactoe

            selector.forEach(el => {
                el.removeEventListener('click', fill)
            })

            document.querySelector('.player-X').classList.remove('active');
            document.querySelector('.player-O').classList.remove('active');
            document.querySelector(`.player-${turn}`).classList.add('winner');
            $(document).ready(function(){
                $(`${turn == 'X' ? '.player-O' : '.player-X'}`).fadeOut();
            });
        }
    }
}

let fill = (el) => {
    el = el.target;

    if(bit == 1) {
        document.querySelector('.player-X').classList.remove('active');
        document.querySelector('.player-O').classList.add('active');
        document.querySelector(`.${el.classList[1]}`).innerHTML = '<i class="ion-close"></i>';
        document.querySelector(`.${el.classList[1]}`).removeEventListener('click', fill);
        arrX.push(el.classList[1]);
        checkWin(arrX, 'X');
        bit = 0;
    }else {
        document.querySelector('.player-O').classList.remove('active');
        document.querySelector('.player-X').classList.add('active');
        document.querySelector(`.${el.classList[1]}`).innerHTML = '<i class="ion-android-radio-button-off"></i>';
        document.querySelector(`.${el.classList[1]}`).removeEventListener('click', fill);
        arrO.push(el.classList[1]);
        checkWin(arrO, 'O');
        bit = 1;
    }
}

selector.forEach(el => {
    el.addEventListener('click', fill)
})
}

document.querySelector('.new-game-btn').addEventListener('click', ticTacStart);


