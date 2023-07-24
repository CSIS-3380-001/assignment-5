const mongoose = require('./bookSeed');
const BookModel = require('./bookSchema'); 

async function insertBooks() {
    try {
      // Create an array of books to insert
      const booksToInsert = [
        { "book": "Civilization", "author": "Tzu", "year": "1922" },
        { "book": "Urbanization", "author": "Richards", "year": "1955" },
        { "book": "Concuring the World", "author": "Alexander", "year": "1022" }
      ];
  
      // Insert the array of books into the database
      const insertResult = await BookModel.insertMany(booksToInsert);
  
      console.log('Books inserted successfully!');
      console.log(`Number of books inserted: ${insertResult.length}`);
  
      // Close the MongoDB connection after inserting
      mongoose.connection.close();
    } catch (error) {
      console.error('Error inserting books:', error);
      mongoose.connection.close();
    }
  }

insertBooks();