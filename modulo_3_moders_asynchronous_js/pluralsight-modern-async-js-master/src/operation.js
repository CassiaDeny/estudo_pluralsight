const delayms = 1;

function getCurrentCity(callback) {
  setTimeout(function () {

    const city = "New York, NY";
    callback(null, city);

  }, delayms)
}

function getWeather(city, callback) {
  setTimeout(function () {

    if (!city) {
      callback(new Error("City required to get weather"));
      return; 
    }

    const weather = {
      temp: 50
    };

    callback(null, weather)

  }, delayms)
}

function getForecast(city, callback) {
  setTimeout(function () {

    if (!city) {
      callback(new Error("City required to get forecast")); 
      return;
    }

    const fiveDay = {
      fiveDay: [60, 70, 80, 45, 50]
    };

    callback(null, fiveDay)

  }, delayms)
}

suite.only("operations");

function fetchCurrentCity() {
  const operation = {
    successReactions: [],
    errorReactions: []
  };

  operation.onCompletion = function onCompletion(onSuccess, onError) {
    operation.successReactions.push(onSuccess);
    operation.errorReactions.push(onError);
  };

  operation.onFailure = function onFailure(onError){
      operation.onCompletion(null, onError);
  };

  getCurrentCity(function (error, result) {
    if (error) {
      operation.errorReactions.forEach(r => r(error));
      return;
    }
    operation.successReactions.forEach(r => r(result));
  });

  return operation;
}

test("pass multiple callbacks - all of them are called", function (done) {

  const operation = fetchCurrentCity();

  const multiDone = callDone(done).afterTwoCalls();

  operation.onCompletion(result => multiDone());
  operation.onFailure(error => multiDone());

});

test("fetchCurrentCity pass the callbacks later on", function (done) {

  // initiate operation
  const operation = fetchCurrentCity();

  // register callbacks
  operation.onCompletion(
    result => done(),
    error => done(error));

});