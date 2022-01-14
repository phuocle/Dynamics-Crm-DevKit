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
			/** Information about if recurrence is defined for the bulk deletion job. */
			IsRecurring: DevKit.Controls.Boolean;
			/** Unique identifier of the user who last modified the bulk deletion job. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the bulk deletion job record was last modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Name of the bulk deletion job. */
			Name: DevKit.Controls.String;
			/** Next scheduled time for the bulk deletion job to run. */
			NextRun: DevKit.Controls.DateTime;
			/** Unique identifier of the user or team who owns the bulk delete operation. */
			OwnerId: DevKit.Controls.Lookup;
			/** Reason for the status of the bulk deletion job. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Number of records deleted by the bulk deletion job. */
			SuccessCount: DevKit.Controls.Integer;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormBulkDeleteOperation_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form BulkDeleteOperation_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form BulkDeleteOperation_Information */
		Body: DevKit.FormBulkDeleteOperation_Information.Body;
		/** The Process of form BulkDeleteOperation_Information */
		Process: DevKit.FormBulkDeleteOperation_Information.Process;
		/** The SidePanes of form BulkDeleteOperation_Information */
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the system job that created this record */
		AsyncOperationId: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the bulk deletion job. */
		BulkDeleteOperationId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the user who created the bulk deletion job. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the bulk deletion job was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the bulkdeleteoperation. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Number of records that could not be deleted by the bulk deletion job. */
		FailureCount: DevKit.WebApi.IntegerValueReadonly;
		/** Information about if recurrence is defined for the bulk deletion job. */
		IsRecurring: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who last modified the bulk deletion job. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the bulk deletion job record was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the bulkdeleteoperation. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the bulk deletion job. */
		Name: DevKit.WebApi.StringValueReadonly;
		/** Next scheduled time for the bulk deletion job to run. */
		NextRun_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Fetch XML of the ordered query set. */
		OrderedQuerySetXml: DevKit.WebApi.StringValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValueReadonly;
		/** Business unit that owns the bulk deletion job. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Business user what owns the bulk delete operation. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Index of the ordered query expression that defines the deletion set. */
		ProcessingQEIndex: DevKit.WebApi.IntegerValueReadonly;
		/** Status of the bulk deletion job. */
		StateCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Reason for the status of the bulk deletion job. */
		StatusCode: DevKit.WebApi.OptionSetValueReadonly;
		/** Number of records deleted by the bulk deletion job. */
		SuccessCount: DevKit.WebApi.IntegerValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}