using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using PL.DynamicsCrm.DevKit.Cli.Models;

namespace PL.DynamicsCrm.DevKit.Cli
{
    public class PluginTask
    {
        public PluginTask(CrmServiceClient crmServiceClient, string currentDirectory, Plugin pluginJson, string version)
        {
            CrmServiceClient = crmServiceClient;
            CurrentDirectory = currentDirectory;
            PluginJson = pluginJson;
            Version = version;
        }

        private CrmServiceClient CrmServiceClient { get; }
        private Plugin PluginJson { get; }
        private string CurrentDirectory { get; }
        private string Version { get; }

        private IEnumerable<string> PluginFiles
        {
            get
            {
                var folder = Path.Combine(CurrentDirectory, PluginJson.folder);
                var includefiles = new List<string>();
                foreach (var includefile in PluginJson.includefiles)
                    includefiles.AddRange(Directory.GetFiles(folder, includefile).ToList());
                foreach (var includefile in PluginJson.includefiles)
                {
                    var other = includefile.Replace("*.", string.Empty);
                    includefiles.AddRange(Directory.GetFiles(folder, other).ToList());
                }
                var excludefiles = new List<string>();
                foreach (var excludefile in PluginJson.excludefiles)
                    excludefiles.AddRange(Directory.GetFiles(folder, excludefile).ToList());
                foreach (var excludefile in PluginJson.excludefiles)
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
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            CliLog.WriteLine(CliLog.ColorGreen, "START PLUGIN TASKS");
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            if (PluginFiles.Count() == 0) throw new Exception("No plugin files found. Please check PL.DynamicsCrm.DevKit.Cli.json file!!");
            if (PluginJson.solution.Length == 0 || PluginJson.solution == "???") throw new Exception("No solution found in plugin profile. Please check PL.DynamicsCrm.DevKit.Cli.json file!!");
            foreach (var pluginFile in PluginFiles) RegisterPlugin(pluginFile);
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
            CliLog.WriteLine(CliLog.ColorGreen, "END PLUGIN TASKS");
            CliLog.WriteLine(CliLog.ColorGreen, new string('*', CliLog.StarLength));
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
            var pluginTypes = assembly.DefinedTypes.Where(p =>
                p.GetInterfaces().FirstOrDefault(a => a.Name == typeof(IPlugin).Name) != null);
            AppDomain.CurrentDomain.ReflectionOnlyAssemblyResolve -= CurrentDomain_ReflectionOnlyAssemblyResolve;
            var plugins = (from pluginType in pluginTypes
                           where pluginType.IsAbstract == false
                           select pluginType
                ).ToList();
            if (!plugins.Any()) return;
            var pluginEntity = RegisterAssembly(assemblyFilePath, assembly, plugins);
            if (pluginEntity == null) return;
            AddAssemblyToSolution(pluginEntity);
            foreach (var plugin in plugins)
            {
                var pluginAttributes = plugin.GetCustomAttributesData()
                                      .Where(a => a.AttributeType.Name == typeof(CrmPluginRegistrationAttribute).Name);
                var customAttributeDatas = pluginAttributes as CustomAttributeData[] ?? pluginAttributes.ToArray();
                if (!customAttributeDatas.Any()) continue;
                var pluginTypeEntity = RegisterPluginType(pluginEntity, plugin);
                RegisterPluginSteps(pluginTypeEntity, plugin);
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
            if (rows.Entities.Count != 0) {
                CliLog.WriteLine(CliLog.ColorGreen, $"\tNo Change Type: ", CliLog.ColorCyan, $"{plugin.FullName}");
                return rows.Entities[0];
            }
            var pluginType = new Entity("plugintype")
            {
                ["name"] = plugin.FullName,
                ["pluginassemblyid"] = new EntityReference("pluginassembly", Guid.Parse(pluginEntity["pluginassemblyid"].ToString())),
                ["typename"] = plugin.FullName,
                ["friendlyname"] = plugin.FullName
            };
            CliLog.WriteLine(CliLog.ColorGreen, $"\tRegistering Type: ", CliLog.ColorCyan, $"{plugin.FullName}");
            var pluginTypeId = CrmServiceClient.Create(pluginType);
            pluginType["plugintypeid"] = pluginTypeId;
            pluginType.Id = pluginTypeId;
            return pluginType;
        }

        private void RegisterPluginSteps(Entity pluginTypeEntity, TypeInfo plugin)
        {
            var pluginAttributes = plugin.GetCustomAttributesData()
                .Where(a => a.AttributeType.Name == typeof(CrmPluginRegistrationAttribute).Name);
            var customAttributeDatas = pluginAttributes as CustomAttributeData[] ?? pluginAttributes.ToArray();
            if (!customAttributeDatas.Any()) return;

            foreach (var pluginAttribute in customAttributeDatas)
            {
                var attribute = pluginAttribute.CreateFromData();
                var fetchData = new
                {
                    plugintypeid = pluginTypeEntity["plugintypeid"].ToString(),
                    name = attribute.Name,
                    sdkmessageidname = attribute.Message
                };
                var fetchXml = $@"
<fetch>
  <entity name='sdkmessageprocessingstep'>
    <all-attributes />
    <filter type='and'>
      <condition attribute='plugintypeid' operator='eq' value='{fetchData.plugintypeid}'/>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
      <condition attribute='sdkmessageidname' operator='eq' value='{fetchData.sdkmessageidname}'/>
    </filter>
  </entity>
</fetch>";
                var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                Entity check = null;
                if (rows.Entities.Count == 0)
                {
                    check = new Entity("sdkmessageprocessingstep", Guid.Empty);
                }
                else if (rows.Entities.Count == 1)
                {
                    check = rows.Entities[0];
                }
                else throw new Exception("sdkmessageprocessingstep return more than 1 rows");
                if (attribute.Message.ToLower() == "update")
                {
                    if (attribute.FilteringAttributes.Length == 0)
                    {
                        const string message = "Update Message should have FilteringAttributes value";
                        CliLog.WriteLine(CliLog.ColorError, message);
                        throw new Exception(message);
                    }
                }
                var sdkMessageFilterId = GetSdkMessageFilterId(attribute.EntityLogicalName, attribute.Message);
                var sdkMessageId = GetSdkMessageId(attribute.EntityLogicalName, attribute.Message);
                var impersonatingUserId = GetImpersonatingUserId(attribute.RunAs);
                if (attribute.ExecutionMode == 0)
                    attribute.DeleteAsyncOperation = false; //when ExecutionModeEnum.Synchronous this field always false;
                var step = new Entity("sdkmessageprocessingstep")
                {
                    ["name"] = attribute.Name,
                    ["configuration"] = attribute.UnSecureConfiguration,
                    ["description"] = attribute.Description,
                    ["mode"] = new OptionSetValue(attribute.ExecutionMode == ExecutionModeEnum.Asynchronous ? 1 : 0),
                    ["rank"] = attribute.ExecutionOrder,
                    ["stage"] = new OptionSetValue((int)attribute.Stage),
                    ["asyncautodelete"] = attribute.DeleteAsyncOperation,
                    ["plugintypeid"] = new EntityReference("plugintype", pluginTypeEntity.Id),
                    ["sdkmessagefilterid"] = sdkMessageFilterId,
                    ["sdkmessageid"] = sdkMessageId,
                    ["filteringattributes"] = attribute.FilteringAttributes.Replace(" ", ""),
                    ["impersonatinguserid"] = impersonatingUserId != null ? new EntityReference("systemuser", impersonatingUserId.Value) : null
                };
                var supportDeployment = 0;
                if (attribute.Server && attribute.Offline)
                    supportDeployment = 2; // Both
                else if (!attribute.Server && attribute.Offline)
                    supportDeployment = 1; // Offline only
                else
                    supportDeployment = 0; // Server Only
                step["supporteddeployment"] = new OptionSetValue(supportDeployment);
                Guid sdkMessageProcessingStepId;
                if (rows.Entities.Count > 0)
                {
                    if (attribute.Action == PluginStepOperationEnum.Deactivate)
                    {
                        step["statecode"] = new OptionSetValue(1);
                        step["statuscode"] = new OptionSetValue(2);
                    }
                    else
                    {
                        step["statecode"] = new OptionSetValue(0);
                        step["statuscode"] = new OptionSetValue(1);
                    }
                    sdkMessageProcessingStepId = rows.Entities[0].Id;
                    step.Id = sdkMessageProcessingStepId;
                    step["sdkmessageprocessingstepid"] = sdkMessageProcessingStepId;
                    var entity = GetSecureEntity(attribute);
                    if (entity != null)
                    {
                        var secureconfig = entity.GetAttributeValue<AliasedValue>("s.secureconfig");
                        if (secureconfig == null)
                        {
                            if (attribute.SecureConfiguration.Length > 0)
                            {
                                var secureEntity = new Entity("sdkmessageprocessingstepsecureconfig");
                                secureEntity["secureconfig"] = attribute.SecureConfiguration;
                                var sdkmessageprocessingstepsecureconfigid = CrmServiceClient.Create(secureEntity);
                                step["sdkmessageprocessingstepsecureconfigid"] = new EntityReference("sdkmessageprocessingstepsecureconfig", sdkmessageprocessingstepsecureconfigid);
                            }
                        }
                        else
                        {
                            var sdkmessageprocessingstepsecureconfigid = (Guid)entity.GetAttributeValue<AliasedValue>("s.sdkmessageprocessingstepsecureconfigid").Value;
                            if (secureconfig.Value.ToString() != attribute.SecureConfiguration)
                            {
                                var update = new Entity("sdkmessageprocessingstepsecureconfig", sdkmessageprocessingstepsecureconfigid);
                                update["secureconfig"] = attribute.SecureConfiguration;
                                CrmServiceClient.Update(update);
                            }
                            else if (attribute.SecureConfiguration.Length == 0)
                            {
                                CrmServiceClient.Delete("sdkmessageprocessingstepsecureconfig", sdkmessageprocessingstepsecureconfigid);
                            }
                        }
                    }
                    if (!IsChangedPluginStep(check, step))
                    {
                        CliLog.WriteLine(CliLog.ColorGreen, $"\t\tNo Change Step: ", CliLog.ColorCyan, $"{attribute.Name}");
                    }
                    else
                    {
                        CliLog.WriteLine(CliLog.ColorGreen, $"\t\tUpdating Step: ", CliLog.ColorCyan, $"{attribute.Name}");
                        CrmServiceClient.Update(step);
                    }
                }
                else
                {
                    if (attribute.SecureConfiguration.Length > 0)
                    {
                        var secureEntity = new Entity("sdkmessageprocessingstepsecureconfig");
                        secureEntity["secureconfig"] = attribute.SecureConfiguration;
                        var sdkmessageprocessingstepsecureconfigid = CrmServiceClient.Create(secureEntity);
                        step["sdkmessageprocessingstepsecureconfigid"] = new EntityReference("sdkmessageprocessingstepsecureconfig", sdkmessageprocessingstepsecureconfigid);
                    }
                    CliLog.WriteLine(CliLog.ColorGreen, $"\t\tRegistering Step: ", CliLog.ColorCyan, $"{attribute.Name}");
                    sdkMessageProcessingStepId = CrmServiceClient.Create(step);
                    step["sdkmessageprocessingstepid"] = sdkMessageProcessingStepId;
                    if (attribute.Action == PluginStepOperationEnum.Deactivate)
                    {
                        var update = new Entity("sdkmessageprocessingstep", sdkMessageProcessingStepId);
                        update["statecode"] = new OptionSetValue(1);
                        update["statuscode"] = new OptionSetValue(2);
                        CrmServiceClient.Update(update);
                    }
                }
                AddStepToSolution(step);
                ProcessPluginImages(attribute, sdkMessageProcessingStepId);
            }
        }

        private bool IsChangedPluginStep(Entity check, Entity step)
        {
            foreach(var key in check.Attributes.Keys)
            {
                if (step.Attributes.Contains(key))
                {
                    object checkValue = null;
                    object stepValue = null;
                    if (check.Attributes[key] is OptionSetValue && step.Attributes[key] is OptionSetValue)
                    {
                        checkValue = ((OptionSetValue)check.Attributes[key]).Value;
                        stepValue = ((OptionSetValue)step.Attributes[key]).Value;
                    }
                    else if (check.Attributes[key] is EntityReference && step.Attributes[key] is EntityReference)
                    {
                        checkValue = ((EntityReference)check.Attributes[key]).Id;
                        stepValue = ((EntityReference)step.Attributes[key]).Id;
                    }
                    else
                    {
                        stepValue = step.Attributes[key];
                        checkValue = check.Attributes[key];
                    }
                    if (stepValue?.ToString() != checkValue?.ToString())
                        return true;
                }
            }
            return false;
        }

        private Guid? GetImpersonatingUserId(string runAs)
        {
            if (runAs.Length == 0) return (Guid?)null;
            var fetchData = new
            {
                fullname = runAs
            };
            var fetchXml = $@"
<fetch>
  <entity name='systemuser'>
    <attribute name='systemuserid' />
    <filter type='and'>
      <condition attribute='fullname' operator='eq' value='{fetchData.fullname/*MOD Administrator*/}'/>
    </filter>
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) return (Guid?)null;
            return rows.Entities[0].Id;

        }

        private Entity GetSecureEntity(CrmPluginRegistrationAttribute attribute)
        {
            var fetchData = new
            {
                typename = attribute.Name
            };
            var fetchXml = $@"
<fetch>
  <entity name='sdkmessageprocessingstep'>
    <attribute name='name' />
    <attribute name='sdkmessageprocessingstepid' />
    <link-entity name='sdkmessageprocessingstepsecureconfig' from='sdkmessageprocessingstepsecureconfigid' to='sdkmessageprocessingstepsecureconfigid' link-type='outer' alias='s'>
      <attribute name='secureconfig' />
      <attribute name='sdkmessageprocessingstepsecureconfigid' />
    </link-entity>
    <link-entity name='plugintype' from='plugintypeid' to='plugintypeid' link-type='inner' alias='p'>
      <attribute name='plugintypeid' />
      <filter type='and'>
        <condition attribute='typename' operator='eq' value='{fetchData.typename/*AccountPlugin.PostDeleteAccount*/}'/>
      </filter>
    </link-entity>
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 1) return null;
            return rows.Entities[0];
        }

