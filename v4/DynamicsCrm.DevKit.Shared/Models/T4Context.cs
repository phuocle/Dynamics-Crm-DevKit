using System;

namespace DynamicsCrm.DevKit.Shared.Models
{

    [Serializable]
    public class T4Context
    {
        public string NameSpace { get; set; }
        public string PluginMessage { get; set; }
        public string EntityLogicalName { get; set; }
        public string EntitySchemaName { get; set; }
        public string PluginStage { get; set; }
        public string PluginExecution { get; set; }
        public string Comment { get; set; }
        public string PluginClass { get; set; }
        //public string PluginSharedNameSpace { get; set; }
        //public string DataSource { get; set; }
        //public string ProxyTypes {get;set; }
        //public bool IsNeedDeleteAsyncOperation => PluginExecution == "Asynchronous";
    }
}
