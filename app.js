require('dotenv').config(); // Environment Configuration

const express = require('express');
const expressLayouts = require('express-ejs-layouts');


const app = new express();
const port = 5000 || process.env.PORT;

// changes data format exchanged between pages
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Static folder
app.use(express.static('public'));

// Templating engine
app.use(expressLayouts);
app.set('layout','./layout/main');
app.set('view engine','ejs');

// Routes
app.use('/',require('./server/routes/index'));

// Start Server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})