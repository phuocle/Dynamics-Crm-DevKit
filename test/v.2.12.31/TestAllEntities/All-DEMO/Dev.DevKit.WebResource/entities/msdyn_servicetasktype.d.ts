//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_servicetasktype_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_Description: DevKit.Controls.String;
			msdyn_EstimatedDuration: DevKit.Controls.Integer;
			/** Unique identifier for Inspection Template associated with Service Task Type. */
			msdyn_Inspection: DevKit.Controls.Lookup;
			/** Unique identifier for Inspection Template associated with Service Task Type. */
			msdyn_Inspection_1: DevKit.Controls.Lookup;
			/** Depicts whether inspection is enabled for ServiceTaskType. */
			msdyn_InspectionEnabled: DevKit.Controls.Boolean;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Service Task Type */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_servicetasktype_msdyn_agreementbookingservicetask_TaskType: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_servicetasktype_msdyn_incidenttypeservicetask_TaskType: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_servicetasktype_msdyn_quotebookingservicetask_TaskType: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_servicetasktype_msdyn_workorderservicetask_TaskType: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_servicetasktype_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_servicetasktype_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_servicetasktype_Information */
		Body: DevKit.Formmsdyn_servicetasktype_Information.Body;
		/** The Footer section of form msdyn_servicetasktype_Information */
		Footer: DevKit.Formmsdyn_servicetasktype_Information.Footer;
		/** The Navigation of form msdyn_servicetasktype_Information */
		Navigation: DevKit.Formmsdyn_servicetasktype_Information.Navigation;
	}
	namespace FormService_Task_Type_Quick_Create_5x5 {
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
			msdyn_Description: DevKit.Controls.String;
			msdyn_EstimatedDuration: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
	}
	class FormService_Task_Type_Quick_Create_5x5 extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Service_Task_Type_Quick_Create_5x5
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Service_Task_Type_Quick_Create_5x5 */
		Body: DevKit.FormService_Task_Type_Quick_Create_5x5.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_servicetasktype {
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
//{'JsForm':['Information','Service Task Type Quick Create 5x5'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}