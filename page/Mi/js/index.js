$(function() {
	var seckill_hh = 1;
	var seckill_mm = 1;
	var seckill_ss = 5;

	var seckill_timeer = setInterval(function() {
		if (seckill_mm == 0) {
			seckill_hh = seckill_hh - 1;
			seckill_mm = 60;
			seckill_ss = 60;
		}
		if (seckill_ss == 0) {
			seckill_mm = seckill_mm - 1;
			seckill_ss = 60
		}
		seckill_ss--;
		if (seckill_hh <= 9)
			$(".seckill_time_hh")[0].innerHTML = "0" + seckill_hh;
		else
			$(".seckill_time_hh")[0].innerHTML = seckill_hh;
		if (seckill_mm <= 9)
			$(".seckill_time_mm")[0].innerHTML = "0" + seckill_mm;
		else
			$(".seckill_time_mm")[0].innerHTML = seckill_mm;
		if (seckill_ss <= 9)
			$(".seckill_time_ss")[0].innerHTML = "0" + seckill_ss;
		else
			$(".seckill_time_ss")[0].innerHTML = seckill_ss;
	}, 1000)

	seckill_timeer;

	//原生js
	/* var banner_imgs = document.getElementsByClassName("banner_imgs")[0];
	var banner_imgs_width = banner_imgs.offsetWidth;
	var banner_index = 0;
	var banner_index_max = banner_imgs.children.length - 1;

	function banner_imgs_chage(index) {
		banner_imgs.style.marginLeft = -index * banner_imgs_width + "px";
		banner_imgs_dots_chage(index);
	}


	document.getElementsByClassName("banner_cut_r")[0].onclick = function() {
		banner_index++;
		if (banner_index > banner_index_max) {
			banner_index = 0;
		}

		banner_imgs_chage(banner_index);
	}

	document.getElementsByClassName("banner_cut_l")[0].onclick = function() {
		banner_index--;
		if (banner_index < 0) {
			banner_index = banner_index_max;
		}

		banner_imgs_chage(banner_index);
	}
	
	var banner_dots = document.getElementsByClassName("banner_bottom_dot")[0];
	
	function banner_imgs_dots_chage(index){
		for (var i = 0; i < banner_dots.children[0].children.length; i++) {
			banner_dots.children[0].children[i].className = "banner_bottom_dot_li";
		}
		
		banner_dots.children[0].children[index].className = "banner_bottom_dot_li banner_bottom_dot_hover";
	}
	
	var banner_dots_lis = document.getElementsByClassName("banner_bottom_dot_li");
	for (var i = 0; i < banner_dots_lis.length; i++) {
		
		banner_dots_lis[i].setAttribute("myindex", i);
		banner_dots_lis[i].onclick = function(a){
			var dos_index = a.srcElement.getAttribute("myindex");
			banner_imgs_chage(dos_index);
		}
	}
	

	var banner_timer = setInterval(function() {
		banner_index++;
		if (banner_index > banner_index_max) {
			banner_index = 0;
		}
		
		banner_imgs_chage(banner_index);

	}, 2000)
	banner_timer; */


	var banner_timer;
	var banner_index = 0;
	var banner_time = 0;
	// var banner_index_max = banner_imgs.children.length - 1;

	function change_banner_img() {
		banner_time = 0;
		$(".banner_imgs").css("margin-left", -banner_index * 1226 + "px");
		
		$(".banner_bottom_dot_li").removeClass("banner_bottom_dot_hover");
		$($(".banner_bottom_dot_li")[banner_index]).addClass("banner_bottom_dot_hover");
	}

	banner_timer = setInterval(function() {
		banner_time += 50;
		if (banner_time <= 100) {
			return;
		}

		banner_index++;
		if (banner_index > 2) {
			banner_index = 0;
		}

		change_banner_img();
	}, 1000)

	$(".banner_cut_r").click(function() {
		banner_index++;
		if (banner_index > 2) {
			banner_index = 0;
		}

		change_banner_img();
	})

	$(".banner_cut_l").click(function() {
		banner_index--;
		if (banner_index < 0) {
			banner_index = 2;
		}

		change_banner_img();
	})
	
	$(".banner_bottom_dot_li").click(function(e){
		banner_index = $(this).index();
		change_banner_img();
	})


	/* 	var iajax = new XMLHttpRequest();
		iajax.open("GET","http://192.168.50.179:8080/ajax/menu", true);
		iajax.send();
		iajax.onreadystatechange = function(){
			if(iajax.readyState === 4){
				console.log(iajax.response);
			}
		} */
})
