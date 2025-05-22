"use strict";
class Book {
    constructor(id, title, author) {
        this.isAvailable = true;
        this.id = id;
        this.title = title;
        this.author = author;
    }
    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`${this.title} has been borrowed`);
        }
        else {
            console.log(`${this.title} is not available`);
        }
    }
    return() {
        this.isAvailable = true;
        console.log(`${this.title} has been returned`);
    }
    getStatus() {
        return this.isAvailable ? "Available" : "Borrowed";
    }
}
const bookA = new Book(1, "Purple Hibiscus", "Chimamanda Ngozi Adichie");
const bookB = new Book(2, "Half of a Yellow Sun", "Chimamanda Ngozi Adichie");
const bookC = new Book(3, "Things Fall Apart", "Chinua Achebe");
console.log(bookA.getStatus());
bookA.borrow();
console.log(bookA.getStatus());
bookA.return();
console.log(bookA.getStatus());
class Member {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getDetails() {
        return `${this.name} (ID: ${this.id})`;
    }
}
const memberA = new Member(1, "Kelvin");
const memberB = new Member(2, "Ngozi");
const memberC = new Member(3, "Amina Musa");
console.log(memberA.getDetails());
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Book "${book.title}" added to the library.`);
    }
    addMember(member) {
        this.members.push(member);
        console.log(`Member "${member.name}" added to the library.`);
    }
    listBooks() {
        console.log("\nBooks in Library:");
        this.books.forEach(book => {
            console.log(`- ${book.title} by ${book.author} [${book.getStatus()}]`);
        });
    }
    listMembers() {
        console.log("\nLibrary Members:");
        this.members.forEach(member => {
            console.log(`- ${member.getDetails()}`);
        });
    }
    borrowBook(bookId, memberId) {
        const book = this.books.find(b => b.id === bookId);
        const member = this.members.find(m => m.id === memberId);
        if (!book) {
            console.log("Book not found.");
            return;
        }
        if (!member) {
            console.log("Member not found.");
            return;
        }
        book.borrow();
    }
    returnBook(bookId) {
        const book = this.books.find(b => b.id === bookId);
        if (!book) {
            console.log("Book not found.");
            return;
        }
        book.return();
    }
}
const library = new Library();
// Add to library
library.addBook(bookA);
library.addBook(bookB);
library.addMember(memberA);
library.addMember(memberB);
// Show list
library.listBooks();
library.listMembers();
// Borrow and return books
library.borrowBook(1, 1); // Kelvin borrows Purple Hibiscus
library.borrowBook(1, 2); // Already borrowed
library.returnBook(1); // Returned
library.borrowBook(1, 2); // Now Ngozi borrows it
library.listBooks(); // Final status
