import https from 'https';

export const sendWhatsAppMessage = (data) => {

    const options = {
        hostname: 'graph.facebook.com',
        port: 443,
        path: '/v22.0/1035260193009448/messages',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
        },
        body: data
    };

    const req = https.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            process.stdout.write(chunk);
        });
        res.on('end', () => {
            console.log('Message sent:', data);
        });
    });

    req.on('error', (error) => {
        console.error('Error sending message:', error);
    });

    req.write(data);
    req.end();
};