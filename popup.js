var background_vale = chrome.extension.getBackgroundPage()

var connect_button = $(".connect_button")
var stop_button = $(".stop_button")

connect_button.click(function () {
    background_vale.connect_flag = true
})

stop_button.click(function () {
    background_vale.connect_flag = false
})

function getImgError() {
    alert("Network disconnect!");
}

// setInterval(function () {
//     var imgPath = "https://www.baidu.com/img/bd_logo1.png";
//     var timeStamp = Date.parse(new Date());
//     $("#img-test").attr("src", imgPath + "?timestamp=" + timeStamp);
// }, 5000)



// $().ready(function () {
//     $("#btn-test").click(function () {
//
//         var imgPath = "https://www.baidu.com/img/bd_logo1.png";
//         var timeStamp = Date.parse(new Date());
//         $("#img-test").attr("src", imgPath + "?timestamp=" + timeStamp);
//
//     });
// });
