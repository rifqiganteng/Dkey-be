import {getRepository} from "typeorm";
import {Content} from "../entities/Content";

export class ContentService {
    contentRepository(){
        return getRepository(Content);
    }

    async findAllContent(){
        return await this.contentRepository().find();
    }

    async createContent(content: Content){
        console.log("ini yang ada di service bentuknya gini = ",content)
        return await this.contentRepository().save(content);
    }
    async findById(content: Content){
        return await this.contentRepository().findOne(content.idContent);
    }
    async findBYTitle(content: Content){
        return await this.contentRepository().findOne(content.title);
    }
}
