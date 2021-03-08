### 导读
- ast 
- 编译理论
- 如何实现编译器

### ast 可遍历的，描述代码的树状结构，利用ast可以方便地分析代码的结构和内容


### 编译理论
- 编译流程
  1. 词法分析器 
  2. 语法分析器
  3. 语义分析器
  4. 中间代码生成
  5. 目标代码生成

### babel中的编译
- parsing 解析代码，生成ast
- transformation 操作ast，修改其内容
- code generator 根据ast生成新的代码 

### 自定义编译器
- parsing
  - tokenizing 代码被词法分析器生成编译器能够理解的内容，即token
  - tokenizer 函数
  - parser 函数，生成ast树
- transformation
  - traverser函数 深度优先的遍历AST树
  - tarnsformer函数 在遍历到每一个节点时调用，将旧ast转成一棵新树
- code generator 深度优先的遍历新的AST树，将每个节点依次组合成为新代码

#### 完整步骤
  1. input -> tokenizer -> tokens
  2. Tokens -> parser -> ast
  3. ast -> transformer -> newAst
  4. newAst -> generator -> output


### [super Tiny Compiler](https://github.com/jamiebuilds/the-super-tiny-compiler)
### 编译原理课程 哈尔滨工业大学 [编译原理](http://www.icourse163.org/course/HIT-1002123007)