window.onload = function() {
	prepare();
	Ssort();
}

var stus = [
	['大毛', 45, 58,103],
	['二毛', 83, 96,179],
	['三毛', 68, 76,144],
	['四毛', 87, 66,153],
	['五毛', 84, 96,180],
	['六毛', 88, 46,134],
	['七毛', 98, 96,194],
	['八毛', 77, 69,146],
	['九毛', 30, 90,120],
];

function prepare() {
	var score = document.getElementById("score");
	for (var i = 0; i < stus.length; i++) {
		score.appendChild(createChild(i));
	}
}

function Ssort() {
	var ctBtn = document.getElementById("c_top");
	var cbBtn = document.getElementById("c_bottom");
	var mtBtn = document.getElementById("m_top");
	var mbBtn = document.getElementById("m_bottom");
	var stBtn = document.getElementById("s_top");
	var sbBtn = document.getElementById("s_bottom");
	addHandler(ctBtn, 'click', function(){
		tSort(1);
	});
	addHandler(cbBtn,'click',function(){
		bSort(1);
	});
	addHandler(mtBtn,'click',function(){
		tSort(2);
	});
	addHandler(mbBtn,'click',function(){
		bSort(2);
	});
	addHandler(stBtn,'click',function(){
		tSort(3);
	});
	addHandler(sbBtn,'click',function(){
		bSort(3);
	})
}

function tSort(n) {
	var tbody = document.getElementById("score");
	var cF = stus[0][n];
	var stu = null;
	var mid = null;
	tbody.innerHTML = "";
	for (var i = 0; i < stus.length-1; i++) {
		for(var j=i+1;j<stus.length;j++){
			if(stus[i][n] < stus[j][n]){
				stu = i;
			}else{
				stu = j;
			}
			mid = stus[stu];
			stus[stu] = stus[i];
			stus[i] = mid;
		}
	}
	for(var i=0;i<stus.length;i++){
		tbody.appendChild(createChild(i));
	}
}

function bSort(n){
	var tbody = document.getElementById("score");
	var cF = stus[0][n];
	var stu = null;
	var mid = null;
	tbody.innerHTML = "";
	for (var i = 0; i < stus.length-1; i++) {
		for(var j=i+1;j<stus.length;j++){
			if(stus[i][n] > stus[j][n]){
				stu = i;
			}else{
				stu = j;
			}
			mid = stus[stu];
			stus[stu] = stus[i];
			stus[i] = mid;
		}
	}
	for(var i=0;i<stus.length;i++){
		tbody.appendChild(createChild(i));
	}
}

function createChild(i) {
	var stu = document.createElement("tr");
	var nameTd = document.createElement('td');
	nameTd.innerHTML = stus[i][0];
	var chinaTd = document.createElement("td");
	chinaTd.innerHTML = stus[i][1];
	var mathTd = document.createElement("td");
	mathTd.innerHTML = stus[i][2];
	var sumTd = document.createElement("td");
	sumTd.innerHTML = stus[i][1] + stus[i][2];
	stu.appendChild(nameTd);
	stu.appendChild(chinaTd);
	stu.appendChild(mathTd);
	stu.appendChild(sumTd);
	return stu;
}