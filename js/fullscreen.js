// JavaScript Document

var winWidth,winHeight;
$(document).ready(function() {
	winWidth=$(window).width();
	winHeight=$(window).height();
	
	if(winWidth/winHeight<1920/1080){
		$("#videobg").css("height",winHeight);		
		$("#videobg").css("width",winHeight*(1920/1080));
		
		$("#videoend").css("height",winHeight);		
		$("#videoend").css("width",winHeight*(1920/1080));
	}
	else{
		$("#videobg").css("width","100%");
		$("#videobg").css("height",winWidth/(1920/1080));
		
		$("#videoend").css("width","100%");
		$("#videoend").css("height",winWidth/(1920/1080));
		
	}

})

$(window).scroll(function(){
	 var ScrollTop=$(window).scrollTop();   //滚动的距离
	 var VideoEndOffset=$("#videoend").offset().top;   
	 var videobg = document.getElementById("videobg"); 	
	 var videoend = document.getElementById("videoend"); 
		
	if(ScrollTop>winHeight*0.7){
		videobg.pause();
	}else{
		videobg.play();
	}
	
	if(ScrollTop+winHeight*0.5>VideoEndOffset){
		videoend.play();
	}else{
		videoend.pause();
	}
	
		 
})
