//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class msdyn_nextactionApi {
		/**
		* DynamicsCrm.DevKit msdyn_nextactionApi
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
		/** JSON encoding of action-specific data */
		msdyn_actiondata: string;
		/** What action type does this record describe? */
		msdyn_actiontype: OptionSet.msdyn_nextaction.msdyn_actiontype;
		/** Primary name column. */
		msdyn_Name: string;
		/** Unique identifier for entity instances */
		msdyn_nextactionId: string;
		/** The record this action is for */
		msdyn_regarding: string;
		/** Date from when the Next Action is valid */
		msdyn_validfrom_UtcDateAndTime: Date;
		/** Date from when the Next Action is no longer valid */
		msdyn_validto_UtcDateAndTime: Date;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Next Action */
		statecode: OptionSet.msdyn_nextaction.statecode;
		/** Reason for the status of the Next Action */
		statuscode: OptionSet.msdyn_nextaction.statuscode;
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
			/** JSON encoding of action-specific data */
			readonly msdyn_actiondata: string;
			/** What action type does this record describe? */
			readonly msdyn_actiontype: string;
			/** Primary name column. */
			readonly msdyn_Name: string;
			/** Unique identifier for entity instances */
			readonly msdyn_nextactionId: string;
			/** The record this action is for */
			readonly msdyn_regarding: string;
			/** Date from when the Next Action is valid */
			readonly msdyn_validfrom_UtcDateAndTime: string;
			/** Date from when the Next Action is no longer valid */
			readonly msdyn_validto_UtcDateAndTime: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Next Action */
			readonly statecode: string;
			/** Reason for the status of the Next Action */
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
	namespace msdyn_nextaction {
		enum msdyn_actiontype {
			/** 100000002 */
			EmailFollowup,
			/** 100000000 */
			KnowledgeArticleDraftReview,
			/** 100000003 */
			ReplyToCustomer,
			/** 100000001 */
			ResolveCase
		}
		enum msdyn_regardingIdType {
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
			In_progress,
			/** 4 */
			Invalid,
			/** 1 */
			New,
			/** 5 */
			Rejected
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