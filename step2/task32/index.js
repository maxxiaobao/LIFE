window.onload = function() {
	var button = document.getElementById("submit");
	button.onclick = function() {
		box.innerHTML = "";
		var choose = document.getElementsByName("formList");
		var style = document.getElementsByName("style");
		var s = 3;
		var c = 0;
		for(var i=0;i<style.length;i++){
			if(style[i].checked){
				s = i;
			}
		}
		if(s == 3){
			alert("请选择样式");
			return;
		}
		for (var i = 0; i < choose.length; i++) {
			if (choose[i].checked) {
				c++;
				switch(choose[i].id){
					case "nameList":
						createInput("nameInput","text");
						checkName(s);
						break;
					case "passwdList":
						createInput("passwdInput","password");
						createInput("againInput","password");
						checkPasswd(s);
						checkAgain(s);
						break;
					case "emailList":
						createInput("emailInput","text");
						checkEmail(s);
						break;
					case "phoneList":
						createInput("phoneInput","text");
						checkPhone(s);
						break;
				}
			}
		}
		if(c==0){
			alert("请选择变单内容");
			return;
		}
		if(c!=0 && s!=3){
			createButton();
			var subBtn = document.getElementById("sub");
			addHandler(subBtn,"click",checkSub);
		}
	}
}

box = document.getElementById("box");

var toName = {
	"nameInput":"名称：",
	"passwdInput":"密码：",
	"againInput":"重复密码：",
	"emailInput":"电子邮件：",
	"phoneInput":"电话号码："
};

function createInput(id,type){
	var tr = document.createElement('tr');
	var td1 = document.createElement('td');
	var td2 = document.createElement('td');
	var label = document.createElement("label");
	label.setAttribute("for",id);
	label.innerHTML = toName[id];
	td1.appendChild(label);
	var input = document.createElement("input");
	input.type = type;
	input.name = id;
	input.id = id;
	td2.appendChild(input);
	td1.className="left"
	input.className = "input";
	tr.appendChild(td1);
	tr.appendChild(td2);
	box.appendChild(tr);
}


function createButton(){
	var button = document.createElement("button");
	button.innerHTML = "提交";
	button.id = "sub";
	box.appendChild(button);
}



