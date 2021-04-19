//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_timegroup_Information {
		interface tab__EB571BB4_B525_4254_A87C_716F6DC00062_Sections {
			_9440EEEF_63F6_4682_8B8E_43760F0BBE48: DevKit.Controls.Section;
		}
		interface tab_interval_tab_Sections {
			tab_4_section_1: DevKit.Controls.Section;
			tab_4_section_2: DevKit.Controls.Section;
		}
		interface tab_Detailstab_Sections {
		}
		interface tab__EB571BB4_B525_4254_A87C_716F6DC00062 extends DevKit.Controls.ITab {
			Section: tab__EB571BB4_B525_4254_A87C_716F6DC00062_Sections;
		}
		interface tab_interval_tab extends DevKit.Controls.ITab {
			Section: tab_interval_tab_Sections;
		}
		interface tab_Detailstab extends DevKit.Controls.ITab {
			Section: tab_Detailstab_Sections;
		}
		interface Tabs {
			_EB571BB4_B525_4254_A87C_716F6DC00062: tab__EB571BB4_B525_4254_A87C_716F6DC00062;
			interval_tab: tab_interval_tab;
			Detailstab: tab_Detailstab;
		}
		interface Body {
			Tab: Tabs;
			WebResource_msdyn_intervalbegin: DevKit.Controls.WebResource;
			/** Only display the top results per time group detail, per date. */
			msdyn_DisplayTopXResultsInSATimeGroup: DevKit.Controls.Integer;
			msdyn_HideBookingTimeOnSA: DevKit.Controls.Boolean;
			/** Defines the window size of a time group */
			msdyn_interval: DevKit.Controls.Integer;
			/** Defines a start time point of a time group */
			msdyn_intervalsbegin: DevKit.Controls.DateTime;
			/** Enter the name of the "Time Group" entity. */
			msdyn_name: DevKit.Controls.String;
			/** If enabled, the interval calculation will be restarted at the beginning of each time group detail. */
			msdyn_ResetPerTimeGroupDetail: DevKit.Controls.Boolean;
			msdyn_resultsperinterval: DevKit.Controls.Integer;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Grid {
			detailsgrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_timegroup_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_timegroup_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_timegroup_Information */
		Body: MyDog.Formmsdyn_timegroup_Information.Body;
		/** The Navigation of form msdyn_timegroup_Information */
		Navigation: MyDog.Formmsdyn_timegroup_Information.Navigation;
		/** The Grid of form msdyn_timegroup_Information */
		Grid: MyDog.Formmsdyn_timegroup_Information.Grid;
	}
	namespace FormFulfillment_Preference_Quick_Create_Form {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Defines the window size of a time group */
			msdyn_interval: DevKit.Controls.Integer;
			/** Enter the name of the "Time Group" entity. */
			msdyn_name: DevKit.Controls.String;
		}
	}
	class FormFulfillment_Preference_Quick_Create_Form extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Fulfillment_Preference_Quick_Create_Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.WebApi;
		/** The Body section of form Fulfillment_Preference_Quick_Create_Form */
		Body: MyDog.FormFulfillment_Preference_Quick_Create_Form.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_timegroup {
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
//{'JsForm':['Quick Create Form','Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}