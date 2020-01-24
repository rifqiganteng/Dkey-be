import {Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import {Creator} from "./Creator";

@Entity()
export class Serial {
    @PrimaryColumn({generated: "uuid"})
    idSerial: string;
    @Column({type: "varchar", name: "serial_title", nullable: false})
    serialTitle: string;
    @Column({type: "varchar", name: "username", nullable: false})
    username: string;

    @ManyToOne(type => Creator, creator => creator.serials)
    @JoinColumn({name: "creator"})
    creator: Creator;
}