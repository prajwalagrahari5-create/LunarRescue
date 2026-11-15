const { app, BrowserWindow, Menu, globalShortcut } = require('electron');
const path = require('path');
const fs = require('fs');

app.setName('Lunar Rescue'); // keeps save data in a stable folder
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 800,
    minHeight: 500,
    title: 'Lunar Rescue',
    backgroundColor: '#05070d',
    autoHideMenuBar: true,
    icon: fs.existsSync(path.join(__dirname, 'build', 'icon.ico')) ? path.join(__dirname, 'build', 'icon.ico') : undefined,
    webPreferences: { contextIsolation: true, nodeIntegration: false }
  });
  Menu.setApplicationMenu(null);
  win.loadFile('index.html');

  // F11 = fullscreen toggle
  win.webContents.on('before-input-event', (e, input) => {
    if (input.type === 'keyDown' && input.key === 'F11') {
      win.setFullScreen(!win.isFullScreen());
      e.preventDefault();
    }
  });
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
