using System;

namespace DynamicsCrm.DevKit.Shared.Models
{
    internal class DataProviderEvent
    {
        public Guid PluginTypeId { get; set; }

        public string Message { get; set; }

        public string DataSource { get; set; }
    }
}
