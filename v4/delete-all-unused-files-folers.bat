@echo off
echo ============================================================
echo   DynamicsCrm.DevKit - Clean All Build Artifacts
echo   This will reset the repo to a "fresh checkout" state
echo ============================================================
echo.

echo Deleting bin, obj, packages, Release, .vs folders...
for /d /r . %%d in (bin,obj,packages,Release,.vs) do @if exist "%%d" (
    echo   Removing: %%d
    rd /s /q "%%d" 2>nul
)

echo.
echo Deleting TestResults folders...
for /d /r . %%d in (TestResults) do @if exist "%%d" (
    echo   Removing: %%d
    rd /s /q "%%d" 2>nul
)

echo.
echo Deleting node_modules folders (if any)...
for /d /r . %%d in (node_modules) do @if exist "%%d" (
    echo   Removing: %%d
    rd /s /q "%%d" 2>nul
)

echo.
echo Deleting CoverageReport folders...
for /d /r . %%d in (CoverageReport) do @if exist "%%d" (
    echo   Removing: %%d
    rd /s /q "%%d" 2>nul
)

echo.
echo Deleting extracted nupkg folders in Published...
for /d %%d in (Published\*\*_extracted) do @if exist "%%d" (
    echo   Removing: %%d
    rd /s /q "%%d" 2>nul
)

echo.
echo Deleting *.user files...
for /r . %%f in (*.user) do @if exist "%%f" (
    echo   Removing: %%f
    del /q "%%f" 2>nul
)

echo.
echo Deleting *.suo files...
for /r . %%f in (*.suo) do @if exist "%%f" (
    echo   Removing: %%f
    del /q /a:h "%%f" 2>nul
)

echo.
echo ============================================================
echo   Clean completed!
echo   The repo is now in a "fresh checkout" state.
echo   Run: git status
echo   to verify no untracked changes remain.
echo ============================================================
echo.
pause