import {DogService} from "../services/crud.service.js";
import {log} from "../logger/winston.logger.js";
import {Dog} from "../entities/dog.ts";
const dogService = new DogService();

export class DogControl {
    async getDogs(req, res) {
        return await dogService
            .getDogs()
            .then((dogs) => {
                return res.status(200).json(dogs)
            })
    }

    async getDogById(req, res) {
        const did = req.query['did'];
        return await dogService
            .getDogById(did)
            .then((dog) => {
                return res.status(200).json(dog)
            })
    }

    async createDog(req, res) {
        const dog = new Dog()
        dog.sku = req.body['sku']
        dog.nickname = req.body['nickname']
        dog.age = req.body['age']
        dog.alive = req.body['alive']
        // you don't have to set all attributes just pk  only  and result look like => INSERT INTO `dogs`(`did`, `sku`, `nickname`, `age`, `alive`, `bid`) VALUES (DEFAULT, ?, ?, ?, ?, ?) -- PARAMETERS: ["1000000010","Adam",1,true,1]
        dog.breed = req.body['breed']
        log.info(dog)
        return await dogService.createDogAndBreed(dog).then((dog) => {
            return res.status(200).json(dog)
        })
    }

    async updateDog(req, res) {
        // const dog = new Dog(req.body)
        const dog = new Dog()
        dog.sku = req.body['sku']
        dog.nickname = req.body['nickname']
        dog.age = req.body['age']
        dog.alive = req.body['alive']
        dog.breed = req.body['breed']
        const did = req.query['did']
        return await dogService.updateDog(dog,did).then((dog) => {
            return res.status(200).json(dog)
        })
    }


    async deleteDog(req, res) {
        const did = req.query['did'];
        return await dogService.deleteDog(did)
            .then((result) => {
                return res.status(200).json(result)
            })
    }
}