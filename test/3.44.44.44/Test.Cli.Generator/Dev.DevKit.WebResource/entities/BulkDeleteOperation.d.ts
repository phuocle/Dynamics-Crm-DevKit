//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormBulkDeleteOperation_Information {
		interface tab_properties_Sections {
			details: DevKit.Controls.Section;
			querydetails: DevKit.Controls.Section;
		}
		interface tab_properties extends DevKit.Controls.ITab {
			Section: tab_properties_Sections;
		}
		interface Tabs {
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
		interface Navigation {

		}
	}
	class FormBulkDeleteOperation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form BulkDeleteOperation_Information */
		Body: DevKit.FormBulkDeleteOperation_Information.Body;
		/** The Navigation of form BulkDeleteOperation_Information */
		Navigation: DevKit.FormBulkDeleteOperation_Information.Navigation;
		/** The SidePanes of form BulkDeleteOperation_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormNew_bulk_record {
		interface tab_Legacy_1_Sections {
			general: DevKit.Controls.Section;
			options: DevKit.Controls.Section;
			result: DevKit.Controls.Section;
		}
		interface tab_Legacy_2_Sections {
			details: DevKit.Controls.Section;
			querydetails: DevKit.Controls.Section;
		}
		interface tab_Modern_1_Sections {
			New_Section: DevKit.Controls.Section;
		}
		interface tab_Legacy_1 extends DevKit.Controls.ITab {
			Section: tab_Legacy_1_Sections;
		}
		interface tab_Legacy_2 extends DevKit.Controls.ITab {
			Section: tab_Legacy_2_Sections;
		}
		interface tab_Modern_1 extends DevKit.Controls.ITab {
			Section: tab_Modern_1_Sections;
		}
		interface Tabs {
			Legacy_1: tab_Legacy_1;
			Legacy_2: tab_Legacy_2;
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
		interface Navigation {

		}
	}
	class FormNew_bulk_record extends DevKit.IForm {
		/**
		* New bulk record [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form New_bulk_record */
		Body: DevKit.FormNew_bulk_record.Body;
		/** The Navigation of form New_bulk_record */
		Navigation: DevKit.FormNew_bulk_record.Navigation;
		/** The SidePanes of form New_bulk_record */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormNew_bulk_record2 {
		interface tab_Legacy_1_Sections {
			general: DevKit.Controls.Section;
			options: DevKit.Controls.Section;
			result: DevKit.Controls.Section;
		}
		interface tab_Legacy_2_Sections {
			details: DevKit.Controls.Section;
			querydetails: DevKit.Controls.Section;
		}
		interface tab_Modern_1_Sections {
			New_Section: DevKit.Controls.Section;
		}
		interface tab_Legacy_1 extends DevKit.Controls.ITab {
			Section: tab_Legacy_1_Sections;
		}
		interface tab_Legacy_2 extends DevKit.Controls.ITab {
			Section: tab_Legacy_2_Sections;
		}
		interface tab_Modern_1 extends DevKit.Controls.ITab {
			Section: tab_Modern_1_Sections;
		}
		interface Tabs {
			Legacy_1: tab_Legacy_1;
			Legacy_2: tab_Legacy_2;
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
		interface Navigation {

		}
	}
	class FormNew_bulk_record2 extends DevKit.IForm {
		/**
		* New bulk record [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form New_bulk_record2 */
		Body: DevKit.FormNew_bulk_record2.Body;
		/** The Navigation of form New_bulk_record2 */
		Navigation: DevKit.FormNew_bulk_record2.Navigation;
		/** The SidePanes of form New_bulk_record2 */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormView_bulk_record {
		interface tab_Legacy_1_Sections {
			general: DevKit.Controls.Section;
			options: DevKit.Controls.Section;
			result: DevKit.Controls.Section;
		}
		interface tab_Legacy_2_Sections {
			details: DevKit.Controls.Section;
			querydetails: DevKit.Controls.Section;
		}
		interface tab_Modern_1_Sections {
			PCF_Section: DevKit.Controls.Section;
		}
		interface tab_Legacy_1 extends DevKit.Controls.ITab {
			Section: tab_Legacy_1_Sections;
		}
		interface tab_Legacy_2 extends DevKit.Controls.ITab {
			Section: tab_Legacy_2_Sections;
		}
		interface tab_Modern_1 extends DevKit.Controls.ITab {
			Section: tab_Modern_1_Sections;
		}
		interface Tabs {
			Legacy_1: tab_Legacy_1;
			Legacy_2: tab_Legacy_2;
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
		interface Navigation {

		}
	}
	class FormView_bulk_record extends DevKit.IForm {
		/**
		* View bulk record [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form View_bulk_record */
		Body: DevKit.FormView_bulk_record.Body;
		/** The Navigation of form View_bulk_record */
		Navigation: DevKit.FormView_bulk_record.Navigation;
		/** The SidePanes of form View_bulk_record */
		SidePanes: DevKit.SidePanes;
	}
	class BulkDeleteOperationApi {
		/**
		* DynamicsCrm.DevKit BulkDeleteOperationApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the system job that created this record */
		readonly AsyncOperationId: string;
		/** Unique identifier of the bulk deletion job. */
		readonly BulkDeleteOperationId: string;
		/** Unique identifier of the user who created the bulk deletion job. */
		readonly CreatedBy: string;
		/** Date and time when the bulk deletion job was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the bulkdeleteoperation. */
		readonly CreatedOnBehalfBy: string;
		/** Number of records that could not be deleted by the bulk deletion job. */
		readonly FailureCount: number;
		/** Information about if recurrence is defined for the bulk deletion job. */
		readonly IsRecurring: boolean;
		/** Unique identifier of the user who last modified the bulk deletion job. */
		readonly ModifiedBy: string;
		/** Date and time when the bulk deletion job record was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the bulkdeleteoperation. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the bulk deletion job. */
		readonly Name: string;
		/** Next scheduled time for the bulk deletion job to run. */
		readonly NextRun_UtcDateAndTime: Date;
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
		readonly ProcessingQEIndex: number;
		/** Status of the bulk deletion job. */
		readonly StateCode: OptionSet.BulkDeleteOperation.StateCode;
		/** Reason for the status of the bulk deletion job. */
		readonly StatusCode: OptionSet.BulkDeleteOperation.StatusCode;
		/** Number of records deleted by the bulk deletion job. */
		readonly SuccessCount: number;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
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
			/** 3 */
			Completed,
			/** 2 */
			Locked,
			/** 0 */
			Ready,
			/** 1 */
			Suspended
		}
		enum StatusCode {
			/** 32 */
			Canceled,
			/** 22 */
			Canceling,
			/** 31 */
			Failed,
			/** 20 */
			In_Progress,
			/** 12 */
			Paused,
			/** 21 */
			Pausing,
			/** 11 */
			Retrying,
			/** 30 */
			Succeeded,
			/** 10 */
			Waiting,
			/** 0 */
			Waiting_For_Resources
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}