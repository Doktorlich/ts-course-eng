function getLength(val: any[]): number;
function getLength(val: string): string;
function getLength(val: string | any[]) {
    if (typeof val === "string") {
        const number0Worlds = val.split(" ").length;
        return `${number0Worlds} words`;
    }
    return val.length;
}
const num0Words = getLength("does this work?");
const numItems = getLength(["Sports", "Cookies"]);
num0Words.length;
console.log(num0Words);
console.log(numItems);
