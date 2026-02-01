//返回一个新的构造函数来替换原有的构造函数
function replaceConstructor<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args);
            console.log("instance create")
        }
    }
}

@replaceConstructor
class User {
    constructor(public name: string) {
        console.log("User create")
    }
}

const user = new User("Tom")
console.log(user.name)