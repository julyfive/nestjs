## nestjs核心包

- @nestjs/core nestjs核心模块 提供构建、启动和管理nestjs应用程序的基础设施
- @nestjs/common 包含构建nestjs应用程序基础设施和常用装饰器，像控制器、服务、中间件、守卫等
- rxjs 用于构建异步和事件驱动的库
- reflect-metadata 实现元编程的库,提供元数据反射api,可以在运行时检查和操作对象的元数据
- @nestjs/platform-express nestjs的express平台适配器

## Nestjs

核心就是express+装饰器

nestjs>module>controller>

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