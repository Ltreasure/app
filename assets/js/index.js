$(function(){
	//购物车下拉效果
	$('.cart ').mouseenter(function(){
		$('.cart a').css('color','orange')
		$('.cart').children('.cart-content').stop().hide();
		$(this).children('.cart-content').slideDown(200);
		$(this).addClass('cart-active');
	}).mouseleave(function(){
		setTimeout(function(){
			$('.cart a').css('color','#b0b0b0');
			$('.cart').removeClass('cart-active');
		},200);
		$(this).children('.cart-content').slideUp(200);
	})
	//顶部菜单栏-搜索框效果
	$('.search-input').focus(function(){
		$('.search-link').css('display','none');
		$('.nav-search').css('border','1px solid #ff9700');
		$('.search-content').slideDown(50);
		$('.icon-fangdajing').css('border','1px solid #ff9700');
	}).blur(function(){
		$('.search-link').css('display','block');
		$('.nav-search').css('border','1px solid #e0e0e0');
		$('.search-content').slideUp(50);
		$('.icon-fangdajing').css('border','1px solid #e0e0e0');
	});
	//顶部菜单栏-导航栏移入效果
	$(".xiala li").mouseenter(function(){
			// 每一个a标签定义索引
			$('.xiala-background').stop().slideDown(300);
   		var index  = $(".xiala li").index($(this));
   			// 子元素div
        var	divList = $(".xiala-background").children("ul");
        	// div隐藏
		    divList.hide(); 
		    // div选取带有指定 index 值的元素显示
		    var show = divList.eq(index).show();
		    // div移入
			divList.mouseover(function(){
		    	$(this).show();
		    	$('.xiala-background').stop().slideDown(300);
		    });
		    divList.mouseout(function(){
		    	$('.xiala-background').stop().slideUp(300);
		    	// $(this).hide();
		    });
		}).mouseleave(function(){
          	 divList = $(".xiala-background").children("ul");
		   		 // divList.hide(); 
		   		 $('.xiala-background').stop().slideUp(300);
		});
	//banner 图片淡入淡出轮播效果
(function(){
	var index = 0;
	var len = $('.carousel-image li').length;
	var timer = 0;
	function outRemove(){
		$('.carousel-image li:eq('+index+')').fadeOut(500);
		$('.carousel-index li:eq('+index+')').removeClass('active');
	}
	function inAdd(){
		$('.carousel-image li:eq('+index+')').fadeIn(500);
		$('.carousel-index li:eq('+index+')').addClass('active');
		 }
		// 1.图片自动切换
		function run(){	
			timer = setInterval(function(){
				// 1.1 当前图片隐藏，当前数字恢复默认样式
				outRemove();

				// 1.2 改变index的值
				index++;
				if (index > len-1) {
					index = 0;
				}

				// 1.3 让改变之后的index索引对应的图片显示，数字为红色背景
				inAdd();
			},2000);
		}
		run();

		// 2.鼠标移入的时候，停止轮播
		$('.banner').mouseover(function(){
			clearInterval(timer);
		}).mouseout(function(){
			// 离开的时候继续轮播
			run();
		})

		// 3.鼠标移入到数字li上，显示对应的图片
		$('.carousel-index li').click(function(){
			// 3.1 隐藏当前图片
			outRemove();
			console.log(123);
			// 3.2 获取鼠标移入li的索引值
			index = $(this).index();

			// 3.3 新的图片显示
			inAdd();
		})

		// 4.点击左键和右键
		$('.carousel-left').click(function(){
			// 4.1 隐藏当前图片
			outRemove();
			// 4.2 获取新的索引
			index--;
			if (index < 0) {
				index = len-1;
			}

			// 4.3 显示新索引对应的图片
			inAdd();
		})

		$('.carousel-right').click(function(){
			// 4.1 隐藏当前图片
			outRemove();
			// 4.2 获取新的索引
			index++;
			if (index > len-1) {
				index = 0;
			}

			// 4.3 显示新索引对应的图片
			inAdd();
		})
})();
//明星推荐开始
		/*自动轮播*/
		var timerm=0;
		function runInterval(){
			timerm=setInterval(function(){
			var add=$('.mingxing-body ul').position();
			var addLeft=add.left;
				if(addLeft<0){
					$('.icon-zuoyoujiantou-copy-copy').css('color','#e0e0e0').css('cursor','default');
					/*颜色样式 其他样式*/
					$('.icon-zuoyoujiantou-copy-copy-copy').css('color','#b0b0b0').css('cursor','pointer');
					/*滚动样式*/
					$('.mingxing-body ul').stop().animate({left:0},600);
				}else if(addLeft<=0){
					$('.icon-zuoyoujiantou-copy-copy-copy').css('color','#e0e0e0').css('cursor','default');

					$('.icon-zuoyoujiantou-copy-copy').css('color','#b0b0b0').css('cursor','pointer');

					$('.mingxing-body ul').stop().animate({left:-1240},600);
				}
			},4000);
		} 
		runInterval();
		$('.mingxing').mouseenter(function(){
			clearInterval(timerm);
		}).mouseleave(function(){
			runInterval();
		})

		$('.icon-zuoyoujiantou-copy-copy').click(function(){
			$(this).css('color','#e0e0e0').css('cursor','default');
			/*颜色样式 其他样式*/
			$('.icon-zuoyoujiantou-copy-copy-copy').css('color','#b0b0b0').css('cursor','pointer');
			/*滚动样式*/
			$('.mingxing-body ul').stop().animate({left:0},600);
		})



		$('.icon-zuoyoujiantou-copy-copy-copy').click(function(){
				$(this).css('color','#e0e0e0').css('cursor','default');

			$('.icon-zuoyoujiantou-copy-copy').css('color','#b0b0b0').css('cursor','pointer');

			$('.mingxing-body ul').stop().animate({left:-1240},600);
		})
//明星推荐结束
// 产品开始
	$('.chanpin-title a').mouseenter(function(){
		var chanpinIndex=$('.chanpin-title a').index($(this));
		var chanpinUl=$('.chanpin-body').children('ul');
		chanpinUl.hide();
		chanpinUl.eq(chanpinIndex).show();
	});
// 产品结束
// 内容开始
	// 点击左右移动
		// 右移动
(function(){
	$('.jiantou-right').click(function(){
		// 知道当前处于第几张图（索引）
		var index = $(this).siblings('ol').children('.neirong-avtive').index();
		console.log(index);
		index++;
		console.log(index);
		if (index > $(this).siblings('ol').children().length-1) {
			// 终止函数
			return false;
		}

		$(this).siblings('ol').children().css({'border':'','background-color':'#b0b0b0','margin':'2px 14px 2px'}).removeClass('neirong-avtive').eq(index).css({'border':'2px solid #ff6700','background-color':'#fff','margin':'0 12px 0'}).addClass('neirong-avtive');
		$(this).siblings('ul').animate({left:-index*296},300);
	})
	// 左移动
	$('.jiantou-left').click(function(){
		// 知道当前处于第几张图（索引）
		var index = $(this).siblings('ol').children('.neirong-avtive').index();
		console.log(index);
		index--;
		if (index < 0) {
			// 终止函数
			return false;
		}

		$(this).siblings('ol').children().css({'border':'','background-color':'#b0b0b0','margin':'2px 14px 2px'}).removeClass('neirong-avtive').eq(index).css({'border':'2px solid #ff6700','background-color':'#fff','margin':'0 12px 0'}).addClass('neirong-avtive');
		$(this).siblings('ul').animate({left:-index*296},300);
	})

	// 移入显示箭头
	$('.neirong-ul').mouseenter(function(){
		$(this).children('.jiantou-right').show();
		$(this).children('.jiantou-left').show();
	}).mouseleave(function(){
		$(this).children('.jiantou-right').hide();
		$(this).children('.jiantou-left').hide();
	})
	// 点击索引点
	$('.neirong-ul ol li').click(function(){
		$(this).siblings().removeClass('neirong-avtive').css({'border':'','background-color':'#b0b0b0','margin':'2px 14px 2px'});
			
			// 知道鼠标移入li的索引值
		index = $(this).index();
			
		$(this).addClass('neirong-avtive').css({'border':'2px solid #ff6700','background-color':'#fff','margin':'0 12px 0'});
		$(this).parent().siblings('ul').animate({left:-296*index},300);
	})

})();

// 内容结束
// Ajax请求
(function(){
	$('.search-input').focus(function(){
		//清除多余的写入 
		$('.search-content').html('');
		// 发送ajax请求
		$.get('1.php',function(data){
			//转换为json对象
			var obj = JSON.parse(data);
			//遍历数组
			var content = '';
			obj.forEach(function(value,key){
				content += '<li>';
				content += '<a>';
				content += '<span>'+value.title+'</span>';
				content += '<span>约有'+value.seller+'件</span>';
				content += '</a>';
				content += '</li>';
			})

			//写入
			$('.search-content').prepend(content);
		})
	})
})();
})