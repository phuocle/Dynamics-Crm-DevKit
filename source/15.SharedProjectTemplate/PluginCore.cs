using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace $rootnamespace$
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
        public bool DeleteAsyncOperation { get; set; } = false;
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

    [DebuggerNonUserCode()]
    public static class Debugger
    {
        public static void Trace(ITracingService ts, string message)
        {
#if DEBUG
            ts.Trace($"\n{message}");
#endif
        }

        public static void Begin(ITracingService ts, IPluginExecutionContext ctx)
        {
#if DEBUG
            ts.Trace("Trace enter: {0:o}\n", DateTime.Now);
            ts.Trace("Message : {0}", ctx.MessageName);
            ts.Trace("Stage   : {0}", ctx.Stage);
            ts.Trace("Mode    : {0}", ctx.Mode);
            ts.Trace("Entity  : {0}", ctx.PrimaryEntityName);
            if (!ctx.PrimaryEntityId.Equals(Guid.Empty))
            {
                ts.Trace("Id      : {0}", ctx.PrimaryEntityId);
            }
            ts.Trace("");
            TraceAndAlign("InputParameters", ctx.InputParameters, ts);
            TraceAndAlign("OutputParameters", ctx.OutputParameters, ts);
            TraceAndAlign("SharedVariables", ctx.SharedVariables, ts);
            TraceAndAlign("PreEntityImages", ctx.PreEntityImages, ts);
            TraceAndAlign("PostEntityImages", ctx.PostEntityImages, ts);
#endif
        }
#if DEBUG
        private static void TraceAndAlign<T>(string topic, IEnumerable<KeyValuePair<string, T>> pc, ITracingService ts)
        {
            if (pc == null || pc.Count() == 0) { return; }
            ts.Trace(topic);
            var keylen = pc.Max(p => p.Key.Length);
            foreach (var p in pc)
            {
                ts.Trace($"  {p.Key}{new string(' ', keylen - p.Key.Length)} = {ValueToString(p.Value, 2)}");
            }
        }

        private static string ValueToString(object v, int indent = 1)
        {
            var ind = new string(' ', indent * 2);
            if (v == null)
            {
                return $"{ind}<null>";
            }
            else if (v is Entity)
            {
                var e = (Entity)v;
                var keylen = e.Attributes.Count > 0 ? e.Attributes.Max(p => p.Key.Length) : 50;
                return $"{e.LogicalName} {e.Id}\n{ind}" + string.Join($"\n{ind}", e.Attributes.OrderBy(a => a.Key).Select(a => $"{a.Key}{new string(' ', keylen - a.Key.Length)} = {ValueToString(a.Value, indent + 1)}"));
            }
            else if (v is ColumnSet)
            {
                var c = (ColumnSet)v;
                var a = new List<string>(c.Columns);
                a.Sort();
                return $"\n{ind}" + string.Join($"\n{ind}", a);
            }
            else
            {
                var r = string.Empty;
                if (v is EntityReference)
                {
                    var er = (EntityReference)v;
                    r = $"{er.LogicalName} {er.Id} {er.Name}";
                }
                else if (v is OptionSetValue)
                {
                    var o = (OptionSetValue)v;
                    r = ((OptionSetValue)v).Value.ToString();
                }
                else if (v is Money)
                {
                    var m = (Money)v;
                    r = ((Money)m).Value.ToString();
                }
                else
                {
                    r = v.ToString().Replace("\n", $"\n  {ind}");
                }
                return r + $" \t({v.GetType()})";
            }
        }
#endif
        public static void End(ITracingService ts, IPluginExecutionContext ctx)
        {
#if DEBUG
            ts.Trace("\nTrace exit: {0:o}\n", DateTime.Now);
#endif
        }
    }
}