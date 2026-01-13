class Book {
    constructor(title, numOfChapters, author, numOfPages, publisher, numOfCopies) {
        this.title = title;
        this.numOfChapters = numOfChapters;
        this.author = author;
        this.numOfPages = numOfPages;
        this.publisher = publisher;
        this.numOfCopies = numOfCopies;
    }

    toString() {
        return `Book Title: ${this.title}, Author: ${this.author}`;
    }

    //extra func
    isLongBook() {
        return this.numOfPages > 300;
    }
}

class Box {
    #content; //private field

    constructor(height, width, length, material) {
        this.height = height;
        this.width = width;
        this.length = length;
        this.material = material;

        this.#content = []; //private array
        this.volume = height * width * length;
    }

    addBook(book) {
        if (!(book instanceof Book)) {
            throw new Error("Only Book objects can be added to the box!");
        }
        this.#content.push(book);
    }

    countBooks() {
        return this.#content.length;
    }

    deleteBook(value) {
        this.#content = this.#content.filter(
            book => book.title !== value && book.author !== value
        );
    }

    //extra func
    findBookByTitle(title) {
        return this.#content.find(book => book.title === title) || null;
    }

    toString() {
        return `Box Dimensions: ${this.height} x ${this.width} x ${this.length}
Material: ${this.material}
Volume: ${this.volume}
Number of Books: ${this.countBooks()}
Books Stored: ${this.#content.map(book => book.title).join(", ")}
`;
    }


    valueOf() {
        return this.countBooks();
    }
}


const book1 = new Book("JavaScript", 12, "John Doe", 350, "TechPress", 4);
const book2 = new Book("HTML", 8, "Jane Smith", 200, "WebBooks", 3);
const book3 = new Book("CSS", 10, "John Doe", 280, "DesignHouse", 5);

const box1 = new Box(10, 5, 4, "Wood");
const box2 = new Box(6, 4, 3, "Plastic");

box1.addBook(book1);
box1.addBook(book2);
box1.addBook(book3);

// box1.content        //error
// box1.#content       //error


// box1.addBook("hello");     //error
// box1.addBook(123);         //error
// box1.addBook({});          //error


box2.addBook(book1);
box2.addBook(book2);

box1.deleteBook("HTML");

console.log(box1.toString());
console.log(box2.toString());

//test findBookByTitle() func
const foundBook = box1.findBookByTitle("CSS");
if (foundBook) {
    console.log("Found book:", foundBook.toString());
} else {
    console.log("Book not found!");
}

//test isLongBook() func
console.log(`${book1.title} is a long book?`, book1.isLongBook());  //true
console.log(`${book2.title} is a long book?`, book2.isLongBook());  //false
console.log(`${book3.title} is a long book?`, book3.isLongBook());  //false

console.log("Total books in both boxes:", box1 + box2);