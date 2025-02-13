const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Додати підтримку CORS
const corsOptions = {
    origin: ['https://papabatosha95.github.io/', 'http://127.0.0.1:5500/index.html'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Токен твого Telegram бота
const token = '7732047877:AAG0tdBNIk5ktHGOINmSsd9-zROdtKfukXM';
const bot = new TelegramBot(token, { polling: true });

// ID твого чату з ботом
const chatId = '382096637'; // Замінити на фактичний chatId, можна дізнатись через @userinfobot у Telegram

// Обробка POST запитів з форми
app.post('/send-message', (req, res) => {
    const { name, text } = req.body;
    if (name && text) {
        const message = `Нове повідомлення з сайту:\nІм'я: ${name}\nПовідомлення: ${text}`;
        bot.sendMessage(chatId, message);
        res.status(200).send('Повідомлення надіслано');
    } else {
        res.status(400).send('Помилка: всі поля обов\'язкові для заповнення');
    }
});

// Запуск сервера на порту 3000 або іншому доступному порту
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер працює на порту ${PORT}`);
});
