function addHandler(element,type,handler){
	if(element.addEventListener){
		element.addEventListener(type,handler,false);
	}else if(element.attachEvent){
		element.attachEvent('on'+type,handler);
	}else{
		element['on'+type] = handler;
	}
}

function test(){
	var input = document.getElementsByTagName('input')[0];
	var tip = document.getElementById('tip');
	var text = input.value;
	if(text == ''){
		input.style.borderColor = "red";
		tip.innerHTML = "姓名不能为空";
		tip.style.color="red";
	}else{
		length = calLength(text);
		if(length >=4 && length<=16){
			input.style.borderColor = "green";
			tip.innerHTML = "格式正确";
			tip.style.color="green";
		}else{
			input.style.borderColor = "red";
			tip.innerHTML = "格式不正确";
			tip.style.color="red";
		}
	}
	
}

function calLength(text){
	var result=0;
	//方法一
	for(var i=0;i<text.length;i++){
		if(text[i]>=0 && text[i]<=9 ){
			result += 1;
		}else if(text[i]>='a' && text[i]<='z'){
			result += 1;
		} else if(text[i]>='A' && text[i]<='Z'){
			result += 1;
		}else{
			result += 2;
		}
	}
	//方法二
	//返回字符Unicode编码
	// var code = text.charCodeAt(i);
	// 0~9 a~z A~Z 是0~128
	return result;
}

var btn = document.getElementsByTagName('input')[1];
addHandler(btn,'click',test);