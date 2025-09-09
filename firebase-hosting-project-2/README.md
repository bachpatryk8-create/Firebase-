# Firebase Hosting Project

## Overview
This project is set up for hosting a web application using Firebase Hosting. It includes the necessary configuration files and a public directory containing the main HTML document.

## Project Structure
```
firebase-hosting-project
├── public
│   └── index.html
├── firebase.json
├── .firebaserc
└── README.md
```

## Files Description

- **public/index.html**: This is the main HTML document that will be displayed as the homepage of the application hosted on Firebase. It contains the HTML structure and may include references to styles and scripts.

- **firebase.json**: This configuration file specifies the settings for the Firebase project, such as resources for hosting, redirect rules, and other hosting-related options.

- **.firebaserc**: This file contains the Firebase project configuration, including information about projects and their aliases, allowing for easy management of multiple Firebase projects.

## Getting Started

1. **Install Firebase CLI**: Make sure you have the Firebase CLI installed. You can install it using npm:
   ```
   npm install -g firebase-tools
   ```

2. **Login to Firebase**: Authenticate your Firebase account:
   ```
   firebase login
   ```

3. **Initialize Firebase Project**: Navigate to your project directory and run:
   ```
   firebase init
   ```
   Follow the prompts to set up hosting and select your Firebase project.

4. **Deploy to Firebase**: Once your project is configured, you can deploy it using:
   ```
   firebase deploy
   ```

## Additional Resources
- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
- [Firebase CLI Documentation](https://firebase.google.com/docs/cli)