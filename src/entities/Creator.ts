import {Entity, Column, PrimaryColumn, OneToMany, JoinColumn} from "typeorm";
import {Content} from "./Content";
import {Serial} from "./Serial";
import {Report} from "./Report";

@Entity()
export class Creator {
    @PrimaryColumn()
    username: string;
    @Column({nullable: false, name: 'password'})
    password: string;
    @Column({nullable: false, name: 'email'})
    email: string;
    @Column({nullable: false, name: 'first_name'})
    firstName: string;
    @Column({nullable: false, name: 'last_name'})
    lastName: string;
    @Column({type: 'date', name: 'date'})
    bornDate: Date;
    @Column({nullable: false, name: 'base'})
    base: string;
    @Column({nullable: false, name: 'bio'})
    bio: string;
    @Column({nullable: false, name: 'story'})
    story: string;


    @OneToMany(type => Content,
        content => content.creator,
        {cascade: true})
    contents: Array<Content>;

    @OneToMany(type => Serial,
        serial => serial.creator,
        {cascade: true})
    serials: Array<Serial>;

    @OneToMany(type => Report,
        report => report.creator,
        {cascade: true})
    reports: Array<Report>;
}