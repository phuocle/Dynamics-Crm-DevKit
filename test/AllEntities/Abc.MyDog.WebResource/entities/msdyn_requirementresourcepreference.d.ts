//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_requirementresourcepreference_Information {
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			msdyn_Account: DevKit.Controls.Lookup;
			/** Bookable Resource */
			msdyn_BookableResource: DevKit.Controls.Lookup;
			msdyn_Cascade: DevKit.Controls.Boolean;
			/** The date and time when a restricted resource is no longer restricted. */
			msdyn_ExpirationDate: DevKit.Controls.DateTime;
			/** Preference Type */
			msdyn_PreferenceType: DevKit.Controls.OptionSet;
			/** Resource Requirement */
			msdyn_ResourceRequirement: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order associated with Requirement Resource Preference. */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_requirementresourcepreference_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_requirementresourcepreference_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_requirementresourcepreference_Information */
		Body: MyDog.Formmsdyn_requirementresourcepreference_Information.Body;
	}
	namespace Formmsdyn_requirementresourcepreference_Quick_Create_from_Requirement {
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
			msdyn_Account: DevKit.Controls.Lookup;
			/** Bookable Resource */
			msdyn_BookableResource: DevKit.Controls.Lookup;
			/** The date and time when a restricted resource is no longer restricted. */
			msdyn_ExpirationDate: DevKit.Controls.DateTime;
			/** Preference Type */
			msdyn_PreferenceType: DevKit.Controls.OptionSet;
			/** Resource Requirement */
			msdyn_ResourceRequirement: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order associated with Requirement Resource Preference. */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_requirementresourcepreference_Quick_Create_from_Requirement extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_requirementresourcepreference_Quick_Create_from_Requirement
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.WebApi;
		/** The Body section of form msdyn_requirementresourcepreference_Quick_Create_from_Requirement */
		Body: MyDog.Formmsdyn_requirementresourcepreference_Quick_Create_from_Requirement.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_requirementresourcepreference {
		enum msdyn_PreferenceType {
			/** 690970002 */
			Must_choose_from,
			/** 690970000 */
			Preferred,
			/** 690970001 */
			Restricted
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
//{'JsForm':['Information','Quick Create from Requirement'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}