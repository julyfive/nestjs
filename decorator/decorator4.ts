//方法装饰器
//方法装饰器可以装饰方法
//方法装饰器接收三个参数 target:被装饰的对象 propertyKey:被装饰的方法名 descriptor:被装饰的方法属性描述符
//(target:Object,propertyKey:staring|symbol,descriptor:PropertyDescriptor)

/*
* @param target:被装饰的对象 如果是静态成员，则是类的构造函数，如果是实例成员，则是类的原型
* @param propertyKey:被装饰的方法名
* @param descriptor:被装饰的方法属性描述符
* */
function log(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`calling ${propertyKey} with`, args);
        const result = originMethod.apply(this, args);
        console.log(`result is：${result}`);
        return result;
    }
}

class Calculator {
    @log
    add(a: number, b: number): number {
        return a + b
    }
}

// const a=new Calculator()
// a.add(5,6)

//权限管理
let users = {
    "001": {
        role: ["admin"]
    },
    "002": {
        role: ["user"]
    }
}

function authorize(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`arguments is ${args}`)
        const user = users[args[0]]
        if (user && user.role.includes("admin")) {
            console.log(`user ${args[0]} is admin`)
            originMethod.apply(this, args);
        } else {
            throw new Error(`user:${args[0]} is not authorized to call this method`)
        }
    }
    return descriptor
}


class AdminPanel {
    @authorize
    deleteUser(useId: string) {
        console.log(`delete user ${useId}`)
    }
}

const adminPanel = new AdminPanel()
adminPanel.deleteUser('001')

//数据缓存


function cache(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const resultCache = new Map<string, any>()
    const originMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const key = JSON.stringify(args)
        if (resultCache.has(key)) {
            console.log(`cache hit for ${key}`)
            return resultCache.get(key)
        } else {
            const result = originMethod.apply(this, args);
            console.log(`cache miss for ${key}`)
            resultCache.set(key, result);
            return result;
        }
    }
}

class MethodOperations {
    @cache
    factorial(num: number) {
        if (num <= 1) return 1;
        return num * this.factorial(num - 1);
    }
}

const methodOperations = new MethodOperations()
console.log(methodOperations.factorial(10))
console.log(methodOperations.factorial(10))