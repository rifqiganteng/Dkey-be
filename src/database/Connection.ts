import {createConnection} from "typeorm";
import {Creator} from "../entities/Creator";
import {Content} from "../entities/Content";
import {Report} from "../entities/Report";
import {Serial} from "../entities/Serial";
import {AdminAccount} from "../entities/Admin";


async function createDbConnection(){
    const connection = await createConnection(
        {
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "amanullah",
            database: "dkey",
            entities: [
                Creator,
                Content,
                Report,
                Serial,
                //AdminAccount,
            ],
            synchronize: true,
            logging: true
        }
    )
    return connection
}
export default createDbConnection;













// "use strict"
// import "reflect-metadata";
// import {createConnection, Connection} from "typeorm";
// import {Creator} from "../entities/Creator";
// import {Content} from "../entities/Content";
// import * as hapi from "@hapi/hapi";
//
//
// const server: hapi.Server = new hapi.Server()
// server.connection({port: 3001});
//
// createConnection({
//     driver{
//         type: "postgres",
//         host: "localhost",
//         port: 5432,
//         username: "postgres",
//         password: "amanullah",
//         database: "dkey",
//         synchronize: true,
//         logging: true,
//     },
//     entities: [
//         Creator,
//         Content
//     ]
// }).then( async connection => {
//     server.start(err => {
//         if (err) {
//             throw err;
//         }
//         server.app.dbConnection = connection;
//         console.log("server running in " + server.info.uri);
//
//     })
// }).catch(err => console.log(error));
//
//
