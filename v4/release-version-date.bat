@echo off
setlocal enabledelayedexpansion

REM =====================================================================
REM DynamicsCrm DevKit Release Build Script
REM This script automates the release process including version updates,
REM building, packaging, and cleanup.
REM =====================================================================

echo.
echo ************************************************************
echo DynamicsCrm DevKit Release Build Script
echo ************************************************************

REM Initialize variables and validate required files
call :InitializeVariables
if !ERRORLEVEL! neq 0 goto :Error

REM Update version and date placeholders in source files
call :UpdateVersionPlaceholders
if !ERRORLEVEL! neq 0 goto :Error

REM Build the solution
call :BuildSolution
if !ERRORLEVEL! neq 0 goto :Error

REM Create NuGet packages
call :CreateNuGetPackages
if !ERRORLEVEL! neq 0 goto :Error

REM Copy VSIX to published folder
call :CopyVsixToPublished
if !ERRORLEVEL! neq 0 goto :Error

REM Revert version and date placeholders
call :RevertPlaceholders
if !ERRORLEVEL! neq 0 goto :Error

echo.
echo ************************************************************
echo Release build completed successfully!
echo Version: !VERSION!
echo Date: !DATE!
echo Published to: Published\!VERSION!\
echo ************************************************************
goto :End

REM =====================================================================
REM FUNCTIONS
REM =====================================================================

:InitializeVariables
echo Initializing variables...
if not exist "version.txt" (
    echo ERROR: version.txt file not found!
    exit /b 1
)
if not exist "date.txt" (
    echo ERROR: date.txt file not found!
    exit /b 1
)

set /p VERSION=<version.txt
set /p DATE=<date.txt

echo Version: !VERSION!
echo Date: !DATE!

REM Define file arrays for version and date updates
set "VERSION_FILES=DynamicsCrm.DevKit.Shared\Const.cs"
set "VERSION_FILES=!VERSION_FILES! DynamicsCrm.DevKit.Cli\docs\README.md"
set "VERSION_FILES=!VERSION_FILES! DynamicsCrm.DevKit\source.extension.cs"
set "VERSION_FILES=!VERSION_FILES! ProjectTemplates\CSharp\05.PackageProjectTemplate\ReadMe.md"
set "VERSION_FILES=!VERSION_FILES! ProjectTemplates\CSharp\12.ReportProjectTemplate\notes.md"

set "DATE_FILES=DynamicsCrm.DevKit.Cli\docs\README.md"
set "DATE_FILES=!DATE_FILES! DynamicsCrm.DevKit.Shared\Const.cs"
set "DATE_FILES=!DATE_FILES! DynamicsCrm.DevKit\source.extension.vsixmanifest"
set "DATE_FILES=!DATE_FILES! DynamicsCrm.DevKit\VSPackage.resx"
set "DATE_FILES=!DATE_FILES! DynamicsCrm.DevKit\source.extension.cs"
set "DATE_FILES=!DATE_FILES! ProjectTemplates\CSharp\05.PackageProjectTemplate\ReadMe.md"
set "DATE_FILES=!DATE_FILES! ProjectTemplates\CSharp\12.ReportProjectTemplate\notes.md"

exit /b 0

:UpdateVersionPlaceholders
echo.
echo Updating version and date placeholders...

REM Update version placeholders
for %%f in (!VERSION_FILES!) do (
    echo Updating version in %%f
    powershell -Command "(Get-Content '%%f') -replace 'x\.xx\.xx\.xx', '!VERSION!' | Set-Content -Path '%%f' -Encoding UTF8"
    if !ERRORLEVEL! neq 0 (
        echo ERROR: Failed to update version in %%f
        exit /b 1
    )
)

REM Update date placeholders
for %%f in (!DATE_FILES!) do (
    echo Updating date in %%f
    powershell -Command "(Get-Content '%%f') -replace 'xxxx\.yy\.zz HH\.mm\.ss', '!DATE!' | Set-Content -Path '%%f' -Encoding UTF8"
    if !ERRORLEVEL! neq 0 (
        echo ERROR: Failed to update date in %%f
        exit /b 1
    )
)

exit /b 0

:BuildSolution
echo.
echo ************************************************************
echo Building solution: RELEASE MODE
echo Version: !VERSION! - Release: !DATE!
echo ************************************************************

REM Find MSBuild executable
call :FindMSBuild
if "!MSBUILD_PATH!"=="" (
    echo ERROR: MSBuild.exe not found!
    echo Please ensure Visual Studio 2022 is installed.
    exit /b 1
)

echo Using MSBuild: !MSBUILD_PATH!

REM Prepare published directory
if exist "Published\!VERSION!\" (
    echo Cleaning existing published directory...
    del "Published\!VERSION!\*.*" /f /q
)
if not exist "Published\!VERSION!" (
    echo Creating published directory...
    md "Published\!VERSION!"
)

