import {ContentService} from "../services/ContentService"
import * as hapi from "@hapi/hapi";
import {request} from "http";
import {ResponseToolkit} from "@hapi/hapi";
import {Content} from "../entities/Content";

const contentService = new ContentService();
const ContentRouter = [
    {
        method: "GET",
        path: "/contents",
        handler: async (request: hapi.Request, response: hapi.ResponseToolkit) => {
            console.log(request.payload);
            return response.response({
                content: await contentService.findAllContent(),
            })
        }
    },
    {
        method: "POST",
        path: "/content",
        handler: async (request: hapi.Request, response: hapi.ResponseToolkit) => {
            console.log(request.payload, "ini coba apa isinya sama bawahnya");
            // let content = new Content()
             let content = request.payload;
            console.log(typeof content,"ini coba pengen lihat gua");
             content = await contentService.createContent(content as Content);
             return response.response({
                 content
             }).code(201);
        }
    },
    {
        method: "GET",
        path: `/content`,
        handler: async (request: hapi.Request, response: hapi.ResponseToolkit) => {
             console.log(request.payload,"cek apa id nya nyampe apa kagak");
            // console.log(request.raw,"cek apa id nya nyampe apa kagak");
            // console.log(request.params,"cek apa id nya nyampe apa kagak");
            // console.log(request.query);



            return response.response({
                //content: await contentService.findById(content as Content ),
            })
        }
    },
    // {
    //     method: "GET",
    //     path: "/contents/:title",
    //     handler: async (request: hapi.Request, response: hapi.ResponseToolkit) => {
    //         let content = request.payload;
    //         return response.response({
    //             content: await contentService.findBYTitle(content as Content ),
    //         })
    //     }
    // },
];
export default ContentRouter;

