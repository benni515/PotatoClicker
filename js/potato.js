
function clickpotato(x) {
	potatoes += potatoesperclick;
	document.getElementById("potatoes").innerHTML = "Potatoes : " + potatoes.toFixed(1);
	x.style.width = "280px";
	x.style.height = "165px";
}
function clickpotatohover(x) {
	x.style.width = "285px";
	x.style.height = "175px";
}
function clickpotatoout(x) {
	x.style.width = "300px";
	x.style.height = "189px";
}

function sell() {
	if (potatoes >= potatoessoldperclick) {
		potatoes -= potatoessoldperclick;
		money += potatoexhangerate * potatoessoldperclick;
		document.getElementById("potatoes").innerHTML = "Potatoes : " + potatoes.toFixed(1);
		document.getElementById("money").innerHTML = "Money : " + money.toFixed(1) + "$";
		soldtimer = 0;
	};
}
var soldtimer = 0;
function timersold() {
	setInterval(function(){
		soldtimer ++;
		if (soldtimer > 120) {
			alert("you didnt sell any potatoes for 2 minutes, 20% of your potatoes rottet, thats " + (potatoes/4).toFixed(1) + " potatoes");
			potatoes -= potatoes/4;
			soldtimer = 0;
		};
	}, 1000);
}

function activatesales() {
	var h = document.getElementById("moneypersec");
	if (h.style.color == "red") {
		h.style.color = "green";
		document.getElementById("activatesales").innerHTML = "Disable Sales";	
		sellactive = true;
	} else {
		document.getElementById("activatesales").innerHTML = "Enable Sales";
		h.style.color = "red";
		sellactive = false;
	}
}

function potatoexhange() {
	setInterval(function(){
		potatoexhangerate = (Math.round(Math.random() * 10) / 10 + 0.1)
		document.getElementById("sellpotatoechange").innerHTML = "Sell potato : " + potatoexhangerate.toFixed(1) + "$" ;
	}, 60000);
}

function plus1(thecost, theplus, name, owned) {
	if (money >= thecost) {
		money -= thecost;
		thecost = thecost * 1.2;
		potatoespersec += theplus;
		owned += 1;
		document.getElementById(name).innerHTML = "Cost : " + thecost.toFixed(1) + "$";
		document.getElementById("potatoespersec").innerHTML = "Potato per/sec : " + potatoespersec.toFixed(1);
		document.getElementById("money").innerHTML = "Money : " + money.toFixed(1) + "$";
		document.getElementById(name + "owned").innerHTML = owned;
		return [thecost, owned];
	} else {
		return [thecost, owned];
	}
}

function sell1(thecost, theplus, name, owned) {
	if (money >= thecost) {
		money -= thecost;
		thecost = thecost * 1.2;
		moneypersec += theplus;
		owned += 1;
		document.getElementById(name).innerHTML = "Cost : " + thecost.toFixed(1) + "$";
		document.getElementById("moneypersec").innerHTML = "Potato sold per/sec: " + moneypersec.toFixed(1) + "$";
		document.getElementById("money").innerHTML = "Money : " + money.toFixed(1) + "$";
		document.getElementById(name + "owned").innerHTML = owned;
		return [thecost, owned];
	} else {
		return [thecost, owned];
	}
}
