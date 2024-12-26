//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormContent_Page {
		interface tab__2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_Sections {
			_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_2: DevKit.Controls.Section;
			_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_3: DevKit.Controls.Section;
			_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_4: DevKit.Controls.Section;
			_CC6684CC_049C_4371_9AE1_58682459A75F: DevKit.Controls.Section;
			mspp_webpage_copy_monacoEditor_text_section: DevKit.Controls.Section;
			mspp_webpage_summary_monacoEditor_text_section: DevKit.Controls.Section;
			section_localized_content: DevKit.Controls.Section;
		}
		interface tab_tab_7_Sections {
			mspp_customcss_MonacoEditor_mspp_webpage_text_section: DevKit.Controls.Section;
			tab_7_section_1: DevKit.Controls.Section;
		}
		interface tab__2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0 extends DevKit.Controls.ITab {
			Section: tab__2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_Sections;
		}
		interface tab_tab_7 extends DevKit.Controls.ITab {
			Section: tab_tab_7_Sections;
		}
		interface Tabs {
			_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0: tab__2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0;
			tab_7: tab_tab_7;
		}
		interface Body {
			Tab: Tabs;
			/** Defines CORS header Access-Control-Allow-Origin for cross origin requests. */
			mspp_alloworigin: DevKit.Controls.String;
			mspp_category: DevKit.Controls.OptionSet;
			mspp_copy: DevKit.Controls.String;
			mspp_copy1: DevKit.Controls.String;
			mspp_customcss: DevKit.Controls.String;
			mspp_customcss1: DevKit.Controls.String;
			mspp_customjavascript: DevKit.Controls.String;
			mspp_customjavascript1: DevKit.Controls.String;
			mspp_displaydate: DevKit.Controls.DateTime;
			mspp_displayorder: DevKit.Controls.Integer;
			mspp_editorialcomments: DevKit.Controls.String;
			/** Setting this value to 'Yes' will allow users to rate the web page. */
			mspp_enablerating: DevKit.Controls.Boolean;
			/** Unique identifier for Entity Form associated with Web Page. */
			mspp_entityform: DevKit.Controls.Lookup;
			/** Unique identifier for Entity List associated with Web Page. */
			mspp_entitylist: DevKit.Controls.Lookup;
			/** Shows whether the webpage is excluded from the portal search. */
			mspp_excludefromsearch: DevKit.Controls.Boolean;
			mspp_expirationdate: DevKit.Controls.DateTime;
			mspp_feedbackpolicy: DevKit.Controls.OptionSet;
			mspp_hiddenfromsitemap: DevKit.Controls.Boolean;
			/** Unique identifier for Web File associated with Web Page. */
			mspp_image: DevKit.Controls.Lookup;
			mspp_imageurl: DevKit.Controls.String;
			/** Defines whether this is the "root" record of this translated group of Web Pages. */
			mspp_isroot: DevKit.Controls.Boolean;
			/** Unique identifier for Web Page associated with Web Page. */
			mspp_masterwebpageid: DevKit.Controls.Lookup;
			mspp_meta_description: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Web Link Set associated with Web Page. */
			mspp_navigation: DevKit.Controls.Lookup;
			/** Unique identifier for Page Template associated with Web Page. */
			mspp_pagetemplateid: DevKit.Controls.Lookup;
			/** Unique identifier for Web Page associated with Web Page. */
			mspp_parentpageid: DevKit.Controls.Lookup;
			mspp_partialurl: DevKit.Controls.String;
			/** Unique identifier for Publishing State associated with Web Page. */
			mspp_publishingstateid: DevKit.Controls.Lookup;
			mspp_releasedate: DevKit.Controls.DateTime;
			/** Lookup to root WebPage. */
			mspp_rootwebpageid: DevKit.Controls.Lookup;
			mspp_summary: DevKit.Controls.String;
			mspp_summary1: DevKit.Controls.String;
			mspp_title: DevKit.Controls.String;
			/** Unique identifier for Multistep Form associated with Web Page. */
			mspp_webform: DevKit.Controls.Lookup;
			/** Language of this web page. */
			mspp_webpagelanguageid: DevKit.Controls.Lookup;
			/** Unique identifier for Website associated with Web Page. */
			mspp_websiteid: DevKit.Controls.Lookup;
		}
		interface Navigation {
			mspp_entityform_redirectwebpage: DevKit.Controls.NavigationItem,
			mspp_entitylist_webpageforcreate: DevKit.Controls.NavigationItem,
			mspp_entitylist_webpagefordetailsview: DevKit.Controls.NavigationItem,
			mspp_parentwebpage_shortcut: DevKit.Controls.NavigationItem,
			mspp_webformstep_redirectwebpage: DevKit.Controls.NavigationItem,
			mspp_webpage_masterwebpage: DevKit.Controls.NavigationItem,
			mspp_webpage_redirect: DevKit.Controls.NavigationItem,
			mspp_webpage_shortcut: DevKit.Controls.NavigationItem,
			mspp_webpage_sitemarker: DevKit.Controls.NavigationItem,
			mspp_webpage_webfile: DevKit.Controls.NavigationItem,
			mspp_webpage_weblink: DevKit.Controls.NavigationItem,
			mspp_webpage_webpage: DevKit.Controls.NavigationItem,
			mspp_webpage_webpage_rootwebpageid: DevKit.Controls.NavigationItem,
			mspp_webpage_webpageaccesscontrolrule: DevKit.Controls.NavigationItem
		}
		interface Grid {
			subgrid_localized_content: DevKit.Controls.Grid;
		}
	}
	class FormContent_Page extends DevKit.IForm {
		/**
		* Content Page [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Content_Page */
		Body: DevKit.FormContent_Page.Body;
		/** The Navigation of form Content_Page */
		Navigation: DevKit.FormContent_Page.Navigation;
		/** The Grid of form Content_Page */
		Grid: DevKit.FormContent_Page.Grid;
		/** The SidePanes of form Content_Page */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmspp_webpage_Information {
		interface tab__2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_Sections {
			_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_3: DevKit.Controls.Section;
			_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_SECTION_4: DevKit.Controls.Section;
			_CC6684CC_049C_4371_9AE1_58682459A75F: DevKit.Controls.Section;
			section_localized_content: DevKit.Controls.Section;
		}
		interface tab_tab_5_Sections {
			tab_5_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_7_Sections {
			mspp_webpage_customcss_MonacoEditor: DevKit.Controls.Section;
			tab_7_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_accesscontrolrules_Sections {
			tab_6_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_childfiles_Sections {
			tab_6_section_1: DevKit.Controls.Section;
		}
		interface tab__2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0 extends DevKit.Controls.ITab {
			Section: tab__2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0_Sections;
		}
		interface tab_tab_5 extends DevKit.Controls.ITab {
			Section: tab_tab_5_Sections;
		}
		interface tab_tab_7 extends DevKit.Controls.ITab {
			Section: tab_tab_7_Sections;
		}
		interface tab_tab_accesscontrolrules extends DevKit.Controls.ITab {
			Section: tab_tab_accesscontrolrules_Sections;
		}
		interface tab_tab_childfiles extends DevKit.Controls.ITab {
			Section: tab_tab_childfiles_Sections;
		}
		interface Tabs {
			_2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0: tab__2F9F8F11_EC96_46B3_A8AA_B5020DA0EAC0;
			tab_5: tab_tab_5;
			tab_7: tab_tab_7;
			tab_accesscontrolrules: tab_tab_accesscontrolrules;
			tab_childfiles: tab_tab_childfiles;
		}
		interface Body {
			Tab: Tabs;
			/** Defines CORS header Access-Control-Allow-Origin for cross origin requests. */
			mspp_alloworigin: DevKit.Controls.String;
			mspp_category: DevKit.Controls.OptionSet;
			mspp_customcss: DevKit.Controls.String;
			mspp_customcss1: DevKit.Controls.String;
			mspp_customjavascript: DevKit.Controls.String;
			mspp_customjavascript1: DevKit.Controls.String;
			mspp_displaydate: DevKit.Controls.DateTime;
			mspp_displayorder: DevKit.Controls.Integer;
			mspp_editorialcomments: DevKit.Controls.String;
			/** Setting this value to 'Yes' will allow users to rate the web page. */
			mspp_enablerating: DevKit.Controls.Boolean;
			/** Unique identifier for Entity Form associated with Web Page. */
			mspp_entityform: DevKit.Controls.Lookup;
			/** Unique identifier for Entity List associated with Web Page. */
			mspp_entitylist: DevKit.Controls.Lookup;
			/** Shows whether the webpage is excluded from the portal search. */
			mspp_excludefromsearch: DevKit.Controls.Boolean;
			mspp_expirationdate: DevKit.Controls.DateTime;
			mspp_feedbackpolicy: DevKit.Controls.OptionSet;
			mspp_hiddenfromsitemap: DevKit.Controls.Boolean;
			/** Unique identifier for Web File associated with Web Page. */
			mspp_image: DevKit.Controls.Lookup;
			mspp_imageurl: DevKit.Controls.String;
			/** Defines whether this is the "root" record of this translated group of Web Pages. */
			mspp_isroot: DevKit.Controls.Boolean;
			/** Unique identifier for Web Page associated with Web Page. */
			mspp_masterwebpageid: DevKit.Controls.Lookup;
			mspp_meta_description: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Page Template associated with Web Page. */
			mspp_pagetemplateid: DevKit.Controls.Lookup;
			/** Unique identifier for Web Page associated with Web Page. */
			mspp_parentpageid: DevKit.Controls.Lookup;
			mspp_partialurl: DevKit.Controls.String;
			/** Unique identifier for Publishing State associated with Web Page. */
			mspp_publishingstateid: DevKit.Controls.Lookup;
			mspp_releasedate: DevKit.Controls.DateTime;
			/** Lookup to root WebPage. */
			mspp_rootwebpageid: DevKit.Controls.Lookup;
			/** Unique identifier for Multistep Form associated with Web Page. */
			mspp_webform: DevKit.Controls.Lookup;
			/** Unique identifier for Website associated with Web Page. */
			mspp_websiteid: DevKit.Controls.Lookup;
		}
		interface Navigation {
			mspp_entityform_redirectwebpage: DevKit.Controls.NavigationItem,
			mspp_entitylist_webpageforcreate: DevKit.Controls.NavigationItem,
			mspp_entitylist_webpagefordetailsview: DevKit.Controls.NavigationItem,
			mspp_parentwebpage_shortcut: DevKit.Controls.NavigationItem,
			mspp_webformstep_redirectwebpage: DevKit.Controls.NavigationItem,
			mspp_webpage_masterwebpage: DevKit.Controls.NavigationItem,
			mspp_webpage_redirect: DevKit.Controls.NavigationItem,
			mspp_webpage_shortcut: DevKit.Controls.NavigationItem,
			mspp_webpage_sitemarker: DevKit.Controls.NavigationItem,
			mspp_webpage_webfile: DevKit.Controls.NavigationItem,
			mspp_webpage_weblink: DevKit.Controls.NavigationItem,
			mspp_webpage_webpage: DevKit.Controls.NavigationItem,
			mspp_webpage_webpage_rootwebpageid: DevKit.Controls.NavigationItem,
			mspp_webpage_webpageaccesscontrolrule: DevKit.Controls.NavigationItem
		}
		interface Grid {
			childPages: DevKit.Controls.Grid;
			grid_accesscontrolrules: DevKit.Controls.Grid;
			grid_childfiles: DevKit.Controls.Grid;
			subgrid_localized_content: DevKit.Controls.Grid;
		}
	}
	class Formmspp_webpage_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_webpage_Information */
		Body: DevKit.Formmspp_webpage_Information.Body;
		/** The Navigation of form mspp_webpage_Information */
		Navigation: DevKit.Formmspp_webpage_Information.Navigation;
		/** The Grid of form mspp_webpage_Information */
		Grid: DevKit.Formmspp_webpage_Information.Grid;
		/** The SidePanes of form mspp_webpage_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_webpageApi {
		/**
		* DynamicsCrm.DevKit mspp_webpageApi
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
		/** Defines CORS header Access-Control-Allow-Origin for cross origin requests. */
		mspp_alloworigin: string;
		mspp_category: OptionSet.mspp_webpage.mspp_category;
		mspp_copy: string;
		/** Shows who created the record. */
		mspp_createdby: string;
		mspp_createdbyipaddress: string;
		mspp_createdbyusername: string;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date;
		mspp_customcss: string;
		mspp_customjavascript: string;
		mspp_displaydate_UtcDateAndTime: Date;
		mspp_displayorder: number;
		mspp_editorialcomments: string;
		/** Setting this value to 'Yes' will allow users to rate the web page. */
		mspp_enablerating: boolean;
		/** Unique identifier for Entity Form associated with Web Page. */
		mspp_entityform: string;
		/** Unique identifier for Entity List associated with Web Page. */
		mspp_entitylist: string;
		/** Shows whether the webpage is excluded from the portal search. */
		mspp_excludefromsearch: boolean;
		mspp_expirationdate_UtcDateAndTime: Date;
		mspp_feedbackpolicy: OptionSet.mspp_webpage.mspp_feedbackpolicy;
		mspp_hiddenfromsitemap: boolean;
		/** Unique identifier for Web File associated with Web Page. */
		mspp_image: string;
		mspp_imageurl: string;
		/** Define whether to cache this page for PWA. */
		mspp_isofflinecached: boolean;
		/** Defines whether this is the "root" record of this translated group of Web Pages. */
		mspp_isroot: boolean;
		/** Unique identifier for Web Page associated with Web Page. */
		mspp_masterwebpageid: string;
		mspp_meta_description: string;
		/** Shows who last updated the record. */
		mspp_modifiedby: string;
		mspp_modifiedbyipaddress: string;
		mspp_modifiedbyusername: string;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date;
		/** The name of the custom entity. */
		mspp_name: string;
		/** Unique identifier for Web Link Set associated with Web Page. */
		mspp_navigation: string;
		/** Unique identifier for Page Template associated with Web Page. */
		mspp_pagetemplateid: string;
		/** Unique identifier for Web Page associated with Web Page. */
		mspp_parentpageid: string;
		mspp_partialurl: string;
		/** Unique identifier for Publishing State associated with Web Page. */
		mspp_publishingstateid: string;
		mspp_releasedate_UtcDateAndTime: Date;
		/** Lookup to root WebPage. */
		mspp_rootwebpageid: string;
		/** Determines if the content page uses the root page configuration */
		mspp_sharedpageconfiguration: boolean;
		mspp_summary: string;
		mspp_title: string;
		/** Unique identifier for Multistep Form associated with Web Page. */
		mspp_webform: string;
		/** Unique identifier for entity instances */
		mspp_webpageId: string;
		/** Language of this web page. */
		mspp_webpagelanguageid: string;
		/** Unique identifier for Website associated with Web Page. */
		mspp_websiteid: string;
		/** Status of the Web Page */
		statecode: OptionSet.mspp_webpage.statecode;
		/** Reason for the status of the Web Page */
		statuscode: OptionSet.mspp_webpage.statuscode;
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
			/** 1 */
			News
		}
		enum mspp_feedbackpolicy {
			/** 756150005 */
			Closed,
			/** 756150000 */
			Inherit,
			/** 756150003 */
			Item,
			/** 756150004 */
			Moderated,
			/** 756150001 */
			None,
			/** 756150002 */
			Open
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