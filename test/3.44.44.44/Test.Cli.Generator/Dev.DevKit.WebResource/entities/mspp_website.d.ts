//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_website_Information {
		interface tab__A36E3E44_6924_4722_8D78_44175EAD950B_Sections {
			_139917FD_C4F2_411C_BCAB_D810AD4B3A5A: DevKit.Controls.Section;
			_A36E3E44_6924_4722_8D78_44175EAD950B_SECTION_2: DevKit.Controls.Section;
			tab_13_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_advancedforms_Sections {
			tab_12_section_3: DevKit.Controls.Section;
		}
		interface tab_tab_basicforms_Sections {
			tab_11_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_childpages_Sections {
			tab_5_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_lists_Sections {
			tab_10_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_pagetemplates_Sections {
			tab_10_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_rootpages_Sections {
			tab_12_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_sitemarkers_Sections {
			tab_9_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_sitesettings_Sections {
			tab_8_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_websiteaccesspermissions_Sections {
			tab_12_section_1: DevKit.Controls.Section;
		}
		interface tab__A36E3E44_6924_4722_8D78_44175EAD950B extends DevKit.Controls.ITab {
			Section: tab__A36E3E44_6924_4722_8D78_44175EAD950B_Sections;
		}
		interface tab_tab_advancedforms extends DevKit.Controls.ITab {
			Section: tab_tab_advancedforms_Sections;
		}
		interface tab_tab_basicforms extends DevKit.Controls.ITab {
			Section: tab_tab_basicforms_Sections;
		}
		interface tab_tab_childpages extends DevKit.Controls.ITab {
			Section: tab_tab_childpages_Sections;
		}
		interface tab_tab_lists extends DevKit.Controls.ITab {
			Section: tab_tab_lists_Sections;
		}
		interface tab_tab_pagetemplates extends DevKit.Controls.ITab {
			Section: tab_tab_pagetemplates_Sections;
		}
		interface tab_tab_rootpages extends DevKit.Controls.ITab {
			Section: tab_tab_rootpages_Sections;
		}
		interface tab_tab_sitemarkers extends DevKit.Controls.ITab {
			Section: tab_tab_sitemarkers_Sections;
		}
		interface tab_tab_sitesettings extends DevKit.Controls.ITab {
			Section: tab_tab_sitesettings_Sections;
		}
		interface tab_tab_websiteaccesspermissions extends DevKit.Controls.ITab {
			Section: tab_tab_websiteaccesspermissions_Sections;
		}
		interface Tabs {
			_A36E3E44_6924_4722_8D78_44175EAD950B: tab__A36E3E44_6924_4722_8D78_44175EAD950B;
			tab_advancedforms: tab_tab_advancedforms;
			tab_basicforms: tab_tab_basicforms;
			tab_childpages: tab_tab_childpages;
			tab_lists: tab_tab_lists;
			tab_pagetemplates: tab_tab_pagetemplates;
			tab_rootpages: tab_tab_rootpages;
			tab_sitemarkers: tab_tab_sitemarkers;
			tab_sitesettings: tab_tab_sitesettings;
			tab_websiteaccesspermissions: tab_tab_websiteaccesspermissions;
		}
		interface Body {
			Tab: Tabs;
			/** Lookup to Website Language - the current default language of the website */
			mspp_defaultlanguage: DevKit.Controls.Lookup;
			/** Web Template to use as Website footer content. */
			mspp_footerwebtemplateid: DevKit.Controls.Lookup;
			/** Web Template to use as Website header content. */
			mspp_headerwebtemplateid: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Website associated with Website. */
			mspp_parentwebsiteid: DevKit.Controls.Lookup;
			mspp_partialurl: DevKit.Controls.String;
			/** Tracks the primary domain name of the Portal */
			mspp_primarydomainname: DevKit.Controls.String;
			mspp_website_language: DevKit.Controls.Integer;
		}
		interface Navigation {
			mspp_columnpermissionprofile_website: DevKit.Controls.NavigationItem,
			mspp_mspp_website_mspp_websitelanguage: DevKit.Controls.NavigationItem,
			mspp_website_adplacement: DevKit.Controls.NavigationItem,
			mspp_website_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			mspp_website_adx_portalcomments: DevKit.Controls.NavigationItem,
			mspp_website_Appointments: DevKit.Controls.NavigationItem,
			mspp_website_BulkOperations: DevKit.Controls.NavigationItem,
			mspp_website_CampaignActivities: DevKit.Controls.NavigationItem,
			mspp_website_CampaignResponses: DevKit.Controls.NavigationItem,
			mspp_website_contentsnippet: DevKit.Controls.NavigationItem,
			mspp_website_Emails: DevKit.Controls.NavigationItem,
			mspp_website_entityform: DevKit.Controls.NavigationItem,
			mspp_website_entitylist: DevKit.Controls.NavigationItem,
			mspp_website_IncidentResolutions: DevKit.Controls.NavigationItem,
			mspp_website_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			mspp_website_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			mspp_website_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			mspp_website_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			mspp_website_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			mspp_website_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			mspp_website_msfp_alerts: DevKit.Controls.NavigationItem,
			mspp_website_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			mspp_website_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			mspp_website_mspp_entitypermission: DevKit.Controls.NavigationItem,
			mspp_website_mspp_webtemplate: DevKit.Controls.NavigationItem,
			mspp_website_OpportunityCloses: DevKit.Controls.NavigationItem,
			mspp_website_OrderCloses: DevKit.Controls.NavigationItem,
			mspp_website_pagetemplate: DevKit.Controls.NavigationItem,
			mspp_website_parentwebsite: DevKit.Controls.NavigationItem,
			mspp_website_PhoneCalls: DevKit.Controls.NavigationItem,
			mspp_website_pollplacement: DevKit.Controls.NavigationItem,
			mspp_website_publishingstate: DevKit.Controls.NavigationItem,
			mspp_website_publishingstatetransition: DevKit.Controls.NavigationItem,
			mspp_website_QuoteCloses: DevKit.Controls.NavigationItem,
			mspp_website_redirect: DevKit.Controls.NavigationItem,
			mspp_website_ServiceAppointments: DevKit.Controls.NavigationItem,
			mspp_website_shortcut: DevKit.Controls.NavigationItem,
			mspp_website_sitemarker: DevKit.Controls.NavigationItem,
			mspp_website_sitesetting: DevKit.Controls.NavigationItem,
			mspp_website_Tasks: DevKit.Controls.NavigationItem,
			mspp_website_webfile: DevKit.Controls.NavigationItem,
			mspp_website_webform: DevKit.Controls.NavigationItem,
			mspp_website_weblinkset: DevKit.Controls.NavigationItem,
			mspp_website_webpage: DevKit.Controls.NavigationItem,
			mspp_website_webpageaccesscontrolrule: DevKit.Controls.NavigationItem,
			mspp_website_webrole: DevKit.Controls.NavigationItem,
			mspp_website_websiteaccess: DevKit.Controls.NavigationItem
		}
		interface Grid {
			grid_advancedforms: DevKit.Controls.Grid;
			grid_basicforms: DevKit.Controls.Grid;
			grid_childpages: DevKit.Controls.Grid;
			grid_lists: DevKit.Controls.Grid;
			grid_pagetemplates: DevKit.Controls.Grid;
			grid_rootpages: DevKit.Controls.Grid;
			grid_sitemarkers: DevKit.Controls.Grid;
			grid_sitesettings: DevKit.Controls.Grid;
			grid_websiteaccesspermissions: DevKit.Controls.Grid;
			SupportedLanguagesSubgrid: DevKit.Controls.Grid;
		}
	}
	class Formmspp_website_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_website_Information */
		Body: DevKit.Formmspp_website_Information.Body;
		/** The Navigation of form mspp_website_Information */
		Navigation: DevKit.Formmspp_website_Information.Navigation;
		/** The Grid of form mspp_website_Information */
		Grid: DevKit.Formmspp_website_Information.Grid;
		/** The SidePanes of form mspp_website_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_websiteApi {
		/**
		* DynamicsCrm.DevKit mspp_websiteApi
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
		/** Lookup to Website Language - the current default language of the website */
		mspp_defaultlanguage: string;
		/** Web Template to use as Website footer content. */
		mspp_footerwebtemplateid: string;
		/** Web Template to use as Website header content. */
		mspp_headerwebtemplateid: string;
		/** Shows who last updated the record. */
		mspp_modifiedby: string;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date;
		/** The name of the custom entity. */
		mspp_name: string;
		/** Unique identifier for Website associated with Website. */
		mspp_parentwebsiteid: string;
		mspp_partialurl: string;
		/** Tracks the primary domain name of the Portal */
		mspp_primarydomainname: string;
		mspp_website_language: number;
		/** Version of the website record */
		mspp_website_version: string;
		/** Unique identifier for entity instances */
		mspp_websiteId: string;
		/** Status of the Website */
		statecode: OptionSet.mspp_website.statecode;
		/** Reason for the status of the Website */
		statuscode: OptionSet.mspp_website.statuscode;
		readonly FormattedValue: {
			/** Shows who created the record. */
			readonly mspp_createdby: string;
			/** Shows the date and time when the record was created. */
			readonly mspp_createdon_UtcDateAndTime: string;
			/** Lookup to Website Language - the current default language of the website */
			readonly mspp_defaultlanguage: string;
			/** Web Template to use as Website footer content. */
			readonly mspp_footerwebtemplateid: string;
			/** Web Template to use as Website header content. */
			readonly mspp_headerwebtemplateid: string;
			/** Shows who last updated the record. */
			readonly mspp_modifiedby: string;
			/** Shows the date and time when the record was modified. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** The name of the custom entity. */
			readonly mspp_name: string;
			/** Unique identifier for Website associated with Website. */
			readonly mspp_parentwebsiteid: string;
			readonly mspp_partialurl: string;
			/** Tracks the primary domain name of the Portal */
			readonly mspp_primarydomainname: string;
			readonly mspp_website_language: string;
			/** Version of the website record */
			readonly mspp_website_version: string;
			/** Unique identifier for entity instances */
			readonly mspp_websiteId: string;
			/** Status of the Website */
			readonly statecode: string;
			/** Reason for the status of the Website */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_website {
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