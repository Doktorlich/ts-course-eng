function getLength(val) {
    if (typeof val === "string") {
        var number0Worlds = val.split(" ").length;
        return "".concat(number0Worlds, " words");
    }
    return val.length;
}
var num0Words = getLength("does this work?");
var numItems = getLength(["Sports", "Cookies"]);
console.log(num0Words);
console.log(numItems);
