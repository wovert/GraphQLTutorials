# GraphQL

> An **API** defines how a **client** can load data from a **server**.

## What is GraphQL

- new **API** standard that was invented & open-sourced by Facebook
- enables **declaratative data fetching** 启用声明式数据获取
- GraphQL Server exposes **single endpoint** and responds to **queries** GraphQL服务器公开单个端点并响应查询

### A Query Language for APIs

![A Query Language for APIs](./images/query-api.png)

## graphql数据类型

- 基本参数类型
  - 基本类型：`String, Int, Float, Boolean, ID`
  - [类型]代表数组：`[Int]`代表整形数组

- 参数传递：参数需要定义类型
- `!` 代表参数不能为空

``` schema
type Query {
  rollDice(numDice: Int!, numSides: Int): [Int]
}
```