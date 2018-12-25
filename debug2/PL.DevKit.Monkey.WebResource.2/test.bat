@echo off
for /f "delims=" %%d in ('dir /a:d /o:-n /s ..\packages\Chutzpah.* /b') do (
    set Chutzpah=%%d
    goto break
)
:break
"%Chutzpah%\tools\chutzpah.console.exe" /nologo /vsoutput /coverage /coveragehtml coverage.html /path ..\..\..\PL.DevKit.Monkey.WebResource.2\test