using System;
using System.Linq;

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
        public int PluginOrder { get; set; }
        public string PluginComment { get; set; }
        public string Class { get; set; }
        public string PluginSharedNameSpace { get; set; }
        public string DataSource { get; set; }
        public string ProxyTypes {get;set; }
        public bool IsPluginSupportedPreImage
        {
            get
            {
                if (string.IsNullOrEmpty(PluginMessage)) return false;
                string normalizedMessage = PluginMessage.ToLowerInvariant();
                return MessagesSupportingPreImage.Contains(normalizedMessage);
            }
        }
        public bool IsPluginSupportedPostImage
        {
            get
            {
                if (string.IsNullOrEmpty(PluginMessage)) return false;
                if (string.IsNullOrEmpty(PluginStage)) return false;
                string normalizedMessage = PluginMessage.ToLowerInvariant();
                bool messageSupportsPostImage = MessagesSupportingPostImage.Contains(normalizedMessage);
                // PostImage is only available in PostOperation stage (40)
                // In PreValidation (10) and PreOperation (20), the database hasn't been modified yet
                bool isPostOperationStage = PluginStage.Contains("40") || PluginStage.Contains("PostOperation");
                return messageSupportsPostImage && isPostOperationStage;
            }
        }

        private readonly string[] MessagesSupportingPreImage = new string[]
        {
            "assign", "delete", "merge", "route", "send", "setstate", "setstatedynamicentity", "update", "updatemultiple", "executeworkflow", "deliverincoming", "deliverpromote",
        };

        private readonly string[] MessagesSupportingPostImage = new string[]
        {
            "assign", "create", "deliverincoming", "deliverpromote", "merge", "route", "send", "setstate", "setstatedynamicentity", "update", "createmultiple", "updatemultiple", "executeworkflow",
        };
    }
}
