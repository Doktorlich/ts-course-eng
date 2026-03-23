type Operations = {
    readonly add?: (a: number, b: number) => number;
    readonly substract: (a: number, b: number) => number;
};

type Result<T> = {
    -readonly [Key in keyof T]: number;
};

let mathOperations: Operations = {
    add(a: number, b: number) {
        return a + b;
    },
    substract(a: number, b: number) {
        return a - b;
    },
};
let mathResult: Result<Operations> = {
    add: mathOperations.add(1, 2),
    substract: mathOperations.substract(4, 2),
};

mathResult.add = 10;
