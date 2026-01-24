import {Controller} from "@nestjs/common";
import {Get} from "@nestjs/common";

@Controller({
    path: "app"
})
export class AppController {
    constructor() {
    }

    @Get("/hello")
    getHello(): {
        message: string
    } {
        return {
            message: "hello world"
        }
    }
}

/*
* @Controller也是一个装饰器，用于定义控制器
* 控制器是处理传入Http请求的核心组件，每个控制器负责处理特定的请求路径和对于的http方法
* 在控制器内部会使用路由装饰器，如@Get、@Post、@Put、@Delete、@Patch、@All
*例如@get,路由装饰器会将控制器的方法映射到http的get请求
* */