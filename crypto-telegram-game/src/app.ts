import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { Bot } from './telegram/bot';
import { Wallet } from './crypto/wallet';
import { GameEngine } from './game/engine';

// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Telegram Bot
const bot = new Bot();

// Initialize Crypto Wallet
const wallet = new Wallet();

// Initialize Game Engine
const gameEngine = new GameEngine();

// Application logic
function startGame() {
    gameEngine.start();
}

// Start the application
startGame();