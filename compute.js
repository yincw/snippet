/********************************
* 浮点数运算
********************************/


var num = 0.123456789,
    num1 = 0.1,
    num2 = 0.7;


// 1、toFixed()
// https://yincw.github.io/javascript/ECMAScript/Number/toFixed.html
// 将 num 四舍五入到小数点后 4 位
num.toFixed(4); // 0.1235
(num1 + num2).toFixed(4); // 0.3000

// 2、Math.round() & Math.pow()
// https://yincw.github.io/javascript/ECMAScript/Math/index.html
// 将 num 四舍五入到小数点后 n 位
var formatFloat = function (num, n) {
    return Math.round( num * Math.pow(10, n) ) / Math.pow(10, n);
};
formatFloat(num, 4); // 0.1235

// 直接将 num 截取到小数点后 n 位
var breakFloat = function (num, n) {
    return num.toString().replace( new RegExp( "^(\\-?\\d*\\.?\\d{0,"+ n +"})(\\d*)$" ), "$1");
};
breakFloat(num, 4); // 0.1234


// 3、绕过浮点数运算
(num1 * 1000 + num2 * 1000) / 1000 // 0.3

/********************************
* 使用示例
********************************/

// http://blog.mn886.net/chenjianhua/show/d453de4f2e2b43319923d7cf621f49f9/index.html
// http://www.cnblogs.com/jiahaipeng/archive/2008/10/29/1321821.html
