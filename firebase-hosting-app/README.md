# Firebase Hosting App

This project demonstrates how to set up and deploy a web application using Firebase Hosting.

## Project Structure

- **public/index.html**: This is the main HTML file of the application, which will be displayed as the homepage after deployment on Firebase Hosting.
- **firebase.json**: This configuration file contains settings for Firebase Hosting, such as the location of files to deploy and rules for redirects and rewrites.
- **.firebaserc**: This file contains the Firebase project configuration, including information about the projects and environments used in the application.

## Getting Started

To get started with this project, follow these steps:

1. **Install Firebase CLI**: Make sure you have the Firebase CLI installed. You can install it using npm:

   ```
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**: Navigate to the project directory and run the following command to initialize Firebase:

   ```
   firebase init
   ```

   Follow the prompts to set up Firebase Hosting.

3. **Deploy the Application**: Once you have configured your project, you can deploy it to Firebase Hosting with the following command:

   ```
   firebase deploy
   ```

4. **Access Your Application**: After deployment, you will receive a hosting URL where your application is live.

## Additional Resources

- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
- [Firebase CLI Documentation](https://firebase.google.com/docs/cli)

Feel free to modify the project as needed and explore the capabilities of Firebase Hosting!