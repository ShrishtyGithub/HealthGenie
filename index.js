//initialising whatsapp and qrcode
const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();


// fetching texts testing

client.on('message', message => {
    console.log(message.body);
});


// openai testing for chatbot
// const { Configuration, OpenAIApi } = require("openai");
// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
// const response = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: "Say this is a test",
//     temperature: 0,
//     max_tokens: 7,
// });
