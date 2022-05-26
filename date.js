// creates module to run getDate function, module is required in app.js file
exports.getDate = function() {

  const today = new Date();

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  };

  return today.toLocaleDateString("en-US", options);

};

// creates module to run getDay function, module is required in app.js file
exports.getDay = function() {

  const today = new Date();

  const options = {
    weekday: "long"
  };

  return today.toLocaleDateString("en-US", options);

};
