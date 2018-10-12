//默认数据
connect_flag = false


// 接收消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {


    if (request.result) {
        sendResponse({});
    }
});
