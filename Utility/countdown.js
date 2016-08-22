/****************************************
* 倒计时
****************************************/

var _ = require('underscore');

var countdown = function (element, options) {

    var defaults = {
        duration: 60,
        startText: '获取验证码',
        endText: '重新获取'
    };

    var settings = _.extend({}, defaults, options);

    if (settings.duration == 0) {

        element.removeAttribute('disabled');
        if (element.tagName == 'INPUT') {
            element.value = settings.startText;
        } else {
            element.innerHTML = settings.startText;
        }
        settings.duration;

    } else {

        element.setAttribute('disabled', true);
        if (element.tagName == 'INPUT') {
            element.value = settings.endText + '（' + settings.duration + '）';
        } else {
            element.innerHTML = settings.endText + '（' + settings.duration + '）';
        }
        settings.duration --;

    }

    setTimeout(function () {
        countdown(element, {
            duration: settings.duration,
            startText: settings.startText,
            endText: settings.endText
        });
    }, 1000);
};

/****************************************
* 使用示例
****************************************/

// countdown(document.getElementById('id'));
// countdown(document.getElementById('id'), {
//     duration: 10,
//     startText: '开始',
//     endText: '结束'
// });
