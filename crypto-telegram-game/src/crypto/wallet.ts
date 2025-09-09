export class Wallet {
    private balance: { [key: string]: number };

    constructor() {
        this.balance = {};
    }

    addCurrency(currency: string, amount: number): void {
        if (this.balance[currency]) {
            this.balance[currency] += amount;
        } else {
            this.balance[currency] = amount;
        }
    }

    removeCurrency(currency: string, amount: number): boolean {
        if (this.balance[currency] && this.balance[currency] >= amount) {
            this.balance[currency] -= amount;
            return true;
        }
        return false;
    }

    checkBalance(currency: string): number {
        return this.balance[currency] || 0;
    }

    getAllBalances(): { [key: string]: number } {
        return this.balance;
    }
}