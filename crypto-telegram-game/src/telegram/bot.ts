class Bot {
    constructor(token) {
        this.token = token;
        this.apiUrl = `https://api.telegram.org/bot${token}/`;
    }

    async getUpdates(offset) {
        const response = await fetch(`${this.apiUrl}getUpdates?offset=${offset}`);
        return response.json();
    }

    async sendMessage(chatId, text) {
        const response = await fetch(`${this.apiUrl}sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
            }),
        });
        return response.json();
    }

    async handleMessage(message) {
        const chatId = message.chat.id;
        const text = message.text;

        // Example response logic
        if (text === '/start') {
            await this.sendMessage(chatId, 'Welcome to the Crypto Game!');
        } else {
            await this.sendMessage(chatId, 'I am not sure how to respond to that.');
        }
    }
}

export default Bot;