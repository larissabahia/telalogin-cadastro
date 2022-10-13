const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

app.use(router);







router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/index.html'));
})


router.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/criarconta.html'));
})

app.use(express.static(path.join(__dirname, "/public")));




app.listen(3333, () => {
    console.log('funciona')
})