var express = require('express');
var path = require('path');
var nodemailer = require("nodemailer");
var app = express();
var smtpTransport = require("nodemailer-smtp-transport");
var bodyParser = require('body-parser');
var config = require('./mail.js');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

var smtpTransport = nodemailer.createTransport("SMTP", {
    host: 'smtp.gmail.com',
    secureConnection: false,
    port: 587,
    auth: {
        user: 'your_email',
        pass: 'your_password'
    }
});

var subscriptionsController = {
    notifyClient: function (req, res) {
        var content = 'Vacancy title: <span style="font-weight: bold">' + req.body.vacancyTitle + '</span><br/>' +
            'Category: <span style="font-weight: bold">' + req.body.category + '</span><br/>' +
            'City: <span style="font-weight: bold">' + req.body.city + '</span><br/>' +
            'Salary range: <span style="font-weight: bold">' + req.body.salary + '</span><br/>' +
            'Job Description: <br/>' + req.body.description;


        var mailOptions = {
            to: req.body.email,
            from: config.getAdminData().subscription.email,
            subject: 'Job Vacancy',
            html: content
        };
        console.log(mailOptions);

        smtpTransport.sendMail(mailOptions, function (err) {
            //req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
            if (err) {
                console.log(err);
            } else {
                console.log("Mail sent successfully");
            }
        });

    },
};
app.post('/api/subscriptions/createcustomer', subscriptionsController.notifyClient);
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/

var staticPath = path.resolve(__dirname, 'client');
app.use(express.static(staticPath));

app.get('/', function (req, res) {
    res.sendfile('client/index.html');
});

/*--------------------Routing Over----------------------------*/

app.listen(3000, function () {
    console.log("Express Started on Port 3000");
});





