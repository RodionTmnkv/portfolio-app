#!/bin/bash

echo "========================================"
echo "Deploying to GitHub Pages"
echo "========================================"

echo ""
echo "[1/3] Building project..."
npm run build
if [ $? -ne 0 ]; then
    echo "Build failed!"
    exit 1
fi

echo ""
echo "[2/3] Preparing for deployment..."
touch out/.nojekyll

echo ""
echo "[3/3] Deploying to gh-pages branch..."
npx gh-pages -d out -b gh-pages --dotfiles

echo ""
echo "========================================"
echo "Deployed successfully!"
echo "Site: https://rodiontmnkv.github.io/portfolio-app/"
echo "========================================"