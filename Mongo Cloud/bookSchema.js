const mongoose = require('mongoose');

// Define the Mongoose schema
const bookSchema = new mongoose.Schema({
  book: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
});

// Create a Mongoose model using the schema
const Book = mongoose.model('bookInfos', bookSchema);

module.exports = Book;
