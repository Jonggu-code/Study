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
})