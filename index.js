//initialising whatsapp and qrcode

// let response = 'Hello'

// const qrcode = require('qrcode-terminal');

// const { Client } = require('whatsapp-web.js');
// const client = new Client();

// client.on('qr', qr => {
//     qrcode.generate(qr, { small: true });
// });

// client.on('ready', () => {
//     console.log('Client is ready!');
// });

// client.initialize();



// fetching texts testing


// client.on('message', message => {
//     console.log(message.body);

//     if (message.body === '!ping') {
//         message.reply('pong');
//     }
// });


//




// openai testing for chatbot

let userInput = 'I think i have sore throat';

const { Configuration, OpenAIApi } = require("openai");
const basePromptPrefix = "Assume that you are a friendly healthcare bot called 'Health Genie', greet the user with a cordial greeting (DO NOT ANSWER ANY QUESTION RELATED TO SOMETHING OTHER THAN HEALTHCARE, JUST SAY THAT YOU ARE NOT ALLOWED TO ANSWER IF THIS HAPPENS), now suggest me tips and remedies for the following (AlSO, END THE RESPONSE WITH A CORDIAL OPEN ENDED GOODBYE)- ";

const configuration = new Configuration({
    apiKey: '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',
});


const openai = new OpenAIApi(configuration);

const generateResponse = async () => {

    console.log(`API: ${basePromptPrefix}${userInput}`)


    const openai_response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${basePromptPrefix}${userInput}`,
        temperature: 0,
        max_tokens: 250,
    });

    const basePromptOutput = openai_response.data.choices.pop();
    // console.log(basePromptOutput);
    console.log(basePromptOutput.text);



}


generateResponse();

// openai_response();
// console.log(basePromptOutput);


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
