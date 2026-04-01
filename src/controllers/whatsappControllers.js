import fs from 'fs';
// const myConsole = new console.Console(fs.createWriteStream('./logs.txt'));

import { sendWhatsAppMessage } from '../services/whatsappService.js';
import { sampleText, sampleImage, sampleAudio, sampleVideo, sampleDocument, sampleLocation, sampleInteractiveButton, sampleInteractiveList } from '../shared/sampleModels.js';    
export const verifyToken = (req, res) => {

    try {

        const accessToken= process.env.TOKEN;
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
        const entry = req.body?.entry[0];
        const changes = entry?.changes[0];
        const value = changes?.value;
        if(typeof value?.messages !== 'undefined' && value.messages.length > 0){
            const messages = value.messages[0];
            const text= getTextUser(messages);
            console.log({text});
            if(text==='text'){
                const data= sampleText('Respuesta: ' + text, messages.from);
                sendWhatsAppMessage( data);
            }
            else if(text==='image'){
                const data= sampleImage('https://www.w3schools.com/w3css/img_lights.jpg', messages.from);
                sendWhatsAppMessage( data);
            }
                else if(text==='audio'){
                const data= sampleAudio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', messages.from);
                sendWhatsAppMessage( data);
            }
                else if(text==='video'){
                const data= sampleVideo("https://res.cloudinary.com/dmq9e2wuv/video/upload/v1774825897/jojc637ef57lpkik3lox.mp4, messages.from);
                sendWhatsAppMessage( data);
            }
                else if(text==='document'){
                const data= sampleDocument('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', messages.from);
                sendWhatsAppMessage( data);
            }
                else if(text==='location'){
                const data= sampleLocation(messages.from);
                sendWhatsAppMessage( data);
            }
                else if(text==='button'){
                const data= sampleInteractiveButton(messages.from, '¿Qué deseas hacer?');
                sendWhatsAppMessage( data);
            }
                else if(text==='list'){
                const data= sampleInteractiveList(messages.from, 'Selecciona una opción');
                sendWhatsAppMessage( data);
            }else{
                const data= sampleText('No seleccionaste nada ' + text, messages.from);
                sendWhatsAppMessage( data);
            }


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