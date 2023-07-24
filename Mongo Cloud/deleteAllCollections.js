const mongoose = require('./bookSeed');
const BookModel = require('./bookSchema'); 

async function deleteBooks() {
    try {
      // Delete books with a specific condition
      const deleteResult = await BookModel.deleteMany();
  
      console.log('Books deleted successfully!');
      console.log(`Number of books deleted: ${deleteResult.deletedCount}`);
  
      // Close the MongoDB connection after deleting
      mongoose.connection.close();
    } catch (error) {
      console.error('Error deleting books:', error);
      mongoose.connection.close();
    }
  }

deleteBooks();