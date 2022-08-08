
# Emailing Microservice

This tutorial shows how to easily create a small service for sending emails using BullMQ.
The idea is quite simple, we will have one queue where we will post jobs for sending emails and then a processor that performs the actual job of sending the emails.

# Useful features of BullMQ

Separation of concerns
Scalability
Reliability

# Prerequisites

NodeJS
NodeMailer
TypeScript
Redis
BullMQ

Install Redis on local environment, please follow below link.
https://redis.io/docs/getting-started/


To Install typescript, run below command

npm i --save-dev typescript

npm i --save-dev @types/node

To Install BullMQ and redis modules, run below command

npm i bullmq

npm i ioredis

To Install nodemailer, run below command

npm i nodemailer

You can use any Email SMTP Server configurations. We will use two configurations
1. office365 smtp
2. gmail smtp

You will need to have an "app password" before the above works https://security.google.com/settings/security/apppasswords


Set your email username and password in .env file

# Test project to test microservice

Execute below command so microservice will listen incoming jobs

npm start

Now, send payload to the microservice to check the functionality, please refer to below project

https://github.com/muhammad-atif-saleem/TestEmailMicroservice