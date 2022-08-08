"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mail_worker_1 = require("./mail.worker");
mail_worker_1.worker.on("completed", (job) => console.log(`Completed job ${job.id} successfully, sent email to ${job.data.to}`));
mail_worker_1.worker.on("failed", (job, err) => console.log(`Failed job ${job.id} with ${err}`));
//# sourceMappingURL=index.js.map