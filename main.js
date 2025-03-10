const { app, BrowserWindow, Menu, shell, ipcMain } = require("electron");

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Zweites Fenster (optional, falls benötigt)
    // const win2 = new BrowserWindow({
    //     width: 800,
    //     height: 600,
    //     webPreferences: {
    //         nodeIntegration: true
    //     }
    // });

    win.loadFile("index2.html"); // Lädt index2.html
    // win2.loadFile("index.html"); // Lädt index.html, falls aktiv

    // Menüleiste hinzufügen
    const menu = Menu.buildFromTemplate([
        {
            label: "Datei",
            submenu: [
                { role: "quit", label: "Beenden" }
            ]
        },
        {
            label: "Hilfe",
            submenu: [
                {
                    label: "Website besuchen",
                    click() {
                        shell.openExternal("https://myfirstwebsite.lima-city.at");
                    }
                },
                // {
                //     label: "Über",
                //     click() {
                //         createAboutWindow();
                //     }
                // }
            ]
        }
    ]);
    Menu.setApplicationMenu(menu);
}

// function createAboutWindow() {
//     const aboutWin = new BrowserWindow({
//         width: 300,
//         height: 200,
//         title: "Über",
//         resizable: false,
//         modal: true,
//         parent: BrowserWindow.getFocusedWindow(),
//         webPreferences: { nodeIntegration: true }
//     });

//     aboutWin.loadFile("about.html");
// }

app.whenReady().then(createWindow);
