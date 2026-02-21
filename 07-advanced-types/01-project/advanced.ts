let roles = ["admin", "guest", "editor"] as const;
roles.push("visitor");

const roles2 = ["admin", "guest", "editor"];
roles2.push("visitor");

type Store = {
    [workerName: string]: number | boolean;
};
let someObj: Record<string, number | boolean> = {};
let store: Store = {};

store.id = 1;
store.isOpen = true;

someObj.id = 2;
someObj.isActive = true;
someObj.age = "21";

const dataEntries = {
    entry1: 0.51,
    entry2: -1.2,
} satisfies Record<string, number>;
dataEntries.entry3;
