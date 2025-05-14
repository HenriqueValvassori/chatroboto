const express = require('express');
const qrcodeTerminal = require('qrcode-terminal');
const QRCode = require('qrcode');
const { Client } = require('whatsapp-web.js');
const app = express();
const port = 3000;

const client = new Client();
let qrDataURL = null;
let isConnected = false;

// Servir arquivos estáticos (como o seu HTML)
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/qrcode.html'); // Assumindo que o nome do seu HTML é qrcode.html
});

app.get('/qrcode', (req, res) => {
    if (qrDataURL) {
        res.json({ qr: qrDataURL });
    } else {
        res.status(404).send('QR Code ainda não gerado.');
    }
});

app.get('/connected', (req, res) => {
    res.json({ connected: isConnected });
});

client.on('qr', qr => {
    qrcodeTerminal.generate(qr, { small: true });
    QRCode.toDataURL(qr, (err, url) => {
        if (err) {
            console.error('Erro ao gerar Data URL do QR Code:', err);
            return;
        }
        qrDataURL = url;
        console.log('QR Code gerado como Data URL.');
        // Se você estiver usando WebSockets, emitiria o URL aqui
    });
});

client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
    isConnected = true;
    // Se você estiver usando WebSockets, emitiria um evento de conexão aqui
});

