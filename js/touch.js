function touch() {
    var ul=document.querySelector(".mobile-slideshows-swiper .swiper-wrap");
    var li=document.querySelectorAll(".mobile-slideshows-swiper .swiper-wrap .swiper-slide");
    console.log(li);
    var wrap=document.querySelector(".mobile-slideshows-swiper");
    var indicators=document.querySelectorAll(".mb-swiper-pagination span");
    console.log(indicators);
    var bannerWidth=wrap.offsetWidth;
    var startX = 0;
    var moveX = 0;
    var distanceX = 0;
    var isEnd = true;
    var count=li.length;
    var index = 0;
    window.onresize = function(){
        bannerWidth = wrap.offsetWidth;
        ul.style.width = bannerWidth*count + "px";
        ul.style.left = -bannerWidth*index + "px";
    }

    addEventListener(ul,"touchstart",function(e){
        var touch = e.targetTouches[0];
        startX = touch.clientX;
    })
    addEventListener(ul,"touchmove",function(e){
        if(isEnd == true){
            var touch = e.targetTouches[0];
            moveX = touch.clientX;
            distanceX = moveX - startX;
            ul.style.transition = "none";
            ul.style.left = -index*bannerWidth + distanceX + "px";
        }
    })
    addEventListener(ul,"touchend",function(e){
        isEnd = false;
        var x=bannerWidth/2;
        if(Math.abs(distanceX) >x){
            if(distanceX > 0){
                index --;
                if(index<0){
                    index=0;
                }
                ul.style.transition = "all 0.5s";
                ul.style.left = -index*bannerWidth + "px";
                for(var i=0;i<count;i++){
                    indicators[i].classList.remove("active");
                }
                indicators[index].classList.add("active");
            }
            else{
                index ++;
                if(index>count-1){
                    index=count-1;
                }
                ul.style.transition = "all 0.5s";
                ul.style.left = -index*bannerWidth + "px";
                for(var i=0;i<count;i++){
                    indicators[i].classList.remove("active");
                }
                indicators[index].classList.add("active");
            }
        }
        else{
            ul.style.transition = "all 0.5s";
            ul.style.left = -index*bannerWidth + "px";
        }
        startX = 0;
        moveX = 0;
        distanceX = 0;
        isEnd=true;
    })
}
window.onload=function(){
    touch();
    mouse();
}
function mouse() {
    var ul=document.querySelector(".pc-slideshows-swiper .swiper-wrap");
    var li=document.querySelectorAll(".pc-slideshows-swiper .swiper-wrap .swiper-slide");
    var wrap=document.querySelector(".pc-slideshows-swiper");
    var indicators=document.querySelectorAll(".pc-swiper-pagination .swiper-pagination-bullet");
    var bannerWidth=wrap.offsetWidth;
    var startX = 0;
    var moveX = 0;
    var distanceX = 0;
    var isEnd = true;
    var count=li.length;
    var index = 0;
    window.onresize = function(){
        bannerWidth = wrap.offsetWidth;
        ul.style.width = bannerWidth*count + "px";
        ul.style.left = -bannerWidth*index + "px";
        ul.onmousemove=null;
    }

   ul.onmousedown=function (event) {
       var event=event || window.event;
       startX = event.clientX;
       ul.onmousemove=function(event){
           if(isEnd == true){
               var event=event || window.event;
               moveX = event.clientX;
               distanceX = moveX - startX;
               ul.style.transition = "none";
               ul.style.left = -index*bannerWidth + distanceX + "px";
           }
       }
   }
   ul.onmouseup=function(event){
        var event=event || window.event;
       var x=wrap.offsetWidth/2;
       console.log(x);
        isEnd = false;
        if(Math.abs(distanceX) > x){
            if(distanceX > 0){
                index --;
                if(index<0){
                    index=0;
                }
                ul.style.transition = "all 0.5s";
                ul.style.left = -index*bannerWidth + "px";
                for(var i=0;i<count;i++){
                    indicators[i].classList.remove("active");
                }
                indicators[index].classList.add("active");
            }
            else{
                index ++;
                if(index>count-1){
                    index=count-1;
                }
                ul.style.transition = "all 0.5s";
                ul.style.left = -index*bannerWidth + "px";
                for(var i=0;i<count;i++){
                    indicators[i].classList.remove("active");
                }
                indicators[index].classList.add("active");
            }
        }
        else{
            ul.style.transition = "all 0.5s";
            ul.style.left = -index*bannerWidth + "px";
        }
       ul.onmousemove=null;
        startX = 0;
        moveX = 0;
        distanceX = 0;
        isEnd=true;
    }
}