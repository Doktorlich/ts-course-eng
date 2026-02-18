var UserAdv = /** @class */ (function () {
    function UserAdv() {
        this._firstName = "";
        this._lastName = "";
    }
    Object.defineProperty(UserAdv.prototype, "firstName", {
        set: function (name) {
            if (name.trim() === "") {
                throw new Error("Invalid name");
            }
            this._firstName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserAdv.prototype, "lastName", {
        set: function (name) {
            if (name.trim() === "") {
                throw new Error("Invalid name");
            }
            this._lastName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserAdv.prototype, "fullName", {
        get: function () {
            return this._firstName + " " + this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    UserAdv.greet = function () {
        console.log("hello");
    };
    UserAdv.eid = "USER";
    return UserAdv;
}());
var max = new UserAdv();
max.firstName = "max";
//console.log(UserAdv.eid);
console.log(UserAdv.greet());
