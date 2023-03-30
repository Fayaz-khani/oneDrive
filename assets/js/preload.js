const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
    sendObj(object) {
        ipcRenderer.send('submit', object)
    }
});

    // path: async () => {
    //   const path = document.getElementById('dbpath').value
    //   try {
    //     const res = await ipcRenderer.invoke('potd', path)
    //     document.getElementById('pout').innerText = 'Output: ' + res;
    //   } catch (error) {
    //     document.getElementById('pout').innerText = 'Output: ' + error;
    //   }
    // }
