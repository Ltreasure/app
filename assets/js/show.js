$(function(){
    //购物车下拉效果
    $('.cart ').mouseenter(function(){
        $('.cart a').css('color','orange')
        $('.cart').children('.cart-content').stop().hide();
        $(this).children('.cart-content').slideDown(200);
        $(this).addClass('cart-active');
    }).mouseleave(function(){
        $('.cart a').delay(500).css('color','#b0b0b0');
        $(this).children('.cart-content').slideUp(200);
        $(this).delay(500).removeClass('cart-active');
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
        var divList = $(".xiala-background").children("ul");
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
    //登陆提示点击隐藏
    (function(){
        $('.denglu .icon-cha').click(function(){
            console.log(123);
            $('.denglu-beijing').slideUp(200);
        })
    })();
    // 产品详情导航 滚动效果
    (function(){
        var navOffset=$(".chanpin").offset().top+65;
        $(window).scroll(function(){  
            var scrollPos=$(window).scrollTop();  
            if(scrollPos >=navOffset){  
                $(".chanpin-xiala").slideDown(200);
            }else if(scrollPos < navOffset){ 
                 $(".chanpin-xiala").slideUp(200);  
            }  
        });
    })();
    // 详情框主题部分效果
    (function(){
        var imgOffset=$(".xiangqing-lunbo").offset().top;
        $(window).scroll(function(){
            var imgScroll = $(window).scrollTop();
            if (imgScroll >=290 && imgScroll<692) {
                $('.xiangqing-lunbo').css({top:'65px',position:'fixed'});
            }else if(imgScroll > 692){
                $('.xiangqing-lunbo').css({top:'464px',position:'absolute'});
            }else if(imgScroll < 290){
                $('.xiangqing-lunbo').css({top:'0',position:'absolute'});
            }
        })
        // console.log($(".ceshi").offset().top);
        // console.log(imgOffset);
    })();
    // 左侧图片轮播
    (function(){
        var xinghaoIndex = 0;
        // 点击型号，显示组
        $('.shop-xinghao dd').click(function(){
            // 显示谁
            // 获取当前li的索引值(0,1,2)
            xinghaoIndex = $(this).index();
            console.log(xinghaoIndex);
            // console.log(index);

            // 显示大组中的第一个小组(0,3,6)
            console.log($('.xiangqing-lunbo-img dd').eq(1))
            $('.xiangqing-lunbo-img dd').eq(xinghaoIndex).show().siblings().hide();
        })
        // 点击索引块，显示组图片

        $('.xiangqing-lunbo-index li').click(function(){
            //去样式
            $(this).siblings().children().css('background-color','#a3a3a3');
            // 加样式
            $(this).children().css('background-color','#333');
            var index=$(this).index();
            // 显示
            $(this).parent().siblings('div').children().eq(index).show().siblings().hide();

        })
    })();

        // 点击左右箭头显示，切换
        // 点击右键头
(function(){

        $('.xiangqing-lunbo-right').click(function(){
            var index=$(this).parent().siblings('.lunbo-imgimg').children('.dangqian').index();
            console.log(index);
            index++;
            console.log(index);
                if (index > $(this).parent().siblings('div').children().length-1) {
                 return false;
                }

            $(this).parent().siblings('div').children().removeClass('dangqian').eq(index).addClass('dangqian');
            $(this).parent().siblings('div').children().eq(index).show().siblings().hide();
        })

            // 点击左键头
        $('.xiangqing-lunbo-left').click(function(){
            var index=$(this).parent().siblings('.lunbo-imgimg').children('.dangqian').index();
            console.log(index);
            index--;
               
            if (index < 0) {
                // 终止函数
                return false;
            }
            $(this).parent().siblings('div').children().removeClass('dangqian').eq(index).addClass('dangqian');
            $(this).parent().siblings('div').children().eq(index).show().siblings().hide();

        })
})();
// 调用价格
(function(){
        $('.shop-xinghao dd').click(function(){
            var jiage=$(this).attr('data-jiage');
            var peizhi=$(this).attr('data-peizhi');
            var name=$(this).attr('deta-name');

            console.log(name);
            $('.shop-jiage-one').html(jiage+"元");
            $('.shop-yuyue-jiage-jiage').html(jiage);
            $('.shop-banben-xinxi').html(peizhi);
            $('.shop-zongjia-name').html(name);
            $('.shop-zongjia-zongjia').html(jiage+"元");
            $('.shop-zongjia-jiage').html(jiage+"元");
        })

})();
// 型号点击加边框
(function(){
    $('.shop-xinghao dd').click(function(){
        $('.shop-xinghao').children().css('border','1px solid #e0e0e0');
        $(this).css('border','1px solid #ff6700');

    })
})();
// 倒计时
(function(){
    // 封装函数
    function time ( detaTime,detaDiv){
        var starttime = new Date(detaTime);
        setInterval(function () {
            var nowtime = new Date();
            var time = starttime - nowtime;
            var day = parseInt(time / 1000 / 60 / 60 / 24);
            var hour = parseInt(time / 1000 / 60 / 60 % 24);
            var minute = parseInt(time / 1000 / 60 % 60);
            var seconds = parseInt(time / 1000 % 60);
            $(detaDiv).html('剩 '+addZero(day) + "天 " + addZero(hour) + "时 " + addZero(minute) + "分 " + addZero(seconds) + "秒 ");
        }, 1000); 
    }
    time("2017/10/10 11:58:10",".time-one");
    time("2017/10/20 06:38:16",".time-two");
    time("2017/10/30 22:1:19",".time-three");
    function addZero(time) {
        if (time < 10) {
            time = '0' + time;
        }
        return time;
    }
    // 点击显示
    var index = 0;
        // 点击型号，显示组
    $('.shop-xinghao dd').click(function(){
        // 显示谁
        // 获取当前li的索引值(0,1,2)
        index = $(this).index();
        // console.log(index);

        // 显示大组中的第一个小组(0,3,6)
        $('.shop-yuyue-top div').eq(index).show().siblings().hide();
        })
})();
// 在最下面添加一个层，层加阴影效果，透明度设置100%，jq鼠标点下透明度0.抬起10，
// 点击弹出收货信息
    (function(){
    // 点击叉号、大div，关闭遮罩层
    // 聚焦上拉我的收货地址，失焦下拉
    // 点击input叉号，清空input
        $('.icon-cha').click(function(){
            // var value=$('.sousuo input').val();
            $('.sousuo input').val('');
            $('.zhezhao-tanchu').animate({height:'187px'});
            $('.shoudong a').show();
            $('.sousuo .icon-cha').hide();
        })
    // input内容改变显示删除×
        $('.sousuo input').focus(function(){
            $('.zhezhao-tanchu').animate({height:'75px'});
            $('.shoudong a').hide();
            $('.sousuo .icon-cha').show();

        });
        //  $('.sousuo input').blur(function(){
        //     $('.zhezhao-tanchu').animate({height:'187px'});
        //     $('.shoudong a').show();
        //     $('.sousuo .icon-cha').hide();
        // });
    // 点击div，点击×隐藏
        $('.xiugai').click(function(){
            $('.zhezhao-hide').show();
            $('.zhezhao-tanchu').show();
        })
        $('.zhezhao-hide').click(function(){
            $('.zhezhao-hide').hide();
            $('.zhezhao-tanchu').hide();
        });
        $('.firstcha').click(function(){
            $('.zhezhao-hide').hide();
            $('.zhezhao-tanchu').hide();
        });
    })();
// 三级级联点击关闭
(function(){
    $('.jilian p').click(function(){
        // 点击失效
        $('.jilian').hide();
    });
    $('.shoudong p').click(function(){
        $('.jilian').hide();
        // $('.zhezhao-tanchu').css('height','187px');
    });
})();
// 三级级联
(function(){
    var Data = [
        ['山东省'],
        ['河北省'],
        ['河南省']
    ];
    var twoData = [
        ['济南市','青岛市','菏泽市'],
        ['沧州市','廊坊市','承德市'],
        ['郑州市','商丘市','洛阳市']
    ];
    var threeData = [
        [
            ['历下区','市中区','槐荫区'],
            ['市南区','市北区','崂山区'],
            ['牡丹区','曹县','单县']
        ],
        [
            ['沧州市','运河区','新华区'],
            ['安次区','广阳区','霸州市'],
            ['承德市','双桥区','双滦区']
        ],
        [
            ['中原区','二七区','管城区'],
            ['睢阳区','梁园区','永城市'],
            ['涧西区','西工区','老城区']
        ]
    ]
    // 需求：当省份改变的时候，在city中出现省对应的市
    // 1.获取对象
    var province = document.getElementById('province');
    var city = document.getElementById('city');
    var county = document.getElementById('county');

    // 2.当省份发生改变的时候
    province.onchange = function(){
        // 2.0 当省份发生变化的时候，初始化一下县
        county.innerHTML = '<option value="">--请选择--</option>'

        // 2.1 获取改变的值
        var proIndex = this.value;

        // 2.2 获取省份对应的市(数组)
        var citys = data[proIndex];

        // 2.3 对获取的数组进行循环拼接
        var cityStr = '<option>--请选择--</option>';
        citys.forEach(function(value,key){
            cityStr += '<option value="'+key+'">'+value+'</option>';
        })

        // 将拼接完成的字符串写入到city下拉框中
        city.innerHTML = cityStr;

        // 3.当市发生改变的时候
        city.onchange = function(){
            // 3.1 获取市的索引值
            var cityIndex = this.value;
            
            // 3.2 获取省份的value值
            var countys = threeData[proIndex][cityIndex];
            console.log(countys);

            // 3.3 ["西三旗", "中关村", "知春路"] => <option>西三旗</option><option>中关村</option><option>知春路</option>
            var countyStr = '<option value="">--请选择--</option>';
            countys.forEach(function(value,key){
                countyStr += '<option value="'+key+'">'+value+'</option>'
            })

            // 3.4 将拼接的字符串写入到select#county内
            county.innerHTML = countyStr;
        }
    }
})();

})