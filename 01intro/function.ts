function addTwo(num: number) {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(
  name: string,
  email: string,
  password: string,
  isPaid: boolean
) {}

addTwo(2);
getUpper("Hello");

signUpUser("sushil", "Kzqz7@example.com", "123456", true);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("sushil", "Kzqz7@example.com");

export {};
