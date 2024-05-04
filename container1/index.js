const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/store-file', (req, res) => {
    const { file, data } = req.body;

    if (!file) {
        return res.status(400).json({ file: null, error: 'Invalid JSON input.' });
    }

    fs.writeFile(`${process.env.DATA_DIR}/${file}`, data, (err) => {
        if (err) {
            return res.status(500).json({ file, error: 'Error while storing the file to the storage.' });
        }
        return res.json({ file, message: 'Success.' });
    });
});

app.get('/welcome', (req, res) => {
    res.status(200).send("Welcome to CSCI5409 Kubernetes Assignment : Container1.")
})

app.post('/calculate', async (req, res) => {
    const { file, product } = req.body;

    if (!file) {
        return res.status(400).json({ file: null, error: 'Invalid JSON input.' });
    }

    try {
        fs.access(`${process.env.DATA_DIR}/${file}`, fs.constants.F_OK, (err) => {
            if (err) {
                return res.status(500).json({ file, error: 'File not found.' });
            } 
        });
    } catch(e) {
        return res.status(500).json({ file, error: 'File not found.' });
    }
    

    const response = await axios.post('http://calculation-service:4000/calculate', { file: file, product: product });
    return res.json(response.data);
});

app.listen(PORT, () => {
    console.log(`Container1 is running on port ${PORT}`);
});