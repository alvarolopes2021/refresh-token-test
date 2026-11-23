export interface IHttpServer {
    listen(host: string, port: number): Promise<boolean>;
    close(): void;
}