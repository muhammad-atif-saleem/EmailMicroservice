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
const ioredis_1 = __importDefault(require("ioredis"));
const config_1 = __importDefault(require("../config"));
const connection1 = new ioredis_1.default(config_1.default.connection.port, config_1.default.connection.host);
let queueScheduler;
let info;
describe('Mail Service Test', () => {
    beforeAll(() => {
        queueScheduler = new bullmq_1.QueueScheduler('q1', { connection: connection1 });
    });
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield queueScheduler.close();
        yield connection1.quit();
    }), 10000);
    it('Test bull queue', () => {
        expect(true).toBe(true);
    });
    it("Worker test for job processing", () => __awaiter(void 0, void 0, void 0, function* () {
        const worker = new bullmq_1.Worker(require.resolve("../mail.proccessor"));
        worker.on('completed', (job, info) => {
            expect(info.messageId).toBeDefined();
        });
    }));
});
//# sourceMappingURL=mail.test.js.map