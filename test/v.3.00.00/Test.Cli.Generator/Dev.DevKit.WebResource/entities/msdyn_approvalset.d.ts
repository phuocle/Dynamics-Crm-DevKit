//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_approvalset_Information {
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			msdyn_ActionType: DevKit.Controls.OptionSet;
			/** The approver that approves the approval set. */
			msdyn_Approver: DevKit.Controls.Lookup;
			/** Shows the entry type of the project approvals. */
			msdyn_EntryType: DevKit.Controls.OptionSet;
			/** Number of times this Project Approval Set can be retried. */
			msdyn_LifeTime: DevKit.Controls.Integer;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Shows the project for the approval set. */
			msdyn_Project: DevKit.Controls.Lookup;
			/** Shows the latest system job that ran the project approval set. */
			msdyn_SystemJobId: DevKit.Controls.String;
			/** The target status for each of the approval items in the set. */
			msdyn_TargetStatus: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Reason for the status of the Approval Set */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			ProjectApprovalsSubGrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_approvalset_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_approvalset_Information */
		Body: DevKit.Formmsdyn_approvalset_Information.Body;
		/** The Process of form msdyn_approvalset_Information */
		Process: DevKit.Formmsdyn_approvalset_Information.Process;
		/** The Grid of form msdyn_approvalset_Information */
		Grid: DevKit.Formmsdyn_approvalset_Information.Grid;
		/** The SidePanes of form msdyn_approvalset_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_approvalsetApi {
		/**
		* DynamicsCrm.DevKit msdyn_approvalsetApi
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
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		msdyn_ActionType: DevKit.WebApi.OptionSetValue;
		/** Unique identifier for entity instances */
		msdyn_approvalsetId: DevKit.WebApi.GuidValue;
		/** The approver that approves the approval set. */
		msdyn_Approver: DevKit.WebApi.LookupValue;
		/** Shows the entry type of the project approvals. */
		msdyn_EntryType: DevKit.WebApi.OptionSetValue;
		/** Number of times this Project Approval Set can be retried. */
		msdyn_LifeTime: DevKit.WebApi.IntegerValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Shows the project for the approval set. */
		msdyn_Project: DevKit.WebApi.LookupValue;
		/** Shows the latest system job that ran the project approval set. */
		msdyn_SystemJobId: DevKit.WebApi.StringValue;
		/** The target status for each of the approval items in the set. */
		msdyn_TargetStatus: DevKit.WebApi.OptionSetValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Approval Set */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Approval Set */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_approvalset {
		enum msdyn_ActionType {
			/** 192350003 */
			Approve,
			/** 192350004 */
			Cancel,
			/** 192350002 */
			Recall,
			/** 192350001 */
			Reject,
			/** 192350000 */
			Submit,
			/** 192350999 */
			Unknown
		}
		enum msdyn_EntryType {
			/** 192350001 */
			Expense,
			/** 192350000 */
			Time
		}
		enum msdyn_TargetStatus {
			/** 192350002 */
			Approved,
			/** 192350000 */
			Draft,
			/** 192350004 */
			Recall_Requested,
			/** 192350003 */
			Rejected,
			/** 192350001 */
			Submitted,
			/** 192350999 */
			Unknown
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 192350004 */
			Completed,
			/** 192350003 */
			Failed,
			/** 2 */
			Inactive,
			/** 192350002 */
			Partially_Completed,
			/** 192350001 */
			Processing,
			/** 192350000 */
			Queued
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