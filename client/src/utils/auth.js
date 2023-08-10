// Import the 'jwt-decode' library to decode JWT tokens
import decode from 'jwt-decode';

// Create a new class to handle authentication
class AuthService {
  // Get user data from the token
  getProfile() {
    return decode(this.getToken());
  }

  // Check if the user is logged in
  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // '!!' converts value to boolean
  }

  // Check if the token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      // Compare the expiration time (exp) with the current time
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  // Get the user token from localStorage
  getToken() {
    return localStorage.getItem('id_token');
  }

  // Save the user token to localStorage and redirect to the home page
  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  // Clear user token and profile data from localStorage and reload the page
  logout() {
    localStorage.removeItem('id_token');
    // Reloading the page resets the application state
    window.location.assign('/');
  }
}

// Create a single instance of the AuthService class and export it
export default new AuthService();
