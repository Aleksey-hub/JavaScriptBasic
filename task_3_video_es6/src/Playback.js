'use strict';

class Playback {
    constructor() {
        this.playBtn = document.querySelector('.fa-play');
        this.pauseBtn = document.querySelector('.fa-pause');
        this.rewindLeftBtn = document.querySelector('.fa-arrow-left');
        this.rewindRightBtn = document.querySelector('.fa-arrow-right');
    }

    init(video, timing) {
        this.video = video;
        this.timing = timing;
    }

    initEventHandlerPlay() {
        this.playBtn.addEventListener('click', this.functionEventHandlerPlay);
    }

    functionEventHandlerPlay = (event) => {
        // console.log('play btn');
        if (this.video.videoElement.paused) {
            this.video.play();
            this.timing.progressIdentifier = setInterval(this.timing.changeProgress, 100);
        }
    }

    initEventHandlerPause() {
        this.pauseBtn.addEventListener('click', this.functionEventHandlerPause);
    }

    functionEventHandlerPause = (event) => {
        if (!this.video.videoElement.paused) {
            // console.log('pause btn');
            this.video.pause();
            clearInterval(this.timing.progressIdentifier);
        }
    }

    initEventHandlerRewindLeft() {
        this.rewindLeftBtn.addEventListener('click', this.functionEventHandlerRewindLeft);
    }

    functionEventHandlerRewindLeft = (event) => {
        if (this.video.videoElement.currentTime > 5) {
            this.video.videoElement.currentTime -= 5;
            this.timing.changeProgress();
        } else {
            this.video.videoElement.currentTime = 0;
            this.timing.changeProgress();
        }
    }
    
    initEventHandlerRewindRight() {
        this.rewindRightBtn.addEventListener('click', this.functionEventHandlerRewindRight);
    }

    functionEventHandlerRewindRight = (event) => {
        if (this.video.videoElement.currentTime > (this.timing.max + 5)) {
            this.video.videoElement.currentTime = this.timing.max;
            this.timing.changeProgress();
        } else {
            this.video.videoElement.currentTime += 5;
            this.timing.changeProgress();
        }
    }
}
