// DEFINE ARRAY OF OBJECTS
const users = [
  {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811,
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821,
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793,
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278,
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951,
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498,
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764,
  },
];

// DEFINE ARROW FUNCTION WITH ACCEPTED PARAMETERS
const getTotalBalanceByGender = (users, gender) => {
  // SETUP CHAINING TO FILTER GENDER & REDUCE VALUE
  return users
    .filter((user) => user.gender === gender)
    .reduce((totalBalance, user) => totalBalance + user.balance, 0);
};

// OUTPUT VALUE IN CONSOLE
console.log(getTotalBalanceByGender(users, "male"));
console.log(getTotalBalanceByGender(users, "female"));
