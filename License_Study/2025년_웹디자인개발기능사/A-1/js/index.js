window.addEventListener("load",function(){
    let btn_open = document.querySelector(".btn_open")
    let popup = document.querySelector(".popup")

    btn_open.addEventListener("click",function(){
        popup.classList.add("on")
    })

    let btn_close = document.querySelector(".btn_close")
    btn_close.addEventListener("click",function(){
        popup.classList.remove("on")
    })

    // 탭메뉴
    let tabs = this.document.querySelectorAll(".tabs>a")
    let tab_contents = this.document.querySelectorAll(".tab_contents>ul")
    tabs.forEach(function(tab,index){
        tab.addEventListener("click",function(){
            // 탭 기능 활성화
            tabs[0].classList.remove("on")
            tabs[1].classList.remove("on")
            tab.classList.add("on")
            // 탭 내용 변경
            tab_contents[0].classList.remove("on")
            tab_contents[1].classList.remove("on")
            tab_contents[index].classList.add("on")
        })
    }) 

    // 슬라이드
    let count = 0
    let train = this.document.querySelector(".train")

    this.setInterval(function(){
        // 슬라이드 이동
        count++
        if(count>2){count=0}
        train.style.transform = `translateY(${-33.333*count}%)`
    },2500)
})