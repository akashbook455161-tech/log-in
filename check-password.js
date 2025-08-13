exports.handler = async function(event, context) {
    const correctPassword = "YOUR_PASSWORD"; // replace with your password
    const body = JSON.parse(event.body);
    
    if(body.password === correctPassword){
        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                links: [
                    "https://drive.google.com/file/d/YOUR_FILE_1/view",
                    "https://drive.google.com/file/d/YOUR_FILE_2/view"
                ]
            })
        };
    } else {
        return {
            statusCode: 401,
            body: JSON.stringify({ success: false, message: "Incorrect password" })
        };
    }
};
