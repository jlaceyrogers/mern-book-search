const { Schema } = require('mongoose');

// Book Schema
// This schema defines the structure of a book document that can be stored within the user's 'savedBooks' array.
const bookSchema = new Schema({
  authors: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  // Google Books' unique book identifier
  bookId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
});

// Export the book schema to be used in other parts of the application
module.exports = bookSchema;
