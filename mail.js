var nodemailer = require("nodemailer");

module.exports = {
    getAdminData: function () {
        return {
            subscription: {
                email: 'your_email'
            }
        }
    },
    getSMTPMailer: function () {
        return nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'your_email',
                pass: 'your_password'
            }
        });
    }
};
