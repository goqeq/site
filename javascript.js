function scrollToSection(sectionNumber) {
    var section;
    switch (sectionNumber) {
        case 2:
            section = document.querySelector('.v-slider-bloc-2');
            break;
        case 3:
            section = document.querySelector('.v-slider-bloc-3');
            break;
        default:
            return;
    }
    section.scrollIntoView({behavior: 'smooth'});
}


document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const sliderBlocks = document.querySelectorAll(".slider-main, .v-slider-bloc-2, .v-slider-bloc-3");

    function setActiveBlock() {
        sliderBlocks.forEach((block, index) => {
            if (Math.abs(container.scrollTop - block.offsetTop) <= container.clientHeight / 2) {
                block.classList.add("slider-active");
            } else {
                block.classList.remove("slider-active");
            }
        });
    }

    container.addEventListener("scroll", setActiveBlock);
    setActiveBlock();
});


