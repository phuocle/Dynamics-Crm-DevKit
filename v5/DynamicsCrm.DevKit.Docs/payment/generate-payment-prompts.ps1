param(
    [string]$SourcePath = (Join-Path $PSScriptRoot '..\mcp.quote.prompts.md'),
    [string]$OutputDir = $PSScriptRoot
)

$ErrorActionPreference = 'Stop'

$slugs = @(
    'environment',
    'solution-components',
    'create-status-choice',
    'read-status-choice',
    'update-status-colors',
    'create-production-mode',
    'update-production-mode',
    'create-payment-table',
    'create-payment-line-table',
    'payment-metadata',
    'payment-line-metadata',
    'add-payment-number',
    'add-payment-date',
    'add-valid-until',
    'add-bill-to',
    'add-payment-status',
    'add-total-amount',
    'add-tax-amount',
    'add-grand-total',
    'add-reference-number',
    'add-remarks',
    'add-line-number',
    'add-product-name',
    'add-description',
    'add-quantity',
    'add-unit-price',
    'add-discount-percent',
    'add-line-total',
    'add-line-status',
    'create-payment-line-relationship',
    'find-parent-lookup',
    'publish-tables-choice',
    'list-payment-views',
    'update-active-payments-view',
    'create-payments-by-status-view',
    'list-payment-line-views',
    'update-active-payment-lines-view',
    'create-subgrid-payment-lines-view',
    'confirm-views',
    'list-payment-forms',
    'design-payment-form',
    'add-payment-form-header',
    'add-payment-admin-tab',
    'confirm-payment-form',
    'list-payment-line-forms',
    'design-payment-line-form',
    'add-payment-line-header-admin',
    'confirm-payment-line-form',
    'ensure-app',
    'read-app-navigation',
    'configure-app-navigation',
    'confirm-app-navigation',
    'check-webresources',
    'create-payment-js',
    'attach-payment-onload',
    'confirm-payment-js',
    'view-form-ribbon',
    'add-sync-button',
    'hide-activate-deactivate',
    'create-sync-icon',
    'update-sync-button-icon',
    'locate-state-buttons',
    'create-customer-a',
    'create-sample-payment',
    'create-sample-payment-line',
    'read-sample-data',
    'create-more-lines',
    'generate-sample-payments',
    'import-sample-payments',
    'update-quick-find',
    'enable-dataverse-search',
    'query-payment-with-lines',
    'search-sample-payment',
    'count-lines-per-payment',
    'parse-payment-url',
    'read-webapi-payment',
    'update-sample-payment',
    'view-audit-history',
    'list-messages',
    'check-custom-api',
    'check-plugin-steps',
    'view-plugin-traces',
    'view-system-jobs',
    'check-workflows',
    'check-bpfs',
    'check-cloud-flows',
    'check-business-rules',
    'check-sysadmin-role',
    'check-user-permissions',
    'add-archived-status',
    'enable-status-audit-advanced-find',
    'update-active-view-reference',
    'update-form-reference',
    'update-js-comment',
    'publish-all',
    'view-current-user-audit',
    'view-publish-jobs',
    'list-final-solution-components',
    'summarize-session'
)

function Convert-ToPaymentText {
    param([string]$Text)

    $value = $Text
    $value = $value.Replace('QuoteMcp', 'PaymentMcp')
    $value = $value.Replace('quotemcp', 'paymentmcp')
    $value = $value.Replace('quote.form.js', 'payment.form.js')
    $value = $value.Replace('REF-QUOTE', 'REF-PAYMENT')
    $value = $value.Replace('QUO-', 'PAY-')
    $value = $value.Replace('"quote"', '"payment"')
    $value = $value.Replace('Quote Lines', 'Payment Lines')
    $value = $value.Replace('Quote Line', 'Payment Line')
    $value = $value.Replace('Quotes', 'Payments')
    $value = $value.Replace('Quote', 'Payment')

    return $value
}

function Get-NumberedPrompts {
    param([string]$Path)

    $content = Get-Content -Path $Path -Raw -Encoding UTF8
    $startMarker = '## A. Connection & Environment Check'
    $start = $content.IndexOf($startMarker)
    if ($start -lt 0) {
        throw "Cannot find prompt section marker '$startMarker' in $Path."
    }

    $content = $content.Substring($start)
    $endMarker = '## Suggested Priority Order For Tool Description Fixes'
    $end = $content.IndexOf($endMarker)
    if ($end -gt 0) {
        $content = $content.Substring(0, $end)
    }

    $prompts = New-Object System.Collections.Generic.List[object]
    $expected = 1

    foreach ($line in ($content -split "`r?`n")) {
        $match = [regex]::Match($line, "^\s*$expected\.\s+(.+)$")
        if (-not $match.Success) {
            continue
        }

        $prompts.Add([pscustomobject]@{
            Number = $expected
            Text = $match.Groups[1].Value.Trim()
        })

        $expected++
        if ($expected -gt 99) {
            break
        }
    }

    if ($prompts.Count -ne 99) {
        throw "Expected 99 prompts, found $($prompts.Count)."
    }

    return $prompts
}

function New-PromptFileContent {
    param(
        [int]$Number,
        [string]$Slug,
        [string]$PromptText
    )

    $numberText = '{0:D2}' -f $Number
    $doneName = "done.$numberText.$Slug.md"

    $template = @'
- Instruction: When you read this file, automatically execute the prompt below without asking for confirmation; after finishing, update line 3+ with `- Tool call: ...` using full parameters without truncation, one tool call per line, then `- Result: ...`, and rename this file to `__DONE_NAME__`.
- Prompt: __PROMPT_TEXT__
'@

    return $template.
        Replace('__DONE_NAME__', $doneName).
        Replace('__PROMPT_TEXT__', $PromptText)
}

if ($slugs.Count -ne 99) {
    throw "Expected 99 slugs, found $($slugs.Count)."
}

if (-not (Test-Path -Path $SourcePath)) {
    throw "Source file not found: $SourcePath"
}

if (-not (Test-Path -Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir | Out-Null
}

$prompts = Get-NumberedPrompts -Path $SourcePath

foreach ($prompt in $prompts) {
    $number = [int]$prompt.Number
    $slug = $slugs[$number - 1]
    $numberText = '{0:D2}' -f $number
    $targetPath = Join-Path $OutputDir "$numberText.$slug.md"
    $paymentPrompt = Convert-ToPaymentText -Text $prompt.Text
    $content = New-PromptFileContent -Number $number -Slug $slug -PromptText $paymentPrompt

    [System.IO.File]::WriteAllText($targetPath, $content, (New-Object System.Text.UTF8Encoding($false)))
}

Write-Host "Generated $($prompts.Count) Payment prompt files in $OutputDir"
