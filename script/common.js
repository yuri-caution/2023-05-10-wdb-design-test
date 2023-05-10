$(function(){
    //메뉴
    $('.gnb').hover(
        function(){
            $('.gnb ul').stop().slideDown('fast')
        },function(){
            $('.gnb ul').stop().slideUp('fast')
        })

    //슬라이드
    setInterval(function(){
        $('.slider').animate({left:-1200}, 'slow', function(){
            $('.slider li:first').appendTo($('.slider'))
            $('.slider').css('left', 0)
        })
    },3000)

    //탭 전환
    $('.tab_tit h3').click(function(){
        $('.tab_tit h3.on').removeClass('on')
        $(this).addClass('on')

        $('.tab_contents ul').css('display', 'none')
        $('.tab_contents ul').eq($(this).index()).css('display', 'block')
    })

    //모달
    $('.notice li a:first').click(function(){
        $('#modal').addClass("active")
    })
    $('.close').click(function(){
        $('#modal').removeClass("active")
    })
})