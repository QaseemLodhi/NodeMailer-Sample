var nodemailer = require("nodemailer");

module.exports = {
    getAdminData: function () {
        return {
            subscription: {
                email: 'licianhorse@gmail.com'
            }
        }
    },
    getSMTPMailer: function () {
        return nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'licianhorse@gmail.com',
                pass: 'zia_test'
            }
        });
    }
};
