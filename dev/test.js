const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

const bc1 = {
  chain: [
    {
      index: 1,
      timestamp: 1648904008834,
      transactions: [],
      nonce: 100,
      hash: "0",
      previousBlockHash: "0",
    },
    {
      index: 2,
      timestamp: 1648904029753,
      transactions: [],
      nonce: 18140,
      hash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
      previousBlockHash: "0",
    },
    {
      index: 3,
      timestamp: 1648904174807,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "846e2ee2114e427c977bdb2b5413c46e",
          transactionId: "ed1f92f1cd764c15ac2eabeb1089d963",
        },
        {
          amount: 10,
          sender: "CXZVXCVZMC324234",
          recipient: "RQWEROEWRQWEFADSFLKJLKJLK",
          transactionId: "96f16f13b6224aefb7112643c56b4928",
        },
        {
          amount: 20,
          sender: "CXZVXCVZMC324234",
          recipient: "RQWEROEWRQWEFADSFLKJLKJLK",
          transactionId: "91ee592e637f42c798cb888ffceaf0d7",
        },
        {
          amount: 30,
          sender: "CXZVXCVZMC324234",
          recipient: "RQWEROEWRQWEFADSFLKJLKJLK",
          transactionId: "ec8eca330e3f47da9dbe9976dafac4b6",
        },
      ],
      nonce: 10905,
      hash: "0000c0c0118b7b12ab6dcb2471565cc4098b7337afc0edac8d1e6ed7a8d37af4",
      previousBlockHash:
        "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    },
    {
      index: 4,
      timestamp: 1648904217828,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "846e2ee2114e427c977bdb2b5413c46e",
          transactionId: "88a02c22b0fc4ad19ee98d6228489188",
        },
        {
          amount: 40,
          sender: "CXZVXCVZMC324234",
          recipient: "RQWEROEWRQWEFADSFLKJLKJLK",
          transactionId: "3a60d213b79c46298bb39ec99062a30d",
        },
        {
          amount: 50,
          sender: "CXZVXCVZMC324234",
          recipient: "RQWEROEWRQWEFADSFLKJLKJLK",
          transactionId: "d6aaf05fdaf740628d6920b933b8b71e",
        },
        {
          amount: 60,
          sender: "CXZVXCVZMC324234",
          recipient: "RQWEROEWRQWEFADSFLKJLKJLK",
          transactionId: "f1d8199bbe0c4213818ba12067d7b0ea",
        },
        {
          amount: 70,
          sender: "CXZVXCVZMC324234",
          recipient: "RQWEROEWRQWEFADSFLKJLKJLK",
          transactionId: "fefce9f4017748ad8ff4a0106e60bc71",
        },
      ],
      nonce: 6705,
      hash: "0000b80bc5f40ca654830f3753d7f896d7c32f01675d4caee7c8d74b8351836c",
      previousBlockHash:
        "0000c0c0118b7b12ab6dcb2471565cc4098b7337afc0edac8d1e6ed7a8d37af4",
    },
    {
      index: 5,
      timestamp: 1648904243469,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "846e2ee2114e427c977bdb2b5413c46e",
          transactionId: "1a681cba5a0f4fa9ae515cca60489066",
        },
      ],
      nonce: 222640,
      hash: "0000ab6d6fe1eca1d052aa998e27740f793597d38f77459d66caa76ab851baf3",
      previousBlockHash:
        "0000b80bc5f40ca654830f3753d7f896d7c32f01675d4caee7c8d74b8351836c",
    },
    {
      index: 6,
      timestamp: 1648904271470,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "846e2ee2114e427c977bdb2b5413c46e",
          transactionId: "780024a29dbe40b980b9ff778224cb20",
        },
      ],
      nonce: 35115,
      hash: "0000ddf6193abbd971c49f33467fe15056e19f8944939b251c2ac920cfa66f12",
      previousBlockHash:
        "0000ab6d6fe1eca1d052aa998e27740f793597d38f77459d66caa76ab851baf3",
    },
  ],
  pendingTransactions: [
    {
      amount: 12.5,
      sender: "00",
      recipient: "846e2ee2114e427c977bdb2b5413c46e",
      transactionId: "089a143acdfc46138708ed0c74b59307",
    },
  ],
  currentNodeUrl: "http://localhost:3001",
  networkNodes: [],
};

console.log("VALID: ", bitcoin.chainIsValid(bc1.chain));
