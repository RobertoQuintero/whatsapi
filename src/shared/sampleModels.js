
 export const sampleText=(textResponse,number)=>{
    const data = JSON.stringify({
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "text",
        "text": {
            "body": textResponse
        }
    });
    return data;
 }

 export const sampleImage=(imageUrl,number)=>{
    const data = JSON.stringify({
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "image",
        "image": {
            "link": imageUrl,
        }
    });
    return data;
 }
 export const sampleAudio=(audioUrl,number)=>{
    const data = JSON.stringify({
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "audio",
        "audio": {
            "link": audioUrl,
        }
    });
    return data;
 }
    export const sampleVideo=(videoUrl,number)=>{
    const data = JSON.stringify({
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "video",
        "video": {
            "link": videoUrl,
        }
    });
    return data;
 }

    export const sampleDocument=(documentUrl,number)=>{
    const data = JSON.stringify({
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "document",
        "document": {
            "link": documentUrl,
        }   
    });
    return data;
 }

 export const sampleInteractiveButton=(number,text)=>{
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": text
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "yes_button",
                            "title": "Sí"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "no_button",
                            "title": "No"
                        }
                    }
                ]
            }
        }
    });
    return data;
}

export const sampleInteractiveList=(number,text)=>{
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "✅ Tengo estas opciones"
            },
            "footer": {
                "text": "Selecciona una de las opciones para poder atenderte"
            },
            "action": {
                "button": "Ver opciones",
                "sections": [
                    {
                        "title": "Compra y vende productos",
                        "rows": [
                            {
                                "id": "main-comprar",
                                "title": "Comprar",
                                "description": "Compra los mejores productos para tu hogar"
                            },
                            {
                                "id": "main-vender",
                                "title": "Vender",
                                "description": "Vende tus productos"
                            }
                        ]
                    },
                    {
                        "title": "📍Centro de atención",
                        "rows": [
                            {
                                "id": "main-agencia",
                                "title": "Agencia",
                                "description": "Puedes visitar nuestra agencia."
                            },
                            {
                                "id": "main-contacto",
                                "title": "Centro de contacto",
                                "description": "Te atenderá uno de nuestro agentes."
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

export const sampleLocation=(number)=>{
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "location",
        "location": {
        "latitude": "-12.067158831865067",
        "longitude": "-77.03377940839486",
        "name": "Estadio Nacional del Perú",
        "address": "C. José Díaz s/n, Cercado de Lima 15046"
    }
        
    });
    return data;
}