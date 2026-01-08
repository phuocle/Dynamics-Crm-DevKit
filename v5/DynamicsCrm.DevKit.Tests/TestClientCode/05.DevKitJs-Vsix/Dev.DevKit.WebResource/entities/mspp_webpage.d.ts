//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class mspp_webpageApi {
		/**
		* DynamicsCrm.DevKit mspp_webpageApi
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
		/** Defines CORS header Access-Control-Allow-Origin for cross origin requests. */
		mspp_alloworigin: string | null;
		mspp_category: OptionSet.mspp_webpage.mspp_category | null;
		mspp_copy: string | null;
		/** Shows who created the record. */
		mspp_createdby: string | null;
		mspp_createdbyipaddress: string | null;
		mspp_createdbyusername: string | null;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date | null;
		mspp_customcss: string | null;
		mspp_customjavascript: string | null;
		mspp_displaydate_UtcDateAndTime: Date | null;
		mspp_displayorder: number | null;
		mspp_editorialcomments: string | null;
		/** Setting this value to 'Yes' will allow users to rate the web page. */
		mspp_enablerating: boolean | null;
		/** Unique identifier for Entity Form associated with Web Page. */
		mspp_entityform: string | null;
		/** Unique identifier for Entity List associated with Web Page. */
		mspp_entitylist: string | null;
		/** Shows whether the webpage is excluded from the portal search. */
		mspp_excludefromsearch: boolean | null;
		mspp_expirationdate_UtcDateAndTime: Date | null;
		mspp_feedbackpolicy: OptionSet.mspp_webpage.mspp_feedbackpolicy | null;
		mspp_hiddenfromsitemap: boolean | null;
		/** Unique identifier for Web File associated with Web Page. */
		mspp_image: string | null;
		mspp_imageurl: string | null;
		/** Define whether to cache this page for PWA. */
		mspp_isofflinecached: boolean | null;
		/** Defines whether this is the "root" record of this translated group of Web Pages. */
		mspp_isroot: boolean | null;
		/** Unique identifier for Web Page associated with Web Page. */
		mspp_masterwebpageid: string | null;
		mspp_meta_description: string | null;
		/** Shows who last updated the record. */
		mspp_modifiedby: string | null;
		mspp_modifiedbyipaddress: string | null;
		mspp_modifiedbyusername: string | null;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date | null;
		/** The name of the custom entity. */
		mspp_name: string | null;
		/** Unique identifier for Web Link Set associated with Web Page. */
		mspp_navigation: string | null;
		/** Unique identifier for Page Template associated with Web Page. */
		mspp_pagetemplateid: string | null;
		/** Unique identifier for Web Page associated with Web Page. */
		mspp_parentpageid: string | null;
		mspp_partialurl: string | null;
		/** Unique identifier for Publishing State associated with Web Page. */
		mspp_publishingstateid: string | null;
		mspp_releasedate_UtcDateAndTime: Date | null;
		/** Lookup to root WebPage. */
		mspp_rootwebpageid: string | null;
		/** Determines if the content page uses the root page configuration */
		mspp_sharedpageconfiguration: boolean | null;
		mspp_summary: string | null;
		mspp_title: string | null;
		/** Unique identifier for Multistep Form associated with Web Page. */
		mspp_webform: string | null;
		/** Unique identifier for entity instances */
		mspp_webpageId: string | null;
		/** Language of this web page. */
		mspp_webpagelanguageid: string | null;
		/** Unique identifier for Website associated with Web Page. */
		mspp_websiteid: string | null;
		/** Status of the Web Page */
		statecode: OptionSet.mspp_webpage.statecode | null;
		/** Reason for the status of the Web Page */
		statuscode: OptionSet.mspp_webpage.statuscode | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Defines CORS header Access-Control-Allow-Origin for cross origin requests. */
			readonly mspp_alloworigin: string;
			readonly mspp_category: string;
			readonly mspp_copy: string;
			/** Shows who created the record. */
			readonly mspp_createdby: string;
			readonly mspp_createdbyipaddress: string;
			readonly mspp_createdbyusername: string;
			/** Shows the date and time when the record was created. */
			readonly mspp_createdon_UtcDateAndTime: string;
			readonly mspp_customcss: string;
			readonly mspp_customjavascript: string;
			readonly mspp_displaydate_UtcDateAndTime: string;
			readonly mspp_displayorder: string;
			readonly mspp_editorialcomments: string;
			/** Setting this value to 'Yes' will allow users to rate the web page. */
			readonly mspp_enablerating: string;
			/** Unique identifier for Entity Form associated with Web Page. */
			readonly mspp_entityform: string;
			/** Unique identifier for Entity List associated with Web Page. */
			readonly mspp_entitylist: string;
			/** Shows whether the webpage is excluded from the portal search. */
			readonly mspp_excludefromsearch: string;
			readonly mspp_expirationdate_UtcDateAndTime: string;
			readonly mspp_feedbackpolicy: string;
			readonly mspp_hiddenfromsitemap: string;
			/** Unique identifier for Web File associated with Web Page. */
			readonly mspp_image: string;
			readonly mspp_imageurl: string;
			/** Define whether to cache this page for PWA. */
			readonly mspp_isofflinecached: string;
			/** Defines whether this is the "root" record of this translated group of Web Pages. */
			readonly mspp_isroot: string;
			/** Unique identifier for Web Page associated with Web Page. */
			readonly mspp_masterwebpageid: string;
			readonly mspp_meta_description: string;
			/** Shows who last updated the record. */
			readonly mspp_modifiedby: string;
			readonly mspp_modifiedbyipaddress: string;
			readonly mspp_modifiedbyusername: string;
			/** Shows the date and time when the record was modified. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** The name of the custom entity. */
			readonly mspp_name: string;
			/** Unique identifier for Web Link Set associated with Web Page. */
			readonly mspp_navigation: string;
			/** Unique identifier for Page Template associated with Web Page. */
			readonly mspp_pagetemplateid: string;
			/** Unique identifier for Web Page associated with Web Page. */
			readonly mspp_parentpageid: string;
			readonly mspp_partialurl: string;
			/** Unique identifier for Publishing State associated with Web Page. */
			readonly mspp_publishingstateid: string;
			readonly mspp_releasedate_UtcDateAndTime: string;
			/** Lookup to root WebPage. */
			readonly mspp_rootwebpageid: string;
			/** Determines if the content page uses the root page configuration */
			readonly mspp_sharedpageconfiguration: string;
			readonly mspp_summary: string;
			readonly mspp_title: string;
			/** Unique identifier for Multistep Form associated with Web Page. */
			readonly mspp_webform: string;
			/** Unique identifier for entity instances */
			readonly mspp_webpageId: string;
			/** Language of this web page. */
			readonly mspp_webpagelanguageid: string;
			/** Unique identifier for Website associated with Web Page. */
			readonly mspp_websiteid: string;
			/** Status of the Web Page */
			readonly statecode: string;
			/** Reason for the status of the Web Page */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_webpage {
		enum mspp_category {
			/** News = 1*/
			News = 1
		}
		enum mspp_feedbackpolicy {
			/** Closed = 756150005*/
			Closed = 756150005,
			/** Inherit = 756150000*/
			Inherit = 756150000,
			/** Item = 756150003*/
			Item = 756150003,
			/** Moderated = 756150004*/
			Moderated = 756150004,
			/** None = 756150001*/
			None = 756150001,
			/** Open = 756150002*/
			Open = 756150002
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