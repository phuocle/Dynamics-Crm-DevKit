@echo off
set /p VERSION=<version.txt
set /p DATE=<date.txt
powershell -Command "(gc DynamicsCrm.DevKit.Shared\Const.cs) -replace 'xxxx.yy.zz HH.mm.ss', (gc date.txt) | Out-File -encoding UTF8 DynamicsCrm.DevKit.Shared\Const.cs"
powershell -Command "(gc DynamicsCrm.DevKit.Shared\Const.cs) -replace 'x.xx.xx.xx', (gc version.txt) | Out-File -encoding UTF8 DynamicsCrm.DevKit.Shared\Const.cs"
rem powershell -Command "(gc DynamicsCrm.DevKit\source.extension.cs) -replace 'xxxx.yy.zz HH.mm.ss', (gc date.txt) | Out-File -encoding UTF8 DynamicsCrm.DevKit\source.extension.cs"
rem powershell -Command "(gc DynamicsCrm.DevKit\source.extension.cs) -replace 'x.xx.xx.xx', (gc version.txt) | Out-File -encoding UTF8 DynamicsCrm.DevKit\source.extension.cs"
rem powershell -Command "(gc DynamicsCrm.DevKit\source.extension.vsixmanifest) -replace 'xxxx.yy.zz HH.mm.ss', (gc date.txt) | Out-File -encoding UTF8 DynamicsCrm.DevKit\source.extension.vsixmanifest"
rem powershell -Command "(gc DynamicsCrm.DevKit\VSPackage.resx) -replace 'xxxx.yy.zz HH.mm.ss', (gc date.txt) | Out-File -encoding UTF8 DynamicsCrm.DevKit\VSPackage.resx"
rem powershell -Command "(gc ProjectTemplates\CSharp\16.PackageProjectTemplate\ReadMe.md) -replace 'xxxx.yy.zz HH.mm.ss', (gc date.txt) | Out-File -encoding UTF8 ProjectTemplates\CSharp\16.PackageProjectTemplate\ReadMe.md"
rem powershell -Command "(gc ProjectTemplates\CSharp\16.PackageProjectTemplate\ReadMe.md) -replace 'x.xx.xx.xx', (gc version.txt) | Out-File -encoding UTF8 ProjectTemplates\CSharp\16.PackageProjectTemplate\ReadMe.md"
rem powershell -Command "(gc DynamicsCrm.DevKit.Lib\Forms\FormLogin.xaml) -replace 'x.xx.xx.xx', (gc version.txt) | Out-File -encoding UTF8 DynamicsCrm.DevKit.Lib\Forms\FormLogin.xaml"
rem powershell -Command "(gc ..\README.md) -replace 'x.xx.xx.xx', (gc version.txt) | Out-File -encoding UTF8 ..\README.md"

echo ************************************************************
echo Building solution: RELEASE MODE - version: %VERSION% - release: %DATE%
echo ************************************************************

set MsBuild=""
if exist "C:\Program Files\Microsoft Visual Studio\2022\Enterprise\MSBuild\Current\Bin\MSBuild.exe" (
	set MsBuild="C:\Program Files\Microsoft Visual Studio\2022\Enterprise\MSBuild\Current\Bin\MSBuild.exe"
)
if %MsBuild%=="" (
	echo msbuild.exe not found !!!
) else (
    echo Building solutions ...
	if exist Published\%VERSION%\ (
		del Published\%VERSION%\*.* /f /q
	)
	if not exist Published\%VERSION% ( md Published\%VERSION% )
	call %MsBuild% /nologo /noautorsp /verbosity:minimal -p:Configuration=Release -target:Clean;Build DynamicsCrm.DevKit.sln

	powershell -Command "(gc DynamicsCrm.DevKit.Shared\Const.cs) -replace (gc date.txt), 'xxxx.yy.zz HH.mm.ss' | Out-File -encoding UTF8 DynamicsCrm.DevKit.Shared\Const.cs"
	powershell -Command "(gc DynamicsCrm.DevKit.Shared\Const.cs) -replace (gc version.txt), 'x.xx.xx.xx' | Out-File -encoding UTF8 DynamicsCrm.DevKit.Shared\Const.cs"
	rem powershell -Command "(gc DynamicsCrm.DevKit\source.extension.cs) -replace (gc date.txt), 'xxxx.yy.zz HH.mm.ss' | Out-File -encoding UTF8 DynamicsCrm.DevKit\source.extension.cs"
	rem powershell -Command "(gc DynamicsCrm.DevKit\source.extension.cs) -replace (gc version.txt), 'x.xx.xx.xx' | Out-File -encoding UTF8 DynamicsCrm.DevKit\source.extension.cs"
	rem powershell -Command "(gc DynamicsCrm.DevKit\source.extension.vsixmanifest) -replace (gc date.txt), 'xxxx.yy.zz HH.mm.ss' | Out-File DynamicsCrm.DevKit\source.extension.vsixmanifest"
	rem powershell -Command "(gc DynamicsCrm.DevKit\source.extension.vsixmanifest) -replace (gc version.txt), 'x.xx.xx.xx' | Out-File -encoding UTF8 DynamicsCrm.DevKit\source.extension.vsixmanifest"
	rem powershell -Command "(gc DynamicsCrm.DevKit\VSPackage.resx) -replace (gc date.txt), 'xxxx.yy.zz HH.mm.ss'  | Out-File -encoding UTF8 DynamicsCrm.DevKit\VSPackage.resx"
	rem powershell -Command "(gc ProjectTemplates\CSharp\16.PackageProjectTemplate\ReadMe.md) -replace (gc date.txt), 'xxxx.yy.zz HH.mm.ss' | Out-File -encoding UTF8 ProjectTemplates\CSharp\16.PackageProjectTemplate\ReadMe.md"
	rem powershell -Command "(gc ProjectTemplates\CSharp\16.PackageProjectTemplate\ReadMe.md) -replace (gc version.txt), 'x.xx.xx.xx' | Out-File -encoding UTF8 ProjectTemplates\CSharp\16.PackageProjectTemplate\ReadMe.md"
	rem powershell -Command "(gc DynamicsCrm.DevKit.Lib\Forms\FormLogin.xaml) -replace (gc version.txt), 'x.xx.xx.xx' | Out-File -encoding UTF8 DynamicsCrm.DevKit.Lib\Forms\FormLogin.xaml"
	rem powershell -Command "(gc ..\README.md) -replace (gc version.txt), 'x.xx.xx.xx' | Out-File -encoding UTF8 ..\README.md"

    echo ************************************************************
    echo NuGet pack ...
    echo ************************************************************

	cd DynamicsCrm.DevKit.Analyzers\Nuget
	call pack.bat

	cd ..\..
	cd DynamicsCrm.DevKit.Cli\Nuget
	call pack.bat

	cd ..\..
	cd DynamicsCrm.DevKit.Tool\Nuget
	call pack.bat

	cd ..\..
	copy DynamicsCrm.DevKit\bin\Release\DynamicsCrm.DevKit.vsix Published\%VERSION%\DynamicsCrm.DevKit.%VERSION%.vsix
)