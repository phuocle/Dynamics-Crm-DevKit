using System;

namespace DynamicsCrm.DevKit.Shared.Models
{

    [Serializable]
    public class T4Context
    {
        public string PluginNameSpace { get; set; }
        public string PluginMessage { get; set; }
        public string PluginLogicalName { get; set; }
        public string PluginSchemaName { get; set; }
        public string PluginStage { get; set; }
        public string PluginExecution { get; set; }
        public string PluginComment { get; set; }
        public string Class { get; set; }
        public string PluginSharedNameSpace { get; set; }
        public string DataSource { get; set; }
        public string ProxyTypes {get;set; }
        public bool IsNeedDeleteAsyncOperation => PluginExecution == "Asynchronous";
    }
}
