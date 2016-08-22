/****************************************
* 提取字符串（URL、String）中的参数值
****************************************/

var getArguments = function (str) {
    var _str, args, obj;

    if (str != null) {
        _str = str.indexOf("?");
        if (_str !== -1) {
            args = str.substr(_str + 1);
        } else {
            return;
        }
    } else {
        args = window.location.search.substr(1);
    }

    obj = {};

    args.replace(/([^&]*)=([^&]*)/g, function(match, key, value) {
        return obj[key] = value;
    });

    return obj;

};

/****************************************
* 使用示例
****************************************/

// URL: getArguments().key
// String: getArguments(str).key
