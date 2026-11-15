@echo off
echo Installing tools (first time only)...
call npm install
echo Building Windows game...
call npm run build
echo.
echo Done! Look in the "dist" folder for your installer and portable .exe
pause
