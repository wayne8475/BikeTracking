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
var logged = 0;
var mode = 0;


window.onload = function init() {
    mode = 0;
    logged = 0;
    navbar2.className = "nav-item nav-link disabled";
    navbar3.className = "nav-item nav-link disabled";
    trackwindow.style.display = "none";
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
        trackwindow.style.display = "none";
        navbar1.className = "nav-item nav-link ";
        navbar2.className = "nav-item nav-link ";
        navbar3.className = "nav-item nav-link active";   
    }  
})

navbar2.addEventListener("click", function() {
    if(mode == 1)
    {
        trackwindow.style.display = "block";
        navbar1.className = "nav-item nav-link ";
        navbar2.className = "nav-item nav-link active";
        navbar3.className = "nav-item nav-link ";   
    }  
})

