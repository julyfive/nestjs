import 'reflect-metadata';

class MyClass {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    @Reflect.metadata('customKey', 'customValue') // 定义元数据 键：customKey 值：customValue
    getName(): string {
        console.log()
        return this.name;
    }
}

const myClass = new MyClass('run');

//定义元数据
//Reflect.defineMetadata(key,value,target,propertyKey) key:元数据名称 value:元数据值 target:目标对象 propertyKey:属性名
Reflect.defineMetadata('isName', 11, myClass, 'name')

//查看元数据
//Reflect.getMetadata(key,target,propertyKey)
console.log(Reflect.getMetadata('isName', myClass, 'name')) // 11

//检查是否具有元数据
//Reflect.hasMetadata(key,target,propertyKey)
console.log(Reflect.hasMetadata("isName", myClass, "name")) // true
console.log(Reflect.hasMetadata("customKey", myClass, "getName")) // true

//获取自己的元数据
//Reflect.getOwnMetadata(key,target,propertyKey)
console.log(Reflect.getOwnMetadata('isName', myClass, 'name')) // 11
console.log(Reflect.getOwnMetadata("customKey", myClass, 'name'))  // undefined
console.log(Reflect.getMetadata("customKey", myClass, 'getName')) // customValue
console.log(Reflect.getOwnMetadata("customKey", myClass, 'getName')) // undefined
console.log(Reflect.getOwnMetadata("customKey", myClass.constructor, "getName")) // undefined
console.log(Reflect.getOwnMetadata("customKey", myClass.constructor.prototype, "getName")) // customValue
console.log(Reflect.getOwnMetadata("customKey", Reflect.getPrototypeOf(myClass), "getName")) // customValue

//删除元数据
//Reflect.deleteMetadata(key,target,propertyKey)
Reflect.deleteMetadata('isName', myClass, 'name')
//验证
console.log(Reflect.getOwnMetadata('isName', myClass, 'name')) // undefined
console.log(Reflect.hasOwnMetadata('isName', myClass, 'name')) // false