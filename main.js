const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    // const win2 = new BrowserWindow({
    //     width: 800,
    //     height: 600,
    //     webPreferences: {
    //         nodeIntegration: true
    //     }
    // });

    win.loadFile('index2.html'); // Stelle sicher, dass index.html existiert!
    // win2.loadFile('index.html'); // Stelle sicher, dass index.html existiert!
}

app.whenReady().then(createWindow);