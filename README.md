# test browser code in cli

## usage

mocha 测试的时候，全局加载`btest`模块

```
mocha -r jscovergae,btest test/
```

`btest` 将node进程模拟成一个浏览器环境，
提供所有的前端代码依赖的环境、全局对象。
可以方便的在命令行运行测试case。

`btest`自带jquery，方便测试用。