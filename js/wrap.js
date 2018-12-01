/**
 * Created by student on 2018/11/25.
 */
$(function() {
    var index=0;
    var width=$(document).width();
    $(".pc-swiper-pagination .swiper-pagination-bullet").click(function() {
      var index=$(this).index();
        $(".pc-slideshows-swiper .swiper-wrap").css("transition","0.5s");
        $(".pc-slideshows-swiper .swiper-wrap").css("left",""+(-width*index)+"px");
        $(this).addClass("active").siblings().removeClass("active");
    })
    var time=0;
    function autoplay(){
        index++;
        if(index > 3){
            index = 0;
        }
        $(".pc-slideshows-swiper .swiper-wrap").css("transition","0.5s");
        $(".pc-slideshows-swiper .swiper-wrap").css("left",""+(-width*index)+"px");
        $(".pc-swiper-pagination .swiper-pagination-bullet").eq(index).addClass("active").siblings().removeClass("active");
    }
    time=setInterval(autoplay,4000);
    $(".pc-slideshows-swiper").mouseover(function(){
        clearInterval(time),function(){
            time=setInterval(autoplay, 4000);}
    })
    $(".pc-slideshows-swiper").mouseout(function(){
        time=setInterval(autoplay, 4000);
    })
    $(window).resize(function(){
        clearInterval(time),function(){
        time=setInterval(autoplay, 4000);}
    })
})