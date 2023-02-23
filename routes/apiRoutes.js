const notes = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

let id = 1;

const readFromFile = () => {
  const data = fs.readFileSync('./db/db.json', 'utf8');
  return JSON.parse(data);
};

const writeToFile = (data) => {
   fs.writeFileSync('./db/db.json', JSON.stringify(data));
 };