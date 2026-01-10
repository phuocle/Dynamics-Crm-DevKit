# CheckLinks.ps1
# Scans for URLs in devkit.d.ts and devkitts.d.ts (located in same directory)
# Checks status of each URL.
# Reports results to console.
# Saves dead links (non-200) to DeadLinks.txt.

$scriptPath = $PSScriptRoot
$targetFiles = @("devkit.d.ts", "devkitts.d.ts")
$deadLinksFile = Join-Path $scriptPath "DeadLinks.txt"

# Clear previous report
if (Test-Path $deadLinksFile) {
    Remove-Item $deadLinksFile
}

$urls = @()

Write-Host "Scanning files in $scriptPath..."

foreach ($fileName in $targetFiles) {
    $filePath = Join-Path $scriptPath $fileName
    if (Test-Path $filePath) {
        Write-Host "Reading $fileName..."
        $content = Get-Content $filePath -Raw
        # Regex to find URLs (http/https)
        # Matches until whitespace, newline, quote, or parenthesis/bracket end
        $matches = [Regex]::Matches($content, "https?://[^ \n\r""')*]+")
        foreach ($match in $matches) {
            $urls += $match.Value
        }
    } else {
        Write-Host "Warning: File $fileName not found in $scriptPath" -ForegroundColor Yellow
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
    
    # Progress indicator
    # Write-Progress -Activity "Checking Links" -Status "$checkedCount / $totalUrls" -PercentComplete (($checkedCount / $totalUrls) * 100)

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
            # Treat non-200 as potential issue? User asked for 'dead' links. 
            # Often 403/404/500 are 'dead'. 301/302 are redirects (usually HttpWebRequest follows them automatically unless AllowAutoRedirect=false).
            # If we get here with !200, it's likely a final status.
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
    if (Test-Path $deadLinksFile) { Remove-Item $deadLinksFile } # Clean up if empty? Or keep? User said "if there are dead links report save". Probably don't save if 0.
}
