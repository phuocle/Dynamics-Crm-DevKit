//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_unifiedroutingsetuptracker_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_unifiedroutingsetuptracker_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_unifiedroutingsetuptracker_Information */
		Body: DevKit.Formmsdyn_unifiedroutingsetuptracker_Information.Body;
		/** The Process of form msdyn_unifiedroutingsetuptracker_Information */
		Process: DevKit.Formmsdyn_unifiedroutingsetuptracker_Information.Process;
		/** The SidePanes of form msdyn_unifiedroutingsetuptracker_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_unifiedroutingsetuptrackerApi {
		/**
		* DynamicsCrm.DevKit msdyn_unifiedroutingsetuptrackerApi
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
		msdyn_enableunifiedrouting: DevKit.WebApi.BooleanValue;
		msdyn_errorcode: DevKit.WebApi.IntegerValue;
		msdyn_errormessage: DevKit.WebApi.StringValue;
		/** Execution Status */
		msdyn_executionstatus: DevKit.WebApi.OptionSetValue;
		msdyn_issuccessnotificationdisplayed: DevKit.WebApi.BooleanValue;
		msdyn_isTeachingBubbleDisplayed: DevKit.WebApi.BooleanValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		msdyn_servicerequestid: DevKit.WebApi.StringValue;
		msdyn_token: DevKit.WebApi.StringValue;
		msdyn_transactionid: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_unifiedroutingsetuptrackerId: DevKit.WebApi.GuidValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the Unified Routing Setup Tracker */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Unified Routing Setup Tracker */
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
	namespace msdyn_unifiedroutingsetuptracker {
		enum msdyn_executionstatus {
			/** 1 */
			Completed,
			/** 5 */
			Deprovisioning_Completed,
			/** 4 */
			Deprovisioning_Started,
			/** 8 */
			Failed,
			/** 3 */
			Provisioning_Completed,
			/** 2 */
			Provisioning_Started,
			/** 7 */
			Record_Created,
			/** 0 */
			Started,
			/** 6 */
			Toggled
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