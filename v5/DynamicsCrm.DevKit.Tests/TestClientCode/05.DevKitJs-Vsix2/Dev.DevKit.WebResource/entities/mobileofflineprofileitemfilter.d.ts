//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmobileofflineprofileitemfilter_Information {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier for entity instances */
			mobileofflineprofileitemfilterId: DevKit.Controls.String;
		}
	}
	export class Formmobileofflineprofileitemfilter_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form mobileofflineprofileitemfilter_Information */
		Body: DevKit.Formmobileofflineprofileitemfilter_Information.Body;
	}
	export class mobileofflineprofileitemfilterApi {
		/**
		* DynamicsCrm.DevKit mobileofflineprofileitemfilterApi
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
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		fetchxml: string | null;
		IsActivity: boolean | null;
		IsIntersect: boolean | null;
		/** Unique identifier for Mobile Offline Profile associated with MobileOfflineProfileItemFilter. */
		mobileofflineprofileid: string | null;
		/** Unique identifier for entity instances */
		mobileofflineprofileitemfilterId: string | null;
		mobileofflineprofileitemid: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Name */
		Name: string | null;
		offlinesql: string | null;
		outerFetchXml: string | null;
		subtype: OptionSet.mobileofflineprofileitemfilter.subtype | null;
		type: OptionSet.mobileofflineprofileitemfilter.type | null;
		/** Version number. */
		readonly versionnumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			readonly fetchxml: string;
			readonly IsActivity: string;
			readonly IsIntersect: string;
			/** Unique identifier for Mobile Offline Profile associated with MobileOfflineProfileItemFilter. */
			readonly mobileofflineprofileid: string;
			/** Unique identifier for entity instances */
			readonly mobileofflineprofileitemfilterId: string;
			readonly mobileofflineprofileitemid: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Name */
			readonly Name: string;
			readonly offlinesql: string;
			readonly outerFetchXml: string;
			readonly subtype: string;
			readonly type: string;
			/** Version number. */
			readonly versionnumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace mobileofflineprofileitemfilter {
		enum returnedtypecode {
		}
		enum subtype {
			/** CUD_IN = 0*/
			CUD_IN = 0,
			/** CUD_OUT = 4*/
			CUD_OUT = 4,
			/** FULL_SYNC = 5*/
			FULL_SYNC = 5,
			/** RELATED_CUD_IN = 1*/
			RELATED_CUD_IN = 1,
			/** RELATED_ENTITIES = 6*/
			RELATED_ENTITIES = 6,
			/** RELATED_INTERSECT_ENTITIES = 7*/
			RELATED_INTERSECT_ENTITIES = 7,
			/** RELATED_SHARED_IN = 3*/
			RELATED_SHARED_IN = 3,
			/** SHARED_IN = 2*/
			SHARED_IN = 2
		}
		enum type {
			/** DELTA_IN = 0*/
			DELTA_IN = 0,
			/** DELTA_OUT = 1*/
			DELTA_OUT = 1,
			/** FULL_SYNC = 2*/
			FULL_SYNC = 2,
			/** RELATED_ENTITIES = 4*/
			RELATED_ENTITIES = 4,
			/** TOP_1 = 3*/
			TOP_1 = 3
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