$(document).ready(function()
{
  $('a').on('click',function(e)
{
  if(this.hash != '')
  {
    e.preventDefault();
    const hash = this.hash;
    console.log(hash);
    $('html,body').animate(
      {
        scrollTop:$(hash).offset().top-50
      },800);
      
  }
});

$('#scrollButton').on('click',function(e)
{
  e.preventDefault();
  $('html,body').animate(
    {
      scrollTop:$('#explore').offset().top-50
    },800
  );
});
$(window).on('scroll', function () {
  if ($(window).scrollTop() > 50) {
      $('.navbar').css('background', 'rgba(102, 100, 100, 0.44)');
  } else {
      $('.navbar').css('background', 'linear-gradient(45deg,rgb(231, 245, 232), #2196f3)');
  }
});




});