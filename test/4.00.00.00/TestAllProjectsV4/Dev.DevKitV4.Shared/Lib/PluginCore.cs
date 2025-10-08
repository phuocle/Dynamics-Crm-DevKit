using System;
using System.Diagnostics;

namespace Dev.DevKitV4.Shared
{
    public enum ImageType
    {
        Pre,
        Post
    }

    public enum ExecutionModeEnum
    {
        Synchronous = 0,
        Asynchronous = 1
    }

    public enum ImageTypeEnum
    {
        PreImage = 0,
        PostImage = 1,
        Both = 2
    }

    public enum IsolationModeEnum
    {
        None = 1,
        Sandbox = 2,
        External = 3,
    }

    public enum SourceTypeEnum
    {
        Database = 0,
        Disk = 1,
        Normal = 2,
        AzureWebApp = 3,
        FileStore = 4
    }

    public enum PluginStepOperationEnum
    {
        Activate = 0,
        Deactivate = 1
    }

    public enum StageEnum
    {
        PreValidation = 10,
        PreOperation = 20,
        PostOperation = 40
    }

    public enum PluginType
    {
        Plugin = 0,
        Workflow = 1,
        CustomAction = 2,
        DataProvider = 3,
        CustomApi = 4
    }

    [DebuggerNonUserCode()]
    [AttributeUsage(AttributeTargets.Class, Inherited = false, AllowMultiple = true)]
    public class CrmPluginRegistrationAttribute : Attribute
    {
        public CrmPluginRegistrationAttribute(string message, string entityLogicalName, StageEnum stage, ExecutionModeEnum executionMode, string filteringAttributes, string stepName, int executionOrder, IsolationModeEnum isolationModel)
        {
            Message = message;
            EntityLogicalName = entityLogicalName;
            Stage = stage;
            ExecutionMode = executionMode;
            FilteringAttributes = filteringAttributes;
            Name = stepName;
            ExecutionOrder = executionOrder;
            IsolationMode = isolationModel;
        }

        public CrmPluginRegistrationAttribute(string name, string friendlyName, string description, string groupName, IsolationModeEnum isolationModel)
        {
            Name = name;
            FriendlyName = friendlyName;
            Description = description;
            GroupName = groupName;
            IsolationMode = isolationModel;
        }

        public CrmPluginRegistrationAttribute(string name, string message, PluginType pluginType)
        {
            Name = name;
            Message = message;
            PluginType = pluginType;
        }

        public bool Unregister { get; set; } = false;
        public string RunAs { get; set; } = string.Empty;
        public string FriendlyName { get; set; } = string.Empty;
        public string GroupName { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public bool DeleteAsyncOperation { get; set; } = true;
        public bool Offline { get; set; } = false;
        public bool Server { get; set; } = true;
        public PluginStepOperationEnum Action { get; set; } = PluginStepOperationEnum.Activate;
        public IsolationModeEnum IsolationMode { get; set; } = IsolationModeEnum.Sandbox;
        public string Message { get; set; } = string.Empty;
        public string EntityLogicalName { get; set; } = string.Empty;
        public string FilteringAttributes { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public int ExecutionOrder { get; set; } = 1;
        public StageEnum Stage { get; set; } = StageEnum.PostOperation;
        public ExecutionModeEnum ExecutionMode { get; set; } = ExecutionModeEnum.Asynchronous;
        public string UnSecureConfiguration { get; set; } = string.Empty;
        public string SecureConfiguration { get; set; } = string.Empty;
        public string Image1Name { get; set; } = string.Empty;
        public string Image1Alias { get; set; } = string.Empty;
        public ImageTypeEnum Image1Type { get; set; } = ImageTypeEnum.PreImage;
        public string Image1Attributes { get; set; } = string.Empty;
        public string Image2Name { get; set; } = string.Empty;
        public string Image2Alias { get; set; } = string.Empty;
        public ImageTypeEnum Image2Type { get; set; } = ImageTypeEnum.PostImage;
        public string Image2Attributes { get; set; } = string.Empty;
        public string Image3Name { get; set; } = string.Empty;
        public string Image3Alias { get; set; } = string.Empty;
        public ImageTypeEnum Image3Type { get; set; } = ImageTypeEnum.PostImage;
        public string Image3Attributes { get; set; } = string.Empty;
        public string Image4Name { get; set; } = string.Empty;
        public string Image4Alias { get; set; } = string.Empty;
        public ImageTypeEnum Image4Type { get; set; } = ImageTypeEnum.PostImage;
        public string Image4Attributes { get; set; } = string.Empty;
        public PluginType PluginType { get; set; }
        public string DataSource { get; set; }
    }

    public enum CredentialSource
    {
        ClientSecret = 0,
        KeyVault = 1,
        IsManaged = 2,
        MicrosoftFirstPartyCertificate = 3
    }

    public enum SubjectScope
    {
        GlobalScope = 0,
        EnviornmentScope = 1,
        DevOnlyScope = 2
    }

    [DebuggerNonUserCode()]
    [AttributeUsage(AttributeTargets.Assembly, Inherited = false, AllowMultiple = false)]
    public class DynamcisCrmDevkitAssemblyAttribute : Attribute
    {
        public string ApplicationId { get; set; }
        public string TenantId { get; set; }
        public CredentialSource CredentialSource { get; set; } = CredentialSource.IsManaged;
        public SubjectScope SubjectScope { get; set; } = SubjectScope.GlobalScope;
        public string CertificatePath { get; set; } = string.Empty;
        public string CertificatePassword { get; set; } = string.Empty;
        public IsolationModeEnum IsolationMode { get; set; } = IsolationModeEnum.Sandbox;
        public SourceTypeEnum SourceType { get; set; } = SourceTypeEnum.Database;
    }
}
