window.onload = function() {
	onTest();
}

var isName = false,
	isPasswd = false,
	isPasswdAg = false,
	isEMAIL = false,
	isPhone = false;

function onTest() {
	nameTest();
	passwdTest();
	passwdAgTest();
	emailTest();
	phoneTest();
	submitTest();
}

function nameTest() {
	var nameInput = document.getElementById("name"); //名称
	var tipSpan = document.getElementById("name_tip"); // 提示
	var nameStr = null; //  输入的内容
	nameInput.onfocus = function() {
		change(tipSpan, nameInput, "#ccc", nametips.begin);
	}
	nameInput.onblur = function() {
		nameStr = nameInput.value;
		if (nameStr == "") {
			change(tipSpan, nameInput, "red", nametips.air);
			isName = false;
		} else if (nameStr.length <= 4 || nameStr.length >= 16) {
			change(tipSpan, nameInput, "red", nametips.wrong);
			isName = false;
		} else {
			change(tipSpan, nameInput, "green", nametips.ok);
			isName = true;
		}
	}
}

function passwdTest() {
	var passwdInput = document.getElementById("passwd");
	var tipSpan = document.getElementById("passwd_tip");
	var passwdStr = null; //  输入的内容
	passwdInput.onfocus = function() {
		change(tipSpan, passwdInput, "#ccc", passwdtips.begin);
	}
	passwdInput.onblur = function() {
		passwdStr = passwdInput.value;
		if (passwdStr == "") {
			change(tipSpan, passwdInput, "red", passwdtips.air);
			isPasswd = false;
		} else if (passwdStr.length < 6 || passwdStr.length > 12) {
			change(tipSpan, passwdInput, "red", passwdtips.wrong);
			isPasswd = false;
		} else {
			change(tipSpan, passwdInput, "green", passwdtips.ok);
			isPasswd = true;
		}
	}
}

function passwdAgTest() {
	var passwdAgInput = document.getElementById("passwdAg");
	var tipSpan = document.getElementById("passwdAg_tip");
	var passwdAgStr = null; //  输入的内容
	passwdAgInput.onfocus = function() {
		change(tipSpan, passwdAgInput, "#ccc", passwdAgtips.begin);
	}
	passwdAgInput.onblur = function() {
		passwdAgStr = passwdAgInput.value;
		var passwdStr = document.getElementById("passwd").value;
		if (passwdAgStr == "") {
			change(tipSpan, passwdAgInput, "red", passwdAgtips.air);
			isPasswdAg = false;
		} else if (passwdAgStr != passwdStr) {
			change(tipSpan, passwdAgInput, "red", passwdAgtips.wrong);
			isPasswdAg = false;
		} else {
			change(tipSpan, passwdAgInput, "green", passwdAgtips.ok);
			isPasswdAg = true;
		}
	}
}

function emailTest() {
	var emailInput = document.getElementById("email");
	var tipSpan = document.getElementById("email_tip");
	var emailStr = null; //  输入的内容
	emailInput.onfocus = function() {
		change(tipSpan, emailInput, "#ccc", emailtips.begin);
	}
	emailInput.onblur = function() {
		emailStr = emailInput.value;
		if (emailStr == "") {
			change(tipSpan, emailInput, "red", emailtips.air);
			isEMAIL = false;
		} else if (!isEmail(emailStr)) {
			change(tipSpan, emailInput, "red", emailtips.wrong);
			isEMAIL = false;
		} else {
			change(tipSpan, emailInput, "green", emailtips.ok);
			isEMAIL = true;
		}
	}
}

function phoneTest() {
	var phoneInput = document.getElementById("phone");
	var tipSpan = document.getElementById("phone_tip");
	var phoneStr = null; //  输入的内容
	phoneInput.onfocus = function() {
		change(tipSpan, phoneInput, "#ccc", phonetips.begin);
	}
	phoneInput.onblur = function() {
		phoneStr = phoneInput.value;
		if (phoneStr == "") {
			change(tipSpan, phoneInput, "red", phonetips.air);
			isPhone = false;
		} else if (phoneStr.length != 11 || isNaN(phoneStr)) {
			change(tipSpan, phoneInput, "red", phonetips.wrong);
			isPhone = false;
		} else {
			change(tipSpan, phoneInput, "green", phonetips.ok);
			isPhone = true;
		}
	}
}

function submitTest() {
	var submitBtn = document.getElementById("submit");
	submit.onclick = function() {
		if (isName && isPhone && isEmail && isPasswd && isPasswdAg) {
			alert("全部合格~！");
			return false;
		} else {
			alert("检查一下，还有错误哦~");
			return false;
		}
	}

}

/*必须包含一个并且只有一个符号@ 
第一个字符不能是'@'或者'.' 
不允许出现'@.'或者'.@'或者'-@'或者'@-' 
结尾不得是字符'@'或者'.' 
字符@后面只能是'a-za-z0-9'*/

function isEmail(str) {
	var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	return reg.test(str);
}

function change(tipSpan, Input, color, tip) {
	Input.style.borderColor = color;
	tipSpan.style.color = color;
	tipSpan.innerHTML = tip;
}