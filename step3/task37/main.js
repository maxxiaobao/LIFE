window.onload = function() {
	var tip = document.getElementById("tip");
	var closeBtn = document.getElementById("close");
	var showBtn = document.getElementById("show");

	coverDiv();
	move();
	
	addHandler(closeBtn, 'click', tipDisplay);
	addHandler(showBtn, 'click', tipShow);
}


function tipDisplay() {
	tip.style.display = "none";
	document.getElementById("cover").style.display = "none";
}

function tipShow() {
	tip.style.display = "block";
	document.getElementById("cover").style.display = "block";
}

function coverDiv() {
	var probg = document.createElement("div");
	probg.setAttribute("id", "cover");
	probg.style.width = "100%";
	probg.style.height = "100%";
	probg.style.background = "#000";
	probg.style.position = "fixed";
	probg.style.left = "0px";
	probg.style.top = "0px";
	probg.style.opacity = "0.25"

	document.body.appendChild(probg);
	probg.onclick = function(){
		tip.style.display = "none";
		probg.style.display = "none";
	}
}

function move() {
	var oTitle = document.getElementById("title");
	oTitle.onmousedown = function(event) {
		var disX = event.clientX - tip.offsetLeft;
		var disY = event.clientY - tip.offsetTop;
		moveTip(event, disX, disY);
	}
	oTitle.onmouseup = function(){
		document.onmousemove = null;
	}

}

function moveTip(e, x, y) {
	document.onmousemove = function(event) {
		tip.style.left = event.clientX + 125 - x + "px";
		tip.style.top = event.clientY + 75 - y + "px";
	}
}