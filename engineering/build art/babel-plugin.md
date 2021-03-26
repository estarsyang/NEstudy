### 导航
- 插件的本质
- 插件开发工具
- 实战案例

### 插件的本质
- 从代码到AST 本质上是将代码转换成AST树 使用 AST explor
- 节点 Node
    - AST每一层都拥有相同的结构，我们称之为节点(Node)
    - 一个AST可以由单一的节点或是成百上千节点构成
    - 它们组合在一起可以描述用于静态分析的程序语法
- babel编译过程
    - 解析(parsing) 解析代码，生成AST树
    - 变换（Transformation) 操作AST,修改其内容
    - 生成(code generator) 根据AST，生成新的代码
- 遍历  想要转化AST，我们就需要对其进行递归的树形遍历
    ```js
    - FunctionDele
    ```
- 访问者模式 遍历AST的过程，其实就是不断访问各个节点的过程，所以babel就顺理成章的使用了访问者模式

    ```js
        const MyVisitor = {
            Identifier: {
                enter() {
                    // 向下遍历
                    console.log('Enter')
                },
                exit() {
                    // 返回公共节点
                    console.log('exit')
                }
            }
        }
    ```
    - path 是我们对节点(Node)的引用,获取父节点，上下文，各种方法
    ```js
    {
        type: 'FunctionDeclaration',
        id: {
            type: 'Identifier',
            name: 'square'
        }
    }
    // 转换成
    {
        parent: {
            type: 'FunctionDeclaration',
            id: {// ...}
        },
        node: {
            type: 'Identifier',
            name: 'square'
        }
    }
    ```
    - state 插件的状态，比如当前plugin的信息，plugin传入的配置参数，甚至处理过程中的自定义状态
    ```js
        {
            plugins: ["my-plug", {
                option1: true,
                option2: false
            }]
        }
        // 转换成
        {
            visitor: {
                FunctionDeclaration(path,state) {
                    // ...
                }
            }
        }
    ```
    - 插件的完整面貌 以babel对象为入参，以包含插件名字和visitor的对象为返回值的函数
    ```js
        export default function(babel) {
            const {types:t,template} = babel
            return {
                name: 'demo-plugin',
                visitor: {
                    Identifier(path,state) {},
                    ASTNodeTypeHere(path,state) {}
                }
            }

        }
    ```
### 插件开发工具
- @babel/parser 将源代码解析成 AST
- @babel/generator 将AST生成js代码
- @babel/code-frame 生成错误信息并打印出错误原因和错误行数 *
- @babel/helper 提供了一些内置的帮助函数 *
- @babel/template 为parser提供模板引擎 *
- @babel/types 主要用来处理节点类型相关的问题(判断，创建) *
- @babel/traverse 工具类，用来遍历AST树

### 实战
- 基础知识
    1. [babel插件手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)
