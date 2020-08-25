'use strict';

function chessboard () {
    let chessboardHTML = '<table>';
    for(let i = 0; i < 9; i++) {
        chessboardHTML += '<tr>';
        for(let j = 0; j < 9; j++) {
            if(i == 0 && j == 0) {
                chessboardHTML += '<td class="white"></td>';
            } else if (i == 0 && j != 0) {
                chessboardHTML += `<td class="white">&#${j + 64};</td>`;
            } else if (i != 0 && j == 0) {
                chessboardHTML += `<td class="white">${9 - i}</td>`;
            } else if((j + i) % 2 == 1){
                chessboardHTML += '<td class="black"></td>';
            } else {
                chessboardHTML += '<td class="white"></td>';
            }
        }
        chessboardHTML += '</tr>';
    }
    chessboardHTML += '</table>';
    const body = document.querySelector('body');
    body.insertAdjacentHTML('afterbegin', chessboardHTML);
    //chessboardGen.innerHTML = chessboardHTML;
}

chessboard();