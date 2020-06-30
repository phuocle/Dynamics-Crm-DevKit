/** DynamicsCrm.DevKit for namespace Tomato */
declare namespace Tomato {
    namespace WebApi {
        class AlternateKey {
            /**
             * WebApiClient AlternateKey
             * @param property the alternate logical name
             * @param value the value query
             */
            constructor(property: string, value: any);
        }
        class AssociateRequest {
            /** WebApiClient AssociateRequest */
            constructor();
            /** Name of relation ship to use for associating */
            relationShip: string;
            /** Source entity for associating */
            source: DevKit.Core.EntityReference;
            /** Target entity for associating */
            target: DevKit.Core.EntityReference;
            /** Set to false for sending all requests synchronously. True by default */
            async?: boolean;
            /** Headers to attach to request. Default { key: 'Prefer', value: 'odata.include-annotations='*'' } */
            headers?: Array<DevKit.Core.KeyValueString>;
            /** Default false, there is support for sending multiple requests as a batch */
            asBatch?: boolean;
        }
        class CreateRequest {
            constructor();
            /** Entity name of record that should be created. */
            entityName?: string;
            /** Plural name of entity, if not according to plural rules. */
            overriddenSetName?: string;
            /** Object containing record data. */
            entity?: any;
            /** Set to false for sending all requests synchronously. True by default. */
            async?: boolean;
            /** Headers to attach to request. Default { key: 'Prefer', value: 'odata.include-annotations='*'' } */
            headers?: Array<DevKit.Core.KeyValueString>;
            /** Default false, there is support for sending multiple requests as a batch. */
            asBatch?: boolean;
        }
        class CustomRequest {
            /** WebApiClient CustomRequest */
            constructor();
            /** The HTTP method of the request, such as GET / POST / ... */
            method: string;
            /** The name of the request. */
            name: string;
            /** Determines if request is bound, i.e. always executed regarding a distinct record, or not. Defaults to false. */
            bound: boolean;
            /** Name of the request if it is bound to an entity. */
            entityName: string;
            /** Record ID if bound to an entity. */
            entityId: string;
            /** Message body for this request. */
            payload: any;
            /** Object with key-value pairs that will be appended to the URL of a GET request. Used for calling functions with parameters. */
            urlParams: string;
            /** Set to false for sending all requests synchronously. True by default. */
            async?: boolean;
            /** Headers to attach to request. Default { key: 'Prefer', value: 'odata.include-annotations='*'' } */
            headers?: Array<DevKit.Core.KeyValueString>;
            /** Default false, there is support for sending multiple requests as a batch. */
            asBatch?: boolean;
        }
        class DeleteRequest {
            /** WebApiClient DeleteRequest */
            constructor();
            /** Entity name of records that should be deleted. */
            entityName: string;
            /** Plural name of entity, if not according to plural rules. */
            overriddenSetName: string;
            /** ID of entity to delete. */
            entityId: string;
            /** Alternate key array for deleting record. */
            alternateKey: Array<AlternateKey>;
            /** Set to false for sending all requests synchronously. True by default. */
            async?: boolean;
            /** Headers to attach to request. Default { key: 'Prefer', value: 'odata.include-annotations='*'' } */
            headers?: Array<DevKit.Core.KeyValueString>;
            /** Default false, there is support for sending multiple requests as a batch. */
            asBatch?: boolean;
        }
        class DisassociateRequest {
            /** WebApiClient DisassociateRequest */
            constructor();
            /** Name of relation ship to use for disassociating. */
            relationShip: string;
            /** Source entity for disassociating. */
            source: DevKit.Core.EntityReference;
            /** Target entity for disassociating. */
            target: DevKit.Core.EntityReference;
            /** Set to false for sending all requests synchronously. True by default. */
            async?: boolean;
            /** Headers to attach to request. Default { key: 'Prefer', value: 'odata.include-annotations='*'' } */
            headers?: Array<DevKit.Core.KeyValueString>;
            /** Default false, there is support for sending multiple requests as a batch. */
            asBatch?: boolean;
        }
        class RetrieveRequest {
            /** WebApiClient RetrieveRequest */
            constructor();
            /** Entity name of records that should be retrieved. */
            entityName: string;
            /** Plural name of entity, if not according to plural rules. */
            overriddenSetName: string;
            /** ID of entity to retrieve, will return single record. */
            entityId: string;
            /** Alternate key array for retrieving single record. */
            alternateKey: Array<AlternateKey>;
            /** Query Parameters to append to URL, such as ?$select=*/
            queryParams: string;
            /** Fetch XML query. */
            fetchXml: string;
            /** Default false, checks for more pages when retrieving results. If set to true, all pages will be retrieved, if set to false, only the first page will be retrieved. */
            returnAllPages: boolean;
            /** Set to false for sending all requests synchronously. True by default. */
            async: boolean;
            /** Headers to attach to request. Default { key: 'Prefer', value: 'odata.include-annotations='*'' } */
            headers: Array<DevKit.Core.KeyValueString>;
            /** Default false, there is support for sending multiple requests as a batch. */
            asBatch: boolean;
        }
        class UpdateRequest {
            /** WebApiClient UpdateRequest */
            constructor();
            /** Entity name of records that should be updated. */
            entityName: string;
            /** Plural name of entity, if not according to plural rules. */
            overriddenSetName: string;
            /** Object containing record data. */
            entity: any;
            /** ID of entity to update. */
            entityId: string;
            /** Alternate key array for updating record. */
            alternateKey: Array<AlternateKey>;
            /** Set to false for sending all requests synchronously. True by default. */
            async: boolean;
            /** Headers to attach to request. Default { key: 'Prefer', value: 'odata.include-annotations='*'' } */
            headers: Array<DevKit.Core.KeyValueString>;
            /** Default false, there is support for sending multiple requests as a batch. */
            asBatch: boolean;
        }
    }
}
/** DynamicsCrm.DevKit for d.ts */
declare namespace DevKit {
    namespace Core {
        interface IEntityBaseAttribute {
            /** Type of an attribute. */
            AttributeType: number;
            /** Display name for the attribute. */
            DisplayName: string;
            /** Logical name of the entity that contains the attribute. */
            EntityLogicalName: string;
            /** Logical name for the attribute. */
            LogicalName: string;
        }
        interface Window {
            /** Height of the window to display the resultant page in pixels. */
            height?: number;
            /** Width of the window to display the resultant page in pixels. */
            width?: number;
        }
        interface Error {
            /** The error code.  */
            code: number;
            /** The error code. */
            errorCode: number;
            /** An error message describing the issue. */
            message: string;
        }
        interface EntityReference {
            /** Entity type of the record. */
            entityType: string;
            /** GUID of the record. */
            id: string;
            /** Name of the record. */
            name?: string;
        }
        interface EntityBooleanAttribute extends IEntityBaseAttribute {
            /** Default value for a Boolean option set. */
            DefaultFormValue: boolean;
            /** Options for the boolean attribute where each option is a key: value pair. */
            OptionSet: Array<KeyValueNumber>;
        }
        interface EntityEnumAttribute extends IEntityBaseAttribute {
            /** Options for the boolean attribute where each option is a key: value pair. */
            OptionSet: Array<KeyValueNumber>;
        }
        interface EntityPicklistAttribute extends IEntityBaseAttribute {
            /** Default value for a Number option set. */
            DefaultFormValue: number;
            /** Options for the boolean attribute where each option is a key: value pair. */
            OptionSet: Array<KeyValueNumber>;
        }
        interface EntityStateAttribute extends IEntityBaseAttribute {
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
        interface EntityStatusAttribute extends IEntityBaseAttribute {
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
            /** The type of operation for the privilege */
            PrivilegeType: OptionSet.PrivilegeType
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
            Attributes: Array<IEntityBaseAttribute | EntityBooleanAttribute | EntityEnumAttribute | EntityPicklistAttribute | EntityStateAttribute | EntityStatusAttribute>;
        }
        interface KeyValueString {
            key: string;
            value: string;
        }
        interface KeyValueObject {
            key: string,
            value: any
        }
        interface KeyValueNumber {
            key: string,
            value: number
        }
        interface TextValueNumber {
            text: string,
            value: number
        }
        interface DialogAlertOption {
            /** The confirm button label.If you do not specify the button label, OK is used as the button label. */
            confirmButtonLabel?: string;
            /** The message to be displyed in the alert dialog. */
            text: string;
        }
        interface DialogConfirmOption {
            /** The cancel button label.If you do not specify the cancel button label, Cancel is used as the button label. */
            cancelButtonLabel?: string;
            /** The confirm button label.If you do not specify the confirm button label, OK is used as the button label. */
            confirmButtonLabel?: string;
            /** The subtitle to be displayed in the confirmation dialog. */
            subtitle?: string;
            /** The message to be displayed in the confirmation dialog. */
            text: string;
            /** The title to be displayed in the confirmation dialog. */
            title?: string;
        }
        interface DialogError {
            /** Details about the error. When you specify this, the Download Log File button is available in the error message, and clicking it will let users download a text file with the content specified in this attribute. */
            details?: string;
            /** The error code. If you just set errorCode, the message for the error code is automatically retrieved from the server and displayed in the error dialog.If you specify an invalid errorCode value, an error dialog with a default error message is displayed. */
            errorCode?: number;
            /** The message to be displayed in the error dialog. */
            message?: string;
        }
        interface DialogResult {
            /** Indicates whether the confirm button was clicked to close the dialog. */
            confirmed: boolean;
        }
        interface FileData {
            /** Contents of the audio file. */
            fileContent: string;
            /** Name of the audio file. */
            fileName: string;
            /** Size of the audio file in KB. */
            fileSize: number;
            /** Audio file MIME type. */
            mimeType: string;
        }
        interface FileOption {
            openMode: OptionSet.FileOption
        }
        interface FilePickOption {
            /** Image file types to select. */
            accept: OptionSet.FileAccept;
            /** Indicates whether to allow selecting multiple files.  */
            allowMultipleFiles: boolean;
            /** Maximum size of the files(s) to be selected.  */
            maximumAllowedFileSize: number;
        }
        interface LookupOption {
            /** Indicates whether the lookup allows more than one item to be selected */
            allowMultiSelect?: boolean;
            /** The default entity type to use */
            defaultEntityType?: string;
            /** The default view to use */
            defaultViewId?: string;
            /** Decides whether to display the most recently used(MRU) item. Available only for Unified Interface */
            disableMru?: boolean;
            /** The entity types to display */
            entityTypes?: Array<string>;
            /** Used to filter the results */
            filters?: Array<LookupFilter>;
            /** Indicates whether the lookup control should show the barcode scanner in mobile clients */
            showBarcodeScanner?: boolean;
            /** The views to be available in the view picker. Only system views are supported */
            viewIds?: Array<string>;
        }
        interface LookupFilter {
            /** The FetchXML filter element to apply. */
            filterXml: string;
            /** The entity type to which to apply this filter. */
            entityLogicalName: string
        }
        interface DateFormattingInfoCalendar {
            MinSupportedDateTime: Date;
            MaxSupportedDateTime: Date;
            AlgorithmType: number;
            CalendarType: number;
            Eras: Array<number>;
            TwoDigitYearMax: number;
            IsReadOnly: boolean;
        }
        interface DateFormattingInfo {
            AMDesignator: string;
            AbbreviatedDayNames: Array<string>;
            AbbreviatedMonthGenitiveNames: Array<string>;
            AbbreviatedMonthNames: Array<string>;
            Calendar: DateFormattingInfoCalendar;
            CalendarWeekRule: number;
            DateSeparator: string;
            DayNames: Array<string>;
            FirstDayOfWeek: number;
            FullDateTimePattern: string;
            IsReadOnly: boolean;
            LongDatePattern: string;
            LongTimePattern: string;
            MonthDayPattern: string;
            MonthGenitiveNames: Array<string>;
            MonthNames: Array<string>;
            NativeCalendarName: string;
            PMDesignator: string;
            RFC1123Pattern: string;
            ShortDatePattern: string;
            ShortTimePattern: string;
            ShortestDayNames: Array<string>;
            SortableDateTimePattern: string;
            TimeSeparator: string;
            UniversalSortableDateTimePattern: string;
            YearMonthPattern: string;
            eras: Array<string>;
        }
        interface FormOption {
            /** Indicates whether to display the command bar. If you do not specify this parameter, the command bar is displayed by default. */
            cmdbar?: boolean;
            /** Designates a record that will provide default values based on mapped attribute values.  */
            createFromEntity?: EntityReference;
            /** ID of the entity record to display the form for. */
            entityId?: string;
            /** Logical name of the entity to display the form for. */
            entityName?: string;
            /** ID of the form instance to be displayed. */
            formId?: string;
            /** Height of the form window to be displayed in pixels. */
            height?: number;
            /** Controls whether the navigation bar is displayed and whether application navigation is available using the areas and subareas defined in the sitemap. */
            navbar?: OptionSet.FormNavBar;
            /** Indicates whether to display form in a new window. */
            openInNewWindow?: boolean;
            /** Specify one of the following values for the window position of the form on the screen. */
            windowPosition?: OptionSet.FormWindowPosition;
            /**  ID of the business process to be displayed on the form. */
            processId?: string;
            /** ID of the business process instance to be displayed on the form. */
            processInstanceId?: string;
            /** Define a relationship object to display the related records on the form. */
            relationship?: FormRelationship;
            /** ID of the selected stage in business process instance. */
            selectedStageId?: string;
            /** Indicates whether to open a quick create form. If you do not specify this, by default false is passed. */
            useQuickCreateForm?: boolean;
            /**  Width of the form window to be displayed in pixels. */
            width?: number;
        }
        interface FormRelationship {
            /** Name of the attribute used for relationship. */
            attributeName: string;
            /** Name of the relationship. */
            name: string;
            /** Name of the navigation property for this relationship. */
            navigationPropertyName: string;
            /** Relationship type. */
            relationshipType: OptionSet.FormRelationshipType;
            /** Role type in relationship.  */
            roleType: OptionSet.FormRelationshipRoleType;
        }
        interface ImageOption {
            /**  Indicates whether to edit the image before saving. */
            allowEdit: boolean;
            /** Height of the image to capture. */
            height: number;
            /** Indicates whether to capture image using the front camera of the device. */
            preferFrontCamera: boolean;
            /** Quality of the image file in percentage. */
            quality: number;
            /** Width of the image to capture. */
            width: number;
        }
        interface PositionData {
            /** Contains a set of geographic coordinates along with associated accuracy as well as a set of other optional attributes such as altitude and speed. */
            coords: any;
            /** Represents the time when the object was acquired and is represented as DOMTimeStamp. */
            timestamp: any;
        }
        interface AppProperty {
            appId: string;
            displayName: string;
            uniqueName: string;
            url: string;
            webResourceId: string;
            webResourceName: string;
            welcomePageId: string;
            welcomePageName: string;
        }
        interface SaveOption {
            /** Specify a value indicating how the save event was initiated */
            saveMode?: OptionSet.SaveMode;
            /** Indicate whether to use the Book or Reschedule messages rather than the Create or Update messages. This option is only applicable when used with appointment, recurring appointment, or service activity records */
            useSchedulingEngine: boolean;
        }
        interface FieldUserPrivilege {
            canRead: boolean;
            canUpdate: boolean;
            canCreate: boolean;
        }
        interface FieldNotification {
            /** A collection of objects */
            actions?: Array<FieldNotificationAction>;
            /** The message to display in the notification. In the current release, only the first message specified in this array will be displayed. The string that you specify here appears as bold text in the notification, and is typically used for title or subject of the notification. You should limit your message to 50 characters for optimal user experience */
            messages: Array<string>;
            /** Defines the type of notification */
            notificationLevel: OptionSet.FieldNotificationLevel;
            /** The ID to use to clear this notification when using the clearNotification method */
            uniqueId: string;
        }
        interface FieldNotificationAction {
            /** The body message of the notification to be displayed to the user. Limit your message to 100 characters for optimal user experience */
            message?: string;
            /** Array of functions. The corresponding actions for the message */
            actions?: Array<any>;
        }
        interface ProcessStage {
            /**
             * Returns the integer value of the business process flow category
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/stage/getcategory
             */
            Category: OptionSet.ProcessCategory;
            /**
             * Returns the logical name of the entity associated with the stage
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/stage/getentityname
             */
            EntityName: String;
            /**
             * Returns the unique identifier of the stage
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/stage/getid
             */
            Id: string;
            /**
             * Returns the name of the stage
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/stage/getname
             */
            Name: string;
            /**
             * Returns the status of the stage
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/stage/getstatus
             */
            Status: "active" | "inactive";
            /**
             * Returns the status of the stage
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/stage/getnavigationbehavior
             */
            AllowCreateNew(callback: () => boolean): void;
            /**
             * Returns a navigation behavior object for a stage that can be used to define whether the Create button is available for users to create other entity record in a cross-entity business process flow navigation scenario.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/stage/getsteps
             */
            Steps: DevKit.Core.Collections<ProcessStep>;
        }
        interface ProcessStep {
            /**
             * Returns the logical name of the attribute associated to the step
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/step/getattribute
             */
            Attribute: string;
            /**
             * Returns the name of the step
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/step/getname
             */
            Name: string;
            /**
             * Returns the progress of the action step. This method is supported only for the action steps; not for the data steps. Action steps are buttons on the business process stages that users can click to trigger an on-demand workflow or action. Action step is a preview feature introduced in the Dynamics 365 for Customer Engagement apps version 9.0 release
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/step/getprogress
             */
            Progress: OptionSet.ProcessProgress;
            /**
             * Returns a boolean value indicating whether the step is required in the business process flow
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/step/isrequired
             * */
            Required: boolean;
            /**
             * Updates the progress of the action step. This method is supported only for the action steps. Action steps are buttons on the business process stages that users can click to trigger an on-demand workflow or action. Action step is a preview feature introduced in the Dynamics 365 for Customer Engagement apps version 9.0 release
             * @param stepProgress Specify the step progress
             * @param message An optional message that is set as the Alt text on the icon for the step
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/step/setprogress
             */
            SetProgress(stepProgress: OptionSet.ProcessProgress, message?: string): void;
        }
        interface ProcessInstance extends ProcessEnabled {
            readonly CreatedOn: string;
            readonly CreatedOnDate: Date;
            readonly InstanceId: string;
            readonly InstanceName: string;
            readonly Status: OptionSet.ProcessStatus;
        }
        interface ProcessEnabled {
            readonly ProcessId: string;
            readonly ProcessName: string;
        }
        interface ProcessProcess {
            /**
             * Returns the unique identifier of the process
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/process/getid
             */
            Id: string;
            /**
             * Returns the name of the process
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/process/getname
             */
            Name: string;
            /**
             * Returns a boolean value indicating whether the process is rendered
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/process/isrendered
             */
            Rendered: boolean;
            /**
             * Returns a collection of stages in the process
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/process/getstages
             */
            Stages: DevKit.Core.Collections<ProcessStage>;
        }
        interface PageInputEntityList {
            /** Specify "entitylist" */
            pageType: "entitylist";
            /** The logical name of the entity to load in the list control. */
            entityName: string;
            /** The ID of the view to load. If you don't specify it, navigates to the default main view for the entity. */
            viewId?: string;
            /**  Type of view to load. Specify "savedquery" or "userquery". */
            viewType?: "savedquery" | "userquery";
        }
        interface PageInputHtmlWebResource {
            /** Specify "webresource" */
            pageType: "webresource";
            /** The name of the web resource to load. */
            webresourceName: string;
            /** The data to pass to the web resource. */
            data?: string;
        }
        interface PageInputEntityRecordRelationship {
            /** Name of the attribute used for relationship. */
            attributeName: string,
            /** Name of the relationship. */
            name: string,
            /** Name of the navigation property for this relationship. */
            navigationPropertyName: string,
            /** Relationship type. Specify one of the following values: 0:OneToMany | 1:ManyToMany */
            relationshipType: number,
            /** Role type in relationship. Specify one of the following values: 1:Referencing | 2:AssociationEntity */
            roleType: number
        }
        interface PageInputEntityRecord {
            /** Specify "entityrecord" */
            pageType: "entityrecord",
            /** Logical name of the entity to display the form for. */
            entityName: string,
            /** ID of the entity record to display the form for. If you don't specify this value, the form will be opened in create mode. */
            entityId?: string,
            /** Designates a record that will provide default values based on mapped attribute values. */
            createFromEntity?: DevKit.Core.EntityReference,
            /** A dictionary object that passes extra parameters to the form. */
            data?: any,
            /** ID of the form instance to be displayed. */
            formId: string,
            /** Indicates whether the form is navigated to from a different entity using cross-entity business process flow. */
            isCrossEntityNavigate?: boolean,
            /** Indicates whether there are any offline sync errors. */
            isOfflineSyncError?: boolean,
            /** ID of the business process to be displayed on the form. */
            processId?: string,
            /** ID of the business process instance to be displayed on the form. */
            processInstanceId?: string,
            /** Define a relationship object to display the related records on the form. */
            relationship?: DevKit.Core.PageInputEntityRecordRelationship,
            /** ID of the selected stage in business process instance. */
            selectedStageId?: string
        }
        interface NavigationOptions {
            /** Specify 1 to open the page inline; 2 to open the page in a dialog. Entity lists can only be opened inline; web resources can be opened either inline or in a dialog. */
            target: 1 | 2;
            /** The width of dialog. To specify the width in pixels, just type a numeric value. To specify the width in percentage, specify an object of type */
            width?: number | SizeValue;
            /** The height of dialog. To specify the width in pixels, just type a numeric value. To specify the height in percentage, specify an object of type */
            height?: number | SizeValue;
            /** Specify 1 to open the dialog in center; 2 to open the dialog on the side. Default is 1 (center). */
            position?: 1 | 2;
        }
        interface SizeValue {
            /** The numerical value */
            value: number;
            /** The unit of measurement. Specify "%" or "px". Default value is "px" */
            unit: "%" | "px";
        }
        interface GlobalNotification {
            action?: GlobalNotificationAction,
            /** Defines the level of notification. Valid values are: 1: Success | 2: Error | 3: Warning | 4: Information */
            level: 1 | 2 | 3 | 4,
            /** The message to display in the notification. */
            message: string,
            /** ndicates whether or not the user can close or dismiss the notification. If you don't specify this parameter, users can't close or dismiss the notification by default. */
            showCloseButton: boolean,
            /** Defines the type of notification. Currently, only a value of 2 is supported, which displays a message bar at the top of the app. */
            type: 2
        }
        interface GlobalNotificationAction {
            /** The label for the action in the message. */
            actionLabel?: string,
            /** Function reference. The function to execute when the action label is clicked. */
            eventHandler?: string
        }
        interface GridRelationship {
            /** Name of the attribute. */
            attributeName: string,
            /** Name of the relationship. */
            name: string,
            /** Name of the navigation property for this relationship. */
            navigationPropertyName: string,
            /** Returns one of the following values to indicate the relationship type. 0: OneToMany | 1: ManyToMany */
            relationshipType: 0 | 1,
            /** Returns one of the following values to indicate the role type of relationship. 1: Referencing | 2: AssociationEntity */
            roleType: 1 | 2
        }
        interface ViewSelector {
            /** Reference to the current view. */
            CurrentView: DevKit.Core.EntityReference;
            /** Returns a boolean value to indicate whether the view selector is visible */
            readonly Visible: boolean;
        }
        interface Collections<T> {
            forEach(successCallback: (item: T, index: number) => void): void;
            get(): Array<T>;
            get(item: string): T;
            get(index: number): T;
            get(successCallback: (item: T, index: number) => void): Array<T>;
            getLength(): number;
        }
    }
    namespace WebApi {
        interface OptionSetValue {
            /** The optionset number value. E.g.: 1000000001 */
            Value: number;
            /** The optionset formatted text. E.g. "Dynamics 365" */
            readonly FormattedValue: string;
        }
        interface OptionSetValueReadonly {
            /** The optionset number value. E.g.: 1000000001 */
            readonly Value: number;
            /** The optionset formatted text. E.g. "Dynamics 365" */
            readonly FormattedValue: string;
        }
        interface MultiOptionSetValue {
            /** The optionset number values. E.g.: [1000000001, 1000000003]*/
            Value: Array<number>;
            /** The optionset formatted texts. E.g.: ["Dynamics 2011", "Dynamics 365"] */
            readonly FormattedValue: Array<string>;
        }
        interface MultiOptionSetValueReadonly {
            /** The optionset number values. E.g.: [1000000001, 1000000003]*/
            readonly Value: Array<number>;
            /** The optionset formatted texts. E.g.: ["Dynamics 2011", "Dynamics 365"] */
            readonly FormattedValue: Array<string>;
        }
        interface BooleanValue {
            /** The boollean value. E.g.: true */
            Value: boolean;
            /** The boolean formatted text. E.g.: "Yes" */
            readonly FormattedValue: string;
        }
        interface BooleanValueReadonly {
            /** The boollean value. E.g.: true */
            readonly Value: boolean;
            /** The boolean formatted text. E.g.: "Yes" */
            readonly FormattedValue: string;
        }
        interface DateOnlyValue {
            /** The date only value. Always format yyyy-MM-dd. E.g.: "2019-04-30" */
            Value: string;
            /** The date only formatted text, base on user setting format. E.g.: "2019.04.30" */
            readonly FormattedValue: string;
        }
        interface DateOnlyValueReadonly {
            /** The date only value. Always format yyyy-MM-dd. E.g.: "2019-04-30" */
            readonly Value: string;
            /** The date only formatted text, base on user setting format. E.g.: "2019.04.30" */
            readonly FormattedValue: string;
        }
        interface UtcDateOnlyValue {
            /** The UTC date only value. E.g.: "2019-04-29T17:00:00Z" */
            Value: string;
            /** The UTC date formatted text, base on user setting format. E.g.: "30.04.2019" */
            readonly FormattedValue: string;
        }
        interface UtcDateOnlyValueReadonly {
            /** The UTC date only value. E.g.: "2019-04-29T17:00:00Z" */
            readonly Value: string;
            /** The UTC date formatted text, base on user setting format. E.g.: "30.04.2019" */
            readonly FormattedValue: string;
        }
        interface UtcDateAndTimeValue {
            /** The UTC date and time value. E.g.: "2019-04-27T07:30:00Z" */
            Value: string;
            /** The UTC date and time formatted text, base on user setting format. E.g.: "27.04.2019 02:30 CH" */
            readonly FormattedValue: string;
        }
        interface UtcDateAndTimeValueReadonly {
            /** The UTC date and time value. E.g.: "2019-04-27T07:30:00Z" */
            readonly Value: string;
            /** The UTC date and time formatted text, base on user setting format. E.g.: "27.04.2019 02:30 CH" */
            readonly FormattedValue: string;
        }
        interface TimezoneDateOnlyValue {
            /** The time-zone date only value. E.g.: "2019-04-26T00:00:00Z" */
            Value: string;
            /** The time-zone date formatted text, base on user setting format. E.g.: "26.04.2019" */
            readonly FormattedValue: string;
        }
        interface TimezoneDateOnlyValueReadonly {
            /** The time-zone date only value. E.g.: "2019-04-26T00:00:00Z" */
            readonly Value: string;
            /** The time-zone date formatted text, base on user setting format. E.g.: "26.04.2019" */
            readonly FormattedValue: string;
        }
        interface TimezoneDateAndTimeValue {
            /** The time-zone date and time value. E.g.: "2019-04-28T15:30:00Z" */
            Value: string;
            /** The time-zone date and time formatted text, base on user setting format. E.g.: "28.04.2019 03:30 CH" */
            readonly FormattedValue: string;
        }
        interface TimezoneDateAndTimeValueReadonly {
            /** The time-zone date and time value. E.g.: "2019-04-28T15:30:00Z" */
            readonly Value: string;
            /** The time-zone date and time formatted text, base on user setting format. E.g.: "28.04.2019 03:30 CH" */
            readonly FormattedValue: string;
        }
        interface IntegerValue {
            /** The integer value. E.g.: 1234567 */
            Value: number;
            /** The integer formatted text, base on user setting format. E.g.: "1.234.567" */
            readonly FormattedValue: string;
        }
        interface IntegerValueReadonly {
            /** The integer value. E.g.: 1234567 */
            readonly Value: number;
            /** The integer formatted text, base on user setting format. E.g.: "1.234.567" */
            readonly FormattedValue: string;
        }
        interface BigIntValue {
            /** The big integer value. E.g.: 1234567 */
            Value: number;
            /** The big integer formatted text, base on user setting format. E.g.: "1.234.567" */
            readonly FormattedValue: string;
        }
        interface BigIntValueReadonly {
            /** The integer value. E.g.: 1234567 */
            readonly Value: number;
            /** The integer formatted text, base on user setting format. E.g.: "1.234.567" */
            readonly FormattedValue: string;
        }
        interface DoubleValue {
            /** The double value. E.g.: 1234.57 */
            Value: number;
            /** The double formatted text, base on user setting format. E.g.: "1.234,57" */
            readonly FormattedValue: string;
        }
        interface DoubleValueReadonly {
            /** The double value. E.g.: 1234.57 */
            readonly Value: number;
            /** The double formatted text, base on user setting format. E.g.: "1.234,57" */
            readonly FormattedValue: string;
        }
        interface DecimalValue {
            /** The decimal value. E.g.: 1234567.89 */
            Value: number;
            /** The decimal formatted text, base on user setting format. E.g.: "1.234.567,89" */
            readonly FormattedValue: string;
        }
        interface DecimalValueReadonly {
            /** The decimal value. E.g.: 1234567.89 */
            readonly Value: number;
            /** The decimal formatted text, base on user setting format. E.g.: "1.234.567,89" */
            readonly FormattedValue: string;
        }
        interface MoneyValue {
            /** The currency value of field. E.g.: 123456.35 */
            Value: number;
            /** The currency formatted text, base on user setting format. E.g.: "123.456,35 $" */
            readonly FormattedValue: string;
        }
        interface MoneyValueReadonly {
            /** The currency value of field. E.g.: 123456.35 */
            readonly Value: number;
            /** The currency formatted text, base on user setting format. E.g.: "123.456,35 $" */
            readonly FormattedValue: string;
        }
        interface StringValue {
            /** The string value. E.g.: "A. Datum Corporation (sample)" */
            Value: string;
        }
        interface StringValueReadonly {
            /** The string value. E.g.: "A. Datum Corporation (sample)" */
            readonly Value: string;
        }
        interface LookupValue {
            /** The guid value. E.g.: f55a0d1e-286b-e911-a997-000d3a802135 */
            Value: string;
            /** The name formatted text. E.g.: "A. Datum Corporation (sample)" */
            readonly FormattedValue: string;
        }
        interface LookupValueReadonly {
            /** The guid value. E.g.: f55a0d1e-286b-e911-a997-000d3a802135 */
            readonly Value: string;
            /** The name formatted text. E.g.: "A. Datum Corporation (sample)" */
            readonly FormattedValue: string;
        }
        interface GuidValue {
            /** The guid value. E.g.: f55a0d1e-286b-e911-a997-000d3a802135 */
            Value: string;
        }
        interface GuidValueReadonly {
            /** The guid value. E.g.: f55a0d1e-286b-e911-a997-000d3a802135 */
            Value: string;
        }
        interface ManagedPropertyValue{
            Value: string;
        }
        interface ManagedPropertyValueReadonly{
            Value: string;
        }
        interface RetrieveMultipleResponse {
            /** An array of JSON objects, where each object represents the retrieved entity record containing attributes and their values as key: value pairs. The Id of the entity record is retrieved by default. */
            entities: Array<DevKit.Core.KeyValueObject>;
            /** If the number of records being retrieved is more than the value specified in the maxPageSize parameter in the request, this attribute returns the URL to return next set of records. */
            nextLink: string;
        }
        interface ExecuteRequest {
            /**
             * The name of the bound parameter for the action or function to execute. Specify undefined if you are executing a CRUD request. Specify null if the action or function to execute is not bound to any entity. Specify entity in case the action or function to execute is bound to an entity.
             */
            boundParameter?: "entity" | undefined | null;
            /** Name of the action, function, or one of the following values if you are executing a CRUD request. */
            operationName?: "Create" | "Retrieve" | "RetrieveMultiple" | "Update" | "Delete" | string;
            /** Indicates the type of operation you are executing */
            operationType?: OptionSet.OperationType;
            /** The metadata for parameter types. */
            parameterTypes: {
                /**  The metadata for enum types. The object has two string attributes: name and value */
                enumProperties?: Array<DevKit.Core.KeyValueObject>;
                /** The category of the parameter type.  */
                structuralProperty: OptionSet.StructuralProperty;
            }
        }
        interface ExecuteResponse {
            /** Response body. */
            body?: any;
            /** Response headers. */
            headers: any;
            /** Indicates whether the request was successful. */
            ok: boolean;
            /** Numeric value in the response status code.For example: 200 */
            status: number;
            /** Description of the response status code.For example: OK */
            statusText: string;
            /** Response type */
            type: "" | "arraybuffer" | "blob" | "document" | "json" | "text";
            /** Request URL of the action, function, or CRUD request that was sent to the Web API endpoint. */
            url: string;
        }
        interface ChangeSetRequest {

        }
    }
    namespace Form {
        namespace Controls {
            interface IControl {
                /**
                 * Returns the attribute that the control is bound to. Controls that aren’t bound to an attribute (subgrid, web resource, and IFRAME) don’t have this method. An error will be thrown if you attempt to use this method on one of these controls.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getattribute
                 * */
                readonly Attribute: any
                /**
                 * Returns a string value that represents the type of control
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getcontroltype
                 */
                readonly ControlType: OptionSet.FieldControlType;
                /**
                 * Returns a string value that represents the type of attribute
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getattributetype
                 */
                readonly AttributeType: OptionSet.FieldAttributeType;
                /**
                 * Sets a function to be called when the OnChange event occurs
                 * @param successCallback
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/addonchange
                 */
                AddOnChange(successCallback: (executionContext: any) => void): void;
                /**
                 * Causes the OnChange event to occur on the attribute so that any script associated to that event can execute
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/fireonchange
                 */
                FireOnChange(): void;
                /**
                 * Sets the focus on the control
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setfocus
                 */
                Focus(): void;
                /**
                 * Returns a string value that represents formatting options for the attribute
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getformat
                 */
                readonly Format: OptionSet.FieldFormat;
                /**
                 * Returns a Boolean value indicating if there are unsaved changes to the attribute value
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getisdirty
                 */
                readonly IsDirty: boolean;
                /**
                 * Returns a string representing the logical name of the attribute
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getname
                 */
                readonly AttributeName: string;
                /**
                 * Returns the name assigned to the control.
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getname
                 */
                readonly ControlName: string;
                /**
                 * Returns the formContext.data.entity object that is the parent to all attributes
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getparent
                 */
                readonly AttributeParent: any;
                /**
                 * Returns a string value indicating whether a value for the attribute is required or recommended
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getrequiredlevel
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/setrequiredlevel
                 */
                RequiredLevel: OptionSet.FieldRequiredLevel;
                /**
                 * Returns a string indicating when data from the attribute will be submitted when the record is saved
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getsubmitmode
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/setsubmitmode
                 */
                SubmitMode: OptionSet.FieldSubmitMode;
                /**
                 * Returns a boolean value to indicate whether the value of an attribute is valid
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/isvalid
                 */
                readonly IsValid: boolean;
                /**
                 * Removes a function from the OnChange event hander for an attribute
                 * @param callback Specifies the function to be removed from the OnChange event
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/removeonchange
                 */
                RemoveOnChange(callback: (executionContext: any) => void): void;
                /**
                 * Displays an error or recommendation notification for a control, and lets you specify actions to execute based on the notification. When you specify an error type of notification, a red "X" icon appears next to the control. When you specify a recommendation type of notification, an "i" icon appears next to the control. On Dynamics 365 for Customer Engagement apps mobile clients, tapping on the icon will display the message, and let you perform the configured action by clicking the Apply button or dismiss the message
                 * @param notification The notification to add
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addnotification
                 */
                AddNotification(notification: DevKit.Core.FieldNotification): void;
                /**
                 * Remove a message already displayed for a control
                 * @param uniqueId The ID to use to clear a specific message that was set using setNotification or addNotification. If the uniqueId parameter isn’t specified, the currently displayed notification will be cleared
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/clearnotification
                 */
                ClearNotification(uniqueId: string): boolean;
                /**
                 * Displays an error message for the control to indicate that data isn’t valid. When this method is used,  a red "X" icon appears next to the control. On Dynamics 365 for Customer Engagement apps mobile clients, tapping on the icon will display the message
                 * @param message The message to display
                 * @param uniqueId The ID to use to clear this message when using the clearNotification method
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setnotification
                 */
                SetNotification(message: string, uniqueId?: string): boolean;
                /**
                 * Returns whether the control is disabled
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getdisabled
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setdisabled
                 */
                Disabled: boolean;
                /**
                 * Returns the label for the control
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getlabel
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setlabel
                 */
                Label: string;
                /**
                 * Returns a reference to the section object that contains the control
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getparent
                 */
                readonly ControlParent: any;
                /**
                 * Returns a value that indicates whether the control is currently visible
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getvisible
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setvisible
                 */
                Visible: boolean;
                /**
                 * Returns an object with three Boolean properties corresponding to privileges indicating if the user can create, read or update data values for an attribute. This function is intended for use when Field Level Security modifies a user’s privileges for a particular attribute
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getuserprivilege
                 */
                readonly UserPrivilege: DevKit.Core.FieldUserPrivilege;
                /**
                 * Sets a value for an attribute to determine whether it is valid or invalid with a message.
                 * @param valid Specify false to set the attribute value to invalid and true to set the value to valid
                 * @param message The message to display
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/setisvalid
                 */
                SetIsValid(valid: boolean, message: string): void
            }
            interface IControlSelectBase extends IControl {
                /**
                 * Returns a value that represents the value set for a Boolean, OptionSet or MultiOptionSet attribute when the form is opened
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getinitialvalue
                 */
                readonly InitialValue: number;
            }
            interface IControlTab {
                /**
                 * Adds a function to be called when the TabStateChange event occurs
                 * @param callback The function to be executed on the TabStateChange event. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. See Execution context for more information
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/addtabstatechange
                 */
                AddTabStateChange(callback: (executionContext: any) => void): void;
                /**
                 * Get/Set display state of the tab
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/getdisplaystate
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/setdisplaystate
                 */
                DisplayState: OptionSet.TabDisplayState;
                /**
                 * Sets the focus on the tab
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/setfocus
                 * */
                Focus(): void;
                /**
                 * Get/Set the label for the tab
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/getlabel
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/setlabel
                 */
                Label: string;
                /**
                 * Get the name of the tab
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/getname
                 */
                readonly Name: string;
                /**
                 * Get the formContext.ui object containing the tab
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/getparent
                 */
                Parent: any;
                /**
                 * Get/Set a value that indicates whether the tab is currently visible
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/getvisible
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/setvisible
                 */
                Visible: boolean;
                /**
                 * Removes a function to be called when the TabStateChange event occurs
                 * @param callback The function to be removed from the TabStateChange event
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/removetabstatechange
                 */
                RemoveTabStateChange(callback: (executionContext: any) => void): void;
            }
            interface IControlProcess {
                /**
                 * Adds a function as an event handler for the OnPreProcessStatusChange event so that it will be called before the business process flow status changes.
                 * @param callback The function to be executed when the business process flow status changes. The function will be added to the start of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. See Execution context for more information.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/addonpreprocessstatuschange
                 */
                AddOnPreProcessStatusChange(callback: (executionContext: any) => void): void;
                /**
                 * Removes an event handler from the OnPreProcessStatusChange event.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/removeonpreprocessstatuschange
                 */
                RemoveOnPreProcessStatusChange(callback: () => void): void;
                /**
                 * Adds a function as an event handler for the OnProcessStatusChange event so that it will be called when the business process flow status changes.
                 * @param callback The function to be executed when the business process flow status changes. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. See Execution context for more information.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/addonprocessstatuschange
                 */
                AddOnProcessStatusChange(callback: (executionContext: any) => void): void;
                /**
                 * Removes an event handler from the OnProcessStatusChange event.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/removeonprocessstatuschange
                 */
                RemoveOnProcessStatusChange(callback: () => void): void;
                /**
                 * Adds a function as an event handler for the OnStageChange event so that it will be called when the business process flow stage changes.
                 * @param callback TThe function to be executed when the business process flow stage changes. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. See Execution context for more information.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/addonstagechange
                 */
                AddOnStageChange(callback: (executionContext: any) => void): void;
                /**
                 * Removes an event handler from the OnStageChange event.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/removeonstagechange
                 */
                RemoveOnStageChange(callback: () => void): void;
                /**
                 * Adds a function as an event handler for the OnStageSelected event so that it will be called when a business process flow stage is selected.
                 * @param callback The function to be executed when the business process flow stage is selected. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. See Execution context for more information.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/addonstageselected
                 */
                AddOnStageSelected(callback: (executionContext: any) => void): void;
                /**
                 * Removes an event handler from the OnStageSelected event.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/eventhandlers/removeonstageselected
                 */
                RemoveOnStageSelected(callback: () => void): void;
                /**
                 * Asynchronously retrieves the business process flows enabled for an entity that the current user can switch to.
                 * @param callback The callback function must accept a parameter that contains an object with dictionary properties where the name of the property is the Id of the business process flow and the value of the property is the name of the business process flow. The enabled processes are filtered according to the user’s privileges. The list of enabled processes is the same ones a user can see in the UI if they want to change the process manually.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/getenabledprocesses
                 */
                EnabledProcesses(callback: (processes: Array<DevKit.Core.ProcessEnabled>) => void): void;
                /**
                 * Returns all the process instances for the entity record that the calling user has access to.
                 * @param callback The callback function is passed an object with the following attributes and their corresponding values as the key:value pair. All returned values are of string type except for CreatedOnDate
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/getprocessinstances
                 */
                ProcessInstances(callback: (processes: Array<DevKit.Core.ProcessInstance>) => void): void;
                /**
                 * Returns a Process object representing the active process.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/activeprocess/getactiveprocess
                 */
                ActiveProcess: DevKit.Core.ProcessProcess;
                /**
                 * Gets the currently selected stage
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/getselectedstage
                 */
                SelectedStage: DevKit.Core.ProcessStage;
                /**
                 * Returns representing the active stage
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/activestage/getactivestage
                 */
                ActiveStage: DevKit.Core.ProcessStage;
                /**
                 * Sets a completed stage as the active stage
                 * @param stageId The ID of the completed stage for the entity to make the active stage
                 * @param callback A function to call when the operation is complete. This callback function is passed one of the following string values to indicate the status of the operation
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/activestage/setactivestage
                 */
                SetActiveStage(stageId: string, callback: (result: "success" | "invalid" | "unreachable" | "dirtyForm") => void): void;
                /**
                 * Returns the unique identifier of the process instance. Value represents the string representation of a GUID value.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/instance/getinstanceid
                 */
                readonly InstanceId: string;
                /**
                 * Returns the name of the process instance.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/instance/getinstancename
                 */
                readonly InstanceName: string;
                /**
                 * Gets a collection of stages currently in the active path with methods to interact with the stages displayed in the business process flow control. The active path represents stages currently rendered in the process control based on the branching rules and current data in the record
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/activepath/getactivepath
                 */
                ActivePath: DevKit.Core.Collections<DevKit.Core.ProcessStage>;
                /**
                 * Progresses to the next stage. You can also move to a next stage in a different entity
                 * @param callback A function to call when the operation is complete. This callback function is passed one of the following string values to indicate the status of the operation
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/navigation/movenext
                 */
                MoveNext(callback: (result: "success" | "crossEntity" | "end" | "invalid" | "dirtyForm") => void): void;
                /**
                 * Moves to the previous stage. You can also move to a previous stage in a different entity
                 * @param callback A function to call when the operation is complete. This callback function is passed one of the following string values to indicate the status of the operation
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/navigation/moveprevious
                 */
                MovePrevious(callback: (result: "success" | "crossEntity" | "beginning" | "invalid" | "dirtyForm") => void): void;
                /**
                 * Sets a process instance as the active instance
                 * @param processInstanceId The Id of the process instance to set as the active instance
                 * @param callback A function to call when the operation is complete
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/setactiveprocessinstance
                 */
                SetActiveProcessInstance(processInstanceId: string, callback: (result: "success" | "invalid") => void): void;
                /**
                 * Sets a Process as the active process. If there is an active instance of the process, the entity record is loaded with the process instance ID. If there is no active instance of the process, a new process instance is created and the entity record is loaded with the process instance ID. If there are multiple instances of the current process, the record is loaded with the first instance of the active process as per the defaulting logic, that is the most recently used process instance per user
                 * @param processId The Id of the process to set as the active process
                 * @param callback A function to call when the operation is complete. This callback function is passed one of the following string values to indicate whether the operation succeeded
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/activeprocess/setactiveprocess
                 */
                SetActiveProcess(processId: string, callback: (result: "success" | "invalid") => void): void;
                /**
                 * Retrieves the display state for the business process control
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-process/getdisplaystate
                 */
                DisplayState: OptionSet.ProcessDisplayState;
                /**
                 * Returns a value indicating whether the business process control is visible
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-process/getvisible
                 */
                Visible: boolean;
                /**
                 * Reflows the UI of the business process control
                 * @param updateUi Specify true to update the UI of the process control; false otherwise
                 * @param parentStage Specify the ID of the parent stage in the GUID format
                 * @param nextStage Specify the ID of the next stage in the GUID format
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-process/reflow
                 */
                Reflow(updateUi: boolean, parentStage: string, nextStage: string): void;
                /**
                 * Get/Set the current status of the process instance.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/instance/getstatus
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data-process/instance/setstatus
                 */
                Status: OptionSet.ProcessStatus;
            }
            interface IControlSelect extends IControlSelectBase {
                /**
                 * Returns an option object with the value matching the argument (label or enumeration value) passed to the method
                 * @param label The label of the option
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getoption
                 */
                Option(label: string): DevKit.Core.TextValueNumber;
                /**
                 * Returns an option object with the value matching the argument (label or enumeration value) passed to the method
                 * @param value The enumeration value of the option
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getoption
                 */
                Option(value: number): DevKit.Core.TextValueNumber;
                /**
                 * Returns an array of option objects representing valid options for an attribute
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getoptions
                 */
                readonly Options: Array<DevKit.Core.TextValueNumber>;
                /**
                 * Returns an array of option objects representing valid options available for a control, including a blank option and excluding any options that have been removed from the control using removeOption.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getoptions
                */
                readonly ControlOptions: Array<DevKit.Core.TextValueNumber>;
                /**
                 * Returns a string value of the text for the currently selected option for an optionset or multiselectoptionset attribute
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/gettext
                 */
                readonly Text: string;
                /**
                 * Adds an option to a control
                 * @param text The label for the option
                 * @param value The value for the option
                 * @param index The index position to place the new option in. If not provided, the option will be added to the end
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addoption
                 */
                AddOption(text: string, value: number, index?: number): void;
                /**
                 * Clears all options from a control
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/clearoptions
                 */
                ClearOptions(): void;
                /**
                 * Removes an option from a control
                 * @param value The value of the option you want to remove
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/removeoption
                 */
                RemoveOption(value: number): void;
            }
            interface IControlText extends IControl {
                /**
                 *
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getmaxlength
                 */
                readonly MaxLength: number;
                /**
                 * Retrieves the data value for an attribute
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getvalue
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/setvalue
                 */
                Value: string;
                ///**
                // * Gets the latest value in a control as the user types characters in a specific text or number field. This method helps you to build interactive experiences by validating data and alerting users as they type characters in a control. The getValue method is different from the attribute getValue method because the control method retrieves the value from the control as the user is typing in the control as opposed to the attribute getValue method that retrieves the value after the user commits (saves) the field
                // * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getvalue
                // */
                //Value2: string;
            }
            interface IControlNumber extends IControl {
                /**
                 * Returns a number indicating the maximum allowed value for an attribute
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getmax
                 */
                readonly Max: number;
                /**
                 * Returns a number indicating the minimum allowed value for an attribute
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getmin
                 */
                readonly Min: number;
                /**
                 * Returns the number of digits allowed to the right of the decimal point
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getprecision
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/setprecision
                 */
                Precision: number;
                /**
                 * Retrieves the data value for an attribute.
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getvalue
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/setvalue
                 */
                Value: number;
                /**
                 * Gets the latest value in a control as the user types characters in a specific text or number field. This method helps you to build interactive experiences by validating data and alerting users as they type characters in a control. The getValue method is different from the attribute getValue method because the control method retrieves the value from the control as the user is typing in the control as opposed to the attribute getValue method that retrieves the value after the user commits (saves) the field
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getvalue
                 */
                Value2: string;
            }
            interface ControlInteger extends IControlNumber {

            }
            interface ControlDecimal extends IControlNumber {

            }
            interface ControlDouble extends IControlNumber {

            }
            interface ControlMoney extends IControlNumber {

            }
            interface ControlString extends IControlText {

            }
            interface ControlMemo extends IControlText {

            }
            interface ControlDateTime extends IControl {
                /**
                 * Get whether a date control shows the time portion of the date
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getshowtime
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setshowtime
                 */
                ShowTime: boolean;
                                /**
                 * Retrieves the data value for an attribute
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getvalue
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/setvalue
                 */
                Value: string;
                /**
                 * Gets the latest value in a control as the user types characters in a specific text or number field. This method helps you to build interactive experiences by validating data and alerting users as they type characters in a control. The getValue method is different from the attribute getValue method because the control method retrieves the value from the control as the user is typing in the control as opposed to the attribute getValue method that retrieves the value after the user commits (saves) the field
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getvalue
                 */
                Value2: string;
            }
            interface ControlDate extends IControl {
                                /**
                 * Retrieves the data value for an attribute
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getvalue
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/setvalue
                 */
                Value: Date;
                /**
                 * Gets the latest value in a control as the user types characters in a specific text or number field. This method helps you to build interactive experiences by validating data and alerting users as they type characters in a control. The getValue method is different from the attribute getValue method because the control method retrieves the value from the control as the user is typing in the control as opposed to the attribute getValue method that retrieves the value after the user commits (saves) the field
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getvalue
                 */
                Value2: Date;
            }
            interface ControlLookup extends IControl {
                /**
                 * Returns a Boolean value indicating whether the lookup represents a partylist lookup. Partylist lookups allow for multiple records to be set, such as the To: field for an email entity record
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getispartylist
                 */
                readonly IsPartyList: boolean;
                /**
                 * Retrieves the data value for an attribute.
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getvalue
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/setvalue
                 */
                Value: Array<DevKit.Core.EntityReference>;
                /**
                 * Adds filters to the results displayed in the lookup. Each filter will be combined with any previously added filters as an “AND” condition. This method can only be used in a function in an event handler for the Lookup Control PreSearch Event
                 * @param filter The fetchXml filter element to apply
                 * @param entityLogicaName If this is set, the filter only applies to that entity type. Otherwise, it applies to all types of entities returned
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addcustomfilter
                 */
                AddCustomFilter(filter: string, entityLogicaName?: string): void;
                /**
                 * Adds a new view for the lookup dialog box. This method doesn’t work with Owner lookups. Owner lookups are used to assign user-owned records
                 * @param viewId The string representation of a GUID for a view
                 * @param entityName The name of the entity
                 * @param viewDisplayName The name of the view
                 * @param fetchXml The fetchXml query for the view
                 * @param layoutXml The XML that defines the layout of the view
                 * @param isDefault Indicates whether the view should be the default view
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addcustomview
                 */
                AddCustomView(viewId: string, entityName: string, viewDisplayName: string, fetchXml: string, layoutXml: string, isDefault: boolean): void;
                /**
                 * Applies changes to lookups based on values current just as the user is about to view results for the lookup
                 * @param callback The function that will be run just before the search to provide results for a lookup occurs. You can use this function to call one of the other lookup control functions and improve the results to be displayed in the lookup. The execution context is automatically passed as the first parameter to this function
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addpresearch
                 */
                AddPreSearch(callback: (executionContext: any) => void): void;
                /**
                 * Returns the ID value of the default lookup dialog view
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getdefaultview
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setdefaultview
                 */
                DefaultView: string;
                /**
                 * Gets the types of entities allowed in the lookup control
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getentitytypes
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setentitytypes
                 */
                EntityTypes: Array<string>;
                /**
                 * Removes event handler functions that have previously been set for the PreSearch event
                 * @param callback The function to remove. The execution context is automatically passed as the first parameter to this function
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/removepresearch
                 */
                RemovePreSearch(callback: (executionContext: any) => void): void;
                /**
                 * Adds an event handler to the OnLookupTagClick event.
                 * @param callback The function to add to the OnLookupTagClick event. The execution context is automatically passed as the first parameter to this function along with eventArgs that contain the tag value. More information: OnLookupTagClick event.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/addonlookuptagclick
                */
                AddOnLookupTagClick(callback: (executionContext: any) => void): void;
                /**
                 * Removes an event handler from the OnLookupTagClick event.
                 * @param callback The function to be removed from the OnLookupTagClick event.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/removeonlookuptagclick
                 */
                RemoveOnLookupTagClick(callback: (executionContext: any) => void): void;
            }
            interface ControlKnowledge extends IControl {
                /**
                 * Adds an event handler to the PostSearch event
                 * @param callback The function to add to the PostSearch event. The execution context is automatically passed as the first parameter to this function
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addonpostsearch
                 */
                AddOnPostSearch(callback: (executionContext: any) => void): void;
                /**
                 * Adds an event handler to the OnResultOpened event
                 * @param callback The function to add to the OnResultOpened event. The execution context is automatically passed as the first parameter to this function
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addonresultopened
                 */
                AddOnResultOpened(callback: (executionContext: any) => void): void;
                /**
                 * Adds an event handler to the OnSelection event
                 * @param callback The function to add to the OnSelection event. The execution context is automatically passed as the first parameter to this function
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addonselection
                 */
                AddOnSelection(callback: (executionContext: any) => void): void;
                /**
                 * Gets the text used as the search criteria for the knowledge base management control
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getsearchquery
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setsearchquery
                 */
                SearchQuery: string;
                /**
                 * Gets the count of results found in the search control
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/gettotalresultcount
                 */
                readonly TotalResultCount: number;
                /**
                 * Use this method to get the currently selected result of the search control. The currently selected result also represents the result that is currently open.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getselectedresults
                 */
                SelectedResults: any
                /**
                 * Opens a search result in the search control by specifying the result number
                 * @param resultNumber Numerical value specifying the result number to be opened. Result number starts from 1
                 * @param mode Specify "Inline" or "Popout". If you do not specify a value for the argument, the default ("Inline") option is used. The "Inline" mode opens the result inline either in the reading pane of the control or in a reference panel tab in case of reference panel. The "Popout" mode opens the result in a pop-out window
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/opensearchresult
                 */
                OpenSearchResult(resultNumber: number, mode: string): boolean;
                /**
                 * Removes an event handler from the PostSearch event
                 * @param callback The function to remove from the PostSearch event
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/removeonpostsearch
                 */
                RemoveOnPostSearch(callback: () => void): void;
                /**
                 * Removes an event handler from the OnResultOpened event
                 * @param callback The function to remove from the OnResultOpened event
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/removeonresultopened
                 */
                RemoveOnResultOpened(callback: () => void): void;
                /**
                 * Removes an event handler from the OnSelection even
                 * @param callback The function to remove from the OnSelection event
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/removeonselection
                 */
                RemoveOnSelection(callback: () => void): void;
            }
            interface ControlWebResource extends IControl {
                /**
                 * Returns the value of the data query string parameter passed to a Silverlight web resource
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getdata
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setdata
                 */
                Data: string;
                /**
                 * Returns the object in the form that represents an IFRAME or web resource
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getobject
                 */
                readonly Object: any;
                /**
                 * Returns the current URL being displayed in an IFRAME or web resource
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getsrc
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setsrc
                 */
                Src: string;
                /**
                * Returns the content window that represents an IFRAME or web resource.
                * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getcontentwindow
                */
                ContentWindow(successCallback?: (contentWindow: any) => void, errorCallback?: (error: DevKit.Core.Error) => void): void;
            }
            interface ControlIFrame extends IControl {
                /**
                 * Returns the default URL that an IFRAME control is configured to display
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getinitialurl
                 **/
                readonly InitialUrl: string;
                /**
                * Returns the object in the form that represents an IFRAME or web resource
                * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getobject
                */
                readonly Object: any;
                /**
                 * Returns the current URL being displayed in an IFRAME or web resource
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getsrc
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setsrc
                 */
                Src: string;
                /**
                * Returns the content window that represents an IFRAME or web resource.
                * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/getcontentwindow
                */
                ContentWindow(successCallback?: (contentWindow: any) => void, errorCallback?: (error: DevKit.Core.Error) => void): void;
            }
            interface ControlTimer extends IControl {
                /**
                 * Returns the state of the timer control
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getstate
                 */
                readonly State: number;
                /**
                 * Refreshes the data displayed in a timelinewall and timer control
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/refresh
                 */
                Refresh(): void;
            }
            interface ControlTimelineWall extends IControl {
                /**
                 * Refreshes the data displayed in a timelinewall and timer control
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/refresh
                 */
                Refresh(): void;
            }
            interface ControlNavigationItem {
                /**
                 * Returns the name of the item
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/getid
                 */
                Id: string;
                /**
                 * Sets the focus on the item
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/setfocus
                 */
                Focus(): void;
                /**
                 * Returns the label for the item
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/getlabel
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/setlabel
                 */
                Label: string;
                /**
                 * Returns a value that indicates whether the item is currently visible
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/getvisible
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/setvisible
                 */
                Visible: boolean;
            }
            interface ControlBoolean extends IControlSelectBase {
                /**
                 * Retrieves the data value for an attribute
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getvalue
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/setvalue
                 */
                Value: boolean;
            }
            interface ControlSection {
                /**
                 * Get the name of the section
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/getname
                 */
                readonly Name: string;
                /**
                 * Get/Set the label for the section
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/getlabel
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/setlabel
                 */
                Label: string;
                /**
                 * Get/Set a value that indicates whether the section is currently visible
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/getvisible
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/setvisible
                 */
                Visible: boolean;
                /**
                 * Get the tab containing the section
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/getparent
                 */
                Parent: any;
            }
            interface ControlOptionSet extends IControlSelect {
                /**
                 * Returns the option object or an array of option objects selected in an optionset or multiselectoptionset attribute respectively
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getselectedoption
                 */
                readonly SelectedOption: DevKit.Core.TextValueNumber;
                /**
                 * Retrieves the data value for an attribute
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getvalue
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/setvalue
                 */
                Value: number;            }
            interface ControlMultiOptionSet extends IControlSelect {
                /**
                 * Returns the option object or an array of option objects selected in an optionset or multiselectoptionset attribute respectively
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getselectedoption
                 */
                readonly SelectedOption: Array<DevKit.Core.TextValueNumber>
                /**
                 * Retrieves the data value for an attribute
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getvalue
                 * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/setvalue
                 */
                Value: Array<number>;
            }
            interface ControlGrid {
                /**
                 * Adds event handlers to the Subgrid OnLoad event event. [Read-only and editable grids]
                 * @param callback The function to be executed when the subgrid loads. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. See execution context for more information.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/addonload
                 */
                AddOnLoad(callback: (executionContext: any) => void): void;
                /**
                 * Gets the logical name of the entity data displayed in the grid. [Read-only and editable grids]
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/getentityname
                 * */
                readonly EntityName: string;
                /**
                 * Gets the FetchXML query that represents the current data, including filtered and sorted data, in the grid control. [Read-only and editable grids]
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/getfetchxml
                 */
                readonly FetchXml: string
                /**
                 * Gets the grid type (grid or subgrid). [Read-only and editable grids]
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/getgridtype
                 * */
                readonly GridType: OptionSet.GridType;
                /**
                 * Gets information about the relationship used to filter the subgrid. [Read-only and editable grids]
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/getrelationship
                 * */
                readonly Relationship: DevKit.Core.GridRelationship;
                /**
                 * Gets the URL of the current grid control. [Read-only and editable grids]
                 * @param client Indicates the client type. You can specify one of the following values: 0: Browser | 1: MobileApplication
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/geturl
                 */
                Url(client: 0 | 1): string;
                /**
                 * Provides methods to get or set information about the view selector of the subgrid control. If the subgrid control is not configured to display the view selector, calling the ViewSelector methods will throw an error. [Read-only grid]
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/viewselector
                 */
                ViewSelector: DevKit.Core.ViewSelector;
                /**
                 * Refreshes the grid. [Read-only and editable grids]
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/refresh
                 */
                Refresh(): void;
                /**
                 * Refreshes the ribbon rules for the grid control. [Read-only and editable grids]
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/refreshribbon
                 */
                RefreshRibbon(): void;
                /**
                 * Displays the associated grid for the grid. This method does nothing if the grid is not filtered based on a relationship. [Read-only and editable grids]
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/openrelatedgrid
                 */
                OpenRelatedGrid(): void;
                /**
                 * Removes event handlers from the Subgrid OnLoad event event. [Read-only grids]
                 * @param myFunction The function to be removed from the OnLoad event.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/gridcontrol/removeonload
                 */
                RemoveOnLoad(myFunction: () => void): void;
                /**
                 * Returns a collection of every GridRow in the Grid. [Read-only and editable grids]
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/grids/grid/getrows
                 */
                readonly Rows: DevKit.Form.Controls.GridRows;
                readonly SelectedRows: DevKit.Form.Controls.GridRows;
                readonly OnRecordSelect: DevKit.Form.Controls.GridRow;
            }
            interface GridRow {
                readonly EntityName: string;
                readonly EntityReference: DevKit.Core.EntityReference;
                readonly EntityId: string;
                readonly PrimaryAttributeValue: string;
                readonly Columns: DevKit.Form.Controls.GridColumns
            }
            interface GridRows {
                forEach(successCallback: (row: DevKit.Form.Controls.GridRow, index: number) => void): void;
                get(index: number): DevKit.Form.Controls.GridRow;
                getLength(): number;
            }
            interface GridColumns {
                forEach(successCallback: (column: DevKit.Form.Controls.GridColumn, index: number) => void): void;
                get(index: string): DevKit.Form.Controls.GridColumn;
                getLength(): number;
            }
            interface GridColumn {
                readonly Name: string;
                RequiredLevel: OptionSet.FieldRequiredLevel;
                Value: string;
                Disabled: boolean;
                SetNotification(message: string, uniqueId?: string): boolean;
                ClearNotification(uniqueId: string): boolean;
            }
            interface ControlNote {

            }
            interface ControlEmailEngagement {

            }
            interface ControlEmailRecipient {

            }
            interface ControlTimer {

            }
            interface ControlMap {

            }
            interface ControlActionCards {

            }
            interface ControlQuickView {
                /**
                 * Gets the controls on a form or control on form by passing an argument
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getcontrol
                 */
                Controls(arg?: string | number): Array<any> | any;
                /**
                 * Returns a string value that categorizes quick view controls.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getcontrolhttps://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getcontroltype
                 */
                readonly ControlType: OptionSet.FieldControlType;
                /**
                 * Gets a boolean value indicating whether the control is disabled. Or sets the state of the control to either enabled or disabled.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getdisabled
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/setdisabled
                 */
                Disabled: boolean;
                /**
                 * Returns the label for the quick view control. Or sets the label for the quick view control.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getlabel
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/setlabel
                 */
                Label: string;
                /**
                 * Returns the name assigned to the quick view control.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getname
                 */
                readonly ControlName: string;
                /**
                 * Returns a reference to the section object that contains the control.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getparent
                 */
                readonly ControlParent: any;
                /**
                 * Returns a value that indicates whether the quick view control is currently visible. Or displays or hides a control.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getvisible
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/setvisible
                 */
                Visible: boolean;
                /**
                 * Returns whether the data binding for the constituent controls in a quick view control is complete.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/isloaded
                 */
                IsLoaded(): boolean;
                /**
                 * Refreshes the data displayed in a quick view control.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/refresh
                 */
                Refresh(): void;
                /**
                 * Sets focus on the control.
                 * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/setfocus
                 */
                Focus(): void;
            }
            interface ControlAciWidget {

            }
            interface ControlPowerBi {

            }
        }
        abstract class IForm {
            /**
            * Adds a function to be called when the record is saved
            * @param successCallback The function to be executed when the record is saved. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function
            * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/addonsave
            */
            AddOnSave(successCallback: (executionContext: any) => void): void;
            /**
            * Adds a function to be called when form data is loaded.
            * @param successCallback The function to be executed when the form data loads. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. See Execution context for more information.
            * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data/addonload
            */
            DataAddOnLoad(successCallback: (executionContext: any) => void): void;
            /**
            * Adds a function to be called on the form OnLoad event.
            * @param successCallback The function to be executed on the form OnLoad event. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function. See Execution context for more information.
            * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui/addonload
            */
            UiAddOnLoad(successCallback: (executionContext: any) => void): void;
            /**
             *  The Attributes collections of form Account
             *  @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes
             * */
            readonly Attributes: DevKit.Form.Collections;
            /**
             * Removes form level notifications
             * @param uniqueId A unique identifier for the message to be cleared that was set using the SetFormNotification method
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/clearformnotification
             */
            ClearFormNotification(uniqueId: string): void;
            /**
             * Closes the form
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/close
             * */
            Close(): void;
            /**
             * A control represents an HTML element present on the form. Some controls are bound to a specific attribute, whereas others may represent unbound controls such as an IFRAME, Web resource, or a sub grid that has been added to the form
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls
             */
            readonly Controls: DevKit.Form.Collections;
            /**
             * Returns a string representing the XML that will be sent to the server when the record is saved. Only data in fields that have changed are set to the server
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getdataxml
             */
            readonly DataXml: string;
            /**
             * Returns a string representing the GUID value for the record
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getid
             */
            readonly EntityId: string;
            /**
             * Gets a boolean value indicating whether any fields in the form have been modified
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getisdirty
             */
            readonly EntityIsDirty: boolean;
            /**
             * Gets a boolean value indicating whether all of the entity data is valid
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/isvalid
             */
            readonly EntityIsValid: boolean;
            /**
             * Returns a string representing the logical name of the entity for the record
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getentityname
             */
            readonly EntityName: string;
            /**
             * Returns a lookup value that references the record
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getentityreference
             */
            readonly EntityReference: DevKit.Core.EntityReference;
            /**
             * Returns the ID of the form
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-formselector/getid
             */
            readonly FormId: string;
            /**
             * Returns the label of the form
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-formselector/getlabel
             */
            readonly FormLabel: string;
            /**
             * Opens the specified form. When you use the navigate method while unsaved changes exist, the user is prompted to save changes before the new form can be displayed. The Onload event occurs when the new form loads
             * @param formId The form Id that you want navigate
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-formselector/navigate
             */
            FormNavigate(formId: string): void;
            /**
             * Returns a value that indicates whether the form is currently visible.
             * @param formId The form Id that you want to check visible
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-formselector/getvisible
             */
            FormIsVisible(formId: string): boolean;
            /**
             * Sets a value that indicates whether the form is visible.
             * @param formId The form Id that you want to set visible
             * @param value Specify true to show the form; false to hide the form.
             */
            FormSetVisible(formId: string, value: boolean): void;
            /**
             * Gets the form type for the record
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/getformtype
             */
            readonly FormType: OptionSet.FormType;
            /**
             * Gets a boolean value indicating whether the form data has been modified
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/getisdirty
             */
            readonly DataIsDirty: boolean;
            /**
             * Gets a boolean value indicating whether all of the form data is valid. This includes the main entity and any unbound attributes
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/isvalid
             */
            readonly DataIsValid: boolean;
            /**
             * Gets a string for the value of the primary attribute of the entity
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getprimaryattributevalue
             */
            readonly PrimaryAttributeValue: string;
            /**
             * Asynchronously refreshes and optionally saves all the data of the form without reloading the page
             * @param save true if the data should be saved after it is refreshed, otherwise false
             * @param successCallback A function to call when the operation succeeds
             * @param errorCallback A function to call when the operation fails
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/refresh
             */
            Refresh(save?: boolean, successCallback?: (executionContext: any) => void, errorCallback?: (error: DevKit.Core.Error) => void): void;
            /**
             * Causes the ribbon to re-evaluate data that controls what is displayed in it
             * @param refreshAll Indicates whether all the ribbon command bars on the current page are refreshed. If you specify false, only the page-level ribbon command bar is refreshed. If you do not specify this parameter, by default false is passed
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/refreshribbon
             */
            RefreshRibbon(refreshAll?: boolean): void;
            /**
             * Removes a function to be called when the record is saved.
             * @param myFunction The function to be removed for the OnSave event
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/removeonsave
             */
            RemoveOnSave(myFunction: () => void): void;
            /**
             * Removes a function to be called when form data is loaded.
             * @param myFunction The function to be removed when the form data loads.
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-data/removeonload
             */
            DataRemoveOnLoad(myFunction: () => void): void;
            /**
             * Removes a function from the form OnLoad event.
             * @param myFunction The function to be removed from the form OnLoad event.
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui/removeonload
             */
            UiRemoveOnLoad(myFunction: () => void): void;
            /**
             * Saves the record asynchronously with the option to set callback functions to be executed after the save operation is completed. You can also set an object to control how appointment, recurring appointment, or service activity records are processed
             * @param saveOption An object for specifying options for saving the record
             * @param successCallback A function to call when the operation succeeds
             * @param errorCallback A function to call when the operation fails
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/save
             */
            Save(saveOption?: DevKit.Core.SaveOption, successCallback?: (executionContext: any) => void, errorCallback?: (error: DevKit.Core.Error) => void): void;
            /**
             * Displays form level notifications
             * @param message The text of the message
             * @param level The level of the message, which defines how the message will be displayed
             * @param uniqueId A unique identifier for the message that can be used later with ClearFormNotification to remove the notification
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/setformnotification
             */
            SetFormNotification(message: string, level: OptionSet.FormNotificationLevel, uniqueId: string): boolean;
            /**
             * Gets the height of the viewport in pixels. The viewport is the area of the page containing form data. It corresponds to the body of the form and does not include the navigation, header, footer or form assistant areas of the page
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/getviewportheight
             * */
            readonly ViewPortHeight: number;
            /**
             * Get the width of the viewport in pixels. The viewport is the area of the page containing form data. It corresponds to the body of the form and does not include the navigation, header, footer or form assistant areas of the page
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/getviewportwidth
             * */
            readonly ViewPortWidth: number;
        }
        interface Utility {
            /**
             * Returns information about the advanced configuration settings for the organization
             * @param setting Name of the configuration setting
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getadvancedconfigsetting
             */
            AdvancedConfigSetting(setting: OptionSet.AdvancedConfigSetting): number;
            /**
             * Returns the valid state transitions for the specified entity type and state code.
             * @param entityName The logical name of the entity.
             * @param statusCode The status code to find out the allowed status transition values.
             * @param successCallback The function to execute when the operation succeeds.
             * @param errorCallback The function to execute when the operation fails.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getallowedstatustransitions
             */
            AllowedStatusTransitions(entityName: string, statusCode: number, successCallback?: (statusCodes: Array<number>) => void, errorCallback?: (error: DevKit.Core.Error) => void): void;
            /**
             * Invokes the device camera to scan the barcode information, such as a product number. Note: This method is supported only for the mobile clients.
             * @param successCallback A function to call when the barcode value is returned as a String.
             * @param errorCallback A function to call when the operation fails. An error object with the message property (String) will be passed that describes the error details.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/getbarcodevalue
             */
            BarcodeValue(successCallback: (result: string) => void, errorCallback: (error: DevKit.Core.Error) => void): void;
            /**
             * Invokes the device microphone to record audio.
             * @param successCallback A function to call when audio is returned. A base64 encoded audio object attributes is passed to the function.
             * @param errorCallback A function to call when the operation fails.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/captureaudio
             */
            CaptureAudio(successCallback: (result: DevKit.Core.FileData) => void, errorCallback: (error: DevKit.Core.Error) => void): void;
            /**
             * Invokes the device camera to capture an image. Note: This method is supported only for the mobile clients.
             * @param imageOption The image option.
             * @param successCallback A function to call when image is returned. A base64 encoded image object attributes is passed to the function.
             * @param errorCallback A function to call when the operation fails.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/captureimage
             */
            CaptureImage(imageOption: DevKit.Core.ImageOption, successCallback: (result: DevKit.Core.FileData) => void, errorCallback: (error: DevKit.Core.Error) => void): void;
            /**
             * Invokes the device camera to record video. Note: This method is supported only for the mobile clients.
             * @param successCallback A function to call when Video is returned. A base64 encoded video object attributes is passed to the function.
             * @param errorCallback A function to call when the operation fails.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/capturevideo
             */
            CaptureVideo(successCallback: (result: DevKit.Core.FileData) => void, errorCallback: (error: DevKit.Core.Error) => void): void;
            /**
             *  Provides access to the methods to determine which client is being used, whether the client is connected to the server, and what kind of device is being used.
             *  @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/client
             */
            Client: DevKit.Form.Client;
            /**
             * Returns the base URL that was used to access the application
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getclienturl
             */
            ClientUrl: string;
            /**
             * Closes a progress dialog box. If no progress dialog is displayed currently, this method will do nothing. You can display a progress dialog using the ShowProgressIndicator method.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/closeprogressindicator
             */
            CloseProgressIndicator(): void;
            /**
             * Returns the name of the current business app in Customer Engagement
             * @param successCallback A function to call when the business app name is returned
             * @param errorCallback A function to call when the operation fails
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappname
             */
            CurrentAppName(successCallback: (result: string) => void, errorCallback: (error: DevKit.Core.Error) => void): void;
            /**
             * Returns the relative URL with the caching token for the specified web resource.
             * @param webResourceName Name of the web resource.
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/getwebresourceurl
             */
            WebResourceUrl(webResourceName: string): string;
            /**
             * Returns the properties of the current business app in Customer Engagement
             * @param successCallback A function to call when the business app property information is returned
             * @param errorCallback A function to call when the operation fails
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappproperties
             */
            CurrentAppProperties(successCallback: (result: DevKit.Core.AppProperty) => void, errorCallback: (error: DevKit.Core.Error) => void): void;
            /**
             * Returns the URL of the current business app in Customer Engagement
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappurl
             */
            CurrentAppUrl: string;
            /**
             * Returns the current location using the device geolocation capability. Note: For the CurrentPosition method to work, the geolocation capability must be enabled on your mobile device, and the Dynamics 365 for Customer Engagement mobile clients must have permissions to access the device location, which isn't enabled by default. This method is supported only for the mobile clients.
             * @param successCallback A function to call when the current geolocation information is returned. A geolocation object attributes is passed to the function
             * @param errorCallback A function to call when the operation fails.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/getcurrentposition
             */
            CurrentPosition(successCallback: (result: DevKit.Core.PositionData) => void, errorCallback: (error: DevKit.Core.Error) => void): void;
            /**
             * Returns the entity metadata for the specified entity.
             * @param entityName The logical name of the entity.
             * @param attributes The attributes to get metadata for.
             * @param successCallback A function to call when the entity metadata is returned.
             * @param errorCallback A function to call when the operation fails.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getentitymetadata
             */
            EntityMetadata(entityName: string, attributes?: Array<string>, successCallback?: (result: DevKit.Core.EntityMetadata) => void, errorCallback?: (error: DevKit.Core.Error) => void): void;
            /**
             * Encodes the specified string so that it can be used in an HTML attribute.
             * @param arg String to be encoded.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-encoding/xmlencode
             */
            HtmlAttributeEncode(arg: string): string;
            /**
             * Converts a string that has been HTML-encoded into a decoded string.
             * @param arg HTML-encoded string to be decoded.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-encoding/htmldecode
             */
            HtmlDecode(arg: string): string;
            /**
             * Converts a string to an HTML-encoded string.
             * @param arg String to be encoded.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-encoding/htmlattributeencode
             */
            HtmlEncode(arg: string): string;
            /**
             * Invokes an action based on the specified parameters.
             * @param name Name of the process action to invoke.
             * @param parameter An object containing input parameters for the action. You define an object using key:value pairs of items, where key is of String type.
             * @param successCallback A function to call when the action is invoked.
             * @param errorCallback A function to call when the operation fails.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/invokeprocessaction
             */
            InvokeProcessAction(name: string, parameter: any, successCallback: (result: any) => void, errorCallback: (error: DevKit.Core.Error) => void): void;
            /**
             * Returns a boolean value indicating if the Customer Engagement instance is hosted on-premises or online
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/isonpremises
             */
            IsOnPremises: boolean;
            /**
             * Returns the name of the DOM attribute expected by the Learning Path (guided help) Content Designer for identifying UI controls in the Dynamics 365 for Customer Engagement apps form. An attribute by this name must be added to the UI element that needs to be exposed to Learning Path (guided help)
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getlearningpathattributename
             */
            LearningPathAttributeName: string;
            /**
             * The method returns an object with the input property. The input property is an object with the following attributes depending on whether you are currently on the entity form or entity list
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getpagecontext
             * */
            PageContext: any;
            /**
             * Displays the web page represented by a URL in the static area in the side pane, which appears on all pages in the Dynamics 365 for Customer Engagement apps web client.
             * @param url URL of the page to be loaded in the side pane static area.
             * @param title Title of the side pane static area.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-panel/loadpanel
             */
            LoadPanel(url: string, title: string): void;
            /**
             * Defines the options for opening the lookup dialog
             * @param lookupOption
             * @param successCallback A function to call when the lookup control is invoked. An array of objects properties is passed
             * @param cancelCallback A function to call when you cancel the lookup control or the operation fails
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/lookupobjects
             */
            LookupObjects(lookupOption: DevKit.Core.LookupOption, successCallback: (results: Array<DevKit.Core.EntityReference>) => void, errorCallback: (error: DevKit.Core.Error) => void): void;
            /**
             * Displays an alert dialog containing a message and a button.
             * @param alertOption The strings to be used in the alert dialog.
             * @param window The height and width options for alert dialog.
             * @param successCallback A function to execute when the alert dialog is closed by either clicking the confirm button or canceled by pressing ESC.
             * @param errorCallback A function to execute when the operation fails.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openalertdialog
             */
            OpenAlertDialog(alertOption: DevKit.Core.DialogAlertOption, window?: DevKit.Core.Window, successCallback?: (result: string) => void, errorCallback?: (error: DevKit.Core.Error) => void): void;
            /**
             * Displays a confirmation dialog box containing a message and two buttons.
             * @param confirmOption The strings to be used in the confirmation dialog.
             * @param window The height and width options for confirmation dialog.
             * @param successCallback A function to execute when the confirmation dialog is closed by clicking the confirm, cancel, or X in the top-right corner of the dialog. An object with the confirmed (Boolean) attribute is passed that indicates whether the confirm button was clicked to close the dialog.
             * @param errorCallback A function to execute when the operation fails.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openconfirmdialog
             */
            OpenConfirmDialog(confirmOption: DevKit.Core.DialogConfirmOption, window?: DevKit.Core.Window, successCallback?: (result: DevKit.Core.DialogResult) => void, errorCallback?: (error: DevKit.Core.Error) => void): void;
            /**
             * Displays an error dialog.
             * @param errorOptions An object to specify the options for error dialog.
             * @param successCallback A function to execute when the error dialog is closed.
             * @param errorCallback A function to execute when the operation fails.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openerrordialog
             */
            OpenErrorDialog(errorOptions: DevKit.Core.DialogError, successCallback: (result: string) => void, errorCallback: (error: DevKit.Core.Error) => void): void;
            /**
             * Opens a file.
             * @param file An object describing the file to open.
             * @param fileOption An object describing whether to open or save the file.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openfile
             */
            OpenFile(file: DevKit.Core.FileData, fileOption?: DevKit.Core.FileOption): void;
            /**
             * Opens an entity form or a quick create form.
             * @param formOption The open form option for opening the form.
             * @param formParameters A dictionary object that passes extra parameters to the form. Invalid parameters will cause an error.
             * @param successCallback A function to execute when the record is saved in the quick create form. This function is passed an object as a parameter.
             * @param errorCallback A function to execute when the operation fails.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openform
             */
            OpenForm(formOption: DevKit.Core.FormOption, formParameters?: any, successCallback?: (result: DevKit.Core.EntityReference) => void, errorCallback?: (error: DevKit.Core.Error) => void): void;
            /**
             * Opens a URL, including file URLs.
             * @param url URL to open.
             * @param window Options to open the URL.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openurl
             */
            OpenUrl(url: string, window?: DevKit.Core.Window): void;
            /**
             * Opens an HTML web resource.
             * @param webResourceName Name of the HTML web resource to open.
             * @param window Window options for opening the web resource.
             * @param data Data to be passed into the data parameter.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openwebresource
             */
            OpenWebResource(webResourceName: string, window?: DevKit.Core.Window, data?: string): void;
            /**
             *  Returns information about the current organization settings
             *  @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings
             */
            OrganizationSettings: DevKit.Form.OrganizationSettings;
            /**
             * Navigates to the specified page.
             * @param pageInput Input about the page to navigate to. The object definition changes depending on the type of page to navigate to: entity list or HTML web resource.
             * @param navigationOptions Options for navigating to a page: whether to open inline or in a dialog. If you don't specify this parameter, page is opened inline by default.
             * @param successCallback A function to execute on successful navigation to the page when navigating inline and on closing the dialog when navigating to a dialog.
             * @param errorCallback A function to execute when the operation fails.
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto
             */
            NavigateTo(pageInput: DevKit.Core.PageInputEntityList | DevKit.Core.PageInputHtmlWebResource | DevKit.Core.PageInputEntityRecord, navigationOptions?: DevKit.Core.NavigationOptions, successCallback?: (result: any) => void, errorCallback?: (error: DevKit.Core.Error) => void): void;
            /**
             * Opens a dialog box to select files from your computer (web client) or mobile device (mobile clients).
             * @param filePickOption An object pick file option
             * @param successCallback A function to call when selected files are returned. An array of objects with each object having the following attributes is passed to the function.
             * @param errorCallback A function to call when the operation fails.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/pickfile
             */
            PickFile(filePickOption: DevKit.Core.FilePickOption, successCallback: (result: Array<DevKit.Core.FileData>) => void, errorCallback: (error: DevKit.Core.Error) => void): void;
            /**
             * Prefixes the current organization's unique name to a string, typically a URL path
             * @param sPath A local path to a resource
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/prependorgname
             */
            PrependOrgName(sPath: string): string;
            /**
             * Refreshes the parent grid containing the specified record
             * @param lookupOption An object with the following properties to specify the record
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/refreshparentgrid
             */
            RefreshParentGrid(lookupOption: DevKit.Core.EntityReference): void;
            /**
             * Returns the localized string for a given key associated with the default web resource
             * @param key The key for the localized string
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getresourcestring
             */
            Resource(key: string): string;
            /**
             * Returns the localized string for a given key associated with the specified web resource
             * @param webResourceName The name of the web resource. E.g.: "devkit_/resources/Resource"
             * @param key The key for the localized string
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getresourcestring
             */
            ResourceString(webResourceName: string, key: string): string;
            /**
             * Displays a progress dialog with the specified message. Any subsequent call to this method will update the displayed message in the existing progress dialog with the message specified in the latest method call. The progress dialog blocks the UI until it is closed using the CloseProgressIndicator method. So, you must use this method with caution
             * @param message The message to be displayed in the progress dialog
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/showprogressindicator
             */
            ShowProgressIndicator(message: string): void;
            /**
             * Returns information about the current user settings
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/usersettings
             */
            UserSettings: DevKit.Form.UserSettings
            /**
             * Returns the version number of the Dynamics 365 for Customer Engagement apps instance. E.g.: "9.0.0.1103"
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getversion
             */
            Version: string;
            /**
             * Encodes the specified string so that it can be used in an XML attribute.
             * @param arg String to be encoded.
             */
            XmlAttributeEncode(arg: string): string;
            /**
             * Converts a string to an XML-encoded string.
             * @param arg String to be encoded.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-encoding/xmlattributeencode
             */
            XmlEncode(arg: string): string;
            /**
             * Encodes the specified string so that it can be used in an HTML attribute.
             * @param arg String to be encoded.
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-encoding/htmlattributeencode
             */
            HtmlAttributeEncode(arg: string): string;
            /**
             * Converts a string that has been HTML-encoded into a decoded string.
             * @param arg HTML-encoded string to be decoded.
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-encoding/htmldecode
             */
            HtmlDecode(arg: string): string;
            /**
             * Converts a string to an HTML-encoded string.
             * @param arg String to be encoded.
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-encoding/htmlencode
             */
            HtmlEncode(arg: string): string;
            /**
             * Displays an error, information, warning, or success notification for an app, and lets you specify actions to execute based on the notification.
             * @param notification The notification to add.
             * @param successCallback A function to call when notification is displayed. A GUID value is passed to uniquely identify the notification. You can use the GUID value to close or dismiss the notification using the clearGlobalNotification method.
             * @param errorCallback A function to call when the operation fails.
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-app/addglobalnotification
             */
            AddGlobalNotification(notification: DevKit.Core.GlobalNotification, successCallback?: (result: string) => void, errorCallback?: (error: DevKit.Core.Error) => void): void;
            /**
             * Clears a notification in the app.
             * @param uniqueId The ID to use to clear a specific notification that was set using addGlobalNotification.
             * @param successCallback A function to call when the notification is cleared.
             * @param errorCallback A function to call when the operation fails.
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-app/clearglobalnotification
             */
            ClearGlobalNotification(uniqueId: string, successCallback?: (result: string) => void, errorCallback?: (error: DevKit.Core.Error) => void): void;
        }
        interface WebApi {
            /**
             * Creates an entity record.
             * @param entityLogicalName Logical name of the entity you want to create. For example: "account".
             * @param data A JSON object defining the attributes and values for the new entity record.
             * @param successCallback A function to call when a record is created. An object will be passed to identify the new record.
             * @param errorCallback
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/createrecord
             */
            CreateRecord(entityLogicalName: string, data: any, successCallback: (result: DevKit.Core.EntityReference) => void, errorCallback: (error: DevKit.Core.Error) => void): void;
            /**
             *
             * @param entityLogicalName The entity logical name of the record you want to delete. For example: "account".
             * @param id GUID of the entity record you want to delete.
             * @param successCallback A function to call when a record is deleted. An object will be passed to identify the deleted record.
             * @param errorCallback A function to call when the operation fails.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/deleterecord
             */
            DeleteRecord(entityLogicalName: string, id: string, successCallback: (result: DevKit.Core.EntityReference) => void, errorCallback: (error: DevKit.Core.Error) => void): void;
            /**
             *
             * @param entityLogicalName The entity logical name of the record you want to retrieve. For example: "account".
             * @param id GUID of the entity record you want to retrieve.
             * @param options OData system query options, $select and $expand, to retrieve your data.
             * @param successCallback A function to call when a record is retrieved. A JSON object with the retrieved properties and values will be passed to the function.
             * @param errorCallback A function to call when the operation fails.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/retrieverecord
             */
            RetrieveRecord(entityLogicalName: string, id: string, options: string, successCallback: (result: any) => void, errorCallback: (error: DevKit.Core.Error) => void): void;
            /**
             * Retrieves a collection of entity records.
             * @param entityLogicalName The entity logical name of the records you want to retrieve. For example: "account".
             * @param options OData system query options or FetchXML query to retrieve your data.
             * @param maxPageSize Specify a positive number that indicates the number of entity records to be returned per page. If you do not specify this parameter, the default value is passed as 5000.
             * @param successCallback A function to call when entity records are retrieved. An object is passed to the function
             * @param errorCallback A function to call when the operation fails.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/retrievemultiplerecords
             */
            RetrieveMultipleRecords(entityLogicalName: string, options: string, maxPageSize: number, successCallback: (result: DevKit.WebApi.RetrieveMultipleResponse) => void, errorCallback: (error: DevKit.Core.Error) => void): void;
            /**
             * Updates an entity record.
             * @param entityLogicalName The entity logical name of the record you want to update. For example: "account".
             * @param id GUID of the entity record you want to update.
             * @param data A JSON object containing key: value pairs, where key is the property of the entity and value is the value of the property you want to update.
             * @param successCallback A function to call when a record is updated. An object will be passed to identify the updated record.
             * @param errorCallback
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/updaterecord
             */
            UpdateRecord(entityLogicalName: string, id: string, data: any, successCallback: (result: DevKit.Core.EntityReference) => void, errorCallback: (error: DevKit.Core.Error) => void): void;
            /**
             * Returns a boolean value indicating whether an entity is present in user’s profile and is currently available for use in offline mode.
             * @param entityLogicalName Logical name of the entity. For example: "account".
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/isavailableoffline
             */
            IsAvailableOffline(entityLogicalName: string): boolean;
            /**
             * Execute a single action, function, or CRUD operation.
             * @param request Object that will be passed to the Web API endpoint to execute an action, function, or CRUD request.
             * @param successCallback A function to call when operation is executed successfully. A response object is passed to the function.
             * @param errorCallback A function to call when the operation fails.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/online/execute
             */
            Execute(request: DevKit.WebApi.ExecuteRequest, successCallback: (result: DevKit.WebApi.ExecuteResponse) => void, errorCallback: (error: DevKit.Core.Error) => void): void;
            /**
             * Execute a collection of action, function, or CRUD operations.
             * @param requests An array of one of object types.
             * @param successCallback A function to call when operation is executed suucessfully. An array of response objects are passed to the function.
             * @param errorCallback A function to call when the operation fails.
             * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/online/executemultiple
             */
            ExecuteMultiple(requests: Array<DevKit.WebApi.ExecuteRequest | DevKit.WebApi.ChangeSetRequest>, successCallback: (result: Array<DevKit.WebApi.ExecuteResponse>) => void, errorCallback: (error: DevKit.Core.Error) => void): void;
        }
        interface Client {
            /**
            *  Returns a value to indicate which client the script is executing in.
            *  @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/client#getclient
            */
            ClientName: OptionSet.ClientName;
            /**
            *  Returns a value to indicate the state of the client.
            *  @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/client#getclientstate
            */
            ClientState: OptionSet.ClientState;
            /**
            *  Returns information about the kind of device the user is using.
            *  @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/client#getformfactor
            */
            FormFactor: OptionSet.FormFactor;
            /**
            *  Returns information whether the server is online or offline
            *  @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/client#isoffline
            */
            IsOffline: boolean;
        }
        interface OrganizationSettings {
            /**
            * Returns attributes and their values as key:value pairs that are available for the organization entity. Additional values will be available as attributes if they are specified as attribute dependencies in the web resource dependency list. The key will be the attribute logical name
            * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#attributes
            */
            Attributes: Array<DevKit.Core.KeyValueObject>;
            /**
            * Returns the ID of the base currency for the current organization
            * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#basecurrencyid
            */
            BaseCurrencyId: string;
            /**
            * Returns the default country/region code for phone numbers for the current organization
            * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#defaultcountrycode
            */
            DefaultCountryCode: string;
            /**
            * Indicates whether the auto-save option is enabled for the current organization
            * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#isautosaveenabled
            */
            IsAutoSaveEnabled: boolean;
            /**
            * Returns the preferred language ID for the current organization
            * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#languageid
            */
            LanguageId: number;
            /**
            * Returns the ID of the current organization
            * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#organizationid
            */
            OrganizationId: string;
            /**
            * Returns the unique name of the current organization
            * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#uniquename
            */
            UniqueName: string;
            /**
            * Indicates whether the Skype protocol is used for the current organization
            * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings#useskypeprotocol
            */
            UseSkypeProtocol: boolean;
        }
        interface UserSettings {
            /**
            * Returns the date formatting information for the current user
            * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/usersettings#dateformattinginfo
            */
            DateFormattingInfo: DevKit.Core.DateFormattingInfo;
            /**
            * Returns the ID of the default dashboard for the current user
            * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/usersettings#defaultdashboardid
            */
            DefaultDashboardId: string;
            /**
            * Indicates whether guided help is enabled for the current user
            * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/usersettings#isguidedhelpenabled
            */
            IsGuidedHelpEnabled: boolean;
            /**
            * Indicates whether high contrast is enabled for the current user
            * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/usersettings#ishighcontrastenabled
            */
            IsHighContrastEnabled: boolean;
            /**
            * Indicates whether the language for the current user is a right-to-left (RTL) language
            * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/usersettings#isrtl
            */
            IsRTL: boolean;
            /**
            * Returns the language ID for the current user
            * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/usersettings#languageid
            */
            LanguageId: number;
            /**
             * Returns a collection of lookup objects containing the GUID and display name of each of the security role or teams that the user is associated with.
             * @link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings#roles
            */
            Roles: DevKit.Form.Collections;
            /**
            * Returns an array of strings that represent the GUID values of each of the security role privilege that the user is associated with or any teams that the user is associated with
            * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/usersettings#securityroleprivileges
            */
            SecurityRolePrivileges: Array<string>;
            /**
            * Returns a lookup object containing the ID, display name, and entity type of the transaction currency for the current user.
            * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/usersettings#transactioncurrency
            */
            TransactionCurrency: DevKit.Core.EntityReference;
            /**
            * Returns the GUID of the SystemUser.Id value for the current user
            * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/usersettings#userid
            */
            UserId: string;
            /**
            * Returns the name of the current user
            * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/usersettings#username
            */
            UserName: string;
            /**
            * Returns the difference in minutes between the local time and Coordinated Universal Time (UTC)
            * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/usersettings#gettimezoneoffsetminutes-method
            */
            TimeZoneOffsetMinutes: number;
        }
    }
}
/** DynamicsCrm.DevKit for namespace OptionSet */
declare namespace OptionSet {
    /**  */
    enum StructuralProperty {
        /** 0 */
        Unknown,
        /** 1 */
        PrimitiveType,
        /** 2 */
        ComplexType,
        /** 3 */
        EnumerationType,
        /** 4 */
        Collection,
        /** 5 */
        EntityType
    }
    /**  */
    enum OperationType {
        /** 0 */
        Action,
        /** 1 */
        Function,
        /** 2 */
        CRUD
    }
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
    /** */
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
    /** The progress of the action step */
    enum ProcessProgress {
        /** 0 */
        None,
        /** 1 */
        Processing,
        /** 2 */
        Completed,
        /** 3 */
        Failure,
        /** 4 */
        Invalid
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
    enum FileOption {
        /** 1 */
        Open,
        /** 2 */
        Save
    }
    /** Describes the type of operation for the privilege */
    enum PrivilegeType {
        /** 0 - Specifies no privilege. */
        None,
        /** 1 - The create privilege. */
        Create,
        /** 2 - The read privilege. */
        Read,
        /** 3 - The write privilege. */
        Write,
        /** 4 -  The delete privilege. */
        Delete,
        /** 5 - The assign privilege. */
        Assign,
        /** 6 - The share privilege. */
        Share,
        /** 7 - The append privilege. */
        Append,
        /** 8 - The append to privilege. */
        AppendTo
    }
    /**  */
    enum FormNavBar {
        /** "on" - The navigation bar is displayed. This is the default behavior if the navbar parameter is not used. */
        On,
        /** "off" - The navigation bar is not displayed. People can navigate using other user interface elements or the back and forward buttons. */
        Off,
        /** "entity" - On an entity form, only the navigation options for related entities are available. After navigating to a related entity, a back button is displayed in the navigation bar to allow returning to the original record. */
        Entity
    }
    /**  */
    enum FormWindowPosition {
        /** 1 */
        Center,
        /** 2 */
        Side
    }
    /**  */
    enum FormRelationshipType {
        /** 0 */
        OneToMany,
        /** 1 */
        ManyToMany
    }
    /**  */
    enum FormRelationshipRoleType {
        /** 1 */
        Referencing,
        /** 2 */
        AssociationEntity
    }
    /**  */
    enum FileAccept {
        /** "audio" */
        Audio,
        /** "video" */
        Video,
        /** "image" */
        Image
    }
    /**  */
    enum GridType {
        /** 1 */
        HomePageGrid,
        /** 2 */
        Subgrid
    }
}
/** A promise-based JavaScript library for the Microsoft Dynamics CRM WebApi. Github: https://github.com/DigitalFlow/Xrm-WebApi-Client */
declare namespace WebApiClient {
    interface PromiseThen<T> {
        then(callback: (result: T) => void): PromiseCatch<T>;
    }
    interface PromiseCatch<T> {
        catch(callback: (result: any) => void): PromiseFinally<T>;
    }
    interface PromiseFinally<T> {
        finally(callback: (result: any) => void): PromiseDone<T>;
    }
    interface PromiseDone<T> {
        done(callback: (result: any) => void) : void
    }
    interface RetrieveResponse {
        "@odata.context": string;
        /** Use the value of the @odata.nextLink property to request the next set of records. Don’t change or append any additional system query options to the value. */
        "@odata.nextLink": string;
        /** The response @odata.count property will contain the number of entities that match the filter criteria irrespective of an odata.maxpagesize preference limitation. */
        "@odata.count": number;
        /** A paging cookie must be requested as an annotation. And a @Microsoft.Dynamics.CRM.fetchxmlpagingcookie property will be returned with the result. */
        "@Microsoft.Dynamics.CRM.fetchxmlpagingcookie": string;
        /** Set to true if you want retrieve more records. */
        "@Microsoft.Dynamics.CRM.morerecords": boolean;
        /** When you set returntotalrecordcount="true" in FetchXml, this value return the count. */
        "@Microsoft.Dynamics.CRM.totalrecordcount": number;
        /** The total record count limit exceeded value. */
        "@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded": boolean;
        /** An array object of ODATA value. */
        value: Array<any>;
    }
    /**
     * Retrieves records from CRM.
     * @param request the Tomato.WebApi.RetrieveRequest object.
     */
    function Retrieve(request: Tomato.WebApi.RetrieveRequest): PromiseThen<RetrieveResponse>;
    /**
     * Creates a given record in CRM.
     * @param request The Tomato.WebApi.CreateRequest object.
     */
    function Create(request: Tomato.WebApi.CreateRequest): Promise<string> | Promise<object> | string | object;
    /**
     * Updates a given record in CRM.
     * @param request the Tomato.WebApi.UpdateRequest object.
     */
    function Update(request: Tomato.WebApi.UpdateRequest): Promise<string> | Promise<object> | string | object;
    /**
     * Deletes a given record in CRM.
     * @param request the Tomato.WebApi.DeleteRequest object.
     */
    function Delete(request: Tomato.WebApi.DeleteRequest): Promise<string> | string;
    /**
     * Associates given records in CRM.
     * @param request the Tomato.WebApi.AssociateRequest object.
     */
    function Associate(request: Tomato.WebApi.AssociateRequest): Promise<string> | string;
    /**
     * Disassociates given records in CRM.
     * @param request the Tomato.WebApi.DisassociateRequest object.
     */
    function Disassociate(request: Tomato.WebApi.DisassociateRequest): Promise<string> | string;
    /**
     * Executes the given request in CRM
     * @param request Request to send, must be in prototype chain of WebApiClient.Requests.Request
     */
    function Execute(request: any): any;
}