import {Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import {Dog} from "./dog";

@Entity("breeds")
export class Breed {
    @PrimaryColumn({ type: "int",generated:true})
    bid : number
    @Column({type: "varchar"})
    breed : string
    @OneToMany(
        () => Dog ,
        (dog) => dog.breed ,
        // *** You won't see @ManyToOne until set below
        { eager: true }
        // *** Or setting on query as repo.find({ relations : { dogs : true } })
    )
    dogs : Dog[]
}