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


/*去除字符串前后的空格*/
function trimStr(str)
{return str.replace(/(^\s*)|(\s*$)/g,"");}