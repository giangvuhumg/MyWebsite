document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('fullName').onkeyup = function(){
        if(document.getElementById('fullName').value == ""){
            document.getElementById('mes-user').innerHTML = 'Bạn không được bỏ trống';
            document.getElementById('mes-user').style.color ="red";
        }else{
            document.getElementById('mes-user').innerHTML = "";
        }
    }
    document.getElementById('account').onkeyup = function(){
        if(document.getElementById('account').value.length < 8){
            document.getElementById('mes-account').innerHTML = 'Tên đăng nhập phải có 8 kí tự trở lên'
            document.getElementById('mes-account').style.color = "red";
        }else{
            document.getElementById('mes-account').innerHTML = "";
        }
    }
    document.getElementById('password').onkeyup = function(){
        if(document.getElementById('password').value ==""){
            document.getElementById('mes-pass').innerHTML = 'Bạn không được để trống mật khẩu';
            document.getElementById('mes-pass').style.color = "red";
        }else if(document.getElementById('password').value.length < 6){
            document.getElementById('mes-pass').innerHTML = 'Mật khẩu phải trên 6 kí tự';
            document.getElementById('mes-pass').style.color = 'red';
        }else{
            document.getElementById('mes-pass').innerHTML = "";
        }
    }
    document.getElementById('check-pass').onkeyup = function(){
        if(document.getElementById('password').value != document.getElementById('check-pass').value){
            document.getElementById('check-password').innerHTML = "Mật khẩu không trùng khớp";
            document.getElementById('check-password').style.color = 'red';
        }else{               
            document.getElementById('check-password').innerHTML = "";
        }
    }
    //check mail
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    document.getElementById('email').onkeyup = function(){
        if(document.getElementById('email').value.match(mailformat)){
            document.getElementById('mes-email').innerHTML = "";
        }else{
            document.getElementById('mes-email').innerHTML = "Email không hợp lệ";
            document.getElementById('mes-email').style.color = 'red';
        }
    }
    //check phone
    var phoneformat = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    document.getElementById('phone').onkeyup = function(){
        if(document.getElementById('phone').value.match(phoneformat)){
            document.getElementById('mes-phone').innerHTML = "";
        }else{
            document.getElementById('mes-phone').innerHTML = "Số điện thoại không hợp lệ";
            document.getElementById('mes-phone').style.color = 'red';
            }
    }
});