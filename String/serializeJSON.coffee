#######################################
# 序列化字符串为 JSON 对象
#######################################

$ = require 'jquery'

$.fn.serializeJSON = () ->
    arr = @serializeArray()
    str = @serialize()

    obj = {}

    $.each arr, () ->
        if obj[@name]
            if $.isArray(obj[@name])
                obj[@name].push(@value)
            else
                obj[@name] = [obj[@name], @value]
        else
            obj[@name] = @value

    obj

#######################################
# 使用示例
#######################################

# $('form').serializeJSON()
