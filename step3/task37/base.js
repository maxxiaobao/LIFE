function addHandler(element,type,handler){
	if(element.addEventListener){
		element.addEventListener(type,handler,false);
	}else if(element.attachEvent){
		element.attachEvent(type,handler);
	}else{
		element['on'+type] = handler;
	}
}

function getByClass(claName,parent){
	var oParent = parent?document.getElementById(parent):document,
		eles = [],
		elements = oParent.getElementsByTagName("*");

	for(var i=0;i<elements.length;i++){
		if(elements[i].className == claName){
			eles.push(elements[i]);
		}
	}
	return eles;
}