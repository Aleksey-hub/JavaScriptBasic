'use strict';

window.addEventListener('load', () => {
    const board = new Board();
    const status = new Status();
    const game = new Game(status);
    
    board.init(status);
    game.init(status, board);
    
    board.renderMap();
    game.initEventHandlers();
})