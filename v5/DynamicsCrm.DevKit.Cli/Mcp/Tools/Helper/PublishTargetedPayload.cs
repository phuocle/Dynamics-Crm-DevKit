using System;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    public sealed class PublishTargetedPayload
    {
        public IReadOnlyList<string> EntityNames { get; set; } = Array.Empty<string>();
        public IReadOnlyList<Guid> AppModuleIds { get; set; } = Array.Empty<Guid>();
        public IReadOnlyList<string> OptionSetNames { get; set; } = Array.Empty<string>();
        public IReadOnlyList<Guid> DashboardIds { get; set; } = Array.Empty<Guid>();
        public IReadOnlyList<Guid> WebResourceIds { get; set; } = Array.Empty<Guid>();
        public bool IncludeGlobalOptionSets { get; set; }
        public bool IncludeRibbons { get; set; }
        public bool IncludeSiteMap { get; set; }
    }
}