        private void ProcessPluginImages(CrmPluginRegistrationAttribute attribute, Guid sdkMessageProcessingStepId)
        {
            if (attribute.Image1Name.Length > 0)
                RegisterImage(attribute.Message, attribute.Image1Name, attribute.Image1Alias, attribute.Image1Type, attribute.Image1Attributes, sdkMessageProcessingStepId);
            if (attribute.Image2Name.Length > 0)
                RegisterImage(attribute.Message, attribute.Image2Name, attribute.Image2Alias, attribute.Image2Type, attribute.Image2Attributes, sdkMessageProcessingStepId);
            if (attribute.Image3Name.Length > 0)
                RegisterImage(attribute.Message, attribute.Image3Name, attribute.Image3Alias, attribute.Image3Type, attribute.Image3Attributes, sdkMessageProcessingStepId);
            if (attribute.Image4Name.Length > 0)
                RegisterImage(attribute.Message, attribute.Image4Name, attribute.Image4Alias, attribute.Image4Type, attribute.Image4Attributes, sdkMessageProcessingStepId);
        }

        private void RegisterImage(string message, string imageName, string imageAliasName, ImageTypeEnum imageType, string imageAttributes, Guid sdkMessageProcessingStepId)
        {
            if (imageAliasName.Length == 0) imageAliasName = imageName;
            var image = new Entity("sdkmessageprocessingstepimage")
            {
                ["name"] = imageName,
                ["imagetype"] = new OptionSetValue((int) imageType),
                ["sdkmessageprocessingstepid"] = new EntityReference("sdkmessageprocessingstep", sdkMessageProcessingStepId),
                ["attributes"] = imageAttributes.Replace(" ", ""),
                ["entityalias"] = imageAliasName,
                ["messagepropertyname"] = message == "Create" ? "Id" : "Target"
            };
            var fetchData = new
            {
                name = imageName,
                sdkmessageprocessingstepid = sdkMessageProcessingStepId,
                imagetype = (int) imageType
            };
            var fetchXml = $@"
<fetch>
  <entity name='sdkmessageprocessingstepimage'>
    <attribute name='sdkmessageprocessingstepimageid' />
    <attribute name='name' />
    <attribute name='entityalias' />
    <attribute name='attributes' />
    <attribute name='imagetype' />
    <filter type='and'>
      <condition attribute='sdkmessageprocessingstepid' operator='eq' value='{fetchData.sdkmessageprocessingstepid}'/>
      <condition attribute='imagetype' operator='eq' value='{fetchData.imagetype}'/>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
    </filter>
  </entity>
</fetch>";
            var rows = CrmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0)
            {
                if (imageAttributes.Replace(" ", "").Length > 0)
                {
                    CliLog.WriteLine(CliLog.ColorGreen, "\t\t\tRegistering Image: ", CliLog.ColorCyan, $"{imageName}");
                    CrmServiceClient.Create(image);
                }
            }
            else
            {
                var row = rows.Entities[0];
                var name = row.GetAttributeValue<string>("name");
                var entityalias = row.GetAttributeValue<string>("entityalias");
                var attributes = row.GetAttributeValue<string>("attributes");
                var imagetype = row.GetAttributeValue<OptionSetValue>("imagetype").Value;
                if (name == imageName &&
                    entityalias == imageAliasName &&
                    attributes == imageAttributes.Replace(" ", "") &&
                    imagetype == (int)imageType)
                {
                    CliLog.WriteLine(CliLog.ColorGreen, "\t\t\tNo Change Image: ", CliLog.ColorCyan, $"{imageName}");
                }
                else
                {
                    if (attributes != imageAttributes.Replace(" ", "") && imageAttributes.Replace(" ", "").Length != 0)
                    {
                        image["sdkmessageprocessingstepimageid"] = rows.Entities[0].Id;
                        CliLog.WriteLine(CliLog.ColorGreen, "\t\t\tUpdating Image: ", CliLog.ColorCyan, $"{imageName}");
                        CrmServiceClient.Update(image);
                    }
                    else if (imageAttributes.Replace(" ", "").Length == 0)
                    {
                        CliLog.WriteLine(CliLog.ColorGreen, "\t\t\tDeleting Image: ", CliLog.ColorCyan, $"{imageName}");
                        CrmServiceClient.Delete("sdkmessageprocessingstepimage", rows.Entities[0].Id);
                    }
                }
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
            return rows.Entities.Count == 0 ? null : new EntityReference("sdkmessagefilter", rows.Entities[0].Id);
        }

