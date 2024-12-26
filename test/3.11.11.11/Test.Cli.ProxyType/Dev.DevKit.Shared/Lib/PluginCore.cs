using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

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

    public enum VirtualTablePlugin
    {
        Create = 0,
        Delete = 1,
        Retrieve = 2,
        RetrieveMultiple = 3,
        Update = 4
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

        public CrmPluginRegistrationAttribute(string name, VirtualTablePlugin virtualTablePlugin)
        {
            Name = name;
            VirtualTablePlugin = virtualTablePlugin;
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
        public VirtualTablePlugin? VirtualTablePlugin { get; set; } = null;
    }
}
