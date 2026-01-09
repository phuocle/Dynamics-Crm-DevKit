//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_pagetemplate_Information {
		interface tab_tab_webpages_Sections {
			/** Section */
			tab_3_section_1: DevKit.Controls.Section;
		}
		/** Web Pages */
		interface tab_tab_webpages extends DevKit.Controls.ITab {
			Section: tab_tab_webpages_Sections;
		}
		interface Tabs {
			/** Web Pages */
			tab_webpages: tab_tab_webpages;
		}
		interface Body {
			Tab: Tabs;
			/** Description */
			mspp_description: DevKit.Controls.String;
			/** Table Name */
			mspp_entityname: DevKit.Controls.String;
			/** Is Default */
			mspp_isdefault: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Rewrite Url */
			mspp_rewriteurl: DevKit.Controls.String;
			/** The type of the record. */
			mspp_type: DevKit.Controls.OptionSet;
			/** Control whether this web template page template will be rendered using the website header and footer, or control rendering of all page content. */
			mspp_usewebsiteheaderandfooter: DevKit.Controls.Boolean;
			/** Unique identifier for Website associated with Page Template. */
			mspp_websiteid: DevKit.Controls.Lookup;
			/** Unique identifier for Web Template associated with Page Template. */
			mspp_webtemplateid: DevKit.Controls.Lookup;
			WebResource_entityname: DevKit.Controls.WebResource;
		}
		interface Grid {
			grid_webpages: DevKit.Controls.Grid;
		}
	}
	export class Formmspp_pagetemplate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form mspp_pagetemplate_Information */
		Body: DevKit.Formmspp_pagetemplate_Information.Body;
		/** The Grid of form mspp_pagetemplate_Information */
		Grid: DevKit.Formmspp_pagetemplate_Information.Grid;
	}
	export class mspp_pagetemplateApi {
		/**
		* DynamicsCrm.DevKit mspp_pagetemplateApi
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
		mspp_entityname: string | null;
		mspp_isdefault: boolean | null;
		/** Shows who last updated the record. */
		mspp_modifiedby: string | null;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date | null;
		/** The name of the custom entity. */
		mspp_name: string | null;
		/** Unique identifier for entity instances */
		mspp_pagetemplateId: string | null;
		mspp_rewriteurl: string | null;
		/** The type of the record. */
		mspp_type: OptionSet.mspp_pagetemplate.mspp_type | null;
		/** Control whether this web template page template will be rendered using the website header and footer, or control rendering of all page content. */
		mspp_usewebsiteheaderandfooter: boolean | null;
		/** Unique identifier for Website associated with Page Template. */
		mspp_websiteid: string | null;
		/** Unique identifier for Web Template associated with Page Template. */
		mspp_webtemplateid: string | null;
		/** Status of the Page Template */
		statecode: OptionSet.mspp_pagetemplate.statecode | null;
		/** Reason for the status of the Page Template */
		statuscode: OptionSet.mspp_pagetemplate.statuscode | null;
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
			readonly mspp_entityname: string;
			readonly mspp_isdefault: string;
			/** Shows who last updated the record. */
			readonly mspp_modifiedby: string;
			/** Shows the date and time when the record was modified. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** The name of the custom entity. */
			readonly mspp_name: string;
			/** Unique identifier for entity instances */
			readonly mspp_pagetemplateId: string;
			readonly mspp_rewriteurl: string;
			/** The type of the record. */
			readonly mspp_type: string;
			/** Control whether this web template page template will be rendered using the website header and footer, or control rendering of all page content. */
			readonly mspp_usewebsiteheaderandfooter: string;
			/** Unique identifier for Website associated with Page Template. */
			readonly mspp_websiteid: string;
			/** Unique identifier for Web Template associated with Page Template. */
			readonly mspp_webtemplateid: string;
			/** Status of the Page Template */
			readonly statecode: string;
			/** Reason for the status of the Page Template */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_pagetemplate {
		enum mspp_type {
			/** Rewrite = 756150000*/
			Rewrite = 756150000,
			/** Web_Template = 756150001*/
			Web_Template = 756150001
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