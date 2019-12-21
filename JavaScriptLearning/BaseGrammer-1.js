/*
用于测试一个js文件里的变量是否可以被另一个js访问
*/
/*
全局变量会绑定到window上，不同的JavaScript文件如果使用了相同的全局变量
，或者定义了相同名字的顶层函数，都会造成命名冲突，并且很难被发现。
减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中。例如：
// 唯一的全局变量MYAPP:
var MYAPP = {};

// 其他变量:
MYAPP.name = 'myapp';
MYAPP.version = 1.0;

// 其他函数:
MYAPP.foo = function () {
    return 'foo';
};
*/

//例如本例：
var BaseGrammer1 = {};
BaseGrammer1.V1 = "test";
BaseGrammer1.V2 = function(){
    alert("This is V2 function in BaseGrammer1");
}