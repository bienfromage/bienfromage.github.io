//requires JQuery 3.3.1
//carousel script
//uses a container div with id carousel, a elements around imgs,
//and .carousel-dot-flexbox and .carousel-dot ids for displaying slide indicators

"use strict";

let size = 0;
let showingId = 0;

$('#carousel').css('height',$('#carousel a img').css('height'));
$('.carousel-dot-container').css('top',$('#carousel a img').height()-60+"px");

$('#carousel > a').each(function() {//label each link/image in the div with a number
  this.id=size+"";
  $(this).css("z-index",size);
  size++;
});

if(size > 0){
  for(let i = 0; i < size; i++){//add indicator dots to show what slide the carousel is on
    $('.carousel-dot-flexbox').append("<div class='carousel-dot'></div>");
  }
  
  setInterval(()=>{//switch between slides/dots
    $('#'+showingId).fadeOut();
    showingId++;
    if(showingId === size)
    showingId=0;
    $('#'+showingId).fadeIn();
  },1000);
}else{
  console.error("No images found to display in carousel.");
}