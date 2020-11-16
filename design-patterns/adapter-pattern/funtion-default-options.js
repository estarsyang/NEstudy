// 函数参数适配，通常是以入参为对象的来适配。常用于多配置插件或者webpack 中。
// 用户只需传入少量的配置，函数内有默认配置，确保程序正常运行

function human(options) {
  let _default = {
    name: '',
    gender: '',
  }
  for(let key in options) {
    _default[key] = options[key] || _default[key]
  }
}