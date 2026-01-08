//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class EntityApi {
		/**
		* DynamicsCrm.DevKit EntityApi
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
		/** The address table name of this entity. */
		AddressTableName: string | null;
		/** The base table name of this entity. */
		BaseTableName: string | null;
		/** The collection name of this entity. */
		CollectionName: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.Entity.ComponentState | null;
		/** Unique identifier of the entity. */
		EntityId: string | null;
		/** The entity set name of this entity. */
		EntitySetName: string | null;
		/** The extension table name of this entity. */
		ExtensionTableName: string | null;
		/** The external collection name of this entity. */
		ExternalCollectionName: string | null;
		/** The external name of this entity. */
		ExternalName: string | null;
		/** Whether this entity is of type activity. */
		readonly IsActivity: boolean | null;
		/** The logical collection name of this entity. */
		LogicalCollectionName: string | null;
		/** The logical name of this entity. */
		LogicalName: string | null;
		/** The name of this Entity. */
		Name: string | null;
		/** The object type code of this entity. */
		readonly ObjectTypeCode: number | null;
		/** The original localized collection name of this entity. */
		OriginalLocalizedCollectionName: string | null;
		/** The original localized name of this entity. */
		OriginalLocalizedName: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** The parent controlling attribute name of this entity. */
		ParentControllingAttributeName: string | null;
		/** The physical name of this entity. */
		PhysicalName: string | null;
		/** The Report view name of this entity. */
		ReportViewName: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** The version number of this entity. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** The address table name of this entity. */
			readonly AddressTableName: string;
			/** The base table name of this entity. */
			readonly BaseTableName: string;
			/** The collection name of this entity. */
			readonly CollectionName: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the entity. */
			readonly EntityId: string;
			/** The entity set name of this entity. */
			readonly EntitySetName: string;
			/** The extension table name of this entity. */
			readonly ExtensionTableName: string;
			/** The external collection name of this entity. */
			readonly ExternalCollectionName: string;
			/** The external name of this entity. */
			readonly ExternalName: string;
			/** Whether this entity is of type activity. */
			readonly IsActivity: string;
			/** The logical collection name of this entity. */
			readonly LogicalCollectionName: string;
			/** The logical name of this entity. */
			readonly LogicalName: string;
			/** The name of this Entity. */
			readonly Name: string;
			/** The object type code of this entity. */
			readonly ObjectTypeCode: string;
			/** The original localized collection name of this entity. */
			readonly OriginalLocalizedCollectionName: string;
			/** The original localized name of this entity. */
			readonly OriginalLocalizedName: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** The parent controlling attribute name of this entity. */
			readonly ParentControllingAttributeName: string;
			/** The physical name of this entity. */
			readonly PhysicalName: string;
			/** The Report view name of this entity. */
			readonly ReportViewName: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** The version number of this entity. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Entity {
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