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

// openai stuff
const { Configuration, OpenAIApi } = require("openai");
const basePromptPrefix = "Assume that you are a friendly healthcare bot called 'Health Genie', greet the user with a cordial greeting (DO NOT ANSWER ANY QUESTION RELATED TO SOMETHING OTHER THAN HEALTHCARE, JUST SAY THAT YOU ARE NOT ALLOWED TO ANSWER IF THIS HAPPENS), now suggest me tips and remedies for the following (AlSO, END THE RESPONSE WITH A CORDIAL OPEN ENDED GOODBYE)- ";

const configuration = new Configuration({
    apiKey: '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',
});


const openai = new OpenAIApi(configuration);




// fetching texts testing


client.on('message', message => {

    // if (message.body === 'hello') {
    //     message.reply('pong');
    // }

    // let w_msg = message.body;
    // console.log(w_msg);


    const main_reply = async () => {

        console.log(`API: ${basePromptPrefix}${message.body}`)


        const openai_response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${basePromptPrefix}${message.body}`,
            temperature: 0,
            max_tokens: 250,
        });

        const basePromptOutput = openai_response.data.choices.pop();
        console.log(basePromptOutput.text);
        console.log('response sent');

        message.reply(basePromptOutput.text)

    }

    main_reply();








});


//




// openai testing for chatbot

// let userInput = 'What is the stock market scene in india';


const generateResponse = async (userInput) => {

    console.log(`API: ${basePromptPrefix}${userInput}`)


    const openai_response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${basePromptPrefix}${userInput}`,
        temperature: 0,
        max_tokens: 250,
    });

    const basePromptOutput = openai_response.data.choices.pop();
    // w_reply = basePromptOutput.text;
    // console.log(basePromptOutput);

    console.log(basePromptOutput.text);

    return basePromptOutput.text;

}


