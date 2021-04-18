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

app.listen(PORT, () => console.log(`Running on port ${PORT}`));