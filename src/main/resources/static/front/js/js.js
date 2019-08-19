$(function(){
	$('body').addClass('body_ready');
	
	$('.shop_m').click(function(){
		if($('.shop').hasClass('shop_curr')){
			$('.shop').removeClass('shop_curr');
		}else{
			$('.shop').addClass('shop_curr');
		}
	});
	
	$('.icon2_1_tab li').click(function(){
		$(this).addClass('curr').siblings().removeClass('curr')
		$('.icon2_1 .dl').eq($(this).index()).show().siblings().hide();
	})
	
	$('.sub_nav li').eq(2).click(function(){
		if($('.ewm_box').is(':hidden')){
			$(this).addClass('curr');
			$(this).find('.ewm_box').show();
		}else{
			$(this).addClass('curr');
			$(this).find('.ewm_box').hide();
		}
	})
	
	$('.menu-link').click(function(){
		if(!$(this).hasClass('active')){
		$(this).addClass('active');
		$('.menu').slideDown();
		$('body').addClass('body_menu');
		}else{
		$(this).removeClass('active');
		$('.menu').slideUp();
		$('body').removeClass('body_menu');
		}
		$('.sousuo_box').removeAttr('style');
		$('.sousuo').removeClass('curr');
	});
	
	$('.menu .h3 em').click(function(){
		if($(this).parents('li').find('.box').is(':hidden')){
			$(this).addClass('active').parents('li').addClass('curr').siblings().removeClass('curr').find('em').removeClass('active');
			$(this).parents('li').find('.box').slideDown().parents('li').siblings('li').find('.box').slideUp();
		}else{
			$(this).removeClass('curr');
			$(this).parents('li').removeClass('curr').find('.box').slideUp();
		}
	})
	
	$('.shop,.shop_fl,.shop_fr').height($(window).height()-$('.header').height());
	$('.shop_list').height($(window).height()-$('.header').height()-$('.shop_form').height()-80);
	
	$('.case_slick .single-item').slick({
		dots: true,
		fade: false,
		arrows:true,
		infinite: true,//不循环false
		//autoplay: true,//自动播放
		autoplaySpeed: 5500,//自动时间
		pauseOnHover:false,
		adaptiveHeight: false,
		speed: 500,//滚动速度
	});
	
	$('.case_slick .single-item').each(function(index, element) {
        var _this=$(this);
		_this.on('beforeChange', function(event, slick, currentSlide, nextSlide){
			_this.parents('.wpd').find('.case_tab li').eq(nextSlide).addClass('curr').siblings().removeClass('curr');
		});
		
    });
	
	$('.case_tab').each(function(index, element) {
		var _this=$(this);
		_this.find('li').eq(0).addClass('curr')
		_this.find('li').click(function(){
			_this.parents('.wpd').find('.case_slick .slick-dots li').eq($(this).index()).click();
		});
    });
	
	$('.pron_tab a').click(function(){
		$(this).addClass('curr').siblings().removeClass('curr');
		$('.pron_box').animate({opacity:1});
		$('.pron_box li').eq($(this).index()).fadeIn().siblings().fadeOut();
	});
	
	$('.pron_img').click(function(){
		$('.pron_box').animate({opacity:0});
	})
	
	$('.about3_2 .single-item').slick({
		dots: false,
		fade: false,
		arrows:true,
		infinite: true,//不循环false
		autoplay: true,//自动播放
		autoplaySpeed: 5500,//自动时间
		pauseOnHover:false,
		adaptiveHeight: false,
		speed: 500,//滚动速度
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
			{
			breakpoint: 1279,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 1025,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 769,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 641,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
		]
	});
	
	$('.order_query_tab li').click(function(){
		$(this).addClass('curr').siblings().removeClass('curr');
		$('.order_query_con .dl').eq($(this).index()).show().siblings().hide();
	})
	
	$('.sousuo').click(function(){
		$('.sousuo_box').siblings().hide();
		$(this).siblings().removeClass('curr');
		if($('.sousuo_box').is(':hidden')){
			$('.sousuo_box').slideDown();
			$(this).addClass('curr');
		}else{
			$('.sousuo_box').slideUp();
			$(this).removeClass('curr');
		}
		$('.menu').removeAttr('style');
		$('.menu-link').removeClass('active');
	});
	
	$(window).scroll(function(){
		$('.nav_box .li').slideUp();
		if($(window).scrollTop()>=300){
			$('body').addClass('body_fix');
		}else{
			$('body').removeClass('body_fix');
		}
	})
	
	$('.nav_box').mouseleave(function(){
		$('.nav_box .li').slideUp();
	})
	
	$('.xw_tj li').mouseenter(function(){
		$(this).addClass('curr').siblings().removeClass('curr');
	})
	
	
	if($(window).width()>=1025){
		$('.ipro_nav li').mouseenter(function(){
			$(this).addClass('curr').siblings().removeClass('curr');
			$('.ipro_con .li').eq($(this).index()).addClass('curr').siblings().removeClass('curr');
		})
	}else{
		$('.ipro_nav li').click(function(){
			$(this).addClass('curr').siblings().removeClass('curr');
			$('.ipro_con .li').eq($(this).index()).addClass('curr').siblings().removeClass('curr');
		})

	}
	
	
	$('[placeholder]').focus(function(){
		$(this).attr('placeholder','')
	})
	$('[placeholder]').blur(function(){
		$(this).attr('placeholder',$(this).attr('data-placeholder'))
	})
	
	$('.ibanner .single-item').slick({
		dots: true,
		fade: false,
		arrows:true,
		infinite: true,//不循环false
		autoplay: true,//自动播放
		autoplaySpeed: 5500,//自动时间
		pauseOnHover:false,
		adaptiveHeight: false,
		speed: 500,//滚动速度
	});
	$('.ibanner .slick-dots').css({'margin-left':-$('.ibanner .slick-dots li').length*$('.ibanner .slick-dots li').outerWidth(true)/2});
	//$('.ibanner .slick-slide img').css('height',$(window).outerHeight()-$('.header').outerHeight());
	//$('.banner_pg img').css('height',$(window).outerHeight()-$('.header').outerHeight());
	
	$(window).resize(function(){
		$('.ibanner .slick-dots').css({'margin-left':-$('.ibanner .slick-dots li').length*$('.ibanner .slick-dots li').outerWidth(true)/2});
		//$('.ibanner .slick-slide img').css('height',$(window).outerHeight()-$('.header').outerHeight());
		//$('.banner_pg img').css('height',$(window).outerHeight()-$('.header').outerHeight());
		$('.shop,.shop_fl,.shop_fr').height($(window).height()-$('.header').height());
		$('body').removeClass('body_menu');
		$('.menu-link').removeClass('active');
		$('.menu,.sousuo_box').removeAttr('style');
		
		$('.ishop .slick-dots').css({'margin-left':-$('.ishop .slick-dots li').length*$('.ishop .slick-dots li').outerWidth(true)/2});
		
		$('.shop_list').height($(window).height()-$('.header').height()-$('.shop_form').height()-80);
		
	})
	
	$('.ipro_con .single-item').slick({
		dots: false,
		fade: false,
		arrows:true,
		infinite: true,//不循环false
		//autoplay: true,//自动播放
		autoplaySpeed: 5500,//自动时间
		pauseOnHover:false,
		adaptiveHeight: false,
		speed: 500,//滚动速度
	});
	$('.ishop .single-item').slick({
		dots: true,
		fade: false,
		arrows:false,
		infinite: true,//不循环false
		autoplay: true,//自动播放
		autoplaySpeed: 5500,//自动时间
		pauseOnHover:false,
		adaptiveHeight: false,
		speed: 500,//滚动速度
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
			breakpoint: 641,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 541,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});
	$('.ishop .slick-dots').css({'margin-left':-$('.ishop .slick-dots li').length*$('.ishop .slick-dots li').outerWidth(true)/2});
	
	$('.news_nav .single-item').slick({
		dots: false,
		fade: false,
		arrows:true,
		infinite: true,//不循环false
		pauseOnHover:false,
		adaptiveHeight: false,
		speed: 500,//滚动速度
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
			breakpoint: 1025,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				dots: true,
				arrows:false,
				//centerMode: false,
				//centerPadding: '0px',
				//focusOnSelect: true,
			}
			},
			{
			breakpoint: 641,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows:false,
			}
		}]
	});
	$('.news_nav .slick-dots').css({'margin-left':-$('.news_nav .slick-dots li').length*$('.news_nav .slick-dots li').outerWidth(true)/2});
	
	$('.case_tj .single-item').slick({
		dots: true,
		fade: false,
		arrows:false,
		infinite: true,//不循环false
		autoplay: true,//自动播放
		autoplaySpeed: 5500,//自动时间
		pauseOnHover:false,
		adaptiveHeight: false,
		speed: 500,//滚动速度
	});
	
	
	
	$('.play_btn').click(function(){
		var data_video=$(this).attr('data-video');
		
		if($(window).width()>=769){
			$('body').append('<div class="video_bg"></div><div class="video_box"><i class="iconfont icon-guanbi"></i><img class="img_cut" src="/Application/Home/View/Public/static/images/640_360.png"><iframe src="http://player.youku.com/embed/'+data_video+'" frameborder="0" allowfullscreen="true" width="640" height="360" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe></div>');
		}else{
			$('body').append('<div class="video_bg"></div><div class="video_box"><i class="iconfont icon-guanbi"></i><img class="img_cut" src="/Application/Home/View/Public/static/640_360.png"><iframe src="http://player.youku.com/embed/'+data_video+'==" frameborder="0" allowfullscreen="true" width="640" height="360"></iframe></div>');
		}
		
		$('.video_bg,.video_box').fadeIn();
		
		$('.banner_video').addClass('curr').find('video').trigger('pause');
	})
	
	
	$(".video_bg,.video_box i").on("click",function () {
		$('.video_bg,.video_box').fadeOut(500,function(){$('.video_bg,.video_box').remove();});
		
		
		$('.banner_video').removeClass('curr').find('video').trigger('play');
	})
	
	$('.banner_video').click(function(){
		if($(this).hasClass('curr')){
			$(this).removeClass('curr');
			$(this).find('video').trigger('play');
		}else{
			$(this).find('video').trigger('pause');
			$(this).addClass('curr');
		}
	})
	
	
	$('.back_top').click(function(){
		$("html, body").animate({
			scrollTop: 0
		}, 120);
    });
	
	$('.banner_pg .m').click(function(){
		var h=$('.banner_pg').height()-$('.header').height();
		$("html, body").animate({
			scrollTop: h
		}, 120);
	});
	
	
	$('.gg_tj .single-item').slick({
		dots: true,
		fade: false,
		arrows:false,
		infinite: true,//不循环false
		autoplay: true,//自动播放
		autoplaySpeed: 5500,//自动时间
		pauseOnHover:false,
		adaptiveHeight: false,
		speed: 500,//滚动速度
	});
	$('.gg_tj .slick-dots').css({'margin-left':-$('.gg_tj .slick-dots li').length*$('.gg_tj .slick-dots li').outerWidth(true)/2});
	
	
	$('.pro .dd .single-item').slick({
		dots: false,
		fade: false,
		arrows:true,
		infinite: true,//不循环false
		pauseOnHover:false,
		adaptiveHeight: false,
		speed: 500,//滚动速度
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		{
		breakpoint: 1025,
		settings: {
			slidesToShow: 3,
	  		slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 769,
		settings: {
			slidesToShow: 2,
	  		slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 541,
		settings: {
			slidesToShow: 1,
	  		slidesToScroll: 1
		}
	  }]
	});

	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  centerMode: false,
	  centerPadding: '0px',
	  focusOnSelect: true,
	  responsive: [
		{
		breakpoint: 641,
		settings: {
			slidesToShow: 4,
	  		slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 441,
		settings: {
			slidesToShow: 4,
	  		slidesToScroll: 1
		}
	  }]
	});
});


