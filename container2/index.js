const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 4000;
app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
    const { file, product } = req.body;

    fs.readFile(`${process.env.DATA_DIR}/${file}`, 'utf8', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                return res.json({ file, error: 'File not found.' });
            }
            return res.json({ file, error: 'Error reading file.' });
        }

        const lines = data.trim().split('\n');
        if (!isValidCSV(lines)) {
            return res.json({ file, error: 'Input file not in CSV format.' });
        }
        let sum = 0;
        for (let line of lines.slice(1)) {
            const [prod, amount] = line.split(',');
            if (prod.trim() === product) {
                sum += parseInt(amount.trim());
            }
        }
        return res.json({ file, sum });
    });
});

function isValidCSV(lines) {
    if (lines.length < 2) return false; 
    for (let line of lines) {
        if (!line.includes(',')) return false;
    }
    return true;
}

app.get('/welcome', (req, res) => {
    res.status(200).send("Welcome to CSCI5409 Assignment: Container2.")
})

app.listen(PORT, () => {
    console.log(`Container2 is running on port ${PORT}`);
});
