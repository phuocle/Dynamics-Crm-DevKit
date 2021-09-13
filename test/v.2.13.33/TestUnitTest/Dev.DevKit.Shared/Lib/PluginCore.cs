using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Runtime.Serialization;

namespace Dev.DevKit.Shared
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
        None = 0,
        Sandbox = 1
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

    public class DebugContext
    {
        public Guid? BusinessUnitId { get; set; }
        public Guid? CorrelationId { get; set; }
        public int? Depth { get; set; }
        public Guid? InitiatingUserId { get; set; }
        public bool? IsExecutingOffline { get; set; }
        public bool? IsInTransaction { get; set; }
        public bool? IsOfflinePlayback { get; set; }
        public int? IsolationMode { get; set; }
        public string MessageName { get; set; }
        public int? Mode { get; set; }
        public DateTime? OperationCreatedOn { get; set; }
        public Guid? OperationId { get; set; }
        public Guid? OrganizationId { get; set; }
        public string OrganizationName { get; set; }
        public DebugEntityReference OwningExtension { get; set; }
        public Guid? PrimaryEntityId { get; set; }
        public string PrimaryEntityName { get; set; }
        public Guid? RequestId { get; set; }
        public string SecondaryEntityName { get; set; }
        public ParameterCollection SharedVariables { get; set; }
        public Guid? UserId { get; set; }
        public Dictionary<string, object> InputParameters { get; set; }
        public Dictionary<string, object> OutputParameters { get; set; }
        public Dictionary<string, object> PostEntityImages { get; set; }
        public Dictionary<string, object> PreEntityImages { get; set; }
    }
    public class DebugEntity
    {
        public Dictionary<string, DebugAttributeValue> Attributes { get; set; }        
        public Dictionary<string, string> FormattedValues { get; set; }        
        public Dictionary<string, DebugAttributeValue> KeyAttributes { get; set; }
        public Guid? Id { get; set; }
        public string LogicalName { get; set; }
        public string RowVersion { get; set; }
    }

    public class DebugEntityReference
    {
        public Guid? Id { get; set; }
        public string LogicalName { get; set; }
    }
    public class DebugAttributeValue
    {
        public string Type { get; set; }        
        public object Value { get; set; }        
        public string EntityLogicalName { get; set; }
    }
}
