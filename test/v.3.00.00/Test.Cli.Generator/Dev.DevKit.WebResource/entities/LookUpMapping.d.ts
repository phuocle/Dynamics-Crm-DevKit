//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class LookUpMappingApi {
		/**
		* DynamicsCrm.DevKit LookUpMappingApi
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
		/** Unique identifier of the column mapping with which this lookup mapping is associated. */
		ColumnMappingId: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.LookUpMapping.ComponentState;
		/** Unique identifier of the user who created the lookup mapping. */
		readonly CreatedBy: string;
		/** Date and time when the lookup mapping was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the lookupmapping. */
		readonly CreatedOnBehalfBy: string;
		/** Version in which the component is introduced. */
		IntroducedVersion: string;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean;
		/** Name of the field with which the lookup is associated. */
		LookUpAttributeName: string;
		/** Name of the entity with which the lookup is associated. */
		LookUpEntityName: string;
		/** Unique identifier of the lookup mapping. */
		LookUpMappingId: string;
		/** Unique identifier of the LookUp Mapping. */
		readonly LookUpMappingIdUnique: string;
		/** Lookup source code for lookup mapping. */
		LookUpSourceCode: OptionSet.LookUpMapping.LookUpSourceCode;
		/** Unique identifier of the user who last modified the lookup mapping. */
		readonly ModifiedBy: string;
		/** Date and time when the lookup mapping was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the lookupmapping. */
		readonly ModifiedOnBehalfBy: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Information about whether the lookup mapping has to be processed. */
		ProcessCode: OptionSet.LookUpMapping.ProcessCode;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the lookup mapping. */
		readonly StateCode: OptionSet.LookUpMapping.StateCode;
		/** Reason for the status of the lookup mapping. */
		StatusCode: OptionSet.LookUpMapping.StatusCode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Unique identifier of the transformation parameter mapping with which this lookup mapping is associated. */
		TransformationParameterMappingId: string;
	}
}
declare namespace OptionSet {
	namespace LookUpMapping {
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
		enum LookUpSourceCode {
			/** 0 */
			Source,
			/** 1 */
			System
		}
		enum ProcessCode {
			/** 2 */
			Ignore,
			/** 3 */
			Internal,
			/** 1 */
			Process
		}
		enum StateCode {
			/** 0 */
			Active
		}
		enum StatusCode {
			/** 0 */
			Active
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