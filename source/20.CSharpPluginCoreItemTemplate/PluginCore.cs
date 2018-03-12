using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;

namespace $rootnamespace$
{
    #region Enum

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

    public enum MessageNameEnum
    {
        AddChannelAccessProfilePrivileges,
        AddDynamicProperty,
        AddEditAppModule,
        AddItem,
        AddListMembers,
        AddMember,
        AddMembers,
        AddMembersByFetchXml,
        AddOrEditLocation,
        AddPrincipalToQueue,
        AddPrivileges,
        AddProductToKit,
        AddRecurrence,
        AddSolutionComponent,
        AddSubstitute,
        AddToQueue,
        AddUserToRecordTeam,
        ApplyProfileRule,
        ApplyRoutingRule,
        Assign,
        AssignAllRecords,
        AssignUserRoles,
        AssociateKnowledgeArticle,
        BackgroundSend,
        Book,
        BuildTopicModel,
        BulkOperationStatusClose,
        CalculateActualValue,
        CalculatePrice,
        CalculateTotalTime,
        CalculateTriggerDateTime,
        Cancel,
        CanCloseOpportunity,
        CheckIncoming,
        CheckInDocument,
        CheckInSharePointDocument,
        CheckoutDocument,
        CheckoutSharePointDocument,
        CheckPromote,
        CleanUpBulkOperation,
        Clone,
        CloneAsPatch,
        CloneAsSolution,
        CloneMobileOfflineProfile,
        CloneProduct,
        CloneProductAssociation,
        Close,
        CloseOpportunity,
        CompoundCreate,
        CompoundUpdate,
        CompoundUpdateDuplicateDetectionRule,
        ConvertActivity,
        ConvertCampaignResponse,
        ConvertKitToProduct,
        ConvertOwnerTeamToAccessTeam,
        ConvertProductToKit,
        ConvertQuoteToSalesOrder,
        ConvertSalesOrderToInvoice,
        Copy,
        CopyCampaignResponse,
        CopyDynamicListToStatic,
        CopyMembers,
        CopySharePointDocuments,
        CopySystemForm,
        Create,
        CreateActivities,
        CreateAndAssociate,
        CreateDocumentLibraries,
        CreateEmailReplyDraft,
        CreateException,
        CreateFolder,
        CreateFolderAndNewDocuments,
        CreateFromTemplate,
        CreateInstance,
        CreateKnowledgeArticleTranslation,
        CreateKnowledgeArticleVersion,
        CreateOrUpdateImportMapFromApp,
        CreateRecommendationModelVersion,
        CreateSchedule,
        CreateSharePointDocumentLibraries,
        CreateSharePointFolder,
        CreateSharePointFolderAndUploadDocuments,
        CreateWithMapping,
        CreateWorkflowFromTemplate,
        Delete,
        DeleteAndPromote,
        DeleteAuditData,
        DeleteDocument,
        DeleteOpenInstances,
        DeleteRecommendationModel,
        DeleteRecommendationModelVersion,
        DeleteSharePointDocument,
        DeliverIncoming,
        DeliverPromote,
        DetachFromQueue,
        DisassociateKnowledgeArticle,
        DiscardDocumentCheckout,
        DiscardSharePointDocumentCheckout,
        DistributeCampaignActivity,
        DownloadReportDefinition,
        EditDocumentProperties,
        EditSharePointDocumentProperties,
        Execute,
        ExecuteById,
        ExecuteDataPerformanceAction,
        ExecuteWorkflow,
        Expand,
        ExportLinearMappings,
        ExportMappings,
        FetchSiteUrl,
        FindParent,
        FollowEmailAttachment,
        Fulfill,
        FullTextSearchKnowledgeArticle,
        GenerateInvoiceFromOpportunity,
        GenerateQuoteFromOpportunity,
        GenerateSalesOrderFromOpportunity,
        GenerateSnapshot,
        GenerateSocialProfile,
        GetActualDate,
        GetAllTimeZonesWithDisplayName,
        GetAssociatedDocuments,
        GetAzureServiceConnectionIdByType,
        GetCommitmentSubjects,
        GetDataForTopicWordCloud,
        GetDecryptionKey,
        GetDefaultDocumentLibrary,
        GetDistinctValues,
        GetEntitiesForAzureML,
        GetFieldListForAzureML,
        GetHeaderColumns,
        GetOutlookSyncData,
        GetQuantityDecimal,
        GetQuoteProductsFromOpportunity,
        GetRecommendationModelId,
        GetRecommendationModelVersionOverLimit,
        GetRecommendations,
        GetRelationshipsForAzureML,
        GetReportHistoryLimit,
        GetReportParameters,
        GetSalesOrderProductsFromOpportunity,
        GetSyncData,
        GetTimeZoneCodeByLocalizedName,
        GetTrackingToken,
        GetValidStatusTransition,
        GrantAccess,
        Handle,
        ImportLinearMappings,
        ImportMappings,
        ImportRecords,
        IncrementKnowledgeArticleViewCount,
        Instantiate,
        InstantiateFilters,
        InviteUser,
        IsComponentCustomizable,
        IsPrimaryClient,
        IsServerWorkgroup,
        IsValidStateTransition,
        ListSnapshots,
        LocalTimeFromUtcTime,
        LockInvoicePricing,
        LockSalesOrderPricing,
        LogExternalResultsClicked,
        LogFailure,
        LogSuccess,
        Lose,
        MakeAvailableToOrganization,
        MakeUnavailableToOrganization,
        Merge,
        MigrateToS2S,
        ModifyAccess,
        MyCreateActivities,
        NavigateToNextEntity,
        NewDocument,
        OverrideDynamicProperties,
        OverrideDynamicProperty,
        OverwriteDynamicProperty,
        Parse,
        PickFromQueue,
        PopulateCardTypes,
        PopulateRecommendationCache,
        PopulateRecommendationCacheForRecord,
        PostOutlookSync,
        PostSync,
        PrepareOutlookSync,
        PrepareSync,
        ProcessInbound,
        ProcessOneMemberBulkOperation,
        ProcessReplicationBacklog,
        PromoteToAdmin,
        PropagateByExpression,
        Publish,
        PublishAppModule,
        PublishExternal,
        PublishKnowledgeArticle,
        PublishProductHierarchy,
        PublishTheme,
        QualifyLead,
        QualifyMember,
        ReassignObjects,
        Recalculate,
        ReleaseToQueue,
        RemoveClientFromSubscription,
        RemoveDynamicProperty,
        RemoveFromQueue,
        RemoveItem,
        RemoveMember,
        RemoveMembers,
        RemoveMembersByFetchXml,
        RemoveParent,
        RemovePrivilege,
        RemoveRelated,
        RemoveSolutionComponent,
        RemoveSubstitute,
        RemoveUserFromRecordTeam,
        RemoveUserRoles,
        RenameFolderName,
        RenameFolderNameForOneDrive,
        Renew,
        RenewEntitlement,
        ReplacePrivileges,
        Reschedule,
        ResetSyncState,
        ResolveIncident,
        ResolveQuote,
        Retrieve,
        RetrieveAbsoluteAndSiteCollectionUrl,
        RetrieveActivePath,
        RetrieveAllChildUsers,
        RetrieveAppContext,
        RetrieveApplicationRibbon,
        RetrieveAttributeChangeHistory,
        RetrieveAuditDetails,
        RetrieveBusinessHierarchy,
        RetrieveBusinessRulesForForm,
        RetrieveByGroup,
        RetrieveByResource,
        RetrieveByResources,
        RetrieveByTopIncidentProduct,
        RetrieveByTopIncidentSubject,
        RetrieveCardTypes,
        RetrieveChannelAccessProfilePrivileges,
        RetrieveClientSubscription,
        RetrieveCustomersNotPlacedOrders,
        RetrieveDashboardForms,
        RetrieveDependenciesForDelete,
        RetrieveDependenciesForUninstall,
        RetrieveDependentComponents,
        RetrieveDocumentsFromAllLocationsAndShared,
        RetrieveEntitiesToSync,
        RetrieveEntitlementsForCase,
        RetrieveEntityDynamicPropertyDefinitions,
        RetrieveEntityGroupConfiguration,
        RetrieveEntityRibbon,
        RetrieveExchangeRate,
        RetrieveExternalRequiredComponents,
        RetrieveExternalRoots,
        RetrieveFilteredForms,
        RetrieveFilteredProcesses,
        RetrieveFormXml,
        RetrieveItemIdsForRecord,
        RetrieveMembers,
        RetrieveMembersBulkOperation,
        RetrieveMissingDependencies,
        RetrieveMultiple,
        RetrieveMultipleSystemFormsWithAllLabels,
        RetrieveParentGroups,
        RetrieveParsedData,
        RetrievePersonalSite,
        RetrievePersonalSiteUrl,
        RetrievePrincipalAccess,
        RetrieveProcessActiveStage,
        RetrieveProcessControlData,
        RetrieveProcessWithFallback,
        RetrieveProductProperties,
        RetrievePublishedAppModuleWithLocale,
        RetrieveRecommendationLineItemMetadata,
        RetrieveRecommendationLineItemProducts,
        RetrieveRecommendationsCount,
        RetrieveRecordChangeHistory,
        RetrieveReferenceSiteMap,
        RetrieveRequiredComponents,
        RetrieveRolePrivileges,
        RetrieveSharedPrincipalsAndAccess,
        RetrieveSharePointData,
        RetrieveSharePointGlobalSettings,
        RetrieveSubGroups,
        RetrieveSubsidiaryTeams,
        RetrieveSubsidiaryUsers,
        RetrieveTeams,
        RetrieveTrendingDocuments,
        RetrieveUnpublished,
        RetrieveUnpublishedMultiple,
        RetrieveUserQueues,
        RetrieveUserSettings,
        RetrieveValidSLA,
        RevertProduct,
        Revise,
        RevokeAccess,
        Rollup,
        RollupForActivityWall,
        Route,
        RouteTo,
        SaveEntityGroupConfiguration,
        ScheduleBuildTopicModel,
        SearchByBody,
        SearchByBodyLegacy,
        SearchByKeywords,
        SearchByKeywordsLegacy,
        SearchByTitle,
        SearchByTitleLegacy,
        SearchDocument,
        SearchSharePointDocument,
        Send,
        SendFromTemplate,
        SetActionCardState,
        SetBusiness,
        SetDevErrors,
        SetParent,
        SetPrimaryClient,
        SetRelated,
        SetReportRelated,
        SetState,
        SetStateAzureServiceConnection,
        SnoozeActionCard,
        StatusUpdateBulkOperation,
        TestAzureServiceConnection,
        TestTopicModel,
        TrackEmail,
        Transform,
        TriggerServiceEndpointCheck,
        UnfollowEmailAttachment,
        Unpublish,
        Update,
        UpdateDelveActionStatus,
        UpdateDocumentManagementSettings,
        UpdateFromTemplate,
        UpdateGlobalSharePointSettings,
        UpdateProductProperties,
        UpdateSchedule,
        UpdateSolutionComponent,
        UpdateUserSettings,
        UploadDocument,
        UploadSharePointDocument,
        UtcTimeFromLocalTime,
        Validate,
        ValidateAppModule,
        ValidateOfficeGraphAuthentication,
        ValidateRecurrenceRule,
        ValidateSharePointFolder,
        ValidateSharePointSite,
        ValidateUrl,
        VerifyProcessStateData,
        Win
    }

