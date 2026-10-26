using DynamicsCrm.DevKit.Shared.Templates.Models;

namespace DynamicsCrm.DevKit.Shared.Templates.Handlers
{
    /// <summary>
    /// Host-side registration point for every template handler: the CLI
    /// (TaskNew), the VSIX package and the MCP host each call RegisterAll
    /// once at startup. Handlers and their manifests live here in Shared
    /// while hosts stay ignorant of individual templates. The registries
    /// are kind-scoped (project/item may share an id), and registering the
    /// same (kind, id) twice is a no-op (dictionary set semantics).
    /// </summary>
    public static class TemplateHandlers
    {
        public static void RegisterAll()
        {
            ScaffoldingEngine.RegisterHandler(TemplateKind.Project, new SharedProjectTemplateHandler());
            TemplateManifests.Register(SharedProjectTemplateHandler.CreateManifest());
            ScaffoldingEngine.RegisterHandler(TemplateKind.Project, new ConsoleProjectTemplateHandler());
            TemplateManifests.Register(ConsoleProjectTemplateHandler.CreateManifest());
            ScaffoldingEngine.RegisterHandler(TemplateKind.Project, new ConsoleCoreProjectTemplateHandler());
            TemplateManifests.Register(ConsoleCoreProjectTemplateHandler.CreateManifest());
            ScaffoldingEngine.RegisterHandler(TemplateKind.Project, new ServerProjectTemplateHandler());
            TemplateManifests.Register(ServerProjectTemplateHandler.CreateManifest());
            ScaffoldingEngine.RegisterHandler(TemplateKind.Project, new PackageProjectTemplateHandler());
            TemplateManifests.Register(PackageProjectTemplateHandler.CreateManifest());
            ScaffoldingEngine.RegisterHandler(TemplateKind.Project, new WebResourceProjectTemplateHandler());
            TemplateManifests.Register(WebResourceProjectTemplateHandler.CreateManifest());
            ScaffoldingEngine.RegisterHandler(TemplateKind.Project, new SharedTestProjectTemplateHandler());
            TemplateManifests.Register(SharedTestProjectTemplateHandler.CreateManifest());
            ScaffoldingEngine.RegisterHandler(TemplateKind.Project, new ProxyTypesProjectTemplateHandler());
            TemplateManifests.Register(ProxyTypesProjectTemplateHandler.CreateManifest());
            ScaffoldingEngine.RegisterHandler(TemplateKind.Project, new TestProjectTemplateHandler());
            TemplateManifests.Register(TestProjectTemplateHandler.CreateManifest());
            ScaffoldingEngine.RegisterHandler(TemplateKind.Project, new UiTestProjectTemplateHandler());
            TemplateManifests.Register(UiTestProjectTemplateHandler.CreateManifest());
            ScaffoldingEngine.RegisterHandler(TemplateKind.Project, new SolutionPackagerProjectTemplateHandler());
            TemplateManifests.Register(SolutionPackagerProjectTemplateHandler.CreateManifest());
            ScaffoldingEngine.RegisterHandler(TemplateKind.Project, new ReportProjectTemplateHandler());
            TemplateManifests.Register(ReportProjectTemplateHandler.CreateManifest());
            ScaffoldingEngine.RegisterHandler(TemplateKind.Project, new WebResourceTsProjectTemplateHandler());
            TemplateManifests.Register(WebResourceTsProjectTemplateHandler.CreateManifest());
        }
    }
}
