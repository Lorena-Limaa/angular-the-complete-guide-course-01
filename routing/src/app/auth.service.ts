export class AuthService { // Class to handle authentication-related functionalities
    loggedIn = false; // Flag to indicate user authentication status

    isAuthenticated() { // Method to check if user is authenticated
        const promise = new Promise( // Creating a promise
            (resolve, reject) => { // Promise executor function
                setTimeout(() => { // Simulating asynchronous operation
                    resolve(this.loggedIn); // Resolving the promise with authentication status
                }, 800); // Delay of 800 milliseconds
            }
        );
        return promise; // Returning the promise
    }

    login() { // Method to log in the user
        this.loggedIn = true; // Setting authentication status to true
    }

    logout() { // Method to log out the user
        this.loggedIn = false; // Setting authentication status to false
    }
}  