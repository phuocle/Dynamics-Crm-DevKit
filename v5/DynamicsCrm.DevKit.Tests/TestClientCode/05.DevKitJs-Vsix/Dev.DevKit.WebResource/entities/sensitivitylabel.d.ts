//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class sensitivitylabelApi {
		/**
		* DynamicsCrm.DevKit sensitivitylabelApi
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
		/** The formats that the sensitivity label is applicable to. */
		readonly ApplicableTo: string | null;
		/** The color of the sensitivity label. */
		readonly Color: string | null;
		/** The description of the sensitivity label. */
		readonly Description: string | null;
		/** The display name of the sensitivity label. */
		readonly DisplayName: string | null;
		/** Indicates if the sensitivity label is the default. */
		readonly IsDefault: boolean | null;
		/** Indicates if the sensitivity label is enabled. */
		readonly IsEnabled: boolean | null;
		/** The label actions of the sensitivity label. */
		readonly LabelActions: string | null;
		/** The name of the sensitivity label. */
		readonly Name: string | null;
		/** Unique identifier of a parent sensitivity label. */
		readonly ParentSensitivityLabelId: string | null;
		/** The priority of the sensitivity label. */
		readonly Priority: number | null;
		/** Unique identifier of a Sensitivity Label. */
		readonly sensitivitylabelId: string | null;
		/** The tooltip of the sensitivity label. */
		readonly Tooltip: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** The formats that the sensitivity label is applicable to. */
			readonly ApplicableTo: string;
			/** The color of the sensitivity label. */
			readonly Color: string;
			/** The description of the sensitivity label. */
			readonly Description: string;
			/** The display name of the sensitivity label. */
			readonly DisplayName: string;
			/** Indicates if the sensitivity label is the default. */
			readonly IsDefault: string;
			/** Indicates if the sensitivity label is enabled. */
			readonly IsEnabled: string;
			/** The label actions of the sensitivity label. */
			readonly LabelActions: string;
			/** The name of the sensitivity label. */
			readonly Name: string;
			/** Unique identifier of a parent sensitivity label. */
			readonly ParentSensitivityLabelId: string;
			/** The priority of the sensitivity label. */
			readonly Priority: string;
			/** Unique identifier of a Sensitivity Label. */
			readonly sensitivitylabelId: string;
			/** The tooltip of the sensitivity label. */
			readonly Tooltip: string;
		}
	}
}
declare namespace OptionSet {
	namespace sensitivitylabel {
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