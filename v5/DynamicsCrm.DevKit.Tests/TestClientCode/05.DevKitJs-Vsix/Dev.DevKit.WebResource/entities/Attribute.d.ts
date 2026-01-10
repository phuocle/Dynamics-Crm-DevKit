//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class AttributeApi {
		/**
		* DynamicsCrm.DevKit AttributeApi
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
		/** Unique identifier of the attribute. */
		AttributeId: string | null;
		/** Attribute Of */
		readonly AttributeOf: string | null;
		/** Attribute Type Id */
		readonly AttributeTypeId: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.Attribute.ComponentState | null;
		/** The external name of this attribute. */
		ExternalName: string | null;
		/** The logical name of this attribute. */
		LogicalName: string | null;
		/** The managed property logical name of this attribute. */
		ManagedPropertyLogicalName: string | null;
		/** The managed property parent attribute name of this attribute. */
		ManagedPropertyParentAttributeName: string | null;
		/** The name of this Attribute. */
		Name: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** The physical name of this attribute. */
		PhysicalName: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** The table column name of this attribute. */
		TableColumnName: string | null;
		/** Valid For Read API */
		readonly ValidForReadAPI: boolean | null;
		/** The version number of this attribute. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the attribute. */
			readonly AttributeId: string;
			/** Attribute Of */
			readonly AttributeOf: string;
			/** Attribute Type Id */
			readonly AttributeTypeId: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** The external name of this attribute. */
			readonly ExternalName: string;
			/** The logical name of this attribute. */
			readonly LogicalName: string;
			/** The managed property logical name of this attribute. */
			readonly ManagedPropertyLogicalName: string;
			/** The managed property parent attribute name of this attribute. */
			readonly ManagedPropertyParentAttributeName: string;
			/** The name of this Attribute. */
			readonly Name: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** The physical name of this attribute. */
			readonly PhysicalName: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** The table column name of this attribute. */
			readonly TableColumnName: string;
			/** Valid For Read API */
			readonly ValidForReadAPI: string;
			/** The version number of this attribute. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Attribute {
		enum ComponentState {
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
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