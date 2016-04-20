var root = document.getElementById("root");
var liNodes = document.getElementsByTagName('li');
var showNode = [];
var textNode = [];
var clickLi = null;


/*颜色重置*/
function setColor(){
	//遍历树
	for(var i=0;i<liNodes.length;i++){
		liNodes[i].style.color = "black";
	}
}


/*添加箭头*/
function addArrow(node){
	if(node.childNodes.length>1){
		var imgNode = document.createElement('img');
		imgNode.src = "img/arrow.ico"
		imgNode.className = "show";
		imgNode.style.transform = 'rotate(90deg)';
		node.insertBefore(imgNode,node.firstChild);
		addHandler(imgNode,'click',function(e){
			var node = e.target.parentNode;
			var childnodes = node.childNodes;
			if(imgNode.className == "show"){
				imgNode.className = "hidden";
				imgNode.style.transform = 'rotate(0deg)';
				for(var i=2;i<childnodes.length;i++){
					if(childnodes[i].type != 3){
						childnodes[i].style.display = "none";
					}
				}
			} else{
				imgNode.className = "show";
				imgNode.style.transform = 'rotate(90deg)';
				for(var i=2;i<childnodes.length;i++){
					if(childnodes[i].type != 3){
						childnodes[i].style.display = "block";
					}
				}
			}
		});
	}
}

/*遍历所有标签*/
function order(node){
	if(node!=null){
		showNode.push(node);
		var children = node.childNodes;
		var length = children.length;
		for(var i=0;i<length;i++){
			if(children != 3){
				order(children[i]);
			}
		}
	}
}

/*标签添加图片*/
function orderArrow(){
	liNodes = document.getElementsByTagName("li");
	var liLength = liNodes.length;
	for(var i=0;i<liLength;i++){
		//添加箭头
		addArrow(liNodes[i]);
	}
}

/*遍历所有文本*/
function orderText(){
	textNode = [];
	var liLength = liNodes.length;
	for(var i=0;i<liLength;i++){
		if(liNodes[i].firstChild.nodeType != 3 ){
			//alert(trimStr(liNodes[i].firstChild.nextSibling.nodeValue));
			textNode.push(trimStr(liNodes[i].firstChild.nextSibling.nodeValue));
		}else{
			textNode.push(trimStr(liNodes[i].firstChild.nodeValue));
		}
		addHandler(liNodes[i],'click',function(e){
			setColor();
			this.style.color = "red";
			clickLi = e.target;
			e.stopPropagation(); 
		});
	}
}

/*查找节点*/
function selFn(){
	liNodes = document.getElementsByTagName('li');
	var seltext = document.getElementById("sel").value;
	if(seltext == ''){
		alert("请输入要搜索的内容");
		return;
	}
	for(var i=0;i<textNode.length;i++){
		//alert(textNode[i]);
		if(seltext == textNode[i]){
			liNodes[i].style.color = "red";
			return 1;
		}
	}
	return 0;
}

/*添加节点*/
function addFn(){
	var addtext = document.getElementById("add").value;
	if(addtext == ''){
		alert("请输入添加节点的内容");
		return;
	}
	if(clickLi == null){
		alert("请先选择要添加的节点");
		return;
	}else{
		if(clickLi.firstElementChild == null){
			var ulNode = document.createElement("ul"); 
			var liNode = document.createElement("li");
			ulNode.appendChild(liNode);
			liNode.innerHTML = addtext;
			clickLi.appendChild(ulNode);
			addArrow(clickLi);
			return 1;
		}else{
			var liNode = document.createElement("li");
			liNode.innerHTML = addtext;
			var fatherNode = clickLi.lastElementChild;
			fatherNode.appendChild(liNode);
			return 1;
		}
	}
}

/*删除节点*/
function delFn(){
	if(clickLi == null){
		alert("请先选择要删除的节点");
		return;
	}else{
		clickLi.parentNode.removeChild(clickLi);
	}
}

var selbtn = document.getElementById("selbtn");
var addbtn = document.getElementById("addbtn");
var delbtn = document.getElementById("delbtn");

order(root);
orderText();
orderArrow();


addHandler(selbtn,'click',function(){
	setColor();
	var i = selFn();
	if(i){
		alert("找到了！");
	}else{
		alert("没有找要搜索的内容");
	}
});

addHandler(addbtn,'click',function(){
	var i = addFn();
	if(i){alert("添加成功");}
	clickLi = null;
	order(root);
	orderText();
	setColor();
});

addHandler(delbtn,'click',function(){
	delFn();
	alert("删除成功");
	order(root);
	orderText();
	clickLi = null;
	setColor();

});





