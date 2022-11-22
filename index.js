const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
//const helmet = require('helmet');
const router = require('./route/route');

app.use(cors({ credentials: true, origin: true }));

//app.use(helmet());


app.use((req, res, next) => {

    bodyParser.json()(req, res, err => {
        if (err) {
            console.error(err);
            return res.sendStatus(400);
        }
        next();
    });
});

app.use(bodyParser.urlencoded({ extended: true }));


app.use('/v1/', router);


module.exports = app;
