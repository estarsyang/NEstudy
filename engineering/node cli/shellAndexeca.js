// cli程序的复用
// 不再重复发明 git npm yarn
// 异步的进行某些耗时操作，尤其是cpu bound操作


// shelljs
// 1.跨平台
// 2.正面反馈

// execa
// 1.结果promise化
// 2.跨平台支持shebang(自动化执行用哪种语言解析)
// 3.获取进程的结束信号
// 4.优雅退出
// 5.更好windows的支持