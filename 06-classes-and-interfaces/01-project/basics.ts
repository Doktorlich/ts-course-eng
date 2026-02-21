// class User {
//     name: string;
//     age: number;
//     constructor(nameArg: string, ageArg: number) {
//         this.name = nameArg;
//         this.age = ageArg;
//     }
// }

class User {
    readonly hobbies: string[] = [];
    constructor(
        public name: string,
        private age: number = 31,
    ) {}

    public greet() {
        console.log(`My page: ${this.age}`);
    }
}

const user1 = new User("MAx", 55);
const user2 = new User("MAx", 55);

// user1.age = 37;
user1.greet();
user2.greet();
user2.hobbies.push("Swim");
console.log(user1);
console.log(user2);
