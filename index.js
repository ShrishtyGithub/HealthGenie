//initialising whatsapp and qrcode


const qrcode = require('qrcode-terminal');

// information about the client
const { Client } = require('whatsapp-web.js');
const client = new Client();


//generating qr code
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

// initialising openai chatgpt 

// basic configuration
const { Configuration, OpenAIApi } = require("openai");

// prompt created by applying prompt engineering
const basePromptPrefix = "Assume that you are a friendly healthcare bot called 'Health Genie', greet the user with a cordial greeting (DO NOT ANSWER ANY QUESTION RELATED TO SOMETHING OTHER THAN HEALTHCARE, JUST SAY THAT YOU ARE NOT ALLOWED TO ANSWER IF THIS HAPPENS), now suggest me tips and remedies for the following (AlSO, END THE RESPONSE WITH A CORDIAL OPEN ENDED GOODBYE)- ";

// open ai api key config
const configuration = new Configuration({
    apiKey: '',
});

// initialising the openai object
const openai = new OpenAIApi(configuration);




// on text recieved function


client.on('message', message => {


    //function to handle message recieved

    const main_reply = async () => {

        console.log(`API: ${basePromptPrefix}${message.body}`)

        // function to generate response using the message recieved
        const openai_response = await openai.createCompletion({
            //information about the model used for response generation
            model: "text-davinci-003",
            //final prompt merged
            prompt: `${basePromptPrefix}${message.body}`,
            //temperature setting for response, the lower the temp the more accurate 
            temperature: 0,
            //tokens to be given, more tokens mean longer response
            max_tokens: 250,
        });


        //taking the output 
        const basePromptOutput = openai_response.data.choices.pop();
        console.log(basePromptOutput.text);
        console.log('response sent');

        //replying to message
        message.reply(basePromptOutput.text)

    }


    //calling the function
    main_reply();

});





