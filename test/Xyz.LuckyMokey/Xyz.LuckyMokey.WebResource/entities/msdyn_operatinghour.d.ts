﻿//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_operatinghour_Information {
		interface Tabs {
		}
		interface Body {
			/** Provide description about presence */
			msdyn_Description: DevKit.Form.Controls.ControlString;
			msdyn_EnableAllDays: DevKit.Form.Controls.ControlBoolean;
			/** Enter time in 24-hour format (HH:mm). */
			msdyn_Endtimestring: DevKit.Form.Controls.ControlString;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			msdyn_oc_daysofweek: DevKit.Form.Controls.ControlMultiOptionSet;
			/** Enter time in 24-hour format (HH:mm). */
			msdyn_starttimestring: DevKit.Form.Controls.ControlString;
			msdyn_Timezone: DevKit.Form.Controls.ControlInteger;
			msdyn_Totalworkhours: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_operatinghour_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_operatinghour_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_operatinghour_Information */
		Body: LuckyMokey.Formmsdyn_operatinghour_Information.Body;
	}
	namespace FormOperating_hours {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_1 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Provide description about presence */
			msdyn_Description: DevKit.Form.Controls.ControlString;
			msdyn_EnableAllDays: DevKit.Form.Controls.ControlBoolean;
			/** Enter time in 24-hour format (HH:mm). */
			msdyn_Endtimestring: DevKit.Form.Controls.ControlString;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			msdyn_oc_daysofweek: DevKit.Form.Controls.ControlMultiOptionSet;
			/** Enter time in 24-hour format (HH:mm). */
			msdyn_starttimestring: DevKit.Form.Controls.ControlString;
			msdyn_Timezone: DevKit.Form.Controls.ControlInteger;
			msdyn_Totalworkhours: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormOperating_hours extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Operating_hours
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Operating_hours */
		Body: LuckyMokey.FormOperating_hours.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_operatinghour {
		enum msdyn_oc_daysofweek {
			/** 192350000 */
			Sun,
			/** 192350001 */
			Mon,
			/** 192350002 */
			Tue,
			/** 192350003 */
			Wed,
			/** 192350004 */
			Thu,
			/** 192350005 */
			Fri,
			/** 192350006 */
			Sat
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
//{'JsForm':['Information','Operating hours'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}