//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class mspp_weblinksetApi {
		/**
		* DynamicsCrm.DevKit mspp_weblinksetApi
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
		mspp_copy: string | null;
		/** Shows who created the record. */
		mspp_createdby: string | null;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date | null;
		/** Stores the label that is shown on the user interface (UI) in the data editing mode. */
		mspp_display_name: string | null;
		/** Shows who last updated the record. */
		mspp_modifiedby: string | null;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date | null;
		/** The name of the custom entity. */
		mspp_name: string | null;
		/** Unique identifier for Publishing State associated with Web Link Set. */
		mspp_publishingstateid: string | null;
		mspp_title: string | null;
		/** Unique identifier for entity instances */
		mspp_weblinksetId: string | null;
		/** Unique identifier for Website associated with Web Link Set. */
		mspp_websiteid: string | null;
		/** Optional language to associate with web link sets for language-specific primary navigation */
		mspp_websitelanguageid: string | null;
		/** Status of the Web Link Set */
		statecode: OptionSet.mspp_weblinkset.statecode | null;
		/** Reason for the status of the Web Link Set */
		statuscode: OptionSet.mspp_weblinkset.statuscode | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			readonly mspp_copy: string;
			/** Shows who created the record. */
			readonly mspp_createdby: string;
			/** Shows the date and time when the record was created. */
			readonly mspp_createdon_UtcDateAndTime: string;
			/** Stores the label that is shown on the user interface (UI) in the data editing mode. */
			readonly mspp_display_name: string;
			/** Shows who last updated the record. */
			readonly mspp_modifiedby: string;
			/** Shows the date and time when the record was modified. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** The name of the custom entity. */
			readonly mspp_name: string;
			/** Unique identifier for Publishing State associated with Web Link Set. */
			readonly mspp_publishingstateid: string;
			readonly mspp_title: string;
			/** Unique identifier for entity instances */
			readonly mspp_weblinksetId: string;
			/** Unique identifier for Website associated with Web Link Set. */
			readonly mspp_websiteid: string;
			/** Optional language to associate with web link sets for language-specific primary navigation */
			readonly mspp_websitelanguageid: string;
			/** Status of the Web Link Set */
			readonly statecode: string;
			/** Reason for the status of the Web Link Set */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_weblinkset {
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
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