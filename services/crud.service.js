import {ConnectDB} from "../configuration/connect.db.js";
import {Breed} from "../entities/breed.ts";
import {Dog} from "../entities/dog.ts";
import {log} from "../logger/winston.logger.js";

// have to initial dataSource before create repo then you can get many repos
const appDataSource = await new ConnectDB().dataSource.initialize();

export class BreedService {

    breedRepo = appDataSource.getRepository(Breed)

    async getBreedsJoinDogs() {
        return this.breedRepo
            .find()
            .then((breeds) => {
                return breeds
            });
    }

    async getBreedJoinDogsById(id) {
        return this.breedRepo
            .find({where: {bid: id}})
            .then((breed) => {
                return breed
            });
    }

    async createBreed(breed) {
        return this.breedRepo.save(breed)
            .then((breed) => {
                return breed
            });
    }

    async updateBreed(newBreed, bid) {
        return this.breedRepo.findOne({where: {bid: bid}})
            .then((breedFound) => {
                breedFound.breed = newBreed.breed
                return this.breedRepo.save(breedFound)
                    .then((currentBreed) => {
                    return currentBreed
                })
            });
    }

    async deleteBreed(bid) {
        const dogRepo = appDataSource.getRepository(Dog)
        await dogRepo.delete(bid) // wait then do below
        return this.breedRepo.delete(bid)
            .then((result) =>  {
            return result
        })

    }
}

export class DogService {

    dogRepo = appDataSource.getRepository(Dog)

    async getDogs() {
        return this.dogRepo
            .find()
            .then( (dogs) => {
                return dogs
            });
    }

    async getDogById(id) {
        return this.dogRepo
            .findOneBy({did : id})
            .then((dog) => {
                return dog
            });
    }

    async createDogAndBreed(dog) {
        return this.dogRepo.save(dog).then((dog) => {
            return dog
        })
    }


    async updateDog(dog,did) {
        // work too ({where id updates} , <value as object>)
        return this.dogRepo.update({did : did}, dog).then((dog) => {
            log.info(dog.affected)
            return dog
        })
    }

    async deleteDog(did) {
        return this.dogRepo.delete(did)
            .then((result) =>  {
                return result
            })
    }



}





