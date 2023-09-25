import { Router } from './router.js'

const router = new Router()
router.add('/', "/pages/home.html")
router.add("/portifolio", "/pages/portifolio.html")
router.add("/contact", "/pages/contact.html")
router.add(404, "/pages/home.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
