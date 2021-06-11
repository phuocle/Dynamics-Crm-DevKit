//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_masterentityroutingconfiguration_Information {
		interface Tabs {
		}
		interface Body {
			/** Logical name of the entity. */
			msdyn_entitylogicalname: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The rule set for master entity routing configuration. */
			msdyn_rulesetid: DevKit.Controls.Lookup;
			/** Unique Name for the entity. */
			msdyn_UniqueName: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_masterentityroutingconfiguration_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_masterentityroutingconfiguration_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_masterentityroutingconfiguration_Information */
		Body: DevKit.Formmsdyn_masterentityroutingconfiguration_Information.Body;
	}
	namespace FormInformation_New {
		interface tab_tab1_summary_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab1_summary extends DevKit.Controls.ITab {
			Section: tab_tab1_summary_Sections;
		}
		interface Tabs {
			tab1_summary: tab_tab1_summary;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier for entity instances */
			msdyn_masterentityroutingconfigurationId: DevKit.Controls.String;
		}
	}
	class FormInformation_New extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Information_New
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Information_New */
		Body: DevKit.FormInformation_New.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_masterentityroutingconfiguration {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
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
//{'JsForm':['Information','Information (New)'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}