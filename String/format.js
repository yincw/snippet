/****************************************
* 替换字符为指定字符
****************************************/

var _ = require('underscore');

var format = function (str, opt) {

    var arrResult, i, item, key, len, objResult, value;

    if (opt != null) {
        if (Array.isArray(opt) || _.isArray(opt)) {
            for (i = 0, len = opt.length; i < len; i++) {
                item = opt[i];
                arrResult = str.replace(/{(\d+)}/g, function(match, position, string) {
                    return item = opt[position];
                });
            }
            return arrResult;
        } else {
            for (key in opt) {
                value = opt[key];
                objResult = str.replace(/{(\d+)}/g, function(match, position, string) {
                    return value = opt[position];
                });
            }
            return objResult;
        }
    } else {
        return str;
    }

};

/****************************************
* 使用示例
****************************************/

// format('123{0}456{1}')  // 123{0}456{1}
// format('123{0}456{1}', ['a', 'b']) // 123a456b
// format('123{0}456{1}', {0: 'a', 1: 'b'}) // 123a456b
