//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_weblinkset_Information {
		interface tab__8C794036_9DC7_4C14_B3F1_705DA097C5EF_Sections {
			_0907E05B_70C7_4463_80BD_ED65C2911934: DevKit.Controls.Section;
			mspp_weblinkset_description_monacoEditor: DevKit.Controls.Section;
		}
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_4_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab__8C794036_9DC7_4C14_B3F1_705DA097C5EF extends DevKit.Controls.ITab {
			Section: tab__8C794036_9DC7_4C14_B3F1_705DA097C5EF_Sections;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface tab_tab_4 extends DevKit.Controls.ITab {
			Section: tab_tab_4_Sections;
		}
		interface Tabs {
			_8C794036_9DC7_4C14_B3F1_705DA097C5EF: tab__8C794036_9DC7_4C14_B3F1_705DA097C5EF;
			tab_3: tab_tab_3;
			tab_4: tab_tab_4;
		}
		interface Body {
			Tab: Tabs;
			mspp_copy: DevKit.Controls.String;
			mspp_copy1: DevKit.Controls.String;
			/** Stores the label that is shown on the user interface (UI) in the data editing mode. */
			mspp_display_name: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Unique identifier for Publishing State associated with Web Link Set. */
			mspp_publishingstateid: DevKit.Controls.Lookup;
			mspp_title: DevKit.Controls.String;
			/** Unique identifier for Website associated with Web Link Set. */
			mspp_websiteid: DevKit.Controls.Lookup;
			/** Optional language to associate with web link sets for language-specific primary navigation */
			mspp_websitelanguageid: DevKit.Controls.Lookup;
		}
		interface Navigation {
			mspp_weblinkset_weblink: DevKit.Controls.NavigationItem,
			mspp_webpage_navigation_weblinkset: DevKit.Controls.NavigationItem
		}
		interface Grid {
			grid_webpages: DevKit.Controls.Grid;
			weblinkset: DevKit.Controls.Grid;
		}
	}
	class Formmspp_weblinkset_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_weblinkset_Information */
		Body: DevKit.Formmspp_weblinkset_Information.Body;
		/** The Navigation of form mspp_weblinkset_Information */
		Navigation: DevKit.Formmspp_weblinkset_Information.Navigation;
		/** The Grid of form mspp_weblinkset_Information */
		Grid: DevKit.Formmspp_weblinkset_Information.Grid;
		/** The SidePanes of form mspp_weblinkset_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_weblinksetApi {
		/**
		* DynamicsCrm.DevKit mspp_weblinksetApi
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
		mspp_copy: string;
		/** Shows who created the record. */
		mspp_createdby: string;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date;
		/** Stores the label that is shown on the user interface (UI) in the data editing mode. */
		mspp_display_name: string;
		/** Shows who last updated the record. */
		mspp_modifiedby: string;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date;
		/** The name of the custom entity. */
		mspp_name: string;
		/** Unique identifier for Publishing State associated with Web Link Set. */
		mspp_publishingstateid: string;
		mspp_title: string;
		/** Unique identifier for entity instances */
		mspp_weblinksetId: string;
		/** Unique identifier for Website associated with Web Link Set. */
		mspp_websiteid: string;
		/** Optional language to associate with web link sets for language-specific primary navigation */
		mspp_websitelanguageid: string;
		/** Status of the Web Link Set */
		statecode: OptionSet.mspp_weblinkset.statecode;
		/** Reason for the status of the Web Link Set */
		statuscode: OptionSet.mspp_weblinkset.statuscode;
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