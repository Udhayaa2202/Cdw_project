const fs = require("fs");

const readFromFile = (fileName) => {
  try {
    const data = fs.readFileSync(fileName);
    return data.length ? JSON.parse(data) : [];
  } catch (err) {
    throw new Error(err);
  }
};

const writeIntoFile = (fileName, data) => {
  try {
    const response = fs.writeFileSync(fileName, data);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { readFromFile, writeIntoFile };