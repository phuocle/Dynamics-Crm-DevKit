//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class mobileofflineprofileitemfilterApi {
		/**
		* DynamicsCrm.DevKit mobileofflineprofileitemfilterApi
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
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		fetchxml: string;
		/** Unique identifier for Mobile Offline Profile associated with MobileOfflineProfileItemFilter. */
		mobileofflineprofileid: string;
		/** Unique identifier for entity instances */
		mobileofflineprofileitemfilterId: string;
		mobileofflineprofileitemid: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Name */
		Name: string;
		offlinesql: string;
		subtype: OptionSet.mobileofflineprofileitemfilter.subtype;
		type: OptionSet.mobileofflineprofileitemfilter.type;
		/** Version number. */
		readonly versionnumber: number;
	}
}
declare namespace OptionSet {
	namespace mobileofflineprofileitemfilter {
		enum subtype {
			/** 0 */
			CUD_IN,
			/** 4 */
			CUD_OUT,
			/** 5 */
			FULL_SYNC,
			/** 1 */
			RELATED_CUD_IN,
			/** 3 */
			RELATED_SHARED_IN,
			/** 2 */
			SHARED_IN
		}
		enum type {
			/** 0 */
			DELTA_IN,
			/** 1 */
			DELTA_OUT,
			/** 2 */
			FULL_SYNC
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