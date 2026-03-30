import express from 'express';
import apiRoutes from './routes/routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/whatsapp', apiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

