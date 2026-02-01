//属性装饰器
//用来装饰类的属性
//参数 (target:Object,propertyKey:string|symbol)=>void
//元素据添加
import "reflect-metadata"

/**
 * 一个装饰器函数，用于标记属性为必需的
 * 该装饰器会在目标对象的指定属性上设置元数据，标识该属性是必需的
 * @param target - 装饰的目标对象（通常是类的原型）
 * @param propertyKey - 被装饰的属性名称
 * @returns void
 */
function required(target: any, propertyKey: string) {
    // console.log(`target is ${target}`)
    console.log(`decorating ${propertyKey}`)
    Reflect.defineMetadata("required", true, target, propertyKey)
}


class User {
    @required
    username: string;

    // constructor(username: string) {
    //     this.username = username
    // }
}
/**
 * 验证用户对象中必需字段是否为空
 * 使用反射元数据来检查标记为必需的属性是否存在且不为空
 * @param user - 要验证的用户对象
 */
function validate(user: User) {
    for (let key in user) {
        console.log(`${key}'s required "attribute" is ${Reflect.getOwnMetadata("required", user, key)}`) // undefined
        console.log(`${key}'s required "attribute" is ${Reflect.getMetadata("required", user, key)}`) // true
        if (Reflect.getMetadata("required", user, key) && !user[key]) {
            throw new Error(`${key} is required`)
        } else {
            console.log(`${key} is valid`)
        }
    }

}

const fsUser = new User()
fsUser.username = "fs"
validate(fsUser)