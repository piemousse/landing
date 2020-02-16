$(function() {
   $('.scroll-down').click (function() {
     $('html, body').animate({scrollTop: $('div.part2').offset().top }, 'slow');
     return false;
   });
 });