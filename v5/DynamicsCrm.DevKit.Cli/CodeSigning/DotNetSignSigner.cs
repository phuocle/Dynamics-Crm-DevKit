namespace DynamicsCrm.DevKit.Cli.CodeSigning
{
    using System;
    using System.Threading.Tasks;

    /// <summary>
    /// Future implementation using unified 'dotnet sign' CLI tool.
    /// This tool can sign both DLLs and NuGet packages with a single command.
    /// Currently in beta - reserved for future when stable.
    /// 
    /// Install: dotnet tool install --global sign
    /// Usage: dotnet sign code azure-key-vault --file "file" ...
    /// </summary>
    public class DotNetSignSigner : ICodeSigner
    {
        public string Name => "DotNetSignSigner";

        public Task<bool> EnsureInstalledAsync()
        {
            // TODO: Implement when dotnet sign becomes stable
            throw new NotImplementedException("dotnet sign CLI is currently in beta. Use DotNetToolSigner instead.");
        }

        public Task<(bool ok, string error)> SignDllAsync(string file, string certificatePath, string certificatePassword = null)
        {
            // TODO: dotnet sign code azure-key-vault --file "file.dll" ...
            throw new NotImplementedException("dotnet sign CLI is currently in beta. Use DotNetToolSigner instead.");
        }

        public Task<(bool ok, string error)> SignNugetAsync(string file, string certificatePath, string certificatePassword = null)
        {
            // TODO: dotnet sign code azure-key-vault --file "package.nupkg" ...
            throw new NotImplementedException("dotnet sign CLI is currently in beta. Use DotNetToolSigner instead.");
        }
    }
}
