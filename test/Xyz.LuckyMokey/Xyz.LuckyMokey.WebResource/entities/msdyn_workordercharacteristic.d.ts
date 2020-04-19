//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_workordercharacteristic_Information {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Specify the characteristic required for this work order and incident. */
			msdyn_Characteristic: DevKit.Form.Controls.ControlLookup;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Specify the rating value required for this work order and incident. */
			msdyn_RatingValue: DevKit.Form.Controls.ControlLookup;
			msdyn_WorkOrder: DevKit.Form.Controls.ControlLookup;
			/** Incident related to this Skill Type */
			msdyn_WorkOrderIncident: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Work Order Characteristic */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_workordercharacteristic_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_workordercharacteristic_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_workordercharacteristic_Information */
		Body: LuckyMokey.Formmsdyn_workordercharacteristic_Information.Body;
		/** The Footer section of form msdyn_workordercharacteristic_Information */
		Footer: LuckyMokey.Formmsdyn_workordercharacteristic_Information.Footer;
		/** The Navigation of form msdyn_workordercharacteristic_Information */
		Navigation: LuckyMokey.Formmsdyn_workordercharacteristic_Information.Navigation;
	}
	namespace FormWork_Order_Characteristic_Mobile {
		interface tab_fstab_general_Sections {
			fstab_general_section_general: DevKit.Form.Controls.ControlSection;
			fstab_general_section_2: DevKit.Form.Controls.ControlSection;
			fstab_general_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_other_Sections {
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
			tab_3_section_2: DevKit.Form.Controls.ControlSection;
			tab_3_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids_section: DevKit.Form.Controls.ControlSection;
			fstab_sub_grids_section_2: DevKit.Form.Controls.ControlSection;
			fstab_sub_grids_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_general_Sections;
		}
		interface tab_fstab_other extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_other_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface Tabs {
			fstab_general: tab_fstab_general;
			fstab_other: tab_fstab_other;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Specify the characteristic required for this work order and incident. */
			msdyn_Characteristic: DevKit.Form.Controls.ControlLookup;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Specify the rating value required for this work order and incident. */
			msdyn_RatingValue: DevKit.Form.Controls.ControlLookup;
			msdyn_WorkOrder: DevKit.Form.Controls.ControlLookup;
			/** Incident related to this Skill Type */
			msdyn_WorkOrderIncident: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormWork_Order_Characteristic_Mobile extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Work_Order_Characteristic_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Work_Order_Characteristic_Mobile */
		Body: LuckyMokey.FormWork_Order_Characteristic_Mobile.Body;
		/** The Navigation of form Work_Order_Characteristic_Mobile */
		Navigation: LuckyMokey.FormWork_Order_Characteristic_Mobile.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_workordercharacteristic {
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
//{'JsForm':['Information','Work Order Characteristic - Mobile'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}