"use strict";

let elem = document.getElementById("bounce");
let container = document.getElementById("bouncebox");

$(elem).css("height",window.innerHeight/5+"px");

let x=$(container).width()/2-$(elem).width()/2;
let y=$(container).height()/2-$(elem).height()/2;
let velX=0,velY=0,angle=0;
getVels();

$(container).css("text-align","left");
$(elem).css("position","relative");


function loop(){
	x+=velX;
	y+=velY;
	angle=(angle+1)%360;
	
	$(elem).css("transform","rotate("+angle+"deg)");
	
	$(elem).css("left",x+"px");
	$(elem).css("top",y+"px");
	if(x>$(container).width()-$(elem).width()-10 || x<10){
		velX*=-1;
		getY();
	}
	else if(y>$(container).height()-$(elem).height()-20 || y<10){
		velY*=-1;
		getX();
	}
}

function getVels(){
	getX();
	getY();
}

function getY(){
	velY=Math.round(Math.random()*10-5);
}

function getX(){
	velX=Math.round(Math.random()*10-5);
}

setInterval(loop,10);

window.addEventListener('resize',resize);

function resize(){
	x=$(container).width()/2-$(elem).width()/2;
	y=$(container).height()/2-$(elem).height()/2;
	$(elem).css("height",window.innerHeight/5+"px");
}