    public enum PluginStepOperationEnum
    {
        Delete = 0,
        Deactivate = 1,
    }

    public enum StageEnum
    {
        PreValidation = 10,
        PreOperation = 20,
        PostOperation = 40
    }

    #endregion

    #region Attribute

    [DebuggerNonUserCode()]
    [AttributeUsage(AttributeTargets.Class, Inherited = false, AllowMultiple = true)]
    public class CrmPluginRegistrationAttribute : Attribute
    {
        public CrmPluginRegistrationAttribute(string message, string entityLogicalName, StageEnum stage, ExecutionModeEnum executionMode, string filteringAttributes, string stepName, int executionOrder, IsolationModeEnum isolationModel)
        {
            Message = message;
            EntityLogicalName = entityLogicalName;
            FilteringAttributes = filteringAttributes;
            Name = stepName;
            ExecutionOrder = executionOrder;
            Stage = stage;
            ExecutionMode = executionMode;
            IsolationMode = isolationModel;
            Offline = false;
            Server = true;
        }

        /// <summary>
        ///
        /// </summary>
        /// <param name="message">Message Name</param>
        /// <param name="entityLogicalName"></param>
        /// <param name="stage"></param>
        /// <param name="executionMode"></param>
        /// <param name="filteringAttributes">Comma separated list of attributes that will trigger this step. Leave null for all attributes.</param>
        /// <param name="stepName"></param>
        /// <param name="executionOrder"></param>
        /// <param name="isolationModel"></param>
        public CrmPluginRegistrationAttribute(MessageNameEnum message, string entityLogicalName, StageEnum stage, ExecutionModeEnum executionMode, string filteringAttributes, string stepName, int executionOrder, IsolationModeEnum isolationModel) : this(message.ToString(), entityLogicalName, stage, executionMode, filteringAttributes, stepName, executionOrder, isolationModel)
        {
        }

