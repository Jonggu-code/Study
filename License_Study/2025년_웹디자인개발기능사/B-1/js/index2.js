$(document).ready(function(){
    // 팝업 열고 닫기
    $(".btnOpen").click(function(){
        $(".popup").addClass("on")
    })
    $(".btnClose").click(function(){
        $(".popup").removeClass("on")
    })

    // 탭 메뉴 토글
    $(".tabs > a").click(function(){
        $(".tabs > a").removeClass("on")
        $(this).addClass("on")
        let idx = $(this).index()
        $(".tabContents>ul").removeClass("on")
        $(".tabContents>ul").eq(idx).addClass("on")
    })

    // 슬라이드
    let $train = $(".train");
    let $slides = $train.children();
    let slideCount = $slides.length
    let slideWidth = $slides.first().outerWidth();
    let now = 0;

    // 첫번쨰 슬라이드 복사해서 마지막에 추가 (무한 슬라이드)
    $train.append($slides.first().clone());

    setInterval(function(){
        now++;
        $train.css("transform", `translateX(${-slideWidth * now}px)`);

        // 첫번째 화면을 복사한 후 다시 슬라이드를 원복시킬 때 transition을 꺼야 순간이동 하는 것 처럼 구현할 수 있기 때문에 setTimeout 이 무조건적으로 필요하다. 안 쓰면 이렇게 복잡하게 구현하는 의미가 없다.
        if(now === slideCount){
            setTimeout(()=>{
                $train.css({
                    transition: "none",
                    transform: "translateX(0)"
                })
                now = 0;

                setTimeout(()=>{
                    $train.css("transition","transform 0.5s ease")
                },10)
            },500)
        }
    },2500)
})