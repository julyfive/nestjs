## nestjs核心包

- @nestjs/core nestjs核心模块 提供构建、启动和管理nestjs应用程序的基础设施
- @nestjs/common 包含构建nestjs应用程序基础设施和常用装饰器，像控制器、服务、中间件、守卫等
- rxjs 用于构建异步和事件驱动的库
- reflect-metadata 实现元编程的库,提供元数据反射api,可以在运行时检查和操作对象的元数据
- @nestjs/platform-express nestjs的express平台适配器

## nestjs

核心就是express+装饰器

nestjs>module>controller>

## 一些概念

元数据:描述数据的数据

## tsconfig.json

- compilerOptions // 编译选项
    - target // 指定编译时使用的语言版本
    - lib // 指定编译时使用的库
    - module // 指定编译时使用的模块系统
    - moduleResolution // 指定模块解析策略
    - experimentalDecorators // 启用实验性装饰器
    - emitDecoratorMetadata // 启用装饰器元数据

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": [
      "ESNext"
    ],
    "module": "nodeNext",
    "moduleResolution": "nodeNext",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

## Reflect

Reflect 其实是ES6的一个内置对象，提供了操作对象属性的 API

## Reflect-metadata

reflect-metadata是用于TS和ECMA的元数据反射库提案

它通过提供对元数据的定义和反射，简化了装饰器的使用

- `Reflect.defineMetadata(key, value, target, propertyKey)` 定义元数据
- `Reflect.hasMetadata(key, target, propertyKey)` 检查元数据是否存在
- `Reflect.getMetadata(key, target, propertyKey)` 获取元数据
- `Reflect.getOwnMetadata(key, target, propertyKey)` 获取元数据
- `Reflect.deleteMetadata(key, target, propertyKey)` 删除元数据

## 装饰器

- 类装饰器
    - 应用于类构造函数，可以用来定义类，或者修改类成员
    - 参数：(constructor:Function)
- 方法装饰
    - 应用于方法，可以修改方法的行为
    - 参数：(target:Object,propertyKey:string,descriptor:PropertyDescriptor)
- 访问器装饰器
    - 应用与类的访问器属性，可以修改访问器属性的行为（getter、setter）
    - 参数：(target:Object,propertyKey:string,descriptor:PropertyDescriptor)
- 属性装饰器
    - 应用于类的属性，可以修改属性的行为
    - 参数：(target:Object,propertyKey:string)
- 参数装饰器
    - 应用与方法的参数
    - 参数：(target:Object,propertyKey:string,parameterIndex:number)
