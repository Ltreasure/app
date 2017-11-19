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
        $(this).removeClass('cart-active');
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
// ajax请求-瀑布流
(function(){
    var bool = true;

    $(window).scroll(function(){
        // 文档的高度
        var dHeight = $(document).height();
            console.log(dHeight);
        // 浏览器的高度
        var wHeight = $(window).height();
            console.log(wHeight);
        // 滚动的距离
        var sHeight = $(window).scrollTop();
        console.log(sHeight);

        // 极限值：恰好滚动到页面最底部(当距离底部还剩余400的时候，进行ajax请求，但是一次滚动可以，可能会出现多个值都符合小于400的情况，ajax就会被触发多次)
        if (dHeight - wHeight - sHeight < 521) {
            if (bool) {
                // 预防当滚动的时候，多次请求ajax
                bool = false;
                // 请求服务器获取数据
                $.get('2.php',function(data){

                    var content = '';
                    data.forEach(function(value,key){
                        // 1.将内容遍历展示
                        content += '<div class="four">';
                        content += '<a href="#"><img src="'+value.img+'"></a>';
                        content += '<div><a href="#"><h2>'+value.name+'</h2></a>';
                        content += '<h3>'+value.roducts+'</h3>';
                        content += '<p><span>'+value.price+'</span></p>';
                        content += '</div>';
                        content += '</div>';
                    })

                    // 2.将内容追加到页面
                    $('.four-peijian').append(content);

                    // 当这次追加完成的时候，表示文档已经改变完成,将bool值变为true，随时准备下一次条件成立继续请求ajax
                    // 当追加完成的时候，将bool值改为true
                    var ddHeight = $(document).height();
                    console.log(ddHeight);
                    if (ddHeight > 5789) {
                        bool = false;
                    }else{
                        bool = true;
                    }
                },'json');
            }
        }
    })
})();
})