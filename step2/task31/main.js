window.onload = function() {
	showSchool();
	chooseChange();
}

function chooseChange() {
	var yesRadio = document.getElementById("yes");
	var noRadio = document.getElementById("no");
	yesRadio.onclick = showSchool;
	noRadio.onclick = showCompany;
}

function showSchool() {
	var result = document.getElementById("result");
	result.innerHTML = "";
	var span = document.createElement("span");
	span.innerHTML = "学校";
	result.appendChild(span);
	var citySelect = document.createElement("select");
	citySelect.setAttribute("id", "city");
	for (var i = 0; i < city.length; i++) {
		var option = document.createElement("option");
		option.innerHTML = city[i];
		option.setAttribute("value", "city" + i);
		citySelect.appendChild(option);
	}
	result.appendChild(citySelect);
	var schoolSelect = document.createElement("select");
	addSchool(city0,schoolSelect);
	result.appendChild(schoolSelect);
	citySelect.onchange = function(){
		selectSchool(citySelect,schoolSelect)
	}
}

function showCompany() {
	var result = document.getElementById("result");
	result.innerHTML = "";
	var span = document.createElement("span");
	span.innerHTML = "就业单位";
	result.appendChild(span);
	var comInput = document.createElement("input");
	comInput.type = "text";
	result.appendChild(comInput);

}

function addSchool(city, select) {
	for (var i = 0; i < city.length; i++) {
		var option = document.createElement("option");
		option.innerHTML = city[i];
		select.appendChild(option);
	}
}

 function selectSchool(citySelect,schoolSelect) {
		var selValue = citySelect.value;
		schoolSelect.innerHTML = "";
		if (selValue == "city0") {
			addSchool(city1,schoolSelect);
		} else if (selValue == "city1") {
			addSchool(city1,schoolSelect);
		} else {
			addSchool(city2,schoolSelect);
		}
	}