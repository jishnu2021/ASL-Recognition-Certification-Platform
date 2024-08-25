const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('./database/config');
const { exec } = require('child_process');
const Person = require('./database/Person');
const path = require('path');

app.use(express.json());
app.use(cors());

app.post('/uregister', async (req, res) => {
    try {
        const user = new Person(req.body);
        const result = await user.save();
        res.status(201).json(result.toObject());
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.post('/userlogin', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new Error('Invalid Credentials');
        }
        const user = await Person.findOne({ email, password }).select('-password');
        if (!user) {
            throw new Error('Invalid Credentials');
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.get('/run-script', (req, res) => {
    exec('python "C:/Users/jishn/Desktop/ASL-Recognition-Certification-Platform/Backend/countdown.py"', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing script: ${error.message}`);
            console.error(`stderr: ${stderr}`);
            return res.status(500).send(`Error executing script: ${stderr}`);
        }
        console.log(`Script output: ${stdout}`);
        res.send(stdout);  // Send the script output back to the client
    });
});


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
