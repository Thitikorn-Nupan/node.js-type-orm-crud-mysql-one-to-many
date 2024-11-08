import {Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import {Breed} from "./breed";

@Entity("dogs")
export class Dog {
    @PrimaryColumn({ type: "int",generated:true})
    did : number
    @Column({type: "varchar"})
    sku : string
    @Column({type: "varchar"})
    nickname : string
    @Column({type: "int"})
    age : number
    @Column({type: "boolean"})
    alive : boolean
    @ManyToOne(
        () => Breed,
        (breed) => breed.dogs
    )
    // by default it will gen as breedId and it's not mine column
    // use @JoinColum to map fk on your own
    @JoinColumn({
        name: "bid",
        referencedColumnName: "bid",
    })
    breed : Breed
    /*
    // optional
    @Column({type: "int"})
    bid : number
    */
}