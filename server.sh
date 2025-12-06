#!/bin/bash

# Dody's Handcraft - Local Development Server Launcher

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║     Dody's Handcraft - Local Development Server            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Check if Python 3 is installed
if command -v python3 &> /dev/null; then
    echo "✓ Python 3 found! Starting server..."
    echo ""
    echo "📱 Development Server: http://localhost:8000"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    python3 -m http.server 8000
# Check if Python 2 is installed
elif command -v python &> /dev/null; then
    echo "✓ Python found! Starting server..."
    echo ""
    echo "📱 Development Server: http://localhost:8000"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    python -m SimpleHTTPServer 8000
else
    echo "✗ Python is not installed on your system."
    echo ""
    echo "To start the development server, please:"
    echo "  1. Install Python from https://www.python.org/downloads/"
    echo "  2. Run this script again, or"
    echo "  3. Use 'python -m http.server 8000' from this directory"
    echo ""
fi
