﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_timeoffrequest_Information {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier for User associated with Time Off Request. */
			msdyn_Approvedby: DevKit.Controls.Lookup;
			/** Enter the end time of the time off request. */
			msdyn_EndTime: DevKit.Controls.DateTime;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Resource associated with Time Off Request */
			msdyn_Resource: DevKit.Controls.Lookup;
			/** Enter the start time of the time off request */
			msdyn_StartTime: DevKit.Controls.DateTime;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Time Off Request */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_timeoffrequest_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_timeoffrequest_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_timeoffrequest_Information */
		Body: MyDog.Formmsdyn_timeoffrequest_Information.Body;
		/** The Footer section of form msdyn_timeoffrequest_Information */
		Footer: MyDog.Formmsdyn_timeoffrequest_Information.Footer;
		/** The Navigation of form msdyn_timeoffrequest_Information */
		Navigation: MyDog.Formmsdyn_timeoffrequest_Information.Navigation;
	}
	namespace FormTime_Off_Request_Mobile {
		interface tab_fstab_general_Sections {
			fstab_general_section_general: DevKit.Controls.Section;
			fstab_general_section_2: DevKit.Controls.Section;
			fstab_general_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_other_Sections {
			tab_3_section_1: DevKit.Controls.Section;
			tab_3_section_2: DevKit.Controls.Section;
			tab_3_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids_section: DevKit.Controls.Section;
			fstab_sub_grids_section_2: DevKit.Controls.Section;
			fstab_sub_grids_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_general extends DevKit.Controls.ITab {
			Section: tab_fstab_general_Sections;
		}
		interface tab_fstab_other extends DevKit.Controls.ITab {
			Section: tab_fstab_other_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Controls.ITab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface Tabs {
			fstab_general: tab_fstab_general;
			fstab_other: tab_fstab_other;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Controls.Note;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier for User associated with Time Off Request. */
			msdyn_Approvedby: DevKit.Controls.Lookup;
			/** Enter the end time of the time off request. */
			msdyn_EndTime: DevKit.Controls.DateTime;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Resource associated with Time Off Request */
			msdyn_Resource: DevKit.Controls.Lookup;
			/** Enter the start time of the time off request */
			msdyn_StartTime: DevKit.Controls.DateTime;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			navProcessSessions: DevKit.Controls.NavigationItem
		}
	}
	class FormTime_Off_Request_Mobile extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Time_Off_Request_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Time_Off_Request_Mobile */
		Body: MyDog.FormTime_Off_Request_Mobile.Body;
		/** The Navigation of form Time_Off_Request_Mobile */
		Navigation: MyDog.FormTime_Off_Request_Mobile.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_timeoffrequest {
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
//{'JsForm':['Information','Time Off Request - Mobile'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}