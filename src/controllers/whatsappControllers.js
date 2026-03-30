export const verifyToken = (req, res) => {
    res.json({
        status: 'success',
        message: 'Token verified successfully'
    });
}

export const receivedMessage = (req, res) => {
    
    res.json({
        status: 'success',
        message: 'Message received successfully'
    });
}