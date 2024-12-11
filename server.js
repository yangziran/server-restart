const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle restart request
app.get('/restart', (req, res) => {
    if (req.query.x === 'KsqrJ$xOgCCiifJET!ZxwnEgxnF!nNZrZ_uxZFRDMtC') {
        const exec = require('child_process').exec;
        const command = 'sudo reboot';

        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return res.status(500).send('Failed to restart server.');
            } else {
                console.log(`stdout: ${stdout}`);
                console.error(`stderr: ${stderr}`);
                return res.send('Server is restarting...');
            }
        });
    } else {
        return res.send('Hello, World!');
    }
});

// Start the server
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
