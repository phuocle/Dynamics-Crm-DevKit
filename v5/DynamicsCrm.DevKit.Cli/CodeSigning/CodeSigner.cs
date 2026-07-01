namespace DynamicsCrm.DevKit.Cli.CodeSigning
{
    using DynamicsCrm.DevKit.Shared;
    using DynamicsCrm.DevKit.Shared.Models;
    using System;
    using System.Diagnostics;
    using System.Security.Cryptography.X509Certificates;
    using System.Threading.Tasks;

    /// <summary>
    /// Code signer using Microsoft Sign CLI tool.
    /// - Supports local PFX files for Authenticode signing
    /// - Can sign DLLs and NuGet packages
    /// - Cross-platform (no Windows SDK required)
    /// - Auto-installs if not present (tries stable first, then prerelease)
    /// 
    /// Install manually: dotnet tool install --global sign
    /// Or prerelease:    dotnet tool install --global sign --prerelease
    /// </summary>
    public static class CodeSigner
    {
        private const string SIGN_TOOL = "sign";
        private const string TIMESTAMP_URL = "http://timestamp.digicert.com";

        private static bool _toolChecked = false;
        private static bool _toolInstalled = false;

        /// <summary>
        /// Sign a DLL file with a PFX certificate.
        /// Auto-installs sign tool if not present.
        /// </summary>
        public static async Task<(bool ok, string error)> SignDllAsync(string dllFile, string pfxPath, string pfxPassword)
        {
            var (installed, installError) = await EnsureToolInstalledAsync();
            if (!installed)
            {
                return (false, installError);
            }

            string thumbprint;
            try
            {
                thumbprint = GetThumbprintFromPfx(pfxPath, pfxPassword);
            }
            catch (Exception ex)
            {
                return (false, ex.Message);
            }

            // sign code certificate-store -cfp <thumbprint> -cf <pfx> -p <password> -t <timestamp> <file>
            var args = $"code certificate-store " +
                       $"-cfp \"{thumbprint}\" " +
                       $"-cf \"{pfxPath}\" " +
                       $"-t \"{TIMESTAMP_URL}\"";

            if (!string.IsNullOrEmpty(pfxPassword))
            {
                args += $" -p \"{pfxPassword}\"";
            }

            args += $" \"{dllFile}\"";

            return await RunAsync(args);
        }

        /// <summary>
        /// Sign a NuGet package with a PFX certificate.
        /// Auto-installs sign tool if not present.
        /// </summary>
        public static async Task<(bool ok, string error)> SignNugetAsync(string nupkgFile, string pfxPath, string pfxPassword)
        {
            // Same implementation as DLL - sign tool handles both
            return await SignDllAsync(nupkgFile, pfxPath, pfxPassword);
        }

        /// <summary>
        /// Ensure the sign tool is installed. 
        /// Tries stable version first, then prerelease if stable not available.
        /// </summary>
        private static async Task<(bool ok, string error)> EnsureToolInstalledAsync()
        {
            if (_toolChecked && _toolInstalled)
            {
                return (true, string.Empty);
            }

            _toolChecked = true;

            // Check if already installed
            if (await IsToolInstalledAsync())
            {
                _toolInstalled = true;
                return (true, string.Empty);
            }

            // Try to install stable version first
            SpectreLog.ActionWithLevel1(CliAction.INSTALLING, "sign", "(Microsoft Sign CLI - stable)");
            var stableInstalled = await TryInstallToolAsync("dotnet tool install --global sign");
            if (stableInstalled)
            {
                _toolInstalled = true;
                SpectreLog.ActionWithLevel1(CliAction.INSTALLED, "sign", "(stable)");
                return (true, string.Empty);
            }

            // If stable fails, try prerelease
            SpectreLog.ActionWithLevel1(CliAction.INSTALLING, "sign", "(Microsoft Sign CLI - prerelease)");
            var prereleaseInstalled = await TryInstallToolAsync("dotnet tool install --global sign --prerelease");
            if (prereleaseInstalled)
            {
                _toolInstalled = true;
                SpectreLog.ActionWithLevel1(CliAction.INSTALLED, "sign", "(prerelease)");
                return (true, string.Empty);
            }

            return (false, "Failed to install sign tool. Please run manually: dotnet tool install --global sign --prerelease");
        }

        private static async Task<bool> TryInstallToolAsync(string command)
        {
            try
            {
                var parts = command.Split(new[] { ' ' }, 2);
                var psi = new ProcessStartInfo
                {
                    FileName = parts[0],
                    Arguments = parts.Length > 1 ? parts[1] : "",
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

        private static async Task<bool> IsToolInstalledAsync()
        {
            try
            {
                var psi = new ProcessStartInfo
                {
                    FileName = SIGN_TOOL,
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

        /// <summary>
        /// Get the SHA-256 fingerprint from a PFX certificate file.
        /// Sign tool requires SHA-256, SHA-384, or SHA-512 (not SHA-1 Thumbprint).
        /// </summary>
        private static string GetThumbprintFromPfx(string pfxPath, string password)
        {
            try
            {
#pragma warning disable SYSLIB0057
                using var cert = new X509Certificate2(pfxPath, password, X509KeyStorageFlags.EphemeralKeySet);
#pragma warning restore SYSLIB0057
                // Compute SHA-256 fingerprint (sign tool doesn't accept SHA-1 thumbprint)
                using var sha256 = System.Security.Cryptography.SHA256.Create();
                var certBytes = cert.RawData;
                var hashBytes = sha256.ComputeHash(certBytes);
                return BitConverter.ToString(hashBytes).Replace("-", "");
            }
            catch (Exception ex)
            {
                throw new Exception($"Failed to read certificate from {pfxPath}: {ex.Message}", ex);
            }
        }

        private static async Task<(bool ok, string error)> RunAsync(string arguments)
        {
            try
            {
                var psi = new ProcessStartInfo
                {
                    FileName = SIGN_TOOL,
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
                        return (false, "File already signed. Please 'Clean' and 'Rebuild' before deploying.");
                    }

                    return (false, errorMsg);
                }
            }
            catch (Exception ex)
            {
                return (false, $"Failed to run sign tool: {ex.Message}");
            }
        }
    }
}
