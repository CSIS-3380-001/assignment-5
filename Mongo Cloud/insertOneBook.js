const mongoose = require('./bookSeed');
const BookModel = require('./bookSchema'); 

async function insertBook() {
    try {
      // Create an array of books to insert
      const bookToInsert = new BookModel({ "book": "Introduction to Data Science", "author":"Tzu", "year":"2013" });
    
      // Insert the array of books into the database
      const insertResult = await bookToInsert.save();
  
      console.log('Book inserted successfully!');
  
      // Close the MongoDB connection after inserting
      mongoose.connection.close();
    } catch (error) {
      console.error('Error inserting books:', error);
      mongoose.connection.close();
    }
  }

insertBook();