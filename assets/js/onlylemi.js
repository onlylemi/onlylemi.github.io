/**
 * onlylemi
 * 
 * @author: only乐秘 
 * @time: 2016-02-24 2:54
 */

$(document).ready(function() {

    /* set https */
    if (location.hostname == "onlylemi.github.io") {
        var a = location.href;
        var b = a.substring(5);
        a = a.substring(0, 5);
        if (a == "http:") {
            location.href = "https:" + b;
        }
    }

    /* nprogress */
    $('body').show();
    NProgress.start();
    setTimeout(function() {
        NProgress.done();
    }, 300);

    setTimeout(function() {
        $(".wrapper-masthead").css({
    	'border-top': '4px solid #262b3b'
    });
    }, 600);

    /* sidebar-right */
    $(".js-scroll-top").click(function() {
        $("html,body").animate({ scrollTop: $("#wrapper-masthead").offset().top }, 1000)
    });
    $(".js-scroll-comment").click(function() {
        $("html,body").animate({ scrollTop: $("#comments").offset().top }, 1000)
    });
    $(".js-scroll-down").click(function() {
        $("html,body").animate({ scrollTop: $("#wrapper-footer").offset().top }, 1000)
    });

    /* contents */
    $('#toc').toc({
        title: '',
        minimumHeaders: 0,
        listType: 'ul',
        isEncode: false
    });

    /* post-contents */
    var show_contents = false;
    $(".contents-btn").click(function() {
        if (show_contents) {
            $(".post-contents").css({
                'visibility': 'hidden'
            });
        } else {
            $(".post-contents").css({
                'visibility': 'visible'
            });
        }
        show_contents = !show_contents;
    });

    $(".contents-close").click(function() {
        $(".post-contents").css({
            'visibility': 'hidden'
        });
        show_contents = !show_contents;
    });

    /* 滚动监听 */



    /* search */
    var time1 = 0;
    var show = false;
    var names = new Array(); //文章名字等
    var urls = new Array(); //文章地址
    $(document).keyup(function(e) {
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
                    window.setTimeout("$('#search-content').focus();", 500);
                }
                time1 = 0;
            }
        } else if (e.keyCode == 27) {
            $('.search-dialog').modal('hide')
            show = false;
            time1 = 0;
        }
    });

    $("#search-content").keyup(function(e) {
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
                    window.setTimeout("$('#search-content').focus();", 500);
                    show = true;
                }
                time1 = 0;
            }
        }
    });

    $('#search-dialog').on('hidden.bs.modal', function(e) {
        show = false;
    })

    $(".search-btn").click(function() {
        $("#search-content").val("");
        /*$('#search-content').focus();*/
        window.setTimeout("$('#search-content').focus();", 500);
    });

    $.getJSON("/search.json").done(function(data) {
        if (data.code == 0) {
            for (var index in data.data) {
                var item = data.data[index];
                names.push(item.title);
                urls.push(item.url);
            }

            $("#search-content").typeahead({
                source: names,

                afterSelect: function(item) {
                    $('.search-dialog').modal('hide')
                    show = false;
                    window.location.href = (urls[names.indexOf(item)]);
                    return item;
                }
            });
        }
    });

});
