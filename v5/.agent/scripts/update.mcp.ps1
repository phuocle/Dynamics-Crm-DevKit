# Script: update.mcp.ps1
# Update mcp_config.json for dynamicscrm-devkit to point to DevKit v4
# After running, restart Antigravity for MCP to reconnect.

$mcpConfig = Join-Path $env:USERPROFILE ".gemini\antigravity\mcp_config.json"
$json = Get-Content $mcpConfig -Raw -Encoding UTF8 | ConvertFrom-Json

$devkit = $json.mcpServers."dynamicscrm-devkit"
$devkit.env.DEVKIT_URL = "https://dynamics-crm-devkit-v4.crm.dynamics.com"
$devkit.env.DEVKIT_CLIENT_ID = "1a60a5c2-d04c-4b26-8f86-9d6ce0616799"
$devkit.env.DEVKIT_CLIENT_SECRET = "4Y11hDyKJYQTqXC9cRDXnoJ2DytZDs/jYI1byYwKli57mRfjHcCPu6Qx5sxgtCWQ"
$devkit.disabled = $false

$appMaker = $json.mcpServers."AppMaker"
$appMaker.args[1] = "https://dynamics-crm-devkit-v4.crm.dynamics.com"
$appMaker.disabled = $false

$jsonString = $json | ConvertTo-Json -Depth 10
[System.IO.File]::WriteAllText($mcpConfig, $jsonString)

# Reformat JSON with prettier to prevent PowerShell from corrupting format
npx prettier --write $mcpConfig

Write-Host "Done! MCP -> DevKit v4. Format fixed. Restart Antigravity." -ForegroundColor Green
