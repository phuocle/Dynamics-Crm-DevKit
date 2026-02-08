namespace DynamicsCrm.DevKit.Cli.CodeSigning
{
    using System.Threading.Tasks;

    /// <summary>
    /// Interface for code signing operations.
    /// Abstracts the signing implementation to support different signing methods:
    /// - DotNetToolSigner: Uses AzureSignTool + NuGetKeyVaultSignTool
    /// - DotNetSignSigner: Uses unified dotnet sign CLI (future)
    /// </summary>
    public interface ICodeSigner
    {
        /// <summary>
        /// Name of the signer implementation for logging purposes.
        /// </summary>
        string Name { get; }

        /// <summary>
        /// Ensures required signing tools are installed.
        /// Will auto-install with CLI animation if not present.
        /// </summary>
        /// <returns>True if tools are available, false otherwise.</returns>
        Task<bool> EnsureInstalledAsync();

        /// <summary>
        /// Sign a DLL assembly using Authenticode signing.
        /// </summary>
        /// <param name="file">Path to the DLL file</param>
        /// <param name="certificatePath">Path to PFX certificate</param>
        /// <param name="certificatePassword">Password for the PFX (optional)</param>
        /// <returns>Tuple of (success, error message)</returns>
        Task<(bool ok, string error)> SignDllAsync(string file, string certificatePath, string certificatePassword = null);

        /// <summary>
        /// Sign a NuGet package.
        /// </summary>
        /// <param name="file">Path to the .nupkg file</param>
        /// <param name="certificatePath">Path to PFX certificate</param>
        /// <param name="certificatePassword">Password for the PFX (optional)</param>
        /// <returns>Tuple of (success, error message)</returns>
        Task<(bool ok, string error)> SignNugetAsync(string file, string certificatePath, string certificatePassword = null);
    }
}
