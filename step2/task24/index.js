var allNode = document.getElementsByTagName("div");
var root = document.getElementById("main");
var showNode = [];
var textNode = [];
var chickNode = null;
var timer = null;

/*去除字符串前后的空格*/
function trimStr(str)
{return str.replace(/(^\s*)|(\s*$)/g,"");}

/*初始化*/
function clearColor(){
	for(var i=0;i<allNode.length;i++){
		allNode[i].style.backgroundColor = "#fff";
	}
}

function startSet(){
	allNode = document.getElementsByTagName("div");
	showNode = [];
	textNode = [];
}

/*遍历树*/
function order(node){
	if(node!=null){
		var text = trimStr(node.firstChild.nodeValue);
		showNode.push(node);
		textNode.push(text);
		var children = node.childNodes;
		var length = children.length;
		for(var i=0;i<length;i++){
			if(children[i].nodeType != 3){
				order(children[i]);
			}
		}
	}
}

/*添加点击事件*/
function addClick(){
	startSet();
	for(var i=0;i<allNode.length;i++){
		addHandler(allNode[i],'click',function(e){
			clearColor();
			this.style.backgroundColor = "red";
			e.stopPropagation();   //阻止事件冒泡
			clickNode = e.target;
		});
	}
}

/*删除节点*/
function delNode(){
	if(clickNode != null){
		clickNode.parentNode.removeChild(clickNode);
		startSet();
		clickNode = null;
	}else{
		alert("请先选择要删除的格子");
		return;
	}
}

/*找到节点*/
function selNode(seltext){
	clearColor();
	clearInterval(timer);
	order(root);
	var i = 0;
	showNode[i++].style.backgroundColor = "red";
	if(seltext == textNode[0]){
				showNode[0].style.backgroundColor = "green";
				clearInterval(timer);
			} 
	timer = setInterval(function(){
		if(i<showNode.length){
			showNode[i-1].style.backgroundColor = "#fff"
			showNode[i++].style.backgroundColor = "red";
			if(seltext == textNode[i-1]){
				showNode[i-1].style.backgroundColor = "green";
				clearInterval(timer);
				alert("找到了");
			} 
		}else if(i==showNode.length){
			showNode[i-1].style.backgroundColor = "#fff";
			alert("没有找到要搜索的内容。");
			clearInterval(timer);
		}
	},500);
}


/*添加节点*/
function addNode(addtext){
	if(clickNode == null){
		alert("请选择要添加的盒子。");
	}
	var addnode = document.createElement("div");
	addnode.innerHTML = addtext;
	addHandler(addnode,'click',function(e){
			clearColor();
			addnode.style.backgroundColor = "red";
			e.stopPropagation();   //阻止事件冒泡
			clickNode = e.target;
		});
	clickNode.appendChild(addnode);
}


var btnDel = document.getElementById("delete");
var btnSel = document.getElementById("select");
var btnAdd = document.getElementById("add");

addClick();

addHandler(btnDel,'click',function(e){
	delNode();
});

addHandler(btnSel,'click',function(e){
	var seltext = document.getElementById("selText").value;
	selNode(seltext);
});

addHandler(btnAdd,'click',function(e){
	var addText = document.getElementById("addText").value;
	addNode(addText);
	startSet();
	clearColor();
});
