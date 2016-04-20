function addHandler(element,type,Handler){
	if(element.addEventListener){
		element.addEventListener(type,Handler,false);
	}else if(element.attachEvent){
		element.attachEvent('on'+type,Handler);
	}else{
		element['on'+type] = Handler;
	}
}