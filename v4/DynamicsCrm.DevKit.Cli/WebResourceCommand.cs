using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Diagnostics;
using System.IO;
using System.Security;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli
{
    internal class WebResourceCommand
    {
        private readonly CommandLineArgs _arg;

        internal WebResourceCommand(CommandLineArgs arg)
        {
            _arg = arg;
        }

        internal async Task RunAsync()
        {
            CliLog.WriteSectionHeader("START ");
            CliLog.WriteSeparator();

            var filePath = Path.IsPathRooted(_arg.File)
                ? _arg.File
                : Path.Combine(_arg.CurrentDirectory, _arg.File);

            if (!File.Exists(filePath))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"[WEBRESOURCE] File not found: {filePath}");
                CliLog.WriteSeparator();
                CliLog.WriteSectionHeader("END ");
                return;
            }

            if (filePath.EndsWith(".ts", StringComparison.OrdinalIgnoreCase))
            {
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "TypeScript detected, running ", ConsoleColor.Yellow, "npm run debug", ConsoleColor.Green, "...");
                var compiled = await CompileTypeScriptAsync(filePath);
                if (!compiled)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, "TypeScript compilation failed. Aborting deployment.");
                    CliLog.WriteSeparator();
                    CliLog.WriteSectionHeader("END ");
                    return;
                }
                filePath = Path.ChangeExtension(filePath, ".js");
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Compiled output: ", ConsoleColor.White, filePath);
                CliLog.WriteSeparator();
            }

            if (!File.Exists(filePath))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"[WEBRESOURCE] Compiled file not found: {filePath}");
                CliLog.WriteSeparator();
                CliLog.WriteSectionHeader("END ");
                return;
            }

            var uniqueName = !string.IsNullOrEmpty(_arg.WebResourceName)
                ? _arg.WebResourceName
                : Path.GetFileName(filePath);

            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Deploying single web resource:");
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, "  File: ", ConsoleColor.White, filePath);
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Blue, "  Name: ", ConsoleColor.White, uniqueName);
            CliLog.WriteSeparator();

            await DeployAsync(filePath, uniqueName);

            CliLog.WriteSeparator();
            CliLog.WriteSectionHeader("END ");
        }

        private async Task<bool> CompileTypeScriptAsync(string tsFilePath)
        {
            var dir = Path.GetDirectoryName(tsFilePath) ?? _arg.CurrentDirectory;
            try
            {
                var psi = new ProcessStartInfo
                {
                    FileName = "npm",
                    Arguments = "run debug",
                    WorkingDirectory = dir,
                    UseShellExecute = false,
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    CreateNoWindow = true
                };
                var process = Process.Start(psi);
                var outputTask = process.StandardOutput.ReadToEndAsync();
                var errorTask = process.StandardError.ReadToEndAsync();
                process.WaitForExit();
                var output = await outputTask;
                var error = await errorTask;
                if (!string.IsNullOrWhiteSpace(output))
                    CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.White, output.TrimEnd());
                if (!string.IsNullOrWhiteSpace(error))
                    CliLog.WriteLineError(ConsoleColor.Yellow, error.TrimEnd());
                return process.ExitCode == 0;
            }
            catch (Exception ex)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"Failed to start npm: {ex.Message}");
                return false;
            }
        }

        private async Task DeployAsync(string filePath, string uniqueName)
        {
            var fileName = Path.GetFileName(filePath);
            var dotIndex = uniqueName.LastIndexOf('.');
            var nameWithoutExt = dotIndex > 0 ? uniqueName.Substring(0, dotIndex) : uniqueName;

            var safeUniqueName = SecurityElement.Escape(uniqueName);
            var safeNameWithoutExt = SecurityElement.Escape(nameWithoutExt);
            var safeFileName = SecurityElement.Escape(fileName);

            var fetchXml = $@"
<fetch>
  <entity name='webresource'>
    <attribute name='content' />
    <attribute name='webresourceid' />
    <attribute name='name' />
    <attribute name='iscustomizable' />
    <attribute name='ismanaged' />
    <filter type='or'>
      <condition attribute='name' operator='eq' value='{safeUniqueName}'/>
      <condition attribute='name' operator='eq' value='{safeNameWithoutExt}'/>
      <condition attribute='name' operator='like' value='%/{safeFileName}'/>
    </filter>
  </entity>
</fetch>";

            var rows = await _arg.ServiceClient.RetrieveMultipleAsync(new FetchExpression(fetchXml));
            var content = string.Empty;
            var webResourceId = Guid.Empty;

            if (rows.Entities.Count > 0)
            {
                Entity best = null;
                foreach (var entity in rows.Entities)
                {
                    if (entity.GetAttributeValue<string>("name") == uniqueName)
                    {
                        best = entity;
                        break;
                    }
                }
                if (best == null) best = rows.Entities[0];

                var ismanaged = best.GetAttributeValue<bool?>("ismanaged");
                var iscustomizable = best.GetAttributeValue<BooleanManagedProperty>("iscustomizable");
                if (ismanaged.HasValue && ismanaged.Value && iscustomizable?.Value == false)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"[WEBRESOURCE] Cannot update: web resource is managed and not customizable - {uniqueName}");
                    return;
                }
                webResourceId = best.Id;
                content = best.GetAttributeValue<string>("content") ?? string.Empty;
                uniqueName = best.GetAttributeValue<string>("name");
            }

            var fileContent = Convert.ToBase64String(await FileHelper.ReadAllBytesAsync(filePath));

            if (fileContent == content)
            {
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, CliAction.DO_NOTHING, ConsoleColor.White, uniqueName);
                return;
            }

            var webResource = new Entity("webresource")
            {
                ["name"] = uniqueName,
                ["displayname"] = uniqueName,
                ["content"] = fileContent
            };

            if (webResourceId == Guid.Empty)
            {
                webResource["webresourcetype"] = new OptionSetValue(GetWebResourceType(filePath));
                CliLog.WriteLineWarning(ConsoleColor.Green, CliAction.CREATED, ConsoleColor.White, uniqueName);
                webResourceId = await _arg.ServiceClient.CreateAsync(webResource);
                webResource["webresourceid"] = webResourceId;
            }
            else
            {
                webResource["webresourceid"] = webResourceId;
                CliLog.WriteLineWarning(ConsoleColor.Green, CliAction.UPDATED, ConsoleColor.White, uniqueName);
                await _arg.ServiceClient.UpdateAsync(webResource);
            }

            var publish = new PublishXmlRequest
            {
                ParameterXml =
                    "<importexportxml><webresources>" +
                    $"<webresource>{webResourceId}</webresource>" +
                    "</webresources></importexportxml>"
            };
            await _arg.ServiceClient.ExecuteAsync(publish);
            CliLog.WriteLineWarning(ConsoleColor.Green, "PUBLISHED: ", ConsoleColor.White, uniqueName);
        }

        private static int GetWebResourceType(string filePath)
        {
            var ext = Path.GetExtension(filePath).ToLower().TrimStart('.');
            switch (ext)
            {
                case "html":
                case "htm":
                    return 1;
                case "css":
                    return 2;
                case "js":
                    return 3;
                case "xml":
                    return 4;
                case "png":
                    return 5;
                case "gif":
                    return 6;
                case "jpg":
                case "jpeg":
                    return 7;
                case "xsl":
                case "xslt":
                    return 9;
                case "ico":
                    return 10;
                case "svg":
                    return 11;
                case "resx":
                    return 12;
                default:
                    return 3;
            }
        }
    }
}
