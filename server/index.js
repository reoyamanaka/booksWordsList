const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(express.json());

const db = mysql.createConnection( {
    user: "your_username",
    host: "localhost",
    password: "your_password",
    database: "words"
});

db.query("CREATE TABLE IF NOT EXISTS words (id INT PRIMARY KEY AUTO_INCREMENT, word TEXT, definition TEXT, wordSource TEXT, test BOOLEAN)"), (err, result) => {
    if (err) throw err;
    res.send("Table created.");
}

app.post('/create', (req, res) => {
    const word = req.body.word;
    const definition = req.body.definition;
    const source = req.body.source;

    db.query("INSERT INTO words (word, definition, wordSource) VALUES (?, ?, ?)", [word, definition, source], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));