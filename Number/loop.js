/****************************************
* 将 num 基于 n 间隔（interval）或倍数（multiple）迭代（从 1 开始，到 num 为止）输出
****************************************/

var loop = function (endValue, options) {

    var defaults = {
        startValue: 1,
        interval: 2,
        // multiple: 2
    };

    var settings = Object.assign({}, defaults, options);

    if (typeof endValue !== "undefined" && endValue !== null) {

        if (typeof settings.interval !== "undefined" && settings.interval !== null) {
            var arr = [];
            for (var i = settings.startValue, len = endValue; i <= len; i += settings.interval) {
                arr = arr.concat(i);
            }
            return arr;
        }

        if (typeof settings.multiple !== "undefined" && settings.multiple !== null) {
            var arr = [];
            for (var i = settings.startValue, len = endValue; i <= len; i *= settings.multiple) {
                arr = arr.concat(i);
            }
            return arr;
        }

    }

};

/****************************************
* 使用示例
****************************************/

// loop(10);    // [1, 3, 5, 7, 9]
// loop(10, { startValue: 0 });   // [0, 2, 4, 6, 8, 10]
// loop(10, { interval: null, multiple: 2 });     // [1, 2, 4, 8]
