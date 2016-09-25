var scrheight = $(window).innerHeight();
var finaltop = 0;

$('#menu li').on('click', function(){
  $('#menu li').removeClass('selected');
  $(this).addClass('selected');
});

$('#home-item').on('click', function(){
  $('#container').css('top', '0');
});


$('#unreal-item').on('click', function(){
  finaltop = (scrheight * -1) + 'px';
  $('#container').css('top', finaltop);
});


$('#unity-item').on('click', function(){
  finaltop = (scrheight * -2) + 'px';
  $('#container').css('top', finaltop);
});


$('#cryengine-item').on('click', function(){
  finaltop = (scrheight * -3) + 'px';
  $('#container').css('top', finaltop);
});


$('#valve-item').on('click', function(){
  finaltop = (scrheight * -4) + 'px';
  $('#container').css('top', finaltop);
});
