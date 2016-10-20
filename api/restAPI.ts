import { Promise } from 'es6-promise';
import { Training } from '../model/TrainingModel';
import { trainingsMockData } from './mockData';

class RestAPI {
  GetTrainings(): Promise<Array<Training>> {
    let trainingsPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(trainingsMockData), 5000);
    });

    return trainingsPromise;
  };
}

export {
  RestAPI
}
