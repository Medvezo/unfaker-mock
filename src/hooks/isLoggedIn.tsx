import Cookies from 'js-cookie';

export function isLoggedIn() {
    const loggedIn = Cookies.get('isLoggedIn');
    // Return boolean if user logged In
    return !!loggedIn;
}