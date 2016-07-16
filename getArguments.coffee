#############################
# 提取字符串（URL、String）中的参数值
#############################

getArguments = (str) ->

    if str?
        _str = str.indexOf '?'

        if _str isnt -1
            args = str.substr(_str + 1)
        else
            return
    else
        args = window.location.search.substr(1)

    obj = {}

    args.replace /([^&]*)=([^&]*)/g, (match, key, value) ->
        obj[key] = value

    obj

#############################
# 使用示例
#############################

# getArguments().key
# getArguments(str).key
