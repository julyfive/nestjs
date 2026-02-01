//类装饰器可以扩展类的功能，比如说可以给添加新的属性和方法

function addTimestamp<T extends { new(...args: any[]): {} }>(constructor:T) {
    return class extends constructor {
        timestamp = Date.now()
    }
}

interface Document {
    title: string
    timestamp: number
}

@addTimestamp
class Document {
    constructor(public title: string) {
    }
}

const doc = new Document('hello')
console.log(doc.title)
console.log(doc.timestamp)