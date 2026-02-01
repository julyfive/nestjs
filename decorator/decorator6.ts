//属性装饰器
//参数(target:Object,propertyKey:string|symbol)
function defaultValue(value: any) {
    return function (target: any, propertyKey: string) {
        let val = value;
        const getter = function () {
            return val;
        };
        const setter = function (newVal: any) {
            val = newVal;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}

interface Setting {
    [key: string]: any
}

class Setting {
    @defaultValue("light")
    theme: string;
    @defaultValue(5)
    timeout: number
}

const setting = new Setting()
console.log(setting.theme) //undefined //这里有个坑，这里打印出来的是undefined 在最新的ts中 useDefineForClassFields 默认值是true 采用最新的语法 defineProperty去定义属性
console.log(setting.timeout)//undefined
console.log(setting.__proto__.theme)
console.log(setting.__proto__.timeout)