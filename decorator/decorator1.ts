//类装饰器工厂 是一个返回装饰器的函数，可以用来接收和控制装饰器的行为
function logClass() {
    return (constructor: Function) => {
        console.log(constructor.name)
    }
}

@logClass()
class Person {
    fs: string;
}

const p = new Person()