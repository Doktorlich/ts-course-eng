type User = { name: string; age: number };
type UserKeys = keyof User;

let validKey: UserKeys;
validKey = "age";
validKey = "name";

function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
    const val = obj[key];
    if (val === undefined || val === null) {
        throw new Error("");
    }
    return val;
}
const user = { name: "Max", age: 123 };
const data = { id: 1, isStored: false, valuse: [1, 3, -5] };
const val = getProp(user, "name");
const val2 = getProp(data, "isStored");
