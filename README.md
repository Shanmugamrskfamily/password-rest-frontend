# Password Reset Application

This project is a full-stack web application for password management, providing functionalities for signing up, logging in, resetting passwords, and more.

<img src="./public/images/Demo.png">

## Features

### User Authentication

- **Signup**: Users can register for an account by providing necessary details like username, email, password, mobile number, and avatar.
- **Login**: Registered users can sign in using their email and password.
- **Forgot Password**: Users can request a password reset by providing their email.
- **Reset Password**: Passwords can be reset using a token sent to the user's email.

### User Dashboard

- **User Information**: Once logged in, users can view their user ID, email, etc., on the dashboard.

### Security

- **JWT Authentication**: JSON Web Tokens are used for secure user authentication.

### Miscellaneous

- **Avatar Selection**: Users can select avatars during signup.
- **CORS Enabled**: Cross-Origin Resource Sharing is enabled to allow interactions between frontend and backend on different domains.
- **Protected Routes**: Certain routes are protected and require a valid token for access.

## Tech Stack

### Frontend

- React
- React Router
- Bootstrap

### Backend

- Node.js
- Express.js
- MongoDB
- JWT for Authentication

## Deployment

- Frontend: Deployed on [Netlify](https://password-reset-guvi-app.netlify.app/)
- Backend: Deployed on [Render](https://password-reset-guvi.onrender.com)

## Installation and Setup

1. Clone the repository
2. Install dependencies using `npm install`
3. Start the frontend and backend servers
4. Open the application in your browser

## Usage

- **Signup**: Access the signup page to create a new account.
- **Login**: Log in with your credentials to access the dashboard.
- **Forgot Password**: Reset your password by providing your email address.
- **Reset Password**: Use the token received in your email to reset your password.

## License

[Insert License Here]

## Contribution

Feel free to contribute to this project by creating a pull request.
