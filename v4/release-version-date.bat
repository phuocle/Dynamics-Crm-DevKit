@echo off
setlocal enabledelayedexpansion

REM =====================================================================
REM DynamicsCrm DevKit Release Build Script
REM This script automates the release process including version updates,
REM building, packaging, and cleanup.
REM
REM Usage:
REM   release-version-date.bat [USE_CURRENT_DATE]
REM
REM Parameters:
REM   USE_CURRENT_DATE - Optional flag (true/false).
REM                      If true, uses current date/time instead of date.txt
REM                      If false or omitted, reads date from date.txt
REM =====================================================================

echo.
echo ************************************************************
echo DynamicsCrm DevKit Release Build Script
echo ************************************************************

REM Parse command line arguments
set "USE_CURRENT_DATE_FLAG=%~1"
if "!USE_CURRENT_DATE_FLAG!"=="" set "USE_CURRENT_DATE_FLAG=false"

REM Validate flag parameter
if /i "!USE_CURRENT_DATE_FLAG!"=="true" (
    set "USE_CURRENT_DATE=true"
) else if /i "!USE_CURRENT_DATE_FLAG!"=="false" (
    set "USE_CURRENT_DATE=false"
) else (
    echo ERROR: Invalid USE_CURRENT_DATE parameter. Use 'true' or 'false'
    echo Usage: release-version-date.bat [USE_CURRENT_DATE]
    goto :Error
)

echo Use current date: !USE_CURRENT_DATE!

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

set /p VERSION=<version.txt

REM Handle date based on flag
if /i "!USE_CURRENT_DATE!"=="true" (
    echo Using current date/time...
    call :GenerateCurrentDate
) else (
    echo Using date from date.txt...
    if not exist "date.txt" (
        echo ERROR: date.txt file not found!
        exit /b 1
    )
    set /p DATE=<date.txt
)

echo Version: !VERSION!
echo Date: !DATE!

REM Define file arrays for version and date updates
set "VERSION_FILES=DynamicsCrm.DevKit.Shared\Const.cs"
set "VERSION_FILES=!VERSION_FILES! DynamicsCrm.DevKit.Cli\docs\README.md"
set "VERSION_FILES=!VERSION_FILES! DynamicsCrm.DevKit\source.extension.cs"
set "VERSION_FILES=!VERSION_FILES! ProjectTemplates\CSharp\05.PackageProjectTemplate\ReadMe.md"
set "VERSION_FILES=!VERSION_FILES! ProjectTemplates\CSharp\12.ReportProjectTemplate\ReadMe.md"

set "DATE_FILES=DynamicsCrm.DevKit.Cli\docs\README.md"
set "DATE_FILES=!DATE_FILES! DynamicsCrm.DevKit.Shared\Const.cs"
set "DATE_FILES=!DATE_FILES! DynamicsCrm.DevKit\source.extension.vsixmanifest"
set "DATE_FILES=!DATE_FILES! DynamicsCrm.DevKit\VSPackage.resx"
set "DATE_FILES=!DATE_FILES! DynamicsCrm.DevKit\source.extension.cs"
set "DATE_FILES=!DATE_FILES! ProjectTemplates\CSharp\05.PackageProjectTemplate\ReadMe.md"
set "DATE_FILES=!DATE_FILES! ProjectTemplates\CSharp\12.ReportProjectTemplate\ReadMe.md"

exit /b 0

:GenerateCurrentDate
REM Generate current date in format: YYYY.MM.DD HH.mm.ss
for /f "tokens=1-4 delims=/ " %%a in ('date /t') do (
    set "CURRENT_DATE=%%d.%%b.%%c"
)
for /f "tokens=1-2 delims=: " %%a in ('time /t') do (
    set "CURRENT_TIME=%%a.%%b"
)

REM Get more precise date/time using PowerShell for better formatting
for /f "delims=" %%i in ('powershell -command "Get-Date -Format 'yyyy.MM.dd HH.mm.ss'"') do set "DATE=%%i"

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