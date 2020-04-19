//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_requirementresourcepreference_Information {
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_2 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			msdyn_Account: DevKit.Form.Controls.ControlLookup;
			/** Bookable Resource */
			msdyn_BookableResource: DevKit.Form.Controls.ControlLookup;
			msdyn_Cascade: DevKit.Form.Controls.ControlBoolean;
			/** The date and time when a restricted resource is no longer restricted. */
			msdyn_ExpirationDate: DevKit.Form.Controls.ControlDateTime;
			/** Preference Type */
			msdyn_PreferenceType: DevKit.Form.Controls.ControlOptionSet;
			/** Resource Requirement */
			msdyn_ResourceRequirement: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Work Order associated with Requirement Resource Preference. */
			msdyn_WorkOrder: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_requirementresourcepreference_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_requirementresourcepreference_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_requirementresourcepreference_Information */
		Body: LuckyMokey.Formmsdyn_requirementresourcepreference_Information.Body;
	}
	namespace Formmsdyn_requirementresourcepreference_Quick_Create_from_Requirement {
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
			msdyn_Account: DevKit.Form.Controls.ControlLookup;
			/** Bookable Resource */
			msdyn_BookableResource: DevKit.Form.Controls.ControlLookup;
			/** The date and time when a restricted resource is no longer restricted. */
			msdyn_ExpirationDate: DevKit.Form.Controls.ControlDateTime;
			/** Preference Type */
			msdyn_PreferenceType: DevKit.Form.Controls.ControlOptionSet;
			/** Resource Requirement */
			msdyn_ResourceRequirement: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Work Order associated with Requirement Resource Preference. */
			msdyn_WorkOrder: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_requirementresourcepreference_Quick_Create_from_Requirement extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_requirementresourcepreference_Quick_Create_from_Requirement
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_requirementresourcepreference_Quick_Create_from_Requirement */
		Body: LuckyMokey.Formmsdyn_requirementresourcepreference_Quick_Create_from_Requirement.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_requirementresourcepreference {
		enum msdyn_PreferenceType {
			/** 690970000 */
			Preferred,
			/** 690970001 */
			Restricted,
			/** 690970002 */
			Must_choose_from
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
//{'JsForm':['Information','Quick Create from Requirement'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}