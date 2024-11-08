import express from "express"
import bodyParser from "body-parser";
import {BreedControl} from "../controllers/breed.control.js";


// export class BreedRouter extends WinstonLogger{
// ***  BreedRouter -> BreedController *** it works as single class
export class BreedRouter extends BreedControl {

    route = express.Router();

    constructor() {
        super()
        this.route.use(bodyParser.json());
        this.route.use(bodyParser.urlencoded({extended: true}));
        this.route.get("/breeds",this.getBreeds)
        this.route.get("/breed",this.getBreedById)
        this.route.post("/breed",this.createBreed)
        this.route.put("/breed",this.updateBreed)
        this.route.delete("/breed",this.deleteBreed)
    }

}