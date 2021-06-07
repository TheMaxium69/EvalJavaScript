class Book {
    constructor() {
        this.title = "";
        this.price = 0.0;
        this.author = Author;
    }

    setAuthor(Author) {
        this.author = Author;
        this.addBook();
        return this;
    }

    addBook() {
        let i = 0;
        let verif = false;
        for (const value of this.author.books) {
            if (value == this){
                verif = true;
            }
            i++;
        }
        if (!verif){
            this.author.books.push(this);
        }
    };
}