import {log} from "./logger/winston.logger.js";
import express from "express";
import {BreedRouter} from "./routes/breed.route.js";
import {DogRoute} from "./routes/dog.route.js";


class Server {

    breedRouter = new BreedRouter();
    dogRouter = new DogRoute();

    main() {
        const application = express()
        application.use('/api', this.breedRouter.route) // call sub function after main construct work
        application.use('/api', this.dogRouter.route)
        application.listen(3000, (error) => {
            if (error) throw error
            else log.debug({message: 'you are on port 3000', level: "info"})
        })
    }
}

new Server().main()