using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.IO;
using System.IO.Compression;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Plugin
{
    internal static class PluginAssemblyDownloadHelper
    {
        internal static byte[] ReadAssembly(IOrganizationService orgService, Guid assemblyId, string assemblyName)
        {
            var assembly = orgService.Retrieve("pluginassembly", assemblyId, new ColumnSet("content", "packageid", "path"));
            var content = assembly.GetAttributeValue<string>("content");
            if (!string.IsNullOrWhiteSpace(content))
                return DecodeContent(content, $"Plugin assembly '{assemblyName}'");

            var package = assembly.GetAttributeValue<EntityReference>("packageid");
            if (package == null)
                throw new InvalidOperationException($"Plugin assembly '{assemblyName}' has no downloadable content in Dataverse. Disk, external and system assemblies may not expose their DLL.");

            var packageData = ReadPackage(orgService, package.Id);
            using var stream = new MemoryStream(packageData, writable: false);
            using var archive = new ZipArchive(stream, ZipArchiveMode.Read);
            var fileName = assemblyName.EndsWith(".dll", StringComparison.OrdinalIgnoreCase) ? assemblyName : assemblyName + ".dll";
            var candidates = archive.Entries.Where(e => string.Equals(e.Name, fileName, StringComparison.OrdinalIgnoreCase)).ToList();
            var assemblyPath = assembly.GetAttributeValue<string>("path")?.Replace('\\', '/');
            var exactPath = candidates.Where(e => string.Equals(e.FullName, assemblyPath, StringComparison.OrdinalIgnoreCase)).ToList();
            if (exactPath.Count == 1)
                candidates = exactPath;
            if (candidates.Count != 1)
                throw new InvalidOperationException($"Plugin package '{package.Id}' must contain exactly one matching DLL for '{assemblyName}' (found {candidates.Count}). No file written.");

            // Copy only the selected DLL's bytes; never extract archive paths to disk.
            using var dllStream = candidates[0].Open();
            using var output = new MemoryStream();
            dllStream.CopyTo(output);
            if (output.Length == 0)
                throw new InvalidOperationException($"Plugin assembly '{assemblyName}' has empty DLL content in its package.");
            return output.ToArray();
        }

        internal static byte[] ReadPackage(IOrganizationService orgService, Guid packageId)
        {
            var row = orgService.Retrieve("pluginpackage", packageId, new ColumnSet("content", "package", "fileid"));
            var content = row.GetAttributeValue<string>("content");
            byte[] data;
            if (!string.IsNullOrWhiteSpace(content))
                data = DecodeContent(content, $"Plugin package '{packageId}'");
            else if (row.GetAttributeValue<Guid>("package") != Guid.Empty)
                data = FileColumnTransferHelper.Download(orgService, new EntityReference("pluginpackage", packageId), "package").Data;
            else if (row.GetAttributeValue<Guid>("fileid") != Guid.Empty)
                data = FileColumnTransferHelper.Download(orgService, new EntityReference("pluginpackage", packageId), "fileid").Data;
            else
                throw new InvalidOperationException($"Plugin package '{packageId}' has no downloadable content in Dataverse.");

            // Validate the container, but preserve the original bytes (including all dependencies).
            try
            {
                using var stream = new MemoryStream(data, writable: false);
                using var archive = new ZipArchive(stream, ZipArchiveMode.Read);
                if (archive.Entries.Count == 0)
                    throw new InvalidDataException("Empty package.");
            }
            catch (InvalidDataException)
            {
                throw new InvalidOperationException($"Plugin package '{packageId}' is not a valid non-empty NuGet archive. No file written.");
            }
            return data;
        }

        private static byte[] DecodeContent(string content, string label)
        {
            try
            {
                var data = Convert.FromBase64String(content);
                if (data.Length == 0)
                    throw new InvalidOperationException($"{label} has empty downloadable content.");
                return data;
            }
            catch (FormatException)
            {
                throw new InvalidOperationException($"{label} content is not valid Base64. No file written.");
            }
        }
    }
}
