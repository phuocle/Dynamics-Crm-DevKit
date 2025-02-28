﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class EntityApi {
		/**
		* DynamicsCrm.DevKit EntityApi
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
		/** The address table name of this entity. */
		AddressTableName: string;
		/** The base table name of this entity. */
		BaseTableName: string;
		/** The collection name of this entity. */
		CollectionName: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.Entity.ComponentState;
		/** Unique identifier of the entity. */
		EntityId: string;
		/** The entity set name of this entity. */
		EntitySetName: string;
		/** The extension table name of this entity. */
		ExtensionTableName: string;
		/** The external collection name of this entity. */
		ExternalCollectionName: string;
		/** The external name of this entity. */
		ExternalName: string;
		/** Whether this entity is of type activity. */
		readonly IsActivity: boolean;
		/** The logical collection name of this entity. */
		LogicalCollectionName: string;
		/** The logical name of this entity. */
		LogicalName: string;
		/** The name of this Entity. */
		Name: string;
		/** The object type code of this entity. */
		readonly ObjectTypeCode: number;
		/** The original localized collection name of this entity. */
		OriginalLocalizedCollectionName: string;
		/** The original localized name of this entity. */
		OriginalLocalizedName: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** The parent controlling attribute name of this entity. */
		ParentControllingAttributeName: string;
		/** The physical name of this entity. */
		PhysicalName: string;
		/** The Report view name of this entity. */
		ReportViewName: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** The version number of this entity. */
		readonly VersionNumber: number;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}