import {BreedService} from "../services/crud.service.js";
import {log} from "../logger/winston.logger.js";

// can't extend service
const breedService = new BreedService();


export class BreedControl {

    /*
    Work but new instant by prop get error
    async getBreeds(req, res) {
        const breedServiceTest = new BreedService();
        return breedServiceTest
            .getBreedsJoinDogs()
            .then((breeds) => {
                return res.status(200).json(breeds)
            })
    }
    */


    async getBreeds(req, res) {
        return await breedService
            .getBreedsJoinDogs()
            .then((breeds) => {
                return res.status(200).json(breeds)
            })
    }

    async getBreedById(req, res) {
        const bid = req.query['bid'];
        log.info(bid)
        return await breedService
            .getBreedJoinDogsById(bid)
            .then((breed) => {
                return res.status(200).json(breed)
            })
    }

    async createBreed(req, res) {
        const breed = req.body
        return await breedService
            .createBreed(breed)
            .then((breed) => {
                return res.status(200).json(breed)
            })
    }

    async updateBreed(req, res) {
        const breed = req.body
        const bid = req.query['bid'];
        return await breedService
            .updateBreed(breed, bid)
            .then((breed) => {
                return res.status(200).json(breed)
            })
    }

    async deleteBreed(req, res) {
        const bid = req.query['bid'];
        return await breedService.deleteBreed(bid)
            .then((result) => {
                return res.status(200).json(result)
            })
    }

}


