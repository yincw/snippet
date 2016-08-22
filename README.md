# 常用功能代码片段

## 分类

## String

> 字符串处理。

方法 | 依赖 | 说明
---|---|---
getArguments([str]) | - | 提取字符串（URl、String）中的参数值
replace(str, opt) | - | 置换字符为特定字符（`*`）
format(str, opt) | underscore |  替换字符为指定字符
serializeJSON() | jquery | 序列化字符串为 JSON 对象

## Number

> 数值处理。

方法 | 依赖 | 说明
---|---|---
breakFloat(num, n) | - | 将 num 直接截取到小数点后 n 位
formatFloat(num, n) | - | 将 num 四舍五入到小数点后 n 位

## Array

> 数组处理。

方法 | 依赖 | 说明
---|---|---
isRepeat(array) | - | 检查 array 数组是否有重复项

## Utility

> 实用功能。

方法 | 依赖 | 说明
---|---|---
countdown(element, options) | underscore | 倒计时，重新获取验证码
loadMore(cb, options) | jquery | 加载更多 - 支持 “点击” 和 “滚动” 触发
validate | - | 常用表单验证正则表达式
browser | - | 常用浏览器功能检测工具
