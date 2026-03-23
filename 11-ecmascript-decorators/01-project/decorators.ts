function logger<T extends new (...args: any) => any>(target: T, ctx: ClassDecoratorContext) {
    // console.log(target);
    // console.log(ctx);
    // console.log("logger decorator");
    // return class extends target {
    //     constructor(...args: any[]) {
    //         super(...args);
    //         console.log("class constructor");
    //         console.log(this);
    //     }
    // };
}

function autobind(target: (...args: any[]) => any, ctx: ClassMemberDecoratorContext) {
    ctx.addInitializer(function (this: any) {
        this[ctx.name] = this[ctx.name].bind(this);
    });
    return  function(this:any){
        console.log("Executing original function");
        target.apply(this)
    }
}

@logger
class Person {
    name = "Max";
    constructor() {
        this.greet = this.greet.bind(this);
    }
    @autobind
    greet() {
        console.log("Hi, I am" + this.name);
    }
}

const max = new Person();
const julie = new Person();
