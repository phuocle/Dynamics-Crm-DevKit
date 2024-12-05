//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class TransformationParameterMappingApi {
		/**
		* DynamicsCrm.DevKit TransformationParameterMappingApi
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
		readonly ComponentState: OptionSet.TransformationParameterMapping.ComponentState;
		/** Unique identifier of the user who created the parameter mapping. */
		readonly CreatedBy: string;
		/** Date and time when the transformation parameter mapping was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the transformationparametermapping. */
		readonly CreatedOnBehalfBy: string;
		/** Transformation data for transformation parameter */
		Data: string;
		/** Data type of the transformation parameter. */
		DataTypeCode: OptionSet.TransformationParameterMapping.DataTypeCode;
		/** Version in which the component is introduced. */
		IntroducedVersion: string;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who last modified the transformation parameter mapping. */
		readonly ModifiedBy: string;
		/** Date and time when the transformation parameter mapping was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the transformationparametermapping. */
		readonly ModifiedOnBehalfBy: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Index of the array if the input parameter is an array. */
		ParameterArrayIndex: number;
		/** Parameter sequence number. */
		ParameterSequence: number;
		/** Type of transformation parameter. */
		ParameterTypeCode: OptionSet.TransformationParameterMapping.ParameterTypeCode;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Unique identifier of the transformation with which the parameter is associated. */
		TransformationMappingId: string;
		/** Unique identifier of the transformation parameter mapping. */
		TransformationParameterMappingId: string;
		/** Unique identifier of the Transformation Parameter Mapping. */
		readonly TransformationParameterMappingIdUnique: string;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the parameter mapping. */
			readonly CreatedBy: string;
			/** Date and time when the transformation parameter mapping was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the transformationparametermapping. */
			readonly CreatedOnBehalfBy: string;
			/** Transformation data for transformation parameter */
			readonly Data: string;
			/** Data type of the transformation parameter. */
			readonly DataTypeCode: string;
			/** Version in which the component is introduced. */
			readonly IntroducedVersion: string;
			/** Information that specifies whether this component is managed. */
			readonly IsManaged: string;
			/** Unique identifier of the user who last modified the transformation parameter mapping. */
			readonly ModifiedBy: string;
			/** Date and time when the transformation parameter mapping was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the transformationparametermapping. */
			readonly ModifiedOnBehalfBy: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Index of the array if the input parameter is an array. */
			readonly ParameterArrayIndex: string;
			/** Parameter sequence number. */
			readonly ParameterSequence: string;
			/** Type of transformation parameter. */
			readonly ParameterTypeCode: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Unique identifier of the transformation with which the parameter is associated. */
			readonly TransformationMappingId: string;
			/** Unique identifier of the transformation parameter mapping. */
			readonly TransformationParameterMappingId: string;
			/** Unique identifier of the Transformation Parameter Mapping. */
			readonly TransformationParameterMappingIdUnique: string;
		}
	}
}
declare namespace OptionSet {
	namespace TransformationParameterMapping {
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
		enum DataTypeCode {
			/** 0 */
			Reference,
			/** 1 */
			Value
		}
		enum ParameterTypeCode {
			/** 0 */
			Input,
			/** 1 */
			Output
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