        private int GetPrimaryObjectTypeCode(string entityName)
        {
            var request = new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Entity,
                LogicalName = entityName.ToLower()
            };
            var response = (RetrieveEntityResponse) CrmServiceClient.Execute(request);
            return response.EntityMetadata.ObjectTypeCode ?? 0;
        }

        private EntityReference GetSdkMessageId(string entityLogicalName, string message)
        {
            string fetchXml;
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
            return rows.Entities.Count == 0 ? null : new EntityReference("sdkmessage", rows.Entities[0].Id);
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
            if (rows.Entities.Count != 0) return;
            var request = new AddSolutionComponentRequest
            {
                AddRequiredComponents = true,
                ComponentType = 91,
                ComponentId = Guid.Parse(plugin["pluginassemblyid"].ToString()),
                SolutionUniqueName = PluginJson.solution
            };
            CliLog.WriteLine(CliLog.ColorGreen, "Adding Assembly: ", CliLog.ColorCyan, $"{plugin["name"]} ", CliLog.ColorGreen, "to solution: ", CliLog.ColorCyan, $"{PluginJson.solution}");
            CrmServiceClient.Execute(request);
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
            if (rows.Entities.Count != 0) return;
            var request = new AddSolutionComponentRequest
            {
                AddRequiredComponents = false,
                ComponentType = 92,
                ComponentId = Guid.Parse(step["sdkmessageprocessingstepid"].ToString()),
                SolutionUniqueName = PluginJson.solution
            };
            CliLog.WriteLine(CliLog.ColorGreen, "\t\tAdding Step: ", CliLog.ColorCyan, $"{step["name"]} ", CliLog.ColorGreen, "to solution: ", CliLog.ColorCyan, $"{PluginJson.solution}");
            CrmServiceClient.Execute(request);
        }

