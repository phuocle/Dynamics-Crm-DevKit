//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_timeentry_Information {
		interface tab__AE8B7CDD_484B_49A8_A00D_C201927D5729_Sections {
			_AE8B7CDD_484B_49A8_A00D_C201927D5729: DevKit.Form.Controls.ControlSection;
		}
		interface tab__AE8B7CDD_484B_49A8_A00D_C201927D5729 extends DevKit.Form.Controls.IControlTab {
			Section: tab__AE8B7CDD_484B_49A8_A00D_C201927D5729_Sections;
		}
		interface Tabs {
			_AE8B7CDD_484B_49A8_A00D_C201927D5729: tab__AE8B7CDD_484B_49A8_A00D_C201927D5729;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Enter the time entry date. */
			msdyn_date: DevKit.Form.Controls.ControlDate;
			/** Type the description of the time entry. */
			msdyn_description: DevKit.Form.Controls.ControlString;
			/** Shows the time spent. */
			msdyn_duration: DevKit.Form.Controls.ControlInteger;
			/** Select the entry status. */
			msdyn_entryStatus: DevKit.Form.Controls.ControlOptionSet;
			/** Type the external description of the time entry. */
			msdyn_externalDescription: DevKit.Form.Controls.ControlString;
			/** Select the project that the time entry is related to. */
			msdyn_project: DevKit.Form.Controls.ControlLookup;
			/** Select the project task that the time entry is related to. */
			msdyn_projectTask: DevKit.Form.Controls.ControlLookup;
			/** Select the role that the user has in the project that the time entry is for. */
			msdyn_resourceCategory: DevKit.Form.Controls.ControlLookup;
			/** Select the time entry type. */
			msdyn_type: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_timeentry_msdyn_timeoffcalendar_timeEntry: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_timeentry_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_timeentry_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_timeentry_Information */
		Body: LuckyMokey.Formmsdyn_timeentry_Information.Body;
		/** The Navigation of form msdyn_timeentry_Information */
		Navigation: LuckyMokey.Formmsdyn_timeentry_Information.Navigation;
	}
	namespace FormCreate_Time_Entry {
		interface tab_Time_Entry_Quick_Create_Form_Sections {
			tab_1_column_1_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_Time_Entry_Quick_Create_Form extends DevKit.Form.Controls.IControlTab {
			Section: tab_Time_Entry_Quick_Create_Form_Sections;
		}
		interface Tabs {
			Time_Entry_Quick_Create_Form: tab_Time_Entry_Quick_Create_Form;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the time entry date. */
			msdyn_date: DevKit.Form.Controls.ControlDate;
			/** Type the description of the time entry. */
			msdyn_description: DevKit.Form.Controls.ControlString;
			/** Shows the time spent. */
			msdyn_duration: DevKit.Form.Controls.ControlInteger;
			/** Type the external description of the time entry. */
			msdyn_externalDescription: DevKit.Form.Controls.ControlString;
			/** Select the project that the time entry is related to. */
			msdyn_project: DevKit.Form.Controls.ControlLookup;
			/** Select the project task that the time entry is related to. */
			msdyn_projectTask: DevKit.Form.Controls.ControlLookup;
			/** Select the role that the user has in the project that the time entry is for. */
			msdyn_resourceCategory: DevKit.Form.Controls.ControlLookup;
			/** Select the time entry type. */
			msdyn_type: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormCreate_Time_Entry extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Create_Time_Entry
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Create_Time_Entry */
		Body: LuckyMokey.FormCreate_Time_Entry.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_timeentry {
		enum msdyn_entryStatus {
			/** 192350000 */
			Draft,
			/** 192350001 */
			Returned,
			/** 192350002 */
			Approved,
			/** 192350003 */
			Submitted,
			/** 192350004 */
			Recall_Requested
		}
		enum msdyn_relatedItemType {
			/** 192350000 */
			None,
			/** 192350001 */
			Resource_Booking,
			/** 192350002 */
			Resource_Assignment,
			/** 192350100 */
			Exchange_Appointments
		}
		enum msdyn_targetEntryStatus {
			/** 192350000 */
			Draft,
			/** 192350001 */
			Returned,
			/** 192350002 */
			Approved,
			/** 192350003 */
			Submitted,
			/** 192350004 */
			Recall_Requested
		}
		enum msdyn_type {
			/** 192350000 */
			Work,
			/** 192350001 */
			Absence,
			/** 192350002 */
			Vacation
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
//{'JsForm':['Create Time Entry','Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}