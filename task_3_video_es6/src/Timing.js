'use strict';

class Timing {
    constructor() {
        this.timing = document.querySelector('.timing');
        this.currentTimeEl = document.querySelector('.currentTime');
        this.progressIdentifier = null;
    }

    init(video) {
        this.video = video;
        this.timing.min = 0;
        this.timing.max = this.video.videoElement.duration;
    }

    initEventHandlerTimingChange() {
        this.timing.addEventListener('change', this.functionEventHandlerTimingChange);
    }

    functionEventHandlerTimingChange = (event) => {
        // console.log('timing change');
        this.video.videoElement.currentTime = this.timing.value;
        if (this.video.wasVideoPlaying) {
            this.video.play();
            this.progressIdentifier = setInterval(this.changeProgress, 100);
        } else {
            this.changeProgress();
        }
    }

    initEventHandlerTimingMousedown() {
        this.timing.addEventListener('mousedown', this.functionEventHandlerTimingMousedown);
    }

    functionEventHandlerTimingMousedown = (event) => {
        // console.log('timing mousedown');
        this.video.wasVideoPlaying = !this.video.paused;
        if (this.video.wasVideoPlaying) {
            this.video.pause();
            clearInterval(this.progressIdentifier);
        }
    }

    changeProgress = () => {
        this.timing.value = this.video.videoElement.currentTime;
        this.currentTimeEl.innerText = this.video.videoElement.currentTime;
    }

    initEventHandlerTimingEnded() {
        this.video.videoElement.addEventListener('ended', this.functionEventHandlerTimingEnded);
    }

    functionEventHandlerTimingEnded = (event) => {
        clearInterval(this.progressIdentifier);
    }
}
