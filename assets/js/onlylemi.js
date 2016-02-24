/**
 * onlylemi
 * 
 * @author: only乐秘 
 * @time: 2016-02-24 2:54
 */

 $(document).ready(function () {

        /* sidebar-right */
        $(".js-scroll-top").click(function(){
            $("html,body").animate({scrollTop:$("#wrapper-masthead").offset().top},1000)
            });
        $(".js-scroll-comment").click(function(){
            $("html,body").animate({scrollTop:$("#comments").offset().top},1000)
                });
        $(".js-scroll-down").click(function(){
            $("html,body").animate({scrollTop:$("#wrapper-footer").offset().top},1000)
            });

        /* contents */
        $('#toc').toc();

        /* search */
        var time1 = 0;
        var show = false;
        var names = new Array(); //文章名字等
        var urls = new Array(); //文章地址
        $(document).keyup(function (e) {
            var time2 = new Date().getTime();
            if (e.keyCode == 17) {
                var gap = time2 - time1;
                time1 = time2;
                if (gap < 500) {
                    if (show) {
                        $('.search-dialog').modal('hide')
                        show = false;
                    } else {
                        $('.search-dialog').modal('show')
                        show = true;
                        $("#search-content").val("");
                        $('#search-content').focus();
                    }
                    time1 = 0;
                }
			}else if(e.keyCode == 27){
                    $('.search-dialog').modal('hide')
                    show = false;
                    time1 = 0;
                }
        });

 		$("#search-content").keyup(function (e) {
            var time2 = new Date().getTime();
            if (window.event.keyCode == 17) {
                var gap = time2 - time1;
                time1 = time2;
                if (gap < 500) {
                    if (show) {
                        $('.search-dialog').modal('hide');
                        show = false;
                    } else {
                        $('.search-dialog').modal('show')
                        $("#search-content").val("");
                        $('#search-content').focus();
                        show = true;
                    }
                    time1 = 0;
                }
            }
        });

        $(".search-btn").click(function(){
                $("#search-content").val("");
                window.setTimeout("$('#search-content').focus();", 500);
        });

        $.getJSON("/search.json").done(function (data) {
            if (data.code == 0) {
                for (var index in data.data) {
                    var item = data.data[index];
                    names.push(item.title);
                    urls.push(item.url);
                }

                $("#search-content").typeahead({
                    source: names,

                    afterSelect: function (item) {
						$('.search-dialog').modal('hide')
                        show = false;
                        window.location.href = (urls[names.indexOf(item)]);
                        return item;
                    }
                });
            }
        });

    });