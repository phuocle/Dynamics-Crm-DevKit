REM ---------------------------------------------------------------------
REM * Performs necessary clean-up pre-build for Experimental folders
REM * that can linger in the users local cache.
REM *
REM * This issue is discussed in detail here:
REM * https://developercommunity.visualstudio.com/content/problem/28405/getdeploymentpathfromvsixmanifest-fails.html
REM *
REM * The script attempts to circumvent this issue by explicitly
REM * cleaning this temporary folder every time if it finds it
REM ---------------------------------------------------------------------

set VS_PATH=Microsoft\VisualStudio

REM First check Local/AppData
cd %LOCALAPPDATA%\%VS_PATH%

for /f %%G in ('dir /b "*Exp"') do (
	echo Found %%G
	rmdir /S /Q %%G
)

REM Second check the main AppData path
cd %APPDATA%\%VS_PATH%

for /f %%G in ('dir /b "*Exp"') do (
	echo Found %%G
	rmdir /S /Q %%G
)