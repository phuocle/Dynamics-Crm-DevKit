//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class mspp_webpageaccesscontrolruleApi {
		/**
		* DynamicsCrm.DevKit mspp_webpageaccesscontrolruleApi
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
		/** Shows who created the record. */
		mspp_createdby: string | null;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date | null;
		mspp_description: string | null;
		/** Shows who last updated the record. */
		mspp_modifiedby: string | null;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date | null;
		/** The name of the custom entity. */
		mspp_name: string | null;
		mspp_right: OptionSet.mspp_webpageaccesscontrolrule.mspp_right | null;
		/** All child web files directly related to this web page will be excluded from security validation. This does not exclude the children's descendants. */
		mspp_scope: OptionSet.mspp_webpageaccesscontrolrule.mspp_scope | null;
		/** Unique identifier for entity instances */
		mspp_webpageaccesscontrolruleId: string | null;
		/** Unique identifier for Web Page associated with Web Page Access Control Rule. */
		mspp_webpageid: string | null;
		/** Unique identifier for Website associated with Web Page Access Control Rule. */
		mspp_websiteid: string | null;
		/** Status of the Web Page Access Control Rule */
		statecode: OptionSet.mspp_webpageaccesscontrolrule.statecode | null;
		/** Reason for the status of the Web Page Access Control Rule */
		statuscode: OptionSet.mspp_webpageaccesscontrolrule.statuscode | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Shows who created the record. */
			readonly mspp_createdby: string;
			/** Shows the date and time when the record was created. */
			readonly mspp_createdon_UtcDateAndTime: string;
			readonly mspp_description: string;
			/** Shows who last updated the record. */
			readonly mspp_modifiedby: string;
			/** Shows the date and time when the record was modified. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** The name of the custom entity. */
			readonly mspp_name: string;
			readonly mspp_right: string;
			/** All child web files directly related to this web page will be excluded from security validation. This does not exclude the children's descendants. */
			readonly mspp_scope: string;
			/** Unique identifier for entity instances */
			readonly mspp_webpageaccesscontrolruleId: string;
			/** Unique identifier for Web Page associated with Web Page Access Control Rule. */
			readonly mspp_webpageid: string;
			/** Unique identifier for Website associated with Web Page Access Control Rule. */
			readonly mspp_websiteid: string;
			/** Status of the Web Page Access Control Rule */
			readonly statecode: string;
			/** Reason for the status of the Web Page Access Control Rule */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_webpageaccesscontrolrule {
		enum mspp_right {
			/** Grant_Change = 1*/
			Grant_Change = 1,
			/** Restrict_Read = 2*/
			Restrict_Read = 2
		}
		enum mspp_scope {
			/** All_content = 1*/
			All_content = 1,
			/** Exclude_direct_child_web_files = 2*/
			Exclude_direct_child_web_files = 2
		}
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