import {Entity, Column, PrimaryColumn, ManyToOne, JoinColumn} from "typeorm";
import {Creator} from "./Creator";

@Entity()
export class Report{
    @PrimaryColumn({generated:"uuid"})
    idReport: string;
    @Column({type: "varchar", nullable: false, name:"id_content"})
    idContent: string;
    @Column({type: "varchar", nullable: false, name:"reason"})
    reason: string;
    @Column({type: "varchar", nullable: false, name:"username"})
    username: string;

    @ManyToOne( type => Creator, creator => creator.reports)
    @JoinColumn({name:"creator"})
    creator: Creator;

}