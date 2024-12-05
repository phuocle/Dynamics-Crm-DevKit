//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class msdyn_suggestedactivityApi {
		/**
		* DynamicsCrm.DevKit msdyn_suggestedactivityApi
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
		/** Activity */
		msdyn_ActivityType: string;
		/** BodyPreview */
		msdyn_BodyPreview: string;
		/** Created Date */
		msdyn_createddate_UtcDateAndTime: Date;
		/** Duration */
		msdyn_duration: string;
		/** End Time */
		msdyn_endtime_UtcDateAndTime: Date;
		/** Exchange web link */
		msdyn_exchangeweblink: string;
		/** Importance */
		msdyn_Importance: string;
		/** Location */
		msdyn_location: string;
		/** Regarding Entity */
		msdyn_regardingname: string;
		/** Sender */
		msdyn_sender: string;
		/** Sender's Name */
		msdyn_sendername: string;
		/** Start Time */
		msdyn_starttime_UtcDateAndTime: Date;
		/** Subject */
		msdyn_Subject: string;
		/** Unique identifier for entity instances */
		msdyn_suggestedactivityId: string;
		/** To */
		msdyn_to: string;
		readonly FormattedValue: {
			/** Activity */
			readonly msdyn_ActivityType: string;
			/** BodyPreview */
			readonly msdyn_BodyPreview: string;
			/** Created Date */
			readonly msdyn_createddate_UtcDateAndTime: string;
			/** Duration */
			readonly msdyn_duration: string;
			/** End Time */
			readonly msdyn_endtime_UtcDateAndTime: string;
			/** Exchange web link */
			readonly msdyn_exchangeweblink: string;
			/** Importance */
			readonly msdyn_Importance: string;
			/** Location */
			readonly msdyn_location: string;
			/** Regarding Entity */
			readonly msdyn_regardingname: string;
			/** Sender */
			readonly msdyn_sender: string;
			/** Sender's Name */
			readonly msdyn_sendername: string;
			/** Start Time */
			readonly msdyn_starttime_UtcDateAndTime: string;
			/** Subject */
			readonly msdyn_Subject: string;
			/** Unique identifier for entity instances */
			readonly msdyn_suggestedactivityId: string;
			/** To */
			readonly msdyn_to: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_suggestedactivity {
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