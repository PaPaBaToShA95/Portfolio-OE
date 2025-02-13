
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Встав токен свого нового бота
const token = '7732047877: AAG0tdBNIk5ktHGOINmSsd9 - zROdtKfukXM';
const bot = new TelegramBot(token, { polling: true });

const app = express();

const corsOptions = {
    origin: ['https://papabatosha95.github.io', 'http://127.0.0.1:5500'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Встав свій chatId, це ID чату, куди будуть приходити повідомлення
const chatId = '382096637'; // Замінити на фактичний chatId

// Обробка запиту з сайту
app.post('/send-message', (req, res) => {
    const { name, text } = req.body;

    if (name && text) {
        const formattedMessage = `Нове повідомлення з сайту портфоліо:
        Ім'я: ${name}
        Телефон: ${text}`;

        bot.sendMessage(chatId, formattedMessage);
        res.status(200).send('Повідомлення надіслано');
    } else {
        res.status(400).send('Помилка: всі поля обовязкові для заповнення');
    }
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер працює на порту ${PORT}`);
});
