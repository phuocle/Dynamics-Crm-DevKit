//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class RibbonClientMetadataApi {
		/**
		* DynamicsCrm.DevKit RibbonClientMetadataApi
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
		/** For internal use only. */
		readonly ComponentState: number | null;
		/** Entity logical name */
		EntityLogicalName: string | null;
		/** Ribbon context */
		RibbonContext: string | null;
		/** Unique identifier of a ribbon client metadata. */
		RibbonId: string | null;
		/** Unique identifier of the Ribbon client Metadata */
		readonly RibbonIdUnique: string | null;
		/** Ribbon representation in JSON format. */
		RibbonJson: string | null;
		/** Reference to the Ribbon JSON file on Azure. */
		readonly RibbonJsonFileRef_name: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentState: string;
			/** Entity logical name */
			readonly EntityLogicalName: string;
			/** Ribbon context */
			readonly RibbonContext: string;
			/** Unique identifier of a ribbon client metadata. */
			readonly RibbonId: string;
			/** Unique identifier of the Ribbon client Metadata */
			readonly RibbonIdUnique: string;
			/** Ribbon representation in JSON format. */
			readonly RibbonJson: string;
			/** Reference to the Ribbon JSON file on Azure. */
			readonly RibbonJsonFileRef_name: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace RibbonClientMetadata {
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