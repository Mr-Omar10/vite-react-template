const express = require('express');
const router = express.Router();
const app = express();
const port = 3000;
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

app.use(cors());

//Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => { 
    res.send('About page');
});

app.get('/project', (req, res) => {
    res.send('Project page');
});

app.post('/contact', async (req, res) => {
    const {token, inputVal} = req.body;

    try {
        const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.VITE_SECRET_KEY}&response=${token}`);
        console.log(process.env.VITE_SECRET_KEY)
        const {success} = response.data;
        if (success) {
            res.send('Contact page');
        } else {
            res.send('You are not a human');
        }
    }
    catch (error) {
        console.log(error);
    }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});