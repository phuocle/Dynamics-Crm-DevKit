using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
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
    public class PluginTask
    {
        private CrmServiceClient CrmServiceClient { get; set; } = null;
        private Plugin PluginJson { get; set; } = null;
        private string CurrentDirectory { get; set; } = null;
        private string Version { get; set; }

        public PluginTask(CrmServiceClient crmServiceClient, string currentDirectory, Plugin pluginJson, string version)
        {
            CrmServiceClient = crmServiceClient;
            CurrentDirectory = currentDirectory;
            PluginJson = pluginJson;
            Version = version;
        }        

        public void Run()
        {
            CliLog.WriteLine(CliLog.COLOR_MAGENTA, new String('*', CliLog.STAR_LENGTH));
            CliLog.WriteLine(CliLog.COLOR_MAGENTA, "BEGIN PLUGIN TASKS");
            CliLog.WriteLine(CliLog.COLOR_MAGENTA, new String('*', CliLog.STAR_LENGTH));
            foreach (var pluginFile in PluginFiles)
            {
                RegisterPlugin(pluginFile);
            }
            CliLog.WriteLine(CliLog.COLOR_MAGENTA, new String('*', CliLog.STAR_LENGTH));
            CliLog.WriteLine(CliLog.COLOR_MAGENTA, "END PLUGIN TASKS");
            CliLog.WriteLine(CliLog.COLOR_MAGENTA, new String('*', CliLog.STAR_LENGTH));
        }

        private List<string> PluginFiles
        {
            get
            {
                var folder = Path.Combine(CurrentDirectory, PluginJson.folder);
                var includefiles = new List<string>();
                foreach (var includefile in PluginJson.includefiles)
                    includefiles.AddRange(Directory.GetFiles(folder, includefile).ToList<string>());
                var excludefiles = new List<string>();
                foreach (var excludefile in PluginJson.excludefiles)
                    excludefiles.AddRange(Directory.GetFiles(folder, excludefile).ToList<string>());
                var assemblies = includefiles.Where(file => !excludefiles.Contains(file)).ToList<string>();
                return assemblies;
            }
        }

        private void RegisterPlugin(string pluginFile)
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
            if (plugins.Count() == 0) return;
            var pluginEntity = RegisterAssembly(assemblyFilePath, assembly, plugins);
            if (pluginEntity == null) return;
            AddAssemblyToSolution(pluginEntity);
            foreach(var plugin in plugins)
            {
                var pluginTypeEntity = RegisterPluginType(pluginEntity, plugin);
                RegisterPluginSteps(pluginTypeEntity, plugin);
            }
        }

        private Assembly CurrentDomain_ReflectionOnlyAssemblyResolve(object sender, ResolveEventArgs args)
        {
            Assembly assembly;
            string[] parts = args.Name.Split(',');
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

        private Entity RegisterPluginType(Entity pluginEntity, TypeInfo plugin)
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
                return pluginType;
            }
            else
            {
                return rows.Entities[0];
            }
        }

        private void RegisterPluginSteps(Entity pluginTypeEntity, TypeInfo plugin)
        {
            var pluginAttributes = plugin.GetCustomAttributesData().Where(a => a.AttributeType.Name == typeof(CrmPluginRegistrationAttribute).Name);
            if (pluginAttributes.Count() == 0) return;
            foreach(var pluginAttribute in pluginAttributes)
            {
                var attribute = pluginAttribute.CreateFromData();
                if (attribute.Message.ToLower() == "update")
                {
                    if (string.IsNullOrEmpty(attribute.FilteringAttributes))
                    {
                        var message = "Update Message should have FilteringAttributes value";
                        CliLog.WriteLine(CliLog.COLOR_ERROR, message);
                        throw new Exception(message);
                    }
                }
                var step = new Entity("sdkmessageprocessingstep");
                step["name"] = attribute.Name;
                step["configuration"] = attribute.UnSecureConfiguration;
                step["description"] = attribute.Description;
                step["mode"] = new OptionSetValue(attribute.ExecutionMode == ExecutionModeEnum.Asynchronous ? 1 : 0);
                step["rank"] = attribute.ExecutionOrder;
                step["stage"] = new OptionSetValue((int)attribute.Stage);
                if (attribute.DeleteAsyncOperation)
                    step["asyncautodelete"] = attribute.DeleteAsyncOperation;
                int supportDeployment = 0;
                if (attribute.Server == true && attribute.Offline == true)
                    supportDeployment = 2; // Both
                else if (!attribute.Server == true && attribute.Offline == true)
                    supportDeployment = 1; // Offline only
                else
                    supportDeployment = 0; // Server Only
                step["supporteddeployment"] = new OptionSetValue(supportDeployment);
                step["plugintypeid"] = new EntityReference("plugintype", Guid.Parse(pluginTypeEntity["plugintypeid"].ToString()));
                var sdkMessageFilterId = GetSdkMessageFilterId(attribute.EntityLogicalName, attribute.Message);
                if (sdkMessageFilterId != null)
                    step["sdkmessagefilterid"] = sdkMessageFilterId;
                var sdkMessageId = GetSdkMessageId(attribute.EntityLogicalName, attribute.Message);
                if (sdkMessageId != null)
                    step["sdkmessageid"] = sdkMessageId;
                if (attribute.FilteringAttributes.Length > 0)
                    step["filteringattributes"] = attribute.FilteringAttributes.Replace(" ", "");                
                var fetchData = new
                {
                    plugintypeid = pluginTypeEntity["plugintypeid"].ToString(),
                    name = attribute.Name,
                    sdkmessageidname = attribute.Message
                };
                var fetchXml = $@"
<fetch>
  <entity name='sdkmessageprocessingstep'>
    <attribute name='sdkmessageprocessingstepid' />
    <filter type='and'>
      <condition attribute='plugintypeid' operator='eq' value='{fetchData.plugintypeid}'/>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
      <condition attribute='sdkmessageidname' operator='eq' value='{fetchData.sdkmessageidname}'/>
    </filter>
  </entity>
</fetch>";
                var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                Guid sdkMessageProcessingStepId = Guid.Empty;
                if (rows.Entities.Count > 0)
                {
                    sdkMessageProcessingStepId = rows.Entities[0].Id;
                    step["sdkmessageprocessingstepid"] = sdkMessageProcessingStepId;
                    CliLog.WriteLine(CliLog.COLOR_BLUE, $"\t\tUpdating Step: ", CliLog.COLOR_CYAN, $"{attribute.Name}");
                    CrmServiceClient.Update(step);                    
                }
                else
                {
                    CliLog.WriteLine(CliLog.COLOR_GREEN, $"\t\tRegistering Step: ", CliLog.COLOR_CYAN, $"{attribute.Name}");
                    sdkMessageProcessingStepId = CrmServiceClient.Create(step);
                    step["sdkmessageprocessingstepid"] = sdkMessageProcessingStepId;
                }                
                AddStepToSolution(step);
                if (attribute?.Image1Attributes?.Length > 0 || attribute?.Image2Attributes?.Length > 0)
                    GetPluginStepImages(attribute, sdkMessageProcessingStepId);
            }
        }

        private void GetPluginStepImages(CrmPluginRegistrationAttribute attribute, Guid sdkMessageProcessingStepId)
        {
            if (attribute.Image1Attributes.Length > 0)
            {
                RegisterImage(attribute.Message, attribute.Image1Name, attribute.Image1Type, attribute.Image1Attributes, sdkMessageProcessingStepId);
            }
            if (attribute.Image2Attributes.Length > 0)
            {
                RegisterImage(attribute.Message, attribute.Image2Name, attribute.Image2Type, attribute.Image2Attributes, sdkMessageProcessingStepId);
            }
        }

        private void RegisterImage(string message, string imageName, ImageTypeEnum imageType, string imageAttributes, Guid sdkMessageProcessingStepId)
        {
            var image = new Entity("sdkmessageprocessingstepimage");
            image["name"] = imageName;
            image["imagetype"] = new OptionSetValue((int)imageType);
            image["sdkmessageprocessingstepid"] = new EntityReference("sdkmessageprocessingstep", sdkMessageProcessingStepId);
            image["attributes"] = imageAttributes.Replace(" ", "");
            image["entityalias"] = imageName;
            image["messagepropertyname"] = message == "Create" ? "Id" : "Target";
            var fetchData = new
            {
                sdkmessageprocessingstepid = sdkMessageProcessingStepId,
                entityalias = imageName,
                imagetype = (int)imageType
            };
            var fetchXml = $@"
<fetch>
  <entity name='sdkmessageprocessingstepimage'>
    <attribute name='sdkmessageprocessingstepimageid' />
    <filter type='and'>
      <condition attribute='sdkmessageprocessingstepid' operator='eq' value='{fetchData.sdkmessageprocessingstepid}'/>
      <condition attribute='entityalias' operator='eq' value='{fetchData.entityalias}'/>
      <condition attribute='imagetype' operator='eq' value='{fetchData.imagetype}'/>
    </filter>
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0)
            {
                CliLog.WriteLine(CliLog.COLOR_GREEN, "\t\t\tRegistering Image: ", CliLog.COLOR_CYAN, $"{imageName}");
                CrmServiceClient.Create(image);                
            }
            else
            {
                image["sdkmessageprocessingstepimageid"] = rows.Entities[0].Id;
                CliLog.WriteLine(CliLog.COLOR_BLUE, "\t\t\tUpdating Image: ", CliLog.COLOR_CYAN, $"{imageName}");
                CrmServiceClient.Update(image);                
            }
        }

        private EntityReference GetSdkMessageFilterId(string entityLogicalName, string message)
        {
            if (entityLogicalName.ToLower() == "none") return null;
            var fetchData = new
            {
                primaryobjecttypecode = GetPrimaryObjectTypeCode(entityLogicalName),
                name = message
            };
            var fetchXml = $@"
<fetch>
  <entity name='sdkmessagefilter'>
    <attribute name='sdkmessagefilterid' />
    <filter type='and'>
      <condition attribute='primaryobjecttypecode' operator='eq' value='{fetchData.primaryobjecttypecode}'/>
    </filter>
    <link-entity name='sdkmessage' from='sdkmessageid' to='sdkmessageid'>
      <filter type='and'>
        <condition attribute='name' operator='eq' value='{fetchData.name}'/>
      </filter>
    </link-entity>
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return null;
            return new EntityReference("sdkmessagefilter", rows.Entities[0].Id);
        }

        private int GetPrimaryObjectTypeCode(string entityName)
        {
            var request = new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Entity,
                LogicalName = entityName.ToLower()
            };
            var response = (RetrieveEntityResponse)CrmServiceClient.Execute(request);
            return response.EntityMetadata.ObjectTypeCode.Value;
        }

        private EntityReference GetSdkMessageId(string entityLogicalName, string message)
        {
            var fetchXml = string.Empty;
            if (entityLogicalName.ToLower() == "none")
            {
                var fetchData = new
                {
                    name = message
                };
                fetchXml = $@"
<fetch>
  <entity name='sdkmessage'>
    <attribute name='sdkmessageid' />
    <filter type='and'>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
    </filter>
  </entity>
</fetch>";                
            }
            else
            {
                var fetchData = new
                {
                    name = message,
                    primaryobjecttypecode = GetPrimaryObjectTypeCode(entityLogicalName)
                };
                fetchXml = $@"
<fetch>
  <entity name='sdkmessage'>
    <attribute name='sdkmessageid' />
    <filter type='and'>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
    </filter>
    <link-entity name='sdkmessagefilter' from='sdkmessageid' to='sdkmessageid'>
      <filter type='and'>
        <condition attribute='primaryobjecttypecode' operator='eq' value='{fetchData.primaryobjecttypecode}'/>
      </filter>
    </link-entity>
  </entity>
</fetch>";
            }
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return null;
            return new EntityReference("sdkmessage", rows.Entities[0].Id);
        }

        private void AddAssemblyToSolution(Entity plugin)
        {
            var fetchData = new
            {
                objectid = plugin["pluginassemblyid"].ToString(),
                componenttype = 91,
                uniquename = PluginJson.solution
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
                var request = new AddSolutionComponentRequest()
                {
                    AddRequiredComponents = true,
                    ComponentType = 91,
                    ComponentId = Guid.Parse(plugin["pluginassemblyid"].ToString()),
                    SolutionUniqueName = PluginJson.solution
                };
                CliLog.WriteLine(CliLog.COLOR_GREEN, "Adding Assembly: ", CliLog.COLOR_CYAN, $"{plugin["name"]} ", CliLog.COLOR_GREEN, "to solution: ", CliLog.COLOR_CYAN, $"{PluginJson.solution}");
                CrmServiceClient.Execute(request);
            }
        }

        private void AddStepToSolution(Entity step)
        {
            var fetchData = new
            {
                objectid = step["sdkmessageprocessingstepid"].ToString(),
                componenttype = 92,
                uniquename = PluginJson.solution
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
                var request = new AddSolutionComponentRequest()
                {
                    AddRequiredComponents = false,
                    ComponentType = 92,
                    ComponentId = Guid.Parse(step["sdkmessageprocessingstepid"].ToString()),
                    SolutionUniqueName = PluginJson.solution
                };
                CliLog.WriteLine(CliLog.COLOR_GREEN, "\t\tAdding Step: ", CliLog.COLOR_CYAN, $"{step["name"]} ", CliLog.COLOR_GREEN, "to solution: ", CliLog.COLOR_CYAN, $"{PluginJson.solution}");
                CrmServiceClient.Execute(request);
            }
        }        

        private IEnumerable<CustomAttributeData> GetAttributes(IEnumerable<Type> types, string attributeName)
        {
            List<CustomAttributeData> attributes = new List<CustomAttributeData>();
            foreach (Type type in types)
            {
                var data = type.GetCustomAttributesData().Where(a => a.AttributeType.Name == attributeName);                
                attributes.AddRange(data);
            }
            return attributes;
        }

        private Entity RegisterAssembly(FileInfo assemblyFilePath, Assembly assembly, IEnumerable<Type> plugins)
        {
            var firstType = GetAttributes(plugins, typeof(CrmPluginRegistrationAttribute).Name).FirstOrDefault();
            if (firstType == null)
            {
                var message = "Plugin Assembly don't have any type: CrmPluginRegistrationAttribute";
                CliLog.WriteLine(CliLog.COLOR_ERROR, message);
                throw new Exception(message);
            }
            var firstTypeAttribute = firstType.CreateFromData() as CrmPluginRegistrationAttribute;
            var assemblyProperties = assembly.GetName().FullName.Split(",= ".ToCharArray(), StringSplitOptions.RemoveEmptyEntries);
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
            Guid pluginAssemblyId = Guid.Empty;
            var existingContent = string.Empty;
            if (rows.Entities.Count > 0)
            {
                var entity = rows.Entities[0];
                pluginAssemblyId = entity.Id;
                existingContent = entity.GetAttributeValue<string>("content");
            }
            string content = Convert.ToBase64String(File.ReadAllBytes(assemblyFilePath.FullName));
            if (content == existingContent) return null;
            var plugin = new Entity("pluginassembly");            
            plugin["content"] = content;
            plugin["name"] = assemblyProperties[0];
            plugin["culture"] = assemblyProperties[4];
            plugin["version"] = assemblyProperties[2];
            plugin["publickeytoken"] = assemblyProperties[6];
            plugin["sourcetype"] = new OptionSetValue(0); // database
            plugin["isolationmode"] = firstTypeAttribute.IsolationMode == IsolationModeEnum.Sandbox ?
                                            new OptionSetValue(2) : // 2 = sandbox
                                            new OptionSetValue(1); // 1 = none            
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
    }
}
