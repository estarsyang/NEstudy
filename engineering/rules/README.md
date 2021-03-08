### npm包的版本
- x.y.z-beta.1
- x major 主版本，一般代表 Breaking change。例如 vue 1.x vue 2.x等
- y minor 次版本，一般代表feature分支
- z patch 一般不包含功能，只是bugfix和功能关系不大的修改
- beta.1 pre-release alpha bete rc

### 版本范围
- `~` 代表 x.y.z 中 ，z版本有更新时，会自动下载并更新, 示例:`"vue":"~2.6.6"`
- `^` 代表 x.y.z 中 ，y,z版本有更新时，会自动下载并更新, 示例: `"xxx":"^1.5.2"`

### release-it的配置和使用


### ignore
- gitignore
- npmignore

### .npmrc

### .vscode
- settings.json
    - 自定义该项目目录下setting，覆盖全局setting
- xxx.code.code-snippets
    - 自定义一个代码片段