/* 定义数组，保存信息 */
var textArray = new Array();

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


/*将数据添加到数组*/

function addSpan(addnum){
		var node = document.createElement("span");
		node.innerHTML = addnum;
		node.style.backgroundColor = "red";
		node.style.display = "inline-block";
		node.style.height = "60px";
		node.style.margin = "10px";
		node.style.lineHeight = "60px";
		node.style.padding = "5px";
		node.style.borderRadius = "5px";
		return node;
}
/*左侧添加*/
function addLeft () {
	var textarea = document.getElementById('textarea').value;
	var all = document.getElementById('all');
	var ArrayLeft = textarea.split(/[\s.、，,]/);
	var length = ArrayLeft.length;
	for(var i=0;i<length;i++){
		var addnum = ArrayLeft[i];
		all.insertBefore(addSpan(addnum),all.firstChild);
	}
	textArray = textArray.concat(ArrayLeft);
}

/*右侧添加*/
function addRight(){
	var textarea = document.getElementById('textarea').value;
	var all = document.getElementById('all');
	var ArrayRight = textarea.split(/[\s.、，,]/);
	var length = ArrayRight.length;
	for(var i=0;i<length;i++){
		var addnum = ArrayRight[i];
		all.appendChild(addSpan(addnum));
	}
	textArray = textArray.concat(ArrayRight);
}
/*左侧删除*/
function delLeft(){
	var all = document.getElementById('all');
	all.removeChild(all.firstChild);
	textArray.pop();
}

/*右侧删除*/
function delRight(){
	var all = document.getElementById('all');
	all.removeChild(all.lastChild);
	textArray.shift();
}

/* 查找字符串 */

function select(){
	var seltext = document.getElementById('select-text').value;
	var spans = document.getElementsByTagName('span'); 
	var length = textArray.length;
	console.log(length);
	for(var i=0;i<length;i++){
		console.log(seltext);
		if(textArray[i].indexOf(seltext) >= 0){
			spans[length-i-1].style.backgroundColor = "green";
		}else{
			spans[length-i-1].style.backgroundColor = "red";
		}
	}
}

var btnaddL = document.getElementById('add-left');
var btnaddR = document.getElementById('add-right');
var btndelL = document.getElementById('del-left');
var btndelR = document.getElementById('del-right');
var btnselt = document.getElementById('select-btn');

addHandler(btnaddL,'click',addLeft);
addHandler(btnaddR,'click',addRight);
addHandler(btndelL,'click',delLeft);
addHandler(btndelR,'click',delRight);
addHandler(btnselt,'click',select);