$(document).ready(function () {
  $(window).scroll(function () {
    let height = $(window).scrollTop();
    if (height > 50) {
      $('.utilBarWrap').addClass('--fixed');
    } else {
      $('.utilBarWrap').removeClass('--fixed');
    }
  });
});
if ($('.counter-section').length > 0) {
  $(window).scroll(testScroll);
  var viewed = !1;
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }
  function testScroll() {
    if (isScrolledIntoView($('.counter-section')) && !viewed) {
      viewed = !0;
      $('.counter-section-items__value').each(function () {
        $(this)
          .prop('Counter', 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 1000,
              easing: 'swing',
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            },
          );
      });
    }
  }
}

function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.burger-menu_button', '.burger-menu_lines');
  let links = menu.find('.burger-menu_link');
  let overlay = menu.find('.burger-menu_overlay');

  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass('burger-menu_active');

    if (menu.hasClass('burger-menu_active')) {
      $('body').css('overlow', 'hidden');
    } else {
      $('body').css('overlow', 'visible');
    }
  }
}

burgerMenu('.burger-menu');

const swiper = new Swiper('.swiper', {
  spaceBetween: 30,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
