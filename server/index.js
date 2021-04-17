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

app.listen(PORT, () => console.log(`Running on port ${PORT}`));