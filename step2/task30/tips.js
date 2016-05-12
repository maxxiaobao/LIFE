function tips(begin, ok, wrong, air) {
	this.begin = begin;
	this.ok = ok;
	this.wrong = wrong;
	this.air = air;
}

var nametips = new tips(
	"必填，长度为4-16个字符",
	"格式正确",
	"格式错误（4-16个字符）",
	"名称不能为空"
);
var passwdtips = new tips(
	"必填，长度为6-12个字符",
	"格式正确",
	"格式不对（6-12个字符）",
	"密码不能为空"
);
var passwdAgtips = new tips(
	"请重复填写密码",
	"密码一致",
	"和上次密码不一致，请重新填写",
	"重复密码不能为空"
);
var emailtips = new tips(
	"填写邮件地址",
	"格式正确",
	"邮件地址格式不对",
	"邮件地址不能为空"
);
var phonetips = new tips(
	"必填，请填写电话号码",
	"号码可用",
	"请填写正确的电话号码格式",
	"电话号码不能为空"
);