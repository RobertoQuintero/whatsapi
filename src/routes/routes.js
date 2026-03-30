import express from 'express';
import { verifyToken, receivedMessage } from '../controllers/whatsappControllers.js';

const router = express.Router();

router.get('/', verifyToken);
router.post('/msg', receivedMessage);

export default router;