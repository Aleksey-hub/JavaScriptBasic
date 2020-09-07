'use strict';

class Video {
    constructor() {
        this.videoElement = document.querySelector('video');
        this.wasVideoPlaying = false;
    }
    
    pause() {
        this.videoElement.pause();
    }
    
    play() {
        this.videoElement.play();
    }
    
    /*getCurrentTime() {
        return this.videoElement.currentTime;
    }
    
    getPaused() {
        return this.videoElement.paused;
    }*/
}