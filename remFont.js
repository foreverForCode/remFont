//说明：rem重置插件
//  使用立即执行函数


;(function(win,doc){
    var win_width = win.innerWidth;
    body_width = win_width <= 750 ? win_width : 750;
    var docEl = doc.documentElement,
        myfontSize;
    resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
        recalc = function() {
            //设置根字体大小
            myfontSize = body_width / 750 * 100;
            // console.log(myfontSize);
            if (myfontSize > 100) {
                myfontSize = "100px";
            }
            docEl.style.fontSize = myfontSize + 'px';
        };
    //绑定浏览器缩放与加载时间
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
}(window,document))