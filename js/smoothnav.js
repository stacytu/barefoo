// JavaScript Document
$(document).ready(function(){
	$(".smooth").click(function(){
       var href = $(this).attr("href");
       var pos = $(href).offset().top;
       $("html,body").animate({scrollTop: pos},1000);
	    return false;
	 })
});