//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormBooking_Timestamp_Mobile {
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
			/** Unique identifier for Resource Booking associated with Booking Timestamp. */
			msdyn_Booking: DevKit.Form.Controls.ControlLookup;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			msdyn_SystemStatus: DevKit.Form.Controls.ControlOptionSet;
			msdyn_TimestampTime: DevKit.Form.Controls.ControlDateTime;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormBooking_Timestamp_Mobile extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Booking_Timestamp_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Booking_Timestamp_Mobile */
		Body: LuckyMokey.FormBooking_Timestamp_Mobile.Body;
		/** The Navigation of form Booking_Timestamp_Mobile */
		Navigation: LuckyMokey.FormBooking_Timestamp_Mobile.Navigation;
	}
	namespace Formmsdyn_bookingtimestamp_Information {
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Unique identifier for Resource Booking associated with Booking Timestamp. */
			msdyn_Booking: DevKit.Form.Controls.ControlLookup;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			msdyn_SystemStatus: DevKit.Form.Controls.ControlOptionSet;
			msdyn_TimestampTime: DevKit.Form.Controls.ControlDateTime;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Booking Timestamp */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_bookingtimestamp_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_bookingtimestamp_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_bookingtimestamp_Information */
		Body: LuckyMokey.Formmsdyn_bookingtimestamp_Information.Body;
		/** The Footer section of form msdyn_bookingtimestamp_Information */
		Footer: LuckyMokey.Formmsdyn_bookingtimestamp_Information.Footer;
		/** The Navigation of form msdyn_bookingtimestamp_Information */
		Navigation: LuckyMokey.Formmsdyn_bookingtimestamp_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_bookingtimestamp {
		enum msdyn_SystemStatus {
			/** 690970000 */
			Scheduled,
			/** 690970001 */
			Traveling,
			/** 690970003 */
			In_Progress,
			/** 690970002 */
			On_Break,
			/** 690970004 */
			Completed,
			/** 690970005 */
			Canceled
		}
		enum msdyn_TimestampSource {
			/** 690970000 */
			Desktop,
			/** 690970001 */
			Mobile
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
//{'JsForm':['Booking Timestamp - Mobile','Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}