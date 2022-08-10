import { QueueScheduler, Worker } from "bullmq";
import Redis from 'ioredis';
import config from "../config";

const connection1 = new Redis(config.connection.port,config.connection.host);
let queueScheduler: any;
let info: any;

describe('Mail Service Test', () => {
     beforeAll(()=>{
         queueScheduler = new QueueScheduler('q1', {connection: connection1});
       });

       afterAll(async()=>{
         await queueScheduler.close()
         await connection1.quit()
     }, 10000);
    
    it('Test bull queue', ()=>{
        expect(true).toBe(true)
    });

    it("Worker test for job processing", async () => {
            const worker = new Worker(require.resolve("../mail.proccessor"));
            worker.on('completed', (job, info: any) => { 
                expect(info.messageId).toBeDefined();
            });
            
    });
});
