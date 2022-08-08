"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bullmq_1 = require("bullmq");
const config_1 = __importDefault(require("../config"));
const queue = new bullmq_1.Queue(config_1.default.queueName, {
    connection: config_1.default.connection,
});
const args = process.argv.slice(2);
console.log(args);
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield queue.add("send-simple", {
        from: "muhammad.atif@kalsoft.com",
        subject: "This is a simple test",
        text: "An email sent using BullMQ",
        to: args[0],
    });
    console.log(`Enqueued an email sending to ${args[0]}`);
    // Exit for the next test run
    process.exit(0);
}))();
//# sourceMappingURL=send-simple.js.map