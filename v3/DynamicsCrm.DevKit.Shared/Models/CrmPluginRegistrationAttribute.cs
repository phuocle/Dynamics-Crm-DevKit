﻿using System;

namespace DynamicsCrm.DevKit.Shared.Models
{
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
        Delete = 0,
        Activate = 0,
        Deactivate = 1
    }

    public enum StageEnum
    {
        PreValidation = 10,
        PreOperation = 20,
        PostOperation = 40
    }

    public enum MessageNameEnum
    {
        AddItem,
        AddListMembers,
        AddMember,
        AddMembers,
        AddPrincipalToQueue,
        AddPrivileges,
        AddProductToKit,
        AddRecurrence,
        AddToQueue,
        AddUserToRecordTeam,
        ApplyRecordCreationAndUpdateRule,
        Assign,
        Associate,
        BackgroundSend,
        Book,
        CalculatePrice,
        Cancel,
        CheckIncoming,
        CheckPromote,
        Clone,
        CloneMobileOfflineProfile,
        CloneProduct,
        Close,
        CopyDynamicListToStatic,
        CopySystemForm,
        Create,
        CreateException,
        CreateInstance,
        CreateKnowledgeArticleTranslation,
        CreateKnowledgeArticleVersion,
        Delete,
        DeleteOpenInstances,
        DeliverIncoming,
        DeliverPromote,
        Disassociate,
        Execute,
        ExecuteById,
        Export,
        GenerateSocialProfile,
        GetDefaultPriceLevel,
        GrantAccess,
        Import,
        LockInvoicePricing,
        LockSalesOrderPricing,
        Lose,
        Merge,
        ModifyAccess,
        PickFromQueue,
        Publish,
        PublishAll,
        PublishTheme,
        QualifyLead,
        Recalculate,
        ReleaseToQueue,
        RemoveFromQueue,
        RemoveItem,
        RemoveMember,
        RemoveMembers,
        RemovePrivilege,
        RemoveProductFromKit,
        RemoveRelated,
        RemoveUserFromRecordTeam,
        ReplacePrivileges,
        Reschedule,
        Retrieve,
        RetrieveExchangeRate,
        RetrieveFilteredForms,
        RetrieveMultiple,
        RetrievePersonalWall,
        RetrievePrincipalAccess,
        RetrieveRecordWall,
        RetrieveSharedPrincipalsAndAccess,
        RetrieveUnpublished,
        RetrieveUnpublishedMultiple,
        RetrieveUserQueues,
        RevokeAccess,
        RouteTo,
        Send,
        SendFromTemplate,
        SetLocLabels,
        SetRelated,
        SetState,
        TriggerServiceEndpointCheck,
        UnlockInvoicePricing,
        UnlockSalesOrderPricing,
        Update,
        ValidateRecurrenceRule,
        Win
    }

    public enum PluginType
    {
        Plugin = 0,
        Workflow = 1,
        CustomAction = 2,
        DataProvider = 3,
        CustomApi = 4
    }

    [AttributeUsage(AttributeTargets.Class, Inherited = false, AllowMultiple = true)]
    public class CrmPluginRegistrationAttribute : Attribute
    {
        public CrmPluginRegistrationAttribute()
        {
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
}