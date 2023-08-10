// Get an array of saved book IDs from localStorage
export const getSavedBookIds = () => {
  // Get saved book IDs from localStorage if they exist, otherwise initialize with an empty array
  const savedBookIds = localStorage.getItem('saved_books')
    ? JSON.parse(localStorage.getItem('saved_books'))
    : [];

  return savedBookIds;
};

// Save an array of book IDs to localStorage
export const saveBookIds = (bookIdArr) => {
  if (bookIdArr.length) {
    // If there are book IDs, store them in localStorage as JSON
    localStorage.setItem('saved_books', JSON.stringify(bookIdArr));
  } else {
    // If the array is empty, remove the 'saved_books' key from localStorage
    localStorage.removeItem('saved_books');
  }
};

// Remove a specific book ID from the array and update localStorage
export const removeBookId = (bookId) => {
  // Get saved book IDs from localStorage if they exist, otherwise initialize as null
  const savedBookIds = localStorage.getItem('saved_books')
    ? JSON.parse(localStorage.getItem('saved_books'))
    : null;

  if (!savedBookIds) {
    return false; // No saved book IDs to remove from
  }

  // Filter out the book ID to be removed and update localStorage
  const updatedSavedBookIds = savedBookIds?.filter(
    (savedBookId) => savedBookId !== bookId
  );
  localStorage.setItem('saved_books', JSON.stringify(updatedSavedBookIds));

  return true; // Book ID removed successfully
};
