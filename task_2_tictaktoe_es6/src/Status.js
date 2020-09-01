'use strict';

class Status {
    constructor() {
        this.status = 'playing';
        this.mapValues = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ];
        this.phase = 'X';
    }
    
    /**
     * Проверка что мы "играем", что игра не закончена.
     * @returns {boolean} Вернет true, статус игры "играем", иначе false.
     */
    isStatusPlaying() {
        return this.status === 'playing';
    }
    
    /**
     * Ставит статус игры в "остановлена".
     */
    setStatusStopped() {
        this.status = 'stopped';
    }

    /**
     * Сообщает о победе.
     */
    sayWonPhrase() {
        let figure = this.phase === 'X' ? 'Крестики' : 'Нолики';
        alert(`${figure} выиграли!`);
    }
    
    /**
    * Меняет фигуру (крестик или нолик).
    */
    togglePhase() {
        this.phase = this.phase === 'X' ? '0' : 'X';
    }
}
