
/*数字数组和颜色数组*/

var numArray = [23,66,54,71,82,94,38,90,17];

var color = ["#FF83FF","#FFE183","#88DB9C","#88B8DB","#8894DB","#A3A1C2","#8FFF73","#FFF773","#EB8DEA"];

/*绑定事件处理程序*/
function addHandler(element,type,Handler){
	if(element.addEventListener){
		element.addEventListener(type,Handler,false);
	}else if(element.attachEvent){
		element.attachEvent(type,Handler);
	}else{
		element['on'+type] = Handler;
	}
}

/*初始化*/
function start(){
	var all = document.getElementById("all");
	for(var i=0;i<numArray.length;i++){
			all.appendChild(addSpan(i));  // 将数组里的数字用块状表示出来
	}
}

function addSpan(i){
		var node = document.createElement("div");
		var col = Math.floor(numArray[i] / 10);
		node.style.width = "40px";
		node.style.height = numArray[i] + "px";
		node.style.backgroundColor = color[col-1];
		node.style.float = "left";
		node.style.marginLeft = "20px";
		node.style.marginTop = 200 - numArray[i] + "px";
		node.innerHTML = numArray[i];
		node.style.textAlign = "center";
		node.style.fontSize = "16px";
		node.style.color = "#fff";
		return node;
}

/*
* 左侧添加
*/

function addLeft(){
	var num = document.getElementById("num").value;
	var all = document.getElementById("all");
	if(num<10 || num > 100){
		alert("请输入10-100的数字！");
	}else{
		var length = numArray.length;
		numArray[length] = num;
		all.insertBefore(addSpan(numArray.length-1),all.firstChild);
	}
}

/*
* 右侧添加
*/

function addRight(){
	var num = document.getElementById("num").value;
	var all = document.getElementById("all");
	if(num<10 || num > 100){
		alert("请输入10-100的数字！");
	}else{
		var length = numArray.length;
		numArray[length] = num;
		all.appendChild(addSpan(numArray.length-1));
	}
}

/*
* 左侧删除
*/

function delLeft(){
	var all = document.getElementById("all");
	all.removeChild(all.firstChild);
}

/*
* 右侧删除
*/

function delRight(){
	var all = document.getElementById("all");
	all.removeChild(all.lastChild);
}

function Sort(){
	var all =  document.getElementById('all');
	for(var i=0;i<numArray.length-1;i++){   // 冒泡排序
		all.removeChild(all.firstChild);
		for(var j=i+1;j<numArray.length;j++){
			if(numArray[i]>numArray[j]){
				var temp = numArray[i];
				numArray[i] = numArray[j];
				numArray[j] = temp;
			}
		}
	}
	all.removeChild(all.firstChild);
	start();
}

/* 给按钮绑定事件 */
var btnaddL = document.getElementById("add-left");
var btnaddR = document.getElementById("add-right");
var btndelL = document.getElementById("del-left");
var btndelR = document.getElementById("del-right");
var btnsort = document.getElementById("sortway");
start();
addHandler(btnaddL,'click',addLeft);
addHandler(btnaddR,'click',addRight);
addHandler(btndelL,'click',delLeft);
addHandler(btndelR,'click',delRight);
addHandler(btnsort,'click',Sort);