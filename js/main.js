$(document).ready(function() {
		$(function() {
			$('body').hide()
			$(window).load(function(){
				$('body').fadeIn(1000, function(){
				});
			});
		});
		
		//	  FLUID	TEXT;
  		$("#title, .contact").fitText();
  		$(".nav-li").fitText(0.5);
		$(".portfolio-item").fitText(0.3);
		$("h2").fitText(2.3);
		$("#info").fitText(5.0);
			
		


		//scrollto hash;

$('.nav-li a').click(function(){
    var navHeight = $('.nav-wrapper').outerHeight();
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - navHeight
    }, 500);
    return false;
});
 
  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }
 
		//projects menu;

	$('.portfolio-item > a').on('click',function(e){
		 if ($(this).parent().hasClass('open')) {
            $(this).parent().removeClass('open')
            $('.recent-projects').removeClass('open')
        }else
		  {	
		  	
            $(this).parent().addClass('open');
            $(this).parent().siblings().removeClass('open');
            $('.recent-projects').addClass('open');
			$('.recent-projects').html($('.portfolio-item.open > .item-content').html());
		  };
		  e.preventDefault();
		})


		
	//		FANCYBOX;

	$('.fancygallery').fancybox({
        'mouseWheel'    :    true,
        'openEffect'    :   'elastic',
        'closeEffect'   :   'elastic',
        'nextEffect'    :   'fade',
        'prevEffect'    :   'fade',
        'openOpacity'   :   true,
        'closeOpacity'   :   true,
        'cyclic'        :   false, // 'loop' to 'cyclic'
    });
	//FORM VALIDATION
	

    
    //if submit button is clicked
    
		
		
       $('#submit').click(function () {        
        
        //Get the data from all the fields
        var name = $('input[name=name]');
        var email = $('input[name=email]');
        var website = $('input[name=website]');
        var comment = $('textarea[name=comment]');
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
		var emailVal = email.val();
		//Simple validation to make sure user entered something
        //If error found, add hightlight class to the text field
		
        if (name.val()=='') {
            name.addClass('hightlight');
            return false;
        } else name.removeClass('hightlight');
        
        if (email.val()=='' || !emailReg.test(emailVal)) {
            email.addClass('hightlight');
            return false;
        } else email.removeClass('hightlight');
        
        if (comment.val()=='') {
            comment.addClass('hightlight');
            return false;
        } else comment.removeClass('hightlight');
        
        //organize the data properly
        var data = 'name=' + name.val() + '&email=' + email.val() + '&website='
        + website.val() + '&comment='  + encodeURIComponent(comment.val());
        
        //disabled all the text fields
        $('.text').attr('disabled','true');
        
        //show the loading sign
        $('.loading').show();
        
        //start the ajax
        $.ajax({
            //this is the php file that processes the data and send mail
            url: "scripts/process.php",    
            
            //GET method is used
            type: "GET",
            //pass the data            
            data: data,        
            
            //Do not cache the page
            cache: false,
            
            //success
            success: function (html) {                
                //if process.php returned 1/true (send mail success)
                if (html==1) {                    
                    //hide the form
                    $('.form').fadeOut('slow');                    
                    
                    //show the success message
                    $('.done').fadeIn('slow');
                    
                //if process.php returned 0/false (send mail failed)
                } else alert('Sorry, unexpected error. Please try again later.');                
            }        
        });
        
        //cancel the submit button default behaviours
        return false;
    });    


   

});		
// <![CDATA[;
var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-35764279-2']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
// ]]>;