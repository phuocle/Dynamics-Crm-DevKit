//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_website_Information {
		interface tab__A36E3E44_6924_4722_8D78_44175EAD950B_Sections {
			/** General */
			_139917FD_C4F2_411C_BCAB_D810AD4B3A5A: DevKit.Controls.Section;
			/** Options */
			_A36E3E44_6924_4722_8D78_44175EAD950B_SECTION_2: DevKit.Controls.Section;
			/** Section */
			tab_13_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_advancedforms_Sections {
			/** Section */
			tab_12_section_3: DevKit.Controls.Section;
		}
		interface tab_tab_basicforms_Sections {
			/** Section */
			tab_11_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_childpages_Sections {
			/** Section */
			tab_5_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_lists_Sections {
			/** Section */
			tab_10_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_pagetemplates_Sections {
			/** Section */
			tab_10_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_rootpages_Sections {
			/** Section */
			tab_12_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_sitemarkers_Sections {
			/** Section */
			tab_9_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_sitesettings_Sections {
			/** Section */
			tab_8_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_websiteaccesspermissions_Sections {
			/** Section */
			tab_12_section_1: DevKit.Controls.Section;
		}
		/** General */
		interface tab__A36E3E44_6924_4722_8D78_44175EAD950B extends DevKit.Controls.ITab {
			Section: tab__A36E3E44_6924_4722_8D78_44175EAD950B_Sections;
		}
		/** Multistep Forms */
		interface tab_tab_advancedforms extends DevKit.Controls.ITab {
			Section: tab_tab_advancedforms_Sections;
		}
		/** Basic Forms */
		interface tab_tab_basicforms extends DevKit.Controls.ITab {
			Section: tab_tab_basicforms_Sections;
		}
		/** Child Pages */
		interface tab_tab_childpages extends DevKit.Controls.ITab {
			Section: tab_tab_childpages_Sections;
		}
		/** Lists */
		interface tab_tab_lists extends DevKit.Controls.ITab {
			Section: tab_tab_lists_Sections;
		}
		/** Page Templates */
		interface tab_tab_pagetemplates extends DevKit.Controls.ITab {
			Section: tab_tab_pagetemplates_Sections;
		}
		/** Root Pages */
		interface tab_tab_rootpages extends DevKit.Controls.ITab {
			Section: tab_tab_rootpages_Sections;
		}
		/** Site Markers */
		interface tab_tab_sitemarkers extends DevKit.Controls.ITab {
			Section: tab_tab_sitemarkers_Sections;
		}
		/** Site Settings */
		interface tab_tab_sitesettings extends DevKit.Controls.ITab {
			Section: tab_tab_sitesettings_Sections;
		}
		/** Website Access Permissions */
		interface tab_tab_websiteaccesspermissions extends DevKit.Controls.ITab {
			Section: tab_tab_websiteaccesspermissions_Sections;
		}
		interface Tabs {
			/** General */
			_A36E3E44_6924_4722_8D78_44175EAD950B: tab__A36E3E44_6924_4722_8D78_44175EAD950B;
			/** Multistep Forms */
			tab_advancedforms: tab_tab_advancedforms;
			/** Basic Forms */
			tab_basicforms: tab_tab_basicforms;
			/** Child Pages */
			tab_childpages: tab_tab_childpages;
			/** Lists */
			tab_lists: tab_tab_lists;
			/** Page Templates */
			tab_pagetemplates: tab_tab_pagetemplates;
			/** Root Pages */
			tab_rootpages: tab_tab_rootpages;
			/** Site Markers */
			tab_sitemarkers: tab_tab_sitemarkers;
			/** Site Settings */
			tab_sitesettings: tab_tab_sitesettings;
			/** Website Access Permissions */
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
			/** Partial URL */
			mspp_partialurl: DevKit.Controls.String;
			/** Tracks the primary domain name of the Portal */
			mspp_primarydomainname: DevKit.Controls.String;
			/** Language */
			mspp_website_language: DevKit.Controls.Integer;
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
			/** Supported Languages */
			SupportedLanguagesSubgrid: DevKit.Controls.Grid;
		}
	}
	export class Formmspp_website_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form mspp_website_Information */
		Body: DevKit.Formmspp_website_Information.Body;
		/** The Grid of form mspp_website_Information */
		Grid: DevKit.Formmspp_website_Information.Grid;
	}
	export class mspp_websiteApi {
		/**
		* DynamicsCrm.DevKit mspp_websiteApi
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
		/** Lookup to Website Language - the current default language of the website */
		mspp_defaultlanguage: string | null;
		/** Web Template to use as Website footer content. */
		mspp_footerwebtemplateid: string | null;
		/** Web Template to use as Website header content. */
		mspp_headerwebtemplateid: string | null;
		/** Shows who last updated the record. */
		mspp_modifiedby: string | null;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date | null;
		/** The name of the custom entity. */
		mspp_name: string | null;
		/** Unique identifier for Website associated with Website. */
		mspp_parentwebsiteid: string | null;
		mspp_partialurl: string | null;
		/** Tracks the primary domain name of the Portal */
		mspp_primarydomainname: string | null;
		mspp_website_language: number | null;
		/** Version of the website record */
		mspp_website_version: string | null;
		/** Unique identifier for entity instances */
		mspp_websiteId: string | null;
		/** Status of the Website */
		statecode: OptionSet.mspp_website.statecode | null;
		/** Reason for the status of the Website */
		statuscode: OptionSet.mspp_website.statuscode | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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