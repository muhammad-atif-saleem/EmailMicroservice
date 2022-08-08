import { Mail } from "./mail.interface";
import { Job } from "bullmq";
import nodemailer from "nodemailer";
import config from "./config";

let transporter: any;

if (config.smtpOptions.host) {
  transporter = nodemailer.createTransport(config.smtpOptions);
} 
else {
  console.log('SMTP not found.');
}

export default (job: Job<Mail>) => transporter.sendMail(job.data);