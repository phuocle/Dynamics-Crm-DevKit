using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using PL.DynamicsCrm.DevKit.Cli.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;

namespace PL.DynamicsCrm.DevKit.Cli
{
    public class DataProviderTask
    {
        private CrmServiceClient CrmServiceClient { get; }
        private DataProvider DataProviderJson { get; }
        private string CurrentDirectory { get; }
        private string Version { get; }

        public DataProviderTask(CrmServiceClient crmServiceClient, string currentDirectory, DataProvider dataProviderJson, string version)
        {
            CrmServiceClient = crmServiceClient;
            CurrentDirectory = currentDirectory;
            DataProviderJson = dataProviderJson;
            Version = version;
        }

        private List<string> DataProviderFiles
        {
            get
            {
                var folder = Path.Combine(CurrentDirectory, DataProviderJson.folder);
                var includefiles = new List<string>();
                foreach (var includefile in DataProviderJson.includefiles)
                    includefiles.AddRange(Directory.GetFiles(folder, includefile).ToList());
                foreach (var includefile in DataProviderJson.includefiles)
                {
                    var other = includefile.Replace("*.", string.Empty);
                    includefiles.AddRange(Directory.GetFiles(folder, other).ToList());
                }
                var excludefiles = new List<string>();
                foreach (var excludefile in DataProviderJson.excludefiles)
                    excludefiles.AddRange(Directory.GetFiles(folder, excludefile).ToList());
                foreach (var excludefile in DataProviderJson.excludefiles)
                {
                    var other = excludefile.Replace("*.", string.Empty);
                    excludefiles.AddRange(Directory.GetFiles(folder, other).ToList());
                }
                var assemblies = includefiles.Where(file => !excludefiles.Contains(file)).ToList();
                return assemblies;
            }
        }

        public void Run()
        {
            CliLog.WriteLine(CliLog.COLOR_GREEN, new string('*', CliLog.STAR_LENGTH));
            CliLog.WriteLine(CliLog.COLOR_GREEN, "START DATA PROVIDER TASKS");
            CliLog.WriteLine(CliLog.COLOR_GREEN, new string('*', CliLog.STAR_LENGTH));

            foreach (var pluginFile in DataProviderFiles)
                RegisterDataProvider(pluginFile);

            CliLog.WriteLine(CliLog.COLOR_GREEN, new string('*', CliLog.STAR_LENGTH));
            CliLog.WriteLine(CliLog.COLOR_GREEN, "END DATA PROVIDER TASKS");
            CliLog.WriteLine(CliLog.COLOR_GREEN, new string('*', CliLog.STAR_LENGTH));
        }

        private void RegisterDataProvider(string pluginFile)
        {
            var assemblyFilePath = new FileInfo(pluginFile);
            Assembly assembly = null;
            AppDomain.CurrentDomain.ReflectionOnlyAssemblyResolve += CurrentDomain_ReflectionOnlyAssemblyResolve;
            assembly = Assembly.ReflectionOnlyLoadFrom(pluginFile);
            AppDomain.CurrentDomain.ReflectionOnlyAssemblyResolve -= CurrentDomain_ReflectionOnlyAssemblyResolve;
            if (assembly == null) return;
            AppDomain.CurrentDomain.ReflectionOnlyAssemblyResolve += CurrentDomain_ReflectionOnlyAssemblyResolve;
            var pluginTypes = assembly.DefinedTypes.Where(p => p.GetInterfaces().FirstOrDefault(a => a.Name == typeof(IPlugin).Name) != null);
            AppDomain.CurrentDomain.ReflectionOnlyAssemblyResolve -= CurrentDomain_ReflectionOnlyAssemblyResolve;
            var plugins = (from pluginType in pluginTypes
                           where pluginType.Name != "PluginBase"
                           select pluginType
                ).ToList();
            if (!plugins.Any()) return;
            var found = plugins.FirstOrDefault(check => check.Name == "Retrieve" || check.Name == "RetrieveMultiple");
            if (found == null) return;
            var pluginEntity = RegisterAssembly(assemblyFilePath, assembly, plugins);
            if (pluginEntity == null) return;
            AddAssemblyToSolution(pluginEntity);
            foreach (var plugin in plugins)
            {
                RegisterPluginType(pluginEntity, plugin);
            }
        }

