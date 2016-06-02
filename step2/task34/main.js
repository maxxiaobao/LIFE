window.onload = function() {
	makeBox();
	var goBtn = document.getElementById("go");
	addHandler(goBtn,'click',function(){
		var command = document.getElementById("command").value;
		GO(command);
	});
}

//在那一块？
var m = 5;
var n = 5;

//方向
var　 way = 1; // 1->left 2->up 3->right 4->bottom

//度数
var c = 0;

function getBox(m, n) {
	return document.getElementById("box-" + m + "-" + n);
}

function turnLeft() {
	if (way == 1) {
		way = 4;
	} else {
		way--;
	}
	c--;
	getBox(m, n).style.transform = "rotate(-" + 90 * (c < 0 ? (-1) * c : c) + "deg)";
	getBox(m, n).style.transition = "1s";
}

function turnRight() {
	if (way == 4) {
		way = 1;
	} else {
		way++;
	}
	c++;
	getBox(m, n).style.transform = "rotate(" + 90 * c + "deg)";
	getBox(m, n).style.transition = "1s";
}

function turnBack() {
	switch (way) {
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
	c = c + 2;
	getBox(m, n).style.transform = "rotate(" + 90 * (c < 0 ? (-1) * c : c) + "deg)";
	getBox(m, n).style.transition = "1s";
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

//左移 m-1,n不变
function moveLeft() {
	if (m == 1) {
		alert("不能再移动了！");
		return;
	}
	var oldBox = getBox(m, n);
	var newBox = getBox(--m, n);
	action(oldBox,newBox);
}

//上移 m不变，n-1
function moveUp() {
	if (n == 1) {
		alert("不能再移动了！");
		return;
	}
	var oldBox = getBox(m, n);
	var newBox = getBox(m, --n);
	action(oldBox,newBox);
}

//右移 ++m，n不变
function moveRight() {
	if (m == 10) {
		alert("不能再移动了！");
		return;
	}
	var oldBox = getBox(m, n);
	var newBox = getBox(++m, n);
	action(oldBox,newBox);
}

//下移 m不变，n++
function moveBottom() {
	if (n == 10) {
		alert("不能再移动了！");
		return;
	}
	var oldBox = getBox(m, n);
	var newBox = getBox(m, ++n);
	action(oldBox,newBox);
}

//向左
function leftAction() {
	if (way == 1) {

	} else if (way == 2) {
		turnLeft();
	} else if (way == 3) {
		turnBack();
	} else {
		turnRight();
	}
	var timer = setTimeout("moveLeft()",1000);
}

//向上
function upAction() {
	if (way == 1) {
		turnRight();
	} else if (way == 2) {

	} else if (way == 3) {
		turnLeft();
	} else {
		turnBack();
	}
	var timer = setTimeout("moveUp()",1000);
}

//向右
function rightAction(){
	if(way == 1){
		turnBack();
	}else if(way == 2){
		turnRight();
	}else if(way == 3){

	}else{
		turnLeft();
	}
	var timer = setTimeout("moveRight()",1000);
}

//向下
function bottomAction(){
	if(way == 1){
		turnLeft();
	}else if(way == 2){
		turnBack();
	}else if(way == 3){
		turnRight();
	}else{

	}
	var timer = setTimeout("moveBottom()",1000);
}

//执行
function GO(command){
	switch(command){
		case "TRALEF":
			moveLeft();
			break;
		case "TRATOP":
			moveUp();
			break;
		case "TRARIG":
			moveRight();
			break;
		case "TRABOT":
			moveBottom();
			break;
		case "MOVLEF":
			leftAction();
			break;
		case "MOVTOP":
			upAction();
			break;
		case "MOVRIG":
			rightAction();
			break;
		case "MOVBOT":
			bottomAction();
			break;
		default:
			alert("找不到输入的命令！");
	}
}

function action(oldBox,newBox){
	newBox.innerHTML = oldBox.innerHTML;
	oldBox.innerHTML = null;
	oldBox.style.backgroundColor = "#fff";
	newBox.style.backgroundColor = "red";
	newBox.style.transform = "rotate(" + 90 * c + "deg)";
}

function addHandler(element,type,handler){
	if(element.addEventListener){
		element.addEventListener(type,handler,false);
	}else if(element.attachEvent){
		element.attachEvent('on'+type,handler);
	}else{
		element['on'+type] = handler;
	}
}


