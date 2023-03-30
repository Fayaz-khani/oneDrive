const { app, BrowserWindow, Tray  , ipcMain} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        autoHideMenuBar:true,
        movable:false,
        resizable:false,
        // x:1520,
        // y:395,
        frame:false,
      width: 368,
      height: 648,
      webPreferences:{
          nodeIntegration:true,
          contextIsolation:false,
      }
    })
  
    win.loadFile('assets/html/index.html')
    tray = new Tray('assets/images/drive.png')
    tray.setToolTip('OneDrive')
    
    tray.on("click",()=>{
        win.isVisible()?win.hide():win.show()
    })  

}

  app.whenReady().then(() => {
    createWindow()
  })
// require the sqlite3 module
const sqlite3 = require('sqlite3').verbose();

// create a new instance of the sqlite3 database
const db = new sqlite3.Database('mysql');

// define your object
const myObject = {
  name: 'saeed',
  address: 'karak',
  job:'interne',
  // sallery:2000
};

// convert the object to a string using JSON.stringify
// const jsonString = JSON.stringify(myObject);

// insert the string into the database
// const insertQuery = `INSERT INTO data (name) VALUES (?)`;
const insertQuery = 'INSERT INTO data (NAME,ADDRESS,job) VALUES (?, ?, ?)';

db.run(insertQuery, [myObject.name, myObject.address, myObject.job], function(err) {
  if (err) {
    throw err;
  }
  console.log(`Inserted object into database with ID: ${this.lastID}`);
});


db.all('SELECT * FROM data', (err, rows) => {
  if (err) {
    throw err;
  }

  rows.forEach(row => {
    console.log(row);
  });
});


ipcMain.on('submit', (event, arg) => {
  console.log(arg); // { name: 'John', age: 30, email: 'john@example.com' }
});
