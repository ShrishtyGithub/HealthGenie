//initialising whatsapp and qrcode

let response = 'Hello'

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

// client.on('message', message => {
//     console.log(message.body);
// });


client.on('message', message => {
    console.log(message.body);

    if (message.body === '!ping') {
        message.reply('pong');
    }
});


//




// openai testing for chatbot
// const { Configuration, OpenAIApi } = require("openai");
// const configuration = new Configuration({
//     apiKey: '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',
// });
// const openai = new OpenAIApi(configuration);
// const openai_response = openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: "Say this is a test",
//     temperature: 0,
//     max_tokens: 7,
// });


// import { Configuration, OpenAIApi } from 'openai';

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// const basePromptPrefix = "Ask me 10 questions based on- ";
// const generateAction = async (req, res) => {
//     // Run first prompt
//     console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

//     const baseCompletion = await openai.createCompletion({
//         model: 'text-davinci-003',
//         prompt: `${basePromptPrefix}${req.body.userInput}`,
//         temperature: 0.7,
//         max_tokens: 250,
//     });

//     const basePromptOutput = baseCompletion.data.choices.pop();

//     res.status(200).json({ output: basePromptOutput });
// };
