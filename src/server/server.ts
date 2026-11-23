import express, { type Express, type Request, type Response } from 'express';
import type { IHttpServer } from "../server/IHttpServer.ts";


export default class ExpressServer implements IHttpServer {
    app?: express.Application = undefined;
    static instance: IHttpServer | null = null;

    public static getInstance(): IHttpServer {
        try {
            if (this.instance == null) {
                return new ExpressServer();
            }
            return this.instance;
        }
        catch (e) {
            console.error(e);
            return new ExpressServer();
        }
    }

    async listen(host: string, port: number): Promise<boolean> {
        try {
            this.app = express();
            this.app.use(express.json());
            this.app.use((req, res, next) => {
                // update to match the domain you will make the request from            
                res.header("Access-Control-Allow-Origin", process.env.HOST_FRONTEND as string);
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
                res.header('Access-Control-Allow-Credentials', "true");
                res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
                next();
            });
            this.app.listen(process.env.PORT || port);
            console.log('listening on port: ', port);
            return true;
        }
        catch (e) {
            return false;
        }
    }

    close(): void {
    }

}
