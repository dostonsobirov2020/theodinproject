const formAddBook = document.getElementById('form--add-book');
const inputTitle = document.getElementById('input-title');
const inputAuthor = document.getElementById('input-author');
const inputPages = document.getElementById('input-pages');
const inputIsRead = document.getElementById('input-isRead');

const books = document.getElementById('books');

let myLibrary = [
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        pages: 298,
        isRead: true
    },

    {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        pages: 990,
        isRead: false
    },

    {
        title: 'The Song of Ice and Fire',
        author: 'G. R.R. Martin',
        pages: 4200,
        isRead: true
    },

    {
        title: 'Harry Potter',
        author: 'J. K. Rowling',
        pages: 1008,
        isRead: false
    },

    {
        title: 'Silmarillion',
        author: 'J.R.R. Tolkien',
        pages: 720,
        isRead: false
    },
];

class Book {
    constructor (title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    addBookToLibrary() {
        const div = document.createElement('div');

        div.classList.add('book');
        div.innerHTML = `
            <h2 class="book-title">${this.title}</h2>
            <p class="book-author">Author - <strong>${this.author}</strong></p>
            <p class="book-pages">${this.pages}</p>
            <p class="book-isRead">
                <input type="checkbox" id="input--book-isRead" ${this.isRead ? 'checked' : ''}>
                <label for="input--book-isRead">Is Read</label>
            </p>
            <div class="book-remove">X</div>
        `;

        books.appendChild(div);
    }
}

function render() {
    books.innerHTML = '';
    if (myLibrary.length > 0) {
        myLibrary.forEach((book, index) => {
            const newBook = new Book(book.title, book.author, book.pages, book.isRead);
            newBook.addBookToLibrary();
        });
    }
}

formAddBook.addEventListener('submit', e => {
    e.preventDefault();

    if (inputTitle.value == '' || inputAuthor.value == '' || inputPages == '') {
        alert('Please fill in all the fields');
    } else {
        const objBook = {
            title: inputTitle.value,
            author: inputAuthor.value,
            pages: +inputPages.value,
            isRead: inputIsRead.checked
        }
    
        myLibrary.push(objBook);
    
        render();
        formAddBook.reset();
    }
    // console.log(inputTitle.value, inputAuthor.value, inputPages.value, inputIsRead.value);
});

books.addEventListener('click', e => {
    if (e.target.classList.contains('book-remove')) {
        e.target.parentElement.remove();
    }
});

render();