REM Build solution
echo Building solution...
call "!MSBUILD_PATH!" /nologo /noautorsp /verbosity:minimal -p:Configuration=Release -target:Clean;Build DynamicsCrm.DevKit.AllInOne.sln
if !ERRORLEVEL! neq 0 (
    echo ERROR: Solution build failed!
    exit /b 1
)

echo Solution built successfully.
exit /b 0

:FindMSBuild
set "MSBUILD_PATH="

REM Check for Visual Studio 2022 Enterprise
if exist "C:\Program Files\Microsoft Visual Studio\2022\Enterprise\MSBuild\Current\Bin\MSBuild.exe" (
    set "MSBUILD_PATH=C:\Program Files\Microsoft Visual Studio\2022\Enterprise\MSBuild\Current\Bin\MSBuild.exe"
    goto :FindMSBuildEnd
)

REM Check for Visual Studio 2022 Professional
if exist "C:\Program Files\Microsoft Visual Studio\2022\Professional\MSBuild\Current\Bin\MSBuild.exe" (
    set "MSBUILD_PATH=C:\Program Files\Microsoft Visual Studio\2022\Professional\MSBuild\Current\Bin\MSBuild.exe"
    goto :FindMSBuildEnd
)

REM Check for Visual Studio 2022 Community
if exist "C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Current\Bin\MSBuild.exe" (
    set "MSBUILD_PATH=C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Current\Bin\MSBuild.exe"
    goto :FindMSBuildEnd
)

:FindMSBuildEnd
exit /b 0

:CreateNuGetPackages
echo.
echo ************************************************************
echo Creating NuGet packages...
echo ************************************************************

set "ORIGINAL_DIR=%CD%"

REM Create Analyzers NuGet package
echo Creating Analyzers NuGet package...
cd "DynamicsCrm.DevKit.Analyzers\Nuget"
call pack.bat
if !ERRORLEVEL! neq 0 (
    echo ERROR: Failed to create Analyzers NuGet package!
    cd "!ORIGINAL_DIR!"
    exit /b 1
)

REM Create CLI NuGet package
echo Creating CLI NuGet package...
cd "!ORIGINAL_DIR!"
cd "DynamicsCrm.DevKit.Cli\Nuget"
call pack.bat
if !ERRORLEVEL! neq 0 (
    echo ERROR: Failed to create CLI NuGet package!
    cd "!ORIGINAL_DIR!"
    exit /b 1
)

REM Create Tool NuGet package
echo Creating Tool NuGet package...
cd "!ORIGINAL_DIR!"
cd "DynamicsCrm.DevKit.Tool\Nuget"
call pack.bat
if !ERRORLEVEL! neq 0 (
    echo ERROR: Failed to create Tool NuGet package!
    cd "!ORIGINAL_DIR!"
    exit /b 1
)

cd "!ORIGINAL_DIR!"
echo All NuGet packages created successfully.
exit /b 0

:CopyVsixToPublished
echo.
echo Copying VSIX to published folder...

if not exist "DynamicsCrm.DevKit\bin\Release\DynamicsCrm.DevKit.vsix" (
    echo ERROR: VSIX file not found at DynamicsCrm.DevKit\bin\Release\DynamicsCrm.DevKit.vsix
    exit /b 1
)

copy "DynamicsCrm.DevKit\bin\Release\DynamicsCrm.DevKit.vsix" "Published\!VERSION!\DynamicsCrm.DevKit.!VERSION!.vsix"
if !ERRORLEVEL! neq 0 (
    echo ERROR: Failed to copy VSIX file!
    exit /b 1
)

echo VSIX copied successfully.
exit /b 0

:RevertPlaceholders
echo.
echo Reverting version and date placeholders...

REM Revert version placeholders
for %%f in (!VERSION_FILES!) do (
    echo Reverting version in %%f
    powershell -Command "(Get-Content '%%f') -replace '!VERSION!', 'x.xx.xx.xx' | Set-Content -Path '%%f' -Encoding UTF8"
    if !ERRORLEVEL! neq 0 (
        echo WARNING: Failed to revert version in %%f
    )
)

REM Revert date placeholders
for %%f in (!DATE_FILES!) do (
    echo Reverting date in %%f
    powershell -Command "(Get-Content '%%f') -replace [regex]::Escape('!DATE!'), 'xxxx.yy.zz HH.mm.ss' | Set-Content -Path '%%f' -Encoding UTF8"
    if !ERRORLEVEL! neq 0 (
        echo WARNING: Failed to revert date in %%f
    )
)

echo Placeholders reverted successfully.
exit /b 0

:Error
echo.
echo ************************************************************
echo ERROR: Build process failed!
echo ************************************************************
echo Attempting to revert placeholders...
call :RevertPlaceholders
exit /b 1

:End
endlocal