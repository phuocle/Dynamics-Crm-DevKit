//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class ClientUpdateApi {
		/**
		* DynamicsCrm.DevKit ClientUpdateApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Unique identifier of the client update. */
		ClientUpdateId: string | null;
		/** For internal use only. Date and time when the ClientUpdate script was created on server. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Description of the client update. */
		Description: string | null;
		/** Contents of the client update. */
		SqlScript: string | null;
		readonly VersionNumber: number | null;
		/** For internal use only. Should be set by client to 1 after action was executed. */
		WasExecuted: boolean | null;
		/** For internal use only. Values are: 1 - Before SchemaChanges; 2 - After SchemaChanges but before Download data; 3 - After download data. */
		WhenExecute: OptionSet.ClientUpdate.WhenExecute | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** After_download_data = 3*/
			After_download_data = 3,
			/** After_SchemaChanges_but_before_Download_data = 2*/
			After_SchemaChanges_but_before_Download_data = 2,
			/** Before_SchemaChanges = 1*/
			Before_SchemaChanges = 1
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}