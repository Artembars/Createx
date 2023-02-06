$(function () {

var mixer = mixitup('.directions_list');
$('.directions_filter-btn').on('click',function() 
{$('.directions_filter-btn').removeClass('directions_filter-btn--active')
  $(this).addClass('directions_filter-btn--active')
})
//////////////////slider1/////////////////////////////////////////
$('.team_slider').slick({
  arrows:false,
  slidesToShow:4,
  infinite:true,
  draggable:false,
  waitForAnimate:false,
  responsive:
  [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow:3,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow:2,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow:1,
        draggable:true,
        dots:true,
        appendDots:$('.team_dots'),
      },
    },

  ]
})
$('.team_prev').on('click',function(e) {
  e.preventDefault()
  $('.team_slider').slick('slickPrev')
})
$('.team_next').on('click',function(e) {
  e.preventDefault()
$('.team_slider').slick('slickNext')
})
//////////////////slider2/////////////////////////////////////////
$('.testimonials_slider').slick({
  arrows:false,
  dots:true,
  appendDots:$('.testimonials_dots'),
})
$('.testimonials_prev').on('click',function(e) {
  e.preventDefault()
  $('.testimonials_slider').slick('slickPrev')
})
$('.testimonials_next').on('click',function(e) {
  e.preventDefault()
$('.testimonials_slider').slick('slickNext')
})
//////////////////akardeon/////////////////////////////////////////
// $('.program_acc-link').on('click',function (e) {
//   e.preventDefault()
//   $(this).toggleClass('program_acc-link--active')
//   $(this).children('.program_acc-text').slideToggle()
// })
$('.program_acc-link').on('click',function (e) {
  e.preventDefault()
  if ($(this).hasClass('program_acc-link--active')) {
    $(this).removeClass('program_acc-link--active')
    $(this).children('.program_acc-text').slideUp()
  }
  else{
  $('.program_acc-link').removeClass('program_acc-link--active')
  $('.program_acc-text').slideUp()
  $(this).addClass('program_acc-link--active')
  $(this).children('.program_acc-text').slideDown()
  }
//////////////////akardeon/////////////////////////////////////////

})

$(".header_nav-list a,.header_top-btn" ).on("click", function (event) {
//отменяем стандартную обработку нажатия по ссылке
event.preventDefault();
//забираем идентификатор бока с атрибута href
var id  = $(this).attr('href'),
//узнаем высоту от начала страницы до блока на который ссылается якорь
top = $(id).offset().top;
//анимируем переход на расстояние - top за 1500 мс
$('body,html').animate({scrollTop: top}, 1500);
});
//////////////burger//////////////////////////////////

$(window).on('scroll', function () {
  
  if($(window).scrollTop()>0 && $('.header_top').hasClass('header_top-open')=== false){
    $('.burger').addClass('burger-follow')}
    else{$('.burger').removeClass('burger-follow')} 
})





$(".burger, .overlay,.header_top a").on("click", function(e) {
  e.preventDefault()
$('.header_top').toggleClass('header_top-open')
$('.overlay').toggleClass('overlay-show')
})

$('.footer_top-title').on('click',function () {
  
  $(this).next().slideToggle() 
})
})