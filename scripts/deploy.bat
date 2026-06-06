@echo off
echo ========================================
echo Deploying to GitHub Pages
echo ========================================

echo.
echo [1/4] Building project...
call npm run build
if errorlevel 1 (
    echo Build failed!
    exit /b 1
)

echo.
echo [2/4] Preparing folder structure...
if exist gh-pages-deploy rmdir /s /q gh-pages-deploy
mkdir gh-pages-deploy\portfolio-app
xcopy /e /i /y out\* gh-pages-deploy\portfolio-app\
echo. > gh-pages-deploy\.nojekyll

echo.
echo [3/4] Deploying to gh-pages branch...
call npx gh-pages -d gh-pages-deploy -b gh-pages

echo.
echo [4/4] Cleaning up...
rmdir /s /q gh-pages-deploy

echo.
echo ========================================
echo Deployed successfully!
echo Site: https://rodiontmnkv.github.io/portfolio-app/
echo ========================================