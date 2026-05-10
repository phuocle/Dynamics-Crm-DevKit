param (
    [string]$Version,
    [string]$ManifestPath,
    [string]$McpConfigPath,
    [string]$ServerName = "devkit",
    [int]$TimeoutSeconds = 60
)

$ErrorActionPreference = "Stop"

$ProjectRoot = (Get-Item $PSScriptRoot).Parent.FullName
$ReleaseConfigPath = Join-Path $PSScriptRoot "DevKit.ReleaseConfig.json"

if ([string]::IsNullOrWhiteSpace($Version)) {
    $releaseConfig = Get-Content $ReleaseConfigPath -Raw | ConvertFrom-Json
    $Version = $releaseConfig.version
}

if ([string]::IsNullOrWhiteSpace($ManifestPath)) {
    $ManifestPath = Join-Path $ProjectRoot "Published\$Version\DynamicsCrm.DevKit.Cli.$Version.build-manifest.json"
}

if ([string]::IsNullOrWhiteSpace($McpConfigPath)) {
    $McpConfigPath = Join-Path $ProjectRoot ".mcp.json"
}

if (-not (Test-Path $ManifestPath)) {
    throw "Build manifest not found: $ManifestPath"
}

if (-not (Test-Path $McpConfigPath)) {
    throw "MCP config not found: $McpConfigPath"
}

function ConvertTo-ArgumentString {
    param ([object[]]$Arguments)

    return ($Arguments | ForEach-Object {
        $arg = [string]$_
        if ($arg -match '[\s"]') {
            '"' + ($arg -replace '"', '\"') + '"'
        }
        else {
            $arg
        }
    }) -join " "
}

function Send-McpMessage {
    param (
        [System.Diagnostics.Process]$Process,
        [hashtable]$Message
    )

    $json = $Message | ConvertTo-Json -Compress -Depth 20
    $Process.StandardInput.WriteLine($json)
    $Process.StandardInput.Flush()
}

$manifest = Get-Content $ManifestPath -Raw | ConvertFrom-Json
$mcpConfig = Get-Content $McpConfigPath -Raw | ConvertFrom-Json
$server = $mcpConfig.mcpServers.$ServerName

if ($null -eq $server) {
    $available = ($mcpConfig.mcpServers.PSObject.Properties.Name -join ", ")
    throw "MCP server '$ServerName' not found in $McpConfigPath. Available: $available"
}

$psi = New-Object System.Diagnostics.ProcessStartInfo
$psi.FileName = [string]$server.command
$psi.Arguments = ConvertTo-ArgumentString $server.args
$psi.WorkingDirectory = $ProjectRoot
$psi.UseShellExecute = $false
$psi.RedirectStandardInput = $true
$psi.RedirectStandardOutput = $true
$psi.RedirectStandardError = $true
$psi.CreateNoWindow = $true

if ($server.env) {
    foreach ($property in $server.env.PSObject.Properties) {
        $psi.EnvironmentVariables[$property.Name] = [string]$property.Value
    }
}

$process = New-Object System.Diagnostics.Process
$process.StartInfo = $psi

$runtime = $null
$stderrTask = $null

try {
    [void]$process.Start()
    $stderrTask = $process.StandardError.ReadToEndAsync()

    Send-McpMessage $process @{
        jsonrpc = "2.0"
        id = 1
        method = "initialize"
        params = @{
            protocolVersion = "2025-06-18"
            capabilities = @{}
            clientInfo = @{
                name = "devkit-runtime-probe"
                version = "1.0.0"
            }
        }
    }

    $deadline = (Get-Date).AddSeconds($TimeoutSeconds)
    $readTask = $process.StandardOutput.ReadLineAsync()

    while ((Get-Date) -lt $deadline) {
        if ($process.HasExited) {
            break
        }

        if (-not $readTask.Wait(250)) {
            continue
        }

        $line = $readTask.Result
        if ($null -eq $line) {
            break
        }

        if ([string]::IsNullOrWhiteSpace($line)) {
            $readTask = $process.StandardOutput.ReadLineAsync()
            continue
        }

        $message = $line | ConvertFrom-Json

        if ($message.id -eq 1) {
            Send-McpMessage $process @{
                jsonrpc = "2.0"
                method = "notifications/initialized"
                params = @{}
            }

            Send-McpMessage $process @{
                jsonrpc = "2.0"
                id = 2
                method = "tools/call"
                params = @{
                    name = "whoami"
                    arguments = @{
                        include_token = $false
                    }
                }
            }
        }
        elseif ($message.id -eq 2) {
            if ($message.error) {
                throw "MCP whoami failed: $($message.error | ConvertTo-Json -Compress -Depth 10)"
            }

            $runtime = $message.result.structuredContent.devkit
            break
        }

        $readTask = $process.StandardOutput.ReadLineAsync()
    }
}
finally {
    if ($process -and -not $process.HasExited) {
        $process.Kill()
        $process.WaitForExit()
    }
}

if ($null -eq $runtime) {
    $stderr = if ($stderrTask) { $stderrTask.Result } else { "" }
    throw "MCP runtime probe timed out or returned no devkit runtime info. Stderr: $stderr"
}

$errors = @()
if ($runtime.version -ne $manifest.version) {
    $errors += "Version mismatch. Runtime=$($runtime.version), Manifest=$($manifest.version)"
}

if ($runtime.build -ne $manifest.buildDate) {
    $errors += "Build date mismatch. Runtime=$($runtime.build), Manifest=$($manifest.buildDate)"
}

if ($runtime.assemblySha256 -ne $manifest.installedAssemblySha256) {
    $errors += "Assembly SHA mismatch. Runtime=$($runtime.assemblySha256), Manifest=$($manifest.installedAssemblySha256)"
}

if ($runtime.assemblyPath -ne $manifest.installedAssemblyPath) {
    $errors += "Assembly path mismatch. Runtime=$($runtime.assemblyPath), Manifest=$($manifest.installedAssemblyPath)"
}

if ($errors.Count -gt 0) {
    $errors | ForEach-Object { Write-Host $_ -ForegroundColor Red }
    throw "MCP runtime verification failed."
}

Write-Host "MCP runtime verification OK." -ForegroundColor Green
Write-Host "Version:       $($runtime.version)" -ForegroundColor Cyan
Write-Host "Build:         $($runtime.build)" -ForegroundColor Cyan
Write-Host "ProcessId:     $($runtime.processId)" -ForegroundColor Cyan
Write-Host "ProcessStart:  $($runtime.processStartTime)" -ForegroundColor Cyan
Write-Host "AssemblyPath:  $($runtime.assemblyPath)" -ForegroundColor Cyan
Write-Host "AssemblySHA:   $($runtime.assemblySha256)" -ForegroundColor Cyan
