# CheckLinksDevKitTypes.ps1
# Scans for URLs in devkit.d.ts (JS) and devkit.d.ts (TS) 
# Checks status of each URL.
# Reports results to console.
# Saves dead links (non-200) to DeadLinks.txt.

$scriptPath = $PSScriptRoot
# Define paths relative to the Scripts folder
$jsDefPath = Join-Path $scriptPath "..\DynamicsCrm.DevKit.Shared\Resources\js\devkit.d.ts"
$tsDefPath = Join-Path $scriptPath "..\DynamicsCrm.DevKit.Shared\Resources\ts\devkit.d.ts"

$targetFiles = @($jsDefPath, $tsDefPath)
$deadLinksFile = Join-Path $scriptPath "DeadLinks.txt"

# Clear previous report
if (Test-Path $deadLinksFile) {
    Remove-Item $deadLinksFile
}

$urls = @()

foreach ($filePath in $targetFiles) {
    $resolvedPath = $filePath
    if (Test-Path $resolvedPath) {
        Write-Host "Reading $resolvedPath..."
        $content = Get-Content $resolvedPath -Raw
        # Regex to find URLs (http/https)
        # Matches until whitespace, newline, quote, or parenthesis/bracket end
        $matches = [Regex]::Matches($content, "https?://[^ \n\r""')*]+")
        foreach ($match in $matches) {
            $urls += $match.Value
        }
    } else {
        Write-Host "Warning: File $resolvedPath not found" -ForegroundColor Yellow
    }
}

$uniqueUrls = $urls | Sort-Object -Unique
$totalUrls = $uniqueUrls.Count
Write-Host "Found $totalUrls unique URLs."
Write-Host "Checking link status..."

$deadLinks = @()
$checkedCount = 0

foreach ($url in $uniqueUrls) {
    $checkedCount++
    # Clean URL of potential trailing punctuation captured by loose regex
    $cleanUrl = $url.TrimEnd('.', ',', ';', ':', ')')
    
    try {
        $request = [System.Net.HttpWebRequest]::Create($cleanUrl)
        $request.Method = "HEAD"
        $request.Timeout = 5000 # 5 seconds timeout
        $request.UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
        
        $response = $request.GetResponse()
        $statusCode = [int]$response.StatusCode
        
        if ($statusCode -eq 200) {
            Write-Host "[$statusCode] $cleanUrl" -ForegroundColor Green
        } else {
            Write-Host "[$statusCode] $cleanUrl" -ForegroundColor Yellow
            $deadLinks += "[$statusCode] $cleanUrl"
            Add-Content -Path $deadLinksFile -Value "[$statusCode] $cleanUrl"
        }
        $response.Close()
    }
    catch {
        # Exception handling for connection failures, 404s (which throw WebException), etc.
        if ($_.Exception.Response) {
             $statusCode = [int]$_.Exception.Response.StatusCode
             Write-Host "[$statusCode] $cleanUrl" -ForegroundColor Red
             $deadLinks += "[$statusCode] $cleanUrl"
             Add-Content -Path $deadLinksFile -Value "[$statusCode] $cleanUrl"
        } else {
             Write-Host "[Dead] $cleanUrl - $($_.Exception.Message)" -ForegroundColor Red
             $deadLinks += "[Dead] $cleanUrl - $($_.Exception.Message)"
             Add-Content -Path $deadLinksFile -Value "[Dead] $cleanUrl - $($_.Exception.Message)"
        }
    }
}

Write-Host "`nScan Complete."
Write-Host "Total Scanned: $totalUrls"
Write-Host "Dead Links Found: $($deadLinks.Count)"

if ($deadLinks.Count -gt 0) {
    Write-Host "Dead links have been saved to: $deadLinksFile" -ForegroundColor Red
    Write-Host "`n--- Dead Links Summary ---"
    $deadLinks | ForEach-Object { Write-Host $_ -ForegroundColor Red }
} else {
    Write-Host "No dead links found!" -ForegroundColor Green
    if (Test-Path $deadLinksFile) { Remove-Item $deadLinksFile }
}
