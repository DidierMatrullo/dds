$(document).ready(function () {
  $(".store-name").hide();


  $(function () {
    
    $(window).scroll(function () {
    
      if ($(this).scrollTop() > 200) {
      $('.store-name').fadeIn();
      } else {
      $('.store-name').fadeOut();
      }
    });
  });
});