        /// <summary>
        /// Create workflow activity registration
        /// </summary>
        /// <param name="name">Name of the Workflow Activity</param>
        /// <param name="friendlyName">Friendly name</param>
        /// <param name="description">Description</param>
        /// <param name="groupName">Group Name</param>
        public CrmPluginRegistrationAttribute(string name, string friendlyName, string description, string groupName, IsolationModeEnum isolationModel)
        {
            Name = name;
            FriendlyName = friendlyName;
            Description = description;
            GroupName = groupName;
            IsolationMode = isolationModel;
        }

        #region Named Properties

        public string Id { get; set; }
        public string FriendlyName { get; set; }
        public string GroupName { get; set; }
        public string Image1Name { get; set; }
        public string Image1Attributes { get; set; }
        public string Image2Name { get; set; }
        public string Image2Attributes { get; set; }
        public string Description { get; set; }
        public bool? DeleteAsyncOperation { get; set; }
        public string UnSecureConfiguration { get; set; }
        public string SecureConfiguration { get; set; }
        public bool Offline { get; set; }
        public bool Server { get; set; }
        public ImageTypeEnum Image1Type { get; set; }
        public ImageTypeEnum Image2Type { get; set; }
        public PluginStepOperationEnum? Action { get; set; }

        #endregion

