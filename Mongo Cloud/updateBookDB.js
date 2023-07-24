const mongoose = require('./bookSeed');
const BookModel = require('./bookSchema'); 

async function updateBook() {
  try {
    // Find the book with the title "Urbanization"
    const bookToUpdate = await BookModel.findOne({ book: 'Urbanization' });

    console.log(bookToUpdate);

    if (bookToUpdate) {
      // Update the book year
      bookToUpdate.year = '1996';
      
      await BookModel.updateOne({
        book: 'Urbanization'
      }, {
        book: bookToUpdate.book,
        author: bookToUpdate.author,
        year: bookToUpdate.year
      }).then((res) => {
            console.log(res, "Here");
      }).catch((err) => {
        console.log(err);
      });

      console.log('Book updated successfully!');
      console.log(`New Year: ${bookToUpdate.year}`);
    } else {
      console.log('Book with the title "Civilization" not found.');
    }

    // Close the MongoDB connection after updating
    mongoose.connection.close();
  } catch (error) {
    console.error('Error updating book:', error);
    mongoose.connection.close();
  }
}

updateBook();