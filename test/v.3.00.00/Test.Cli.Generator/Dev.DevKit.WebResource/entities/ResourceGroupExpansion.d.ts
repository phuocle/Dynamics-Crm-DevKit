//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ResourceGroupExpansionApi {
		/**
		* DynamicsCrm.DevKit ResourceGroupExpansionApi
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
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Item that is part of expansion of resource identified by object ID. One object ID can have many item IDs. */
		ItemId: string;
		/** Code for retrieval method. */
		MethodCode: OptionSet.ResourceGroupExpansion.MethodCode;
		/** Date and time when the record was last modified. */
		ModifiedOn_UtcDateAndTime: Date;
		/** name */
		Name: string;
		/** Object being expanded. */
		ObjectId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Unique identifier of the resource expansion record. */
		ResourceGroupExpansionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Item that is part of expansion of resource identified by object ID. One object ID can have many item IDs. */
			readonly ItemId: string;
			/** Code for retrieval method. */
			readonly MethodCode: string;
			/** Date and time when the record was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** name */
			readonly Name: string;
			/** Object being expanded. */
			readonly ObjectId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Unique identifier of the resource expansion record. */
			readonly ResourceGroupExpansionId: string;
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
	namespace ResourceGroupExpansion {
		enum MethodCode {
			/** 5 */
			All_Resources,
			/** 8 */
			All_Subgroups,
			/** 0 */
			None,
			/** 7 */
			Parent_Groups,
			/** 1 */
			Participating_Resources,
			/** 4 */
			Resources,
			/** 2 */
			Schedulable_Resources,
			/** 6 */
			Subgroups,
			/** 3 */
			Supported_Services
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}