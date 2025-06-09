window.addEventListener("load",function(){
    let train = this.document.querySelector(".train");
    let slides = this.document.querySelectorAll(".train li");
    let slideCount = slides.length;
    let currentIndex = 0;
    let isTransitioning = false;

    let firstSlideClone = slides[0].cloneNode(true);
    train.appendChild(firstSlideClone)

    let slideWidth = slides[0].offsetWidth;

    function moveSlide(){
        if (isTransitioning) return
        isTransitioning = true;

        currentIndex++;
        train.style.transition = 'transform 0.6s ease 0s';
        train.style.transform = `translateX(-${slideWidth * currentIndex}px)`

        if (currentIndex === slideCount) {
            setTimeout(()=>{
                train.style.transition = 'none';
                train.style.transform = 'translateX(0)';
                currentIndex = 0;
                isTransitioning = false;
            },600);
        } else {
            setTimeout(()=>{
                isTransitioning = false;
            },600);
        }
    }

    this.setInterval(moveSlide, 2500);

    // 팝업 열기&닫기
    let popup = this.document.querySelector(".popup")
    let btnClose = this.document.querySelector(".btnClose")
    let btnOpen = this.document.querySelector(".btnOpen")

    btnOpen.addEventListener("click",function(){
        popup.classList.add("on")
    })
    btnClose.addEventListener("click",function(){
        popup.classList.remove("on")
    })

    // 공지사항 - 갤러리 토글
    let onNotice = this.document.querySelector(".tabsNotice")
    let onGallery = this.document.querySelector(".tabsGallery")
    let notice = this.document.querySelector(".notice")
    let gallery = this.document.querySelector(".gallery")


    onNotice.addEventListener("click",function(){
        onNotice.classList.add("on")
        onGallery.classList.remove("on")
        gallery.classList.remove("on")
        notice.classList.add("on")
    })
    onGallery.addEventListener("click",function(){
        onGallery.classList.add("on")
        onNotice.classList.remove("on")
        notice.classList.remove("on")
        gallery.classList.add("on")
    })
})