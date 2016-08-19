#############################
# 检查数组项是否有重复
#############################

isRepeat = (array) ->
    hash = {}
        for item in array
            if hash[item]
                return true
            hash[item] = true
        return false

#############################
# 使用示例
#############################

# isRepeat(array) # true or false
