---
title: 让你 nodejs 水平暴增的 debugger 技巧【测试文章2】
time: 2021-01-12 12:11
url: test_2
---
## 标题测试2
学习 nodejs 最重要的是什么？可能每个人都有自己的答案。
我觉得学习 nodejs 除了要掌握基础的 api、常用的一些包外，最重要的能力是学会使用 debugger。因为当流程复杂的时候，断点调试能够帮你更好的理清逻辑，有 bug 的时候也能更快的定位问题。
狼叔说过，是否会使用 debugger 是区分一个程序员 nodejs 水平的重要标志。
本文分享一下 debugger 的原理和 vscode debugger 的使用技巧。
debugger 原理
运行 nodejs 代码的时候，如果带上了 --inspect（可以打断点） 或者 --inspect-brk（可以打断点，并在首行断住） 的参数，那么就会以 debugger 的模式启动：

可以看到，node 启动了一个 web socket 的 server，地址是：ws://127.0.0.1:9229/78637688-e8e0-4582-80cc-47655f4bff66
为什么 debugger 要启动一个 websocket server 呢？
debugger 的含义就是要在某个地方断住，可以单步运行、查看环境中的变量。那么怎么设置断点、怎么把当前上下文的变量暴露出去呢，就是通过启动一个 websocket server，这时候只要启动一个 websocket client 连接上这个 server 就可以调试 nodejs 代码了。
v8 debug protocol
连上之后呢，debugger server 和 debugger client 怎么交流？这就涉及到了 v8 debug protocol。
通过两边都能识别的格式来交流，比如：
在 test.js 的 100 行 设置断点：
{
    "seq":118,
    "type":"request",
    "command":"setbreakpoint",
    "arguments":{
        "type":"script",
        "target":"test.js",
        "line":100
    }
}
复制代码
然后查看当前作用域的变量：
{
    "seq":117,
    "type":"request",
    "command":"scope"
}
复制代码
执行一个表达式：
{
    "seq":118,
    "type":"request",
    "command":"evaluate",
    "arguments":{
        "expression":"a()"
    }
}
复制代码
之后继续运行：
{
    "seq":117,
    "type":"request",
    "command":"continue"
}
