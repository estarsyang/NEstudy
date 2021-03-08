## 前端监控

### 异常监控
- 捕获异常，高效，准确
- 数据上报，性能和信息全面之间做出取舍
- 数据分析 
- 告警 什么时候，什么方式

### 异常捕获
- window.onerror
- window.addEventListener('error')
- window.addEventListener('unhandlederjection')
### 异步捕获, 通过重写原生，三方库相关方法
- setTimeout、setInterval
- fetch
- XMLHttpRequest
- 框架能力 Vue.config.errorHandler

### 数据上报
- 跨域，性能，信息量
- 跨域: 图像，jsonp，cors
- 附带上下文
### sentry
- docker本地化部署