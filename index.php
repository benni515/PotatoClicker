<!DOCTYPE html>
<html>
<head>
	<title> Potato Clicker </title>
	<meta name="description" content="Potato clicker. A fun and challenging game for all ages">
	<meta name="keywords" content="potato,click,game,javascript,cookie clicker,fun">
	<meta name="author" content="Bernhard linn">
	<meta charset="utf-8";>
	<link rel="shortcut icon" href="img/logo.png">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script src="js/main.js"></script>
	<script src="js/potato.js"></script>
</head>
<body onload="potatoexhange()">
<?php include_once("../php/analyticstracking.php") ?>
	<div class="container">
		<div class="left">
			<h1 class="lefth1"> Distribution </h1>
			<div id="Distribution">
				
			</div>
		</div>
		<div class="middle">
			<h1 id="money" class="potatoestext"></h1>
			<h3 id="moneypersec" class="moneytextmoney"></h3>
			<h1 id="potatoes" class="potatoestext"></h1>
			<h3 id="potatoespersec" class="potatoestext"></h3>
			<div class="potatoContainer">
				<img src="img/potato.png" class="potato" onmousedown="clickpotato(this)" onmouseover="clickpotatohover(this)" onmouseout="clickpotatoout(this)" onmouseUp="clickpotatohover(this)">
			</div>
			<div class="buttonmid">
				<button onmousedown="sell()" class="myButton" id="sellpotato"></button>
				<button onmousedown="activatesales()" class="myButton" id="activatesales"> Disable Sales </button>
			</div>
			<div class="buttonmid">
				<h2 class="potatoestext"> Potato Exchange rate </h2> 
				<h3 class="potatoestext" id="sellpotatoechange"> </h3> 
			</div>
		</div>
		<div class="right">
			<h1 class="righth1"> Manufacturing </h1>
			<div id="Manufacturing">
				
			</div>
		</div>
	</div>
</body>
<script>
init();
</script>
</html>