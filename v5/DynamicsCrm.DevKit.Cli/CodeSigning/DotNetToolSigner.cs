namespace DynamicsCrm.DevKit.Cli.CodeSigning
{
    using System;
    using System.Diagnostics;
    using System.Threading.Tasks;
    using Spectre.Console;

    /// <summary>
    /// Code signer implementation using dotnet global tools:
    /// - AzureSignTool for DLL signing (replaces signtool.exe)
    /// - NuGetKeyVaultSignTool for NuGet package signing
    /// Both tools support local PFX files and Azure Key Vault.
    /// </summary>
    public class DotNetToolSigner : ICodeSigner
    {
        private const string AZURE_SIGN_TOOL = "AzureSignTool";
        private const string NUGET_KEY_VAULT_SIGN_TOOL = "NuGetKeyVaultSignTool";
        private const string TIMESTAMP_URL = "http://timestamp.digicert.com";

        private bool _dllToolChecked = false;
        private bool _dllToolInstalled = false;
        private bool _nugetToolChecked = false;
        private bool _nugetToolInstalled = false;

        public string Name => "DotNetToolSigner";

        public async Task<bool> EnsureInstalledAsync()
        {
            var dllOk = await EnsureDllToolInstalledAsync();
            var nugetOk = await EnsureNugetToolInstalledAsync();
            return dllOk && nugetOk;
        }

        private async Task<bool> EnsureDllToolInstalledAsync()
        {
            if (_dllToolChecked) return _dllToolInstalled;

            _dllToolChecked = true;

            if (await IsToolInstalledAsync(AZURE_SIGN_TOOL))
            {
                _dllToolInstalled = true;
                return true;
            }

            // Install with Spectre animation
            _dllToolInstalled = await InstallToolWithAnimationAsync(AZURE_SIGN_TOOL);
            return _dllToolInstalled;
        }

        private async Task<bool> EnsureNugetToolInstalledAsync()
        {
            if (_nugetToolChecked) return _nugetToolInstalled;

            _nugetToolChecked = true;

            if (await IsToolInstalledAsync(NUGET_KEY_VAULT_SIGN_TOOL))
            {
                _nugetToolInstalled = true;
                return true;
            }

            // Install with Spectre animation
            _nugetToolInstalled = await InstallToolWithAnimationAsync(NUGET_KEY_VAULT_SIGN_TOOL);
            return _nugetToolInstalled;
        }

        private static async Task<bool> IsToolInstalledAsync(string toolName)
        {
            try
            {
                var psi = new ProcessStartInfo
                {
                    FileName = toolName.ToLower(), // dotnet tools are installed as lowercase
                    Arguments = "--version",
                    UseShellExecute = false,
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    CreateNoWindow = true
                };

                using var process = Process.Start(psi);
                if (process == null) return false;

                await Task.Run(() => process.WaitForExit());
                return process.ExitCode == 0;
            }
            catch
            {
                return false;
            }
        }

        private static async Task<bool> InstallToolWithAnimationAsync(string toolName)
        {
            var success = false;

            await SpectreLog.WithStatusAsync($"[cyan]Installing {toolName}...[/]", async ctx =>
            {
                var psi = new ProcessStartInfo
                {
                    FileName = "dotnet",
                    Arguments = $"tool install --global {toolName}",
                    UseShellExecute = false,
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    CreateNoWindow = true
                };

                using var process = Process.Start(psi);
                if (process == null)
                {
                    success = false;
                    return;
                }

                await Task.Run(() => process.WaitForExit());
                success = process.ExitCode == 0;

                if (success)
                {
                    ctx.Status($"[green]✓ {toolName} installed successfully[/]");
                }
                else
                {
                    ctx.Status($"[red]✗ Failed to install {toolName}[/]");
                }
            });

            if (success)
            {
                SpectreLog.ActionWithLevel0("INSTALLED", toolName);
            }
            else
            {
                SpectreLog.ActionError($"Failed to install {toolName}. Please run: dotnet tool install --global {toolName}");
            }

            return success;
        }

        public async Task<(bool ok, string error)> SignDllAsync(string file, string certificatePath, string certificatePassword = null)
        {
            if (!await EnsureDllToolInstalledAsync())
            {
                return (false, $"{AZURE_SIGN_TOOL} is not installed and could not be auto-installed. Please run: dotnet tool install --global {AZURE_SIGN_TOOL}");
            }

            // Build arguments for AzureSignTool with local PFX
            var args = $"sign --file-digest sha256 " +
                       $"--timestamp-rfc3161 \"{TIMESTAMP_URL}\" " +
                       $"--certificate-path \"{certificatePath}\"";

            if (!string.IsNullOrEmpty(certificatePassword))
            {
                args += $" --certificate-password \"{certificatePassword}\"";
            }

            args += $" \"{file}\"";

            return await RunSignToolAsync(AZURE_SIGN_TOOL.ToLower(), args);
        }

        public async Task<(bool ok, string error)> SignNugetAsync(string file, string certificatePath, string certificatePassword = null)
        {
            if (!await EnsureNugetToolInstalledAsync())
            {
                return (false, $"{NUGET_KEY_VAULT_SIGN_TOOL} is not installed and could not be auto-installed. Please run: dotnet tool install --global {NUGET_KEY_VAULT_SIGN_TOOL}");
            }

            // Build arguments for NuGetKeyVaultSignTool with local PFX
            var args = $"sign " +
                       $"--file-digest sha256 " +
                       $"--timestamp-rfc3161 \"{TIMESTAMP_URL}\" " +
                       $"--certificate-path \"{certificatePath}\"";

            if (!string.IsNullOrEmpty(certificatePassword))
            {
                args += $" --certificate-password \"{certificatePassword}\"";
            }

            args += $" \"{file}\"";

            return await RunSignToolAsync(NUGET_KEY_VAULT_SIGN_TOOL.ToLower(), args);
        }

        private static async Task<(bool ok, string error)> RunSignToolAsync(string toolName, string arguments)
        {
            try
            {
                var psi = new ProcessStartInfo
                {
                    FileName = toolName,
                    Arguments = arguments,
                    UseShellExecute = false,
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    CreateNoWindow = true
                };

                using var process = new Process { StartInfo = psi };

                var output = new System.Text.StringBuilder();
                var error = new System.Text.StringBuilder();

                process.OutputDataReceived += (sender, args) =>
                {
                    if (!string.IsNullOrEmpty(args.Data)) output.AppendLine(args.Data);
                };
                process.ErrorDataReceived += (sender, args) =>
                {
                    if (!string.IsNullOrEmpty(args.Data)) error.AppendLine(args.Data);
                };

                process.Start();
                process.BeginOutputReadLine();
                process.BeginErrorReadLine();

                await Task.Run(() => process.WaitForExit());

                if (process.ExitCode == 0)
                {
                    return (true, string.Empty);
                }
                else
                {
                    var errorMsg = error.ToString().Trim();
                    if (string.IsNullOrEmpty(errorMsg))
                    {
                        errorMsg = output.ToString().Trim();
                    }

                    // Check for already signed error
                    if (errorMsg.Contains("already signed") || errorMsg.Contains("NU3001"))
                    {
                        return (false, "Package already contains a signature. Please remove the existing signature by 'Clean' and then 'Rebuild' project.");
                    }

                    return (false, errorMsg);
                }
            }
            catch (Exception ex)
            {
                return (false, $"Failed to run {toolName}: {ex.Message}");
            }
        }
    }
}
