/*
js面向对象学习
js内置对象操作
DOM对象操作
*/

//首先，学会声明对象
var People = {
    'name':undefined,
    'age':undefined,
    'sex':"男",
    'e-mail':undefined,//强调，带有特殊符号的键名要单引号引起，上三个其实可以不用单引号
    'say':function say(){
        console.log("I am " + this.name);
    }//关于对象的方法调用？？？
}

var Armon = {
    'name':"Armon",
    'age':18
}
//注意关键字_proto_，此语句类似会产生类似集承的效果
Armon._proto_ = People;

//Armon对象输出
console.log(Armon.name);
console.log(Armon.age);
console.log(Armon.sex);//sex为从People中继承过来的
//Armon.say();