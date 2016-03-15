/*---- Main Site:Trip Planner Alert Box ----
*/
$('.letsgo-btn').on('click',function(event){
	event.preventDefault();
	$('.expd-no-planner').slideDown();
});

$('#pizza-submit')
	.on('click', function (){
 	alert("Thanks for Signing Up! Here's your pizza code: FREEPIZZAYEAH");
 });

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
/*var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var chicago = new google.maps.LatLng(40.759903, -73.985260);
  var mapOptions = {
    zoom:7,
    center: chicago
  }
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById("directionsPanel"));
}

function calcRoute() {
  var start = document.getElementById("start").value;
  var end = document.getElementById("end").value;
  var request = {
    origin:start,
    destination:end,
    travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}*/

var userInput;
var directions = originAddress.replace(/ /g, '+')



