@echo off
..\packages\ReportGenerator.4.0.12\tools\net47\ReportGenerator.exe "-reports:bin\Debug\coverage.xml" "-targetdir:bin\Debug\GeneratorReport" -reporttypes:Badges;Cobertura;HtmlInline_AzurePipelines;TextSummary
exit