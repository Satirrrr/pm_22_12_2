const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); // Обов'язково для обробки JSON у запитах

const DATA_PATH = path.join(__dirname, 'resume.json');

// ГЕТ-запит для читання
app.get('/api/resume', (req, res) => {
    fs.readFile(DATA_PATH, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Помилка читання файлу');
        res.send(JSON.parse(data));
    });
});

// ПОСТ-запит для збереження (запису)
app.post('/api/resume', (req, res) => {
    const updatedData = req.body;

    // Записуємо отримані дані назад у resume.json
    fs.writeFile(DATA_PATH, JSON.stringify(updatedData, null, 2), 'utf8', (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Помилка запису у файл');
        }
        console.log('Дані успішно оновлені у resume.json');
        res.send({ message: 'Дані збережено успішно!' });
    });
});

app.listen(PORT, () => {
    console.log(`Сервер працює на http://localhost:${PORT}`);
});
