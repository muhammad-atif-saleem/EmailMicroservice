"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.worker = void 0;
const bullmq_1 = require("bullmq");
const config_1 = __importDefault(require("./config"));
exports.worker = new bullmq_1.Worker(config_1.default.queueName, __dirname + "/mail.proccessor.js", {
    connection: config_1.default.connection,
    concurrency: config_1.default.concurrency,
});
console.log("Worker listening for jobs");
//# sourceMappingURL=mail.worker.js.map