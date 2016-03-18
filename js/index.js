/*Hamburger*/
document.querySelector( ".hamburger" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });


// set up nav open variable
var navOpen = false;

// on click open or close nav
$('.hamburger').on('click', function(){
  if (navOpen) {
    //animate height of header closed - 45px
    $('.secondary-item, .font-awesome, .main-item').hide()/*.animate()*/;
    navOpen = false;
  }else {
    //animate height of header open - 240px
    $('.secondary-item, .font-awesome, .main-item').show()/*.animate()*/;
    navOpen = true;
  };
});

// on resize, reset our nav height by removing the inline style (that gets added with .animate())
$(window).on('resize', function(){
  if($(window).width() >= 768) {
    $('.secondary-item, .font-awesome, .main-item').removeAttr('style');
  } 
});



/*---- Main Site:Trip Planner Alert Box ----
*/
$('.letsgo-btn').on('click',function(event){
	event.preventDefault();
	$('.expd-no-planner').slideDown();
});

$('#pizza-submit').on('click', function (){
 	alert("Thanks for signing up! Here's your pizza code: FREEPIZZAYEAH");
 });

/*$('alert').on('close', function (){
 	alert("Thanks for signing up! Here's your pizza code: FREEPIZZAYEAH");
 });*/

/*---- Main Site:Service Status ----
*/

$('.subway-exp').on('click',function (){
	$('.subway-exp').slideUp();
	$('.subway-colps').show();
	$('.subway-exp').hide();
});

$('.subway-colps').on('click',function (){
	$('.subway-colps').slideDown();
	$('.subway-exp').show();
	$('.subway-colps').hide();
});

$('.bus-exp').on('click',function (){
	$('.bus-exp').slideUp();
	$('.bus-colps').show();
	$('.bus-exp').hide();
});

$('.bus-colps').on('click',function (){
	$('.bus-colps').slideDown();
	$('.bus-exp').show();
	$('.bus-colps').hide();
});

$('.lirr-exp').on('click',function (){
	$('.lirr-exp').slideUp();
	$('.lirr-colps').show();
	$('.lirr-exp').hide();
});

$('.lirr-colps').on('click',function (){
	$('.lirr-colps').slideDown();
	$('.lirr-exp').show();
	$('.lirr-colps').hide();
});

$('.metro-exp').on('click',function (){
	$('.metro-exp').slideUp();
	$('.metro-colps').show();
	$('.metro-exp').hide();
});

$('.metro-colps').on('click',function (){
	$('.metro-colps').slideDown();
	$('.metro-exp').show();
	$('.metro-colps').hide();
});

$('.bridges-exp').on('click',function (){
	$('.bridges-exp').slideUp();
	$('.bridges-colps').show();
	$('.bridges-exp').hide();
});

$('.bridges-colps').on('click',function (){
	$('.bridges-colps').slideDown();
	$('.bridges-exp').show();
	$('.bridges-colps').hide();
});

/*---- Corporate Site:News Section ----
*/

$('.load-more').on('click',function (){
	$('.news-row3').slideDown(600);
});


/*Map*/

//if userInput was '7 penn plaza, new york, ny 10001'

$('.letsgo-btn2').on('click',function (){
	var startingPoint = $('.startPoint').val();
	startingPoint = startingPoint.replace(/ /g, '+');

	var endingPoint = $('.endPoint').val();
	endingPoint = endingPoint.replace(/ /g, '+');

	var srcString = 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyCttSTCEc-Av7SBXnVwVOAOG46oylyRVx0&origin='+startingPoint+'&destination='+endingPoint+'&mode=transit&avoid=tolls|highways'
	$('iframe').attr('src', srcString);
});

	
//it ends up 7+penn+plaza



