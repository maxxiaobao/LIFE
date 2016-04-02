/* 定义数组，保存信息 */
var textArray = new Array();
var tagArray = new Array();

/* 绑定事件处理程序 */

function addHandler(element,type,Handler){
	if(element.addEventListener){
		element.addEventListener(type,Handler,false);
	}else if(element.attachEvent){
		element.attachEvent(type,Handler);
	}else{
		element['on' + type] = Handler;
	}
}

function addTag(){
	var tag = document.getElementById("tag").value;
	var tags = document.getElementById("tags");
	var newTag = tag.split(/[\s.、，,]/);
	var length = newTag.length;
	for(var i=0;i<length;i++){
		if(tagArray.length >= 10 && selsame(newTag[i],tagArray)){
			deltag();
		}
		if(newTag[i] != '' && selsame(newTag[i],tagArray)){
			tags.insertBefore(addSpan(newTag[i],1),tags.firstChild);
			tagArray.push(newTag[i]);
		}
	}
}

/*将数据添加到数组*/

function addSpan(addnum,num){
		var node = document.createElement("span");
		node.innerHTML = addnum;
		node.style.backgroundColor = "red";
		node.style.display = "inline-block";
		node.style.height = "60px";
		node.style.margin = "10px";
		node.style.lineHeight = "60px";
		node.style.padding = "5px";
		node.style.borderRadius = "5px";
		if(num == 1){
			node.onclick = clickdel;
			node.onmouseover = mouseover;
		}
		return node;
}
/*添加兴趣爱好*/
function addFavorite () {
	var textarea = document.getElementById('textarea').value;
	var all = document.getElementById('all');
	var ArrayLeft = textarea.split(/[\s.、，,]/);
	var length = ArrayLeft.length;
	//textArray = textArray.concat(ArrayLeft);
	for(var i=0;i<length;i++){
		var addnum = ArrayLeft[i];
		if(textArray.length >= 10  && selsame(addnum,textArray)){
			delRight();
		}
		if(addnum != ''){
			if(selsame(addnum,textArray)){
				all.insertBefore(addSpan(addnum,0),all.firstChild);
				textArray.push(addnum);
			}
		}
	}
}

/*右侧删除*/
function delRight(){
	var all = document.getElementById('all');
	all.removeChild(all.lastChild);
	textArray.shift();
}

function deltag(){
	var tags = document.getElementById('tags');
	tags.removeChild(tags.lastChild);
	tagArray.shift();
}

/*查重*/
function selsame(text,array){
	for(var i=0;i<array.length;i++){
		if(text == array[i]){
			return false;
		}
	}
	return true;
}

/*回车添加*/

function enter(event){
	var e = event || window.event;
	console.log(e.keyCode);
	if(e.keyCode == 13){
		addTag();
		console.log("执行了！");
	}
}

/*  鼠标划过 */

function mouseover(event){
	var innerhtml = event.target.innerHTML;
	event.target.style.backgroundColor = "green";
	event.target.innerHTML = "删除" + event.target.innerHTML;
	event.target.onmouseout = function(){
		event.target.style.backgroundColor = "red";
		event.target.innerHTML = innerhtml;
	}
}



/* 鼠标点击 */
function clickdel(event){
	var event = event || window.event;
	var targs = document.getElementById('tags');
	var innerhtml= event.target.innerHTML.substring(2);
	targs.removeChild(event.target);
	for(var i=0;i<tagArray.length;i++){
		if(innerhtml == tagArray[i]){
			tagArray.splice(i,1);
			console.log("删除了！");
		}
	}
}

var btnaddF = document.getElementById('add-favorite');
var inputTag = document.getElementById('tag'); 

addHandler(btnaddF,'click',addFavorite);
addHandler(inputTag,'keydown',enter);
