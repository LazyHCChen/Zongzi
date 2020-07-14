
var t=0;
var number = document.getElementById("count").innerText;

var timer = setInterval(function(){
    if(t<100){
				t+=1;
		}
		if(t==50){
			$(".count").css("color","white")
		}
		$(".colorFilled").css("width",t+"%");
		$(".colorFilled").css("opacity",t/100+0.2);
		number = t+"%";
		console.log(t);
		count.innerText = number;
		if(t==100){
			document.location.href="./index1.html"
		}
	},60)	

		// $(".RD").css("opacity",(t/100))
		// if(t==100){
			// $(".count").css("color","white")
			// $(".greenLeft").css("animation-name","gOpen");
			// $(".greenRight").css("animation-name","gOpen")	}

var toLeft1 = setInterval(function(){
		$(".paintRight").css("animation-name","toLeft")
		$(".paintRight").css("animation-fill-mode","forwards")
		$(".paintRight").css("z-index","1488")
	},1000)	

var Right1 = setTimeout(function(){
		$(".paintLeft").css("animation-name","toRight")
		$(".paintLeft").css("animation-fill-mode","forwards")
		$(".paintLeft").css("z-index","1492")
		$(".paintAll").css("animation-name","toDown")
	},1000)