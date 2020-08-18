/*7. Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx*/
'use strict';

//1-й способ
for (let i = 'x'; i != 'xxxxxxxxxxxxxxxxxxxx'; i = i + 'x'){
    console.log(i); 
}

//2-й способ
let a = '';
for (let i = 0; i < 20; i++){
    a += 'x';
    console.log(a); 
}