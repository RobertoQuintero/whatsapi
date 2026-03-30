import express from 'express';
import { verifyToken, receivedMessage } from '../controllers/whatsappControllers.js';

const router = express.Router();

router.get('/', verifyToken);
router.post('/', receivedMessage);

export default router;