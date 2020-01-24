import {getRepository} from "typeorm";
import {Creator} from "../entities/Creator";

class CreatorService {
    creatorRepository(){
        return getRepository(Creator);
    }

    async findAllCreator(){
        return await this.creatorRepository().find();
    }

    async createCreator(creator: Creator){
        return await this.creatorRepository().save(creator);
    }

    async findCreatorById(creator: Creator){
        return await this.creatorRepository().findOne(creator.username);
    }

    async findCreatorByName(creator: Creator){
        return await this.creatorRepository().findOne(creator.firstName);
    }
}
export default CreatorService;