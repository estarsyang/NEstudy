
### 增强团队协作效率

### 提高代码质量

### 减缓系统腐化速度


## 原则
- 寻找“公约数"
- 本着可读性第一的原则
- 循序渐进的建立规范

## 社区规范
- google
- airbnb styles

## ESLint
- AST浅析(是一种可遍历的，描述代码的树状结构，利用AST可以方便的分析代码的结构和内容) [AST Explorer](https://astexplorer.net/)
#### ESLint
- parser eslint使用哪种解析器
- environment 环境 browser、node、commonjs/es
- globals 除了 env之外，其他需要额外指定的全局变量
- rules 规则
- Plugins 一组以上配置项以及 processor的集合，往往用于特定类型文件的代码检查，如 .md 文件

##### parser
- parser 哪种解析器
- parserOptions 

##### env globals
- env 支持的环境
- globals 
  - writeable 可写
  - readonly 可读
  - off 不支持
  ```js
    globals: {
      var1: 'writeable',
      var2: 'readonly',
      var3: 'off',
    }
  ```

##### Rules
- extend  
`extends: “eslint:recommended”`

##### Plugins
- 

### 编写自己的eslint规则


### prettier vs linters