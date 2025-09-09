export interface User {
    id: string;
    username: string;
    balance: number;
}

export interface GameState {
    currentLevel: number;
    score: number;
    isGameOver: boolean;
}

export interface Transaction {
    id: string;
    userId: string;
    amount: number;
    timestamp: Date;
}