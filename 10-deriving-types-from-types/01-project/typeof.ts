let userName = "Max";
console.log(typeof userName);
type UserName = typeof userName;

const settings = {
    difficultyL: "easy",
    minLevel: 10,
    didStart: false,
    players: ["John", "Jane"],
};
type Settings = typeof settings;
