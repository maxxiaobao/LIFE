var timer = null;
var root = document.getElementById("container"); 
var showNode = [];
var btnF = document.getElementById("first");
var btnM = document.getElementById("middle");
var btnL = document.getElementById("last");

/* 绑定处理事件 */
function addHandler(element,type,Handler){
	if(element.addEventListener){
		element.addEventListener(type,Handler,false);
	}else if(element.attachEvent){
		element.attachEvent('on'+type,Handler);
	}else{
		element['on'+type] = Handler;
	}
}


/*先序遍历*/

function firOrder(node){
	if(node){
		showNode.push(node);
		firOrder(node.firstElementChild);
		firOrder(node.lastElementChild);
	}
}


/*中序遍历*/

function midOrder(node){
	if(node){
		midOrder(node.firstElementChild);
		showNode.push(node);
		midOrder(node.lastElementChild);
	}
}

/*后序遍历*/

function lastOrder(node){
	if(node){
		lastOrder(node.firstElementChild);
		lastOrder(node.lastElementChild);
		showNode.push(node);
	}
}


/* 所有背景设置为白色 */

function set(){
	for(var i=0;i<showNode.length;i++){
		showNode[i].style.backgroundColor = "#fff";
	}
}


/* 遍历动画 */

function show(){
	set();
	var i = 0;
	showNode[i++].style.backgroundColor = "red";
	timer = setInterval(function(){
		if(i<showNode.length){
			showNode[i-1].style.backgroundColor = "#fff";
			showNode[i++].style.backgroundColor = "red";
		}else{
			showNode[i-1].style.backgroundColor = "#fff";
			clearInterval(timer);
			showNode = [];    // 数组置空，否则下次遍历会在原数组上添加
		}
	},document.getElementById("speed").value);
}


addHandler(btnF,"click",function(){
	firOrder(root);
	show();
});

addHandler(btnM,'click',function(){
	midOrder(root);
	show();
});

addHandler(btnL,'click',function(){
	lastOrder(root);
	show();
});
/*function addHandler(element,type,Handler){
	if(element.addEventListener){
		element.addEventListener(type,Handler,false);
	}else if(element.attachEvent){
		element.attachEvent('on'+type,Handler);
	}else{
		element['on'+type] = Handler;
	}

}

var timer = null;  // 计时器

var root = document.getElementById("container");
var btnF = document.getElementById("first");
var btnM = document.getElementById("middle");
var btnL = document.getElementById("last");
var showNode = [];

//先序遍历
function firOrder(node){
	if(node != null){
		showNode.push(node);
		console.log("jiayi");
		firOrder(node.firstElementChild);
		firOrder(node.lastElementChild);
	}
}

//中序遍历
function midOrder(node){
	if(node != null){
		midOrder(node.firstElementChild);
		showNode.push(node);
		midOrder(node.lastElementChild);
	}
}

//后序遍历
function lastOrder(node){
	if(node != null){
		lastOrder(node.firstElementChild);
		lastOrder(node.lastElementChild);
		showNode.push(node);
	}
}

function reset(){
	for(var j=0;j<showNode.length;j++){
		showNode[j].style.backgroundColor = "#fff";
	}
}

function show(){
	var i = 0;
	reset();
	showNode[i++].style.backgroundColor = "red";
	timer = setInterval(function(){
		if(i<showNode.length){
			showNode[i-1].style.backgroundColor = "#fff";
			showNode[i].style.backgroundColor = "red";
			++i;
		} else {
			console.log(showNode[i]);
			showNode[i-1].style.backgroundColor = "#fff";
			showNode = [];
			clearInterval(timer);
		}
	},500);
}

addHandler(btnF,"click",function(){
	firOrder(root);
	show();
});

addHandler(btnM,"click",function(){
	midOrder(root);
	show();
});

addHandler(btnL,"click",function(){
	lastOrder(root);
	show();
});
*/