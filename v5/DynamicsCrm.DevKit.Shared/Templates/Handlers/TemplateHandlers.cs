namespace DynamicsCrm.DevKit.Shared.Templates.Handlers
{
    /// <summary>
    /// Host-side registration point for every template handler: the CLI
    /// (TaskNew), the VSIX package and the MCP host each call RegisterAll
    /// once at startup. Handlers and their manifests live here in Shared
    /// while hosts stay ignorant of individual templates. Registering the
    /// same handler twice is a no-op (dictionary set semantics).
    /// </summary>
    public static class TemplateHandlers
    {
        public static void RegisterAll()
        {
            ScaffoldingEngine.RegisterHandler(new SharedProjectTemplateHandler());
            TemplateManifests.Register(SharedProjectTemplateHandler.CreateManifest());
            ScaffoldingEngine.RegisterHandler(new ConsoleProjectTemplateHandler());
            TemplateManifests.Register(ConsoleProjectTemplateHandler.CreateManifest());
            ScaffoldingEngine.RegisterHandler(new ConsoleCoreProjectTemplateHandler());
            TemplateManifests.Register(ConsoleCoreProjectTemplateHandler.CreateManifest());
            ScaffoldingEngine.RegisterHandler(new ServerProjectTemplateHandler());
            TemplateManifests.Register(ServerProjectTemplateHandler.CreateManifest());
            ScaffoldingEngine.RegisterHandler(new PackageProjectTemplateHandler());
            TemplateManifests.Register(PackageProjectTemplateHandler.CreateManifest());
            ScaffoldingEngine.RegisterHandler(new WebResourceProjectTemplateHandler());
            TemplateManifests.Register(WebResourceProjectTemplateHandler.CreateManifest());
            ScaffoldingEngine.RegisterHandler(new SharedTestProjectTemplateHandler());
            TemplateManifests.Register(SharedTestProjectTemplateHandler.CreateManifest());
        }
    }
}
