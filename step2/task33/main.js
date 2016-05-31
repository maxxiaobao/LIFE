window.onload = function() {
	makeBox();
	var goBtn = document.getElementById("go");
	var leftBtn = document.getElementById("left");
	var rightBtn = document.getElementById("right");
	var backBtn = document.getElementById("back");
	addHandler(leftBtn,'click',turnLeft);
	addHandler(rightBtn,'click',turnRight);
	addHandler(backBtn,'click',turnBack);
	addHandler(goBtn,'click',getStart);
}

//度数
var x = 0;
var y = 0;

//哪一块
var m = 5;
var n = 5;

// 那个方向
var way = 1; // 1-left 2-up 3-right 4-down

function getBox(m, n) {
	return document.getElementById("box-" + m + "-" + n);
}

function makeBox() {
	var main = document.getElementById("main");
	for (var i = 0; i <= 10; i++) {
		for (var j = 0; j <= 10; j++) {
			var box = document.createElement("div");
			if (i == 0 && j != 0) {
				box.innerHTML = j;
				box.style.border = "1px solid #fff";
			} else if (j == 0 && i != 0) {
				box.innerHTML = i;
				box.style.border = "1px solid #fff";
			} else if (i == 0 && j == 0) {
				box.innerHTML = "";
				box.style.border = "1px solid #fff";
			} else {
				box.style.border = "1px solid #ccc";
				box.style.position = "relative";
			}
			if (i == 5 && j == 5) {
				box.style.backgroundColor = "red";
				var small = document.createElement("div");
				small.id = "small";
				small.style.width = "10px";
				small.style.height = "30px";
				small.style.backgroundColor = "blue";
				small.style.position = "absolute";
				small.style.top = "0px";
				small.style.left = "0px";
				box.appendChild(small);
			}
			box.className = "box";
			box.id = "box-" + j + "-" + i;
			box.style.width = "30px";
			box.style.height = "30px";
			main.appendChild(box);
		}
	}
}

function turnRight() {
	x++;
	var small = getBox(m, n);
	small.style.transform = "rotate(" + 90 * x + "deg)";
	small.style.transition = "0.5s";
	if (way == 4) {
		way = 1;
	} else {
		way++;
	}

}
function turnLeft() {
	x--;
	var small = getBox(m, n);
	small.style.transform = "rotate(-" + 90 * (x < 0 ? (-1) * x : x) + "deg)";
	small.style.transition = "0.5s";
	if (way == 1) {
		way = 4;
	} else {
		way--;
	}
}

function turnBack(){
	x = x+2;
	getBox(m,n).style.transform = "rotate(" + 90 * (x < 0 ? (-1) * x : x) + "deg)";
	getBox(m,n).style.transition = "0.5s";
	switch(way){
		case 1:
			way = 3;
			break;
		case 2:
			way = 4;
			break;
		case 3:
			way = 1;
			break;
		case 4:
			way = 2;
			break;
	}
}

function action() {
	var oldBox = getBox(m, n);
	if (way == 1) {
		//左移 m-1 ，n不变
		if (m == 1) {
			alert("不能再移动啦~");
		} else {
			var newBOx = getBox(--m, n);
			move(oldBox, newBOx);
		}
	}
	if (way == 2) {
		//上移 m不变，n-1
		if (n == 1) {
			alert("不能再移动啦");
		} else {
			var newBOx = getBox(m, --n);
			move(oldBox, newBOx);
		}
	}
	if (way == 3) {
		//右移 m+1,不变
		if (m == 10) {
			alert("不能再移动啦");
		} else {
			var newBOx = getBox(++m, n);
			move(oldBox, newBOx);
		}
	}
	if (way == 4) {
		//下移 m不变 n+1
		if (n == 10) {
			alert("不能再移动啦");
		} else {
			var newBOx = getBox(m, ++n);
			move(oldBox, newBOx);
		}
	}
}

function getStart() {
		var command = document.getElementById("command").value;
		switch(command){
			case "":
				alert("请输入指令！");
				break;
			case "LEFT":
				turnLeft();
				break;
			case "RIGHT":
				turnRight();
				break;
			case "BACK":
				turnBack();
			case "GO":
				action();
				break;
		}
	}

function move(oldBox, newBox) {
	newBox.innerHTML = oldBox.innerHTML;
	oldBox.innerHTML = null;
	oldBox.style.backgroundColor = "#fff";
	newBox.style.backgroundColor = "red";
	newBox.style.transform = "rotate(" + 90 * x + "deg)";
}

function addHandler(element,type,handler){
	if(element.addEventListener){
		element.addEventListener(type,handler,false);
	}else if(element.attachEvent){
		element.attachEvent("on"+type,handler);
	}else{
		element['on'+type] = handler;
	}
}