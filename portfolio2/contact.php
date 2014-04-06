<?php session_start(); ?>
<!doctype html>
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"> <!--<![endif]-->
<head>
<script type="text/javascript" charset="utf-8" src="../js/jquery-1.7.1.js"></script>
<script type="text/javascript" charset="utf-8" src="../js/jquery.easing.1.3.js"></script>
<script type="text/javascript" charset="utf-8" src="../js/main.js"></script>
<script type="text/javascript" charset="utf-8" src="../js/jslider-1.0.0.jquery.min.js"></script>
<script type="text/javascript" charset="utf-8" src="../js/jquery.nivo.slider.js"></script>
<script src="../js/modernizr-1.7.min.js"></script>


<link href="css/main.css" rel="stylesheet" type="text/css" media="screen"/>
<link href='http://fonts.googleapis.com/css?family=Oleo+Script:400,700' rel='stylesheet' type='text/css'>
<link href="css/nivo-slider.css" rel="stylesheet" type="text/css" media="screen"/>
<link href="css/form.css" rel="stylesheet" type="text/css" media="screen"/>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<meta http-equiv="content-type" content="cache" />
<meta name="robots" content="INDEX,FOLLOW" />
<meta name="keywords" content="matt lauderdale, matthew lauderdale, matthew douglas lauderdale"/>
<meta name="description" content="marietta web designer, marietta graphic designer, georgia graphic designer" />


	
</head>
<body>
	
<section id="wrapper">
<header><img src="images/initials.png"><section id="name"><h1>Hello, My Name is</h1><h2>Matt Lauderdale</h2> <h1>i am a designer</h1></section></header>

<aside>
	<nav>
		<ul>
        	<li><a href="index.html">Home</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="about.html">About Me</a></li>
            <li><a href="contact.php">Contact</a></li>
        </ul>
    </nav>
    <section id="music">
    	<ul>
        	<li><a href="http://www.pandora.com/station/play/822626107183101075" target="_blank"><img src="images/social_media_icons/pandora.png"></a></li>
    	</ul>
   </section>
</aside>

<section id="content">
        <div id="contact-form" class="clearfix">
            <h1>Get In Touch!</h1>
            <?php
			//init variables
			$cf = array();
			$sr = false;
			
			if(isset($_SESSION['cf_returndata'])){
				$cf = $_SESSION['cf_returndata'];
			 	$sr = true;
			}
            ?>
            <ul id="errors" class="<?php echo ($sr && !$cf['form_ok']) ? 'visible' : ''; ?>">
                <li id="info">There were some problems with your form submission:</li>
                <?php 
				if(isset($cf['errors']) && count($cf['errors']) > 0) :
					foreach($cf['errors'] as $error) :
				?>
                <li><?php echo $error ?></li>
                <?php
					endforeach;
				endif;
				?>
            </ul>
            <p id="success" class="<?php echo ($sr && $cf['form_ok']) ? 'visible' : ''; ?>">Thanks for your message! I will get back to you ASAP!</p>
            <form method="post" action="scripts/process.php">
                <label for="name">Name: <span class="required">*</span></label>
                <input type="text" id="name" name="name" value="<?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['name'] : '' ?>" placeholder="Joe Schmo" required autofocus />
                
                <label for="email">Email Address: <span class="required">*</span></label>
                <input type="email" id="email" name="email" value="<?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['email'] : '' ?>" placeholder="joe@dirtydiapers.com" required />
                
                <label for="telephone">Telephone: </label>
                <input type="tel" id="telephone" name="telephone" value="<?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['telephone'] : '' ?>" />
                
                <label for="message">Message: <span class="required">*</span></label>
                <textarea id="message" name="message" placeholder="Your message must be greater than 20 charcters" required data-minlength="20"><?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['message'] : '' ?></textarea>
                
                <span id="loading"></span>
                <input type="submit" value="SEND!" id="submit-button" />
                <p id="req-field-desc"><span class="required">*</span> indicates a required field</p>
            </form>
            <?php unset($_SESSION['cf_returndata']); ?>
        </div>
    
<section id="socialMedia">
        	<h4>Connect With Me</h4>
			<section id="socialMediaIcons">
           
			<ul>
    			<li><a href="http://www.linkedin.com/pub/matt-lauderdale/29/ba1/755" target="_blank"><img src="images/social_media_icons/linkedin.png"></a></li>
    			<li><a href="https://plus.google.com/u/0/104041106143295045571/posts" target="_blank"><img src="images/social_media_icons/google.png"></a></li>
        		<li><a href="https://twitter.com/#!/laudie02" target="_blank"><img src="images/social_media_icons/twitter.png"></a></li>
    		</ul>
			</section>
        </section>
</section>
<footer>

        <section id="copywright"><h3>&#169; 2012 Matt Lauderdale<br>HTML5, CSS3, and JQuery</h3></section>

</footer>
</body>
</html>