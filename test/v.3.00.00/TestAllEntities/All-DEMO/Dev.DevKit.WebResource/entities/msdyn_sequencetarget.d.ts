//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_sequencetarget_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Date and time when the record was connected to the sequence. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_parentsequence: DevKit.Controls.Lookup;
		}
		interface Navigation {
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navConnections: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_sequencetarget_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_sequencetarget_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_sequencetarget_Information */
		Body: DevKit.Formmsdyn_sequencetarget_Information.Body;
		/** The Header section of form msdyn_sequencetarget_Information */
		Header: DevKit.Formmsdyn_sequencetarget_Information.Header;
		/** The Navigation of form msdyn_sequencetarget_Information */
		Navigation: DevKit.Formmsdyn_sequencetarget_Information.Navigation;
		/** The SidePanes of form msdyn_sequencetarget_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_sequencetargetApi {
		/**
		* DynamicsCrm.DevKit msdyn_sequencetargetApi
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
		/** Date and time when the record was connected to the sequence. */
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
		msdyn_appliedsequenceinstance: DevKit.WebApi.LookupValue;
		/** The current step count for the connected sequence. */
		msdyn_currentstepcount: DevKit.WebApi.IntegerValue;
		/** The current step name of the Sequence Target Step entity. */
		msdyn_currentstepname: DevKit.WebApi.StringValue;
		/** Shows the sub type of sequence target step */
		msdyn_currentstepsubtype: DevKit.WebApi.OptionSetValue;
		msdyn_currentsteptype: DevKit.WebApi.OptionSetValue;
		/** Reason for deactivation of sequence target */
		msdyn_deactivatereason: DevKit.WebApi.OptionSetValue;
		/** MS Flow Run Identifier */
		msdyn_msflowrunid: DevKit.WebApi.StringValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		msdyn_parentsequence: DevKit.WebApi.LookupValue;
		/** Version of the sequence */
		msdyn_ParentSequenceVersion: DevKit.WebApi.IntegerValue;
		/** The information about record to which this sequence instance is related */
		msdyn_regarding: DevKit.WebApi.StringValue;
		/** Unique identifier for Segment associated with Sequence Target. */
		msdyn_segment: DevKit.WebApi.LookupValue;
		/** Unique identifier for entity instances */
		msdyn_sequencetargetId: DevKit.WebApi.GuidValue;
		/** It stores unique key for each record. */
		msdyn_sequencetargetuniquekey: DevKit.WebApi.StringValue;
		/** Target Record */
		msdyn_target: DevKit.WebApi.LookupValue;
		/** The total step count for the connected sequence. */
		msdyn_totalstepcount: DevKit.WebApi.IntegerValue;
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
		/** Status of the Sequence Target */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Sequence Target */
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
	namespace msdyn_sequencetarget {
		enum msdyn_currentstepsubtype {
			/** 0 */
			Default,
			/** 3 */
			LinkedInConnect,
			/** 2 */
			LinkedInGetIntroduced,
			/** 4 */
			LinkedInMail,
			/** 1 */
			LinkedInResearch
		}
		enum msdyn_currentsteptype {
			/** 4 */
			Auto_action,
			/** 3 */
			Automated_Email,
			/** 4202 */
			Email,
			/** 5 */
			LinkedIn_action,
			/** 4210 */
			Phone_call,
			/** 1 */
			Simple_Condition,
			/** 4212 */
			Task,
			/** 0 */
			Wait
		}
		enum msdyn_deactivatereason {
			/** 3 */
			Exit_Criterion_Met,
			/** 1 */
			Parent_Sequence_Deactivated,
			/** 2 */
			Regarding_Entity_Deactivated,
			/** 0 */
			User_Disconnected
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 3 */
			Completed,
			/** 2 */
			Connected,
			/** 1 */
			Connecting,
			/** 5 */
			Disconnected,
			/** 4 */
			Error
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