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
