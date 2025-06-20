$(document).ready(function(){
    let $train = $(".train");
    let $slides = $train.children();
    let slideCount = $slides.length;

    // 위아래 슬라이드라면 slideHeight
    let slideWidth = $slides.first().outerWidth();
    let now = 0;

    $train.append($slides.first().clone());

    setInterval(function(){
        now++
        $train.css("transform",`translateX(${-slideWidth * now}px)`);

        if(now === slideCount){
            setTimeout(()=>{
                $train.css({
                    transition: "none",
                    transform: "translateX(0)"
                })
                now = 0

                setTimeout(()=>{
                    $train.css("transition", "transform 0.5s ease")
                },10)
            },500)
        }
    },2500)
})