/*设置导航的高度*/
var NavH=$(window).height()-100;
var moduleH=NavH-50;
$(".main_left").height(NavH);
$(".main_right").height(NavH);
$(".main_module").height(moduleH);
/*手风琴*/
$(".jT1").click(function(){
  var dir=$(this).attr("dir");
  //alert(dir);
  if(dir=="1"){
    $(".main_module1").show();
    $(".main_module1").siblings().hide();
    $(this).attr("dir","2");
    $(this).attr("src","images/jtop.png");
    $(this).parent().css("background","#FD566A");
    $(this).parent().find(".txt").css("color","#fff");
    $(this).parent().find(".user").attr("src","images/user2.png");
    $(".ul_one").slideDown();
    $(this).parent().siblings().find(".jT").attr("src","images/jbottom.png");
    $(this).parent().siblings().find(".jT2").attr("dir","1");
    $(this).parent().siblings().find(".jT3").attr("dir","1");
    $(this).parent().siblings().find(".jT4").attr("dir","1");
    $(".nav_two>.txt").css("color","#A69C9B");
    $(".nav_two>.user").attr("src","images/consult1.png");
    $(".nav_three>.txt").css("color","#A69C9B");
    $(".nav_three>.user").attr("src","images/about1.png");
    $(".nav_four>.txt").css("color","#A69C9B");
    $(".nav_four>.user").attr("src","images/core1.png");
    $(this).parent().siblings().css("background","transparent");
    $(".ul_four").slideUp();
    $(".ul_one li").removeClass("li_active");
    $(".ul_four li").removeClass("li_active");
    $(".wel_time").show();
  }if(dir=="2"){
    $(this).attr("dir","1");
    $(this).attr("src","images/jbottom.png");
    $(this).parent().css("background","transparent");
    $(this).parent().find(".txt").css("color","#A69C9B");
    $(this).parent().find(".user").attr("src","images/user1.png");
    $(".ul_one").slideUp();
    $(".ul_one li").removeClass("li_active");
    $(".ul_four li").removeClass("li_active");
  }
});
$(".jT2").click(function(){
  var dir=$(this).attr("dir");
  //alert(dir);
  if(dir=="1"){
    module6();
    $(this).attr("dir","2");
    $(this).attr("src","images/jtop.png");
    $(this).parent().css("background","#FD566A");
    $(this).parent().find(".txt").css("color","#fff");
    $(this).parent().find(".user").attr("src","images/consult2.png");
    //$(".ul_one").slideDown();
    $(this).parent().siblings().find(".jT").attr("src","images/jbottom.png");
    $(this).parent().siblings().find(".jT1").attr("dir","1");
    $(this).parent().siblings().find(".jT3").attr("dir","1");
    $(this).parent().siblings().find(".jT4").attr("dir","1");
    $(".nav_one>.txt").css("color","#A69C9B");
    $(".nav_one>.user").attr("src","images/user1.png");
    $(".nav_three>.txt").css("color","#A69C9B");
    $(".nav_three>.user").attr("src","images/about1.png");
    $(".nav_four>.txt").css("color","#A69C9B");
    $(".nav_four>.user").attr("src","images/core1.png");
    $(this).parent().siblings().css("background","transparent");
    $(".ul_one").slideUp();
    $(".ul_four").slideUp();
    $(".ul_one li").removeClass("li_active");
    $(".ul_four li").removeClass("li_active");
  }if(dir=="2"){
    $(this).attr("dir","1");
    $(this).attr("src","images/jbottom.png");
    $(this).parent().css("background","transparent");
    $(this).parent().find(".txt").css("color","#A69C9B");
    $(this).parent().find(".user").attr("src","images/consult1.png");
    $(".ul_one").slideUp();
    $(".ul_one li").removeClass("li_active");
    $(".ul_four li").removeClass("li_active");
  }
});
$(".jT3").click(function(){
  var dir=$(this).attr("dir");
  //alert(dir);
  if(dir=="1"){
    $(".main_module7").show();
    $(".main_module7").siblings().hide();
    $(this).attr("dir","2");
    $(this).attr("src","images/jtop.png");
    $(this).parent().css("background","#FD566A");
    $(this).parent().find(".txt").css("color","#fff");
    $(this).parent().find(".user").attr("src","images/about2.png");
    //$(".ul_one").slideDown();
    $(this).parent().siblings().find(".jT").attr("src","images/jbottom.png");
    $(this).parent().siblings().find(".jT1").attr("dir","1");
    $(this).parent().siblings().find(".jT2").attr("dir","1");
    $(this).parent().siblings().find(".jT4").attr("dir","1");
    $(".nav_one>.txt").css("color","#A69C9B");
    $(".nav_one>.user").attr("src","images/user1.png");
    $(".nav_two>.txt").css("color","#A69C9B");
    $(".nav_two>.user").attr("src","images/consult1.png");
    $(".nav_four>.txt").css("color","#A69C9B");
    $(".nav_four>.user").attr("src","images/core1.png");
    $(this).parent().siblings().css("background","transparent");
    $(".ul_one").slideUp();
    $(".ul_four").slideUp();
    $(".ul_one li").removeClass("li_active");
    $(".ul_four li").removeClass("li_active");
    $(".wel_time").hide();
  }if(dir=="2"){
    $(this).attr("dir","1");
    $(this).attr("src","images/jbottom.png");
    $(this).parent().css("background","transparent");
    $(this).parent().find(".txt").css("color","#A69C9B");
    $(this).parent().find(".user").attr("src","images/about1.png");
    $(".ul_one").slideUp();
    $(".ul_one li").removeClass("li_active");
    $(".ul_four li").removeClass("li_active");
  }
});
$(".jT4").click(function(){
  var dir=$(this).attr("dir");
  //alert(dir);
  if(dir=="1"){
    $(this).attr("dir","2");
    $(this).attr("src","images/jtop.png");
    $(this).parent().css("background","#FD566A");
    $(this).parent().find(".txt").css("color","#fff");
    $(this).parent().find(".user").attr("src","images/core2.png");
    $(".ul_four").slideDown();
    $(this).parent().siblings().find(".jT").attr("src","images/jbottom.png");
    $(this).parent().siblings().find(".jT1").attr("dir","1");
    $(this).parent().siblings().find(".jT2").attr("dir","1");
    $(this).parent().siblings().find(".jT3").attr("dir","1");
    $(".nav_one>.txt").css("color","#A69C9B");
    $(".nav_one>.user").attr("src","images/user1.png");
    $(".nav_two>.txt").css("color","#A69C9B");
    $(".nav_two>.user").attr("src","images/consult1.png");
    $(".nav_three>.txt").css("color","#A69C9B");
    $(".nav_three>.user").attr("src","images/about1.png");
    $(this).parent().siblings().css("background","transparent");
    $(".ul_one").slideUp();
    $(".ul_one li").removeClass("li_active");
    $(".ul_four li").removeClass("li_active");
  }if(dir=="2"){
    $(this).attr("dir","1");
    $(this).attr("src","images/jbottom.png");
    $(this).parent().css("background","transparent");
    $(this).parent().find(".txt").css("color","#A69C9B");
    $(this).parent().find(".user").attr("src","images/core1.png");
    $(".ul_four").slideUp();
    $(".ul_one li").removeClass("li_active");
    $(".ul_four li").removeClass("li_active");
  }

})



