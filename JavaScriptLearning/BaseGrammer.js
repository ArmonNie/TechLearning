
'use strict';//以严格模式运行js语句

/*
js基本语法重点：
1.
2.
3.
*/

//变量声明
var v1 = 1;

//js的语法是弱类型
//若在严格模式下，v2，v3声明是不会通过编译的，因为没有var
//v2 = 9;
//也可以不使用分号
//v3 = 10


/*
关于js的字符串声明
*/
var v4  = 'hello';

/*
一些对于字符串的操作
获取长度访问length属性即可
取得单个字符，可以直接使用索引进行访问（即把该字符串当成一个数组）
*/
console.log('v4字符串的长度是' + v4.length);
console.log('v4第一个元素是' + v4[0]);
console.log('v4最后一个元素是' + v4[v4.length-1]);
//访问字符串若出现越界。出现的是输出undefied
console.log('v4最后一个元素是' + v4[v4.length]);
console.log('访问字符串单个字符越界后，其长度为：' + v4.length);


/*
字符串还可以进行拼接
*/
var str1 = 'Hello';
var str2 = 'Armon';
console.log('字符串拼接后：' + str1 + str2);

/*
操作字符串的内置函数
toUpperCase，toLowerCase,indexOf,substring
*/

//使用具体的类型声明变量并赋值??实际上Number是一个函数！！！
//Number number1 = 1;

//偶尔使用方式，大部分情况下是将字符串转成数字
var v5 = Number(123);
var v6 = Number('123')

//而此种形式其实是对象声明，用对象属性来存储值
var v7 = new Object(123);
var v8 = new Object('123');


//使用console.log语句进行控制台输出
console.log(v1);
//console.log(v2);
//console.log(v3);
console.log(v4);
console.log(v5);
console.log(v6);
console.log(v7);
console.log(v8);



/*
关于js的数组声明
*/
//推荐使用的数组声明方式,
var arr1 = ['hello',1,true,'name'];

//直接输出数组
console.log("arr1直接输出：" + arr1);//此时输出的是四个值
//数组遍历输出
for(var i=0;i<arr1.length;i++)
{
    console.log('数组arr1中第' + (i+1) + '个元素值为：' + arr1[i]);
}

//其他声明数组的方式
var arr2 = new Array();
var arr3 = new Array(2);
var arr4 = new Array(true,'123',12,"hello");

arr2[0] = 1;
arr2[1] = 2;
arr2[5] = 5;

arr3[0] = 1;
arr3[2] = 6;//若赋值时访问的超出原本数组范围

console.log("arr2含有" + arr2.length + "个元素。");
console.log("arr2直接输出：" + arr2);
//数组遍历输出
for(var i=0;i<arr2.length;i++)
{
    console.log('数组arr2中第' + (i+1) + '个元素值为：' + arr2[i]);
}

console.log("arr3含有" + arr3.length + "个元素。");
console.log("arr3直接输出：" + arr3);
//数组遍历输出
for(var i=0;i<arr3.length;i++)
{
    console.log('数组arr3中第' + (i+1) + '个元素值为：' + arr3[i]);
}

console.log("arr4含有" + arr4.length + "个元素。");
console.log("arr4直接输出：" + arr4);
//数组遍历输出
for(var i=0;i<arr4.length;i++)
{
    console.log('数组arr4中第' + (i+1) + '个元素值为：' + arr4[i]);
}

/*
关于js里面的NaN以及NULL，undefined
*/
/*
NaN代表Not A NUMBER
undefined代表未定义
个人：NOT A NUMBER一般是由算术上的运算不规范产生的
undefined代表的一般是此处为被定为任何的类型值
（更倾向于代表NULL值）
*/


/*
关于js的对象
使用大括号
*/
//对象声明用大括号
var obj1 = 
{
    name:'Armon',
    age:13,
    sex:'男',
    phone:'18971819070',
    address:'麒麟区麒麟西路25号',
    'e-mail':'18971819070@163.com',//若键名有特殊符号，键名亦需要引号
    say:function(){
        console.log('hello,I am Armon!');
    },//注意把一个函数归到对象内部
    caculate:function(param1,param2){
        console.log(param1 + "+" + param2 + "的和为：" + (param1+param2));
        return param1+param2;
    }
};
//以构造函数形式进行对象声明
function obj2(name,age){
    this.name = name;
    this.age = age;
}

var obj2 = new obj2('聂璋',15);
console.log("obj2的名字是" + obj2.name);
console.log("obj2的年龄是" + 15);

//js新增的类
class obj3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
var obj4 = new obj3('聂璋',15);//注意此处不能再使用obj3进行命名，因为类命名用的是obj3
console.log("obj4的名字是" + obj4.name);
console.log("obj4的年龄是" + 15);

//对象输出
console.log("obj1直接输出为：" + obj1);//若直接输出则是[object Object]
console.log("obj1的姓名是：" + obj1.name);
console.log("obj1的年龄是：" + obj1.age);
console.log("obj1的性别是：" + obj1.sex);
console.log("obj1的手机是：" + obj1.phone);
console.log("obj1的住址是：" + obj1.address);
console.log("obj1的邮箱是：" + obj1["e-mail"]);//注意特殊键名的访问
console.log("obj1说：" + obj1.say);
//注意调用方法写括号和不写括号是两种情况，
//且因本方法无显式返回值，所以是undefined
console.log("obj1说：" + obj1.say());
console.log("obj1计算得到：" + obj1.caculate(1,2));

//还可以使用for循环输出对象属性
for(var key  in obj1)
{
    console.log(key);
}
//若访问不存在的键名，返回undefied
console.log("obj1的其他信息是：" + obj1.others);//输出为undefined

/*
关于js内置的数据结构Map，Set
*/
var map1 = new Map();
var set1 = new Set();


/*
关于js的函数声明，js函数也是对象
函数内部还有arguments可以使用
*/

//声明方式一，function关键字
function f1(x){
    if(x<0)
    {
        return -x;//若函数函数无显式返回值，返回undefined
    }
    else{
        return x;
    }
}
//多参数函数声明
function f2(x,y){
    for (var i=0; i<arguments.length; i++) {
        console.log('arg ' + i + ' = ' + arguments[i]); 
    }//使用arguments数组遍历已接受的参数
    console.log("f2接受的参数为" + x + "和" + y);
}

//声明方式二，使用变量形式(注意结尾需要加上分号)
var f3 = function(){
    console.log("f3无显式返回值，返回undefined");
};


/*
js函数调用
*/
console.log("-5的绝对值是" + f1(-5));
f2(1,"hello");
f3;//调用函数注意括号，即使没有参数（该条语句未被执行）
f3();
console.log(f3);//为何输出的是”[Function: f3]“


/*
关于高阶函数
*/

/*
关于解构赋值的写法应用
*/
//1.交换两个变量值
var x=1,y=2;
console.log("交换前x=" + x + "," + "交换前y=" + y);
[x,y] = [y,x];
console.log("交换后x=" + x + "," + "交换后y=" + y);
//2.其他应用？？？


/*
关于常量声明
*/
const PI = 3.14;//注意常量写法
//PI = 3;//改变常量的操作会让引擎报错



/*
测试访问另一个文件的变量
须要结合浏览器进行测试才可以访问window对象
*/
//console.log("V1  in BaseGrammer-1.js" + window.BaseGrammer1.V1);
//window.BaseGrammer1.V2();