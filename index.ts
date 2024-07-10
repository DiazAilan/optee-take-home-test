import { Pharmacy } from "./pharmacy";
import { Doliprane, Drug, Fervex, HerbalTea, MagicPill } from "./types/drug";

import fs from "fs";

const drugs = [
  new Doliprane(20, 30),
  new HerbalTea(10, 5),
  new Fervex(5, 40),
  new MagicPill(15, 40)
];
const trial = new Pharmacy(drugs);

// As a polemic the type any could be, for the name of the log variable and its function.
// I'd say that it is meant to be an array that accepts any type of objects or primitives
// Another solution is to call it drugLog and type it as a :Drug[].
// But since this is the application main file I'd rather be as abstract as possible and
// hide the business logic from this file if I can.
const log: any[] = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()));
}

/* eslint-disable no-console */
fs.writeFile("output.txt", log.join(","), err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
