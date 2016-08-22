/****************************************
* 置换字符为特定字符（*）
****************************************/

var replace = function (str, opt) {
    var endStr, middleStr, middleStrReplace, options, startStr;
    options = {
        format: (opt != null ? opt.format : void 0) || "*",
        start: (opt != null ? opt.start : void 0) || 1,
        end: (opt != null ? opt.end : void 0) * -1 || 1 * -1
    };

    startStr = str.slice(0, options.start);
    middleStr = str.slice(options.start, options.end);
    endStr = str.slice(options.end);

    middleStrReplace = new Array(middleStr.length + 1).join(options.format);

    if (str.length > 2) {
        return startStr + middleStrReplace + endStr;
    } else {
        return new Array(str.length + 1).join(options.format);
    }

};

/****************************************
* 使用示例
****************************************/

// displace('12') // **
// displace('123') // 1*3
// displace('1234') // 1**4
// displace('12345678', {start: 2, end: 2}) // 12****78
// displace('13012341234', {start: 3, end: 4}) // 130****1234
// displace('13012341234', {format: '-', start: 3, end: 3}) // 130-----234
