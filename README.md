
# Emailing Microservice

This tutorial shows how to easily create a small service for sending emails using BullMQ.
The idea is quite simple, we will have one queue where we will post jobs for sending emails and then a processor that performs the actual job of sending the emails.

# Useful features of BullMQ

eparation of concerns
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

To Install BullMQ, run below command
npm i bullmq

To Install , run below command
npm i nodemailer

You can use any Email SMTP Server configurations. We will use two configurations
1. office365 smtp
2. gmail smtp

You will need to have an "app password" before the above works https://security.google.com/settings/security/apppasswords

# Test project to test microservice

Please refer to below project

https://github.com/muhammad-atif-saleem/TestEmailMicroservice
