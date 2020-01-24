import * as hapi from '@hapi/hapi';
import "reflect-metadata"
import createDbConnection from "./database/Connection";
import ContentRouter from "./routes/Index";

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

export default async () => {
    const connection = await createDbConnection();
    // const server : hapi.server = hapi.server({
    //     port: 3005,
    //     host: 'localhost',
    // });
    const server: hapi.Server = new hapi.Server({
            port: 5000,
            // host: 'localhost',
        });
    // console.log(server.connection);
    // server.connection({ port: 3000 });
    server.route(ContentRouter);
    if (connection.isConnected) {
        console.log("masuk KONOTOL")
        await server.start();
        console.log(" sudah terkoneksi kita coba bentar")
    }
    return server.listener;
}