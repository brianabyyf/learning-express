const express = require('express')
const mysql = require('mysql')
const app = express()
const cors = require("cors")

app.use(cors())

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "learning-express"
});

database.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Database connected");
});

// AMBIL SEMUA DATA USER
app.get('/api/v1/users', (req, res) => {
    database.query("SELECT * FROM users", (err, rows) => {
        if (err) {
            throw err;
        }
        res.json({
            success: true,
            message: " getting users data",
            data: rows,
        });
    });
});

app.listen(3001, () => {
    console.log("Server is running on port 3001")
});