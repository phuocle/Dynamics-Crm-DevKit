//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class listoperationApi {
		/**
		* DynamicsCrm.DevKit listoperationApi
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
		/** Number of items added in the list operation. */
		Added: number;
		/** Input data required by the list operation on every processing batch. Used by asynchronous list operations only. */
		BatchInput: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** List operation error code. Populated when the list operation does not complete successfully. */
		ErrorCode: number;
		/** List operation error description. Populated when the list operation does not complete successfully. */
		ErrorDescription: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** List operation input data. */
		Input: string;
		/** Associated list identifier */
		ListId: string;
		/** Unique identifier for entity instances */
		listoperationId: string;
		/** The name of the custom entity. */
		ListOperationName: string;
		/** The primary name of the custom entity. */
		ListOperationPrimaryName: string;
		/** List operation log. */
		Log: string;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
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
		/** Number of items processed in the list operation. */
		Processed: number;
		/** Status of the List Operation */
		statecode: OptionSet.listoperation.statecode;
		/** Reason for the status of the List Operation */
		statuscode: OptionSet.listoperation.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** List operation type. */
		Type: OptionSet.listoperation.Type;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace listoperation {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 100000002 */
			Completed,
			/** 100000001 */
			Created,
			/** 100000003 */
			Failed,
			/** 100000000 */
			In_Progress,
			/** 2 */
			Inactive
		}
		enum Type {
			/** 100000001 */
			Add_members_by_id,
			/** 100000000 */
			Add_members_by_query,
			/** 100000003 */
			Remove_members_by_id,
			/** 100000002 */
			Remove_members_by_query
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}