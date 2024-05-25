let score: number | string = 33;

score = "something";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

const sushil: User | Admin = {
  username: "sushil",
  id: 8959,
};

function getId(id: number | string) {
  if (typeof id === "string") id.toLowerCase();
}

const data1: number[] = [1, 3, 45, 5];
const data2: string[] = ["1", "3", "45", "5"];
const data3: (string | number)[] = [1, "2", 3, "4"];

let gender: "male" | "female" | "nonbinary";

gender = "male";
gender = "female";
gender = "nonbinary";