client.on('message', async msg => {
    // Seu funil de mensagens permanece o mesmo
    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        const contact = await msg.getContact();
        const name = contact.pushname;
        await client.sendMessage(msg.from, 'Olá! ' + name.split(" ")[0] + 'Sou o assistente virtual da empresa Multieditora. Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n1 - Perguntas frequentes\n2 - Marcar consulta \n 10 - Avaliar aplicacao de Estudantes da universidades municipal de Sao Caetano do Sul Campus Conceicao(por favor avalie se puder)');
        await delay(3000);
        await chat.sendStateTyping();
        await delay(5000);
    }

    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Nosso servico e 24horas para cadastro de consultas e perguntas frequentes criado por um grupo de estundantes para um projeto de extensao universitaria');
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Preguntas frequentes?\nÉ muito simples.\n\n3 - Quanto tempo dura o procedimento?\n\n4 - É dolorido?\n\n5 - Usa anestésico?\n\n6 - Quanto tempo depois posso refazer o procedimento?\n\n7 - Fica inchado?\n\n\ 8 - Emquanto tempo vejo o resultado?');
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para Agendar sua Consulta: https://agendamento-533v.onrender.com \n para mais duvidas ou agendamento manual entre em contato com o nosso telefone:  (11) 3545-2537 ou email: multieditora@outlook.com');
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();





        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos

        await chat.sendStateTyping(); // Simulando Digitação

        await delay(3000);

       

        await delay(3000); //delay de 3 segundos

        await chat.sendStateTyping(); // Simulando Digitação

        await delay(3000);

        await client.sendMessage(msg.from, 'Aplicação de Botox:\nGeralmente, entre 15 a 30 minutos.Preenchimento com Ácido Hialurônico:\nQuanto tempo dura o procedimento? Varia dependendo da área tratada e da quantidade de produto, mas geralmente leva entre 30 a 60 minutos.Harmonização Facial (combinação de procedimentos):\nQuanto tempo dura o procedimento? Irá variar significativamente dependendo de quais procedimentos são combinados em cada sessão. Pode levar de uma hora a várias horas.Bioestimuladores de Colágeno (Sculptra, Radiesse, etc.):Quanto tempo dura o procedimento? Costuma durar entre 30 a 60 minutos.');

    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();





        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos

        await chat.sendStateTyping(); // Simulando Digitação

        await delay(3000);

       

        await delay(3000); //delay de 3 segundos

        await chat.sendStateTyping(); // Simulando Digitação

        await delay(3000);

        await client.sendMessage(msg.from, 'Aplicação de Botox:\nÉ dolorido? A dor é mínima, frequentemente descrita como picadinhas leves.Preenchimento com Ácido Hialurônico:É dolorido? A dor é mínima, frequentemente descrita como picadinhas leves.\nHarmonização Facial (combinação de procedimentos):É dolorido? A dor dependerá dos procedimentos específicos realizados. Usaremos as técnicas de anestesia adequadas para cada etapa, visando o seu máximo conforto.\nBioestimuladores de Colágeno (Sculptra, Radiesse, etc.):É dolorido? O desconforto é geralmente leve a moderado.\n');

    }

    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();





        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos

        await chat.sendStateTyping(); // Simulando Digitação

        await delay(3000);

       

        await delay(3000); //delay de 3 segundos

        await chat.sendStateTyping(); // Simulando Digitação

        await delay(3000);

        await client.sendMessage(msg.from, 'Aplicação de Botox:\nUsa anestésico? Geralmente não é necessário, mas podemos aplicar um creme anestésico tópico para maior conforto, se você preferir.Preenchimento com Ácido Hialurônico:\nUsa anestésico? Sim, geralmente utilizamos anestésico local, que pode ser em creme ou injetável, para minimizar o desconforto.Harmonização Facial (combinação de procedimentos):\nUsa anestésico? Sim, utilizamos anestésico local para proporcionar maior conforto durante a aplicação.Bioestimuladores de Colágeno (Sculptra, Radiesse, etc.):Usa anestésico? Sim, utilizamos anestésico local para proporcionar maior conforto durante a aplicação.');

    }

    if (msg.body !== null && msg.body === '6' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();





        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos

        await chat.sendStateTyping(); // Simulando Digitação

        await delay(3000);

       

        await delay(3000); //delay de 3 segundos

        await chat.sendStateTyping(); // Simulando Digitação

        await delay(3000);

        await client.sendMessage(msg.from, 'Aplicação de Botox:\nQuanto tempo depois posso refazer o procedimento? Depende da durabilidade do preenchedor e dos seus objetivos, sendo geralmente entre 6 meses a 1 ano ou mais.Preenchimento com Ácido Hialurônico:\nQuanto tempo depois posso refazer o procedimento? O protocolo geralmente envolve algumas sessões com intervalos de 4 a 8 semanas entre elas, dependendo do produto e do seu plano de tratamento.Harmonização Facial (combinação de procedimentos):\nQuanto tempo depois posso refazer o procedimento? O intervalo entre as etapas da harmonização facial e as futuras manutenções dependerá do seu plano de tratamento individualizado e dos resultados obtidos.\nBioestimuladores de Colágeno (Sculptra, Radiesse, etc.):Quanto tempo depois posso refazer o procedimento? O protocolo geralmente envolve algumas sessões com intervalos de 4 a 8 semanas entre elas, dependendo do produto e do seu plano de tratamento.');

    }

    if (msg.body !== null && msg.body === '7' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();





        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos

        await chat.sendStateTyping(); // Simulando Digitação

        await delay(3000);

       

        await delay(3000); //delay de 3 segundos

        await chat.sendStateTyping(); // Simulando Digitação

        await delay(3000);

        await client.sendMessage(msg.from, 'Aplicação de Botox:\nFica inchado? Pode haver um leve inchaço no local das picadas por algumas horas.Preenchimento com Ácido Hialurônico:\nFica inchado? É comum ocorrer inchaço na área tratada nos primeiros dias, que costuma diminuir significativamente em 2 a 7 dias.Harmonização Facial (combinação de procedimentos):\nFica inchado? É comum ocorrer inchaço na área tratada nos primeiros dias, que costuma diminuir significativamente em 2 a 7 dias.\nBioestimuladores de Colágeno (Sculptra, Radiesse, etc.):Fica inchado? Pode ocorrer inchaço leve a moderado e vermelhidão nos primeiros dias após a aplicação.');

    }

    if (msg.body !== null && msg.body === '8' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();







        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos

        await chat.sendStateTyping(); // Simulando Digitação

        await delay(3000);

       

        await delay(3000); //delay de 3 segundos

        await chat.sendStateTyping(); // Simulando Digitação

        await delay(3000);

        await client.sendMessage(msg.from, 'Aplicação de Botox:\nEm quanto tempo vejo o resultado? Os resultados começam a ser visíveis em alguns dias, e o efeito máximo ocorre em cerca de duas semanas.Preenchimento com Ácido Hialurônico:\nEm quanto tempo vejo o resultado? Os resultados são imediatos, embora o resultado final seja mais evidente após a diminuição do inchaço.Harmonização Facial (combinação de procedimentos):\nEm quanto tempo vejo o resultado? Os resultados da harmonização facial podem ser parcialmente imediatos (com preenchimentos, por exemplo) e graduais (com botox e bioestimuladores). O resultado final e completo será observado após a conclusão de todas as etapas do seu plano de tratamento e a diminuição do inchaço.\nBioestimuladores de Colágeno (Sculptra, Radiesse, etc.):Em quanto tempo vejo o resultado? Os resultados são graduais, pois o objetivo é estimular a produção natural de colágeno. Eles começam a ser mais visíveis a partir de algumas semanas a meses após a primeira sessão.\n');

    }

    if (msg.body !== null && msg.body === '8' && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();







        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos

        await chat.sendStateTyping(); // Simulando Digitação

        await delay(3000);

       

        await delay(3000); //delay de 3 segundos

        await chat.sendStateTyping(); // Simulando Digitação

        await delay(3000);

        await client.sendMessage(msg.from, 'https://docs.google.com/forms/d/e/1FAIpQLSesibifcDWEolplrxXSCv__i0PVU3AQWEDl_P6njcy714zBrA/viewform?usp=dialog');

    }
});

client.initialize();

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

const delay = ms => new Promise(res => setTimeout(res, ms));
