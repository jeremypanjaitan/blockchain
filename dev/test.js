const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

bitcoin.createNewBlock(4321, "ASDF329814723ASDF", "ASDLKFJASDLKFASD");

bitcoin.createNewTransaction(100, "ALEXFAJSDKLFAJSDF", "JENN9JSDLKFASJDF");

bitcoin.createNewBlock(429384, "ASDFASLDKFJASLKD98234", "ALSDKFJALSDKFASD");

bitcoin.createNewTransaction(50, "ALEXFAJSDKLFAJSDF", "JENN9JSDLKFASJDF");
bitcoin.createNewTransaction(300, "ALEXFAJSDKLFAJSDF", "JENN9JSDLKFASJDF");
bitcoin.createNewTransaction(2000, "ALEXFAJSDKLFAJSDF", "JENN9JSDLKFASJDF");

bitcoin.createNewBlock(982374, "EOWIRUQWEASDLKF", "QWEORWEFFASDLKFJAS");
console.dir(bitcoin, { depth: null });
