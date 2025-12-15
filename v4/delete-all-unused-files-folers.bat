@echo off
REM ============================================================
REM   DynamicsCrm.DevKit - Clean All Build Artifacts
REM   This batch file calls PowerShell script for better handling
REM ============================================================

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0Clean-Repository.ps1"
pause