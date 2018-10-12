// var connect_flag = false;
//
// setInterval(function () {
//     chrome.runtime.sendMessage(
//         {
//             // sy_time: sy_time,
//             // result: 1
//         },
//         function (response) {
//             connect_flag = response.connect_flag
//         }
//     );

// if (connect_flag) {
function login() {
    // http://wifi.gd118114.cn/login.ajax

    $.ajax({//临时放通
        type: 'POST',
        url: '../../../login.ajax',
        cache: false,
        data: 'username=common&password=114free',
        dataType: 'json',
    });
}

setInterval(function () {
    login();
}, 3000)
// }

// }, 500)






