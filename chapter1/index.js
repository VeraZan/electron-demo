var electron = require('electron')
var app = electron.app
var BrowserWindow = electron.BrowserWindow
var win = null
app.on('ready', function() {
  // 创建窗口，并且把窗口对象交给了一个全局引入
  win = new BrowserWindow({
    // 告知Electron需要为页面集成Node.js环境，并赋予index.html页面中的Javascript访问Node.js环境的能力
    webPreferences: { nodeIntegration: true }
  })
  // 窗口加载页面，
  // 如果加载的页面是个互联网页面，你无法验证该页面提供的内容是否可靠，应该关闭上面的webPreferences: { nodeIntegration: true }，否则这个页面上的一些恶意脚本也将拥有访问Node.js的能力
  win.loadFile('index.html')
  win.on('closed', function() {
    win = null
  })
})
app.on('window-all-closed', function() {
  app.quit()
})