$(function(){
	
	if($('#ChinaMap').length>=1){
		var mapw=$('.mapabox').width()
		var maph=$('.mapabox').width()*0.86
		var mapObj = {};
	
		$('#ChinaMap').SVGMap({
			mapName: 'china',
			mapWidth: mapw,
			mapHeight: maph,
			external: mapObj,
			stateInitColor:'ffffff',
			strokeColor: 'd6d6d6',
			stateSelectedColor: '043785',
			stateHoverColor:'043785',/*鼠标颜色*/
			showTip:false/*,
			clickCallback: function(stateData, obj){
				console.log(obj.name);
				$('[data-id="'+obj.id+'"]').addClass('curr').siblings().removeClass('curr')
			}*/
		});
		
		var current;
		
		$('.mapabox .sign a').click(function(){
			var d_id=$(this).attr('data-id');
			$(this).addClass('curr').siblings().removeClass('curr');
			current=d_id;
			$('.mapabox path').attr('fill','#ffffff');
			mapObj[d_id].attr({fill: '#043785'});
			mapObj[d_id].mouseout(function(){
				if (this.id != current) {
					this.animate({
					fill: '#ffffff'
					}, 250);
				}else{
					this.animate({
					fill: '#043785'
					}, 250);
				}
				//console.log(this.id,current)
			});
			//console.log(mapObj[d_id].name)
		});
		
		var u_id='新疆';
		var uen_id=$('[title="'+u_id+'"]').attr('data-id');
		$('[title="'+u_id+'"]').addClass('curr').siblings().removeClass('curr');
		
		mapObj[uen_id].attr({fill: '#043785'});
		mapObj[uen_id].mouseout(function(){
			this.animate({
				fill: '#043785'
			}, 250);
		});
		
		
		$('.mapabox path').click(function(){
			//$(this).attr('fill','#043785')
			if($('.mapabox .sign a').eq($(this).index()-2).attr('href')!='javascript:;'){
				$('.mapabox .sign a').eq($(this).index()-2).append("<span></span>");
				$('.mapabox .sign a').eq($(this).index()-2).find('span').trigger('click');
			}else{
				$('.mapabox .sign a').eq($(this).index()-2).trigger('click');
			}
		});
		
		$('.nshop_tab_con a').on('click',function(){
			$(this).addClass('curr').siblings().removeClass('curr');
		});

		function getUrlParam(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
			var r = window.location.search.substr(1).match(reg);  //匹配目标参数
			if (r != null) return decodeURI(r[2]); return null; //返回参数值
		}
	}
});
	
	
	
