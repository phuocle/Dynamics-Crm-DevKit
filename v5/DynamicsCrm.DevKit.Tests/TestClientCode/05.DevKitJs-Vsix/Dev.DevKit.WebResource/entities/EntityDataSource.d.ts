//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class EntityDataSourceApi {
		/**
		* DynamicsCrm.DevKit EntityDataSourceApi
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
		readonly ComponentState: OptionSet.EntityDataSource.ComponentState | null;
		/** JSON data representing values from a data source entity as individual fields. */
		ConnectionDefinition: string | null;
		/** JSON data representing secrets in a data source entity as individual fields. */
		ConnectionDefinitionSecrets: string | null;
		/** Enter additional information to describe the environment this data source targets and the purpose of this system. */
		Description: string | null;
		/** Choose the entity dataprovider for the entity datasource. */
		EntityDataProviderId: string | null;
		/** Unique identifier of the Data Source Id */
		EntityDataSourceId: string | null;
		/** For internal use only. */
		readonly EntityDataSourceIdUnique: string | null;
		/** Entity Logical Name */
		EntityName2: string | null;
		/** Version in which the form is introduced. */
		IntroducedVersion: string | null;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Name of this data source. This name appears in the data source drop-down when creating a new entity. */
		Name: string | null;
		/** Unique identifier for the organization. */
		readonly OrganizationId: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentState: string;
			/** JSON data representing values from a data source entity as individual fields. */
			readonly ConnectionDefinition: string;
			/** JSON data representing secrets in a data source entity as individual fields. */
			readonly ConnectionDefinitionSecrets: string;
			/** Enter additional information to describe the environment this data source targets and the purpose of this system. */
			readonly Description: string;
			/** Choose the entity dataprovider for the entity datasource. */
			readonly EntityDataProviderId: string;
			/** Unique identifier of the Data Source Id */
			readonly EntityDataSourceId: string;
			/** For internal use only. */
			readonly EntityDataSourceIdUnique: string;
			/** Entity Logical Name */
			readonly EntityName2: string;
			/** Version in which the form is introduced. */
			readonly IntroducedVersion: string;
			/** Information that specifies whether this component can be customized. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Name of this data source. This name appears in the data source drop-down when creating a new entity. */
			readonly Name: string;
			/** Unique identifier for the organization. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
		}
	}
}
declare namespace OptionSet {
	namespace EntityDataSource {
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