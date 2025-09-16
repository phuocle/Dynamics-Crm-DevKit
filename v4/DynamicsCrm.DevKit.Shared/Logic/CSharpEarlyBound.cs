using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Extensions.Logging;
using Microsoft.PowerPlatform.Dataverse.ModelBuilderLib;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Logic
{
    internal class CSharpEarlyBound
    {
        internal static string GetCsCode(ServiceClient serviceClient, EntityMetadata entityMetadata, string rootnamespace, string @namespace, string outputFoler)
        {
            //var tempFolder = Path.GetTempPath();
            //var settingFile = Path.Combine(tempFolder, "settingsbuilder.json");
            //var content = new StringBuilder();
            //content.AppendLine("{");
            //content.AppendLine($"    \"entityNamesFilter\": [\"{entityMetadata.LogicalName}\"],");
            //content.AppendLine("    \"emitFieldsClasses\": false,");
            //content.AppendLine("    \"generateGlobalOptionSets\": false,");
            //content.AppendLine("    \"language\": \"csharp\",");
            //content.AppendLine($"    \"namespace\": \"{rootnamespace}\",");
            //content.AppendLine("    \"suppressGeneratedCodeAttribute\": true,");
            //content.AppendLine("    \"suppressINotifyPattern\": true");
            //content.AppendLine("}");
            //File.WriteAllText(settingFile, content.ToString());
            //var file = Path.Combine(outputFoler, $"{entityMetadata.SchemaName}.generated.cs");
            //var parameters = new Dictionary<string, string>
            //{
            //    { "codewriterfilter", "DynamicsCrm.DevKit.Cli.CrmSvcUtilExtensions.CodeWriterFilter,DynamicsCrm.DevKit.Cli" },
            //    { "codecustomization", "DynamicsCrm.DevKit.Cli.CrmSvcUtilExtensions.Customization,DynamicsCrm.DevKit.Cli" },
            //    { "codegenerationservice", "DynamicsCrm.DevKit.Cli.CrmSvcUtilExtensions.GenerationService,DynamicsCrm.DevKit.Cli" },
            //    { "metadatafiles", $"{entityMetadata.LogicalName}.xml" },
            //    { "out", file },
            //    { "settings-path", settingFile }
            //};
            //var logger = new ConsoleLogger();
            //var modelbuilder = new ModelBuilder(logger);
            //var task = Task.Run(() => modelbuilder.Invoke(serviceClient, parameters));
            //task.Wait();
            //if (File.Exists(file))
            //{
            //    var text = File.ReadAllText(file);
            //    return text;
            //}
           // var logger = new ConsoleLogger();
            var modelbuilder = new ModelBuilder(null);

            //var SettingsTemplateFile = "D:\\github\\Dynamics-Crm-DevKit\\test\\4.00.00.00\\TestAllProjectsV4\\Dev.DevKitV4.Shared\\Entities3\\builderSettings.json";
            //var OutDirectory = "D:\\github\\Dynamics-Crm-DevKit\\test\\4.00.00.00\\TestAllProjectsV4\\Dev.DevKitV4.Shared\\Entities3";
            //var parameterBuilder = new ArgumentBuilder(SettingsTemplateFile, OutDirectory, logger.AddDetail);
            //var a = parameterBuilder.GetArguments();

            var arguments = new[]
            {
                "/outdirectory:D:\\github\\Dynamics-Crm-DevKit\\test\\4.00.00.00\\TestAllProjectsV4\\Dev.DevKitV4.Shared\\Entities3",
                "/settingsTemplateFile:D:\\github\\Dynamics-Crm-DevKit\\test\\4.00.00.00\\TestAllProjectsV4\\Dev.DevKitV4.Shared\\Entities3\\builderSettings.json",
                "/splitfiles"
            };
            //if (a[0] == arguments[0] && a[1] == arguments[1] && a[2] == arguments[2])
            //{
            //    var b1 = string.Empty;
            //}

            modelbuilder.Parameters.LoadArguments(arguments);



            modelbuilder.Invoke(serviceClient);
            return string.Empty;
        }
    }

    internal class ConsoleLogger : ILogger
    {
        public IDisposable BeginScope<TState>(TState state) where TState : notnull
        {
            return null;
        }

        public bool IsEnabled(LogLevel logLevel)
        {
            return true;
        }

        public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
        {
            if (formatter == null) return;
            Console.WriteLine(formatter(state, exception));
        }

        public void AddDetail(string message)
        {
            Console.WriteLine(message);
        }
    }
}
