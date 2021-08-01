---
title: 对于 CSS-in-JS 的缺陷分析
date: "2021-07-29T16:20:39.187Z"
---

几乎每个大一点公司都有一个“运行时间长，维护的工程师换了一批又一批”的项目，如果参与到这样的项目中来，大部分人只有一个感觉——『climb the shit mountain』。

所以我们经常会说谁谁谁写的代码就像排泄物一样，为了避免成为别人嘴里的谁谁谁，所以我写的代码一般不注明作者日期信息（抖机灵，其实是因为 Git 能够很好的管理这些信息），所以在项目中，我们应该编写可维护性良好的代码。

同时，对于工程师而言，提高自身的编码能力和编写易于阅读和维护的代码，是提高开发效率和职业身涯中必做的事情。我在面试的时候发现很多面试者拥有所谓的多年工作经验，一直在平庸的写着重复的代码，而从未去推敲、提炼和优化，这样是不可能提高编程水平的。

那么如何编写出可维护的、优雅的代码呢？

首先，我们应该明确的认识到，代码是写给自己和别人看的，应该保持清晰的结构，方便后人阅读和维护，假如有一天需要回头修改代码，别人和你都会感谢你！

其次，不管公司大小，不管项目大小，不管工期有多紧张，制定良好的编码规范并落到实地。如果代码质量不够好的话，在需求较多的情况下，就可能会牵一发动全身，大厦将倾。所以在项目的开始或者 现在 制定良好的编码规范，每个人都应该有自己的或者团队的编码规范！

最后，嗅出代码的 Bad Smell，比如重复的代码、命名不规范、过长的函数、数据泥团等等，然后在不改变代码外在行为的前提下，不断的优化重构，以改进代程序的内部结构。

接下来，我总结整理了一大套理论和实操，以飨各位。



避免使用 JS 糟粕和鸡肋


这些年来，随着 HTML5 和 Node.js 的发展，JavaScript 在各个领域遍地开花，已经从“世界上最被误解的语言”变成了“世界上最流行的语言”。但是由于历史原因，JavaScript 语言设计中还是有一些糟粕和鸡肋，比如：全局变量、自动插入分号、typeof、NaN、假值、==、eval 等等，并不能被语言移除，开发者一定要避免使用这些特性。

还好下文中的 ESLint 能够检测出这些特性，给出错误提示（如果你遇到面试官还在考你这些特性的话，那就需要考量一下，他们的项目中是否仍在使用这些特性，同时你也应该知道如何回答这类问题了）。



编写简洁的 JavaScript 代码


以下这些准则来自 Robert C. Martin 的书 “Clean Code”，适用于 JavaScript。整个列表很长，我选取了我认为最重要的一部分，也是我在项目用的最多的一部分，但是还是推荐大家看一下原文：

https://github.com/ryanmcdermott/clean-code-javascript

这不是风格指南，而是 使用 JavaScript 生产可读、可重用和可重构的软件的指南。



变量
 使用有意义，可读性好的变量名


Bad:

var yyyymmdstr = moment().format('YYYY/MM/DD')
Good:

var yearMonthDay = moment().format('YYYY/MM/DD')


 使用 ES6 的 const 定义常量


反例中使用"var"定义的"常量"是可变的，在声明一个常量时，该常量在整个程序中都应该是不可变的。

Bad:

var FIRST_US_PRESIDENT = "George Washington"
Good:

const FIRST_US_PRESIDENT = "George Washington"


 使用易于检索的名称


我们要阅读的代码比要写的代码多得多， 所以我们写出的代码的可读性和可检索性是很重要的。使用没有意义的变量名将会导致我们的程序难于理解，将会伤害我们的读者， 所以请使用可检索的变量名。 类似 buddy.js 和 ESLint 的工具可以帮助我们找到未命名的常量。

Bad:

// What the heck is 86400000 for?
setTimeout(blastOff, 86400000)
Good:

// Declare them as capitalized `const` globals.
const MILLISECONDS_IN_A_DAY = 86400000

setTimeout(blastOff, MILLISECONDS_IN_A_DAY)


 使用说明性的变量 (即有意义的变量名)


Bad:

const address = 'One Infinite Loop, Cupertino 95014'
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/
saveCityZipCode(address.match(cityZipCodeRegex)[1], address.match(cityZipCodeRegex)[2])
Good:

const address = 'One Infinite Loop, Cupertino 95014'
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/
const [, city, zipCode] = address.match(cityZipCodeRegex) || []
saveCityZipCode(city, zipCode)


