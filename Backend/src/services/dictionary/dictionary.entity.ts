import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from "typeorm";

@Entity("dictionary")
class Dictionary {

    @ObjectIdColumn()
    public id: ObjectID;

    @Column({
        type: "varchar",
        unique: true,
    })
    public word: string;

    @Column({
        type: 'json',
    })
    public cache: object;

    @Column()
    @CreateDateColumn({
        type: 'timestamptz',
        default: () => `timezone('utc', now())`,
    })
    public created_at: Date;

    @Column()
    @UpdateDateColumn({
        type: 'timestamptz',
        default: () => `timezone('utc', now())`,
    })
    public updated_at: Date;

}

export default Dictionary;