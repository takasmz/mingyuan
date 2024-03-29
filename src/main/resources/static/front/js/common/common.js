/**
 * 工具集
 */
define(['jquery'], function ($) {

    return {
        /**
         * 事件绑定
         * @param bindings [{el:x,event:y,handler:z}]
         *                  el为页面元素 event为绑定事件 handler为事件响应函数
         */
        bindEvents: function (bindings) {
            $.each(bindings, function (i, v) {
                if (typeof v.el == 'string') {
                    $(document).on(v.event, v.el, v.handler);
                } else {
                    $(v.el).on(v.event, v.handler);
                }
            });
        },

        /**
         * 获取Url参数
         * @param url url地址
         */
        getUrlParams: function (url) {
            // 需要返回的参数集合
            var rtnParams = {},
                // 参数键值对
                paramPair = [];
            if (!url || url.indexOf('?') === -1) {
                return rtnParams;
            }

            $.each(url.substr(url.indexOf('?') + 1).split('&'), function (i, v) {
                paramPair = v.split('=');
                rtnParams[paramPair[0]] = paramPair[1];
            });

            return rtnParams;
        },

        /**
         * 去除空格
         * @param array
         * @returns {Array}
         */
        trims: function (array) {
            var newArr = [],
                ele;
            $.each(array, function (i, v) {
                ele = v.replace(/ /g, '');
                ele != '' && newArr.push(ele);
            });
            return newArr;
        },

        /**
         *  时间间隔计算工具
         * @param strInterval
         * @param num
         * @returns {string}
         */
        timeInterval: function (strInterval, num) {
            var date = arguments[2] || new Date();
            switch (strInterval) {
                case 's' :
                    date = new Date(date.getTime() + (1000 * num));
                    break;
                case 'n' :
                    date = new Date(date.getTime() + (60000 * num));
                    break;
                case 'h' :
                    date = new Date(date.getTime() + (3600000 * num));
                    break;
                case 'd' :
                    date = new Date(date.getTime() + (86400000 * num));
                    break;
                case 'w' :
                    date = new Date(date.getTime() + ((86400000 * 7) * num));
                    break;
                case 'm' :
                    date = new Date(date.getFullYear(), (date.getMonth()) + num, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
                    break;
                default:
                    date = new Date((date.getFullYear() + num), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
            }
            date = date.getTime() >= (new Date()).getTime() ? new Date() : date;
            return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('/');
        },

        /**
         * 格式化日期  /yy/MM/dd/hh/mm/ss
         * @param date
         * @param formatStr
         * @returns {*}
         */
        dateFormat: function (date, formatStr) {
            var str = formatStr;
            var Week = ['日', '一', '二', '三', '四', '五', '六'];
            str = str.replace(/yy/, date.getFullYear());
            str = str.replace(/y/, (date.getYear() % 100) > 9 ? (date.getYear() % 100).toString() : '0' + (date.getYear() % 100));
            str = str.replace(/MM/, date.getMonth() >= 9 ? (date.getMonth() + 1).toString() : '0' + (date.getMonth() + 1));
            str = str.replace(/M/, date.getMonth() + 1);
            str = str.replace(/w|W/, Week[date.getDay()]);
            str = str.replace(/dd/, date.getDate() > 9 ? date.getDate().toString() : '0' + date.getDate());
            str = str.replace(/d/, date.getDate());
            str = str.replace(/hh/, date.getHours() > 9 ? date.getHours().toString() : '0' + date.getHours());
            str = str.replace(/h/, date.getHours());
            str = str.replace(/mm/, date.getMinutes() > 9 ? date.getMinutes().toString() : '0' + date.getMinutes());
            str = str.replace(/m/, date.getMinutes());
            str = str.replace(/ss/, date.getSeconds() > 9 ? date.getSeconds().toString() : '0' + date.getSeconds());
            str = str.replace(/s/, date.getSeconds());
            return str;
        },

        getCourseList: function(initTag) {
            $.ajax({
                url:'course/getCourseList',
                type:'post',
                dataType:'json',
                success:function (result) {
                    var data = result.data;
                    for(var i=0;i<data.length;i++){
                        $(".layui-tab-title").append("<li cid='"+data[i].id+"'>"+data[i].courseName+"</li>");
                        $(".layui-tab-content").append('<div class="layui-tab-item"></div>');
                    }
                    initTag();
                }
            })
        },

        enterSubmit: function ($obj) {
            $(document).keyup(function(event){
                if(event.keyCode === 13){
                    $obj.trigger("click");
                }
            });
        },
        /**
         * 格式为yyyy-MM-dd的字符串转Date
         * @param dateString 时间字符串
         * @returns {Date}
         */
        convertDateFromString : function (dateString) {
            if (dateString) {
                var date = new Date(dateString.replace(/-/,"/"))
                return date;
            }
        },
        /**
         * 格式为yyyy-MM-dd hh:mm:ss的字符串转Date
         * @param dateString 时间字符串
         * @returns {Date}
         */
        convertDateFromString : function (dateString) {
            if (dateString) {
                var arr1 = dateString.split(" ");
                var sdate = arr1[0].split('-');
                var date = new Date(sdate[0], sdate[1]-1, sdate[2]);
                return date;
            }
        },
        getUrlParam : function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) return decodeURI(r[2]); return null; //返回参数值
        }
    }
});