方法
 保持函数功能的单一性


这是软件工程中最重要的一条规则，当函数需要做更多的事情时，它们将会更难进行编写、测试、理解和组合。当你能将一个函数抽离出只完成一个动作，他们将能够很容易的进行重构并且你的代码将会更容易阅读。如果你严格遵守本条规则，你将会领先于许多开发者。

Bad:

function emailClients(clients) {
  clients.forEach((client) => {
    const clientRecord = database.lookup(client)
    if (clientRecord.isActive()) {
      email(client)
    }
  })
}
Good:

function emailActiveClients(clients) {
  clients
    .filter(isActiveClient)
    .forEach(email)
}

function isActiveClient(client) {
  const clientRecord = database.lookup(client)
  return clientRecord.isActive()
}


 函数名应明确表明其功能（见名知意）


Bad:

function addToDate(date, month) {
  // ...
}

const date = new Date()

// It's hard to to tell from the function name what is added
addToDate(date, 1)
Good:

function addMonthToDate(month, date) {
  // ...
}

const date = new Date()
addMonthToDate(1, date)


 使用默认变量替代短路运算或条件


Bad:

function createMicrobrewery(name) {
  const breweryName = name || 'Hipster Brew Co.'
  // ...
}
Good:

function createMicrobrewery(breweryName = 'Hipster Brew Co.') {
  // ...
}


 函数参数 (理想情况下应不超过 2 个)


限制函数参数数量很有必要，这么做使得在测试函数时更加轻松。过多的参数将导致难以采用有效的测试用例对函数的各个参数进行测试。

应避免三个以上参数的函数。通常情况下，参数超过三个意味着函数功能过于复杂，这时需要重新优化你的函数。当确实需要多个参数时，大多情况下可以考虑这些参数封装成一个对象。

Bad:

function createMenu(title, body, buttonText, cancellable) {
  // ...
}
Good:

function createMenu({ title, body, buttonText, cancellable }) {
  // ...
}

createMenu({
  title: 'Foo',
  body: 'Bar',
  buttonText: 'Baz',
  cancellable: true
})


 移除重复代码


重复代码在 Bad Smell 中排在第一位，所以，竭尽你的全力去避免重复代码。因为它意味着当你需要修改一些逻辑时会有多个地方需要修改。

重复代码通常是因为两个或多个稍微不同的东西， 它们共享大部分，但是它们的不同之处迫使你使用两个或更多独立的函数来处理大部分相同的东西。 移除重复代码意味着创建一个可以处理这些不同之处的抽象的函数 / 模块 / 类。

Bad:

function showDeveloperList(developers) {
  developers.forEach((developer) => {
    const expectedSalary = developer.calculateExpectedSalary()
    const experience = developer.getExperience()
    const githubLink = developer.getGithubLink()
    const data = {
      expectedSalary,
      experience,
      githubLink
    }

    render(data)
  })
}

function showManagerList(managers) {
  managers.forEach((manager) => {
    const expectedSalary = manager.calculateExpectedSalary()
    const experience = manager.getExperience()
    const portfolio = manager.getMBAProjects()
    const data = {
      expectedSalary,
      experience,
      portfolio
    }

    render(data)
  })
}
Good:

function showEmployeeList(employees) {
  employees.forEach((employee) => {
    const expectedSalary = employee.calculateExpectedSalary()
    const experience = employee.getExperience()

    const data = {
      expectedSalary,
      experience
    }

    switch (employee.type) {
      case 'manager':
        data.portfolio = employee.getMBAProjects()
        break
      case 'developer':
        data.githubLink = employee.getGithubLink()
        break
    }

    render(data)
  })
}


 避免副作用


当函数产生了除了“接受一个值并返回一个结果”之外的行为时，称该函数产生了副作用。比如写文件、修改全局变量或将你的钱全转给了一个陌生人等。程序在某些情况下确实需要副作用这一行为，这时应该将这些功能集中在一起，不要用多个函数 / 类修改某个文件。用且只用一个 service 完成这一需求。

Bad:

const addItemToCart = (cart, item) => {
  cart.push({ item, date: Date.now() })
}
Good:

const addItemToCart = (cart, item) => {
  return [...cart, { item, date: Date.now() }]
}


 避免条件判断


这看起来似乎不太可能。大多人听到这的第一反应是：“怎么可能不用 if 完成其他功能呢？”许多情况下通过使用多态 (polymorphism) 可以达到同样的目的。第二个问题在于采用这种方式的原因是什么。答案是我们之前提到过的：保持函数功能的单一性。