import fs from 'fs';
// const myConsole = new console.Console(fs.createWriteStream('./logs.txt'));

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
        console.log({error})
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
        if(typeof value.messages!=undefined){
            const messages = value.messages[0];
            const text= getTextUser(messages);
    
            console.log({text});

        }

        res.status(200).send('EVENT_RECEIVED');
    } catch (error) {
        console.log({error})
        res.status(500).send('EVENT_RECEIVED');
    }
    
   
}

const getTextUser = (messages) => {
    let text = '';
    const typeMessage = messages.type;
    if (typeMessage === 'text') {
        text = messages.text.body;
    } else if (typeMessage === 'interactive') {
        const interactiveType = messages.interactive.type;
        if (interactiveType === 'button_reply') {
            text = messages.interactive.button_reply.title;
        } else if (interactiveType === 'list_reply') {
            text = messages.interactive.list_reply.title;
        }   
    }
    return text;
}