//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the parameter mapping. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the transformation parameter mapping was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the transformationparametermapping. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Transformation data for transformation parameter */
		Data: DevKit.WebApi.StringValue;
		/** Data type of the transformation parameter. */
		DataTypeCode: DevKit.WebApi.OptionSetValue;
		/** Version in which the component is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information that specifies whether this component is managed. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who last modified the transformation parameter mapping. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the transformation parameter mapping was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the transformationparametermapping. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Index of the array if the input parameter is an array. */
		ParameterArrayIndex: DevKit.WebApi.IntegerValue;
		/** Parameter sequence number. */
		ParameterSequence: DevKit.WebApi.IntegerValue;
		/** Type of transformation parameter. */
		ParameterTypeCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the transformation with which the parameter is associated. */
		TransformationMappingId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the transformation parameter mapping. */
		TransformationParameterMappingId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the Transformation Parameter Mapping. */
		TransformationParameterMappingIdUnique: DevKit.WebApi.GuidValueReadonly;
	}
}
declare namespace OptionSet {
	namespace TransformationParameterMapping {
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}