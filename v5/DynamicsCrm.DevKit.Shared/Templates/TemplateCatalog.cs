using DynamicsCrm.DevKit.Shared.Templates.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.Shared.Templates
{
    /// <summary>
    /// Single source of truth for the template catalog shared by the VSIX,
    /// CLI (devkit new) and MCP hosts: 13 project templates and 17 item
    /// templates, keeping the original VSIX numbering (item 12 does not
    /// exist). Ids match the VSIX wizard class names so '--type' values stay
    /// stable across hosts.
    /// </summary>
    public static class TemplateCatalog
    {
        public static readonly IReadOnlyList<TemplateDescriptor> All = new List<TemplateDescriptor>
        {
            // ── Project templates (VSIX ProjectTemplates/CSharp/01..13) ──
            new TemplateDescriptor { Id = "Shared",           Kind = TemplateKind.Project, Order = 1,  DisplayName = "Shared Project",           Description = "Shared project (.shproj): plugin core, entities, DevKit.Cli.json setup",            RequiresConnection = false, SupportsCustomT4 = false },
            new TemplateDescriptor { Id = "Console",          Kind = TemplateKind.Project, Order = 2,  DisplayName = "Console Project",          Description = ".NET Framework 4.6.2 console project connected to Dataverse",                          RequiresConnection = false, SupportsCustomT4 = false },
            new TemplateDescriptor { Id = "ConsoleCore",      Kind = TemplateKind.Project, Order = 3,  DisplayName = "Console Core Project",     Description = ".NET 10 console project connected to Dataverse (cross-platform)",                      RequiresConnection = false, SupportsCustomT4 = false },
            new TemplateDescriptor { Id = "Server",           Kind = TemplateKind.Project, Order = 4,  DisplayName = "Server Project",           Description = "Plugin assembly project (plugins, workflows, custom actions/apis, data providers)",   RequiresConnection = false, SupportsCustomT4 = false },
            new TemplateDescriptor { Id = "Package",          Kind = TemplateKind.Project, Order = 5,  DisplayName = "Package Project",          Description = "Dataverse Package Deployer project",                                                   RequiresConnection = false, SupportsCustomT4 = false },
            new TemplateDescriptor { Id = "WebResource",      Kind = TemplateKind.Project, Order = 6,  DisplayName = "WebResource Project",      Description = "JavaScript web resource project (devkit.js + form/webapi generators + deploy)",        RequiresConnection = false, SupportsCustomT4 = false },
            new TemplateDescriptor { Id = "SharedTest",       Kind = TemplateKind.Project, Order = 7,  DisplayName = "SharedTest Project",       Description = "Shared test project (.shproj): FakeXrmEasy base, faker and plugin context helpers",    RequiresConnection = false, SupportsCustomT4 = false },
            new TemplateDescriptor { Id = "ProxyTypes",       Kind = TemplateKind.Project, Order = 8,  DisplayName = "ProxyTypes Project",       Description = "Early-bound proxy types project (devkit modelbuilder runner)",                         RequiresConnection = false, SupportsCustomT4 = false },
            new TemplateDescriptor { Id = "Test",             Kind = TemplateKind.Project, Order = 9,  DisplayName = "Test Project",             Description = "Unit test project for the server project (MSTest + FakeXrmEasy)",                      RequiresConnection = false, SupportsCustomT4 = false },
            new TemplateDescriptor { Id = "UiTest",           Kind = TemplateKind.Project, Order = 10, DisplayName = "UiTest Project",           Description = "UI automation test project (Selenium + Dynamics365.UIAutomation)",                     RequiresConnection = false, SupportsCustomT4 = false },
            new TemplateDescriptor { Id = "SolutionPackager", Kind = TemplateKind.Project, Order = 11, DisplayName = "SolutionPackager Project", Description = "Solution packager project (extract/pack via PAC CLI)",                                 RequiresConnection = false, SupportsCustomT4 = false },
            new TemplateDescriptor { Id = "Report",           Kind = TemplateKind.Project, Order = 12, DisplayName = "Report Project",           Description = "SSRS report project (download/upload reports via CLI)",                                RequiresConnection = false, SupportsCustomT4 = false },
            new TemplateDescriptor { Id = "WebResourceTs",    Kind = TemplateKind.Project, Order = 13, DisplayName = "WebResourceTs Project",    Description = "TypeScript web resource project (build.js + devkit.ts + generators + deploy)",         RequiresConnection = false, SupportsCustomT4 = false },

            // ── Item templates (VSIX ItemTemplates/CSharp/01..18, no 12) ──
            new TemplateDescriptor { Id = "LateBound",     Kind = TemplateKind.Item, Order = 1,  DisplayName = "Late Bound Class",    Description = "Late-bound entity class ({Entity}.cs + {Entity}.generated.cs)",                    RequiresConnection = true,  SupportsCustomT4 = false },
            new TemplateDescriptor { Id = "JsForm",        Kind = TemplateKind.Item, Order = 2,  DisplayName = "JS Form",             Description = "Form JavaScript for an entity ({Entity}.js + {Entity}.form.js + {Entity}.d.ts)",    RequiresConnection = true,  SupportsCustomT4 = false },
            new TemplateDescriptor { Id = "JsWebApi",      Kind = TemplateKind.Item, Order = 3,  DisplayName = "JS WebApi",           Description = "WebApi JavaScript for an entity ({Entity}.webapi.js + {Entity}.d.ts)",              RequiresConnection = true,  SupportsCustomT4 = false },
            new TemplateDescriptor { Id = "Plugin",        Kind = TemplateKind.Item, Order = 4,  DisplayName = "Plugin",              Description = "Plugin step class (T4-generated, CrmPluginRegistration)",                           RequiresConnection = true,  SupportsCustomT4 = true  },
            new TemplateDescriptor { Id = "CustomAction",  Kind = TemplateKind.Item, Order = 5,  DisplayName = "Custom Action",       Description = "Custom action handler class (T4-generated)",                                        RequiresConnection = true,  SupportsCustomT4 = true  },
            new TemplateDescriptor { Id = "CustomApi",     Kind = TemplateKind.Item, Order = 6,  DisplayName = "Custom Api",          Description = "Custom API handler class (T4-generated)",                                           RequiresConnection = true,  SupportsCustomT4 = true  },
            new TemplateDescriptor { Id = "Workflow",      Kind = TemplateKind.Item, Order = 7,  DisplayName = "Workflow",            Description = "Custom workflow activity class (T4-generated)",                                     RequiresConnection = true,  SupportsCustomT4 = true  },
            new TemplateDescriptor { Id = "DataProvider",  Kind = TemplateKind.Item, Order = 8,  DisplayName = "Data Provider",       Description = "Virtual entity data provider CRUD classes (5 files, T4-generated)",                 RequiresConnection = true,  SupportsCustomT4 = true  },
            new TemplateDescriptor { Id = "Test",          Kind = TemplateKind.Item, Order = 9,  DisplayName = "Test Class",          Description = "Unit test class for a plugin/workflow (T4-generated)",                              RequiresConnection = true,  SupportsCustomT4 = true  },
            new TemplateDescriptor { Id = "UiTest",        Kind = TemplateKind.Item, Order = 10, DisplayName = "UiTest Class",        Description = "UI test class (Selenium, T4-generated)",                                            RequiresConnection = false, SupportsCustomT4 = true  },
            new TemplateDescriptor { Id = "ResourceString",Kind = TemplateKind.Item, Order = 11, DisplayName = "Resource String",     Description = "Entity resource strings ({Entity}.{LanguageCode}.resx)",                            RequiresConnection = false, SupportsCustomT4 = false },
            new TemplateDescriptor { Id = "BatFile",       Kind = TemplateKind.Item, Order = 13, DisplayName = "Bat Utility Files",   Description = "Utility files (deploy bats, devkit.js/.d.ts, plugin managed identity)",              RequiresConnection = false, SupportsCustomT4 = false },
            new TemplateDescriptor { Id = "TsForm",        Kind = TemplateKind.Item, Order = 14, DisplayName = "TsForm (JsFormTs)",   Description = "Form TypeScript for an entity ({Entity}.ts + {Entity}.form.ts)",                    RequiresConnection = true,  SupportsCustomT4 = false },
            new TemplateDescriptor { Id = "TsWebApi",      Kind = TemplateKind.Item, Order = 15, DisplayName = "TS WebApi",           Description = "WebApi TypeScript for an entity ({Entity}.webapi.ts)",                              RequiresConnection = true,  SupportsCustomT4 = false },
            new TemplateDescriptor { Id = "TsDialog",      Kind = TemplateKind.Item, Order = 16, DisplayName = "TS Dialog",           Description = "Dialog TypeScript ({Name}.ts + {Name}.dialog.ts)",                                  RequiresConnection = false, SupportsCustomT4 = false },
            new TemplateDescriptor { Id = "JsDialog",      Kind = TemplateKind.Item, Order = 17, DisplayName = "JS Dialog",           Description = "Dialog JavaScript ({Name}.js + {Name}.dialog.js + {Name}.d.ts)",                    RequiresConnection = false, SupportsCustomT4 = false },
            new TemplateDescriptor { Id = "Report",        Kind = TemplateKind.Item, Order = 18, DisplayName = "Report (.rdl)",       Description = "SSRS report file from ReportTemplate.rdl with a FetchXml dataset",                  RequiresConnection = true,  SupportsCustomT4 = false },
        };

        public static IEnumerable<TemplateDescriptor> OfKind(TemplateKind kind)
        {
            return All.Where(x => x.Kind == kind).OrderBy(x => x.Order);
        }

        public static TemplateDescriptor Find(string id, TemplateKind? kind = null)
        {
            if (string.IsNullOrWhiteSpace(id)) return null;
            return All.FirstOrDefault(x =>
                string.Equals(x.Id, id.Trim(), StringComparison.OrdinalIgnoreCase)
                && (kind == null || x.Kind == kind.Value));
        }

        public static bool Exists(string id, TemplateKind? kind = null)
        {
            return Find(id, kind) != null;
        }
    }
}
