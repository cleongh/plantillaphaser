import { app, BrowserWindow } from 'electron';
import * as path from 'path';
// import html from './index.electron.html?url'


let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({});
    // mainWindow.menuBarVisible
    mainWindow.setMenu(null);
    if (process.env.VITE_DEV_SERVER_URL) {
        mainWindow.loadURL(new URL('index.electron.html', process.env.VITE_DEV_SERVER_URL).toString());
    } else {
        mainWindow.loadFile(path.join(import.meta.dirname, '../dist/index.electron.html'));
    }
    mainWindow.on('closed', () => mainWindow = null);
}

app.whenReady().then(() => {
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow == null) {
        createWindow();
    }
});