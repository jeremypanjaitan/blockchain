const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

const previousBlockHash = "ALDKJFASDFALSKDFJALSKDF";
const currentbBlockData = [
  {
    amount: 10,
    sender: "ASDLFKASDLFKASDF",
    recipient: "ASALDKFJASDFLAKSD",
  },
  {
    amount: 30,
    sender: "CADSFASDZCVZCVLKJJKJ",
    recipient: "CVZXKVLZXKCVLKZXCVK",
  },
  {
    amount: 200,
    sender: "R13432ASDLFJSADFK",
    recipient: "POIUOIUPOIASDKFJ",
  },
];
const nonce = 100;

console.log(bitcoin.hashBlock(previousBlockHash, currentbBlockData, nonce));
