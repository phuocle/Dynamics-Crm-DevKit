@echo off
setlocal enabledelayedexpansion

rem Load .env file from the same directory as this script
for /f "usebackq eol=# tokens=1,* delims==" %%a in ("%~dp0.env") do (
    set "%%a=%%b"
)

rem Build devkit mcp args
set ARGS=mcp
if defined DEVKIT_AUTH_TYPE set ARGS=!ARGS! --auth !DEVKIT_AUTH_TYPE!
if defined DEVKIT_URL set ARGS=!ARGS! --url !DEVKIT_URL!
if defined DEVKIT_CLIENT_ID set ARGS=!ARGS! --clientid !DEVKIT_CLIENT_ID!
if defined DEVKIT_CLIENT_SECRET set ARGS=!ARGS! --clientsecret !DEVKIT_CLIENT_SECRET!
if defined DEVKIT_PAC_PROFILE set ARGS=!ARGS! --pacprofile !DEVKIT_PAC_PROFILE!

devkit !ARGS!
