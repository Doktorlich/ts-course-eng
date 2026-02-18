class UserAdv {
    protected _firstName: string = "";
    private _lastName: string = "";

    public set firstName(name: string) {
        if (name.trim() === "") {
            throw new Error("Invalid name");
        }
        this._firstName = name;
    }

    public set lastName(name: string) {
        if (name.trim() === "") {
            throw new Error("Invalid name");
        }
        this._lastName = name;
    }
    get fullName() {
        return this._firstName + " " + this._lastName;
    }
    static eid = "USER";
    static greet() {
        console.log("hello");
    }
}
class Employee extends UserAdv {
    constructor() {
        super();
        super.firstName = "Max";
    }
    work() {
        console.log(this._firstName);
    }
}
abstract class UIElement {
    constructor(public identifier: string) {}
    clone(targetLocation: string) {
        // logic to dublicate the UI element
    }
}
class SideDrawerElement extends UIElement {
    constructor(
        public identifier: string,
        public position: "left" | "right",
    ) {
        super(identifier);
    }
}
const max = new UserAdv();
max.firstName = "max";
//console.log(UserAdv.eid);
console.log(UserAdv.greet());
