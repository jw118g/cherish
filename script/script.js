window.onload=function(){

    let h_bg = document.querySelector('#h_bg')
    let body = document.querySelector('body,html')
    console.log(h_bg)
    //1.header /scroll/ window / scrolltop/style
    window.addEventListener('scroll',function(){
        if(body.scrollTop > 50){
            h_bg.style.background = '#fff';
        }else{
            h_bg.style.background = 'rgba(255,255,255,0.7)';
        }
    })
    
    //데스크탑 
    // 서브메뉴나오기
    $('.lnb').hide()
    $('.gnb > li ').on('mouseover',function(){
        $(this).find('.lnb').stop().slideDown()
    }) //개별메뉴 출력엔 this 사용.
    $('.gnb > li ').on('mouseout',function(){
        $(this).find('.lnb').stop().slideUp()
    })

    /* 1024px & 모바일
    - 햄버거메뉴클릭시 aside보임 */
    $('#aside').css('display','none') /* 초기숨김 */
    $('.all_menu').on('click',function(){
        $('#aside').css('display','flex')
    }) 
    /* 닫기버튼클릭시 aside 닫힘 */
    $('.aside_close').on('click',function(){
        $('#aside').css('display','none')
    })

    /* aside gnb mouseover시 lnb 아래로 출력되기 */
    $('.a_lnb').hide()
    $('.a_gnb > li ').on('mouseover',function(){
        $(this).find('.a_lnb').stop().slideDown()
    })
    $('.a_gnb > li ').on('mouseout',function(){
        $(this).find('.a_lnb').stop().slideUp()
    })

    /* best product,trend 상품 슬라이드 */

    let i = 0
    let total = 0
    //모바일 반응형시 슬라이드 타이머 멈추기 
    window.addEventListener('resize',size);
    function size(){
        if(window.matchMedia('(max-width:768px)').matches){
            $('.i_s_c').css('transform',`translateX(-0px)`)
            clearInterval(timer)
            console.log('1')
        }else{
            i=0
            clearInterval(timer)
            timer = setInterval(auto,2500)
            console.log('2')
        }
    }
    let timer = setInterval(auto,2500)
    function auto(){
        i++
        if(i>4){i=0}
        $('.i_s_c').css('transform',`translateX(-${389*i}px)`)
    }
    
    //앞, 뒤 버튼 클릭 이벤트
    $('.pre_btn').on('click',function(){
        i--
        if(i<0){i=4}
        $('.i_s_c').css('transform',`translateX(-${389*i}px)`)
        clearInterval(timer) //타이머 멈춤
        
    })
    $('.next_btn').on('click',function(){
        i++
        if(i>4){i=0}
        $('.i_s_c').css('transform',`translateX(-${389*i}px)`)
        clearInterval(timer) //타이머 멈춤
    })
    
    //메인배너 바뀌기효과
    const main_bnr = document.querySelectorAll('#slide_wrap .slide')
    let num = 0
    setInterval(function(){
        for(let j of main_bnr){j.style.opacity='0'}
        num++
        if(num>2){num=0}
        main_bnr[num].style.opacity='1'
    },3000)
    

}