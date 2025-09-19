const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // res.send('Hello World!')
  // res.json({
  //   nama: 'Ade',
  //   email: 'ade@gmail.com',
  //   nohp: '0811111',
  // });
  res.sendFile('./index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile('./about.html', { root: __dirname });
  // res.send('Halaman About');
});

app.get('/contact', (req, res) => {
  res.sendFile('./contact.html', { root: __dirname });
  // res.send('Halaman Contact');
});

// route dengan parameter
app.get('/product/:id', (req, res) => {
  res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.params.idCat}`);
});

// middleware untuk handle halaman tidak ditemukan
app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>Page Not Found</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
