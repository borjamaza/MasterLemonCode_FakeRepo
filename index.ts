import {Training} from "./model/TrainingModel"

import {RestAPI} from "./api/restAPI";

const restAPI = new RestAPI();
// Consuming the promise
restAPI.GetTrainings()
  .then((response) =>
    displayTrainings(response)
  )
  .catch((error) => handleError(error));

function displayTrainings(trainings:Array<Training>)
{
  document.write("<p><b>Showing list of trinings from Rest API</b></p>")

  document.write("<table><tr><td>Name</td><td>Tutor</td><td>Start</td><td>End</td></tr>");
  trainings.forEach((training) => {
    document.write(`<tr><td>${training.name}</td><td>${training.tutor}</td><td>${training.start}</td><td>${training.end}</td></tr>`);
  });
  document.write("</table>");
};

function handleError(error)
{
  document.write(error);
}
