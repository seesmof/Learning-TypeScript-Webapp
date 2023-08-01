const sayHi = () => {
  console.log("hi");
};

const returnString = (): string => {
  console.log("hi");
  return "hi";
};

const mult = (num: number): number => {
  return num * 2;
};

const sum = (num1: number, num2: number, num3?: number): number => {
  return num1 + num2;
};
sum(1, 2);

const func = (user: { username: string; age: number; phone?: string }) => {
  console.log(user.username);
};

type UserType = {
  username: string;
  age: number;
  phone?: string;
};

const betterOne = (user: UserType) => {
  console.log(user.username);
};

type MyFunc = (a: number, b: string) => void;

const write: MyFunc = (a, b) => {
  console.log(`${a} times ${b}`);
};

type UserTwo = {
  username: string;
  age: number;
  phone?: string;
  theme: "dark" | "light";
};

const userTwo: UserTwo = {
  username: "abc",
  age: 1,
  phone: "123",
  theme: "light",
};

interface IUser {
  username: string;
  email: string;
  age: number;
}

interface IEmployee extends IUser {
  employeeId: number;
}

const employee: IEmployee = {
  username: "John",
  email: "john@me.com",
  age: 30,
  employeeId: 1,
};

console.log(employee);

const client: IUser = {
  username: "John",
  email: "john@me.com",
  age: 30,
};
