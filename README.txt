LUNAR RESCUE - PC VERSION
=========================
1. Install Node.js (LTS) from https://nodejs.org  (one time only)
2. Double-click TEST_GAME.bat   -> runs the game in a desktop window
3. Double-click BUILD.bat       -> creates the .exe files in the "dist" folder
     - "Lunar Rescue Setup 1.0.0.exe"  = installer
     - "Lunar Rescue 1.0.0.exe"        = portable, no install needed

Press F11 in the game for fullscreen.

OPTIONAL ICON: put icon.ico (256x256) in the "build" folder, and add "icon": "build/icon.ico" under build > win in package.json,
before running BUILD.bat. Without one, the default Electron icon is used.
