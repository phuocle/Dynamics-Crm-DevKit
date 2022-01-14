//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ocruleitem_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** The Work stream that this Rule item belongs to */
			msdyn_liveworkstream: DevKit.Controls.Lookup;
		}
		interface Tabs {
		}
		interface Body {
			/** Description of the rule item. */
			Description: DevKit.Controls.String;
			/** Assigned Queue Id */
			msdyn_cdsqueueassignid: DevKit.Controls.Lookup;
			/** Condition expression FetchXML of RuleItem */
			msdyn_Condition: DevKit.Controls.String;
			/** The Work stream that this Rule item belongs to */
			msdyn_liveworkstream: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_ocruleitem_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_ocruleitem_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocruleitem_Information */
		Body: DevKit.Formmsdyn_ocruleitem_Information.Body;
		/** The Header section of form msdyn_ocruleitem_Information */
		Header: DevKit.Formmsdyn_ocruleitem_Information.Header;
		/** The Process of form msdyn_ocruleitem_Information */
		Process: DevKit.Formmsdyn_ocruleitem_Information.Process;
		/** The SidePanes of form msdyn_ocruleitem_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_ocruleitemApi {
		/**
		* DynamicsCrm.DevKit msdyn_ocruleitemApi
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
		/** Description of the rule item. */
		Description: DevKit.WebApi.StringValue;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Action expression of Rule item in Omni channel */
		msdyn_Action: DevKit.WebApi.StringValue;
		/** Assigned to User or Queue. */
		msdyn_Assignedto: DevKit.WebApi.OptionSetValue;
		/** Assigned Queue Id */
		msdyn_cdsqueueassignid: DevKit.WebApi.LookupValue;
		/** Condition expression FetchXML of RuleItem */
		msdyn_Condition: DevKit.WebApi.StringValue;
		/** Condition expression Json of RuleItem */
		msdyn_Expression: DevKit.WebApi.StringValue;
		/** The Work stream that this Rule item belongs to */
		msdyn_liveworkstream: DevKit.WebApi.LookupValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_ocruleitemId: DevKit.WebApi.GuidValue;
		/** Priority of Rule item in a Work stream */
		msdyn_priority: DevKit.WebApi.StringValue;
		/** Assigned Queue Id */
		msdyn_QueueAssignId: DevKit.WebApi.LookupValue;
		/** Metadata Json of RuleItem */
		msdyn_Rulejson: DevKit.WebApi.StringValue;
		/** Assigned User Id */
		msdyn_UserAssignId: DevKit.WebApi.LookupValue;
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
		/** Status of the Rule item */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Rule item */
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
	namespace msdyn_ocruleitem {
		enum msdyn_Assignedto {
			/** 2 */
			Agent,
			/** 1 */
			Queue
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
			/** 2 */
			Inactive
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