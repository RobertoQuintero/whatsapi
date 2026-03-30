import fs from 'fs';
const myConsole = new console.Console(fs.createWriteStream('./logs.txt'));

export const verifyToken = (req, res) => {

    try {

        const accessToken= "OUYOIUYOIUYOUYUYXUYCVXUYVISUDFYISUDY"
        const token=req.query["hub.verify_token"];
        const challenge=req.query["hub.challenge"];

        if(challenge !=null && token !==null && token == accessToken){
            res.status(200).send(challenge);
        }else{
            res.status(403).json({
                status: 'error',
                message: 'Invalid token'
            });
        }
        
        
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Token verification failed'
        });
    }
}

export const receivedMessage = (req, res) => {

    try {
        const entry = req.body.entry[0];
        const changes = entry.changes[0];
        const value = changes.value;
        const messages = value.messages;

        myConsole.log(messages)

        res.status(200).send('EVENT_RECEIVED');
    } catch (error) {
        res.status(500).send('EVENT_RECEIVED');
    }
    
    res.json({
        status: 'success',
        message: 'Message received successfully test'
    });
}