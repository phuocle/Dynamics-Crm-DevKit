@echo off
set /p VERSION=<version.txt
echo ************************************************************
echo Building solution: DEPLOY RELEASE MODE - version: %VERSION%
echo ************************************************************
set MsBuild=""
if exist "C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\MSBuild\Current\Bin\MSBuild.exe" (
	set MsBuild="C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\MSBuild\Current\Bin\MSBuild.exe"
)
if %MsBuild%=="" (
	echo msbuild.exe not found !!!
) else (
	if exist  Published\%VERSION%\ (
		del Published\%VERSION%\*.* /f /q
	)

	call %MsBuild% /nologo /noautorsp /verbosity:minimal -p:Configuration=Release -target:Clean;Build DynamicsCrm.DevKit.sln
    call %MsBuild% /nologo /noautorsp /verbosity:minimal -p:Configuration=Release -target:Clean;Build DynamicsCrm.DevKit.Cli.sln
	call %MsBuild% /nologo /noautorsp /verbosity:minimal -p:Configuration=Release -target:Clean;Build DynamicsCrm.DevKit.Analyzers.sln

	cd DynamicsCrm.DevKit.Analyzers\Nuget
	call pack.bat

	cd ..\..
	cd DynamicsCrm.DevKit.Cli\Nuget
	call pack.bat

	cd ..\..
	cd DynamicsCrm.DevKit.Tool\Nuget
	call pack.bat

	cd ..\..
	copy DynamicsCrm.DevKit\Release\DynamicsCrm.DevKit.vsix Published\%VERSION%\DynamicsCrm.DevKit.%VERSION%.vsix
)
exit