'use strict';

class Volume {
    constructor() {
        this.volume = document.querySelector('.volume');
    }

    init(video) {
        this.video = video;
    }

    initEventHandlerVolumeChange() {
        this.volume.addEventListener('change', this.functionEventHandlerVolumeChange)
    }
    
    functionEventHandlerVolumeChange = (event) => {
            this.video.videoElement.volume = this.volume.value;
        }
}
