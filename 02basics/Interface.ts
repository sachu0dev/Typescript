interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrail: () => string;
  startTrail1(): string;
  getCoupon(couponname: string): number;
}
//  we can add more methods in interface after initialization
interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const sushil: User = {
  dbId: 22,
  email: "Kzqz7@example.com",
  userId: 12345,
  startTrail: () => {
    return "trail started";
  },
  startTrail1: () => {
    return "trail started";
  },
  getCoupon: () => {
    return 10;
  },
  githubToken: "sushil",
};

// sushil.dbId = 22; will not work readonly
sushil.email = "Kzqz7@example.com";

export {};
