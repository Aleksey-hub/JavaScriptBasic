/*1.2 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
а) конструктор Post, который принимает параметры author, text, date 
и сохраняет их как свойства объекта. Объекты типа Post должны иметь 
метод edit, который будет принимать текст и записывать его в свойство 
text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. 
Проинициализируйте эти свойства с помощью конструктора Post, чтобы 
не дублировать код. Также в конструкторе AttachedPost должно создаваться 
свойство highlighted со значением false. Унаследуйте в объектах типа 
AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, 
который будет назначать свойству highlighted значение true.*/
'use strict';

//а)
function PostES5(author, text, date){
    this.author = author;
    this.text = text;
    this.date = date;
}

PostES5.prototype.edit = function(textEdit){
    this.text = textEdit;
}

class PostES6 {
    constructor(author, text, date){
        this.author = author;
        this.text = text;
        this.date = date;
    }
    
    edit(textEdit){
        this.text = textEdit;
    }
}

const post1 = new PostES5('qwe', 'Hello world!', 2020);
post1.edit('Hello.');

const post2 = new PostES6('asd', 'Lorem', 2019);
post2.edit('Lorem ipsum');

//б)
function AttachedPostES5(author, text, date){
    PostES5.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPostES5.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}

class AttachedPostES6 extends PostES6 {
    constructor(author, text, date){
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted(){
        this.highlighted = true;
    }
}

const attachedPost1 = new AttachedPostES5('qwe', 'Hello world!', 2020);
attachedPost1.makeTextHighlighted();

const attachedPost2 = new AttachedPostES6('asd', 'Lorem', 2019);
attachedPost2.makeTextHighlighted();