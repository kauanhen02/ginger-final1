const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// Configurar o body-parser para analisar dados de formulário
app.use(bodyParser.urlencoded({ extended: false }));

// Rota para exibir o formulário HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/formulario.html');
});

// Rota para lidar com o envio do formulário
app.post('/enviar', (req, res) => {
  const { Nome, Empresa, CNPJ, Email, Telefone, Solicitacao } = req.body;

  // Configurar o transporte do Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: 'kauansjx31@outlook.com',
      pass: '@596378Ka',
    },
  });

  // Configurar os detalhes do email
  const mailOptions = {
    from: 'kauansjx31@outlook.com',
    to: 'kauan.pinho@ginger.ind.br',
    subject: 'Formulário de Contato',
    text: `
    Nome: ${Nome}
    Empresa: ${Empresa}
    CNPJ: ${CNPJ}
    Email: ${Email}
    Telefone: ${Telefone}
    Solicitação: ${Solicitacao}
    `,
  };

  // Enviar o email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.send('Ocorreu um erro ao enviar o email.');
    } else {
      console.log('Email enviado: ' + info.response);
      res.send('Email enviado com sucesso!');
    }
  });
});

// Iniciar o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
