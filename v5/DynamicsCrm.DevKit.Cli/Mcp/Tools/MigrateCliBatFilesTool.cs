using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public static class MigrateCliBatFilesTool
    {
        private static readonly Dictionary<string, string> TypeToCommand = new(StringComparer.OrdinalIgnoreCase)
        {
            ["servers"]              = "server",
            ["generators"]           = "generator",
            ["webresources"]         = "webresource",
            ["plugins"]              = "plugin",
            ["workflows"]            = "workflow",
            ["dataproviders"]        = "dataprovider",
            ["proxytypes"]           = "proxytype",
            ["solutionpackagers"]    = "solution",
            ["downloadreports"]      = "downloadreport",
            ["uploadreports"]        = "uploadreport",
            ["downloadwebresources"] = "downloadwebresource",
            ["datasources"]          = "datasource",
        };

        private const string DevkitCheckBlock =
@"@echo off
REM Check if devkit is installed
where devkit >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo.
    echo ===============================================
    echo ERROR: DynamicsCrm.DevKit.Cli is not installed
    echo ===============================================
    echo.
    echo Please install the CLI tool first:
    echo.
    echo     dotnet tool install -g DynamicsCrm.DevKit.Cli
    echo.
    echo The command above has been COPIED to your clipboard.
    echo Just paste [Ctrl+V] and run it!
    echo.
    echo dotnet tool install -g DynamicsCrm.DevKit.Cli | clip
    pause
    exit /b 1
)

