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

var httpRequest = new XMLHttpRequest();

var NTHU = {lat: 24.794950, lng: 120.993319};
var Locat = {lat: 24.794950, lng: 120.993319};


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
        httpRequest.onreadystatechange = getGPSvalue();
        httpRequest.open('POST', 'https://campus.kits.tw/api/get/data/aa33f051', true);
        httpRequest.setRequestHeader('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNiNzE0OGYxNmRlM2YxNWU0Y2ZmOGY2NTA2OTdhN2Q4MDJkNDE5YTg0ZjE2MjIzNTVjOWY5MDg2ZGQyMTIwMGU0NjljNjViNDM5YjllZjAzIn0.eyJhdWQiOiIyIiwianRpIjoiM2I3MTQ4ZjE2ZGUzZjE1ZTRjZmY4ZjY1MDY5N2E3ZDgwMmQ0MTlhODRmMTYyMjM1NWM5ZjkwODZkZDIxMjAwZTQ2OWM2NWI0MzliOWVmMDMiLCJpYXQiOjE1NjEyMzg2MDYsIm5iZiI6MTU2MTIzODYwNiwiZXhwIjoxNTkyODYxMDA2LCJzdWIiOiIyNyIsInNjb3BlcyI6W119.ZmiTZ4z5UxPXxTBpRQ9xK6py44RaGPgmLUpfB3ZUoTHowEOae1Wy9YHDl-IvOHVr_qtT6NV5EQ36MRBEdrGWvzWUSCefesvSrqnpLmPoDuigIS7JPALgJEmLEchQ0OJajjHouCcsNA0criHKIPoBlvTS88gzjFQ4140Qk7UT-QDF2Ls22GnrY8FqNBP_zwmdb3yb_SAgnCYYCyaiMdW6ZvX1Kx110asUpZ9-2QnKyRNguEEYGLAhNyS70KnmUBS_jRCSKvjmpCkeC7rXZlNKgm79h8lKOTxUnwbwtzFk2Rjbmdsk3VN4FLxE209iaL276KRXXoRwPueVQE21yIJvWiS77aNE7ok1-fPron-ChA7q4t9KgJ8nUlBtQH8ZT0cihDSIzDRJNmY_jPtlkA0EHMvDSbO5rbe06Iq93TKc-faMOHcvqR0kCN6FLGS1Tvwx1U8PYGsJTBzYU_I8Cm8tXfaLYrs1VHV75C6r_jt3KgyXNWsGbza-KY5AysIVyREKOhPOOSdayUVbHUvhegoeRuNuH8ZwaoBmKVPGRwtulThVBB2fe27qW1B3xUwc5yhtoETNEaLVK-23TPBV8JkXpk2xoRAhJuCDfQ_bJWICwCIt8kjUH3sBt8vz4M5PBhfpml0QmjCFHZB4xaLbB9xj-02HwnLO2wkS-AMiENqP3u0');
        httpRequest.setRequestHeader('Accept', 'application/json');
        httpRequest.send();
        marker = new google.maps.Marker({position: NTHU, map: map, animation: google.maps.Animation.BOUNCE});
        marked = 1;
    }
    else{
        marker.setMap(null);
        httpRequest.onreadystatechange = getGPSvalue();
        httpRequest.open('POST', 'https://campus.kits.tw/api/get/data/aa33f051', true);
        httpRequest.setRequestHeader('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNiNzE0OGYxNmRlM2YxNWU0Y2ZmOGY2NTA2OTdhN2Q4MDJkNDE5YTg0ZjE2MjIzNTVjOWY5MDg2ZGQyMTIwMGU0NjljNjViNDM5YjllZjAzIn0.eyJhdWQiOiIyIiwianRpIjoiM2I3MTQ4ZjE2ZGUzZjE1ZTRjZmY4ZjY1MDY5N2E3ZDgwMmQ0MTlhODRmMTYyMjM1NWM5ZjkwODZkZDIxMjAwZTQ2OWM2NWI0MzliOWVmMDMiLCJpYXQiOjE1NjEyMzg2MDYsIm5iZiI6MTU2MTIzODYwNiwiZXhwIjoxNTkyODYxMDA2LCJzdWIiOiIyNyIsInNjb3BlcyI6W119.ZmiTZ4z5UxPXxTBpRQ9xK6py44RaGPgmLUpfB3ZUoTHowEOae1Wy9YHDl-IvOHVr_qtT6NV5EQ36MRBEdrGWvzWUSCefesvSrqnpLmPoDuigIS7JPALgJEmLEchQ0OJajjHouCcsNA0criHKIPoBlvTS88gzjFQ4140Qk7UT-QDF2Ls22GnrY8FqNBP_zwmdb3yb_SAgnCYYCyaiMdW6ZvX1Kx110asUpZ9-2QnKyRNguEEYGLAhNyS70KnmUBS_jRCSKvjmpCkeC7rXZlNKgm79h8lKOTxUnwbwtzFk2Rjbmdsk3VN4FLxE209iaL276KRXXoRwPueVQE21yIJvWiS77aNE7ok1-fPron-ChA7q4t9KgJ8nUlBtQH8ZT0cihDSIzDRJNmY_jPtlkA0EHMvDSbO5rbe06Iq93TKc-faMOHcvqR0kCN6FLGS1Tvwx1U8PYGsJTBzYU_I8Cm8tXfaLYrs1VHV75C6r_jt3KgyXNWsGbza-KY5AysIVyREKOhPOOSdayUVbHUvhegoeRuNuH8ZwaoBmKVPGRwtulThVBB2fe27qW1B3xUwc5yhtoETNEaLVK-23TPBV8JkXpk2xoRAhJuCDfQ_bJWICwCIt8kjUH3sBt8vz4M5PBhfpml0QmjCFHZB4xaLbB9xj-02HwnLO2wkS-AMiENqP3u0');
        httpRequest.setRequestHeader('Accept', 'application/json');
        httpRequest.send();
        marker = new google.maps.Marker({position: NTHU, map: map, animation: google.maps.Animation.BOUNCE});
    }
})

function getGPSvalue() {
    Locat = {lat: 24.794950, lng: 120.993319};
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        // 一切 ok, 繼續解析
        if (httpRequest.status === 200) {
            alert(httpRequest.responseText);
            // 萬事具備
        } else {
            alert("似乎有點問題。");
            // 似乎有點問題。
            // 或許伺服器傳回了 404（查無此頁）
            // 或者 500（內部錯誤）什麼的。
        }
    } else {
        // 還沒完成
        alert("還沒完成");
    }
}