        private IEnumerable<CustomAttributeData> GetAttributes(IEnumerable<Type> types, string attributeName)
        {
            var attributes = new List<CustomAttributeData>();
            foreach (var type in types)
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
                const string message = "Plugin Assembly don't have any type: CrmPluginRegistrationAttribute";
                CliLog.WriteLine(CliLog.ColorError, message);
                throw new Exception(message);
            }
            var firstTypeAttribute = firstType.CreateFromData();
            var assemblyProperties = assembly.GetName().FullName
                .Split(",= ".ToCharArray(), StringSplitOptions.RemoveEmptyEntries);
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
            var plugin = new Entity("pluginassembly")
            {
                ["content"] = content,
                ["name"] = assemblyProperties[0],
                ["culture"] = assemblyProperties[4],
                ["version"] = assemblyProperties[2],
                ["publickeytoken"] = assemblyProperties[6],
                ["sourcetype"] = new OptionSetValue(0),
                ["isolationmode"] = firstTypeAttribute.IsolationMode == IsolationModeEnum.Sandbox ? new OptionSetValue(2) : new OptionSetValue(1)
            };
            if (pluginAssemblyId == Guid.Empty)
            {
                CliLog.WriteLine(CliLog.ColorGreen, "Registering Assembly: ", CliLog.ColorCyan, $"{assemblyProperties[0]}");
                pluginAssemblyId = CrmServiceClient.Create(plugin);
                plugin["pluginassemblyid"] = pluginAssemblyId;
            }
            else
            {
                CliLog.WriteLine(CliLog.ColorGreen, "Updating Assembly: ", CliLog.ColorCyan, $"{assemblyProperties[0]}");
                plugin["pluginassemblyid"] = pluginAssemblyId;
                CrmServiceClient.Update(plugin);
            }
            return plugin;
        }
    }
}
