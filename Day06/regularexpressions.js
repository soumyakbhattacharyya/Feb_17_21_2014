var print = console.log;

//RegExp
var cno = /\d{4}\/\d{4}-\d{4}-\d{4}/;
print(cno.test("1232/1234-1234-3442"));

var urlexp = /www.[a-zA-Z0-9]+.com/;
var url = "www.ssdfdsf.com";
print(urlexp.test(url));
url = "www.123bjk.com";

var exp1 = /Cool/;
var str1 = "cool";
print(exp1.test(str1));

var exp2 = /gr[ae]y/;
print(exp2.test("gray"));
print(exp2.test("grey"));