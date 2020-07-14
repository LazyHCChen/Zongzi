AOS.init();

$(window).scroll(function(e){
  if($(window).scrollTop()<=0)
    $(".scroll").addClass("go_top");
  else
    $(".scroll").removeClass("go_top");
});

$(window).scroll(function(e){
  if($(window).scrollTop()>0)
    $(".navbar").addClass("nav_top");
  else
    $(".navbar").removeClass("nav_top");
});



$(document).ready(function(){
    $("#shrimpCir").hover(function(){
        $("#card").addClass("shrimpContent").append("<h2>冬蝦<span>3兩(187.5克)</span></h2>")
    },function(){
        $("#card").children().remove()
        $("#card").removeClass("shrimpContent")
    })

    $("#porkCir").hover(function(){ 
        $("#card").addClass("porkContent").append("<h2>豬肉</h2><close><h3>900公克</h3><p>※先用少許鹽及胡椒粉醃過</p></close>")
    },function(){
        $("#card").children().remove()
        $("#card").removeClass("porkContent")
    })

    $("#peanutCir").hover(function(){
        $("#card").addClass("peanutContent").append("<h2>花生<span>600公克</span></h2>")
    },function(){
        $("#card").children().remove()
        $("#card").removeClass("peanutContent")
    })
    
    $("#smallShrimpCir").hover(function(){
        $("#card").addClass("smallShrimpContent").append("<h2>蝦米<span>3兩(187.5克)</span></h2>")
    },function(){
        $("#card").children().remove()
        $("#card").removeClass("smallShrimpContent")
    })

    $("#mushroomCir").hover(function(){
        $("#card").addClass("mushroomContent").append("<h2>香菇<span>200公克</span></h2>")
    },function(){
        $("#card").children().remove()
        $("#card").removeClass("mushroomContent")
    })

    $("#redOnionCir").hover(function(){
        $("#card").addClass("redOnionContent").append("<h2>紅蔥頭<span>200公克</span></h2>")
    },function(){
        $("#card").children().remove()
        $("#card").removeClass("redOnionContent")
    })

    $("#leafCir").hover(function(){
        $("#card").addClass("leafContent").append("<h2>粽葉<span>適量</span></h2>")
    },function(){
        $("#card").children().remove()
        $("#card").removeClass("leafContent")
    })

    $("#riceCir").hover(function(){
        $("#card").addClass("riceContent").append("<h2>尖糯米<span>4斤/48顆左右</span></h2>")
    },function(){
        $("#card").children().remove()
        $("#card").removeClass("riceContent")
    })

    $("#ropeCir").hover(function(){
        $("#card").addClass("ropeContent").append("<h2>繩帶<span>適量</span></h2>")
    },function(){
        $("#card").children().remove()
        $("#card").removeClass("ropeContent")
    })


})


//top
$('#back_top').click(function() { 
    $('body,html').animate({
        scrollTop : 0                     
    }, 500);
});

$(window).scroll(function() {
    if ($(this).scrollTop() >= 30) {        
        $('#back_top').fadeIn(100);   
    } else {
        $('#back_top').fadeOut(100);   
    }
});