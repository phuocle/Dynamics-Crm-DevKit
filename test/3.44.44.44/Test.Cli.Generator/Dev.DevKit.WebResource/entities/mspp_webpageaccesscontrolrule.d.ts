//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_webpageaccesscontrolrule_Information {
		interface tab__300B9BF7_0715_4AE2_8C50_A8C82541E3A9_Sections {
			_9CE2EE20_11E4_4D93_9F2A_C5B20F77791F: DevKit.Controls.Section;
		}
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_webroles_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab__300B9BF7_0715_4AE2_8C50_A8C82541E3A9 extends DevKit.Controls.ITab {
			Section: tab__300B9BF7_0715_4AE2_8C50_A8C82541E3A9_Sections;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface tab_tab_webroles extends DevKit.Controls.ITab {
			Section: tab_tab_webroles_Sections;
		}
		interface Tabs {
			_300B9BF7_0715_4AE2_8C50_A8C82541E3A9: tab__300B9BF7_0715_4AE2_8C50_A8C82541E3A9;
			tab_3: tab_tab_3;
			tab_webroles: tab_tab_webroles;
		}
		interface Body {
			Tab: Tabs;
			mspp_description: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			mspp_right: DevKit.Controls.OptionSet;
			/** All child web files directly related to this web page will be excluded from security validation. This does not exclude the children's descendants. */
			mspp_scope: DevKit.Controls.OptionSet;
			/** Unique identifier for Web Page associated with Web Page Access Control Rule. */
			mspp_webpageid: DevKit.Controls.Lookup;
			/** Unique identifier for Website associated with Web Page Access Control Rule. */
			mspp_websiteid: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
		interface Grid {
			grid_webroles: DevKit.Controls.Grid;
			publishing_states: DevKit.Controls.Grid;
		}
	}
	class Formmspp_webpageaccesscontrolrule_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_webpageaccesscontrolrule_Information */
		Body: DevKit.Formmspp_webpageaccesscontrolrule_Information.Body;
		/** The Navigation of form mspp_webpageaccesscontrolrule_Information */
		Navigation: DevKit.Formmspp_webpageaccesscontrolrule_Information.Navigation;
		/** The Grid of form mspp_webpageaccesscontrolrule_Information */
		Grid: DevKit.Formmspp_webpageaccesscontrolrule_Information.Grid;
		/** The SidePanes of form mspp_webpageaccesscontrolrule_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_webpageaccesscontrolruleApi {
		/**
		* DynamicsCrm.DevKit mspp_webpageaccesscontrolruleApi
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
		/** Shows who last updated the record. */
		mspp_modifiedby: string;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date;
		/** The name of the custom entity. */
		mspp_name: string;
		mspp_right: OptionSet.mspp_webpageaccesscontrolrule.mspp_right;
		/** All child web files directly related to this web page will be excluded from security validation. This does not exclude the children's descendants. */
		mspp_scope: OptionSet.mspp_webpageaccesscontrolrule.mspp_scope;
		/** Unique identifier for entity instances */
		mspp_webpageaccesscontrolruleId: string;
		/** Unique identifier for Web Page associated with Web Page Access Control Rule. */
		mspp_webpageid: string;
		/** Unique identifier for Website associated with Web Page Access Control Rule. */
		mspp_websiteid: string;
		/** Status of the Web Page Access Control Rule */
		statecode: OptionSet.mspp_webpageaccesscontrolrule.statecode;
		/** Reason for the status of the Web Page Access Control Rule */
		statuscode: OptionSet.mspp_webpageaccesscontrolrule.statuscode;
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
			/** 1 */
			Grant_Change,
			/** 2 */
			Restrict_Read
		}
		enum mspp_scope {
			/** 1 */
			All_content,
			/** 2 */
			Exclude_direct_child_web_files
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