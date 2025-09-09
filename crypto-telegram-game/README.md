# Crypto Telegram Game

This project is a web-based game that integrates with Telegram and utilizes cryptocurrency functionalities. It is hosted on Firebase and allows users to interact with the game through a Telegram bot.

## Project Structure

```
crypto-telegram-game
├── public
│   └── index.html          # Main HTML file containing the structure and references to scripts and styles.
├── src
│   ├── app.ts              # Entry point of the application, initializes the app and configures Firebase connections.
│   ├── telegram
│   │   └── bot.ts          # Handles interactions with the Telegram API, including message reception and response.
│   ├── crypto
│   │   └── wallet.ts       # Manages cryptocurrency wallet operations, including adding, removing, and checking balances.
│   ├── firebase
│   │   └── index.ts        # Functions for interacting with Firebase, including user authentication and game data storage.
│   ├── game
│   │   └── engine.ts       # Manages game logic, including starting, updating, and ending the game.
│   └── types
│       └── index.ts        # Defines data types used in the application, such as User, GameState, and Transaction.
├── firebase.json           # Firebase configuration file specifying hosting settings and security rules.
├── package.json            # npm configuration file containing dependencies and scripts for running and building the project.
├── tsconfig.json           # TypeScript configuration file specifying compilation options and included files.
└── README.md               # Documentation for the project, including installation and running instructions.
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/crypto-telegram-game.git
   ```

2. Navigate to the project directory:
   ```
   cd crypto-telegram-game
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To run the application, use the following command:
```
npm start
```

## Firebase Hosting

Make sure to configure your Firebase project and update the `firebase.json` file with your hosting settings. Deploy the application using:
```
firebase deploy
```

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under the MIT License.