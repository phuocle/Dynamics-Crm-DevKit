//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_pagetemplate_Information {
		interface tab_tab_webpages_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_webpages extends DevKit.Controls.ITab {
			Section: tab_tab_webpages_Sections;
		}
		interface Tabs {
			tab_webpages: tab_tab_webpages;
		}
		interface Body {
			Tab: Tabs;
			mspp_description: DevKit.Controls.String;
			mspp_entityname: DevKit.Controls.String;
			mspp_isdefault: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
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
		interface Navigation {
			mspp_pagetemplate_webpage: DevKit.Controls.NavigationItem
		}
		interface Grid {
			grid_webpages: DevKit.Controls.Grid;
		}
	}
	class Formmspp_pagetemplate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_pagetemplate_Information */
		Body: DevKit.Formmspp_pagetemplate_Information.Body;
		/** The Navigation of form mspp_pagetemplate_Information */
		Navigation: DevKit.Formmspp_pagetemplate_Information.Navigation;
		/** The Grid of form mspp_pagetemplate_Information */
		Grid: DevKit.Formmspp_pagetemplate_Information.Grid;
		/** The SidePanes of form mspp_pagetemplate_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_pagetemplateApi {
		/**
		* DynamicsCrm.DevKit mspp_pagetemplateApi
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
		/** Shows who created the record. */
		mspp_createdby: string;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date;
		mspp_description: string;
		mspp_entityname: string;
		mspp_isdefault: boolean;
		/** Shows who last updated the record. */
		mspp_modifiedby: string;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date;
		/** The name of the custom entity. */
		mspp_name: string;
		/** Unique identifier for entity instances */
		mspp_pagetemplateId: string;
		mspp_rewriteurl: string;
		/** The type of the record. */
		mspp_type: OptionSet.mspp_pagetemplate.mspp_type;
		/** Control whether this web template page template will be rendered using the website header and footer, or control rendering of all page content. */
		mspp_usewebsiteheaderandfooter: boolean;
		/** Unique identifier for Website associated with Page Template. */
		mspp_websiteid: string;
		/** Unique identifier for Web Template associated with Page Template. */
		mspp_webtemplateid: string;
		/** Status of the Page Template */
		statecode: OptionSet.mspp_pagetemplate.statecode;
		/** Reason for the status of the Page Template */
		statuscode: OptionSet.mspp_pagetemplate.statuscode;
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
			/** 756150000 */
			Rewrite,
			/** 756150001 */
			Web_Template
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}