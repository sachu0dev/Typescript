// const User = {
//   name: "sushil",
//   age: 10,
//   email: "Kzqz7@example.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}
// let newUser = { name: "sushil", isPaid: true, email: "Kzqz7@example.com" };
// // createUser({ name: "sushil", isPaid: true, email: "Kzqz7@example.com" }); give error which is good

// createUser(newUser); //this should give error but it works bad behavior

// function createCourse(): {} {
//   return {
//     name: "sushil",
//     isPaid: true,
//   };
// }

// // type aliases

// type User = {
//   name: string;
//   age: number;
//   email: string;
//   isActive: boolean;
// };

// function createNewUser(user: User): User {
//   return { name: "sushil", email: "", isActive: true, age: 30 };
// }

// createNewUser({ name: "sushil", email: "", isActive: true, age: 30 });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credcardDetailes?: number;
};

let myUser: User = {
  _id: "12345",
  name: "sushil",
  email: "s@k.com",
  isActive: true,
};

myUser.email = "sdfjlsdkj";

export {};