        #region Constructor Mandatory Properties

        public IsolationModeEnum IsolationMode { get; private set; }
        public string Message { get; private set; }
        public string EntityLogicalName { get; private set; }
        public string FilteringAttributes { get; private set; }
        public string Name { get; private set; }
        public int ExecutionOrder { get; private set; }
        public StageEnum? Stage { get; private set; }
        public ExecutionModeEnum ExecutionMode { get; private set; }

        #endregion
    }

    #endregion

    #region Classes

    [DebuggerNonUserCode()]
    public class PluginContext
    {
        public PluginContext(IServiceProvider serviceProvider)
        {
            if (serviceProvider == null) throw new InvalidPluginExecutionException("IServiceProvider null");
            Provider = serviceProvider;
            Context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            Factory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            Service = Factory.CreateOrganizationService(Context.UserId);
            Tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
        }

        public IServiceProvider Provider { get; private set; }

        public IPluginExecutionContext Context { get; private set; }

        public IOrganizationServiceFactory Factory { get; private set; }

        public IOrganizationService Service { get; private set; }

        public ITracingService Tracing { get; set; }

        public void Trace(string message)
        {
            if (string.IsNullOrWhiteSpace(message) || this.Tracing == null) return;
            if (Context == null)
                Tracing.Trace(message);
            else
                Tracing.Trace("{0}, Correlation Id: {1}, Initiating User: {2}", message, Context.CorrelationId, Context.InitiatingUserId);
        }
    }

    [DebuggerNonUserCode()]
    public abstract class PluginBase : IPlugin
    {
        public PluginContext Plugin { get; private set; }

        protected virtual bool IgnorePlugin
        {
            get
            {
                return false;
            }
        }

        public void Execute(IServiceProvider serviceProvider)
        {
            if (IgnorePlugin) return;
            if (!IsDeclarePluginMessageAttribute()) throw new InvalidPluginExecutionException("This plugin class donot declare CrmPluginRegistration attribute");
            Plugin = new PluginContext(serviceProvider);
            Execute();
        }

        private bool IsDeclarePluginMessageAttribute()
        {
            var attrs = Attribute.GetCustomAttributes(GetType());
            var count = attrs.OfType<CrmPluginRegistrationAttribute>().Select(att => att as CrmPluginRegistrationAttribute).Count();
            return count > 0;
        }

        /// <summary>
        ///     Executes this instance.
        /// </summary>
        public abstract void Execute();
    }

    #endregion
}
