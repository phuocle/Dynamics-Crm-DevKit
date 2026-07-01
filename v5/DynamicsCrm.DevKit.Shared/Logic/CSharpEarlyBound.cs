using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Extensions.Logging;
using Microsoft.PowerPlatform.Dataverse.ModelBuilderLib;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.IO;

namespace DynamicsCrm.DevKit.Shared.Logic
{
    internal class CSharpEarlyBound
    {
        internal static string GetCsCode(ServiceClient serviceClient, EntityMetadata entityMetadata, string rootnamespace, string @namespace)
        {
            var logger = new ConsoleLogger();
            var modelbuilder = new ModelBuilder(logger);

            var tempFolder = Path.Combine("D:\\github\\Dynamics-Crm-DevKit\\test\\4.12.34.56\\TestAllProjectsV4\\Dev.DevKitV4.Shared\\Entities4", "CSharpEarlyBound");
            Helper.TryDeleteDirectory(tempFolder);
            if (!Directory.Exists(tempFolder)) Directory.CreateDirectory(tempFolder);
            var tempFile = Path.Combine(tempFolder, "Entities", $"{entityMetadata.LogicalName}.cs");
            var arguments = new[]
            {
                "/emitfieldsclasses",
                "/emitentityetc",
                "/emitvirtualattributes",
                "/suppressgeneratedcodeattribute",
                "/suppressinotifypattern",

                //"/generateGlobalOptionSets",

                $"/splitfiles",
                $"/outdirectory:{tempFolder}",
                $"/namespace:{rootnamespace}",
                $"/entitynamesfilter:{entityMetadata.LogicalName}",

                //$"/outputfile:{tempFile}",
                //$"/out:AAAA.cs",

            };
            modelbuilder.Parameters.LoadArguments(arguments);
            modelbuilder.Invoke(serviceClient);
            if (File.Exists(tempFile))
            {
                return File.ReadAllText(tempFile);
            }
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
