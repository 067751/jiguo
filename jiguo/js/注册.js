var phone = document.getElementById('phone');
var xiaoyan = document.getElementById('xiaoyan');
var yanzheng = document.getElementById('yangzheng');
var user = document.getElementById('user');
var psd = document.getElementById('psd');
var psd2 = document.getElementById('psd2');
var s_ = document.getElementsByTagName('span');
var but = document.getElementById('submit');
phone_s = s_[0];
xiaoyan_s = s_[1];
yanzheng_s = s_[2];
user_s = s_[3];
psd_s = s_[4];
psd2_s = s_[5];


//验证手机号
phone.onfocus = function () {
    phone_s.style.display = "block";
    phone_s.innerHTML = '<i class="ati"></i>请输入手机号';
}
phone.onblur = function () {
    reg = /^1[3-9][0-9]{9}$/;
    if (phone.value == '') {
        phone_s.innerHTML = '<i class="err"></i>不能为空';
        return false;
    }
    else if (!reg.test(phone.value)) {
        phone_s.innerHTML = '<i class="err"></i>输入错误手机号';
        return false;
    } else {
        phone_s.innerHTML = '<i class="ok"></i>输入正确';
        return true;
    }
}
//验证效验码
xiaoyan.onfocus = function () {
    xiaoyan_s.style.display = "block";
    xiaoyan_s.innerHTML = '<i class="ati"></i>请输入效验码';
}
xiaoyan.onblur = function () {
    if (xiaoyan.value == '') {
        xiaoyan_s.innerHTML = '<i class="err"></i>不能为空';
        return false;
    }
    else if (xiaoyan.value !== 'r2b7') {
        xiaoyan_s.innerHTML = '<i class="err"></i>效验码输入错误';
        return false;
    } else if (xiaoyan.value == 'r2b7') {
        xiaoyan_s.innerHTML = '<i class="ok"></i>输入正确';
        return true;
    }
}



//获取验证码
var tableText = document.getElementById('tableText');
var obj;
var timer;
tableText.onclick = function () {
    tableText.style.pointerEvents = "none";
    var num_ = 60;
    obj = [];
    clearInterval(timer)
    timer = setInterval(function () {
        num_--;

        if (tableText.value == '') {
            tableText.innerHTML = '获取验证码';
            clearInterval(timer)
            // tableText.style.pointerEvents = "";
            // xx[0].innerHTML = '手机号不能为空';
            //  yanzheng_s.innerHTML = '<i class="err"></i>不能为空';

        } else if (num_ == 57) {
            for (var i = 0; i < 4; i++) {
                var num = Math.floor(Math.random() * 10);
                obj.push(num)
            }
            obj = obj.join('');
            alert('你的验证码为：' + obj);
        } else if (num_ == 0) {
            clearInterval(timer)
            num_ = 60;
            tableText.style.pointerEvents = "";
            tableText.innerHTML = '重新获取';

        } else if (num_ <= 60 && num_ >= 0) {

            tableText.innerHTML = num_ + '秒后重新发送';
        } else if (yanzheng.value == '') {
            yanzheng_s.innerHTML = '<i class="err"></i>不能为空';
        }


    }, 1000)
}

//验证用户名
user.onfocus = function () {
    user_s.style.display = "block";
    user_s.innerHTML = '<i class="ati"></i>请输入中文用户名';
}
user.onblur = function () {
    yhm = /[\u4e00-\u9fa5]/gm;
    if (user.value == '') {
        user_s.innerHTML = '<i class="err"></i>不能为空';
        return false;
    }
    else if (!yhm.test(user.value)) {
        user_s.innerHTML = '<i class="err"></i>用户名格式不对';
        return false;
    } else {
        user_s.innerHTML = '<i class="ok"></i>输入正确';
        return true;
    }
}

//设置密码
psd.onfocus = function () {
    psd_s.style.display = 'block';
    psd_s.innerHTML = '<i class="ati"></i>密码长度在6-12个字符';
}
psd.onblur = function () {
    var mm1 = /^\w{6,12}$/;
    var mm2 = /[^0-9]/;
    var mm3 = /[^a-zA-Z]/;
    if (psd.value == '') {
        psd_s.innerHTML = '<i class="err"></i>不能为空';
        return false;
    } else if (!mm1.test(psd.value)) {
        psd_s.innerHTML = '<i class="err"></i>长度不在范围内';
        return false;
    } else if (!mm2.test(psd.value)) {
        psd_s.innerHTML = '<i class="err"></i>密码不能全是数字'
        return false;
    } else if (!mm3.test(mm3)) {
        psd_s.innerHTML = '<i class="err"></i>密码不能全是字母'
        return false;
    } else {
        psd_s.innerHTML = '<i class="ok"></i>正确'
        return true
    }
}


//确认密码
psd2.onfocus = function () {
    psd2_s.style.display = 'block';
    psd2_s.innerHTML = '<i class="ati"></i>请输入相同密码'
}
psd2.onblur = function () {
    if (psd2.value == "") {
        psd2_s.innerHTML = '<i class="err"></i>不能为空';
        return false;
    }
    else if (psd.value != psd2.value) {
        psd2_s.innerHTML = '<i class="err"></i>两次密码不一致';
        return false;
    }
    else {
        psd2_s.innerHTML = '<i class="ok"></i>正确'
        return true;
    }
}
//跳转首页
submit.onclick = function () {
    if (phone.onblur() && xiaoyan.onblur() && user.onblur() && psd.onblur() && psd2.onblur()) {
       window.location.href="../首页.html";

    }
}