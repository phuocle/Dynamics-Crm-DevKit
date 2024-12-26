//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_intent_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_intententity_intentgroupid_msdyn_intent: DevKit.Controls.NavigationItem,
			msdyn_intentsolutionmap_intentid_msdyn_intent: DevKit.Controls.NavigationItem,
			msdyn_msdyn_intent_msdyn_intent_parentgroupid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_intent_msdyn_intentattributeset_intentid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_intent_msdyn_intententity_intentid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_intent_activeintentgroupid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_intent_activeintentid: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_intent_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_intent_Information */
		Body: DevKit.Formmsdyn_intent_Information.Body;
		/** The Navigation of form msdyn_intent_Information */
		Navigation: DevKit.Formmsdyn_intent_Information.Navigation;
		/** The SidePanes of form msdyn_intent_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_intentApi {
		/**
		* DynamicsCrm.DevKit msdyn_intentApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.msdyn_intent.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		msdyn_harvestingsource: OptionSet.msdyn_intent.msdyn_harvestingsource;
		msdyn_intentfamilyid: string;
		/** Look up to msdyn_intentharvesting_batchjobstatus table */
		msdyn_intentharvesting_batchjobstatusid: string;
		/** Unique identifier for entity instances */
		msdyn_intentId: string;
		/** Text of intent string */
		msdyn_intentstring: string;
		/** Indicates if this is an intent group */
		msdyn_isgroup: boolean;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** occurrence count of the intent */
		msdyn_occurrencecount: number;
		/** occurrence count of the intent in last 12 months */
		msdyn_occurrencecount_last12months: number;
		/** occurrence count of the intent in last 30 days */
		msdyn_occurrencecount_last30days: number;
		/** Lookup to intent table, points to parent intent group */
		msdyn_parentgroupid: string;
		msdyn_reviewstate: OptionSet.msdyn_intent.msdyn_reviewstate;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the intent */
		statecode: OptionSet.msdyn_intent.statecode;
		/** Reason for the status of the intent */
		statuscode: OptionSet.msdyn_intent.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyn_harvestingsource: string;
			readonly msdyn_intentfamilyid: string;
			/** Look up to msdyn_intentharvesting_batchjobstatus table */
			readonly msdyn_intentharvesting_batchjobstatusid: string;
			/** Unique identifier for entity instances */
			readonly msdyn_intentId: string;
			/** Text of intent string */
			readonly msdyn_intentstring: string;
			/** Indicates if this is an intent group */
			readonly msdyn_isgroup: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** occurrence count of the intent */
			readonly msdyn_occurrencecount: string;
			/** occurrence count of the intent in last 12 months */
			readonly msdyn_occurrencecount_last12months: string;
			/** occurrence count of the intent in last 30 days */
			readonly msdyn_occurrencecount_last30days: string;
			/** Lookup to intent table, points to parent intent group */
			readonly msdyn_parentgroupid: string;
			readonly msdyn_reviewstate: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the intent */
			readonly statecode: string;
			/** Reason for the status of the intent */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_intent {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum msdyn_harvestingsource {
			/** 192350000 */
			Data_Execution_Run,
			/** 192350002 */
			Manually_Edited,
			/** 192350001 */
			Simulation
		}
		enum msdyn_reviewstate {
			/** 192350001 */
			Approved,
			/** 192350002 */
			Discarded,
			/** 192350000 */
			Pending
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}