#######################################
# 置换字符为特定字符（*）
#######################################

replace = (str, opt) ->
    options =
        format: opt?.format or '*'
        start: opt?.start or 1
        end: opt?.end * -1 or 1 * -1

    startStr = str.slice(0, options.start)
    middleStr = str.slice(options.start, options.end)
    endStr = str.slice(options.end)

    middleStrReplace = new Array(middleStr.length + 1).join(options.format)

    if str.length > 2
        startStr + middleStrReplace + endStr
    else
        new Array(str.length + 1).join(options.format)

#######################################
# 使用示例
#######################################

# replace('12') // **
# replace('123') // 1*3
# replace('1234') // 1**4
# replace('12345678', {start: 2, end: 2}) // 12****78
# replace('13012341234', {start: 3, end: 4}) // 130****1234
# replace('13012341234', {format: '-', start: 3, end: 3}) // 130-----234
