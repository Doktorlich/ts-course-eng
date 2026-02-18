interface IAuthenticatable {
    email: string;
    password: string;

    login(email: string): void;
    logout(password: string): void;
}
let user: IAuthenticatable;

user = {
    email: "dok@mail.com",
    password: "abc",
    logout() {},
    login() {},
};
class AuthenticatableUser implements IAuthenticatable {
    constructor(
        public email: string,
        public password: string,
    ) {}
    public login(email: string): void {}
    public logout(password: string): void {}
}
