import MakeHttpServerFactory from "./builders/makeHttpServer.ts";

async function main() {
    console.log('starting server...');
    process.loadEnvFile('.env');

    MakeHttpServerFactory.httpServer.listen('', 3000);
}

main();