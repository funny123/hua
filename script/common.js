// 主页面切换frame
var changeFrameInRoot = function(index) {
	api.execScript({
		name : 'root',
		script : 'changeIndexFrame(' + index + ')'
	});
};
// 主页面切换frame end

// 用于链接到淘宝链接
var toDetail = function(obj) {
	var url = $api.attr(obj, 'data-url');
	var title = $api.attr(obj, 'data-title');

	api.execScript({
		name : 'root',
		script : 'indexToDetail("' + title + '","' + url + '")'
	});
};
//
// 打开分类列表
var openClassify = function() {
	api.execScript({
		name : 'root',
		script : 'indexOpenClassify()'
	});
};
//
// 语音识别
var openSpeechRec = function() {
	api.execScript({
		name : 'root',
		script : 'indexOpenSpeechRec()'
	});
};
//
// 二维码
var openScanner = function() {
	api.execScript({
		name : 'root',
		script : 'indexOpenScanner()'
	});
};
//
// 通用header的window
var openLogin = function() {

	api.openFrame({
		name : 'member_login',
		url : './member/member_login.html',
		rect : {
			x : 0,
			y : 65,
			w : 'auto',
			h : 600
		},
		pageParam : {
			name : 'test'
		},
		bounces : false,
		bgColor : 'rgba(0,0,0,0)',
		vScrollBarEnabled : true,
		hScrollBarEnabled : true
	});
}
//用户注册
var doReg = function() {

	api.openFrame({
		name : 'member_reg',
		url : './member/member_reg.html',
		rect : {
			x : 0,
			y : $api.getStorage('headerPos') + 5,
			w : 'auto',
			h : api.winWidth - 121
		},
		pageParam : {
			name : 'test'
		},
		bounces : false,
		bgColor : 'rgba(0,0,0,0)',
		vScrollBarEnabled : true,
		hScrollBarEnabled : true
	});
}
//
// 打开分享浮动窗口
var openShareframe = function() {

	api.execScript({
		name : 'root',
		script : 'indexOpenShareframe()'
	});
}
//
// 请先登录提示
var showToast = function() {
	api.toast({
		msg : '请先登录',
		duration : 2000,
		location : 'middle'
	});
};

//
// // fun进入topic详细页
//     var funToTopic = function(){
//         // arguments
//         api.openFrame({
//             name: 'shareframe',
//             url: '../detailframes/shareframe.html',
//             bounces: false,
//             rect: {
//                 x: 0,
//                 y: 0,
//                 w: 'auto',
//                 h: 'auto'
//             }
//         });
//     };
// // 