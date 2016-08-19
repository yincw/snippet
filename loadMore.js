/********************************
* 加载更多 - 支持 “点击” 和 “滚动” 触发
********************************/

var $ = require('jquery');

var loadMore = function (cb, options) {

    var defaults = {
      click: true,
      scroll: true,
      pageSize: 8,
      isEnd: false,  // 结束标志
      isAjax: false  // 防止滚动过快，服务端没来得及响应造成多次请求
    };

    var settings = $.extend({}, defaults, options);

    var counter = 0,
        pageStart = 0,
        pageSize = settings.pageSize;

    // 点击加载更多
    if (settings.click) {
      $(document).on('click', '.js-btn-more', function () {
        counter ++;
        pageStart = counter * pageSize;

        cb && cb(settings, pageStart, pageSize);
      });
    }

    // 滚动加载更多
    if (settings.scroll) {
      $(window).scroll(function () {

        // 滚动加载时如果已经没有更多的数据了，正在发生的请求，不能继续进行
        if (settings.isEnd == true || settings.isAjax == true) {
          return;
        }

        if ( ($(document).height() - $(this).height() - $(this).scrollTop()) < 100) {
          counter ++;
          pageStart = counter * pageSize;

          cb && cb(settings, pageStart, pageSize);
        }
      });
    }

    // 第一次自动加载
    cb && cb(settings, pageStart, pageSize);
};


/********************************
* 使用示例
********************************/

// // 回调函数
// var render = function (settings, pageStart, pageSize) {
//   settings.isAjax == true;
//
//   $.ajax({
//     type: 'GET',
//     url: 'json/blog.json',
//     dataType: 'json',
//     success: function (response) {
//       settings.isAjax == false;
//
//       var data = response.list;
//       var total = data.length;
//       var result = '';
//
//       // 如果剩下的记录数不够分页，就让分页取剩下的记录数
//       if (total - pageStart < pageSize) {
//         pageSize = total - pageStart;
//       }
//
//       // 渲染模板到页面
//       for (var i = pageStart; i < (pageStart + pageSize); i++) {
//         result += '<li>' +
//           '<div>'+ i +'</div>' +
//           '<div>' +
//             '<h3>'+ data[i].title +'</h3>' +
//             '<p>'+ data[i].desc +'</p>' +
//           '</div>' +
//         '</li>';
//       }
//       $('.js-list').append(result);
//
//       // 隐藏 .js-btn-more
//       if ( (pageStart + pageSize) >= total ) {
//         $('.js-btn-more').hide();
//         settings.isEnd == true;
//       } else {
//         $('.js-btn-more').show();
//       }
//
//     }
//
//   });
// };
//
// // 执行调用
// loadMore(render);
