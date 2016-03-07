/*---- Main Site:Trip Planner Alert Box ----
*/

$('#letsgo-btn')
	.on('click', function (){
 	alert("Trip Planner Coming Soon!");
 	 $('#letsgo-btn').html('No Sign Ups!');
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




