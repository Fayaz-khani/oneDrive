const { app, BrowserWindow, Tray  } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        autoHideMenuBar:true,
        movable:false,
        resizable:false,
        // x:1520,
        // y:395,
        frame:false,
      width: 368,
      height: 648
    })
  
    win.loadFile('assets/html/index.html')
    tray = new Tray('drive.png')
    tray.setToolTip('OneDrive')
    
    tray.on("click",()=>{
        win.isVisible()?win.hide():win.show()
    })  

}

  app.whenReady().then(() => {
    createWindow()
  })