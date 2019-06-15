const express = require('express')
const { buildSchema } = require('graphql')
const graphqlHttp = require('express-graphql')

// 定义schema 查询的语句和类型
// name 查询方法名 | 数据类型
const schema = buildSchema(`
  type Account {
    name: String
    age: Int
    gender: String
    department: String
    salary(city: String): Int
  }
  type Query {
    hello: String
    accountName: String
    age: Int
    account(username: String): Account
    getClassMates(classNo: Int!): [String]
  }
`)

// 定义查询所对应的resolver, 也就是禅熏对应的处理器
const root = {
  hello: () => {
    return 'hello world'
  },
  accountName: () => {
    return '张三丰'
  },
  age: () => {
    return 18
  },
  account: ({ username }) => {
    const salary = ({ city }) => {
      if (city === '北京' || city === '上海') {
        return 10000
      } else {
        return 3000
      }
    }
    return {
      name: 'wovert',
      age: 20,
      gender: '男',
      department: '开发部门',
      salary
    }
  },
  getClassMates({ classNo }) {
    const obj = {
      31: ['张三', '李四', '王五'],
      61: ['里三', '王进', '刘金'],
    }
    return obj[classNo]
  }
}

const app = express()

app.use('/graphql', graphqlHttp({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

// 用户访问静态资源
app.use(express.static('public'))

app.listen(3000)