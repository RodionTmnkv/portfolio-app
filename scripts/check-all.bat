@echo off
echo ========================================
echo Running Full Project Validation
echo ========================================
echo.

echo [1/3] Running TypeScript type check...
call npx tsc --noEmit
if errorlevel 1 (
    echo ERROR: TypeScript check failed!
    exit /b 1
)
echo TypeScript check passed!
echo.

echo [2/3] Running ESLint...
call npx eslint . --ext .ts,.tsx,.js,.jsx --max-warnings 0
if errorlevel 1 (
    echo ERROR: ESLint check failed!
    exit /b 1
)
echo ESLint check passed!
echo.

echo [3/3] Running Prettier check...
call npx prettier --check "**/*.{ts,tsx,js,jsx,json,scss,css,md}"
if errorlevel 1 (
    echo ERROR: Prettier check failed!
    exit /b 1
)
echo Prettier check passed!
echo.

echo ========================================
echo All checks passed successfully!
echo ========================================