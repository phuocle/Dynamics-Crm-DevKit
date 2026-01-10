//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class LanguageProvisioningStateApi {
		/**
		* DynamicsCrm.DevKit LanguageProvisioningStateApi
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
		/** Application Version */
		ApplicationVersion: string | null;
		/** Language Id */
		LanguageId: number | null;
		/** Unique identifier for entity instances */
		LanguageProvisioningStateId: string | null;
		/** Provisioning Stage */
		ProvisioningStage: OptionSet.LanguageProvisioningState.ProvisioningStage | null;
		/** Solution File Version */
		SolutionFileVersion: string | null;
		/** Solution Unique Name */
		SolutionUniqueName: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Application Version */
			readonly ApplicationVersion: string;
			/** Language Id */
			readonly LanguageId: string;
			/** Unique identifier for entity instances */
			readonly LanguageProvisioningStateId: string;
			/** Provisioning Stage */
			readonly ProvisioningStage: string;
			/** Solution File Version */
			readonly SolutionFileVersion: string;
			/** Solution Unique Name */
			readonly SolutionUniqueName: string;
		}
	}
}
declare namespace OptionSet {
	namespace LanguageProvisioningState {
		enum ProvisioningStage {
			/** FileBased = 1*/
			FileBased = 1,
			/** MetadataHelperDependent = 2*/
			MetadataHelperDependent = 2,
			/** Other = 4*/
			Other = 4,
			/** Ribbon = 5*/
			Ribbon = 5,
			/** SystemOnly = 3*/
			SystemOnly = 3
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