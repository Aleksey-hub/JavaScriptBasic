'use strict';

window.addEventListener('load', function () {
    slider.init();

    document.querySelector('.left_slide').addEventListener('click', function () {
        slider.sliderLeft();
    });

    document.querySelector('.rigth_slide').addEventListener('click', function () {
        slider.sliderRigth();
    });
});

let slider = {
    sliderIdx: 0,

    sliderContent: [],

    init() {
        this.sliderContent = document.querySelectorAll(".slide_content");
        this.showSliderContentIdx();
    },

    showSliderContentIdx() {
        this.sliderContent[this.sliderIdx].classList.remove('hidden');
    },

    hideSliderContent() {
        this.sliderContent.forEach(function (slide) {
            slide.classList.add('hidden');
        })
    },

    sliderLeft() {
        this.sliderContent[this.sliderIdx].classList.add("animate__slideOutLeft");
        setTimeout(() => {
            this.hideSliderContent();
            this.sliderDeleteAnimation();
            if (this.sliderIdx == 0) {
                this.sliderIdx = this.sliderContent.length - 1;
            } else {
                this.sliderIdx--;
            }
            this.showSliderContentIdx(this.sliderIdx);
            this.sliderContent[this.sliderIdx].classList.add("animate__slideInRight");
        }, 500);
    },

    sliderRigth() {
        this.sliderContent[this.sliderIdx].classList.add("animate__slideOutRight");
        setTimeout(() => {
            this.hideSliderContent();
            this.sliderDeleteAnimation();
            if (this.sliderIdx == this.sliderContent.length - 1) {
                this.sliderIdx = 0;
            } else {
                this.sliderIdx++;
            }
            this.showSliderContentIdx(this.sliderIdx);
            this.sliderContent[this.sliderIdx].classList.add("animate__slideInLeft");
        }, 500);
    },

    sliderDeleteAnimation() {
        this.sliderContent[this.sliderIdx].classList.remove(
            "animate__slideInRight",
            "animate__slideInLeft",
            "animate__slideOutLeft",
            "animate__slideOutRight");
    }
};
