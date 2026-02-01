//参数装饰器
//用于装饰类的构造函数或者方法的参数
//参数(target:Object,,propertyKey:number,paramsIndex:number)
import "reflect-metadata"

function validate(target: Object, propertyKey: string, paramsIndex: number) {
    Reflect.defineMetadata("required", [], target, propertyKey)
}


class User {
    constructor(private name: string) {
    }

    @validateParameters
    setName(@validate newName: string) {
        this.name = newName
    }
}

const user = new User("fs")
user.setName("fs")
user.setName(undefined)