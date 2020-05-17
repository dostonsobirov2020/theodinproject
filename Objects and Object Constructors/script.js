const PlayerOne = {
    name: 'Tim',
    marker: 'X'
}

const PlayerTwo = {
    name: 'Jenn', 
    marker: 'O'
}

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? `has been read` : `not read yet`}.`
    }
}

const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 298, true);
const lotr = new Book('The Lord of the Rings', 'J.R.R Tolkien', 980, false);

let hobbitInfo = hobbit.info();
let lotrInfo = lotr.info();

console.log(hobbitInfo);
console.log(lotrInfo);