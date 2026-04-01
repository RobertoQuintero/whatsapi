import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import apiRoutes from './routes/routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/whatsapp', apiRoutes);

app.get('/logs', (req, res) => {
    const logsPath = path.join(__dirname, '../logs.txt');
    fs.readFile(logsPath, 'utf8', (err, data) => {
        if (err) return res.status(500).send('No se pudo leer el archivo de logs.');
        res.type('text/plain').send(data);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

