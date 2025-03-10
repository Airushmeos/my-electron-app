const { app, BrowserWindow, Menu, shell, ipcMain } = require("electron");

function createWindowroblox() {
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

    win.loadFile("index3.html"); // Lädt index2.html
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
                        shell.openExternal("https://myfirstwebsite.lima-city.at/roblox/sehen.html");
                    }
                },
                // {
                //     label: "Über",
                //     click() {
                //         createAboutWindow();
                //     }
                // }
            ]
        },
        {
            label: "Seiten",
                submenu: [
                    {
                        label: "E-Mail",
                        click() {
                            createWindowemail();
                        }
                    },
                    {
                        label: "Laden"
                        click() {
                            createWindowladen();
                        }
                    }
                ]
        }
    ]);
    Menu.setApplicationMenu(menu);
}

function createWindowemail() {
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
                        shell.openExternal("https://myfirstwebsite.lima-city.at/senden");
                    }
                },
                // {
                //     label: "Über",
                //     click() {
                //         createAboutWindow();
                //     }
                // }
            ]
        },
        {
            label: "Seiten",
                submenu: [
                    {
                        label: "Roblox",
                        click() {
                                createWindowroblox();
                        }
                    },
                    {
                        label: "Laden"
                        click() {
                            createWindowladen();
                        }
                    }
                ]
        }
    ]);
    Menu.setApplicationMenu(menu);
}

function createWindowladen() {
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

    win.loadURL("https://myfirstwebiste.lima-city.at/laden");
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
                        shell.openExternal("https://myfirstwebsite.lima-city.at/laden");
                    }
                },
                // {
                //     label: "Über",
                //     click() {
                //         createAboutWindow();
                //     }
                // }
            ]
        },
        {
            label: "Seiten",
                submenu: [
                    {
                        label: "Roblox",
                        click() {
                                createWindowroblox();
                        }
                    },
                    {
                        label: "E-Mail",
                        click() {
                            createWindowemail();
                        }
                    }
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

app.whenReady().then(createWindowemail);
