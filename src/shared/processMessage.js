import  {MessageText,MessageList,MessageComprar,MessageLocation} from "./whatsappmodels.js";
import {sendWhatsAppMessage} from "../services/whatsappService.js";

export const  Process = (textUser, number) => {
    textUser= textUser.toLowerCase();
    var models = [];

    if(textUser.includes("hola")){
        //SAUDAR
        var model = MessageText("Hola, un gusto saludarte. 👋", number);
        models.push(model);
        var modelList = MessageList(number);
        models.push(modelList);
    }
    else if(textUser.includes("gracias")){
        // agradecimiento
        var model = MessageText("Gracias a ti por escribirme. 😉😎", number);
        models.push(model);       

    }
    else if(textUser.includes("adios") ||
    textUser.includes("adiós")||
    textUser.includes("bye")||
    textUser.includes("me voy")
    ){
        // despedir
        var model = MessageText("Ve con cuidado. 😊", number);
        models.push(model);
    }
    else if(textUser.includes("comprar")){
        // comprar
        var model = MessageComprar(number);
        models.push(model);

    }
    else if(textUser.includes("vender")){
        // vender
        var model = MessageText("👉 Regístrate en el siguiente formulario para poder evaluarte: https://form.jotform.com/222507994363665", number);
        models.push(model);       

    }
    else if(textUser.includes("agencia")){
        // agencia
        var model = MessageText("Aquí tienes nuestra dirección. 😊", number);
        models.push(model);
        var modelLocation = MessageLocation(number);
        models.push(modelLocation);       

    }
    else if(textUser.includes("contacto")){
        // vender
        var model = MessageText("📞*Centro de contacto:*\n912345678", number);
        models.push(model);       

    }
    else{
        //No entiende
        var model = MessageText("No entiendo lo que dices", number);
        models.push(model);
    }

    models.forEach(model => {
        sendWhatsAppMessage(model);
    });
    


}

