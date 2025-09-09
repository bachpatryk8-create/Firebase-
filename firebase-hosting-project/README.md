# Firebase Hosting Project

This project demonstrates how to set up and deploy a web application using Firebase Hosting.

## Project Structure

```
firebase-hosting-project
├── public
│   └── index.html          # Main HTML file for the application
├── firebase.json           # Firebase Hosting configuration
├── .firebaserc             # Firebase project configuration
└── README.md               # Project documentation
```

## Getting Started

To get started with this project, follow the steps below:

### Prerequisites

- Node.js and npm installed on your machine.
- Firebase CLI installed. You can install it globally using npm:

  ```
  npm install -g firebase-tools
  ```

### Configuration

1. Clone the repository:

   ```
   git clone <repository-url>
   cd firebase-hosting-project
   ```

2. Initialize Firebase in your project:

   ```
   firebase init
   ```

   Select "Hosting" and follow the prompts to set up your project.

### Deploying to Firebase Hosting

To deploy your application to Firebase Hosting, run the following command:

```
firebase deploy
```

After deployment, you will receive a hosting URL where your application is accessible.

### Local Development

You can serve your application locally using:

```
firebase serve
```

This will allow you to view your application in your browser at `http://localhost:5000`.

## License

This project is licensed under the MIT License. See the LICENSE file for details.