const mongoose = require('./bookSeed');
const BookModel = require('./bookSchema'); 


async function readAndLogBooks() {
  try {
    // Fetch all books from the database
    const books = await BookModel.find();

    // Log the books
    console.log('Books in the database:');

    books.forEach((book) => {
      console.log(`Title: ${book.book}, Author: ${book.author}, Year: ${book.year}`);
    });

    // Close the MongoDB connection after reading
    mongoose.connection.close();
  } catch (error) {
    console.error('Error reading books:', error);
    mongoose.connection.close();
  }
}

readAndLogBooks();