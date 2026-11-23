import type { IHttpServer } from "../server/IHttpServer.ts";
import ExpressServer from "../server/server.ts";

export default class MakeHttpServerFactory {
    static httpServer: IHttpServer = ExpressServer.getInstance();
}