#######################################
# 检查 array 数组是否有重复项
#######################################

isRepeat = (array) ->
    hash = {}
    for item in array
        if hash[item]
            return true
        hash[item] = true
    return false

#######################################
# 使用示例
#######################################

# isRepeat(array) // true 或 false
