$(document).ready(function(){

    // 팝업 열기
    $(".btn_open").click(function(){
        $(".popup").addClass("on")
    })

    // 팝업 닫기
    $(".btn_close").click(function(){
        $(".popup").removeClass("on")
    })

    // 공지사항 탭
    $(".tabs_notice").click(function(){
        $(".tabs_gallery").removeClass("on")
        $(".tabs_notice").addClass("on")
        $(".gallery").removeClass("on")
        $(".notice").addClass("on")
    })

    // 갤러리 탭
    $(".tabs_gallery").click(function(){
        $(".tabs_notice").removeClass("on")
        $(".tabs_gallery").addClass("on")
        $(".notice").removeClass("on")
        $(".gallery").addClass("on")
    })
})