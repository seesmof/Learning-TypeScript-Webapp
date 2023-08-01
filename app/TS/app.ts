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
