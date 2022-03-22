//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class EntityDataSourceApi {
		/**
		* DynamicsCrm.DevKit EntityDataSourceApi
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
		/** For internal use only. */
		readonly ComponentState: OptionSet.EntityDataSource.ComponentState;
		/** JSON data representing values from a data source entity as individual fields. */
		ConnectionDefinition: string;
		/** JSON data representing secrets in a data source entity as individual fields. */
		ConnectionDefinitionSecrets: string;
		/** Enter additional information to describe the environment this data source targets and the purpose of this system. */
		Description: string;
		/** Choose the entity dataprovider for the entity datasource. */
		EntityDataProviderId: string;
		/** Unique identifier of the Data Source Id */
		EntityDataSourceId: string;
		/** For internal use only. */
		readonly EntityDataSourceIdUnique: string;
		/** Entity Logical Name */
		EntityName1: string;
		/** Version in which the form is introduced. */
		IntroducedVersion: string;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Name of this data source. This name appears in the data source drop-down when creating a new entity. */
		Name: string;
		/** Unique identifier for the organization. */
		readonly OrganizationId: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
	}
}
declare namespace OptionSet {
	namespace EntityDataSource {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
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