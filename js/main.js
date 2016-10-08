// JavaScript Document
$(function(){
	var $ = jQuery.noConflict();
	// 滚动热门关键词
    var scrollTimer;
    $('#js-scroller').hover(function() {
      clearInterval(scrollTimer);
    }, function() {
      var $ths = $(this);
      scrollTimer = setInterval(function() {
        scroller($ths);
      }, 2000);
    }).trigger('mouseleave');

    function scroller($obj) {
      var height = $obj.find('li').height(); // 滚动高度
      $obj.find('li').first().animate({marginTop: -height}, 500, function() {
        $(this).appendTo($obj).css('margin-top', 0);
      });
    }

	// 下拉框插件
	if ($.fn.wselect) {
	  $('.js-wselect').wselect();
	}


  //专题切换
  //$("#scroll_zt li:first").show().siblings("li").hide();
  var sWidth = $("#scroll_zt ul").width();
  var len = $("#scroll_zt ul li").length;
  var index = 0;
  

  $("#dot_list li").mouseover(function() {                 
    index = $("#dot_list li").index(this);               
    showPics(index);
  });


  $("#scroll_zt ul").css("width",sWidth * (len));
  
  
  // showPics
  function showPics(index) {
    var nowLeft = -index*sWidth;
    $("#scroll_zt ul").stop(true,false).animate({"left":nowLeft},300);
    $("#dot_list li").removeClass("on").eq(index).addClass("on"); 
  }
  
  //prev
  $("#zt_prev").click(function(){
    if(index > 0)
    {
      index =index - 1;
      if(index < 0)
      {
        return false;
      }
      showPics(index);
    }
    
  })
  
  //next
  $("#zt_next").click(function(){
    if(index < len - 1 )
    {
      index = index + 1;
      if(index > len - 1)
      {
        return false;
      }
      showPics(index);
    }
  })


  //子导航点击更多
  
 // var $ = $.noConflict();
  $("#more_btn").click(function(){
	 var mbtn=document.getElementById("more_btn");
	 var fmore=document.getElementById("fl_more");
	 // var $ = $.noConflict();
    if(mbtn.innerHTML=="+")
    {
     // $("#more_btn").html("-");
	 mbtn.innerHTML="-";
     // $("#fl_more").show();
	 fmore.style.display="block";
	 
    }
    else
    {
      //$("#more_btn").html("+");
	  mbtn.innerHTML="+";
     // $("#fl_more").hide();
	 fmore.style.display="none";
    }
  })


});

/*VR*/
jQuery(function($){
  //公共tab
  $(".tab_title_box h3").mouseover(function(){
    var index=$(this).index(),
        $this=$(this),
        $more=$this.closest(".tab_title").find(".more a"),
        $a=$this.find("a");
        $this.addClass("selected").siblings().removeClass("selected");
    $this.closest(".tab_title").siblings(".tabs-con").hide().eq(index).show();
    if($this.closest(".tab_title").has(".more")){
       $more.attr("href",$a.attr("href"));
    }

  });




});