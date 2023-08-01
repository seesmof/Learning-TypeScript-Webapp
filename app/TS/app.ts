let user = {
  username: "John",
  age: 22,
  isAdmin: false,
};
user.username = "Jane";
user.age = 23;
user.isAdmin = true;
console.log(user);

let userObj: {
  username: string;
  age: number;
  isAdmin: boolean;
};

userObj = {
  username: "John",
  age: 22,
  isAdmin: false,
};

let userObj2: {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

userObj2 = {
  username: "John",
  age: 22,
  isAdmin: false,
  phone: "1234567890",
};
