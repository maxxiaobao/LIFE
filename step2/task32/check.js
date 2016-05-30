function addHandler(element,type,handler){

	if(element.addEventListener){
		element.addEventListener(type,handler,false);
	}else if(element.attachEvent){
		element.attachEvent('on'+type,handler);
	}else{
		element['on'+type] = handler;
	}

}

var isName = false;
var isPasswd = false;
var isAgain = false;
var isPhone = false;
var isemail = false;

function checkName(s){
	var input = document.getElementById("nameInput");
	var span = document.createElement("span");
	chooseStyle(input,span,s);
	 input.onfocus = function(){		
		change(nametip.begin,"#ccc",input,span);
	}
	input.onblur = function() {
		var nameStr = input.value;
		if(nameStr == ""){
			change(nametip.air,"red",input,span);
			isName = false;
		}else if(nameStr.length <4 || nameStr.length >8){
			change(nametip.wrong,"red",input,span);
			isName = false;
		}else{
			change(nametip.ok,"green",input,span);
			isName = true;
		}
	}
}

function checkPasswd(s){
	var input  = document.getElementById("passwdInput");
	var span = document.createElement("span");
	chooseStyle(input,span,s);
	input.onfocus = function(){
		change(passwdtip.begin,"#ccc",input,span);
	}
	input.onblur = function() {
		var nameStr = input.value;
		if(nameStr == ""){
			change(passwdtip.air,"red",input,span);
			isPasswd = false;
		}else if(nameStr.length <6 || nameStr.length >10){
			change(passwdtip.wrong,"red",input,span);
			isPasswd = false;
		}else{
			change(passwdtip.ok,"green",input,span);
			isPasswd = true;
		}
	}
}

function checkAgain (s) {
	var input = document.getElementById("againInput");
	var passwdInput = document.getElementById("passwdInput");
	var span = document.createElement("span");
	chooseStyle(input,span,s);
	input.onfocus = function(){
		change(againtip.begin,"#ccc",input,span);
	}
	input.onblur = function() {
		var nameStr = input.value;
		var passStr = passwdInput.value;
		if(nameStr == ""){
			change(againtip.air,"red",input,span);
			isAgain = false;
		}else if(nameStr != passStr){
			change(againtip.wrong,"red",input,span);
			isAgain = false;
		}else{
			change(againtip.ok,"green",input,span);
			isAgain = true;
		}
	}
}

function checkPhone(s){
	var input  = document.getElementById("phoneInput");
	var span = document.createElement("span");
	chooseStyle(input,span,s);
	input.onfocus = function(){
		change(phonetip.begin,"#ccc",input,span);
	}
	input.onblur = function() {
		var nameStr = input.value;
		if(nameStr == ""){
			change(phonetip.air,"red",input,span);
			isPhone = false;
		}else if(nameStr.length != 11){
			change(phonetip.wrong,"red",input,span);
			isPhone = false;
		}else{
			change(phonetip.ok,"green",input,span);
			isPhone = true;
		}
	}
}

function checkEmail (s) {
	var input = document.getElementById("emailInput");
	var span = document.createElement("span");
	chooseStyle(input,span,s);
	 input.onfocus = function(){		
		change(emailtip.begin,"#ccc",input,span);
	}
	input.onblur = function() {
		var nameStr = input.value;
		if(nameStr == ""){
			change(emailtip.air,"red",input,span);
			isemail = false;
		}else if(!isEmail(nameStr)){
			change(emailtip.wrong,"red",input,span);
			isemail = false;
		}else{
			change(emailtip.ok,"green",input,span);
			isemail = true;
		}
	}
	
}

function checkSub(){
	if(isName && isPasswd && isAgain && isemail && isPhone){
		alert("全部正确");
	}else{
		alert("还有错误，再检查一下阿~");
	}
}

function isEmail(str) {
	var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	return reg.test(str);
}

function change(tip,color,input,span){
	span.innerHTML = tip;
	span.style.color = color;
	input.style.borderColor = color;
}

function chooseStyle(input,span,s){
	if(s==0){
		input.parentNode.appendChild(span);
	}else{
		var brNode = document.createElement("br");
		input.parentNode.appendChild(brNode);
		input.parentNode.appendChild(span);
	}
}