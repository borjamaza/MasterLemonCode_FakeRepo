import {} from "core-js";
import {trainingsMockData} from "./mockData";
import {Training} from "../model/TrainingModel";

class RestAPI {
  GetTrainings(): Promise<Array<Training>> {
    let trainingsPromise = new Promise((resolve, reject) => {
      resolve(trainingsMockData);
    });

    return trainingsPromise;
  };
}

export {
  RestAPI
}
