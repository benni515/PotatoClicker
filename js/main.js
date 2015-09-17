//GLOBAL VARIABLES//
var potatoes;
var potatoespersec;
var potatoesperclick;
var potatoessoldperclick;
var money;
var moneypersec;
var potatoexhangerate;
var Peasant;
var Oldfarmer;
var Youngfarmer;
var Potatofarm;
var sellactive;

///////////////////////////
function init() {
	potatoes = 0;
	potatoespersec = 0;
	potatoesperclick = 1;
	potatoessoldperclick = 1;
	money = 0;
	moneypersec = 0;
	potatoexhangerate = 0.5;
	sellactive = true;
	document.getElementById("potatoes").innerHTML = "Potatoes : " + potatoes.toFixed(1);
	document.getElementById("potatoespersec").innerHTML = "Potato per/sec : " + potatoespersec.toFixed(1);
	document.getElementById("money").innerHTML = "Money : " + money.toFixed(1) + "$";
	document.getElementById("moneypersec").innerHTML = "Potato sold per/sec: " + moneypersec.toFixed(1);
	document.getElementById("sellpotatoechange").innerHTML = "Sell potato : " + potatoexhangerate.toFixed(1) + "$" ;
	document.getElementById("sellpotato").innerHTML = "Sell " + potatoessoldperclick + " potatoes";
	update();
	timersold();
	potatoexhange();
	// MANUFACTORING
	Peasant = manifactorcreate("Peasant", 20, 0.1, "Only knows potatoes, potatoes is life.", 0);
	Oldfarmer = manifactorcreate("Old Farmer", 200, 1, "That old farmer who works really slow.", 0);
	Youngfarmer = manifactorcreate("Young Farmer", 500, 2.5, "Atleast better than the old farmer.", 0);
	Potatofarm = manifactorcreate("Potato farm", 1000, 5, "Outdoor good place to grow potatoes.", 0);
	GreenHouse = manifactorcreate("GreenHouse", 2000, 10, "Fancy house just for your potatoes", 0);
	//DISTRIBUTION
	Hobo = distributioncreate("Hobo", 30, 0.1, "Walks around the neighbourhood selling potatoes",0);
}

function manifactorcreate(name,cost,potatoepersec,description,owned) {
	var div1 = document.createElement('div');
	var div2 = document.createElement('div');
	div1.className = "divmanufactoring";
	div2.className = "divmanufactoring";
	var h = document.createElement('div');
	var h2 = document.createElement('h2');
	var textnode = document.createTextNode(name);
	h2.className = "h2manufactoring";
	h2.appendChild(textnode);
	var p = document.createElement('p');
	p.className = "pmanufactoring";
	textnode = document.createTextNode("Cost : " + cost + "$");
	p.appendChild(textnode);
	p.id = name;
	var p2 = document.createElement('p');
	p.className = "pmanufactoring";
	textnode = document.createTextNode("Per/sec : " +  potatoepersec);
	p2.appendChild(textnode);
	var p3 = document.createElement('p');
	p3.className = "descriptionText";
	textnode = document.createTextNode(description);
	var btn = document.createElement('button');
	var t = document.createTextNode("Buy 1");
	btn.appendChild(t);
	btn.className="myButton";
	btn.style.cssText = "margin-top: 5px; margin-right: 5px;";
	var namefunction = "plus1";
	btn.onclick = function(){ 
		var stuff = window[namefunction](cost, potatoepersec, name,owned);
		cost = stuff[0];
		owned = stuff[1];
	};
	var btn2 = document.createElement('button');
	var t2 = document.createTextNode('Buy 10');
	btn2.appendChild(t2);
	btn2.className="myButton";
	btn2.style.cssText = "margin-top: 5px;";
	p3.appendChild(textnode);
	var h1owned = document.createElement('h1');
	var textnode1 = document.createTextNode(owned);
	h1owned.appendChild(textnode1);
	h1owned.className = "potatoestext";
	h1owned.id = name + "owned";
	div1.appendChild(h2);
	div1.appendChild(p);
	div1.appendChild(p2);
	div1.appendChild(p3);
	div2.appendChild(h1owned);
	div2.appendChild(btn);
	div2.appendChild(btn2);
	h.appendChild(div1);
	h.appendChild(div2);
	h.className = "manufactoring";
	document.getElementById('Manufacturing').appendChild(h);
}
function distributioncreate(name,cost,potatoepersec,description,owned) {
	var div1 = document.createElement('div');
	var div2 = document.createElement('div');
	div1.className = "divmanufactoring";
	div2.className = "divmanufactoring";
	var h = document.createElement('div');
	var h2 = document.createElement('h2');
	var textnode = document.createTextNode(name);
	h2.className = "h2manufactoring";
	h2.appendChild(textnode);
	var p = document.createElement('p');
	p.className = "pmanufactoring";
	textnode = document.createTextNode("Cost : " + cost + "$");
	p.appendChild(textnode);
	p.id = name;
	var p2 = document.createElement('p');
	p.className = "pmanufactoring";
	textnode = document.createTextNode("Per/sec : " +  potatoepersec);
	p2.appendChild(textnode);
	var p3 = document.createElement('p');
	p3.className = "descriptionText";
	textnode = document.createTextNode(description);
	var btn = document.createElement('button');
	var t = document.createTextNode("Buy 1");
	btn.appendChild(t);
	btn.className="myButton";
	btn.style.cssText = "margin-top: 5px; margin-right: 5px;";
	var namefunction = "sell1";
	btn.onclick = function(){ 
		var stuff = window[namefunction](cost, potatoepersec, name,owned);
		cost = stuff[0];
		owned = stuff[1];
	};
	var btn2 = document.createElement('button');
	var t2 = document.createTextNode('Buy 10');
	btn2.appendChild(t2);
	btn2.className="myButton";
	btn2.style.cssText = "margin-top: 5px;";
	p3.appendChild(textnode);
	var h1owned = document.createElement('h1');
	var textnode1 = document.createTextNode(owned);
	h1owned.appendChild(textnode1);
	h1owned.className = "potatoestext";
	h1owned.id = name + "owned";
	div1.appendChild(h2);
	div1.appendChild(p);
	div1.appendChild(p2);
	div1.appendChild(p3);
	div2.appendChild(h1owned);
	div2.appendChild(btn);
	div2.appendChild(btn2);
	h.appendChild(div1);
	h.appendChild(div2);
	h.className = "manufactoring";
	document.getElementById('Distribution').appendChild(h);
}

function update() {
	setInterval(function(){
		potatoes += +((potatoespersec/10).toFixed(2));
		document.getElementById("potatoes").innerHTML = "Potatoes : " + potatoes.toFixed(1);
		if (moneypersec/10 <= potatoes && sellactive) {
			money += +(((moneypersec/10) * potatoexhangerate).toFixed(3));
			potatoes -= +((moneypersec/10).toFixed(2));
			document.getElementById("money").innerHTML = "Money : " + money.toFixed(1) + "$";
		};
	}, 100);
}
