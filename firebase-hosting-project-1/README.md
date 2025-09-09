# Firebase Hosting Project

This project demonstrates how to set up and deploy a web application using Firebase Hosting.

## Project Structure

The project contains the following files:

- **public/index.html**: This file is the main page of the application, containing the HTML structure and may include scripts and styles for the user interface.

- **firebase.json**: This configuration file contains settings for Firebase Hosting, such as the public directory, redirects, rewrites, and other deployment options.

- **.firebaserc**: This file contains the Firebase project configuration, including information about the projects and environments used in the application.

## Setup Instructions

1. **Install Firebase CLI**: Make sure you have the Firebase CLI installed. You can install it using npm:

   ```
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**: Navigate to your project directory and run the following command to initialize Firebase:

   ```
   firebase init
   ```

   Follow the prompts to set up Firebase Hosting.

3. **Deploy to Firebase**: Once your project is set up, you can deploy it to Firebase Hosting using the following command:

   ```
   firebase deploy
   ```

4. **Access Your Application**: After deployment, you will receive a hosting URL where your application is live.

## Additional Resources

- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
- [Firebase CLI Documentation](https://firebase.google.com/docs/cli)