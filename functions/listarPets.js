"use strict";

const pets = require("../utils/pets.json");

module.exports.handler = async (event) => {
  try {
    const result = pets.data;

    return {
      statusCode: 200,
      body: JSON.stringify({
        pets: result,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};
