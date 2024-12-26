//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class msdyn_agentstatusApi {
		/**
		* DynamicsCrm.DevKit msdyn_agentstatusApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Lookup to systemuser entity */
		msdyn_agentid: string;
		/** Unique identifier for entity instances */
		msdyn_agentstatusId: string;
		/** Agent’s available unit-based capacity. */
		msdyn_availableunitscapacity: number;
		/** Date time when agent’s unit based capacity was updated */
		msdyn_capacitymodifiedon_UtcDateOnly: Date;
		/** Lookup to Presence entity. Current presence status of agent. Includes custom presence as well. */
		msdyn_currentpresenceid: string;
		/** Indicates if agent is logged in */
		msdyn_isagentloggedin: boolean;
		/** Indicates if agent is currently blocked by some profile */
		msdyn_isblockedbysomeprofile: boolean;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Lookup to SystemUser entity */
		msdyn_presencemodifiedby: string;
		/** Date time when agent’s presence was updated */
		msdyn_presencemodifiedon_UtcDateOnly: Date;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
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
		/** Status of the Agent Status */
		statecode: OptionSet.msdyn_agentstatus.statecode;
		/** Reason for the status of the Agent Status */
		statuscode: OptionSet.msdyn_agentstatus.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Lookup to systemuser entity */
			readonly msdyn_agentid: string;
			/** Unique identifier for entity instances */
			readonly msdyn_agentstatusId: string;
			/** Agent’s available unit-based capacity. */
			readonly msdyn_availableunitscapacity: string;
			/** Date time when agent’s unit based capacity was updated */
			readonly msdyn_capacitymodifiedon_UtcDateOnly: string;
			/** Lookup to Presence entity. Current presence status of agent. Includes custom presence as well. */
			readonly msdyn_currentpresenceid: string;
			/** Indicates if agent is logged in */
			readonly msdyn_isagentloggedin: string;
			/** Indicates if agent is currently blocked by some profile */
			readonly msdyn_isblockedbysomeprofile: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Lookup to SystemUser entity */
			readonly msdyn_presencemodifiedby: string;
			/** Date time when agent’s presence was updated */
			readonly msdyn_presencemodifiedon_UtcDateOnly: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
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
			/** Status of the Agent Status */
			readonly statecode: string;
			/** Reason for the status of the Agent Status */
			readonly statuscode: string;
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
	namespace msdyn_agentstatus {
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