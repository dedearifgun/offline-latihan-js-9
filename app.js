const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

// Gunakan EJS
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/main-layout');

// Data dummy
const mahasiswa = [
  { nama: 'Dedi Mulyadi', email: 'dedimulyadi@gmail.com' },
  { nama: 'Ono Surono', email: 'onosurono@gmail.com' },
  { nama: 'Super Dede', email: 'superdede@gmail.com' },
];

// Routing
app.get('/', (req, res) => {
  res.render('index', {
    nama: 'Dede',
    title: 'Halaman Home',
    mahasiswa,
  });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'Halaman About' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Halaman Contact' });
});

// Middleware 404
app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404 - Page Not Found</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
