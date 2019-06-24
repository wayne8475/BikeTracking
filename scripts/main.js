window.onload = function() {
    init();
};

var navbar1 = document.querySelector("#homepage");
var navbar2 = document.querySelector("#trackpage");
var navbar3 = document.querySelector("#alertpage");
var loginbutton = document.querySelector("#loginbutton");
var useraccount = document.querySelector("#account");
var userpassword = document.querySelector("#password");
var loginwindow = document.querySelector("#loginwindow");
var trackwindow = document.querySelector("#trackwindow");
var getlocatbutton = document.querySelector("#getlocatbutton");
var logged = 0;
var mode = 0;
var marked = 0;
var map;
var marker;
var responseXML;

var httpRequest;

var NTHU = {lat: 24.794950, lng: 120.993319};
var Locat = {lat: 24.794950, lng: 120.993319};

var client = false;
// 用戶端成功連接 broker 時...
function onConnect() {
    // 確認連接後，才能訂閱主題
    alert("MQTT已經連接");
    console.log("onConnect then subscribe topic");
    client.subscribe("#");
}

// 收到訊息時...
function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
    alert("收到訊息");
}
function mqttinit() {
    // 建立 MQTT 用戶端實體. 你必須正確寫上你設置的埠號.
    // ClientId 可以自行指定，提供 MQTT broker 認證用
    client = new Paho.MQTT.Client("104.199.215.165", 1883, "1001a081994447b98929a90da9133be0");

    // 指定收到訊息時的處理動作
    client.onMessageArrived = onMessageArrived;

    // 連接 MQTT broker
    client.connect({userName:'hsnl_lab',password:'66066076',onSuccess:onConnect});
}

window.onload = function init() {
    mode = 0;
    logged = 0;
    navbar2.className = "nav-item nav-link disabled";
    navbar3.className = "nav-item nav-link disabled";
    trackwindow.style.display = "none";
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {zoom: 16, center: NTHU});
}

loginbutton.addEventListener("click", function() {
    if(mode == 0)
    {
        if(useraccount.value == "test@test.com" && userpassword.value =="nthuhsnl")
        {
            loginwindow.style.display = "none";
            navbar1.className = "nav-item nav-link";
            navbar1.innerHTML = "登出";
            navbar2.className = "nav-item nav-link active";
            navbar3.className = "nav-item nav-link ";
            mode = 1;
            initMap();
            trackwindow.style.display = "block";
        }
        else
        {
            alert("帳號或密碼錯誤，請再次確認");
            return;
        }
    }   
})

navbar1.addEventListener("click", function() {
    if(mode == 1)
    {
        marker.setMap(null);
        navbar1.innerHTML = "首頁";
        trackwindow.style.display = "none";
        loginwindow.style.display = "block";
        navbar1.className = "nav-item nav-link active";
        navbar2.className = "nav-item nav-link disabled";
        navbar3.className = "nav-item nav-link disabled";   
        mode = 0;     
    }  
})

navbar3.addEventListener("click", function() {
    if(mode == 1)
    {
        marker.setMap(null);
        trackwindow.style.display = "none";
        navbar1.className = "nav-item nav-link ";
        navbar2.className = "nav-item nav-link ";
        navbar3.className = "nav-item nav-link active";   
    }  
})

navbar2.addEventListener("click", function() {
    if(mode == 1)
    {
        marker.setMap(null);
        trackwindow.style.display = "block";
        navbar1.className = "nav-item nav-link ";
        navbar2.className = "nav-item nav-link active";
        navbar3.className = "nav-item nav-link ";   
    }  
})

getlocatbutton.addEventListener("click", function() {
    if(marked == 0){
        mqttinit();
    }
    else{
        marker.setMap(null);
        
    }
})
