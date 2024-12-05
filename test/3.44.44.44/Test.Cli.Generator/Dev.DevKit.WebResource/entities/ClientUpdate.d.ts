//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ClientUpdateApi {
		/**
		* DynamicsCrm.DevKit ClientUpdateApi
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
		/** Unique identifier of the client update. */
		ClientUpdateId: string;
		/** For internal use only. Date and time when the ClientUpdate script was created on server. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Description of the client update. */
		Description: string;
		/** Contents of the client update. */
		SqlScript: string;
		readonly VersionNumber: number;
		/** For internal use only. Should be set by client to 1 after action was executed. */
		WasExecuted: boolean;
		/** For internal use only. Values are: 1 - Before SchemaChanges; 2 - After SchemaChanges but before Download data; 3 - After download data. */
		WhenExecute: OptionSet.ClientUpdate.WhenExecute;
		readonly FormattedValue: {
			/** Unique identifier of the client update. */
			readonly ClientUpdateId: string;
			/** For internal use only. Date and time when the ClientUpdate script was created on server. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Description of the client update. */
			readonly Description: string;
			/** Contents of the client update. */
			readonly SqlScript: string;
			readonly VersionNumber: string;
			/** For internal use only. Should be set by client to 1 after action was executed. */
			readonly WasExecuted: string;
			/** For internal use only. Values are: 1 - Before SchemaChanges; 2 - After SchemaChanges but before Download data; 3 - After download data. */
			readonly WhenExecute: string;
		}
	}
}
declare namespace OptionSet {
	namespace ClientUpdate {
		enum WhenExecute {
			/** 3 */
			After_download_data,
			/** 2 */
			After_SchemaChanges_but_before_Download_data,
			/** 1 */
			Before_SchemaChanges
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