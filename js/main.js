$(document).ready(function() {
    //nav bar
   $('.bar').click(function(){
        $('.content-nav').fadeToggle(500);
    })
    //resize nav-bar
    $(window).resize(function () {
        
        if($(window).outerWidth() > 991){
            $('.content-nav').css('display','flex');
        } else {
            $('.content-nav').css('display','none');
        }

    });
    //section work
    // $('.work .row > div').css({style:'transition .3s ease'});

    // work_1 = $(".work-1"),
    // work_2 = $(".work-2"),
    // work_3 =$(".work-3"),
    // work_4 =$(".work-4"),
    // work_5 =$(".work-5"),
    // work_6 =$(".work-6"),
    // work_7 =$(".work-7");
    // work_2.css({left:work_1.innerWidth() + 10} );
    // work_3.css({left:work_1.innerWidth() + work_2.innerWidth() + 20});
    // work_4.css({left:work_1.innerWidth() +  work_3.outerWidth()+ work_2.innerWidth() +30});
    // work_5.css({top:work_1.innerHeight() + 10,left:-10});
    // work_6.css({top:work_1.innerHeight() + 10,left:work_5.innerWidth()});
    // work_7.css({top:work_1.innerHeight() + 10,left:work_5.innerWidth() + work_6.innerWidth() + 10});
    //  $('.work .row > div').css({transition:'left .3s ease'});
    // const widthWindow = $(window).outerWidth();
    // /*if (widthWindow < 767 && widthWindow > 526){
    //     work_3.css({left:0 , top:work_1.innerHeight() + 10});
    //     work_4.css({left:work_3.innerWidth() + 10, top:work_2.innerHeight() + 10});
    //     work_5.css({top:work_1.innerHeight() + work_3.innerHeight() + 20 });
    //     work_6.css({top:963 , left:0});
    //     work_7.css({top:963 , left:work_6.innerWidth() +10});*/
    //  if(widthWindow <= 633){
    //     const newLocal = 'auto';
    //     work_1.css({left:0,top:newLocal});
    //     work_2.css({left:0,top:newLocal});
    //     work_3.css({left:0,top:newLocal});
    //     work_4.css({left:0,top:newLocal});
    //     work_5.css({left:0,top:newLocal});
    //     work_6.css({left:0,top:newLocal});
    //     work_7.css({left:0,top:newLocal});
    // } 
    
    // $(window).resize( function() {
    //     var resizeWindow = $(window).outerWidth();
    //     /*work_2.css({left:work_1.innerWidth() + 10} );
    //     work_3.css({left:work_1.innerWidth() + work_2.innerWidth() + 20});
    //     work_4.css({left:work_1.innerWidth() +  work_3.outerWidth()+ work_2.innerWidth() +30});
    //     work_5.css({top:work_1.innerHeight() +10,left:-10});
    //     work_6.css({top:work_1.innerHeight() +10,left:work_5.innerWidth()});
    //     work_7.css({top:work_1.innerHeight() +10,left:work_5.innerWidth() + work_6.innerWidth() + 20});*/
    //     const newLocal = 'auto';
    //     if (resizeWindow <= 633){
    //         work_1.css({left:0,top:newLocal});
    //         work_2.css({left:0,top:newLocal});
    //         work_3.css({left:0,top:newLocal});
    //         work_4.css({left:0,top:newLocal});
    //         work_5.css({left:0,top:newLocal});
    //         work_6.css({left:0,top:newLocal});
    //         work_7.css({left:0,top:newLocal});
    //     }
    //     else if (resizeWindow > 766) {
    //         work_2.css({left:work_1.innerWidth() + 10} );
    //         work_3.css({left:work_1.innerWidth() + work_2.innerWidth() + 20});
    //         work_4.css({left:work_1.innerWidth() +  work_3.outerWidth()+ work_2.innerWidth() +30});
    //         work_5.css({top:work_1.innerHeight() +10,left:-10});
    //         work_6.css({top:work_1.innerHeight() +10,left:work_5.innerWidth()});
    //         work_7.css({top:work_1.innerHeight() +10,left:work_5.innerWidth() + work_6.innerWidth() + 10});
    //         } else{
    //             work_2.css({left:work_1.innerWidth() + 10} );
    //             work_3.css({left:work_1.innerWidth() + work_2.innerWidth() + 20});
    //             work_4.css({left:work_1.innerWidth() +  work_3.outerWidth()+ work_2.innerWidth() +30});
    //             work_5.css({top:work_1.innerHeight() +10,left:-10});
    //             work_6.css({top:work_1.innerHeight() +10,left:work_5.innerWidth()});
    //             work_7.css({top:work_1.innerHeight() +10,left:work_5.innerWidth() + work_6.innerWidth() + 10});
    //         }

        
    // });
    // popup video
    $('#close').click(function(){
        $('.modal-video').fadeOut(300);
        $('body').css('overflow', 'auto');
        $('.scroll-bar').removeClass('thumb');
        $('.scroll-bar').removeClass('scroll-bar-overhidden');
    });
    $('.fa-play').click(function(){
        $('.modal-video').fadeIn(300);
        $('body').css('overflow', 'hidden');
        $('.scroll-bar').addClass('thumb');
        $('.scroll-bar').addClass('scroll-bar-overauto');
    });
    $('.modal-video').click(function(){
        $(this).fadeOut(300);
        $('body').css('overflow', 'auto');
        $('.scroll-bar').removeClass('thumb');
        $('.scroll-bar').removeClass('scroll-bar-overhidden');
    });
    //counter
    const counters = document.querySelectorAll('.counter-num');
    const speed = 22;
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const inc = target / speed;
            if(count < target){
                counter.innerText = count + 10;
                setTimeout(updateCount,2);
            }  else{
                count.innerText = target;
            }
        }
        updateCount();
    });
    /* ------------------------- slider ------------------------------ */
    $('.brev').bind('click',() =>{
        $('.slide').css({transform:'translate('+(-$('.slide-item').innerWidth())+'px)'});
        $('.slide .row').css('justify-content','flex-start');
    });
    $('.next').bind('click',() =>{
        $('.slide').css({transform:'translate('+($('.slide-item').innerWidth())+'px)'});
        $('.slide .row').css('justify-content','flex-end');
    });
    $('.slide').bind('transitionend',() => {
        $('.slide .row').append($('.slide .row').children(':first'));
        $('.slide').css({transition:'none'});
        $('.slide').css({transform:'translate(0)'});
        setTimeout(()=>{
            $('.slide').css({transition:'all .5s'})
        });
    });
    /*slideItems = $('.slide-item');
    let slideMove = () => {
    for (var i = 1;i < (slideItems.length -2) ;i++){
        $('.slide').css({ transform: 'translate('+ -375*i + 'px)'});
        $('.slide').css({ transition:'all 5s ease' });
        console.log(i); 
        let returnFunctiom = () =>{
            i = 1;
            $('.slide').css({ transform: 'translate('+ 0 + 'px)'});
        }
        if (slideItems.length = slideItems.length-1){
            returnFunctiom();
            }
        }
    }
    setInterval(slideMove,300);*/
   //slider header
   (function autoslider() {
    $(".header .slider .active").each(function(){
        if(!$(this).is(':last-child')){
            $(this).delay(3000).fadeOut(1000,function(){
                $(this).removeClass('active').next().addClass('active').fadeIn();
                autoslider();
            });
        } else {
            $(this).delay(3000).fadeOut(1000,function () {
                $(this).removeClass('.active');
                $('.header .slider > div').eq(0).addClass('active').fadeIn();
                autoslider();
            });
        }
    });
} ());
});