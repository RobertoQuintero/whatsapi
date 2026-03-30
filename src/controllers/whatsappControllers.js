
export const verifyToken = (req, res) => {

    try {

        const accessToken= "OUYOIUYOIUYOUYUYXUYCVXUYVISUDFYISUDY"
        const token=req.query["hub.verify_token"];
        const challenge=req.query["hub.challenge"];

        if(challenge !=null && token !==null && token === accessToken){
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
    
    res.json({
        status: 'success',
        message: 'Message received successfully test'
    });
}