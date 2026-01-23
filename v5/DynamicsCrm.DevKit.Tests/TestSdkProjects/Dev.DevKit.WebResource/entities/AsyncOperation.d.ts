//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAsyncOperation_Information {
		interface tab_generaltab_Sections {
			/** Custom */
			custom: DevKit.Controls.Section;
			/** General */
			general: DevKit.Controls.Section;
			systemlinksection: DevKit.Controls.Section;
		}
		/** General */
		interface tab_generaltab extends DevKit.Controls.ITab {
			Section: tab_generaltab_Sections;
		}
		interface Tabs {
			/** General */
			generaltab: tab_generaltab;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time when the system job was completed. */
			CompletedOn: DevKit.Controls.DateTime;
			/** Date and time when the system job was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Message provided by the system job. */
			FriendlyMessage: DevKit.Controls.String;
			/** Message related to the system job. */
			Message: DevKit.Controls.String;
			/** Name of the system job. */
			Name: DevKit.Controls.String;
			/** Type of the system job. */
			OperationType: DevKit.Controls.OptionSet;
			/** Unique identifier of the user or team who owns the system job. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the system job is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Number of times to retry the system job. */
			RetryCount: DevKit.Controls.Integer;
			WebResource_systemjob: DevKit.Controls.WebResource;
		}
	}
	export class FormAsyncOperation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form AsyncOperation_Information */
		Body: DevKit.FormAsyncOperation_Information.Body;
	}
	namespace FormNew_Bulk_Cancel_Job_form {
		interface tab_GENERAL_NEW_BULK_JOB_TAB_Sections {
			/** Custom */
			custom: DevKit.Controls.Section;
			/** General */
			general: DevKit.Controls.Section;
		}
		interface tab_MODERN_NEW_JOB_TAB_Sections {
			NEW_BULK_CANCEL_JOB: DevKit.Controls.Section;
		}
		/** General */
		interface tab_GENERAL_NEW_BULK_JOB_TAB extends DevKit.Controls.ITab {
			Section: tab_GENERAL_NEW_BULK_JOB_TAB_Sections;
		}
		/** New job */
		interface tab_MODERN_NEW_JOB_TAB extends DevKit.Controls.ITab {
			Section: tab_MODERN_NEW_JOB_TAB_Sections;
		}
		interface Tabs {
			/** General */
			GENERAL_NEW_BULK_JOB_TAB: tab_GENERAL_NEW_BULK_JOB_TAB;
			/** New job */
			MODERN_NEW_JOB_TAB: tab_MODERN_NEW_JOB_TAB;
		}
		interface Body {
			Tab: Tabs;
			_14EE90DC_D6B1_4CF2_B39F_4B978B7DE7A0: DevKit.Controls.ActionCards;
			/** Type of the system job. */
			OperationType: DevKit.Controls.OptionSet;
			/** Unique identifier of the object with which the system job is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
		}
	}
	export class FormNew_Bulk_Cancel_Job_form extends DevKit.IForm {
		/**
		* New Bulk Cancel Job form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form New_Bulk_Cancel_Job_form */
		Body: DevKit.FormNew_Bulk_Cancel_Job_form.Body;
	}
	namespace FormNew_Bulk_Pause_Job_form {
		interface tab_GENERAL_NEW_BULK_JOB_TAB_Sections {
			/** Custom */
			custom: DevKit.Controls.Section;
			/** General */
			general: DevKit.Controls.Section;
		}
		interface tab_MODERN_NEW_JOB_TAB_Sections {
			NEW_BULK_PAUSE_JOB: DevKit.Controls.Section;
		}
		/** General */
		interface tab_GENERAL_NEW_BULK_JOB_TAB extends DevKit.Controls.ITab {
			Section: tab_GENERAL_NEW_BULK_JOB_TAB_Sections;
		}
		/** New job */
		interface tab_MODERN_NEW_JOB_TAB extends DevKit.Controls.ITab {
			Section: tab_MODERN_NEW_JOB_TAB_Sections;
		}
		interface Tabs {
			/** General */
			GENERAL_NEW_BULK_JOB_TAB: tab_GENERAL_NEW_BULK_JOB_TAB;
			/** New job */
			MODERN_NEW_JOB_TAB: tab_MODERN_NEW_JOB_TAB;
		}
		interface Body {
			Tab: Tabs;
			_01392873_0F90_41FE_83E7_430CF3443A8B: DevKit.Controls.ActionCards;
			/** Type of the system job. */
			OperationType: DevKit.Controls.OptionSet;
			/** Unique identifier of the object with which the system job is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
		}
	}
	export class FormNew_Bulk_Pause_Job_form extends DevKit.IForm {
		/**
		* New Bulk Pause Job form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form New_Bulk_Pause_Job_form */
		Body: DevKit.FormNew_Bulk_Pause_Job_form.Body;
	}
	namespace FormNew_Bulk_Resume_Job_form {
		interface tab_GENERAL_NEW_BULK_JOB_TAB_Sections {
			/** Custom */
			custom: DevKit.Controls.Section;
			/** General */
			general: DevKit.Controls.Section;
		}
		interface tab_MODERN_NEW_JOB_TAB_Sections {
			NEW_BULK_RESUME_JOB: DevKit.Controls.Section;
		}
		/** General */
		interface tab_GENERAL_NEW_BULK_JOB_TAB extends DevKit.Controls.ITab {
			Section: tab_GENERAL_NEW_BULK_JOB_TAB_Sections;
		}
		/** New job */
		interface tab_MODERN_NEW_JOB_TAB extends DevKit.Controls.ITab {
			Section: tab_MODERN_NEW_JOB_TAB_Sections;
		}
		interface Tabs {
			/** General */
			GENERAL_NEW_BULK_JOB_TAB: tab_GENERAL_NEW_BULK_JOB_TAB;
			/** New job */
			MODERN_NEW_JOB_TAB: tab_MODERN_NEW_JOB_TAB;
		}
		interface Body {
			Tab: Tabs;
			_CDE1C43F_D8D5_4A1D_9FF0_5F6D52F56FD9: DevKit.Controls.ActionCards;
			/** Type of the system job. */
			OperationType: DevKit.Controls.OptionSet;
			/** Unique identifier of the object with which the system job is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
		}
	}
	export class FormNew_Bulk_Resume_Job_form extends DevKit.IForm {
		/**
		* New Bulk Resume Job form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form New_Bulk_Resume_Job_form */
		Body: DevKit.FormNew_Bulk_Resume_Job_form.Body;
	}
	namespace FormNew_Duplicate_Detection_Job_form {
		interface tab_GENERAL_NEW_BULK_JOB_TAB_Sections {
			/** Custom */
			custom: DevKit.Controls.Section;
			/** General */
			general: DevKit.Controls.Section;
		}
		interface tab_MODERN_NEW_JOB_TAB_Sections {
			/** ACCOUNT INFORMATION */
			NEW_DUPLICATE_DETECTION_JOB: DevKit.Controls.Section;
		}
		/** General */
		interface tab_GENERAL_NEW_BULK_JOB_TAB extends DevKit.Controls.ITab {
			Section: tab_GENERAL_NEW_BULK_JOB_TAB_Sections;
		}
		/** New job */
		interface tab_MODERN_NEW_JOB_TAB extends DevKit.Controls.ITab {
			Section: tab_MODERN_NEW_JOB_TAB_Sections;
		}
		interface Tabs {
			/** General */
			GENERAL_NEW_BULK_JOB_TAB: tab_GENERAL_NEW_BULK_JOB_TAB;
			/** New job */
			MODERN_NEW_JOB_TAB: tab_MODERN_NEW_JOB_TAB;
		}
		interface Body {
			Tab: Tabs;
			_ED99F095_264A_41F9_98C8_086000F8E699: DevKit.Controls.ActionCards;
			/** Type of the system job. */
			OperationType: DevKit.Controls.OptionSet;
			/** Unique identifier of the object with which the system job is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
		}
	}
	export class FormNew_Duplicate_Detection_Job_form extends DevKit.IForm {
		/**
		* New Duplicate Detection Job form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form New_Duplicate_Detection_Job_form */
		Body: DevKit.FormNew_Duplicate_Detection_Job_form.Body;
	}
	namespace FormView_Duplicate_Detection_Job_details_form {
		interface tab_LEGACY_DETAILS_TAB_Sections {
			/** Message */
			Message: DevKit.Controls.Section;
		}
		interface tab_LEGACY_GENERAL_TAB_Sections {
			/** Custom */
			custom: DevKit.Controls.Section;
			/** General */
			general: DevKit.Controls.Section;
			systemlinksection: DevKit.Controls.Section;
		}
		interface tab_MODERN_DELETED_RECORDS_TAB_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_MODERN_DETAILS_TAB_Sections {
			VIEW_DUPLICATE_DETECTION_JOB: DevKit.Controls.Section;
		}
		interface tab_MODERN_VIEW_DUPLICATES_TAB_Sections {
			VIEW_DUPLICATES_DUPLICATE_DETECTION_JOB: DevKit.Controls.Section;
		}
		/** Details */
		interface tab_LEGACY_DETAILS_TAB extends DevKit.Controls.ITab {
			Section: tab_LEGACY_DETAILS_TAB_Sections;
		}
		/** General */
		interface tab_LEGACY_GENERAL_TAB extends DevKit.Controls.ITab {
			Section: tab_LEGACY_GENERAL_TAB_Sections;
		}
		/** Deleted Records */
		interface tab_MODERN_DELETED_RECORDS_TAB extends DevKit.Controls.ITab {
			Section: tab_MODERN_DELETED_RECORDS_TAB_Sections;
		}
		/** Details */
		interface tab_MODERN_DETAILS_TAB extends DevKit.Controls.ITab {
			Section: tab_MODERN_DETAILS_TAB_Sections;
		}
		/** View Duplicates */
		interface tab_MODERN_VIEW_DUPLICATES_TAB extends DevKit.Controls.ITab {
			Section: tab_MODERN_VIEW_DUPLICATES_TAB_Sections;
		}
		interface Tabs {
			/** Details */
			LEGACY_DETAILS_TAB: tab_LEGACY_DETAILS_TAB;
			/** General */
			LEGACY_GENERAL_TAB: tab_LEGACY_GENERAL_TAB;
			/** Deleted Records */
			MODERN_DELETED_RECORDS_TAB: tab_MODERN_DELETED_RECORDS_TAB;
			/** Details */
			MODERN_DETAILS_TAB: tab_MODERN_DETAILS_TAB;
			/** View Duplicates */
			MODERN_VIEW_DUPLICATES_TAB: tab_MODERN_VIEW_DUPLICATES_TAB;
		}
		interface Body {
			Tab: Tabs;
			_4E64B996_F144_4D9A_8678_AD4FAD663383: DevKit.Controls.ActionCards;
			_D9EC5B3F_6E0A_46D6_B1CD_C951D4F0A5ED: DevKit.Controls.ActionCards;
			/** Date and time when the system job was completed. */
			CompletedOn: DevKit.Controls.DateTime;
			/** Date and time when the system job was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Message provided by the system job. */
			FriendlyMessage: DevKit.Controls.String;
			/** Message related to the system job. */
			Message: DevKit.Controls.String;
			/** Name of the system job. */
			Name: DevKit.Controls.String;
			/** Type of the system job. */
			OperationType: DevKit.Controls.OptionSet;
			/** Unique identifier of the user or team who owns the system job. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the system job is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Number of times to retry the system job. */
			RetryCount: DevKit.Controls.Integer;
			WebResource_systemjob: DevKit.Controls.WebResource;
		}
		interface Grid {
			/** Deleted Record References */
			Subgrid_new_1: DevKit.Controls.Grid;
		}
	}
	export class FormView_Duplicate_Detection_Job_details_form extends DevKit.IForm {
		/**
		* View Duplicate Detection Job details form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form View_Duplicate_Detection_Job_details_form */
		Body: DevKit.FormView_Duplicate_Detection_Job_details_form.Body;
		/** The Grid of form View_Duplicate_Detection_Job_details_form */
		Grid: DevKit.FormView_Duplicate_Detection_Job_details_form.Grid;
	}
	namespace FormView_Job_Details {
		interface tab_MODERN_DELETED_RECORDS_TAB_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_MODERN_DETAILS_TAB_Sections {
			/** Message */
			Message: DevKit.Controls.Section;
		}
		interface tab_MODERN_GENERAL_TAB_Sections {
			/** Custom */
			custom: DevKit.Controls.Section;
			/** General */
			general: DevKit.Controls.Section;
			systemlinksection: DevKit.Controls.Section;
		}
		interface tab_MODERN_VIEW_DUPLICATES_TAB_Sections {
			VIEW_DUPLICATES_DUPLICATE_DETECTION_JOB: DevKit.Controls.Section;
		}
		/** Deleted Records */
		interface tab_MODERN_DELETED_RECORDS_TAB extends DevKit.Controls.ITab {
			Section: tab_MODERN_DELETED_RECORDS_TAB_Sections;
		}
		/** Details */
		interface tab_MODERN_DETAILS_TAB extends DevKit.Controls.ITab {
			Section: tab_MODERN_DETAILS_TAB_Sections;
		}
		/** General */
		interface tab_MODERN_GENERAL_TAB extends DevKit.Controls.ITab {
			Section: tab_MODERN_GENERAL_TAB_Sections;
		}
		/** View Duplicates */
		interface tab_MODERN_VIEW_DUPLICATES_TAB extends DevKit.Controls.ITab {
			Section: tab_MODERN_VIEW_DUPLICATES_TAB_Sections;
		}
		interface Tabs {
			/** Deleted Records */
			MODERN_DELETED_RECORDS_TAB: tab_MODERN_DELETED_RECORDS_TAB;
			/** Details */
			MODERN_DETAILS_TAB: tab_MODERN_DETAILS_TAB;
			/** General */
			MODERN_GENERAL_TAB: tab_MODERN_GENERAL_TAB;
			/** View Duplicates */
			MODERN_VIEW_DUPLICATES_TAB: tab_MODERN_VIEW_DUPLICATES_TAB;
		}
		interface Body {
			Tab: Tabs;
			_4E64B996_F144_4D9A_8678_AD4FAD663383: DevKit.Controls.ActionCards;
			/** Date and time when the system job was completed. */
			CompletedOn: DevKit.Controls.DateTime;
			/** Date and time when the system job was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Message provided by the system job. */
			FriendlyMessage: DevKit.Controls.String;
			/** Message related to the system job. */
			Message: DevKit.Controls.String;
			/** Name of the system job. */
			Name: DevKit.Controls.String;
			/** Type of the system job. */
			OperationType: DevKit.Controls.OptionSet;
			/** Unique identifier of the user or team who owns the system job. */
			OwnerId: DevKit.Controls.Lookup;
			/** Indicates whether the system job should run only after the specified date and time. */
			PostponeUntil: DevKit.Controls.DateTime;
			/** Unique identifier of the object with which the system job is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Number of times to retry the system job. */
			RetryCount: DevKit.Controls.Integer;
			/** Status of the system job. */
			StateCode: DevKit.Controls.OptionSet;
			/** Reason for the status of the system job. */
			StatusCode: DevKit.Controls.OptionSet;
			WebResource_systemjob: DevKit.Controls.WebResource;
		}
		interface Grid {
			/** Deleted Record References */
			Subgrid_new_1: DevKit.Controls.Grid;
		}
	}
	export class FormView_Job_Details extends DevKit.IForm {
		/**
		* View Job Details [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form View_Job_Details */
		Body: DevKit.FormView_Job_Details.Body;
		/** The Grid of form View_Job_Details */
		Grid: DevKit.FormView_Job_Details.Grid;
	}
	export class AsyncOperationApi {
		/**
		* DynamicsCrm.DevKit AsyncOperationApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Unique identifier of the system job. */
		AsyncOperationId: string | null;
		/** The breadcrumb record ID. */
		BreadcrumbId: string | null;
		/** The origin of the caller. */
		CallerOrigin: string | null;
		/** Date and time when the system job was completed. */
		readonly CompletedOn_UtcDateAndTime: Date | null;
		/** Unique identifier used to correlate between multiple SDK requests and system jobs. */
		CorrelationId: string | null;
		/** Last time the correlation depth was updated. */
		CorrelationUpdatedTime_UtcDateAndTime: Date | null;
		/** Unique identifier of the user who created the system job. */
		readonly CreatedBy: string | null;
		/** Date and time when the system job was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the asyncoperation. */
		readonly CreatedOnBehalfBy: string | null;
		/** Unstructured data associated with the system job. */
		Data: string | null;
		/** File Id for the blob url used for file storage. */
		readonly DataBlobId_name: string | null;
		/** Execution of all operations with the same dependency token is serialized. */
		DependencyToken: string | null;
		/** Number of SDK calls made since the first call. */
		Depth: number | null;
		/** Error code returned from a canceled system job. */
		readonly ErrorCode: number | null;
		/** Time that the system job has taken to execute. */
		readonly ExecutionTimeSpan: number | null;
		/** The datetime when the Expander pipeline started. */
		ExpanderStartTime_UtcDateAndTime: Date | null;
		/** Message provided by the system job. */
		FriendlyMessage: string | null;
		/** Unique identifier of the host that owns this system job. */
		HostId: string | null;
		/** Indicates that the system job is waiting for an event. */
		readonly IsWaitingForEvent: boolean | null;
		/** Message related to the system job. */
		readonly Message: string | null;
		/** Name of the message that started this system job. */
		MessageName: string | null;
		/** Unique identifier of the user who last modified the system job. */
		readonly ModifiedBy: string | null;
		/** Date and time when the system job was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the asyncoperation. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the system job. */
		Name: string | null;
		/** Type of the system job. */
		OperationType: OptionSet.AsyncOperation.OperationType | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the system job. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the owning extension with which the system job is associated. */
		OwningExtensionId: string | null;
		/** Unique identifier of the team who owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns the record. */
		readonly OwningUser: string | null;
		ParentPluginExecutionId: string | null;
		/** Indicates whether the system job should run only after the specified date and time. */
		PostponeUntil_UtcDateAndTime: Date | null;
		/** Pattern of the system job's recurrence. */
		RecurrencePattern: string | null;
		/** Starting time in UTC for the recurrence pattern. */
		RecurrenceStartTime_UtcDateOnly: Date | null;
		/** Unique identifier of the request that generated the system job. */
		RequestId: string | null;
		/** Retain job history. */
		RetainJobHistory: boolean | null;
		/** Number of times to retry the system job. */
		readonly RetryCount: number | null;
		/** Root execution context of the job that trigerred async job. */
		RootExecutionContext: string | null;
		/** Order in which operations were submitted. */
		readonly Sequence: number | null;
		/** Date and time when the system job was started. */
		readonly StartedOn_UtcDateAndTime: Date | null;
		/** Status of the system job. */
		StateCode: OptionSet.AsyncOperation.StateCode | null;
		/** Reason for the status of the system job. */
		StatusCode: OptionSet.AsyncOperation.StatusCode | null;
		/** The Subtype of the Async Job */
		readonly Subtype: number | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Unique identifier of the workflow activation related to the system job. */
		WorkflowActivationId: string | null;
		/** Indicates whether the workflow instance was blocked when it was persisted. */
		readonly WorkflowIsBlocked: boolean | null;
		/** Name of a workflow stage. */
		readonly WorkflowStageName: string | null;
		/** State of the workflow job. */
		readonly WorkflowState: string | null;
		/** The workload name. */
		Workload: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the system job. */
			readonly AsyncOperationId: string;
			/** The breadcrumb record ID. */
			readonly BreadcrumbId: string;
			/** The origin of the caller. */
			readonly CallerOrigin: string;
			/** Date and time when the system job was completed. */
			readonly CompletedOn_UtcDateAndTime: string;
			/** Unique identifier used to correlate between multiple SDK requests and system jobs. */
			readonly CorrelationId: string;
			/** Last time the correlation depth was updated. */
			readonly CorrelationUpdatedTime_UtcDateAndTime: string;
			/** Unique identifier of the user who created the system job. */
			readonly CreatedBy: string;
			/** Date and time when the system job was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the asyncoperation. */
			readonly CreatedOnBehalfBy: string;
			/** Unstructured data associated with the system job. */
			readonly Data: string;
			/** File Id for the blob url used for file storage. */
			readonly DataBlobId_name: string;
			/** Execution of all operations with the same dependency token is serialized. */
			readonly DependencyToken: string;
			/** Number of SDK calls made since the first call. */
			readonly Depth: string;
			/** Error code returned from a canceled system job. */
			readonly ErrorCode: string;
			/** Time that the system job has taken to execute. */
			readonly ExecutionTimeSpan: string;
			/** The datetime when the Expander pipeline started. */
			readonly ExpanderStartTime_UtcDateAndTime: string;
			/** Message provided by the system job. */
			readonly FriendlyMessage: string;
			/** Unique identifier of the host that owns this system job. */
			readonly HostId: string;
			/** Indicates that the system job is waiting for an event. */
			readonly IsWaitingForEvent: string;
			/** Message related to the system job. */
			readonly Message: string;
			/** Name of the message that started this system job. */
			readonly MessageName: string;
			/** Unique identifier of the user who last modified the system job. */
			readonly ModifiedBy: string;
			/** Date and time when the system job was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the asyncoperation. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the system job. */
			readonly Name: string;
			/** Type of the system job. */
			readonly OperationType: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the system job. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the owning extension with which the system job is associated. */
			readonly OwningExtensionId: string;
			/** Unique identifier of the team who owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the record. */
			readonly OwningUser: string;
			readonly ParentPluginExecutionId: string;
			/** Indicates whether the system job should run only after the specified date and time. */
			readonly PostponeUntil_UtcDateAndTime: string;
			/** Pattern of the system job's recurrence. */
			readonly RecurrencePattern: string;
			/** Starting time in UTC for the recurrence pattern. */
			readonly RecurrenceStartTime_UtcDateOnly: string;
			/** Unique identifier of the request that generated the system job. */
			readonly RequestId: string;
			/** Retain job history. */
			readonly RetainJobHistory: string;
			/** Number of times to retry the system job. */
			readonly RetryCount: string;
			/** Root execution context of the job that trigerred async job. */
			readonly RootExecutionContext: string;
			/** Order in which operations were submitted. */
			readonly Sequence: string;
			/** Date and time when the system job was started. */
			readonly StartedOn_UtcDateAndTime: string;
			/** Status of the system job. */
			readonly StateCode: string;
			/** Reason for the status of the system job. */
			readonly StatusCode: string;
			/** The Subtype of the Async Job */
			readonly Subtype: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Unique identifier of the workflow activation related to the system job. */
			readonly WorkflowActivationId: string;
			/** Indicates whether the workflow instance was blocked when it was persisted. */
			readonly WorkflowIsBlocked: string;
			/** Name of a workflow stage. */
			readonly WorkflowStageName: string;
			/** State of the workflow job. */
			readonly WorkflowState: string;
			/** The workload name. */
			readonly Workload: string;
		}
	}
}
declare namespace OptionSet {
	namespace AsyncOperation {
		enum OperationType {
			/** Activity_Propagation = 6*/
			Activity_Propagation = 6,
			/** AI_Builder_Prediction_Events = 190690092*/
			AI_Builder_Prediction_Events = 190690092,
			/** AI_Builder_Training_Events = 190690091*/
			AI_Builder_Training_Events = 190690091,
			/** ALM_Anomaly_Detection_Operation = 73*/
			ALM_Anomaly_Detection_Operation = 73,
			/** App_Module_Metadata_Operation = 72*/
			App_Module_Metadata_Operation = 72,
			/** Archive_Execution_Async_Operation = 301*/
			Archive_Execution_Async_Operation = 301,
			/** Async_Restore_Job = 187*/
			Async_Restore_Job = 187,
			/** AsyncArchive_Async_Operation = 102*/
			AsyncArchive_Async_Operation = 102,
			/** Audit_Partition_Creation = 41*/
			Audit_Partition_Creation = 41,
			/** Background_Team_Service_Async_Operation = 106*/
			Background_Team_Service_Async_Operation = 106,
			/** Bulk_Archive_Operation = 300*/
			Bulk_Archive_Operation = 300,
			/** Bulk_Delete = 13*/
			Bulk_Delete = 13,
			/** Bulk_Delete_File_Attachment = 94*/
			Bulk_Delete_File_Attachment = 94,
			/** Bulk_Delete_Subprocess = 23*/
			Bulk_Delete_Subprocess = 23,
			/** Bulk_Duplicate_Detection = 8*/
			Bulk_Duplicate_Detection = 8,
			/** Bulk_Email = 2*/
			Bulk_Email = 2,
			/** Calculate_Organization_Maximum_Storage_Size = 22*/
			Calculate_Organization_Maximum_Storage_Size = 22,
			/** Calculate_Organization_Storage_Size = 18*/
			Calculate_Organization_Storage_Size = 18,
			/** Calculate_Rollup_Field = 57*/
			Calculate_Rollup_Field = 57,
			/** CallbackRegistration_Expander_Operation = 79*/
			CallbackRegistration_Expander_Operation = 79,
			/** Cancel_Async_Operations_System = 103*/
			Cancel_Async_Operations_System = 103,
			/** Cascade_Assign_All_Async_Operation = 105*/
			Cascade_Assign_All_Async_Operation = 105,
			/** Cascade_FlowSession_Permissions_Async_Operation = 100*/
			Cascade_FlowSession_Permissions_Async_Operation = 100,
			/** Cascade_Grant_or_Revoke_Access_Version_Tracking_Async_Operation = 12801*/
			Cascade_Grant_or_Revoke_Access_Version_Tracking_Async_Operation = 12801,
			/** Cascade_Merge_Async_Operation = 89*/
			Cascade_Merge_Async_Operation = 89,
			/** Cascade_Reparent_DB_Async_Operation = 88*/
			Cascade_Reparent_DB_Async_Operation = 88,
			/** CascadeAssign = 90*/
			CascadeAssign = 90,
			/** CascadeDelete = 91*/
			CascadeDelete = 91,
			/** Catalog_service_asyc_operation_to_poll_for_a_solution_checker_request = 335*/
			Catalog_service_asyc_operation_to_poll_for_a_solution_checker_request = 335,
			/** Catalog_service_asyc_operation_to_submit_a_solution_checker_request = 336*/
			Catalog_service_asyc_operation_to_submit_a_solution_checker_request = 336,
			/** Catalog_Service_Generate_Package_Async_Operation = 320*/
			Catalog_Service_Generate_Package_Async_Operation = 320,
			/** Catalog_Service_Install_Request_Async_Operation = 322*/
			Catalog_Service_Install_Request_Async_Operation = 322,
			/** Catalog_Service_Submit_Approval_Request_Async_Operation = 321*/
			Catalog_Service_Submit_Approval_Request_Async_Operation = 321,
			/** Check_For_Language_Pack_Updates = 42*/
			Check_For_Language_Pack_Updates = 42,
			/** Cleanup_inactive_workflow_assemblies = 32*/
			Cleanup_inactive_workflow_assemblies = 32,
			/** Cleanup_Solution_Components = 71*/
			Cleanup_Solution_Components = 71,
			/** Collect_Organization_Database_Statistics = 19*/
			Collect_Organization_Database_Statistics = 19,
			/** Collect_Organization_Statistics = 16*/
			Collect_Organization_Statistics = 16,
			/** Collection_Organization_Size_Statistics = 20*/
			Collection_Organization_Size_Statistics = 20,
			/** Convert_Date_And_Time_Behavior = 62*/
			Convert_Date_And_Time_Behavior = 62,
			/** Create_Or_Refresh_Virtual_Entity = 98*/
			Create_Or_Refresh_Virtual_Entity = 98,
			/** Database_log_backup = 26*/
			Database_log_backup = 26,
			/** Database_Tuning = 21*/
			Database_Tuning = 21,
			/** DBCC_SHRINKDATABASE_maintenance_job = 28*/
			DBCC_SHRINKDATABASE_maintenance_job = 28,
			/** DBCC_SHRINKFILE_maintenance_job = 29*/
			DBCC_SHRINKFILE_maintenance_job = 29,
			/** DeleteAndPromote_Async_Operation = 207*/
			DeleteAndPromote_Async_Operation = 207,
			/** Deletes_related_Elastic_or_SQL_Table_records_when_an_Elastic_Table_record_is_deleted = 334*/
			Deletes_related_Elastic_or_SQL_Table_records_when_an_Elastic_Table_record_is_deleted = 334,
			/** Deletes_related_Elastic_Table_records_when_a_SQL_record_is_deleted = 333*/
			Deletes_related_Elastic_Table_records_when_a_SQL_record_is_deleted = 333,
			/** Deletion_Service = 14*/
			Deletion_Service = 14,
			/** Denormalization_Async_Operation = 239*/
			Denormalization_Async_Operation = 239,
			/** Duplicate_Detection_Rule_Publish = 7*/
			Duplicate_Detection_Rule_Publish = 7,
			/** Encryption_Health_Check = 53*/
			Encryption_Health_Check = 53,
			/** EntityKey_Index_Creation = 63*/
			EntityKey_Index_Creation = 63,
			/** Event_Expander_Operation = 92*/
			Event_Expander_Operation = 92,
			/** Execute_Async_Request = 54*/
			Execute_Async_Request = 54,
			/** Execute_DataProcessing_Configuration = 306*/
			Execute_DataProcessing_Configuration = 306,
			/** Export_Solution_Async_Operation = 202*/
			Export_Solution_Async_Operation = 202,
			/** FinOps_DB_Sync_Async_Operation = 308*/
			FinOps_DB_Sync_Async_Operation = 308,
			/** FinOps_Deploy_Custom_Package_Async_Operation = 332*/
			FinOps_Deploy_Custom_Package_Async_Operation = 332,
			/** FinOps_Deployment_Async_Operation = 302*/
			FinOps_Deployment_Async_Operation = 302,
			/** FinOps_Unit_Test_Async_Operation = 309*/
			FinOps_Unit_Test_Async_Operation = 309,
			/** Flow_Notification = 75*/
			Flow_Notification = 75,
			/** Goal_Roll_Up = 40*/
			Goal_Roll_Up = 40,
			/** Import = 5*/
			Import = 5,
			/** Import_File_Parse = 3*/
			Import_File_Parse = 3,
			/** Import_Sample_Data = 38*/
			Import_Sample_Data = 38,
			/** Import_Solution_Async_Operation = 203*/
			Import_Solution_Async_Operation = 203,
			/** Import_Solution_Metadata = 93*/
			Import_Solution_Metadata = 93,
			/** Import_Subprocess = 17*/
			Import_Subprocess = 17,
			/** Import_Translation = 59*/
			Import_Translation = 59,
			/** ImportTranslation_Async_Operation = 210*/
			ImportTranslation_Async_Operation = 210,
			/** Incoming_Email_Processing = 51*/
			Incoming_Email_Processing = 51,
			/** Index_Management = 15*/
			Index_Management = 15,
			/** Instant_entities_cleanup_operation = 339*/
			Instant_entities_cleanup_operation = 339,
			/** Mailbox_Test_Access = 52*/
			Mailbox_Test_Access = 52,
			/** Mass_Calculate_Rollup_Field = 58*/
			Mass_Calculate_Rollup_Field = 58,
			/** Matchcode_Update = 12*/
			Matchcode_Update = 12,
			/** Migrate_article_content_to_file_storage = 86*/
			Migrate_article_content_to_file_storage = 86,
			/** Migrate_notes_to_attachments_job = 85*/
			Migrate_notes_to_attachments_job = 85,
			/** Organization_Full_Text_Catalog_Index = 25*/
			Organization_Full_Text_Catalog_Index = 25,
			/** Outgoing_Activity = 50*/
			Outgoing_Activity = 50,
			/** Post_to_Yammer = 49*/
			Post_to_Yammer = 49,
			/** Process_Table_For_RecycleBin = 104*/
			Process_Table_For_RecycleBin = 104,
			/** Prompt_column_bulk_update_operation = 338*/
			Prompt_column_bulk_update_operation = 338,
			/** Provision_language_for_user = 201*/
			Provision_language_for_user = 201,
			/** Provision_Language_Pack = 43*/
			Provision_Language_Pack = 43,
			/** ProvisionLanguage_Async_Operation = 209*/
			ProvisionLanguage_Async_Operation = 209,
			/** PublishAll_Async_Operation = 204*/
			PublishAll_Async_Operation = 204,
			/** Purge_Archived_Content_Operation = 304*/
			Purge_Archived_Content_Operation = 304,
			/** Quick_Campaign = 11*/
			Quick_Campaign = 11,
			/** Recurring_Series_Expansion = 35*/
			Recurring_Series_Expansion = 35,
			/** Refresh_Business_Unit_for_Records_Owned_By_Principal = 95*/
			Refresh_Business_Unit_for_Records_Owned_By_Principal = 95,
			/** Refresh_Runtime_Integration_Components_Async_Operation = 250*/
			Refresh_Runtime_Integration_Components_Async_Operation = 250,
			/** Regenerate_Entity_Row_Count_Snapshot_Data = 46*/
			Regenerate_Entity_Row_Count_Snapshot_Data = 46,
			/** Regenerate_Read_Share_Snapshot_Data = 47*/
			Regenerate_Read_Share_Snapshot_Data = 47,
			/** Register_Offering_Async_Operation = 305*/
			Register_Offering_Async_Operation = 305,
			/** Reindex_all_indices_maintenance_job = 30*/
			Reindex_all_indices_maintenance_job = 30,
			/** Relationship_Assistant_Cards = 69*/
			Relationship_Assistant_Cards = 69,
			/** Resource_Booking_Sync = 68*/
			Resource_Booking_Sync = 68,
			/** Revoke_Inherited_Access = 96*/
			Revoke_Inherited_Access = 96,
			/** Ribbon_Client_Metadata_Operation = 76*/
			Ribbon_Client_Metadata_Operation = 76,
			/** Solution_service_async_operation_to_install_solution_after_app_updates = 337*/
			Solution_service_async_operation_to_install_solution_after_app_updates = 337,
			/** SQM_Data_Collection = 9*/
			SQM_Data_Collection = 9,
			/** StageAndUpgrade_Async_Operation = 211*/
			StageAndUpgrade_Async_Operation = 211,
			/** Storage_Limit_Notification = 31*/
			Storage_Limit_Notification = 31,
			/** Sync_Synapse_Tables_Schema = 307*/
			Sync_Synapse_Tables_Schema = 307,
			/** System_Event = 1*/
			System_Event = 1,
			/** TDS_endpoint_provisioning_new_TVF_functions_and_grant_permission_Async_Operation = 330*/
			TDS_endpoint_provisioning_new_TVF_functions_and_grant_permission_Async_Operation = 330,
			/** Transform_Parse_Data = 4*/
			Transform_Parse_Data = 4,
			/** UninstallSolution_Async_Operation = 208*/
			UninstallSolution_Async_Operation = 208,
			/** Update_Contract_States = 27*/
			Update_Contract_States = 27,
			/** Update_Entitlement_States = 56*/
			Update_Entitlement_States = 56,
			/** Update_Knowledge_Article_States = 65*/
			Update_Knowledge_Article_States = 65,
			/** Update_Modern_Flow_Async_Operation = 101*/
			Update_Modern_Flow_Async_Operation = 101,
			/** Update_Organization_Database = 44*/
			Update_Organization_Database = 44,
			/** Update_Solution = 45*/
			Update_Solution = 45,
			/** Update_Statistic_Intervals = 24*/
			Update_Statistic_Intervals = 24,
			/** Updated_Deactived_On_for_Resolved_Cases_job = 87*/
			Updated_Deactived_On_for_Resolved_Cases_job = 87,
			/** Workflow = 10*/
			Workflow = 10
		}
		enum OwningExtensionTypeCode {
		}
		enum PrimaryEntityType {
		}
		enum RegardingObjectTypeCode {
		}
		enum StateCode {
			/** Completed = 3*/
			Completed = 3,
			/** Locked = 2*/
			Locked = 2,
			/** Ready = 0*/
			Ready = 0,
			/** Suspended = 1*/
			Suspended = 1
		}
		enum StatusCode {
			/** Canceled = 32*/
			Canceled = 32,
			/** Canceling = 22*/
			Canceling = 22,
			/** Failed = 31*/
			Failed = 31,
			/** In_Progress = 20*/
			In_Progress = 20,
			/** Pausing = 21*/
			Pausing = 21,
			/** Succeeded = 30*/
			Succeeded = 30,
			/** Waiting = 10*/
			Waiting = 10,
			/** Waiting_For_Resources = 0*/
			Waiting_For_Resources = 0
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}