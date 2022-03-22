//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class msdyn_worklistsuggestionApi {
		/**
		* DynamicsCrm.DevKit msdyn_worklistsuggestionApi
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
		/** Custom Data */
		msdyn_customdata: string;
		/** The name of the custom entity */
		msdyn_name: string;
		/** Potential Revenue Returns */
		msdyn_potentialrevenue: string;
		/** Related Custom Data */
		msdyn_relatedcustomdata: string;
		/** Related record for Suggestion */
		msdyn_relatedrecordid: string;
		/** Related Record Name */
		msdyn_relatedrecordname: string;
		/** Related Record Name */
		msdyn_relatedrecordtype: string;
		msdyn_salesmotion: OptionSet.msdyn_worklistsuggestion.msdyn_salesmotion;
		/** Sales play */
		msdyn_salesplay: OptionSet.msdyn_worklistsuggestion.msdyn_salesplay;
		/** Solution area */
		msdyn_solutionarea: OptionSet.msdyn_worklistsuggestion.msdyn_solutionarea;
		/** Suggested date */
		msdyn_suggesteddate_UtcDateOnly: Date;
		/** Unique identifier for entity instances */
		msdyn_worklistsuggestionId: string;
	}
}
declare namespace OptionSet {
	namespace msdyn_worklistsuggestion {
		enum msdyn_salesmotion {
			/** 1 */
			Default
		}
		enum msdyn_salesplay {
			/** 1 */
			Default
		}
		enum msdyn_solutionarea {
			/** 1 */
			Default
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