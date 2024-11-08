import express from "express"
import bodyParser from "body-parser";
import {DogControl} from "../controllers/dog.control.js";


// export class BreedRouter extends WinstonLogger{
// ***  BreedRouter -> BreedController *** it works as single class
export class DogRoute extends DogControl {

    route = express.Router();
    constructor() {
        super()
        this.route.use(bodyParser.json());
        this.route.use(bodyParser.urlencoded({extended: true}));
        this.route.get("/dogs",this.getDogs)
        this.route.get("/dog",this.getDogById)
        this.route.post("/dog",this.createDog)
        this.route.put("/dog",this.updateDog)
        this.route.delete("/dog",this.deleteDog)
    }

}