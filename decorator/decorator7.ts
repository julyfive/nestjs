//参数装饰器
//用于装饰类的构造函数或者方法的参数
//参数(target:Object,,propertyKey:number,paramsIndex:number)
import "reflect-metadata"

function validate(target: Object, propertyKey: string, paramsIndex: number) {
    const requiredArgs: number[] = Reflect.getMetadata("required", target, propertyKey) || []
    requiredArgs.push(paramsIndex)
    Reflect.defineMetadata("required", requiredArgs, target, propertyKey)
}

function validateParameters(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    const originMethod = descriptor.value;
    descriptor.value = function (...args: number[]) {
        const requiredArgs: number[] = Reflect.getMetadata("required", target, propertyKey)
        for (let paramIndex of requiredArgs) {
            if (args[paramIndex] === undefined) {
                throw new Error(`${propertyKey}的参数${paramIndex}是必需的`)
            }
        }
        return originMethod.apply(this, args)
    }
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
user.setName(undefined)