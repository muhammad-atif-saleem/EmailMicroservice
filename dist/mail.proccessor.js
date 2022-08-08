"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = __importDefault(require("./config"));
let transporter;
if (config_1.default.smtpOptions.host) {
    transporter = nodemailer_1.default.createTransport(config_1.default.smtpOptions);
}
else {
    console.log('SMTP not found.');
}
exports.default = (job) => transporter.sendMail(job.data);
//# sourceMappingURL=mail.proccessor.js.map