const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/huinyatub');

// Модели User и Video...

// Первый пользователь — админ
// Роуты: /register, /login, /upload, /videos, /verify (только admin)

app.listen(3000, () => console.log('ХуйняТуб бэкенд на 3000'));
