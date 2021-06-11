//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormEntry_Edit_Form {
		interface tab__9C558780_D2CE_4E55_8FDD_37082D8196BE_Sections {
			notes: DevKit.Controls.Section;
		}
		interface tab__AE8B7CDD_484B_49A8_A00D_C201927D5729_Sections {
		}
		interface tab__9C558780_D2CE_4E55_8FDD_37082D8196BE extends DevKit.Controls.ITab {
			Section: tab__9C558780_D2CE_4E55_8FDD_37082D8196BE_Sections;
		}
		interface tab__AE8B7CDD_484B_49A8_A00D_C201927D5729 extends DevKit.Controls.ITab {
			Section: tab__AE8B7CDD_484B_49A8_A00D_C201927D5729_Sections;
		}
		interface Tabs {
			_9C558780_D2CE_4E55_8FDD_37082D8196BE: tab__9C558780_D2CE_4E55_8FDD_37082D8196BE;
			_AE8B7CDD_484B_49A8_A00D_C201927D5729: tab__AE8B7CDD_484B_49A8_A00D_C201927D5729;
		}
		interface Body {
			Tab: Tabs;
			/** Type the description of the time entry. */
			msdyn_description: DevKit.Controls.String;
			/** Shows the time spent. */
			msdyn_duration: DevKit.Controls.Integer;
			/** Select the entry status. */
			msdyn_entryStatus: DevKit.Controls.OptionSet;
			/** Type the external description of the time entry. */
			msdyn_externalDescription: DevKit.Controls.String;
			/** Unique identifier for Time Source associated with Time Entry. */
			msdyn_timeentrysettingId: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
		}
	}
	class FormEntry_Edit_Form extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Entry_Edit_Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Entry_Edit_Form */
		Body: DevKit.FormEntry_Edit_Form.Body;
	}
	namespace Formmsdyn_timeentry_Field_Service_Information {
		interface tab_General_Sections {
			tab_2_section_1: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
			tab_2_section_3: DevKit.Controls.Section;
		}
		interface tab_General extends DevKit.Controls.ITab {
			Section: tab_General_Sections;
		}
		interface Tabs {
			General: tab_General;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the bookable resource. */
			msdyn_bookableresource: DevKit.Controls.Lookup;
			/** Unique identifier for Resource Booking associated with Time Entry. */
			msdyn_BookableResourceBooking: DevKit.Controls.Lookup;
			/** Booking Status */
			msdyn_BookingStatus: DevKit.Controls.Lookup;
			/** Type the description of the time entry. */
			msdyn_description: DevKit.Controls.String;
			/** Shows the time spent. */
			msdyn_duration: DevKit.Controls.Integer;
			/** The end time of the time entry. */
			msdyn_end: DevKit.Controls.DateTime;
			/** Select the entry status. */
			msdyn_entryStatus: DevKit.Controls.OptionSet;
			/** Type the external description of the time entry. */
			msdyn_externalDescription: DevKit.Controls.String;
			/** The start time of the time entry. */
			msdyn_start: DevKit.Controls.DateTime;
			/** Unique identifier for Time Source associated with Time Entry. */
			msdyn_timeentrysettingId: DevKit.Controls.Lookup;
			/** Unique identifier for Time Off Request associated with Time Entry. This field is auto-populated when a Time Entry is auto-created from a Time Off Request. */
			msdyn_timeoffrequest: DevKit.Controls.Lookup;
			/** Select the time entry type. */
			msdyn_type: DevKit.Controls.OptionSet;
			/** Unique identifier for Work Orders associated with Time Entry. */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_timeentry_Field_Service_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_timeentry_Field_Service_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_timeentry_Field_Service_Information */
		Body: DevKit.Formmsdyn_timeentry_Field_Service_Information.Body;
	}
	namespace Formmsdyn_timeentry_Information {
		interface tab__AE8B7CDD_484B_49A8_A00D_C201927D5729_Sections {
			_AE8B7CDD_484B_49A8_A00D_C201927D5729: DevKit.Controls.Section;
		}
		interface tab__AE8B7CDD_484B_49A8_A00D_C201927D5729 extends DevKit.Controls.ITab {
			Section: tab__AE8B7CDD_484B_49A8_A00D_C201927D5729_Sections;
		}
		interface Tabs {
			_AE8B7CDD_484B_49A8_A00D_C201927D5729: tab__AE8B7CDD_484B_49A8_A00D_C201927D5729;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the time entry date. */
			msdyn_date: DevKit.Controls.Date;
			/** Type the description of the time entry. */
			msdyn_description: DevKit.Controls.String;
			/** Shows the time spent. */
			msdyn_duration: DevKit.Controls.Integer;
			/** Select the entry status. */
			msdyn_entryStatus: DevKit.Controls.OptionSet;
			/** Type the external description of the time entry. */
			msdyn_externalDescription: DevKit.Controls.String;
			/** Select the project that the time entry is related to. */
			msdyn_project: DevKit.Controls.Lookup;
			/** Select the project task that the time entry is related to. */
			msdyn_projectTask: DevKit.Controls.Lookup;
			/** Select the role that the user has in the project that the time entry is for. */
			msdyn_resourceCategory: DevKit.Controls.Lookup;
			/** Unique identifier for Time Source associated with Time Entry. */
			msdyn_timeentrysettingId: DevKit.Controls.Lookup;
			/** Select the time entry type. */
			msdyn_type: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
		}
		interface Navigation {
			nav_msdyn_msdyn_timeentry_msdyn_timeoffcalendar_timeEntry: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_timeentry_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_timeentry_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_timeentry_Information */
		Body: DevKit.Formmsdyn_timeentry_Information.Body;
		/** The Navigation of form msdyn_timeentry_Information */
		Navigation: DevKit.Formmsdyn_timeentry_Information.Navigation;
	}
	namespace FormRow_Edit_Form {
		interface tab__AE8B7CDD_484B_49A8_A00D_C201927D5729_Sections {
		}
		interface tab__AE8B7CDD_484B_49A8_A00D_C201927D5729 extends DevKit.Controls.ITab {
			Section: tab__AE8B7CDD_484B_49A8_A00D_C201927D5729_Sections;
		}
		interface Tabs {
			_AE8B7CDD_484B_49A8_A00D_C201927D5729: tab__AE8B7CDD_484B_49A8_A00D_C201927D5729;
		}
		interface Body {
			Tab: Tabs;
			/** Type the description of the time entry. */
			msdyn_description: DevKit.Controls.String;
			/** Select the entry status. */
			msdyn_entryStatus: DevKit.Controls.OptionSet;
			/** Select the project that the time entry is related to. */
			msdyn_project: DevKit.Controls.Lookup;
			/** Select the project task that the time entry is related to. */
			msdyn_projectTask: DevKit.Controls.Lookup;
			/** Select the role that the user has in the project that the time entry is for. */
			msdyn_resourceCategory: DevKit.Controls.Lookup;
			/** Unique identifier for Time Source associated with Time Entry. */
			msdyn_timeentrysettingId: DevKit.Controls.Lookup;
			/** Select the time entry type. */
			msdyn_type: DevKit.Controls.OptionSet;
		}
	}
	class FormRow_Edit_Form extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Row_Edit_Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Row_Edit_Form */
		Body: DevKit.FormRow_Edit_Form.Body;
	}
	namespace FormTESA_Time_Entry_Main_Form {
		interface tab__AE8B7CDD_484B_49A8_A00D_C201927D5729_Sections {
			_AE8B7CDD_484B_49A8_A00D_C201927D5729: DevKit.Controls.Section;
		}
		interface tab__AE8B7CDD_484B_49A8_A00D_C201927D5729 extends DevKit.Controls.ITab {
			Section: tab__AE8B7CDD_484B_49A8_A00D_C201927D5729_Sections;
		}
		interface Tabs {
			_AE8B7CDD_484B_49A8_A00D_C201927D5729: tab__AE8B7CDD_484B_49A8_A00D_C201927D5729;
		}
		interface Body {
			Tab: Tabs;
			/** Type the description of the time entry. */
			msdyn_description: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
		}
	}
	class FormTESA_Time_Entry_Main_Form extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form TESA_Time_Entry_Main_Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form TESA_Time_Entry_Main_Form */
		Body: DevKit.FormTESA_Time_Entry_Main_Form.Body;
	}
	namespace FormCreate_Time_Entry {
		interface tab_Time_Entry_Quick_Create_Form_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
		}
		interface tab_Time_Entry_Quick_Create_Form extends DevKit.Controls.ITab {
			Section: tab_Time_Entry_Quick_Create_Form_Sections;
		}
		interface Tabs {
			Time_Entry_Quick_Create_Form: tab_Time_Entry_Quick_Create_Form;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the time entry date. */
			msdyn_date: DevKit.Controls.Date;
			/** Type the description of the time entry. */
			msdyn_description: DevKit.Controls.String;
			/** Shows the time spent. */
			msdyn_duration: DevKit.Controls.Integer;
			/** Type the external description of the time entry. */
			msdyn_externalDescription: DevKit.Controls.String;
			/** Select the project that the time entry is related to. */
			msdyn_project: DevKit.Controls.Lookup;
			/** Select the project task that the time entry is related to. */
			msdyn_projectTask: DevKit.Controls.Lookup;
			/** Select the role that the user has in the project that the time entry is for. */
			msdyn_resourceCategory: DevKit.Controls.Lookup;
			/** Unique identifier for Time Source associated with Time Entry. */
			msdyn_timeentrysettingId: DevKit.Controls.Lookup;
			/** Select the time entry type. */
			msdyn_type: DevKit.Controls.OptionSet;
		}
	}
	class FormCreate_Time_Entry extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Create_Time_Entry
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Create_Time_Entry */
		Body: DevKit.FormCreate_Time_Entry.Body;
	}
	namespace FormField_Service_Quick_Create {
		interface tab_Time_Entry_Quick_Create_Form_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
		}
		interface tab_Time_Entry_Quick_Create_Form extends DevKit.Controls.ITab {
			Section: tab_Time_Entry_Quick_Create_Form_Sections;
		}
		interface Tabs {
			Time_Entry_Quick_Create_Form: tab_Time_Entry_Quick_Create_Form;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the bookable resource. */
			msdyn_bookableresource: DevKit.Controls.Lookup;
			/** Unique identifier for Resource Booking associated with Time Entry. */
			msdyn_BookableResourceBooking: DevKit.Controls.Lookup;
			/** Booking Status */
			msdyn_BookingStatus: DevKit.Controls.Lookup;
			/** Type the description of the time entry. */
			msdyn_description: DevKit.Controls.String;
			/** Shows the time spent. */
			msdyn_duration: DevKit.Controls.Integer;
			/** The end time of the time entry. */
			msdyn_end: DevKit.Controls.DateTime;
			/** Select the entry status. */
			msdyn_entryStatus: DevKit.Controls.OptionSet;
			/** Type the external description of the time entry. */
			msdyn_externalDescription: DevKit.Controls.String;
			/** The start time of the time entry. */
			msdyn_start: DevKit.Controls.DateTime;
			/** Unique identifier for Time Source associated with Time Entry. */
			msdyn_timeentrysettingId: DevKit.Controls.Lookup;
			/** Unique identifier for Time Off Request associated with Time Entry. This field is auto-populated when a Time Entry is auto-created from a Time Off Request. */
			msdyn_timeoffrequest: DevKit.Controls.Lookup;
			/** Select the time entry type. */
			msdyn_type: DevKit.Controls.OptionSet;
			/** Unique identifier for Work Orders associated with Time Entry. */
			msdyn_WorkOrder: DevKit.Controls.Lookup;
		}
	}
	class FormField_Service_Quick_Create extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Field_Service_Quick_Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Field_Service_Quick_Create */
		Body: DevKit.FormField_Service_Quick_Create.Body;
	}
	namespace FormTESA_Time_Entry_Quick_Create_Form {
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

		}
	}
	class FormTESA_Time_Entry_Quick_Create_Form extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form TESA_Time_Entry_Quick_Create_Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form TESA_Time_Entry_Quick_Create_Form */
		Body: DevKit.FormTESA_Time_Entry_Quick_Create_Form.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_timeentry {
		enum msdyn_entryStatus {
			/** 192350002 */
			Approved,
			/** 192354320 */
			Cancelled,
			/** 192350000 */
			Draft,
			/** 192350004 */
			Recall_Requested,
			/** 192350001 */
			Returned,
			/** 192350003 */
			Submitted
		}
		enum msdyn_relatedItemType {
			/** 192350100 */
			Exchange_Appointments,
			/** 192350000 */
			None,
			/** 192350002 */
			Resource_Assignment,
			/** 192350001 */
			Resource_Booking
		}
		enum msdyn_targetEntryStatus {
			/** 192350002 */
			Approved,
			/** 192354320 */
			Cancelled,
			/** 192350000 */
			Draft,
			/** 192350004 */
			Recall_Requested,
			/** 192350001 */
			Returned,
			/** 192350003 */
			Submitted
		}
		enum msdyn_type {
			/** 192350001 */
			Absence,
			/** 192355000 */
			On_Break,
			/** 192354320 */
			Overtime,
			/** 192355001 */
			Travel,
			/** 192350002 */
			Vacation,
			/** 192350000 */
			Work
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
//{'JsForm':['Create Time Entry','Entry Edit Form','Field Service Information','Quick Create','Information','Row Edit Form','Main Form','Quick Create Form'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}