/** PL.DynamicsCrm.DevKit global variable */
declare namespace Rocket {
    module WebApi {
        interface OptionSetValue {
            /** The optionset item value. E.g.: 1000000001 */
            Value: number;
            /** The optionset label text. E.g. "Dynamics 365" */
            FormattedValue: string;
        }
        interface MultiOptionSetValue {
            /** The array optionset item value [array integer type] E.g.: [1000000001, 1000000003]*/
            Value: Array<number>;
            /** The array optionset label text [array string type] E.g.: ["Dynamics 2011", "Dynamics 365"] */
            FormattedValue: Array<string>;
        }
        interface BooleanValue {
            /** The bool value of field [boolean type] E.g.: true */
            Value: boolean;
            /** The label text of field [string type] E.g.: "Yes" */
            FormattedValue: string;
        }
        interface DateOnlyValue {
            /** The date only value of field. Always format yyyy-MM-dd [string type] E.g.: "2019-04-30" */
            Value: string;
            /** The date only string formatted of field base on user setting format [string type] E.g.: "2019.04.30" */
            FormattedValue: string;
        }
        interface UtcDateOnlyValue {
            /** The UTC date only value of field [string type] E.g.: "2019-04-29T17:00:00Z" */
            Value: string;
            /** The UTC date only string formatted of field base on user setting format [string type] E.g.: "30.04.2019" */
            FormattedValue: string;
        }
        interface UtcDateAndTimeValue {
            /** The UTC date and time value of field [string type] E.g.: "2019-04-27T07:30:00Z" */
            Value: string;
            /** The UTC date and time string formatted of field base on user setting format [string type] E.g.: "27.04.2019 02:30 CH" */
            FormattedValue: string;
        }
        interface TimezoneDateOnlyValue {
            /** The time-zone date only value of field [string type] E.g.: "2019-04-26T00:00:00Z" */
            Value: string;
            /** The time-zone date string formatted of field base on user setting format [string type] E.g.: "26.04.2019" */
            FormattedValue: string;
        }
        interface TimezoneDateAndTimeValue {
            /** The time-zone date and time value of field. E.g.: "2019-04-28T15:30:00Z" */
            Value: string;
            /** The time-zone date and time string formatted of field base on user setting format. E.g.: "28.04.2019 03:30 CH" */
            FormattedValue: string;
        }
        interface IntegerValue {
            /** The integer value of field. E.g.: 1234567 */
            Value: number;
            /** The string formatted value of field base on user setting format. E.g.: "1.234.567" */
            FormattedValue: string;
        }
        interface BigIntValue {
            /** The big integer value of field. E.g.: 1234567 */
            Value: number;
            /** The string formatted value of field base on user setting format. E.g.: "1.234.567" */
            FormattedValue: string;
        }
        interface DoubleValue {
            /** The double value of field. E.g.: 1234.57 */
            Value: number;
            /** The string formatted value of field base on user setting format. E.g.: "1.234,57" */
            FormattedValue: string;
        }
        interface DecimalValue {
            /** The decimal value of field. E.g.: 1234567.89 */
            Value: number;
            /** The string formatted value of field base on user setting format. E.g.: "1.234.567,89" */
            FormattedValue: string;
        }
        interface MoneyValue {
            /** The currency value of field. E.g.: 123456.35 */
            Value: number;
            /** The string formatted value of field base on user setting format. E.g.: "123.456,35 $" */
            FormattedValue: string;
        }
        interface StringValue {
            /** The string value of field. E.g.: "A. Datum Corporation (sample)" */
            Value: string;
        }
        interface LookupValue {
            /** The guid value of field. E.g.: f55a0d1e-286b-e911-a997-000d3a802135 */
            Value: string;
            /** The string formatted value of field. E.g.: "A. Datum Corporation (sample)" */
            FormattedValue: string;
        }
        interface GuidValue {
            /** The guid value of field. E.g.: f55a0d1e-286b-e911-a997-000d3a802135 */
            Value: string;
        }
        class EntityReference {
            constructor();
            /** Plural name of entity, if not according to plural rules */
            overriddenSetName: string;
            /** The entity name */
            entityName: string;
            /** The entity Guid Id */
            entityId: string;
        }
        class AlternateKey {
            /**
             * Return a alternate key object { property, value }
             * @param property the alternate logical name
             * @param value the value query
             */
            constructor(property: string, value: object);
        }
        class Header {
            /**
             * Retrun a header object { key, value }
             * @param key the header key
             * @param value the header value
             */
            constructor(key: string, value: string);
        }
        class RetrieveRequest {
            constructor();
            /** Entity name of records that should be retrieved */
            entityName: string;
            /** Plural name of entity, if not according to plural rules */
            overriddenSetName: string;
            /** ID of entity to retrieve, will return single record */
            entityId: string;
            /** Alternate key array for retrieving single record */
            alternateKey: Array<AlternateKey>;
            /** Query Parameters to append to URL, such as ?$select=* */
            queryParams: string;
            /** Fetch XML query */
            fetchXml: string;
            /** Default false, checks for more pages when retrieving results. If set to true, all pages will be retrieved, if set to false, only the first page will be retrieved */
            returnAllPages: boolean;
            /** Set to false for sending all requests synchronously. True by default */
            async: boolean;
            /** Headers to attach to request. Default { key: 'Prefer', value: 'odata.include-annotations='*'' } */
            headers: Array<Header>;
            /** Default false, there is support for sending multiple requests as a batch */
            asBatch: boolean;
        }
        class RetrieveResponse {
            constructor();
            /**
             * Use with asynchronous request
             * @param callback the callback for asynchronous request
             */
            then(callback: (data: object) => void) : Rocket.WebApi.CatchRespone;
            "@odata.context": string;
            /** Use the value of the @odata.nextLink property to request the next set of records. Don’t change or append any additional system query options to the value */
            "@odata.nextLink": string;
            /** The response @odata.count property will contain the number of entities that match the filter criteria irrespective of an odata.maxpagesize preference limitation */
            "@odata.count": number;
            /** A paging cookie must be requested as an annotation. And a @Microsoft.Dynamics.CRM.fetchxmlpagingcookie property will be returned with the result */
            "@Microsoft.Dynamics.CRM.fetchxmlpagingcookie": string;
            /** Set to true if you want retrieve more records */
            "@Microsoft.Dynamics.CRM.morerecords": boolean;
            /** When you set returntotalrecordcount="true" in FetchXml, this value return the count */
            "@Microsoft.Dynamics.CRM.totalrecordcount": number;
            /** The total record count limit exceeded value */
            "@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded": boolean;
            /** An array object of ODATA value*/
            value: Array<object>;
        }
        class CreateRequest {
            constructor();
            /** Entity name of record that should be created */
            entityName: string;
            /** Plural name of entity, if not according to plural rules */
            overriddenSetName: string;
            /** Object containing record data */
            entity: object;
            /** Set to false for sending all requests synchronously. True by default */
            async: boolean;
            /** Headers to attach to request. Default { key: 'Prefer', value: 'odata.include-annotations='*'' } */
            headers: Array<Header>;
            /** Default false, there is support for sending multiple requests as a batch */
            asBatch: boolean;
        }
        class DeleteRequest {
            constructor();
            /** Entity name of records that should be deleted */
            entityName: string;
            /** Plural name of entity, if not according to plural rules */
            overriddenSetName: string;
            /** ID of entity to delete */
            entityId: string;
            /** Alternate key array for deleting record */
            alternateKey: Array<AlternateKey>;
            /** Set to false for sending all requests synchronously. True by default */
            async: boolean;
            /** Headers to attach to request. Default { key: 'Prefer', value: 'odata.include-annotations='*'' } */
            headers: Array<Header>;
            /** Default false, there is support for sending multiple requests as a batch */
            asBatch: boolean;
        }
        class CreateResponse {
            constructor();
            /**
             * Use with asynchronous request
             * @param callback the callback for asynchronous request
             */
            then(callback: (data: object) => void): Rocket.WebApi.CatchRespone;
        }
        class UpdateResponse {
            constructor();
            /**
             * Use with asynchronous request
             * @param callback the callback for asynchronous request
             */
            then(callback: (data: object) => void): Rocket.WebApi.CatchRespone;
        }
        class DeleteResponse {
            constructor();
            /**
             * Use with asynchronous request
             * @param callback the callback for asynchronous request
             */
            then(callback: (data: object) => void): Rocket.WebApi.CatchRespone;
        }
        class AssociateResponse {
            constructor();
            /**
             * Use with asynchronous request
             * @param callback the callback for asynchronous request
             */
            then(callback: (data: object) => void): Rocket.WebApi.CatchRespone;
        }
        class DisassociateResponse {
            constructor();
            then(callback: (data: object) => void): Rocket.WebApi.CatchRespone;
        }
        class CatchRespone {
            constructor();
            /**
             * Use with asynchronous request
             * @param callback the callback for asynchronous request
             */
            catch(callback: (data: object) => void): Rocket.WebApi.FinallyRespone;
        }
        class FinallyRespone {
            constructor();
            /**
             * Use with asynchronous request
             * @param callback the callback for asynchronous request
             */
            finally(callback: (data: object) => void): Rocket.WebApi.DoneRespone;
        }
        class DoneRespone {
            constructor();
            /**
             * Use with asynchronous request
             * @param callback the callback for asynchronous request
             */
            done(callback: (data: object) => void);
        }
        class UpdateRequest {
            constructor();
            /** Entity name of records that should be updated */
            entityName: string;
            /** Plural name of entity, if not according to plural rules */
            overriddenSetName: string;
            /** Object containing record data */
            entity: object;
            /** ID of entity to update */
            entityId: string;
            /** Alternate key array for updating record */
            alternateKey: Array<AlternateKey>;
            /** Set to false for sending all requests synchronously. True by default */
            async: boolean;
            /** Headers to attach to request. Default { key: 'Prefer', value: 'odata.include-annotations='*'' } */
            headers: Array<Header>;
            /** Default false, there is support for sending multiple requests as a batch */
            asBatch: boolean;
        }
        class CustomRequest {
            constructor();
            /** The HTTP method of the request, such as GET / POST / ... */
            method: string;
            /** The name of the request */
            name: string;
            /** Determines if request is bound, i.e. always executed regarding a distinct record, or not. Defaults to false */
            bound: boolean;
            /** Name of the request if it is bound to an entity */
            entityName: string;
            /** Record ID if bound to an entity */
            entityId: string;
            /** Message body for this request */
            payload: object;
            /** Object with key-value pairs that will be appended to the URL of a GET request. Used for calling functions with parameters */
            urlParams: string;
            /** Set to false for sending all requests synchronously. True by default */
            async: boolean;
            /** Headers to attach to request. Default { key: 'Prefer', value: 'odata.include-annotations='*'' } */
            headers: Array<Header>;
            /** Default false, there is support for sending multiple requests as a batch */
            asBatch: boolean;
        }
        class AssociateRequest {
            constructor();
            /** Name of relation ship to use for associating */
            relationShip: string;
            /** Source entity for associating */
            source: EntityReference;
            /** Target entity for associating */
            target: EntityReference;
            /** Set to false for sending all requests synchronously. True by default */
            async: boolean;
            /** Headers to attach to request. Default { key: 'Prefer', value: 'odata.include-annotations='*'' } */
            headers: Array<Header>;
            /** Default false, there is support for sending multiple requests as a batch */
            asBatch: boolean;
        }
        class DisassociateRequest {
            constructor();
            /** Name of relation ship to use for disassociating */
            relationShip: string;
            /** Source entity for disassociating */
            source: EntityReference;
            /** Target entity for disassociating */
            target: EntityReference;
            /** Set to false for sending all requests synchronously. True by default */
            async: boolean;
            /** Headers to attach to request. Default { key: 'Prefer', value: 'odata.include-annotations='*'' } */
            headers: Array<Header>;
            /** Default false, there is support for sending multiple requests as a batch */
            asBatch: boolean;
        }
    }
    module Form {
        interface KeyValueObject {
            key: string,
            value: object
        }
        interface KeyValueNumber {
            key: string,
            value: number
        }
        interface EntityBaseAttribute {
            /** Type of an attribute. */
            AttributeType: number;
            /** Display name for the attribute. */
            DisplayName: string;
            /** Logical name of the entity that contains the attribute. */
            EntityLogicalName: string;
            /** Logical name for the attribute. */
            LogicalName: string;
        }
        interface EntityBooleanAttribute extends EntityBaseAttribute {
            /** Default value for a Boolean option set. */
            DefaultFormValue: boolean;
            /** Options for the boolean attribute where each option is a key: value pair. */
            OptionSet: Array<KeyValueNumber>;
        }
        interface EntityEnumAttribute extends EntityBaseAttribute {
            /** Options for the boolean attribute where each option is a key: value pair. */
            OptionSet: Array<KeyValueNumber>;
        }
        interface EntityPicklistAttribute extends EntityBaseAttribute {
            /** Default value for a Number option set. */
            DefaultFormValue: number;
            /** Options for the boolean attribute where each option is a key: value pair. */
            OptionSet: Array<KeyValueNumber>;
        }
        interface EntityStateAttribute extends EntityBaseAttribute {
            /** Options for the boolean attribute where each option is a key: value pair. */
            OptionSet: Array<KeyValueNumber>;
            /**
             * Returns the default status based on the passed in state value for an entity
             * @param arg statecode value
             */
            getDefaultStatus(arg: number): number;
            /**
             * Returns possible status values (array of numbers) for a specified state value.
             * @param arg statecode value
             */
            getStatusValuesForState(arg: number): Array<number>;
        }
        interface EntityStatusAttribute extends EntityBaseAttribute {
            /** Options for the boolean attribute where each option is a key: value pair. */
            OptionSet: Array<KeyValueNumber>;
            /**
             * Returns the state value (number) for the specified status value (number).
             * @param arg statuscode value
             */
            getState(arg: number): Array<number>;
        }
        interface EntityPrivilege {
            /** Whether the privilege can be basic access level. */
            CanBeBasic: boolean;
            /** Whether the privilege can be deep access level. */
            CanBeDeep: boolean;
            /** Whether the privilege for an external party can be basic access level. */
            CanBeEntityReference: boolean;
            /** Whether the privilege can be global access level. */
            CanBeGlobal: boolean;
            /** Whether the privilege can be local access level. */
            CanBeLocal: boolean;
            /** Whether the privilege for an external party can be parent access level. */
            CanBeParentEntityReference: boolean;
            /** The name of the privilege. */
            Name: string;
            /** The ID of the privilege. */
            PrivilegeId: string;
            /** The type of privilege, which is one of the following: */
            PrivilegeType: {
                None: number;
                Create: number;
                Read: number;
                Write: number;
                Delete: number;
                Assign: number;
                Share: number;
                Append: number;
                AppendTo: number;
            }
        }
        interface EntityMetadata {
            /** Whether a custom activity should appear in the activity menus in the Web application. 0 indicates that the custom activity doesn't appear; 1 indicates that it does appear. */
            ActivityTypeMask: number;
            /** Indicates whether to automatically move records to the owner’s default queue when a record of this type is created or assigned. */
            AutoRouteToOwnerQueue: boolean;
            /** Indicates whether the entity can trigger a workflow process. */
            CanTriggerWorkflow: boolean;
            /** Description for the entity. */
            Description: string;
            /** Plural display name for the entity. */
            DisplayCollectionName: string;
            /** Display name for the entity. */
            DisplayName: string;
            /** Indicates whether the entity will enforce custom state transitions. */
            EnforceStateTransitions: boolean;
            /** The hexadecimal code to represent the color to be used for this entity in the application. */
            EntityColor: string;
            /** The name of the Web API entity set for this entity. */
            EntitySetName: string;
            /** Indicates whether activities are associated with this entity. */
            HasActivities: boolean;
            /** Indicates whether the entity is an activity. */
            IsActivity: boolean;
            /** Indicates whether the email messages can be sent to an email address stored in a record of this type. */
            IsActivityParty: boolean;
            /** Indicates whether the entity is enabled for business process flows. */
            IsBusinessProcessEnabled: boolean;
            /** Indicates whether the entity is a business process flow entity. */
            IsBPFEntity: boolean;
            /** Indicates whether the entity is a child entity. */
            IsChildEntity: boolean;
            /** Indicates whether connections are enabled for this entity. */
            IsConnectionsEnabled: boolean;
            /** Indicates whether the entity is a custom entity. */
            IsCustomEntity: boolean;
            /** Indicates whether the entity is customizable. */
            IsCustomizable: boolean;
            /** Indicates whether document management is enabled. */
            IsDocumentManagementEnabled: boolean;
            /** Indicates whether the documemt recommendations is enabled. */
            IsDocumentRecommendationsEnabled: boolean;
            /** Indicates whether duplicate detection is enabled. */
            IsDuplicateDetectionEnabled: boolean;
            /** Indicates whether charts are enabled. */
            IsEnabledForCharts: boolean;
            /** Indicates whether the entity can be imported using the Import Wizard. */
            IsImportable: boolean;
            /** Indicates the entity is enabled for interactive experience. */
            IsInteractionCentricEnabled: boolean;
            /** Indicates whether knowledge management is enabled for the entity. */
            IsKnowledgeManagementEnabled: boolean;
            /** Indicates whether mail merge is enabled for this entity. */
            IsMailMergeEnabled: boolean;
            /** Indicates whether the entity is part of a managed solution. */
            IsManaged: boolean;
            /** Indicates whether OneNote integration is enabled for the entity. */
            IsOneNoteIntegrationEnabled: boolean;
            /** Indicates whether optimistic concurrency is enabled for the entity. */
            IsOptimisticConcurrencyEnabled: boolean;
            /** Indicates whether the entity is enabled for quick create forms. */
            IsQuickCreateEnabled: boolean;
            /** Indicates whether the entity supports setting custom state transitions. */
            IsStateModelAware: boolean;
            /** Indicates whether the entity is will be shown in Advanced Find. */
            IsValidForAdvancedFind: boolean;
            /** Indicates whether Microsoft Dynamics 365 for tablets users can see data for this entity. */
            IsVisibleInMobileClient: boolean;
            /** Indicates whether the entity is enabled for Unified Interface. */
            IsEnabledInUnifiedInterface: boolean;
            /** The logical collection name. */
            LogicalCollectionName: string;
            /** The logical name for the entity. */
            LogicalName: string;
            /** The entity type code. */
            ObjectTypeCode: number;
            /** The ownership type for the entity: "UserOwned" or "OrganizationOwned". */
            OwnershipType: string;
            /** The name of the attribute that is the primary id for the entity. */
            PrimaryIdAttribute: string;
            /** String	The name of the primary image attribute for an entity. */
            PrimaryImageAttribute: string;
            /** The name of the primary attribute for an entity. */
            PrimaryNameAttribute: string;
            /** The privilege metadata for the entity where each object contains the following attributes to define the security privilege for access to an entity */
            Privileges: Array<EntityPrivilege>;
            /** A collection of attribute metadata objects. The object returned depends on the type of attribute metadata. */
            Attributes: Array<EntityBaseAttribute | EntityBooleanAttribute | EntityEnumAttribute | EntityPicklistAttribute | EntityStateAttribute | EntityStatusAttribute>;
        }
        interface LookupOption {
            /** Indicates whether the lookup allows more than one item to be selected */
            allowMultiSelect: boolean;
            /** The default entity type to use */
            defaultEntityType: string;
            /** The default view to use */
            defaultViewId: string;
            /** Decides whether to display the most recently used(MRU) item. Available only for Unified Interface */
            disableMru: boolean;
            /** The entity types to display */
            entityTypes: Array<string>;
            /** Used to filter the results */
            filters: Array<{ filterXml: string, entityLogicalName: string }>;
            /** Indicates whether the lookup control should show the barcode scanner in mobile clients */
            showBarcodeScanner: boolean;
            /** The views to be available in the view picker. Only system views are supported */
            viewIds: Array<string>;
        }
        interface Utility {
            /**
             * Closes a progress dialog box. If no progress dialog is displayed currently, this method will do nothing. You can display a progress dialog using the ShowProgressIndicator method.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/closeprogressindicator
             * */
            CloseProgressIndicator(): void;
            /**
             * Returns the valid state transitions for the specified entity type and state code.
             * @param entityName The logical name of the entity.
             * @param statusCode The status code to find out the allowed status transition values.
             * @param successCallback The function to execute when the operation succeeds.
             * @param errorCallback The function to execute when the operation fails.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getallowedstatustransitions
             */
            AllowedStatusTransitions(entityName: string, statusCode: number, successCallback: (statusCodes: Array<number>) => void, errorCallback: (error: object) => void): void;
            /**
             * Returns the entity metadata for the specified entity.
             * @param entityName The logical name of the entity.
             * @param attributes The attributes to get metadata for.
             * @param successCallback A function to call when the entity metadata is returned.
             * @param errorCallback A function to call when the operation fails.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getentitymetadata
             */
            EntityMetadata(entityName: string, attributes?: Array<string>, successCallback: (meta: EntityMetadata) => void, errorCallback: (error: object) => void): void;
            /** Provides access to the methods to determine which client is being used, whether the client is connected to the server, and what kind of device is being used. */
            Client: {
                /** Returns a value to indicate which client the script is executing in. */
                ClientName: OptionSet.ClientName;
                /** Returns a value to indicate the state of the client. */
                ClientState: OptionSet.ClientState;
                /** Returns information about the kind of device the user is using. */
                FormFactor: OptionSet.FormFactor;
                /** Returns information whether the server is online or offline */
                IsOffline(): boolean;
            };
            /** Returns information about the current organization settings */
            OrganizationSettings: {
                /** Returns attributes and their values as key:value pairs that are available for the organization entity. Additional values will be available as attributes if they are specified as attribute dependencies in the web resource dependency list. The key will be the attribute logical name */
                Attributes: Array<KeyValueObject>;
                /** Returns the ID of the base currency for the current organization */
                BaseCurrencyId: string;
                /** Returns the default country/region code for phone numbers for the current organization */
                DefaultCountryCode: string;
                /** Indicates whether the auto-save option is enabled for the current organization */
                IsAutoSaveEnabled: boolean;
                /** Returns the preferred language ID for the current organization */
                LanguageId: number;
                /** Returns the ID of the current organization */
                OrganizationId: string;
                /** Returns the unique name of the current organization */
                UniqueName: string;
                /** Indicates whether the Skype protocol is used for the current organization */
                UseSkypeProtocol: boolean;
            };
            /** Returns information about the current user settings */
            UserSettings: {
                /** Returns the date formatting information for the current user */
                DateFormattingInfo: {
                    AMDesignator: object,
                    AbbreviatedDayNames: object,
                    AbbreviatedMonthGenitiveNames: object,
                    AbbreviatedMonthNames: object,
                    CalendarWeekRule: object,
                    Calendar: object,
                    DateSeparator: object,
                    DayNames: object,
                    FirstDayOfWeek: object,
                    FullDateTimePattern: object,
                    LongDatePattern: object,
                    LongTimePattern: object,
                    MonthDayPattern: object,
                    MonthGenitiveNames: object,
                    MonthNames: object,
                    PMDesignator: object,
                    ShortDatePattern: object,
                    ShortTimePattern: object,
                    ShortestDayNames: object,
                    UniversalSortableDateTimePattern: object,
                    SortableDateTimePattern: object,
                    TimeSeparator: object,
                    UniversalSortableDateTimePattern: object,
                    YearMonthPattern: object
                };
                /** Returns the ID of the default dashboard for the current user */
                DefaultDashboardId: string;
                /** Indicates whether guided help is enabled for the current user */
                IsGuidedHelpEnabled: boolean;
                /** Indicates whether high contrast is enabled for the current user */
                IsHighContrastEnabled: boolean;
                /** Indicates whether the language for the current user is a right-to-left (RTL) language */
                IsRTL: boolean;
                /** Returns the language ID for the current user */
                LanguageId: number;
                /** Returns an array of strings that represent the GUID values of each of the security role privilege that the user is associated with or any teams that the user is associated with */
                SecurityRolePrivileges: Array<string>;
                /** Returns an array of strings that represent the GUID values of each of the security role that the user is associated with or any teams that the user is associated with */
                SecurityRoles: Array<string>;
                /** Returns the transaction currency ID for the current user */
                TransactionCurrencyId: string;
                /** Returns the GUID of the SystemUser.Id value for the current user */
                UserId: string;
                /** Returns the name of the current user */
                UserName: string;
                /** Returns the difference in minutes between the local time and Coordinated Universal Time (UTC) */
                TimeZoneOffsetMinutes: number;
            };
            /** Returns information about the advanced configuration settings for the organization */
            AdvancedConfigSetting: OptionSet.AdvancedConfigSetting;
            /** Returns the base URL that was used to access the application */
            ClientUrl: string;
            /**
             * Returns the name of the current business app in Customer Engagement
             * @param successCallback A function to call when the business app name is returned
             * @param errorCallback A function to call when the operation fails
             */
            CurrentAppName(successCallback: (data: object) => void, errorCallback: (error: object) => void): void;
            /**
             * Returns the properties of the current business app in Customer Engagement
             * @param successCallback A function to call when the business app property information is returned
             * @param errorCallback A function to call when the operation fails
             */
            CurrentAppProperties(successCallback: (data: { appId: string, displayName: string, uniqueName: string, url: string, webResourceId: string, webResourceName: string, welcomePageId: string, welcomePageName: string }) => void, errorCallback: (error: object) => void): void;
            /** Returns the URL of the current business app in Customer Engagement */
            CurrentAppUrl: string;
            /** Returns the version number of the Dynamics 365 for Customer Engagement apps instance. E.g.: "9.0.0.1103" */
            Version: string;
            /** Returns a boolean value indicating if the Customer Engagement instance is hosted on-premises or online */
            IsOnPremise: boolean;
            /**
             * Prefixes the current organization's unique name to a string, typically a URL path
             * @param sPath A local path to a resource
             */
            PrependOrgName(sPath: string): string;
            /** Returns the name of the DOM attribute expected by the Learning Path (guided help) Content Designer for identifying UI controls in the Dynamics 365 for Customer Engagement apps form. An attribute by this name must be added to the UI element that needs to be exposed to Learning Path (guided help) */
            LearningPathAttributeName: string;
            /**
             * Returns the localized string for a given key associated with the specified web resource
             * @param webResourceName The name of the web resource. E.g.: "devkit_/resources/Resource"
             * @param key The key for the localized string
             */
            ResourceString(webResourceName: string, key: string): string;
            /**
             * Returns the localized string for a given key associated with the default web resource
             * @param key The key for the localized string
             */
            Resource(key: string): string;
            /**
             * Invokes an action based on the specified parameters
             * @param name Name of the process action to invoke
             * @param parameter An object containing input parameters for the action. You define an object using key:value pairs of items, where key is of String type
             * @param successCallback A function to call when the action is invoked
             * @param errorCallback A function to call when the operation fails
             */
            InvokeProcessAction(name, parameter?: object, successCallback: (data: object) => void, errorCallback: (error: object) => void): void;
            /**
             * Defines the options for opening the lookup dialog
             * @param lookupOptions
             * @param successCallback A function to call when the lookup control is invoked. An array of objects properties is passed
             * @param cancelCallback A function to call when you cancel the lookup control or the operation fails
             */
            LookupObjects(lookupOptions: LookupOption, successCallback: (data: { entityType: string, id: string, name: string }) => void, errorCallback: (error: object) => void): void;
            /**
             * Refreshes the parent grid containing the specified record
             * @param lookupOptions An object with the following properties to specify the record
             */
            RefreshParentGrid(lookupOptions: { entityType: string, id: string, name: string }): void;
            /**
             * Displays a progress dialog with the specified message. Any subsequent call to this method will update the displayed message in the existing progress dialog with the message specified in the latest method call. The progress dialog blocks the UI until it is closed using the CloseProgressIndicator method. So, you must use this method with caution
             * @param message The message to be displayed in the progress dialog
             */
            ShowProgressIndicator(message: string): void;
        }
    }
}
/** PL.DynamicsCrm.DevKit global variable */
declare namespace OptionSet {
    /** Returns information about the kind of device the user is using. */
    enum FormFactor {
        /** 0 */
        Unknown,
        /** 1 */
        Desktop,
        /** 2 */
        Tablet,
        /** 3 */
        Phone,
    }
    /** Returns a value to indicate the state of the client. */
    enum ClientState {
        /** Online */
        Online,
        /** Offline */
        Offline,
    }
    /** Returns a value to indicate which client the script is executing in. */
    enum ClientName {
        /** Web */
        Web,
        /** Outlook */
        Outlook,
        /** Mobile */
        Mobile
    }
    /** Gets the form type for the record. */
    enum FormType {
        /** 0 */
        Undefined,
        /** 1 - Quick Create forms return 1 */
        Create,
        /** 2 */
        Update,
        /** 3 */
        ReadOnly,
        /** 4 */
        Disabled,
        /** 5 */
        BulkEdit,
    }
    /** Specify options for saving the record. If no parameter is included in the method, the record will simply be saved. This is the equivalent of using the Save command */
    enum SaveOption {
        /** saveandclose - This is the equivalent of using the Save and Close command */
        SaveAndClose,
        /** saveandnew - This is the equivalent of the using the Save and New command */
        SaveAndNew
    }
    /** Returns a value indicating how the save event was initiated by the user */
    enum SaveMode {
        /** 1 - All entities */
        Save,
        /** 2 - All entities */
        SaveAndClose,
        /** 5 - All entities */
        Deactivate,
        /** 6 - All entities */
        Reactivate,
        /** 7 - Email */
        Send,
        /** 15 - Lead */
        Disqualify,
        /** 16 - Lead */
        Qualify,
        /** 47 - User or Team */
        Assign,
        /** 58 - Activities */
        SaveAsCompleted,
        /** 59 - All entities */
        SaveAndNew,
        /** 70 - All entities */
        AutoSave
    }
    /** The level of the message, which defines how the message will be displayed */
    enum FormNotificationLevel {
        /** ERROR - Notification will use the system error icon */
        Error,
        /** WARNING - Notification will use the system warning icon */
        Warning,
        /** INFO - Notification will use the system info icon */
        Info
    }
    /** Display state of the tab */
    enum TabDisplayState {
        /** expanded */
        Expanded,
        /** collapsed */
        Collapsed
    }
    enum ProcessDisplayState {
        /** expanded */
        Expanded,
        /** collapsed */
        Collapsed,
        /** floating */
        Floating
    }
    /** Returns a string value that represents the type of attribute */
    enum FieldAttributeType {
        /** boolean */
        Boolean,
        /** datetime */
        DateTime,
        /** decimal */
        Decimal,
        /** double */
        Double,
        /** integer */
        Integer,
        /** lookup */
        Lookup,
        /** memo */
        Memo,
        /** money */
        Money,
        /** multiselectoptionset */
        MultiOptionSet,
        /** optionset */
        OptionSet,
        /** string */
        String
    }
    /** Returns a string value that represents formatting options for the attribute */
    enum FieldFormat {
        /** null */
        Null,
        /** date */
        Date,
        /** datetime */
        DateTime,
        /** duration */
        Duration,
        /** email */
        Email,
        /** language */
        Language,
        /** none */
        None,
        /** textarea */
        TextArea,
        /** text */
        Text,
        /** tickersymbol */
        TickerSymbol,
        /** phone */
        Phone,
        /** timezone */
        TimeZone,
        /** url */
        Url
    }
    /** Value indicating whether a value for the attribute is none or required or recommended */
    enum FieldRequiredLevel {
        /** none */
        None,
        /** required */
        Required,
        /** recommended */
        Recommended
    }
    /** Data from the attribute will be submitted when the record is saved */
    enum FieldSubmitMode {
        /** always - The data is always sent with a save */
        Always,
        /** never - The data is never sent with a save. When this is used, the field(s) in the form for this attribute cannot be edited */
        Never,
        /** dirty - Default behavior. The data is sent with the save when it has changed */
        Dirty
    }
    /** A value that categorizes controls */
    enum FieldControlType {
        /** standard - A standard control */
        Standard,
        /** iframe - An IFRAME control */
        Iframe,
        /** kbsearch - A knowledge base search control */
        KbSearch,
        /** lookup - A lookup control */
        Lookup,
        /** multiselectoptionset - A multi-select option set control */
        MultiSelectOptionset,
        /** notes - A notes control */
        Notes,
        /** optionset - An option set control */
        OptionSet,
        /** quickform - A quick view control */
        QuickForm,
        /** subgrid - A subgrid control */
        SubGrid,
        /** timercontrol - A timer control */
        TimerControl,
        /** timelinewall - A timeline control (for Unified Interface) */
        TimelineWall,
        /** webresource - A web resource control */
        WebResource
    }
    /** The type of notification */
    enum FieldNotificationLevel {
        /** ERROR */
        Error,
        /** RECOMMENDATION */
        Recommendation
    }
    /** The integer value of the business process flow category */
    enum ProcessCategory {
        /** 0 */
        Qualify,
        /** 1 */
        Develop,
        /** 2 */
        Propose,
        /** 3 */
        Close,
        /** 4 */
        Identify,
        /** 5 */
        Research,
        /** 6 */
        Resolve
    }
    /** The integer value status of the stage */
    enum ProcessStatus {
        /** active */
        Active,
        /** aborted */
        Aborted,
        /** finished */
        Finished
    }
    /** The state of the timer control - This method is only supported for Unified Interface */
    enum TimerState {
        /** 1 */
        NotSet,
        /** 2 */
        InProgress,
        /** 3 */
        Warning,
        /** 4 */
        Violated,
        /** 5 */
        Success,
        /** 6 */
        Expired,
        /** 7 */
        Canceled,
        /** 8 */
        Paused
    }
    /** Information about the advanced configuration settings for the organization */
    enum AdvancedConfigSetting {
        /** MaxChildIncidentNumber */
        MaxChildIncidentNumber,
        /** MaxIncidentMergeNumber */
        MaxIncidentMergeNumber
    }
    /** Describing whether to open or save the file */
    enum OpenFileOption {
        /** 1 */
        Open,
        /** 2 */
        Save
    }
}
/** A promise-based JavaScript library for the Microsoft Dynamics CRM WebApi. Github: https://github.com/DigitalFlow/Xrm-WebApi-Client */
declare namespace WebApiClient {
    /**
     * Retrieves records from CRM
     * @param request the RetrieveRequest object
     */
    function Retrieve(request: Rocket.WebApi.RetrieveRequest): Rocket.WebApi.RetrieveResponse;
    /**
     * Creates a given record in CRM
     * @param request the CreateRequest object
     */
    function Create(request: Rocket.WebApi.CreateRequest): Rocket.WebApi.CreateResponse;
    /**
     * Updates a given record in CRM
     * @param request the UpdateRequest object
     */
    function Update(request: Rocket.WebApi.UpdateRequest): Rocket.WebApi.UpdateResponse;
    /**
     * Deletes a given record in CRM
     * @param request the DeleteRequest object
     */
    function Delete(request: Rocket.WebApi.DeleteRequest): Rocket.WebApi.DeleteResponse;
    /**
     * Associates given records in CRM
     * @param request the AssociateRequest object
     */
    function Associate(request: Rocket.WebApi.AssociateRequest): Rocket.WebApi.AssociateResponse;
    /**
     * Disassociates given records in CRM
     * @param request the DisassociateRequest object
     */
    function Disassociate(request: Rocket.WebApi.DisassociateRequest): Rocket.WebApi.DisassociateResponse;
    /**
     * Executes the given request in CRM
     * @param request Request to send, must be in prototype chain of WebApiClient.Requests.Request
     */
    function Execute(request: object): object;
}