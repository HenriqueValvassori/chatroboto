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

    // ... (seu restante do funil de mensagens) ...
});

client.initialize();

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

const delay = ms => new Promise(res => setTimeout(res, ms));