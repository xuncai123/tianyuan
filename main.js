/**
 * Created by Administrator on 2016/10/19.
 */
$().ready(function () {

    var account = $(".userbox>a");
    var page = $(".paging>li:not('.nextpage')>a");
    var next = $(".paging>li.nextpage>a");

//弹窗
    var alert={};
    alert.out = $(".output-btn");//导出订单按钮
    alert.alertbox=$(".alert-box");//弹窗盒子
    alert.log=$(".account-info .changelog");//修改登录密码按钮
    alert.logalertbox=$(".login-box");//修改登录密码的盒子
    alert.pay=$(".account-info .changepay");//修改支付密码的盒子
    alert.payalertbox=$(".pay-box");//修改支付密码的盒子
    alert.confirm=$(".alertbox,.login-box,.pay-box .yes-btn");//弹窗的确定按钮

    alert.out.bind("click",function () {
        alert.alertbox.show();
    });

    alert.confirm.bind("click",function () {
        alert.alertbox.hide();
        alert.logalertbox.hide();
        alert.payalertbox.hide();
    });

    alert.log.bind('click',function () {
        alert.logalertbox.show();
    });

    alert.pay.bind('click',function () {
        alert.payalertbox.show();
    });

//用户管理页面的切换
    account.bind('click', function (e) {
        e.preventDefault();
        $(this).toggleClass("active")
            .siblings("a").removeClass("active")
    });

    //页码切换

    page.bind('click', function (e) {
        e.preventDefault();
        $(this).parent('li').addClass("active")
            .siblings("li").removeClass("active");

    });


    next.bind("click", function () {
     $(".paging>li.active").removeClass("active")
         .next("li:not('.next')").addClass("active");

        })
});
