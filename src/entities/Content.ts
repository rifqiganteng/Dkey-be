import {Column, Entity, PrimaryColumn, ManyToOne, JoinColumn} from "typeorm";
import {Creator} from "./Creator";
import DateTimeFormat = Intl.DateTimeFormat;


@Entity({name: "mst_content"})
export class Content {
    @PrimaryColumn({generated: "uuid"})
    idContent: string;
    @Column({type: 'varchar', name: 'title', nullable: false})
    title: string;
    @Column({type: 'date', name: 'date'})
    date: Date;
    @Column({type: "boolean", nullable: true, name: 'is_premium', default: false})
    isPremium: boolean;
    @Column({type: 'varchar', nullable: true, name: 'category'})
    category: string;
    @Column({type: 'varchar', nullable: true, name: 'tag'})
    tag: string;
    @Column({type: 'varchar', nullable: true, name: 'id_serial'})
    idSerial: string;
    @Column({type: 'varchar', name: 'chapter_number', nullable: true})
    chapterNumber: string;

    @ManyToOne(type => Creator, creator => creator.contents)
    @JoinColumn({name: "creator"})
    creator: Creator;

}