- 实现 optional Chaining `?.`用法
```js
    foo?.bar
    // ↓↓↓↓↓↓↓↓↓↓↓↓
    foo == null ? void 0: foo.bar
```
- 步骤
  1. 源码`foo?.bar`先转化为AST(访问ASTexplorer.net)，获取转化后的ast
  2. 转换后的代码`foo == null ? void 0:foo.bar`也转换为AST，获取ast
  3. 查看两个ast的变化
  4. 写代码




  ## tips
  - 访问者模式
    - 概念
        - 访问者模式是将对数据的操作和数据结构进行分离，将对数据中各元素的操作封装成独立的类，使其在不改变数据结构的前提下可以拓展对数据新的操作。

    - 特点：
        - 拓展性好，能够在不修改对象结构的情况下，为对象中的元素添加新的功能。
        - 复用性好，通过访问者可以定义整个对象的通用功能，从而实现复用。
        - 灵活性好，访问者模式将对象结构与作用于对象的操作解耦。
        - 符合单一职责原则，访问者模式把相关的行为封装在一起，构成一个访问者，使每一个访问者的功能都比较单一。
    - 结构与实现
        - 结构：
            - 访问者模式包含抽象访问者、具体访问者、抽象元素、具体元素和对象结构。
            - 抽象访问者：定义一个访问具体元素的接口，使每一个具体元素都有一个访问操作。
            - 具体访问者：实现抽象访问者中定义的各个访问操作，确定访问者访问一个元素时该做什么。
            - 抽象元素：声明一个包含接收操作的接口。
            - 具体元素：实现包含接收操作的接口。
            - 对象结构：包含元素角色的容器，提供让访问者对象遍历容器中所有元素的方法。
        - 案例：
            有两家公司，【艺术公司】和【造币公司】；    
            有两种材料，【纸】和【铜】。    
            将【纸】给到【艺术公司】，可以得到图纸；    
            将【铜】给到【艺术公司】，可以设计铜像。    
            将【纸】给到【造币公司】，可以造出纸币；    
            将【铜】给到【造币公司】，可以造出铜币。    
            ```js
                //抽象访问者-公司
                class Company{
                    create(){}
                }
                //具体访问者-艺术公司
                class ArtCompany extends Company{
                    create(el){
                        if(el instanceof Paper){
                            return "画图"
                        }else if(el instanceof Cuprum){
                            return "设计铜像"
                        }
                    }
                }
                //具体访问者-造钱公司
                class Mint extends Company{
                    create(el){
                        if(el instanceof Paper){
                            return "造纸币"
                        }else if(el instanceof Cuprum){
                            return "造铜币"
                        }
                    }
                }
                //抽象元素-材料
                class Material{
                    accept(visitor){}
                }
                //抽象元素-纸币
                class Paper extends Material{
                    accept(visitor){
                        return visitor.create(this);
                    }
                }
                //抽象元素-铜币
                class Cuprum extends Material{
                    accept(visitor){
                        return visitor.create(this);
                    }
                }
                //对象结构-添加或删除材料，根据不同的公司做出不同的东西
                class SetMaterial{
                    constructor(){
                        this.list = [];
                    }
                    accept(visitor){
                        let str = "";
                        for(let i of this.list){
                            str+=i.accept(visitor)+"\n";
                        };
                        return str;
                    }
                    add(el){
                        this.list.push(el);
                    }
                    remove(el){
                        this.list.filter((item)=>item!==el);
                    }
                }
                class Customer{
                    static main(){
                        //定义材料对象
                        let setMaterial = new SetMaterial();
                        //添加材料
                        setMaterial.add(new Paper());
                        setMaterial.add(new Cuprum());
                        //根据不同的公司生产不同的东西
                        let pro = setMaterial.accept(new ArtCompany());
                        let pro1 = setMaterial.accept(new Mint());
                        console.log(pro);
                        console.log(pro1);
                    }
                }
                Customer.main();
            ```
        - 应用场景
            - 对象结构相对稳定，但其操作算法经常变化。
            - 对象结构中的对象需要提供多种不同且不相关的操作。而且要避免这些操作的变化影响对象结构。
            - 对象结构包含很多类型的对象。希望对这些对象实施一些依赖于其具体类型的操作。
            - 应用实例
        参考以上案例。

        - 总结
            访问者模式比较适合多种元素在不同场景下有不同表现的场景，是一种多对多的关系。在这种情况下，可以将访问者对象与元素对象分离。不同的访问者面对不同的元素也将有不同的行为表现。这种模式需要访问者对象和元素对象的结构相对稳定，只是业务行为有不同的变化而已。

        - 【访问者】：
            1、提供 visit 访问方法，该方法内接收元素对象，根据不同元素做出不同的反应。

        - 【元素】：
            1、提供 accept 方法，接收访问者对象，将元素对象传入，调用访问者对象的 visit 方法。
            2、提供 getMaterial 获取元素的方法。

        - 【对象结构】：
            1、初始化 list 容器，用来管理元素，
            2、提供 accept 方法，接收访问者对象，遍历元素对象，调用元素对象的 accepet 方法，
            3、提供 add 方法，添加元素对象到容器，
            4、提供 remove 方法，从容器中删除元素对象。