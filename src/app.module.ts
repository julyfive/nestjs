import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";

@Module({
    controllers: [AppController]
}) //定义模块
export class AppModule{
}
/*
* @Module 是一个装饰器 用于定义模块
* 模块是组成代码的基本单元，他将相关的组件（控制器、服务器、提供者）组合在一起
* Nestjs的模块系统是受Angular的模块系统启发的
* */