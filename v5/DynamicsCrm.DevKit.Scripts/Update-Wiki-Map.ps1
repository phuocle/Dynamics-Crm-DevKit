[CmdletBinding()]
param(
    [string]$WikiPath
)

$ErrorActionPreference = 'Stop'

if ([string]::IsNullOrWhiteSpace($WikiPath)) {
    $scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
    $repoRoot = Split-Path -Parent $scriptPath
    $WikiPath = Join-Path $repoRoot 'DynamicsCrm.DevKit.Wiki'
}

$wikiRoot = [System.IO.Path]::GetFullPath($WikiPath)
if (-not (Test-Path -LiteralPath $wikiRoot -PathType Container)) {
    throw "Wiki folder not found: $wikiRoot"
}

$wikiMapPath = Join-Path $wikiRoot 'Wiki-Map.md'
$excludedPageSlugs = @(
    '_Sidebar',
    'Wiki-Map',
    'update.prompt'
)

$links = Get-ChildItem -LiteralPath $wikiRoot -Recurse -File -Filter '*.md' |
    ForEach-Object {
        $slug = [System.IO.Path]::GetFileNameWithoutExtension($_.Name)
        if ($excludedPageSlugs -notcontains $slug) {
            [pscustomobject]@{
                Slug = $slug
                Line = "* [$slug]($slug)"
            }
        }
    } |
    Sort-Object @{ Expression = { $_.Slug.ToLowerInvariant() } }, Slug

$duplicateSlugs = $links |
    Group-Object Slug -CaseSensitive |
    Where-Object { $_.Count -gt 1 } |
    Select-Object -ExpandProperty Name

if ($duplicateSlugs.Count -gt 0) {
    throw "Duplicate wiki page slugs found: $($duplicateSlugs -join ', ')"
}

$content = ($links | Select-Object -ExpandProperty Line) -join [Environment]::NewLine
$content = $content + [Environment]::NewLine

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($wikiMapPath, $content, $utf8NoBom)

Write-Host "Updated $wikiMapPath with $($links.Count) links."
