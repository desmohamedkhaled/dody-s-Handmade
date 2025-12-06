@echo off
REM Dody's Handcraft - Local Development Server Launcher

title Dody's Handcraft - Development Server

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║     Dody's Handcraft - Local Development Server            ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✓ Python found! Starting server...
    echo.
    echo 📱 Development Server: http://localhost:8000
    echo.
    echo Press Ctrl+C to stop the server
    echo.
    python -m http.server 8000
) else (
    echo ✗ Python is not installed on your system.
    echo.
    echo To start the development server, please:
    echo   1. Install Python from https://www.python.org/downloads/
    echo   2. Run this script again, or
    echo   3. Use 'python -m http.server 8000' from this directory
    echo.
    pause
)
