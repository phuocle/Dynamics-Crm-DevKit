//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class EmailHashApi {
		/**
		* DynamicsCrm.DevKit EmailHashApi
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
		/** Unique identifier of the activity with which the hash is associated. */
		ActivityId: string;
		/** Shows the date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the email hash. */
		EmailHashId: string;
		/** Hash value. */
		Hash: number;
		/** Hash type. */
		HashType: number;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Unique identifier of the business unit that owns the email hash. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the user who owns the email hash. */
		readonly OwningUser: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the activity with which the hash is associated. */
			readonly ActivityId: string;
			/** Shows the date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the email hash. */
			readonly EmailHashId: string;
			/** Hash value. */
			readonly Hash: string;
			/** Hash type. */
			readonly HashType: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the email hash. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the user who owns the email hash. */
			readonly OwningUser: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace EmailHash {
		enum OwnerIdType {
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