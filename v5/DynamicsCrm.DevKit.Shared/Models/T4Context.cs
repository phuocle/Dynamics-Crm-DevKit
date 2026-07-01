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
        public string ProxyTypes { get; set; }
        public string TestTargetFullClassName { get; set; }

        #region Entity Properties

        public string EntityLogicalName => PluginLogicalName ?? string.Empty;
        public string EntitySchemaName => PluginSchemaName ?? string.Empty;
        public string EntityDisplayName { get; set; }
        public string EntitySetName { get; set; }
        public int EntityTypeCode { get; set; }
        public bool IsCustomEntity { get; set; }

        #endregion

        #region Naming Helpers

        public string ClassWithOrder => PluginOrder != 1 ? $"{Class}{PluginOrder}" : Class ?? string.Empty;
        public string FullClassName => string.IsNullOrEmpty(PluginNameSpace) ? ClassWithOrder : $"{PluginNameSpace}.{ClassWithOrder}";
        public string RegistrationName => FullClassName;
        public bool HasTestTarget => !string.IsNullOrWhiteSpace(TestTargetFullClassName);
        public bool HasPluginTestGuardContext =>
            HasTestTarget &&
            !string.IsNullOrWhiteSpace(PluginStage) &&
            !string.IsNullOrWhiteSpace(PluginMessage) &&
            !string.IsNullOrWhiteSpace(EntityLogicalName) &&
            !string.IsNullOrWhiteSpace(PluginExecution);

        #endregion

        #region Stage Helpers

        public bool IsPreValidation => "PreValidation".Equals(PluginStage, StringComparison.OrdinalIgnoreCase);
        public bool IsPreOperation => "PreOperation".Equals(PluginStage, StringComparison.OrdinalIgnoreCase);
        public bool IsPostOperation => "PostOperation".Equals(PluginStage, StringComparison.OrdinalIgnoreCase);
        public int StageNumber
        {
            get
            {
                if (IsPreValidation) return 10;
                if (IsPreOperation) return 20;
                if (IsPostOperation) return 40;
                return 0;
            }
        }

        #endregion

        #region Execution Mode Helpers

        public bool IsAsynchronous => "Asynchronous".Equals(PluginExecution, StringComparison.OrdinalIgnoreCase);
        public bool IsSynchronous => "Synchronous".Equals(PluginExecution, StringComparison.OrdinalIgnoreCase);

        #endregion

        #region Message Helpers

        public bool IsCreateMessage => "Create".Equals(PluginMessage, StringComparison.OrdinalIgnoreCase);
        public bool IsUpdateMessage => "Update".Equals(PluginMessage, StringComparison.OrdinalIgnoreCase);
        public bool IsDeleteMessage => "Delete".Equals(PluginMessage, StringComparison.OrdinalIgnoreCase);
        public bool IsCreateMultipleMessage => "CreateMultiple".Equals(PluginMessage, StringComparison.OrdinalIgnoreCase);
        public bool IsUpdateMultipleMessage => "UpdateMultiple".Equals(PluginMessage, StringComparison.OrdinalIgnoreCase);

        #endregion

        #region Image Aliases

        public bool HasPreImage => IsPluginSupportedPreImage;
        public bool HasPostImage => IsPluginSupportedPostImage;

        #endregion

        #region Metadata

        public string GeneratedDate => DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
        public string DevKitVersion => Const.Version;

        #endregion

        #region Image Support (original)

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
                bool isPostOperationStage = PluginStage.Contains("40") || PluginStage.Contains("PostOperation");
                return messageSupportsPostImage && isPostOperationStage;
            }
        }

        #endregion

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