        private void RegisterPluginType(Entity pluginEntity, TypeInfo plugin)
        {
            var fetchData = new
            {
                typename = plugin.FullName
            };
            var fetchXml = $@"
<fetch>
  <entity name='plugintype'>
    <attribute name='plugintypeid' />
    <filter type='and'>
      <condition attribute='typename' operator='eq' value='{fetchData.typename}'/>
    </filter>
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0)
            {
                var pluginType = new Entity("plugintype");
                pluginType["name"] = plugin.FullName;
                pluginType["pluginassemblyid"] = new EntityReference("pluginassembly", Guid.Parse(pluginEntity["pluginassemblyid"].ToString()));
                pluginType["typename"] = plugin.FullName;
                pluginType["friendlyname"] = plugin.FullName;
                CliLog.WriteLine(CliLog.COLOR_GREEN, $"\tRegistering Type: ", CliLog.COLOR_CYAN, $"{plugin.FullName}");
                var pluginTypeId = CrmServiceClient.Create(pluginType);
                pluginType["plugintypeid"] = pluginTypeId;
            }
        }

        private Entity RegisterAssembly(FileInfo assemblyFilePath, Assembly assembly, IEnumerable<Type> plugins)
        {
            var assemblyProperties = assembly.GetName().FullName
                .Split(",= ".ToCharArray(), StringSplitOptions.RemoveEmptyEntries);
            var assemblyName = assembly.GetName().Name;
            var fetchData = new
            {
                name = assemblyProperties[0]
            };
            var fetchXml = $@"
<fetch>
  <entity name='pluginassembly'>
    <attribute name='pluginassemblyid' />
    <attribute name='content' />
    <filter type='and'>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
    </filter>
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            var pluginAssemblyId = Guid.Empty;
            var existingContent = string.Empty;
            if (rows.Entities.Count > 0)
            {
                var entity = rows.Entities[0];
                pluginAssemblyId = entity.Id;
                existingContent = entity.GetAttributeValue<string>("content");
            }
            var content = Convert.ToBase64String(File.ReadAllBytes(assemblyFilePath.FullName));
            if (content == existingContent) return null;
            var plugin = new Entity("pluginassembly");
            plugin["content"] = content;
            plugin["name"] = assemblyProperties[0];
            plugin["culture"] = assemblyProperties[4];
            plugin["version"] = assemblyProperties[2];
            plugin["publickeytoken"] = assemblyProperties[6];
            plugin["sourcetype"] = new OptionSetValue(0); /* 0 = database */
            plugin["isolationmode"] = new OptionSetValue(2); /* 2 = sandbox */
            if (pluginAssemblyId == Guid.Empty)
            {
                CliLog.WriteLine(CliLog.COLOR_GREEN, "Registering Assembly: ", CliLog.COLOR_CYAN, $"{assemblyProperties[0]}");
                pluginAssemblyId = CrmServiceClient.Create(plugin);
                plugin["pluginassemblyid"] = pluginAssemblyId;
            }
            else
            {
                CliLog.WriteLine(CliLog.COLOR_BLUE, "Updating Assembly: ", CliLog.COLOR_CYAN, $"{assemblyProperties[0]}");
                plugin["pluginassemblyid"] = pluginAssemblyId;
                CrmServiceClient.Update(plugin);
            }
            return plugin;
        }

        private void AddAssemblyToSolution(Entity plugin)
        {
            var fetchData = new
            {
                objectid = plugin["pluginassemblyid"].ToString(),
                componenttype = 91,
                uniquename = DataProviderJson.solution
            };
            var fetchXml = $@"
<fetch>
  <entity name='solutioncomponent'>
    <attribute name='solutioncomponentid' />
    <filter type='and'>
      <condition attribute='objectid' operator='eq' value='{fetchData.objectid}'/>
      <condition attribute='componenttype' operator='eq' value='{fetchData.componenttype}'/>
    </filter>
    <link-entity name='solution' from='solutionid' to='solutionid'>
      <filter type='and'>
        <condition attribute='uniquename' operator='eq' value='{fetchData.uniquename}'/>
      </filter>
    </link-entity>
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0)
            {
                var request = new AddSolutionComponentRequest
                {
                    AddRequiredComponents = true,
                    ComponentType = 91,
                    ComponentId = Guid.Parse(plugin["pluginassemblyid"].ToString()),
                    SolutionUniqueName = DataProviderJson.solution
                };
                CliLog.WriteLine(CliLog.COLOR_GREEN, "Adding Assembly: ", CliLog.COLOR_CYAN, $"{plugin["name"]} ",
                    CliLog.COLOR_GREEN, "to solution: ", CliLog.COLOR_CYAN, $"{DataProviderJson.solution}");
                CrmServiceClient.Execute(request);
            }
        }

        private Assembly CurrentDomain_ReflectionOnlyAssemblyResolve(object sender, ResolveEventArgs args)
        {
            Assembly assembly;
            var parts = args.Name.Split(',');
            switch (parts[0])
            {
                case "Microsoft.Xrm.Sdk":
                    assembly = Assembly.ReflectionOnlyLoad(parts[0].Trim());
                    break;
                default:
                    assembly = Assembly.ReflectionOnlyLoad(args.Name);
                    break;
            }
            return assembly;
        }
    }
}
