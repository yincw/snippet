/********************************
* 检查数组项是否有重复
********************************/

var isRepeat = function (array) {
  var hash, i, item, len;
  hash = {};
  for (i = 0, len = array.length; i < len; i++) {
      item = array[i];
      if (hash[item]) {
          return true;
      }
      hash[item] = true;
  }
  return false;
};

/********************************
* 使用示例
********************************/

// isRepeat(array) # true or false