";

        [McpServerTool(Name = "migrate_bat_files", Idempotent = true, Destructive = false, ReadOnly = false),
        Description(
            "Migrate DynamicsCrm.DevKit v4 batch files (.bat) to v5 .NET global tool syntax. " +
            "WORKFLOW for AI agents: When a user asks to 'migrate CLI bat files', 'migrate from devkit packages to dotnet tool', " +
            "'migrate v4 to v5', or 'convert bat files to use devkit global tool': " +
            "Step 1: Call with dry_run=true to preview what will change. Present results to user. " +
            "Step 2: After user confirms, call again with dry_run=false to apply changes. " +
            "CONTEXT: DynamicsCrm.DevKit v4 used NuGet packages (DynamicsCrm.DevKit.Cli) with 'for /f' loops searching " +
            "packages folder for DynamicsCrm.DevKit.Cli.exe, using /arg:value syntax and /conn:\"ConnectionString\". " +
            "v5 uses 'devkit' .NET global tool (installed via 'dotnet tool install -g DynamicsCrm.DevKit.Cli') with --arg value syntax " +
            "and individual auth args (--auth, --url, --clientid, --clientsecret). " +
            "Conversions: (1) Removes 'for /f' loop searching NuGet packages. " +
            "(2) Converts connection string to --auth, --url, --clientid, --clientsecret. " +
            "(3) Converts /type:\"servers\" to 'devkit server', /type:\"generators\" to 'devkit generator', etc. " +
            "(4) Converts /arg:value to --arg value. (5) Adds 'where devkit' check block. " +
            "(6) Removes legacy setlocal, goto :break, version parsing, CoreTools detection. " +
            "Files already in v5 format are automatically skipped. " +
            "Type mapping: servers→server, generators→generator, webresources→webresource, plugins→plugin, " +
            "workflows→workflow, dataproviders→dataprovider, proxytypes→proxytype, solutionpackagers→solution, " +
            "downloadreports→downloadreport, uploadreports→uploadreport, downloadwebresources→downloadwebresource, datasources→datasource.")]
        public static string migrate_bat_files(
            [Description("The folder path containing .bat files to migrate. Typically the solution root folder.")] string folder_path,
            [Description("Whether to scan subfolders recursively. Default: true.")] bool recurse = true,
            [Description("If true, preview only (no files modified). If false, apply migration. Default: true. Always call with true first, then false after user confirms.")] bool dry_run = true)
        {
            return ProcessBatFiles(folder_path, recurse, dry_run);
        }

        private static string ProcessBatFiles(string folderPath, bool recurse, bool dryRun)
        {
            if (string.IsNullOrWhiteSpace(folderPath))
                return "Error: folder_path is required. Provide the path to the solution or project folder containing .bat files.";

            if (!Directory.Exists(folderPath))
                return $"Error: Folder '{folderPath}' does not exist.";

            var searchOption = recurse ? SearchOption.AllDirectories : SearchOption.TopDirectoryOnly;
            var batFiles = Directory.GetFiles(folderPath, "*.bat", searchOption);

            if (batFiles.Length == 0)
                return $"No .bat files found in '{folderPath}'" + (recurse ? " (recursive search)." : ".");

            var sb = new StringBuilder();
            var migratedCount = 0;
            var skippedAlreadyV5 = 0;
            var skippedNotV4 = 0;
            var errorCount = 0;

            sb.AppendLine(dryRun
                ? "## Scan Results: DynamicsCrm.DevKit v4 → v5 Bat File Migration"
                : "## Migration Results: DynamicsCrm.DevKit v4 → v5 Bat Files");
            sb.AppendLine();
            sb.AppendLine($"- **Folder**: `{folderPath}`");
            sb.AppendLine($"- **Recursive**: {recurse}");
            sb.AppendLine($"- **Total .bat files found**: {batFiles.Length}");
            sb.AppendLine();

            var migrationDetails = new List<MigrationDetail>();
            var alreadyV5Files = new List<string>();
            var errorDetails = new List<(string File, string Error)>();

            foreach (var file in batFiles)
            {
                try
                {
                    var content = File.ReadAllText(file, Encoding.UTF8);
                    var relativePath = Path.GetRelativePath(folderPath, file);

                    if (IsAlreadyV5(content))
                    {
                        skippedAlreadyV5++;
                        alreadyV5Files.Add(relativePath);
                        continue;
                    }

                    var result = ConvertV4ToV5(content);
                    if (result == null)
                    {
                        skippedNotV4++;
                        continue;
                    }

                    migratedCount++;
                    migrationDetails.Add(new MigrationDetail
                    {
                        RelativePath = relativePath,
                        Command = result.Command,
                        Profile = result.Profile,
                        OldConnectionType = result.OldConnectionType,
                        NewAuthArgs = result.NewAuthArgs
                    });

                    if (!dryRun)
                    {
                        File.WriteAllText(file, result.Content, new UTF8Encoding(false));
                    }
                }
                catch (Exception ex)
                {
                    errorCount++;
                    errorDetails.Add((Path.GetRelativePath(folderPath, file), ex.Message));
                }
            }

            if (migratedCount > 0)
            {
                sb.AppendLine(dryRun ? "### Files That Need Migration" : "### Migrated Files");
                sb.AppendLine();
                sb.AppendLine("| File | v5 Command | Profile | Auth |");
                sb.AppendLine("| --- | --- | --- | --- |");
                foreach (var detail in migrationDetails)
                {
                    var auth = string.IsNullOrEmpty(detail.OldConnectionType) ? "template" : detail.OldConnectionType;
                    sb.AppendLine($"| `{detail.RelativePath}` | `devkit {detail.Command}` | {detail.Profile} | {auth} |");
                }
                sb.AppendLine();
            }

            if (alreadyV5Files.Count > 0 && dryRun)
            {
                sb.AppendLine("### Already v5 Format (skipped)");
                sb.AppendLine();
                foreach (var file in alreadyV5Files)
                {
                    sb.AppendLine($"- `{file}`");
                }
                sb.AppendLine();
            }

            if (errorCount > 0)
            {
                sb.AppendLine("### Errors");
                sb.AppendLine();
                foreach (var (file, error) in errorDetails)
                {
                    sb.AppendLine($"- `{file}`: {error}");
                }
                sb.AppendLine();
            }

            sb.AppendLine("### Summary");
            sb.AppendLine();
            sb.AppendLine("| Status | Count |");
            sb.AppendLine("| --- | --- |");
            sb.AppendLine($"| {(dryRun ? "Need migration" : "Migrated")} | {migratedCount} |");
            sb.AppendLine($"| Already v5 (skipped) | {skippedAlreadyV5} |");
            sb.AppendLine($"| Not v4 CLI files (skipped) | {skippedNotV4} |");
            if (errorCount > 0)
                sb.AppendLine($"| Errors | {errorCount} |");
            sb.AppendLine($"| **Total** | **{batFiles.Length}** |");

            if (dryRun && migratedCount > 0)
            {
                sb.AppendLine();
                sb.AppendLine("### What Will Change");
                sb.AppendLine();
                sb.AppendLine("Each migrated file will be updated with:");
                sb.AppendLine("1. **Header**: A `where devkit` check block (verifies devkit CLI is installed, shows install command if missing)");
                sb.AppendLine("2. **Removed**: `for /f` loops searching NuGet packages folder for `DynamicsCrm.DevKit.Cli.exe`");
                sb.AppendLine("3. **Removed**: `set ConnectionString=...`, `set DynamicsCrmDevKitCli=...`, `setlocal enabledelayedexpansion`");
                sb.AppendLine("4. **Removed**: Version parsing, `goto :break`, CoreTools detection");
                sb.AppendLine("5. **Converted**: `\"%DynamicsCrmDevKitCli%\\tools\\DynamicsCrm.DevKit.Cli.exe\" /type:\"xxx\" /conn:\"...\" /json:\"...\"` → `devkit xxx --auth ... --json \"...\"`");
                sb.AppendLine();
                sb.AppendLine("> **Next step**: Call `migrate_v4_to_v5_bat_files` with the same folder_path to apply these changes.");
            }

            if (!dryRun && migratedCount > 0)
            {
                sb.AppendLine();
                sb.AppendLine("### Post-Migration Steps");
                sb.AppendLine();
                sb.AppendLine("1. Ensure `devkit` is installed globally: `dotnet tool install -g DynamicsCrm.DevKit.Cli`");
                sb.AppendLine("2. Verify with: `devkit --version`");
                sb.AppendLine("3. Test each migrated .bat file to confirm it works correctly");
                sb.AppendLine("4. If bat files contain `$CliConnectionArgs$` placeholder, update them with actual connection args");
                sb.AppendLine("5. The NuGet package `DynamicsCrm.DevKit.Cli` can now be removed from your project's packages.config or .csproj");
            }

            if (!dryRun && migratedCount == 0 && skippedAlreadyV5 > 0)
            {
                sb.AppendLine();
                sb.AppendLine("> All .bat files are already in v5 format. No migration needed.");
            }

            return sb.ToString();
        }

        private static bool IsAlreadyV5(string content)
        {
            return Regex.IsMatch(content, @"where\s+devkit", RegexOptions.IgnoreCase) ||
                   Regex.IsMatch(content, @"^devkit\s+", RegexOptions.Multiline);
        }

        private static ConversionResult ConvertV4ToV5(string content)
        {
            var lines = content.Split(new[] { "\r\n", "\n" }, StringSplitOptions.None);
            var newLines = new List<string>();
            var connectionString = "";
            var isV4File = false;
            var command = "";
            var profile = "";
            var oldConnectionType = "";
            var newAuthArgs = "";
            var hasOnlyUpdateAssembly = false;

            foreach (var line in lines)
            {
                if (Regex.IsMatch(line, @"for\s+/f.*DynamicsCrm\.DevKit\.Cli", RegexOptions.IgnoreCase))
                {
                    isV4File = true;
                    continue;
                }

                if (Regex.IsMatch(line, @"for\s+/f.*Microsoft\.CrmSdk\.CoreTools", RegexOptions.IgnoreCase))
                    continue;

                if (Regex.IsMatch(line, @"set\s+DynamicsCrmDevKitCli\s*=", RegexOptions.IgnoreCase))
                    continue;

                if (Regex.IsMatch(line, @"set\s+MicrosoftCrmSdkCoreTools\s*=", RegexOptions.IgnoreCase))
                    continue;

                if (Regex.IsMatch(line, @"goto\s+:break\d*", RegexOptions.IgnoreCase))
                    continue;

                if (Regex.IsMatch(line, @"^:break\d*\s*$"))
                    continue;

                if (Regex.IsMatch(line, @"^set\s+""str1=", RegexOptions.IgnoreCase)) continue;
                if (Regex.IsMatch(line, @"^set\s+""sstr=", RegexOptions.IgnoreCase)) continue;
                if (Regex.IsMatch(line, @"^set\s+/a\s+position=", RegexOptions.IgnoreCase)) continue;
                if (Regex.IsMatch(line, @"^set\s+""sst\d+=", RegexOptions.IgnoreCase)) continue;
                if (Regex.IsMatch(line, @"^if\s+""%sst\d+%""", RegexOptions.IgnoreCase)) continue;
                if (Regex.IsMatch(line, @"^set\s+/a\s+""index=", RegexOptions.IgnoreCase)) continue;
                if (Regex.IsMatch(line, @"^set\s+version=", RegexOptions.IgnoreCase)) continue;

                if (Regex.IsMatch(line, @"@echo\s+off\s*&\s*setlocal\s+enabledelayedexpansion", RegexOptions.IgnoreCase))
                    continue;

                if (Regex.IsMatch(line, @"^\s*setlocal\s+enabledelayedexpansion\s*$", RegexOptions.IgnoreCase))
                    continue;

                if (Regex.IsMatch(line, @"^\s*\)\s*$"))
                    continue;

                var connMatch = Regex.Match(line, @"set\s+ConnectionString\s*=\s*(.+)$", RegexOptions.IgnoreCase);
                if (connMatch.Success)
                {
                    connectionString = connMatch.Groups[1].Value.Trim();
                    isV4File = true;
                    var parsed = ParseConnectionString(connectionString.Trim('"', '\''));
                    oldConnectionType = parsed.AuthType;
                    continue;
                }

                if (Regex.IsMatch(line, @"""%DynamicsCrmDevKitCli%\\tools\\DynamicsCrm\.DevKit\.Cli\.exe""", RegexOptions.IgnoreCase))
                {
                    isV4File = true;

                    var typeMatch = Regex.Match(line, @"/type:\s*""?([^""\s]+)""?", RegexOptions.IgnoreCase);
                    var jsonMatch = Regex.Match(line, @"/json:\s*""([^""]+)""", RegexOptions.IgnoreCase);
                    var profileMatch = Regex.Match(line, @"/profile:\s*""([^""]+)""", RegexOptions.IgnoreCase);
                    var versionMatch = Regex.Match(line, @"/version:\s*""?([^""\s]+)""?", RegexOptions.IgnoreCase);
                    hasOnlyUpdateAssembly = Regex.IsMatch(line, @"/onlyupdateassembly", RegexOptions.IgnoreCase);

                    var type = typeMatch.Success ? typeMatch.Groups[1].Value.ToLower() : "";
                    var json = jsonMatch.Success ? jsonMatch.Groups[1].Value : "";
                    profile = profileMatch.Success ? profileMatch.Groups[1].Value : "";
                    var version = versionMatch.Success ? versionMatch.Groups[1].Value : "";

                    command = TypeToCommand.TryGetValue(type, out var cmd) ? cmd : "server";

                    var authArgs = BuildAuthArgs(connectionString);
                    newAuthArgs = authArgs;

                    var newCommand = $"devkit {command}";
                    if (!string.IsNullOrEmpty(authArgs))
                        newCommand += $" {authArgs}";
                    if (!string.IsNullOrEmpty(json))
                        newCommand += $" --json \"{json}\"";
                    if (!string.IsNullOrEmpty(profile))
                        newCommand += $" --profile \"{profile}\"";
                    if (!string.IsNullOrEmpty(version) && !version.Contains("%version%"))
                        newCommand += $" --version \"{version}\"";
                    if (hasOnlyUpdateAssembly)
                        newCommand += " --onlyupdateassembly";

                    newLines.Add(newCommand);
                    continue;
                }

                newLines.Add(line);
            }

            if (!isV4File)
                return null;

            newLines = newLines.Where(l => !Regex.IsMatch(l, @"^@echo\s+off", RegexOptions.IgnoreCase)).ToList();

            while (newLines.Count > 0 && string.IsNullOrWhiteSpace(newLines[0]))
                newLines.RemoveAt(0);

            var result = DevkitCheckBlock + string.Join("\r\n", newLines);

            return new ConversionResult
            {
                Content = result,
                Command = command,
                Profile = profile,
                OldConnectionType = oldConnectionType,
                NewAuthArgs = newAuthArgs
            };
        }

        private static string BuildAuthArgs(string connectionString)
        {
            if (string.IsNullOrWhiteSpace(connectionString))
                return "";

            if (connectionString.Contains("$ConnectionString$") || connectionString.Contains("$CliConnectionArgs$"))
                return "$CliConnectionArgs$";

            connectionString = connectionString.Trim('"', '\'');
            var conn = ParseConnectionString(connectionString);
            var args = new List<string>();

            if (!string.IsNullOrEmpty(conn.AuthType))
                args.Add($"--auth \"{conn.AuthType}\"");
            if (!string.IsNullOrEmpty(conn.Url))
                args.Add($"--url \"{conn.Url}\"");
            if (!string.IsNullOrEmpty(conn.ClientId))
                args.Add($"--clientid \"{conn.ClientId}\"");
            if (!string.IsNullOrEmpty(conn.ClientSecret))
                args.Add($"--clientsecret \"{conn.ClientSecret}\"");
            if (!string.IsNullOrEmpty(conn.Username))
                args.Add($"--username \"{conn.Username}\"");
            if (!string.IsNullOrEmpty(conn.Password))
                args.Add($"--password \"{conn.Password}\"");

            return string.Join(" ", args);
        }

        private static ConnectionParts ParseConnectionString(string connString)
        {
            var result = new ConnectionParts();
            var pairs = connString.Split(';');

            foreach (var pair in pairs)
            {
                var eqIndex = pair.IndexOf('=');
                if (eqIndex <= 0) continue;

                var key = pair.Substring(0, eqIndex).Trim().ToLower();
                var value = pair.Substring(eqIndex + 1).Trim();

                switch (key)
                {
                    case "authtype": result.AuthType = value; break;
                    case "url": result.Url = value; break;
                    case "clientid": result.ClientId = value; break;
                    case "clientsecret": result.ClientSecret = value; break;
                    case "username": result.Username = value; break;
                    case "password": result.Password = value; break;
                }
            }

            if (string.IsNullOrEmpty(result.AuthType) && !string.IsNullOrEmpty(result.ClientId) && !string.IsNullOrEmpty(result.ClientSecret))
                result.AuthType = "ClientSecret";

            return result;
        }

        private class ConversionResult
        {
            public string Content { get; set; }
            public string Command { get; set; }
            public string Profile { get; set; }
            public string OldConnectionType { get; set; }
            public string NewAuthArgs { get; set; }
        }

        private class ConnectionParts
        {
            public string AuthType { get; set; } = "";
            public string Url { get; set; } = "";
            public string ClientId { get; set; } = "";
            public string ClientSecret { get; set; } = "";
            public string Username { get; set; } = "";
            public string Password { get; set; } = "";
        }

        private class MigrationDetail
        {
            public string RelativePath { get; set; }
            public string Command { get; set; }
            public string Profile { get; set; }
            public string OldConnectionType { get; set; }
            public string NewAuthArgs { get; set; }
        }
    }
}
