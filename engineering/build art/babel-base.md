### babel
- babel作用
- Syntax 和 Feature  
- plugin、preset、env
- 使用方式
- babel配置
### babel作用 - 将高版本js转化为低版本的js
- 语法转换
- polyfill
- 源码修改

### Syntax 和 Feature
- Syntax 语法
- Feature 就是 api，可被低版本实现

### plugin、preset、env
- plugin 插件
- preset 一组插件的结合
- env 

### 使用方式


### babel 配置
- .babelrc.json (对项目生效，不能跨项目)
- babel.config.json (对工程生效，可以跨项目)
- package.json 的babel字段

### plugin使用
- 在 preset前面
- 顺序从前到后执行
### preset使用
- preset在plugin之后执行
- preset之间从后往前执行

### preset-env 配置
- useBuiltLns 和 targets
    - useBuiltLns 用来配置 polyfill
      - false 不自动注入 polyfill
      - entry 根据环境配置自动注入Polyfill
      - usage 根据实际使用自动注入Polyfill
    - targets 告诉 preset-env选择哪些插件

### Polyfill
- 直接引入
    - 与 useBuiltLns 使用