const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Маршрут для перевірки безпосередньо в браузері
app.get('/', (req, res) => {
    res.send('Сервер працює! Зайдіть на /api/resume');
});

app.get('/api/resume', (req, res) => {
    // Шлях має бути правильним відносно місця, де ти запускаєш node server.js
    fs.readFile('./resume.json', 'utf8', (err, data) => {
        if (err) {
            console.error("Помилка читання файлу:", err);
            return res.status(500).json({ error: "Файл не знайдено" });
        }
        // Обов'язково парсимо в JSON перед відправкою
        res.json(JSON.parse(data));
    });
});

app.listen(3000, () => {
    console.log('Backend забіг на http://localhost:3000');
});
