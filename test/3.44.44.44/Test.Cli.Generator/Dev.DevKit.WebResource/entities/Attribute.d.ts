//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class AttributeApi {
		/**
		* DynamicsCrm.DevKit AttributeApi
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
		/** Unique identifier of the attribute. */
		AttributeId: string;
		/** Attribute Of */
		readonly AttributeOf: string;
		/** Attribute Type Id */
		readonly AttributeTypeId: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.Attribute.ComponentState;
		/** The external name of this attribute. */
		ExternalName: string;
		/** The logical name of this attribute. */
		LogicalName: string;
		/** The managed property logical name of this attribute. */
		ManagedPropertyLogicalName: string;
		/** The managed property parent attribute name of this attribute. */
		ManagedPropertyParentAttributeName: string;
		/** The name of this Attribute. */
		Name: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** The physical name of this attribute. */
		PhysicalName: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** The table column name of this attribute. */
		TableColumnName: string;
		/** Valid For Read API */
		readonly ValidForReadAPI: boolean;
		/** The version number of this attribute. */
		readonly VersionNumber: number;
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