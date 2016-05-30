function tip(begin,air,wrong,ok){
	this.begin = begin;
	this.air = air;
	this.wrong = wrong;
	this.ok = ok;
}

var nametip = new tip(
	"长度4-8的字母和数字组合",
	"名称不能为空",
	"名称长度在4-8之间",
	"格式正确"
	);

var passwdtip = new tip(
	"密码长度为6-10的字母和数字组合",
	"密码不能为空",
	"密码长度应在6-10之间",
	"密码格式正确"
	); 

var againtip = new tip(
	"请重复刚才输入的密码",
	"重复密码不能为空",
	"两次输入的密码不一致",
	"密码相同"
	);

var emailtip = new tip(
	"请输入有效的电子邮件地址",
	"邮件地址不能为空",
	"邮件地址不正确",
	"邮件地址合格"
	);

var phonetip = new tip(
	"请输入有效的电话号码",
	"电话号码不能为空",
	"电话号码格式不正确",
	"电话号码合格"
	);