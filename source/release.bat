@echo off
echo ************************************************************
echo Building solutions in RELEASE mode ...
echo ************************************************************
set MsBuild=""
if exist "C:\Program Files (x86)\Microsoft Visual Studio\2017\Enterprise\MSBuild\15.0\Bin\MSBuild.exe" (
	set MsBuild="C:\Program Files (x86)\Microsoft Visual Studio\2017\Enterprise\MSBuild\15.0\Bin\MSBuild.exe"
)
if %MsBuild%=="" (
	echo msbuild.exe not found !!!
) else (
	del Published\1.2.1\*.* /f /q
	call %MsBuild% /nologo /noautorsp /verbosity:minimal /p:Configuration=Release -target:Clean;Build PL.DynamicsCrm.DevKit.sln
	call %MsBuild% /nologo /noautorsp /verbosity:minimal /p:Configuration=Release -target:Clean;Build PL.DynamicsCrm.DevKit.Analyzers.sln
	call %MsBuild% /nologo /noautorsp /verbosity:minimal /p:Configuration=Release -target:Clean;Build PL.DynamicsCrm.DevKit.CodeCoverageTool.sln
)
rem exit