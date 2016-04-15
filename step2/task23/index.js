
var showNode = [];
var textNode = [];
var isSearch = false;
var sText = null;
var root = document.getElementsByTagName("div")[0];
var allNode = document.getElementsByTagName("div");
var timer = null;

function trimStr(str)
{return str.replace(/(^\s*)|(\s*$)/g,"");}


/* 深度优先遍历 */
function deepOrder(node){
	if(node!=null){
		var children = node.childNodes;
		var length = children.length;
		for(var i=0;i<length;i++){
			if(children[i].nodeType != 3){
				showNode.push(children[i]);
				textNode.push(children[i].firstChild.nodeValue);
				deepOrder(children[i]);
			}
		}
	}
}

/*广度优先遍历*/
function breadOrder(node){
	if(node!=null){
		var children = node.childNodes;
		var length = children.length;
		for(var i=0;i<length;i++){
			if(children[i].nodeType != 3){
				showNode.push(children[i]);
				textNode.push(children[i].firstChild.nodeValue);
			}
		}
		for(var i=0;i<length;i++){
			if(children[i].nodeType != 3){
				breadOrder(children[i]);
			}
		}
	}
}

/* 初始设置背景色为白色 */
function startSet(){
	for(var i=0;i<allNode.length;i++){
		allNode[i].style.backgroundColor = "#fff";
	}
}

/*数组置空*/
function setNull(){
	clearInterval(timer);
	showNode = [];
	textNode = [];
}

/*添加根节点*/
function addRoot(){
	showNode.push(root);
	textNode.push(root.firstChild.nodeValue);
}

/*查询遍历*/
function seaF(isS,i){
	if(isS){
		if(trimStr(textNode[i-1]) == sText){
			showNode[i-1].style.backgroundColor = "green";
			setNull();
		}else if(i >= showNode.length){
			alert("没有查询到要查询内容");
		}
	}

}

 /*展示遍历*/
function show(){
	startSet();
	var i=0;
	showNode[i++].style.backgroundColor = "red";
	seaF(isSearch,i);
	timer = setInterval(function(){
		if(i<showNode.length){
			showNode[i-1].style.backgroundColor = "#fff";
			showNode[i++].style.backgroundColor = "red";
			seaF(isSearch,i);
		}else{
			showNode[i-1].style.backgroundColor = "#fff";
			setNull();
		}
	},500);
}

/*绑定事件*/

function addHandler(element,type,Handler){
	if(element.addEventListener){
		element.addEventListener(type,Handler,false);
	}else if(element.attachEvent){
		element.attachEvent('on'+type,Handler);
	}else{
		element['on'+type] = Handler;
	}
}

var btnDO = document.getElementById("deepbtn");
var btnBO = document.getElementById("breadbtn");
var btnDS = document.getElementById("deepBtnS");
var btnBS = document.getElementById("breadBtnS");

addHandler(btnDO,'click',function(){
	isSearch = false;
	setNull();
	addRoot();
	deepOrder(root);
	show();
});

addHandler(btnBO,'click',function(){
	isSearch = false;
	setNull();
	addRoot();
	breadOrder(root);
	show();
});

addHandler(btnDS,'click',function(){
	sText = document.getElementById("search").value;
	isSearch = true;
	setNull();
	addRoot();
	deepOrder(root);
	show();
});

addHandler(btnBS,'click',function(){
	sText = document.getElementById("search").value;
	isSearch = true;
	setNull();
	addRoot();
	breadOrder(root);
	show();
});