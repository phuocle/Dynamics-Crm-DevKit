//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormBulkDeleteOperation_Information {
		interface tab_properties_Sections {
			/** Details */
			details: DevKit.Controls.Section;
			/** Query Details */
			querydetails: DevKit.Controls.Section;
		}
		/** Properties */
		interface tab_properties extends DevKit.Controls.ITab {
			Section: tab_properties_Sections;
		}
		interface Tabs {
			/** Properties */
			properties: tab_properties;
		}
		interface Body {
			Tab: Tabs;
			advfindcontrol: DevKit.Controls.IFrame;
			/** Unique identifier of the user who created the bulk deletion job. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the bulk deletion job was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Number of records that could not be deleted by the bulk deletion job. */
			FailureCount: DevKit.Controls.Integer;
			/** Unique identifier of the user who last modified the bulk deletion job. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the bulk deletion job record was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Name of the bulk deletion job. */
			Name: DevKit.Controls.String;
			/** Next scheduled time for the bulk deletion job to run. */
			NextRun: DevKit.Controls.DateTime;
			/** Information about if recurrence is defined for the bulk deletion job. */
			IsRecurring: DevKit.Controls.Boolean;
			/** Reason for the status of the bulk deletion job. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Number of records deleted by the bulk deletion job. */
			SuccessCount: DevKit.Controls.Integer;
		}
	}
	export class FormBulkDeleteOperation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form BulkDeleteOperation_Information */
		Body: DevKit.FormBulkDeleteOperation_Information.Body;
	}
	namespace FormNew_bulk_record {
		interface tab_Legacy_1_Sections {
			/** General */
			general: DevKit.Controls.Section;
			/** Options */
			options: DevKit.Controls.Section;
			/** Results */
			result: DevKit.Controls.Section;
		}
		interface tab_Legacy_2_Sections {
			/** Details */
			details: DevKit.Controls.Section;
			/** Query Details */
			querydetails: DevKit.Controls.Section;
		}
		interface tab_Modern_1_Sections {
			/** New Section */
			New_Section: DevKit.Controls.Section;
		}
		/** General */
		interface tab_Legacy_1 extends DevKit.Controls.ITab {
			Section: tab_Legacy_1_Sections;
		}
		/** Properties */
		interface tab_Legacy_2 extends DevKit.Controls.ITab {
			Section: tab_Legacy_2_Sections;
		}
		/** General */
		interface tab_Modern_1 extends DevKit.Controls.ITab {
			Section: tab_Modern_1_Sections;
		}
		interface Tabs {
			/** General */
			Legacy_1: tab_Legacy_1;
			/** Properties */
			Legacy_2: tab_Legacy_2;
			/** General */
			Modern_1: tab_Modern_1;
		}
		interface Body {
			Tab: Tabs;
			advfindcontrol: DevKit.Controls.IFrame;
			/** Unique identifier of the user who created the bulk deletion job. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the bulk deletion job was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Number of records that could not be deleted by the bulk deletion job. */
			FailureCount: DevKit.Controls.Integer;
			/** Unique identifier of the user who last modified the bulk deletion job. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the bulk deletion job record was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			msdyn_pcfcolumn: DevKit.Controls.ActionCards;
			/** Name of the bulk deletion job. */
			Name: DevKit.Controls.String;
			/** Next scheduled time for the bulk deletion job to run. */
			NextRun: DevKit.Controls.DateTime;
			/** Information about if recurrence is defined for the bulk deletion job. */
			IsRecurring: DevKit.Controls.Boolean;
			/** Reason for the status of the bulk deletion job. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Number of records deleted by the bulk deletion job. */
			SuccessCount: DevKit.Controls.Integer;
		}
	}
	export class FormNew_bulk_record extends DevKit.IForm {
		/**
		* New bulk record [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form New_bulk_record */
		Body: DevKit.FormNew_bulk_record.Body;
	}
	namespace FormNew_bulk_record2 {
		interface tab_Legacy_1_Sections {
			/** General */
			general: DevKit.Controls.Section;
			/** Options */
			options: DevKit.Controls.Section;
			/** Results */
			result: DevKit.Controls.Section;
		}
		interface tab_Legacy_2_Sections {
			/** Details */
			details: DevKit.Controls.Section;
			/** Query Details */
			querydetails: DevKit.Controls.Section;
		}
		interface tab_Modern_1_Sections {
			/** New Section */
			New_Section: DevKit.Controls.Section;
		}
		/** General */
		interface tab_Legacy_1 extends DevKit.Controls.ITab {
			Section: tab_Legacy_1_Sections;
		}
		/** Properties */
		interface tab_Legacy_2 extends DevKit.Controls.ITab {
			Section: tab_Legacy_2_Sections;
		}
		/** General */
		interface tab_Modern_1 extends DevKit.Controls.ITab {
			Section: tab_Modern_1_Sections;
		}
		interface Tabs {
			/** General */
			Legacy_1: tab_Legacy_1;
			/** Properties */
			Legacy_2: tab_Legacy_2;
			/** General */
			Modern_1: tab_Modern_1;
		}
		interface Body {
			Tab: Tabs;
			advfindcontrol: DevKit.Controls.IFrame;
			/** Unique identifier of the user who created the bulk deletion job. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the bulk deletion job was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Number of records that could not be deleted by the bulk deletion job. */
			FailureCount: DevKit.Controls.Integer;
			/** Unique identifier of the user who last modified the bulk deletion job. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the bulk deletion job record was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			msdyn_pcfcolumn: DevKit.Controls.ActionCards;
			/** Name of the bulk deletion job. */
			Name: DevKit.Controls.String;
			/** Next scheduled time for the bulk deletion job to run. */
			NextRun: DevKit.Controls.DateTime;
			/** Information about if recurrence is defined for the bulk deletion job. */
			IsRecurring: DevKit.Controls.Boolean;
			/** Reason for the status of the bulk deletion job. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Number of records deleted by the bulk deletion job. */
			SuccessCount: DevKit.Controls.Integer;
		}
	}
	export class FormNew_bulk_record2 extends DevKit.IForm {
		/**
		* New bulk record [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form New_bulk_record2 */
		Body: DevKit.FormNew_bulk_record2.Body;
	}
	namespace FormView_bulk_record {
		interface tab_Legacy_1_Sections {
			/** General */
			general: DevKit.Controls.Section;
			/** Options */
			options: DevKit.Controls.Section;
			/** Results */
			result: DevKit.Controls.Section;
		}
		interface tab_Legacy_2_Sections {
			/** Details */
			details: DevKit.Controls.Section;
			/** Query Details */
			querydetails: DevKit.Controls.Section;
		}
		interface tab_Modern_1_Sections {
			/** PCF Section */
			PCF_Section: DevKit.Controls.Section;
		}
		/** General */
		interface tab_Legacy_1 extends DevKit.Controls.ITab {
			Section: tab_Legacy_1_Sections;
		}
		/** Properties */
		interface tab_Legacy_2 extends DevKit.Controls.ITab {
			Section: tab_Legacy_2_Sections;
		}
		/** General */
		interface tab_Modern_1 extends DevKit.Controls.ITab {
			Section: tab_Modern_1_Sections;
		}
		interface Tabs {
			/** General */
			Legacy_1: tab_Legacy_1;
			/** Properties */
			Legacy_2: tab_Legacy_2;
			/** General */
			Modern_1: tab_Modern_1;
		}
		interface Body {
			Tab: Tabs;
			advfindcontrol: DevKit.Controls.IFrame;
			/** Unique identifier of the user who created the bulk deletion job. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the bulk deletion job was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Number of records that could not be deleted by the bulk deletion job. */
			FailureCount: DevKit.Controls.Integer;
			/** Unique identifier of the user who last modified the bulk deletion job. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the bulk deletion job record was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			msdyn_pcfcolumn: DevKit.Controls.ActionCards;
			/** Name of the bulk deletion job. */
			Name: DevKit.Controls.String;
			/** Next scheduled time for the bulk deletion job to run. */
			NextRun: DevKit.Controls.DateTime;
			/** Information about if recurrence is defined for the bulk deletion job. */
			IsRecurring: DevKit.Controls.Boolean;
			/** Reason for the status of the bulk deletion job. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Number of records deleted by the bulk deletion job. */
			SuccessCount: DevKit.Controls.Integer;
		}
	}
	export class FormView_bulk_record extends DevKit.IForm {
		/**
		* View bulk record [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form View_bulk_record */
		Body: DevKit.FormView_bulk_record.Body;
	}
	export class BulkDeleteOperationApi {
		/**
		* DynamicsCrm.DevKit BulkDeleteOperationApi
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
		/** Unique identifier of the system job that created this record */
		readonly AsyncOperationId: string | null;
		/** Unique identifier of the bulk deletion job. */
		readonly BulkDeleteOperationId: string | null;
		/** Unique identifier of the user who created the bulk deletion job. */
		readonly CreatedBy: string | null;
		/** Date and time when the bulk deletion job was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the bulkdeleteoperation. */
		readonly CreatedOnBehalfBy: string | null;
		/** Number of records that could not be deleted by the bulk deletion job. */
		readonly FailureCount: number | null;
		/** Information about if recurrence is defined for the bulk deletion job. */
		readonly IsRecurring: boolean | null;
		/** Unique identifier of the user who last modified the bulk deletion job. */
		readonly ModifiedBy: string | null;
		/** Date and time when the bulk deletion job record was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the bulkdeleteoperation. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the bulk deletion job. */
		readonly Name: string | null;
		/** Next scheduled time for the bulk deletion job to run. */
		readonly NextRun_UtcDateAndTime: Date | null;
		/** Fetch XML of the ordered query set. */
		readonly OrderedQuerySetXml: string | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string | null;
		/** Business unit that owns the bulk deletion job. */
		readonly OwningBusinessUnit: string | null;
		/** Business user what owns the bulk delete operation. */
		readonly OwningUser: string | null;
		/** Index of the ordered query expression that defines the deletion set. */
		readonly ProcessingQEIndex: number | null;
		/** Status of the bulk deletion job. */
		readonly StateCode: OptionSet.BulkDeleteOperation.StateCode | null;
		/** Reason for the status of the bulk deletion job. */
		readonly StatusCode: OptionSet.BulkDeleteOperation.StatusCode | null;
		/** Number of records deleted by the bulk deletion job. */
		readonly SuccessCount: number | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the system job that created this record */
			readonly AsyncOperationId: string;
			/** Unique identifier of the bulk deletion job. */
			readonly BulkDeleteOperationId: string;
			/** Unique identifier of the user who created the bulk deletion job. */
			readonly CreatedBy: string;
			/** Date and time when the bulk deletion job was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the bulkdeleteoperation. */
			readonly CreatedOnBehalfBy: string;
			/** Number of records that could not be deleted by the bulk deletion job. */
			readonly FailureCount: string;
			/** Information about if recurrence is defined for the bulk deletion job. */
			readonly IsRecurring: string;
			/** Unique identifier of the user who last modified the bulk deletion job. */
			readonly ModifiedBy: string;
			/** Date and time when the bulk deletion job record was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the bulkdeleteoperation. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the bulk deletion job. */
			readonly Name: string;
			/** Next scheduled time for the bulk deletion job to run. */
			readonly NextRun_UtcDateAndTime: string;
			/** Fetch XML of the ordered query set. */
			readonly OrderedQuerySetXml: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Business unit that owns the bulk deletion job. */
			readonly OwningBusinessUnit: string;
			/** Business user what owns the bulk delete operation. */
			readonly OwningUser: string;
			/** Index of the ordered query expression that defines the deletion set. */
			readonly ProcessingQEIndex: string;
			/** Status of the bulk deletion job. */
			readonly StateCode: string;
			/** Reason for the status of the bulk deletion job. */
			readonly StatusCode: string;
			/** Number of records deleted by the bulk deletion job. */
			readonly SuccessCount: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace BulkDeleteOperation {
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
			/** Paused = 12*/
			Paused = 12,
			/** Pausing = 21*/
			Pausing = 21,
			/** Retrying = 11*/
			Retrying = 11,
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