$(function(){
  $('#menu-toggle').on('click', function(){
    $('#menu').toggleClass('open');
    event.preventDefault();
  })
})