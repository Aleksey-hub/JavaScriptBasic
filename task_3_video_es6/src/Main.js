'use strict';

window.addEventListener('load', function() {
    const video = new Video();
    const timing = new Timing();
    const playback = new Playback();
    const volume = new Volume();
    
    timing.init(video);
    playback.init(video, timing);
    volume.init(video);
    
    timing.initEventHandlerTimingChange();
    timing.initEventHandlerTimingMousedown();
    timing.initEventHandlerTimingEnded();
    playback.initEventHandlerPlay();
    playback.initEventHandlerPause();
    playback.initEventHandlerRewindLeft();
    playback.initEventHandlerRewindRight();
    volume.initEventHandlerVolumeChange();
})