/*获取当前时间*/
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var onlyDate = year + '年' + month + '月' + day +'日';
var week = "星期" + "日一二三四五六".split("")[new Date().getDay()];
$(".time_txt").html(onlyDate+"  "+week);
/*分页*/
function rem(obj){
    var num_val=$(obj).parent().find(".num_html").val();
    if(num_val<=1){
      $(obj).parent().find(".num_html").val("1");
    }else{
      $(obj).parent().find(".num_html").val(num_val-1);
    }
}
function add(obj){
    var num_val=$(obj).parent().find(".num_html").val();
    $(obj).parent().find(".num_html").val(parseInt(num_val)+1);
}

/*新增账号管理员*/
function module2(){
    $(".main_module2").show();
    $(".main_module2").siblings().hide();
    $(".wel_time").hide();
}
function module22(){
    $(".main_module22").show();
    $(".main_module22").siblings().hide();
    $(".wel_time").hide();
}
/*发布账号*/
function module3(){
    $(".main_module3").show();
    $(".main_module3").siblings().hide();
    $(".wel_time").hide();
}
function module33(){
    $(".main_module33").show();
    $(".main_module33").siblings().hide();
    $(".wel_time").hide();
}
/*上传账号*/
function module4(){
    $(".main_module4").show();
    $(".main_module4").siblings().hide();
    $(".wel_time").hide();
}
function module44(){
    $(".main_module44").show();
    $(".main_module44").siblings().hide();
    $(".wel_time").hide();
}
/*追溯账号*/
function module5(){
    $(".main_module5").show();
    $(".main_module5").siblings().hide();
    $(".wel_time").hide();
}
function module55(){
    $(".main_module55").show();
    $(".main_module55").siblings().hide();
    $(".wel_time").hide();
}
/*咨询*/
function module6(){
    $(".main_module6").show();
    $(".main_module6").siblings().hide();
    $(".wel_time").hide();
}
/*咨询添加*/
function module66(){
    $(".main_module66").show();
    $(".main_module66").siblings().hide();
    $(".wel_time").hide();
}
/*产品管理*/
function module8(){
    $(".main_module8").show();
    $(".main_module8").siblings().hide();
    $(".wel_time").hide();
}
/*添加商品*/
function module9(){
    $(".main_module9").show();
    $(".main_module9").siblings().hide();
    $(".wel_time").hide();
}
/*推荐经销商*/
function module10(){
    $(".main_module10").show();
    $(".main_module10").siblings().hide();
    $(".wel_time").hide();
}
/*新增推荐经销商*/
function module11(){
    $(".main_module11").show();
    $(".main_module11").siblings().hide();
    $(".wel_time").hide();
}
/*增加图片*/
function xzeng(obj){
   var dir=$(obj).attr("dir");
   if(dir==1){
    $(".X_img2").show();
    dir=$(obj).attr("dir",parseInt(dir)+1);
   }else if(dir==2){
    $(".X_img3").show();
    $(obj).hide();
   }
}
$(".ul_one li").click(function(){
    $(this).addClass("li_active").siblings().removeClass("li_active");
    $(".ul_four li").removeClass("li_active");
});
$(".ul_four li").click(function(){
    $(this).addClass("li_active").siblings().removeClass("li_active");
    $(".ul_one li").removeClass("li_active");
});
/*删除操作*/
function del(obj){
   $(obj).parent().parent().remove();
}
/*控制开关*/
function projectSwitch(obj1){
  $(obj1).toggleClass("switch_primary");
  var clazz = $(obj1).attr("class");  //判断是否含有class名switch_primary
  if(clazz.indexOf("switch_primary")>-1){
     $(obj1).find(".on_left").removeClass("on_style");
     $(obj1).find(".off_right").addClass("off_style");
  }else {
     $(obj1).find(".on_left").addClass("on_style");
     $(obj1).find(".off_right").removeClass("off_style");
  };
};
/*上传图片*/
$(".filepath").on("change",function() {
   //alert(1)
   var srcs = getObjectURL(this.files[0]); //获取路径
   $(this).parent().find("img").attr("src",srcs); //this指的是input
  })

 function getObjectURL(file) {
  var url = null;
  if (window.createObjectURL != undefined) {
   url = window.createObjectURL(file)
  } else if (window.URL != undefined) {
   url = window.URL.createObjectURL(file)
  } else if (window.webkitURL != undefined) {
   url = window.webkitURL.createObjectURL(file)
  }
  return url
 };
