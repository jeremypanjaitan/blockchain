const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, "AFSDLKFJASLDKFJ", "AJFLAKSJDFLKASDLF");
bitcoin.createNewBlock(2388, "AFSDLKFJASLDKFJ", "AJFLAKSJDFLKASDLF");
bitcoin.createNewBlock(2387, "AFSDLKFJASLDKFJ", "AJFLAKSJDFLKASDLF");
console.log(bitcoin);
