#######################################
# 替换字符为指定字符
#######################################

_ = require('underscore')

format = (str, opt) ->

    if opt?

        if Array.isArray(opt) or _.isArray(opt)
            for item in opt
                arrResult = str.replace /{(\d+)}/g, (match, position, string) ->
                    # match 模式的匹配项
                    # position 模式匹配项在字符串中的位置
                    # string 原始字符串
                    item = opt[position]
            arrResult
        else
            for key, value of opt
                objResult = str.replace /{(\d+)}/g, (match, position, string) ->
                    value = opt[position]
            objResult
    else
        str

#######################################
# 使用示例
#######################################

# format('123{0}456{1}')  // 123{0}456{1}
# format('123{0}456{1}', ['a', 'b']) // 123a456b
# format('123{0}456{1}', {0: 'a', 1: 'b'}) // 123a456b
