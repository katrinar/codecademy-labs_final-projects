$(document).ready(function() {
  $('.robot').click(function(){
    $('#nameBox').show();
      $('#robotClick').hide();
  });
  $('#playButton').click(function() {
    var userName = $('input[name=firstname]').val();
      $('#intro-name').append('<div id="intro-name">' + "hi " + userName + ", Welcome to Janguru. You are the CHOSEN ONE. " + setup.greeting + " Click me on the desert or forest to continue" +'</div>');	
        	$('#nameBox').hide();
          $('#location-option').show();
        });
   $(".jungle").click(function(){
      $('#location-option').hide();
      $("#intro-name").hide();
      $("#intro-location").append('<div id="intro-location">' + locations.desertlizard + '</div>');
   }); 

    $(".desert").click(function(){
      $('#location-option').hide();
      $("#intro-name").hide();
      $("#intro-location").append('<div id="intro-location">' + locations.junglespray + '</div>');
   }); 
     

    });