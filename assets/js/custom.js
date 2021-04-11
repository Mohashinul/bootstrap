
//$(function(){
  //$(window).scroll(function(){
	//var scrolling = $(this).scrollTop();
    // if (scrolling > 300) {
		 
	//	 $(".navbar").addClass("bg1");
	// }	else {
	//	 $(".navbar").removeClass("bg1");
	// }
	  
 // });	
//});



















//var counters = document.querySelectorAll('.counter');
//var time = 5000;

//counters.forEach(counter =>{
	//    var updateCount = () => {
	//	var target = +counter.getAttribute('data-target')
	 //   var count = +counter.innerText;
	 //   var increment = target / time;
		
		
	//	if(count < target){
			
	//		counter.innerText = Math.ceil(count + increment);
	//		setTimeout(updateCount, 1);
			
		//} else {
			//counter.innerText = target;
		//}
		
	//};
	//updateCount()
	
//})

////////////////////////////
/*var days_show = document.querySelector('#d');
var hours_show = document.querySelector('#h');
var minutes_show = document.querySelector('#m');
var seconds_show = document.querySelector('#s');
var ul = document.querySelector('ul');

//
var new_year_date = new Date('jan 1, 2022 00:00:00').getTime();

//
var timer = setInterval(update, 1000);

//
function update(){
	var present_time = new Date().getTime();
	
	//
	var remaining_time = new_year_date - present_time;
	
	//
	var days = Math.floor(remaining_time / (1000*60*60*24));
	var hours = Math.floor(remaining_time % (1000*60*60*24) / (1000*60*60));
	var minutes = Math.floor(remaining_time % (1000*60*60) / (1000*60));
	var seconds = Math.floor(remaining_time % (1000*60) / (1000));
	
	if (seconds % 2 !== 0){
		seconds_show.style.color = "black";
	}else{
		seconds_show.style.color = "red";
	}
	
	
	days_show.innerHTML = days + "d";
	hours_show.innerHTML = hours + "h";
	minutes_show.innerHTML = minutes + "m";
	seconds_show.innerHTML = seconds + "s";
	
}

*/

//var days_show = document.querySelector('#d');
//var hours_show = document.querySelector('#h');
//var minutes_show = document.querySelector('#m');
//var seconds_show = document.querySelector('#s');
//var ul = document.querySelector('ul');

//set time
//var new_year_date = new Date('jan 1, 2022 00:00:00').getTime();

//create a function(update)
//var timer = setInterval(update, 1000);

//function will update every 1 second
//function update(){
	//present time
	//var present_time = new Date().getTime();
	
	//remaining time
//	var remaining_time = new_year_date - present_time
	
	//count days, hours, minutes, seconds
//	var days = Math.floor(remaining_time / (1000*60*60*24));
//	var hours = Math.floor(remaining_time % (1000*60*60*24) / (1000*60*60));
//	var minutes = Math.floor(remaining_time % (1000*60*60) / (1000*60));
//	var seconds = Math.floor(remaining_time % (1000*60) / (1000));
	
	//checking odd number
//	if (seconds % 2 !== 0){
	//	seconds_show.style.color = "red";
	//}else{
	//	seconds_show.style.color = "black";
	//}
	
//	days_show.innerHTML = days;
//	hours_show.innerHTML = hours;
	//minutes_show.innerHTML = minutes;
	//seconds_show.innerHTML = seconds;
	
	
//}






//$(function(){
	
	
	
	
	
$(function(){
  $(window).scroll(function(){
	var scrolling = $(this).scrollTop();
     if (scrolling > 300) {
		 
	 $(".navbar").addClass("bg1");
	 }	else {
		 $(".navbar").removeClass("bg1");
	 }
	  
  });







	// init Isotope
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.kkr').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});



$('.slid').slick({
	 infinite: true,
     slidesToShow: 4,
    slidesToScroll: 1,
	//centerMode: true,
  //centerPadding: '60px',
  //slidesToShow: 3,
	
	  autoplay: true,
     autoplaySpeed: 2000,
  prevArrow: '<span class="prev_arrow"><i class="fas fa-chevron-right"></i></span>',
  nextArrow: '<span class="next_arrow"><i class="fas fa-chevron-left"></i></span>',
  
responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        //dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
  
  
});









var days_show = document.querySelector('#d');
var hours_show = document.querySelector('#h');
var minutes_show = document.querySelector('#m');
var seconds_show = document.querySelector('#s');
var ul = document.querySelector('ul');

//set time
var new_year_date = new Date('jan 1, 2022 00:00:00').getTime();

//create a function(update)
var timer = setInterval(update, 1000);

//function will update every 1 second
function update(){
	//present time
	var present_time = new Date().getTime();
	
	//remaining time
	var remaining_time = new_year_date - present_time
	
	//count days, hours, minutes, seconds
	var days = Math.floor(remaining_time / (1000*60*60*24));
	var hours = Math.floor(remaining_time % (1000*60*60*24) / (1000*60*60));
	var minutes = Math.floor(remaining_time % (1000*60*60) / (1000*60));
	var seconds = Math.floor(remaining_time % (1000*60) / (1000));
	
	//checking odd number
	if (seconds % 2 !== 0){
		seconds_show.style.color = "red";
	}else{
		seconds_show.style.color = "black";
	}
	
	days_show.innerHTML = days;
	hours_show.innerHTML = hours;
	minutes_show.innerHTML = minutes;
	seconds_show.innerHTML = seconds;
	
	
}



$('.navbar a').on('click', function(safi){
	if(this.hash !== ''){
		safi.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		},1000)
	}
	
});

	
new WOW().init();

  
});

	
	
	
	
	
	
	
	
	
	
	










