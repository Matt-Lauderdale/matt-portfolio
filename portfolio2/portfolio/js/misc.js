// JavaScript Document
$(document).ready(function () {
	
	$('a.fancygallery').fancybox()
	
	
	
	
});//end ready

// JavaScript Document
$(document).ready(function () {
	$('#leftCloud').click(function(){
		
		$("#drawings").animate({top: '500px'}, 1000, 'easeOutBounce'),
     	$('#paintings').delay(200).animate({top:'450px'},1000, 'easeOutBounce'),
        $('#photography').delay(400).animate({top:'400px'},1000, 'easeOutBounce'),
		$('#sculptures').delay(600).animate({top:'350px'},1000, 'easeOutBounce'),
		$("#contactInfo").fadeOut(1000, 'easeInQuad'),
		$('#illustrator, #photoshop, #indesign, #lama').css('top','45px')
		})//end click
	
	
	
});//end ready

$(document).ready(function () {
	$('#centerCloud').click(function(){
		
		$("#indesign").animate({top: '500px'}, 1000, 'easeOutBounce'),
     	$('#photoshop').delay(200).animate({top:'450px'},1000, 'easeOutBounce'),
        $('#illustrator').delay(400).animate({top:'400px'},1000, 'easeOutBounce'),
		$('#lama').delay(600).animate({top:'330px'},1000, 'easeOutBounce'),
		$('#sculptures, #photography, #paintings, #drawings').css('top','45px'),
		$("#contactInfo").fadeOut(1000, 'easeInQuad')
		})//end click
	
	
	
});//end ready
$(document).ready(function () {
	$('#rightCloud').click(function(){
		
		$("#contactInfo").fadeIn(1000, 'easeInQuad'),
		$('#sculptures, #photography, #paintings, #drawings, #illustrator, #photoshop, #indesign, #lama').css('top','45px')
		})//end click
	
	
	
});//end ready