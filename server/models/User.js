const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Import the bookSchema from Book.js
const bookSchema = require('./Book');

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    // Define savedBooks as an array of data adhering to the bookSchema
    savedBooks: [bookSchema],
  },
  {
    // Set options for toJSON method to include virtuals
    toJSON: {
      virtuals: true,
    },
  }
);

// Hash user password before saving
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// Custom method to compare and validate password for login
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Define a virtual field 'bookCount' to get the number of saved books
userSchema.virtual('bookCount').get(function () {
  return this.savedBooks.length;
});

// Create the User model using the userSchema
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;
