import dotenv from 'dotenv';
dotenv.config();
export default {
  queueName: process.env.QUEUE_NAME!,
  concurrency: parseInt(process.env.QUEUE_CONCURRENCY!),
  connection: {
    host: process.env.REDIS_HOST!,
    port: parseInt(process.env.REDIS_PORT!),
  },
  smtpOptions: {
    host: process.env.SMTP_HOST!,
    port: process.env.SMTP_PORT! ? parseInt(process.env.SMTP_PORT!) : void 0,
    secure: false,
    //tls: { ciphers: 'SSLv3' },
    auth: {
      user: process.env.SMTP_AUTH_USER!,
      pass: process.env.SMTP_AUTH_PASS!,
    },
  },
};