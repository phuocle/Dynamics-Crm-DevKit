Kool.WebApi = Kool.WebApi || {};
Kool.WebApi = function (WebApiClient) {
    ///<summary>
    ///return a WebApiClient object
    ///</summary>
    ///<param name="WebApiClient" type="Object">WebApiClient object</param>
    ///<returns type="Object" />
    return {
        ///<field name="Create" type="Function"></field>
        Create: intellisense.WebApiCreate,
        ///<field name="Retrieve" type="Function"></field>
        Retrieve: intellisense.WebApiRetrieve,
        ///<field name="Expand" type="Function"></field>
        Expand: intellisense.WebApiExpand,
        ///<field name="Update" type="Function"></field>
        Update: intellisense.WebApiUpdate,
        ///<field name="Delete" type="Function"></field>
        Delete: intellisense.WebApiDelete,
        ///<field name="Associate" type="Function"></field>
        Associate: intellisense.WebApiAssociate,
        ///<field name="Disassociate" type="Function"></field>
        Disassociate: intellisense.WebApiDisassociate,
        ///<field name="Execute" type="Function"></field>
        Execute: intellisense.WebApiExecute,
        ///<field name="Requests" type="Object"></field>
        Requests: {
            ///<field name="CalculateRollupFieldRequest" type="Function">Calculates the value of a rollup attribute.</field>
            CalculateRollupFieldRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="CalculateTotalTimeIncidentRequest" type="Function">Calculates the total time, in minutes, that you used while you worked on an incident (case).</field>
            CalculateTotalTimeIncidentRequest: '',
            ///<field name="CheckIncomingEmailRequest" type="Function">Check whether the incoming email message is relevant to the Microsoft Dynamics 365 system.</field>
            CheckIncomingEmailRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="CheckPromoteEmailRequest" type="Function">Contains the data that is needed to check whether the incoming email message should be promoted to the Microsoft Dynamics 365 system.</field>
            CheckPromoteEmailRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="DownloadReportDefinitionRequest" type="Function">Downloads a report definition.</field>
            DownloadReportDefinitionRequest: '',
            ///<field name="ExpandCalendarRequest" type="Function">Converts the calendar rules to an array of available time blocks for the specified period.</field>
            ExpandCalendarRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="ExportFieldTranslationRequest" type="Function">Exports localizable fields values to a compressed file.</field>
            ExportFieldTranslationRequest: '',
            ///<field name="FetchXmlToQueryExpressionRequest" type="Function">Converts a query in FetchXML to a QueryExpression.</field>
            FetchXmlToQueryExpressionRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="FindParentResourceGroupRequest" type="Function">Finds a parent resource group (scheduling group) for the specified resource groups (scheduling groups).</field>
            FindParentResourceGroupRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="GetAllTimeZonesWithDisplayNameRequest" type="Function">Retrieves all the time zone definitions for the specified locale and to return only the display name attribute.</field>
            GetAllTimeZonesWithDisplayNameRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="GetDefaultPriceLevelRequest" type="Function">Retrieves the default price level (price list) for the current user based on the user’s territory relationship with the price level.</field>
            GetDefaultPriceLevelRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="GetDistinctValuesImportFileRequest" type="Function">Retrieves distinct values from the parse table for a column in the source file that contains list values.</field>
            GetDistinctValuesImportFileRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="GetHeaderColumnsImportFileRequest" type="Function">Retrieves the source-file column headings; or retrieve the system-generated column headings if the source file does not contain column headings.</field>
            GetHeaderColumnsImportFileRequest: '',
            ///<field name="GetQuantityDecimalRequest" type="Function">Gets the quantity decimal value of a product for the specified entity in the target.</field>
            GetQuantityDecimalRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="GetReportHistoryLimitRequest" type="Function">Retrieves the history limit for a report.</field>
            GetReportHistoryLimitRequest: '',
            ///<field name="GetTimeZoneCodeByLocalizedNameRequest" type="Function">Retrieves the time zone code for the specified localized time zone name.</field>
            GetTimeZoneCodeByLocalizedNameRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="GetValidManyToManyRequest" type="Function">Retrieves a list of all the entities that can participate in a Many-to-Many entity relationship.</field>
            GetValidManyToManyRequest: '',
            ///<field name="GetValidReferencedEntitiesRequest" type="Function">Retrieves a list of entity logical names that are valid as the primary entity (one) from the specified entity in a one-to-many relationship.</field>
            GetValidReferencedEntitiesRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="GetValidReferencingEntitiesRequest" type="Function">Retrieves the set of entities that are valid as the related entity (many) to the specified entity in a one-to-many relationship.</field>
            GetValidReferencingEntitiesRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="IncrementKnowledgeArticleViewCountRequest" type="Function">Increments the per day view count of a knowledge article record.</field>
            IncrementKnowledgeArticleViewCountRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="InitializeFromRequest" type="Function">Initializes a new record from an existing record.</field>
            InitializeFromRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="IsComponentCustomizableRequest" type="Function">Determines whether a solution component is customizable.</field>
            IsComponentCustomizableRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="IsDataEncryptionActiveRequest" type="Function">Determines whether data encryption is currently running (active or inactive).</field>
            IsDataEncryptionActiveRequest: '',
            ///<field name="IsValidStateTransitionRequest" type="Function">Validates the state transition.</field>
            IsValidStateTransitionRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="QueryMultipleSchedulesRequest" type="Function">Searches multiple resources for available time block that matches the specified parameters.</field>
            QueryMultipleSchedulesRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="QueryScheduleRequest" type="Function">Searches the specified resource for an available time block that matches the specified parameters.</field>
            QueryScheduleRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveAbsoluteAndSiteCollectionUrlRequest" type="Function">Retrieves the absolute URL and the site collection URL for a SharePoint location record in Microsoft Dynamics 365.</field>
            RetrieveAbsoluteAndSiteCollectionUrlRequest: '',
            ///<field name="RetrieveActivePathRequest" type="Function">TODO: RetrieveActivePath Function Description (No Joke, MS description)</field>
            RetrieveActivePathRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveAllChildUsersSystemUserRequest" type="Function">Retrieves the collection of users that report to the specified system user (user).</field>
            RetrieveAllChildUsersSystemUserRequest: '',
            ///<field name="RetrieveAllEntitiesRequest" type="Function">Retrieves metadata information about all the entities.</field>
            RetrieveAllEntitiesRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveApplicationRibbonRequest" type="Function">Retrieve the data that defines the content and behavior of the application ribbon.</field>
            RetrieveApplicationRibbonRequest: '',
            ///<field name="RetrieveAuditPartitionListRequest" type="Function">Retrieves the list of database partitions that are used to store audited history data.</field>
            RetrieveAuditPartitionListRequest: '',
            ///<field name="RetrieveAvailableLanguagesRequest" type="Function">Retrieves the list of language packs that are installed and enabled on the server.</field>
            RetrieveAvailableLanguagesRequest: '',
            ///<field name="RetrieveBusinessHierarchyBusinessUnitRequest" type="Function">Retrieves all business units from the business unit hierarchy.</field>
            RetrieveBusinessHierarchyBusinessUnitRequest: '',
            ///<field name="RetrieveByGroupResourceRequest" type="Function">Retrieves all resources that are related to the specified resource group</field>
            RetrieveByGroupResourceRequest: '',
            ///<field name="RetrieveByResourceResourceGroupRequest" type="Function">Retrieves the resource groups (scheduling groups) that contain the specified resource.</field>
            RetrieveByResourceResourceGroupRequest: '',
            ///<field name="RetrieveByResourcesServiceRequest" type="Function">Retrieve the collection of services that are related to the specified set of resources.</field>
            RetrieveByResourcesServiceRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveByTopIncidentProductKbArticleRequest" type="Function">Retrieves the top-ten articles about a specified product from the knowledge base of articles for the organization</field>
            RetrieveByTopIncidentProductKbArticleRequest: '',
            ///<field name="RetrieveByTopIncidentSubjectKbArticleRequest" type="Function">Retrieves the top-ten articles about a specified subject from the knowledge base of articles for your organization.</field>
            RetrieveByTopIncidentSubjectKbArticleRequest: '',
            ///<field name="RetrieveCurrentOrganizationRequest" type="Function">Retrieve information about the current organization.</field>
            RetrieveCurrentOrganizationRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveDataEncryptionKeyRequest" type="Function">Retrieves the data encryption key value.</field>
            RetrieveDataEncryptionKeyRequest: '',
            ///<field name="RetrieveDependenciesForDeleteRequest" type="Function">Retrieves a collection of dependency records that describe any solution components that would prevent a solution component from being deleted.</field>
            RetrieveDependenciesForDeleteRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveDependenciesForUninstallRequest" type="Function">Retrieves a list of the solution component dependencies that can prevent you from uninstalling a managed solution.</field>
            RetrieveDependenciesForUninstallRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveDependentComponentsRequest" type="Function">Retrieves a list dependencies for solution components that directly depend on a solution component.</field>
            RetrieveDependentComponentsRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveDeploymentLicenseTypeRequest" type="Function">Retrieves the type of license for a deployment of Microsoft Dynamics 365.</field>
            RetrieveDeploymentLicenseTypeRequest: '',
            ///<field name="RetrieveDeprovisionedLanguagesRequest" type="Function">Retrieves a list of language packs that are installed on the server that have been disabled.</field>
            RetrieveDeprovisionedLanguagesRequest: '',
            ///<field name="RetrieveDuplicatesRequest" type="Function">Detects and retrieves duplicates for a specified record.</field>
            RetrieveDuplicatesRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveEntityChangesRequest" type="Function">Retrieve the changes for an entity.</field>
            RetrieveEntityChangesRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveEntityRibbonRequest" type="Function">Retrieves ribbon definitions for an entity.</field>
            RetrieveEntityRibbonRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveExchangeAppointmentsRequest" type="Function">Retrieves the appointments for the current user for a specific date range from the exchange web service.</field>
            RetrieveExchangeAppointmentsRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveExchangeRateRequest" type="Function">Retrieves the exchange rate.</field>
            RetrieveExchangeRateRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveFilteredFormsRequest" type="Function">Retrieves the entity forms that are available for a specified user.</field>
            RetrieveFilteredFormsRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveFormattedImportJobResultsRequest" type="Function">Retrieves the formatted results from an import job.</field>
            RetrieveFormattedImportJobResultsRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveInstalledLanguagePacksRequest" type="Function">Retrieves the list of language packs that are installed on the server.</field>
            RetrieveInstalledLanguagePacksRequest: '',
            ///<field name="RetrieveInstalledLanguagePackVersionRequest" type="Function">Retrieves the version of an installed language pack.</field>
            RetrieveInstalledLanguagePackVersionRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveLicenseInfoRequest" type="Function">Retrieves the number of used and available licenses for a deployment of Microsoft Dynamics 365.</field>
            RetrieveLicenseInfoRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveLocLabelsRequest" type="Function">Retrieves localized labels for a limited set of entity attributes.</field>
            RetrieveLocLabelsRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveMailboxTrackingFoldersRequest" type="Function">Retrieves folder-level tracking rules for a mailbox.</field>
            RetrieveMailboxTrackingFoldersRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveMembersBulkOperationRequest" type="Function">Retrieves the members of a bulk operation.</field>
            RetrieveMembersBulkOperationRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveMissingComponentsRequest" type="Function">Retrieves a list of missing components in the target organization.</field>
            RetrieveMissingComponentsRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveMissingDependenciesRequest" type="Function">Retrieves any required solution components that are not included in the solution.</field>
            RetrieveMissingDependenciesRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveOrganizationResourcesRequest" type="Function">Retrieves the resources that are used by an organization.</field>
            RetrieveOrganizationResourcesRequest: '',
            ///<field name="RetrieveParentGroupsResourceGroupRequest" type="Function">Retrieves the collection of the parent resource groups of the specified resource group (scheduling group).</field>
            RetrieveParentGroupsResourceGroupRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveParsedDataImportFileRequest" type="Function">Retrieves the data from the parse table.</field>
            RetrieveParsedDataImportFileRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrievePersonalWallRequest" type="Function">Retrieves pages of posts, including comments for each post, for all records that the calling user is following.</field>
            RetrievePersonalWallRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrievePrincipalAccessRequest" type="Function">Retrieves the access rights of the specified security principal (team or user) to the specified record.</field>
            RetrievePrincipalAccessRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrievePrincipalAttributePrivilegesRequest" type="Function">Retrieves all the secured attribute privileges a user or team has through direct or indirect (through team membership) associations with the FieldSecurityProfile entity.</field>
            RetrievePrincipalAttributePrivilegesRequest: '',
            ///<field name="RetrievePrincipalSyncAttributeMappingsRequest" type="Function">For internal use only.</field>
            RetrievePrincipalSyncAttributeMappingsRequest: '',
            ///<field name="RetrievePrivilegeSetRequest" type="Function">Retrieves the set of privileges defined in the system.</field>
            RetrievePrivilegeSetRequest: '',
            ///<field name="RetrieveProcessInstancesRequest" type="Function">TODO: RetrieveProcessInstances Function Description (By MS)</field>
            RetrieveProcessInstancesRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveProductPropertiesRequest" type="Function">Retrieve all the property instances (dynamic property instances) for a product added to an opportunity, quote, order, or invoice.</field>
            RetrieveProductPropertiesRequest: '',
            ///<field name="RetrieveProvisionedLanguagePackVersionRequest" type="Function">Retrieves the version of a provisioned language pack.</field>
            RetrieveProvisionedLanguagePackVersionRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveProvisionedLanguagesRequest" type="Function">Retrieves the list of provisioned languages.</field>
            RetrieveProvisionedLanguagesRequest: '',
            ///<field name="RetrieveRecordWallRequest" type="Function">Retrieves pages of posts, including comments for each post, for a specified record.</field>
            RetrieveRecordWallRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveRequiredComponentsRequest" type="Function">Retrieves a collection of solution components that are required for a solution component.</field>
            RetrieveRequiredComponentsRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveRolePrivilegesRoleRequest" type="Function">Retrieves the privileges that are assigned to the specified role.</field>
            RetrieveRolePrivilegesRoleRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveSubGroupsResourceGroupRequest" type="Function">Retrieves the collection of child resource groups from the specified resource group.</field>
            RetrieveSubGroupsResourceGroupRequest: '',
            ///<field name="RetrieveTeamPrivilegesRequest" type="Function">Retrieves the privileges for a team.</field>
            RetrieveTeamPrivilegesRequest: '',
            ///<field name="RetrieveTimestampRequest" type="Function">Retrieves a time stamp for the metadata.</field>
            RetrieveTimestampRequest: '',
            ///<field name="RetrieveUnpublishedMultipleRequest" type="Function">Retrieves a collection of unpublished organization-owned records that satisfy the specified query criteria.</field>
            RetrieveUnpublishedMultipleRequest: '',
            ///<field name="RetrieveUserPrivilegesRequest" type="Function">Retrieves the privileges a system user (user) has through his or her roles in the specified business unit.</field>
            RetrieveUserPrivilegesRequest: '',
            ///<field name="RetrieveUserQueuesRequest" type="Function">Retrieves all private queues of a specified user and optionally all public queues.</field>
            RetrieveUserQueuesRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RetrieveVersionRequest" type="Function">Retrieves the version number of the Microsoft Dynamics 365 Server.</field>
            RetrieveVersionRequest: '',
            ///<field name="RollupRequest" type="Function">Retrieves all the entity records that are related to the specified record.</field>
            RollupRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="SearchRequest" type="Function">Searches for available time slots that fulfill the specified appointment request.</field>
            SearchRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="SearchByBodyKbArticleRequest" type="Function">Searches for knowledge base articles that contain the specified body text.</field>
            SearchByBodyKbArticleRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="SearchByKeywordsKbArticleRequest" type="Function">Searches for knowledge base articles that contain the specified keywords.</field>
            SearchByKeywordsKbArticleRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="SearchByTitleKbArticleRequest" type="Function">Searches for knowledge base articles that contain the specified title.</field>
            SearchByTitleKbArticleRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="ValidateRecurrenceRuleRequest" type="Function">Validates a rule for a recurring appointment.</field>
            ValidateRecurrenceRuleRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="WhoAmIRequest" type="Function">Retrieves the system user ID for the currently logged on user or the user under whose context the code is running.</field>
            WhoAmIRequest: '',
            ///<field name="AddItemCampaignRequest">Adds an item to a campaign.</field>
            AddItemCampaignRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="AddItemCampaignActivityRequest">Adds an item to a campaign activity.</field>
            AddItemCampaignActivityRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="AddListMembersListRequest">Adds members to a list.</field>
            AddListMembersListRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="AddMemberListRequest">Adds a member to a list (marketing list).</field>
            AddMemberListRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="AddMembersTeamRequest">Adds members to a team.</field>
            AddMembersTeamRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="AddPrincipalToQueueRequest">Adds the specified principal to the list of queue members.</field>
            AddPrincipalToQueueRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="AddPrivilegesRoleRequest">Adds a set of existing privileges to an existing role.</field>
            AddPrivilegesRoleRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="AddRecurrenceRequest">Adds recurrence information to an existing appointment.</field>
            AddRecurrenceRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="AddSolutionComponentRequest">Adds a solution component to an unmanaged solution.</field>
            AddSolutionComponentRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="AddToQueueRequest">Moves an entity record from a source queue to a destination queue.</field>
            AddToQueueRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="AddUserToRecordTeamRequest">Adds a user to the auto created access team for the specified record.</field>
            AddUserToRecordTeamRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="ApplyRecordCreationAndUpdateRuleRequest">Applies record creation and update rules to activities in 365 created as a result of the integration with external applications.</field>
            ApplyRecordCreationAndUpdateRuleRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="ApplyRoutingRuleRequest">Applies the active routing rule to an incident.</field>
            ApplyRoutingRuleRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="AutoMapEntityRequest">Generates a new set of attribute mappings based on the metadata.</field>
            AutoMapEntityRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="BookRequest">Schedules or "books" an appointment, recurring appointment, or service appointment (service activity).</field>
            BookRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="BulkDeleteRequest">Submits a bulk delete job that deletes selected records in bulk. This job runs asynchronously in the background without blocking other activities.</field>
            BulkDeleteRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="BulkDetectDuplicatesRequest">Submits an asynchronous system job that detects and logs multiple duplicate records.</field>
            BulkDetectDuplicatesRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="CalculateActualValueOpportunityRequest">Calculates the value of an opportunity that is in the "Won" state.</field>
            CalculateActualValueOpportunityRequest: '',
            ///<field name="CalculatePriceRequest">Calculates price in an opportunity, quote, order, and invoice.</field>
            CalculatePriceRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="CanBeReferencedRequest">Checks whether the specified entity can be the primary entity (one) in a one-to-many relationship.</field>
            CanBeReferencedRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="CanBeReferencingRequest">Checkes whether an entity can be the referencing entity in a one-to-many relationship.</field>
            CanBeReferencingRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="CancelContractRequest">Cancels a contract.</field>
            CancelContractRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="CancelSalesOrderRequest">Cancels a sales order.</field>
            CancelSalesOrderRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="CanManyToManyRequest">Checks whether an entity can participate in a many-to-many relationship.</field>
            CanManyToManyRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="CloneAsPatchRequest">Creates a solution patch from a managed or unmanaged solution.</field>
            CloneAsPatchRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="CloneAsSolutionRequest">Creates a new copy of an unmanged solution that contains the original solution plus all of its patches.</field>
            CloneAsSolutionRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="CloneContractRequest">Copies an existing contract and its line items.</field>
            CloneContractRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="CloneMobileOfflineProfileRequest">For internal use only.</field>
            CloneMobileOfflineProfileRequest: '',
            ///<field name="CloneProductRequest">Copies an existing product family, product, or bundle under the same parent record.</field>
            CloneProductRequest: '',
            ///<field name="CloseIncidentRequest">Closes an incident (case).</field>
            CloseIncidentRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="CloseQuoteRequest">Closes a quote.</field>
            CloseQuoteRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="CompoundUpdateDuplicateDetectionRuleRequest">Updates a duplicate rule (duplicate detection rule) and its related duplicate rule conditions.</field>
            CompoundUpdateDuplicateDetectionRuleRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="ConvertOwnerTeamToAccessTeamRequest">Converts a team of type owner to a team of type access.</field>
            ConvertOwnerTeamToAccessTeamRequest: '',
            ///<field name="ConvertProductToKitRequest">Converts a product to a kit.</field>
            ConvertProductToKitRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="ConvertQuoteToSalesOrderRequest">Converts a quote to a sales order.</field>
            ConvertQuoteToSalesOrderRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="ConvertSalesOrderToInvoiceRequest">Converts a sales order to an invoice.</field>
            ConvertSalesOrderToInvoiceRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="CopyCampaignRequest">Copies a campaign.</field>
            CopyCampaignRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="CopyCampaignResponseRequest">Creates a copy of a campaign response</field>
            CopyCampaignResponseRequest: '',
            ///<field name="CopyDynamicListToStaticRequest">Creates a static list from the specified dynamic list and add the members that satisfy the dynamic list query criteria to the static list.</field>
            CopyDynamicListToStaticRequest: '',
            ///<field name="CopyMembersListRequest">Copies the members from the source list to the target list without creating duplicates.</field>
            CopyMembersListRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="CopySystemFormRequest">Creates a new entity form that is based on an existing entity form.</field>
            CopySystemFormRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="CreateActivitiesListRequest">Creates a quick campaign to distribute an activity to members of a list (marketing list).</field>
            CreateActivitiesListRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="CreateCustomerRelationshipsRequest">Creates a new customer lookup attribute, and optionally, to add it to a specified unmanaged solution.</field>
            CreateCustomerRelationshipsRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="CreateExceptionRequest">Creates an exception for the recurring appointment instance.</field>
            CreateExceptionRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="CreateInstanceRequest">Creates future unexpanded instances for the recurring appointment master.</field>
            CreateInstanceRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="CreateKnowledgeArticleTranslationRequest">Creates translation of a knowledge article instance.</field>
            CreateKnowledgeArticleTranslationRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="CreateKnowledgeArticleVersionRequest">Creates a major or minor version of a knowledge article instance.</field>
            CreateKnowledgeArticleVersionRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="CreateWorkflowFromTemplateRequest">Creates a workflow (process) from a workflow template.</field>
            CreateWorkflowFromTemplateRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="DeleteAndPromoteRequest">Replaces managed solution (A) plus all of its patches with managed solution (B) that is the clone of (A) and all of its patches.</field>
            DeleteAndPromoteRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="DeleteAuditDataRequest">Deletes all audit data records up until a specified end date.</field>
            DeleteAuditDataRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="DeleteOpenInstancesRequest">Deletes instances of a recurring appointment master that have an “Open” state.</field>
            DeleteOpenInstancesRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="DeleteOptionValueRequest">Deletes an option value in a global or local option set.</field>
            DeleteOptionValueRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="DeliverIncomingEmailRequest">Creates an email activity record from an incoming email message.</field>
            DeliverIncomingEmailRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="DeliverPromoteEmailRequest">Creates an email activity record from the specified email message</field>
            DeliverPromoteEmailRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="DeprovisionLanguageRequest">Deprovisions a language.</field>
            DeprovisionLanguageRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="DistributeCampaignActivityRequest">Creates a bulk operation that distributes a campaign activity.</field>
            DistributeCampaignActivityRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="ExecuteWorkflowRequest">Executes a workflow.</field>
            ExecuteWorkflowRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="ExportMappingsImportMapRequest">Exports a data map as an XML formatted data.</field>
            ExportMappingsImportMapRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="ExportSolutionRequest">Exports a solution.</field>
            ExportSolutionRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="ExportTranslationRequest">Exports all translations for a specific solution to a compressed file.</field>
            ExportTranslationRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="FulfillSalesOrderRequest">Fulfills a sales order.</field>
            FulfillSalesOrderRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="FullTextSearchKnowledgeArticleRequest">Performs a full-text search on knowledge articles in Dynamics 365 using the specified search text.</field>
            FullTextSearchKnowledgeArticleRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="GenerateInvoiceFromOpportunityRequest">Generates an invoice from an opportunity.</field>
            GenerateInvoiceFromOpportunityRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="GenerateQuoteFromOpportunityRequest">Generates a quote from an opportunity.</field>
            GenerateQuoteFromOpportunityRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="GenerateSalesOrderFromOpportunityRequest">Generates a sales order (order) from an opportunity.</field>
            GenerateSalesOrderFromOpportunityRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="GenerateSocialProfileRequest">Returns an existing social profile record if one exists, otherwise generates a new one and returns it.</field>
            GenerateSocialProfileRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="GetInvoiceProductsFromOpportunityRequest">Retrieves the products from an opportunity and copy them to the invoice.</field>
            GetInvoiceProductsFromOpportunityRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="GetQuoteProductsFromOpportunityRequest">Retrieves the products from an opportunity and copy them to the quote.</field>
            GetQuoteProductsFromOpportunityRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="GetSalesOrderProductsFromOpportunityRequest">Retrieves the products from an opportunity and copy them to the sales order.</field>
            GetSalesOrderProductsFromOpportunityRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="GetTrackingTokenEmailRequest">Returns a tracking token that can then be passed as a parameter to the SendEmailRequest message.</field>
            GetTrackingTokenEmailRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="ImportFieldTranslationRequest">Imports translations from a compressed file.</field>
            ImportFieldTranslationRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="ImportMappingsImportMapRequest">Imports the XML representation of a data map and create an import map (data map) based on this data.</field>
            ImportMappingsImportMapRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="ImportRecordsImportRequest">Submits an asynchronous job that uploads the transformed data into Microsoft Dynamics 365.</field>
            ImportRecordsImportRequest: '',
            ///<field name="ImportSolutionRequest">Imports a solution.</field>
            ImportSolutionRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="ImportTranslationRequest">Imports translations from a compressed file.</field>
            ImportTranslationRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="InsertOptionValueRequest">Inserts a new option value for a global or local option set.</field>
            InsertOptionValueRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="InsertStatusValueRequest">Inserts a new option into a StatusAttributeMetadata attribute.</field>
            InsertStatusValueRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="InstallSampleDataRequest">Installs the sample data.</field>
            InstallSampleDataRequest: '',
            ///<field name="InstantiateFiltersRequest">Instantiates a set of filters for Dynamics 365 for Outlook for the specified user.</field>
            InstantiateFiltersRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="InstantiateTemplateRequest">Creates an email message from a template (email template).</field>
            InstantiateTemplateRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="LockInvoicePricingRequest">Locks the total price of products and services that are specified in the invoice.</field>
            LockInvoicePricingRequest: '',
            ///<field name="LockSalesOrderPricingRequest">Locks the total price of products and services that are specified in the sales order (order).</field>
            LockSalesOrderPricingRequest: '',
            ///<field name="LoseOpportunityRequest">Sets the state of an opportunity to Lost.</field>
            LoseOpportunityRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="MergeRequest">Merges the information from two entity records of the same type.</field>
            MergeRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="OrderOptionRequest">Sets the order for an option set.</field>
            OrderOptionRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="ParseImportRequest">Submits an asynchronous job that parses all import files that are associated with the specified import (data import).</field>
            ParseImportRequest: '',
            ///<field name="PickFromQueueRequest">Assigns a queue item to a user and optionally remove the queue item from the queue.</field>
            PickFromQueueRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="ProcessInboundEmailRequest">Processes the email responses from a marketing campaign.</field>
            ProcessInboundEmailRequest: '',
            ///<field name="PropagateByExpressionRequest">Creates a quick campaign to distribute an activity to accounts, contacts, or leads that are selected by a query.</field>
            PropagateByExpressionRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="ProvisionLanguageRequest">Provisions a new language.</field>
            ProvisionLanguageRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="PublishAllXmlRequest">Publishes all changes to solution components.</field>
            PublishAllXmlRequest: '',
            ///<field name="PublishDuplicateRuleRequest">Submits an asynchronous job to publish a duplicate rule.</field>
            PublishDuplicateRuleRequest: '',
            ///<field name="PublishProductHierarchyRequest">Publishes a product family record and all its child records.</field>
            PublishProductHierarchyRequest: '',
            ///<field name="PublishThemeRequest">Publishes a theme and set it as the current theme.</field>
            PublishThemeRequest: '',
            ///<field name="PublishXmlRequest">Publishes specified solution components.</field>
            PublishXmlRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="QualifyLeadRequest">Qualifies a lead and create account, contact, and opportunity records that are linked to the originating lead record.</field>
            QualifyLeadRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="QualifyMemberListRequest">Qualifies the specified list and either override the list members or remove them according to the specified option.</field>
            QualifyMemberListRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="QueryExpressionToFetchXmlRequest">Converts a QueryExpression query to its equivalent FetchXML query</field>
            QueryExpressionToFetchXmlRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="ReassignObjectsOwnerRequest">Reassigns all records that are owned by the security principal (user or team) to another security principal (user or team).</field>
            ReassignObjectsOwnerRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="ReassignObjectsSystemUserRequest">Reassigns all records that are owned by a specified user to another security principal (user or team).</field>
            ReassignObjectsSystemUserRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RecalculateRequest">Recalculate system-computed values for rollup fields in the goal hierarchy.</field>
            RecalculateRequest: '',
            ///<field name="ReleaseToQueueRequest">Assigns a queue item back to the queue owner so others can pick it.</field>
            ReleaseToQueueRequest: '',
            ///<field name="RemoveFromQueueRequest">Removes a queue item from a queue.</field>
            RemoveFromQueueRequest: '',
            ///<field name="RemoveMembersTeamRequest">Removes members from a team.</field>
            RemoveMembersTeamRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RemoveParentRequest">Removes the parent for a system user (user) record.</field>
            RemoveParentRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RemovePrivilegeRoleRequest">Removes a privilege from an existing role.</field>
            RemovePrivilegeRoleRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RemoveSolutionComponentRequest">Removes a component from an unmanaged solution.</field>
            RemoveSolutionComponentRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RemoveUserFromRecordTeamRequest">Removes a user from the auto created access team for the specified record.</field>
            RemoveUserFromRecordTeamRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RenewContractRequest">Renews a contract and create the contract details for a new contract.</field>
            RenewContractRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RenewEntitlementRequest">Renews an entitlement.</field>
            RenewEntitlementRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="ReplacePrivilegesRoleRequest">Replaces the privilege set of an existing role.</field>
            ReplacePrivilegesRoleRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RescheduleRequest">Reschedules an appointment, recurring appointment, or service appointment (service activity).</field>
            RescheduleRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="ResetUserFiltersRequest">Resets the offline data filters for the calling user to the default filters for the organization.</field>
            ResetUserFiltersRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RevertProductRequest">Reverts changes done to properties of a product family, product, or bundle record, and set it back to its last published (active) state.</field>
            RevertProductRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="ReviseQuoteRequest">Sets the state of a quote to Draft.</field>
            ReviseQuoteRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RevokeAccessRequest">Replaces the access rights on the target record for the specified security principal (user or team).</field>
            RevokeAccessRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="RouteToRequest">Routes a queue item to a queue, a user, or a team.</field>
            RouteToRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="SendBulkMailRequest">Sends bulk email messages.</field>
            SendBulkMailRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="SendEmailRequest">Sends an e-mail message.</field>
            SendEmailRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="SendEmailFromTemplateRequest">Sends an e-mail message to a recipient using an e-mail template.</field>
            SendEmailFromTemplateRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="SendFaxRequest">Sends a fax.</field>
            SendFaxRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="SendTemplateRequest">Sends a bulk email message that is created from a template.</field>
            SendTemplateRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="SetBusinessEquipmentRequest">Assigns equipment (facility/equipment) to a specific business unit.</field>
            SetBusinessEquipmentRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="SetBusinessSystemUserRequest">Moves a system user (user) to a different business unit.</field>
            SetBusinessSystemUserRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="SetDataEncryptionKeyRequest">Sets or restore the data encryption key.</field>
            SetDataEncryptionKeyRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="SetFeatureStatusRequest">TODO: SetFeatureStatus Action Description (Obviously no description yet)</field>
            SetFeatureStatusRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="SetLocLabelsRequest">Sets localized labels for a limited set of entity attributes.</field>
            SetLocLabelsRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="SetParentSystemUserRequest">Sets a new parent system user (user) for the specified user.</field>
            SetParentSystemUserRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="SetProcessRequest">Sets the process that associates with a given target entity. The user can set to another business process or specify null to clear out the current process.</field>
            SetProcessRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="SetReportRelatedRequest">Links an instance of a report entity to related entities.</field>
            SetReportRelatedRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="TransformImportRequest">Submits an asynchronous job that transforms the parsed data.</field>
            TransformImportRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="TriggerServiceEndpointCheckRequest">Validates the configuration of a Microsoft Azure Service Bus solution’s service endpoint.</field>
            TriggerServiceEndpointCheckRequest: '',
            ///<field name="UninstallSampleDataRequest">Uninstalls the sample data.</field>
            UninstallSampleDataRequest: '',
            ///<field name="UnlockInvoicePricingRequest">Unlocks pricing for an invoice.</field>
            UnlockInvoicePricingRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="UnlockSalesOrderPricingRequest">Unlocks pricing for a sales order (order).</field>
            UnlockSalesOrderPricingRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="UnpublishDuplicateRuleRequest">Submits an asynchronous job to unpublish a duplicate rule.</field>
            UnpublishDuplicateRuleRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="UpdateFeatureConfigRequest">TODO: UpdateFeatureConfig Action Description (Missing)</field>
            UpdateFeatureConfigRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="UpdateOptionValueRequest">Updates an option value in a global or local option set.</field>
            UpdateOptionValueRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="UpdateProductPropertiesRequest">Updates values of the property instances (dynamic property instances) for a product added to an opportunity, quote, order, or invoice.</field>
            UpdateProductPropertiesRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="UpdateSolutionComponentRequest">Updates a component in an unmanaged solution.</field>
            UpdateSolutionComponentRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="UpdateStateValueRequest">Updates an option set value in for a StateAttributeMetadata attribute.</field>
            UpdateStateValueRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="ValidateRequest">Verifies that an appointment or service appointment (service activity) has valid available resources for the activity, duration, and site, as appropriate.</field>
            ValidateRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="ValidateSavedQueryRequest">Validates a saved query.</field>
            ValidateSavedQueryRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="WinOpportunityRequest">Sets the state of an opportunity to Won.</field>
            WinOpportunityRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            },
            ///<field name="WinQuoteRequest">Sets the state of a quote to Won.</field>
            WinQuoteRequest: {
                ///<field name="with" type="Function"></field>
                with: intellisense.WebApiWithRequest
            }
        }
    };
}
///<field name="CreateRequest" type="Function"></field>
Kool.WebApi.CreateRequest = function () {
    ///<summary>
    ///Return an object WebApi.CreateRequest
    ///</summary>
    ///<returns type="Object" />
    return {
        ///<field name="overriddenSetName" type="String">Plural name of entity, if not according to plural rules</field>
        overriddenSetName: null,
        ///<field name="async" type="Boolean">Default true, requests are sent asynchronously</field>
        async: true,
        ///<field name="entityName" type="String">The entity name</field>
        entityName: null,
        ///<field name="entity" type="Object">The entity object</field>
        entity: null
    };
}
///<field name="RetrieveByIdRequest" type="Function"></field>
Kool.WebApi.RetrieveByIdRequest = function () {
    ///<summary>
    ///Return an object WebApi.RetrieveByIdRequest
    ///</summary>
    ///<returns type="Object" />
    return {
        ///<field name="overriddenSetName" type="String">Plural name of entity, if not according to plural rules</field>
        overriddenSetName: null,
        ///<field name="async" type="Boolean">Default true, if true requests are sent asynchronously</field>
        async: true,
        ///<field name="entityName" type="String">The entity name</field>
        entityName: null,
        ///<field name="entityId" type="Uniqueidentifier">The entity GUID Id</field>
        entityId: null
    }
}
///<field name="RetrieveByAlternateKeyRequest" type="Function"></field>
Kool.WebApi.RetrieveByAlternateKeyRequest = function () {
    ///<summary>
    ///Return an object WebApi.RetrieveByAlternateKeyRequest
    ///</summary>
    ///<returns type="Object" />
    return {
        ///<field name="overriddenSetName" type="String">Plural name of entity, if not according to plural rules</field>
        overriddenSetName: null,
        ///<field name="async" type="Boolean">Default true, if true requests are sent asynchronously</field>
        async: true,
        ///<field name="entityName" type="String">The entity name</field>
        entityName: null,
        ///<field name="alternateKey" type="Array"></field>
        alternateKey: []
    }
}
///<field name="RetrieveByQueryExpressionRequest" type="Function"></field>
Kool.WebApi.RetrieveByQueryExpressionRequest = function () {
    ///<summary>
    ///Return an object WebApi.RetrieveByQueryExpressionRequest
    ///</summary>
    ///<returns type="Object" />
    return {
        ///<field name="overriddenSetName" type="String">Plural name of entity, if not according to plural rules</field>
        overriddenSetName: null,
        ///<field name="async" type="Boolean">Default true, if true requests are sent asynchronously</field>
        async: true,
        ///<field name="returnAllPages" type="Boolean">Default false, if true return all records of all pages</field>
        returnAllPages: false,
        ///<field name="entityName" type="String">The entity name</field>
        entityName: null,
        ///<field name="queryParams" type="String">The ODATA query parameters</field>
        queryParams: null
    }
}
///<field name="RetrieveByFetchXmlRequest" type="Function"></field>
Kool.WebApi.RetrieveByFetchXmlRequest = function () {
    ///<summary>
    ///Return an object WebApi.RetrieveByFetchXmlRequest
    ///</summary>
    ///<returns type="Object" />
    return {
        ///<field name="overriddenSetName" type="String">Plural name of entity, if not according to plural rules</field>
        overriddenSetName: null,
        ///<field name="async" type="Boolean">Default true, if true requests are sent asynchronously</field>
        async: true,
        ///<field name="returnAllPages" type="Boolean">Default false, if true return all records of all pages</field>
        returnAllPages: false,
        ///<field name="entityName" type="String">The entity name</field>
        entityName: null,
        ///<field name="fetchXml" type="String">The FetchXml</field>
        fetchXml: null
    }
}
///<field name="UpdateByIdRequest" type="Function"></field>
Kool.WebApi.UpdateByIdRequest = function () {
    ///<summary>
    ///Return an object WebApi.UpdateRequest
    ///</summary>
    ///<returns type="Object" />
    return {
        ///<field name="overriddenSetName" type="String">Plural name of entity, if not according to plural rules</field>
        overriddenSetName: null,
        ///<field name="async" type="Boolean">Default true, if true requests are sent asynchronously</field>
        async: true,
        ///<field name="entityName" type="String">The entity name</field>
        entityName: null,
        ///<field name="entityId" type="Uniqueidentifier">The entity GUID Id</field>
        entityId: null,
        ///<field name="entity" type="Object">The entity object</field>
        entity: null
    }
}
///<field name="UpdateByAlternateKeyRequest" type="Function"></field>
Kool.WebApi.UpdateByAlternateKeyRequest = function () {
    ///<summary>
    ///Return an object WebApi.UpdateByAlternateKeyRequest
    ///</summary>
    ///<returns type="Object" />
    return {
        ///<field name="overriddenSetName" type="String">Plural name of entity, if not according to plural rules</field>
        overriddenSetName: null,
        ///<field name="async" type="Boolean">Default true, if true requests are sent asynchronously</field>
        async: true,
        ///<field name="entityName" type="String">The entity name</field>
        entityName: null,
        ///<field name="entity" type="Object">The entity object</field>
        entity: null,
        ///<field name="alternateKey" type="Array"></field>
        alternateKey: []
    }
}
///<field name="DeleteByIdRequest" type="Function"></field>
Kool.WebApi.DeleteByIdRequest = function () {
    ///<summary>
    ///Return an object WebApi.DeleteRequest
    ///</summary>
    ///<returns type="Object" />
    return {
        ///<field name="overriddenSetName" type="String">Plural name of entity, if not according to plural rules</field>
        overriddenSetName: null,
        ///<field name="async" type="Boolean">Default true, if true requests are sent asynchronously</field>
        async: true,
        ///<field name="entityName" type="String">The entity name</field>
        entityName: null,
        ///<field name="entityId" type="Uniqueidentifier">The entity GUID Id</field>
        entityId: null
    }
}
///<field name="DeleteByAlternateKeyRequest" type="Function"></field>
Kool.WebApi.DeleteByAlternateKeyRequest = function () {
    ///<summary>
    ///Return an object WebApi.DeleteByAlternateKeyRequest.
    ///</summary>
    ///<returns type="Object" />
    return {
        ///<field name="overriddenSetName" type="String">Plural name of entity, if not according to plural rules</field>
        overriddenSetName: null,
        ///<field name="async" type="Boolean">Default true, if true requests are sent asynchronously</field>
        async: true,
        ///<field name="entityName" type="String">The entity name</field>
        entityName: null,
        ///<field name="alternateKey" type="Array"></field>
        alternateKey: []
    }
}
///<field name="DeleteSinglePropertyRequest" type="Function"></field>
Kool.WebApi.DeleteSinglePropertyRequest = function () {
    ///<summary>
    ///Return an object WebApi.DeleteSinglePropertyRequest
    ///</summary>
    ///<returns type="Object" />
    return {
        ///<field name="overriddenSetName" type="String">Plural name of entity, if not according to plural rules</field>
        overriddenSetName: null,
        ///<field name="async" type="Boolean">Default true, if true requests are sent asynchronously</field>
        async: true,
        ///<field name="entityName" type="String">The entity name</field>
        entityName: null,
        ///<field name="entityId" type="Uniqueidentifier">The entity GUID Id</field>
        entityId: null,
        ///<field name="queryParams" type="String">The ODATA query parameters</field>
        queryParams: null
    }
}
///<field name="AssociateRequest" type="Function"></field>
Kool.WebApi.AssociateRequest = function () {
    ///<summary>
    ///Return an object WebApi.AssociateRequest
    ///</summary>
    ///<returns type="Object" />
    return {
        ///<field name="async" type="Boolean">Default true, if true requests are sent asynchronously</field>
        async: true,
        ///<field name="relationShip" type="String">The relationship name</field>
        relationShip: null,
        ///<field name="source" type="Object">The source of AssociateRequest, an object: { entityName: String, entityId: String }</field>
        source: {
            ///<field name="overriddenSetName" type="String">Plural name of entity, if not according to plural rules</field>
            overriddenSetName: null,
            ///<field name="entityName" type="String">The entity name</field>
            entityName: null,
            ///<field name="entityId" type="Uniqueidentifier">The entity GUID Id</field>
            entityId: null,
        },
        ///<field name="target" type="Object">The target of AssociateRequest, an object: { entityName: String, entityId: String }</field>
        target: {
            ///<field name="overriddenSetName" type="String">Plural name of entity, if not according to plural rules</field>
            overriddenSetName: null,
            ///<field name="entityName" type="String">The entity name</field>
            entityName: null,
            ///<field name="entityId" type="Uniqueidentifier">The entity GUID Id</field>
            entityId: null,
        }
    }
}
///<field name="ExpandRequest" type="Function"></field>
Kool.WebApi.ExpandRequest = function () {
    ///<summary>
    ///Return an object WebApi.ExpandRequest
    ///</summary>
    ///<returns type="Object" />
    return {
        ///<field name="records" type="Array"></field>
        records: [],
        ///<field name="async" type="Boolean">Default true, if true requests are sent asynchronously</field>
        async: true,
    }
}
///<field name="DisassociateRequest" type="Function"></field>
Kool.WebApi.DisassociateRequest = function () {
    ///<summary>
    ///Return an object WebApi.DisassociateRequest
    ///</summary>
    ///<returns type="Object" />
    return {
        ///<field name="async" type="Boolean">Default true, if true requests are sent asynchronously</field>
        async: true,
        ///<field name="relationShip" type="String">The relationship name</field>
        relationShip: null,
        ///<field name="source" type="Object">The source of DisassociateRequest, an object: { entityName: String, entityId: String }</field>
        source: {
            ///<field name="overriddenSetName" type="String">Plural name of entity, if not according to plural rules</field>
            overriddenSetName: null,
            ///<field name="entityName" type="String">The entity name</field>
            entityName: null,
            ///<field name="entityId" type="Uniqueidentifier">The entity GUID Id</field>
            entityId: null,
        },
        ///<field name="target" type="Object">The target of DisassociateRequest, an object: { entityName: String, entityId: String }</field>
        target: {
            ///<field name="overriddenSetName" type="String">Plural name of entity, if not according to plural rules</field>
            overriddenSetName: null,
            ///<field name="entityName" type="String">The entity name</field>
            entityName: null,
            ///<field name="entityId" type="Uniqueidentifier">The entity GUID Id</field>
            entityId: null,
        }
    }
}
///<field name="WithRequest" type="Function"></field>
Kool.WebApi.WithRequest = function () {
    ///<summary>
    ///Return with object that can use with Kool.WebApi.Requests
    ///</summary>
    ///<returns type="Object" />
    return {
        method: null,
        name: null,
        bound: null,
        entityName: null,
        entityId: null,
        payload: null,
        headers: null,
        urlParams: null,
        async: null
    }
}
///<field name="AlternateKey" type="Function"></field>
Kool.WebApi.AlternateKey = function () {
    ///<summary>
    ///Return an alternate key object.
    ///</summary>
    ///<returns type="Object" />
    return {
        property: null,
        value: null
    }
}
///<field name="CreateRequest" type="Function"></field>
intellisense.WebApiCreate = function (request) {
    ///<summary>
    ///Create Dynamics 365 record
    ///</summary>
    ///<param name="request" type="Kool.WebApi.CreateRequest">Kool.WebApi.CreateRequest</param>
    ///<returns type="Object" />
    return {
        ///<field name="then" type="Function"></field>
        then: intellisense.WebApiCatch
    }
}
intellisense.WebApiRetrieve = function (request) {
    ///<signature>
    ///<summary>
    ///Retrieve single records by Id
    ///</summary>
    ///<param name="request" type="Kool.WebApi.RetrieveByIdRequest">Kool.WebApi.RetrieveByIdRequest</param>
    ///<returns type="Object" />
    ///</signature>
    ///<signature>
    ///<summary>
    ///Retrieve single records  by alternate key
    ///</summary>
    ///<param name="request" type="Kool.WebApi.RetrieveByAlternateKeyRequest">Kool.WebApi.RetrieveByAlternateKeyRequest</param>
    ///<returns type="Object" />
    ///</signature>
    ///<signature>
    ///<summary>
    ///Retrieve multiple records by query expression
    ///</summary>
    ///<param name="request" type="Kool.WebApi.RetrieveByQueryExpressionRequest">Kool.WebApi.RetrieveByQueryExpressionRequest</param>
    ///<returns type="Object" />
    ///</signature>
    ///<signature>
    ///<summary>
    ///Retrieve multiple records by FetchXml
    ///</summary>
    ///<param name="request" type="Kool.WebApi.RetrieveByFetchXmlRequest">Kool.WebApi.RetrieveByFetchXmlRequest</param>
    ///<returns type="Object" />
    ///</signature>
    return {
        ///<field name="then" type="Function"></field>
        then: intellisense.WebApiCatch,
        ///<field name="value" type="Array"></field>
        value: null
    }
}
intellisense.WebApiExpand = function (request) {
    ///<summary>
    ///Get an expand data
    ///</summary>
    ///<param name="request" type="Kool.WebApi.ExpandRequest">ExpandRequest</param>
    ///<returns type="Object" />
    return {
        ///<field name="then" type="Function"></field>
        then: intellisense.WebApiCatch
    }
}
intellisense.WebApiUpdate = function (request) {
    ///<signature>
    ///<summary>
    ///Update crm record by Id
    ///</summary>
    ///<param name="request" type="Kool.WebApi.UpdateByIdRequest">Kool.WebApi.UpdateByIdRequest</param>
    ///<returns type="Object" />
    ///</signature>
    ///<signature>
    ///<summary>
    ///Update crm record by alternate key
    ///</summary>
    ///<param name="request" type="Kool.WebApi.UpdateByAlternateKeyRequest">Kool.WebApi.UpdateByAlternateKeyRequest</param>
    ///<returns type="Object" />
    ///</signature>
    return {
        ///<field name="then" type="Function"></field>
        then: intellisense.WebApiCatch
    }
}
intellisense.WebApiDelete = function (request) {
    ///<signature>
    ///<summary>
    ///Delete crm record by Id
    ///</summary>
    ///<param name="request" type="Kool.WebApi.DeleteByIdRequest">Kool.WebApi.DeleteByIdRequest</param>
    ///<returns type="Object" />
    ///</signature>
    ///<signature>
    ///<summary>
    ///Delete crm record by alternate key
    ///</summary>
    ///<param name="request" type="Kool.WebApi.UpdateByAlternateKeyRequest">Kool.WebApi.UpdateByAlternateKeyRequest</param>
    ///<returns type="Object" />
    ///</signature>
    ///<signature>
    ///<summary>
    ///Delete crm single property
    ///</summary>
    ///<param name="request" type="Kool.WebApi.DeleteSinglePropertyRequest">Kool.WebApi.DeleteSinglePropertyRequest</param>
    ///<returns type="Object" />
    ///</signature>
    return {
        ///<field name="then" type="Function"></field>
        then: intellisense.WebApiCatch
    }
}
intellisense.WebApiAssociate = function (request) {
    ///<summary>
    ///Associate source record to target record
    ///</summary>
    ///<param name="request" type="Kool.WebApi.AssociateRequest">Kool.WebApi.AssociateRequest</param>
    ///<returns type="Object" />
    return {
        ///<field name="then" type="Function"></field>
        then: intellisense.WebApiCatch
    }
}
intellisense.WebApiDisassociate = function (request) {
    ///<summary>
    ///Disassociate source record to target record
    ///</summary>
    ///<param name="request" type="Kool.WebApi.DisassociateRequest">Kool.WebApi.DisassociateRequest</param>
    ///<returns type="Object" />
    return {
        ///<field name="then" type="Function"></field>
        then: intellisense.WebApiCatch
    }
}
intellisense.WebApiExecute = function (request) {
    ///<summary>
    ///Executing actions / functions
    ///</summary>
    ///<param name="request" type="Kool.WebApi.Requests.*">Kool.WebApi.Requests.*</param>
    ///<returns type="Object" />
    return {
        ///<field name="then" type="Function"></field>
        then: intellisense.WebApiCatch
    }
}
intellisense.WebApiWithRequest = function (object) {
    ///<summary>
    ///object of this request
    ///</summary>
    ///<param name="object" type="Kool.WebApi.WithRequest">Kool.WebApi.WithRequest</param>
    ///<returns type="Object" />
}
intellisense.WebApiCatch = function (handler) {
    ///<summary>
    ///Then from WebApi
    ///</summary>
    ///<param name="handler" type="Function">function(resopnse) {}</param>
    ///<returns type="Object" />
    return {
        ///<field name="catch" type="Function"></field>
        catch: intellisense.WebApiFinally
    }
}
intellisense.WebApiFinally = function (error) {
    ///<summary>
    ///Catch from WebApi
    ///</summary>
    ///<param name="error" type="Function">function(error) {}</param>
    ///<returns type="Object" />
    return {
        ///<field name="finally" type="Function"></field>
        finally: intellisense.WebApiDone
    }
}
intellisense.WebApiDone = function (done) {
    ///<summary>
    ///Finally from WebApi
    ///</summary>
    ///<param name="done" type="Function">function(done) {}</param>
    ///<returns type="Object" />
    return {};
}