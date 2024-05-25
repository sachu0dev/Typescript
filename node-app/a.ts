function identify<T>(arg: T) {
  return arg;
}

let output1 = identify<string>("its a string");
let output2 = identify<number>(8);
