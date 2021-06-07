"use strict";

let book1 = new Book();
book1.title = "Le Seigneur des Anneaux";

let book2 = new Book();
book2.title = "Le Silmarillon";

let author = new Author();
author.name = "Tolkien";


book1.setAuthor(author);
book2.setAuthor(author);
book1.setAuthor(author);


console.log(author);
console.log(book1);
console.log(book2);

