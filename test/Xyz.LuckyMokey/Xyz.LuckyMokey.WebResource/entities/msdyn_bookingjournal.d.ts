﻿//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormBooking_Journal_Mobile {
		interface tab_fstab_general_Sections {
			fstab_general_section_general: DevKit.Form.Controls.ControlSection;
			fstab_general_section_2: DevKit.Form.Controls.ControlSection;
			fstab_general_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_f1tab_journalDetails_Sections {
			f1tab_journalDetails_section_journal_details: DevKit.Form.Controls.ControlSection;
			f1tab_journalDetails_section_journal_cost: DevKit.Form.Controls.ControlSection;
			f1tab_journalDetails_section_3: DevKit.Form.Controls.ControlSection;
			f1tab_journalDetails_section_4: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_other_Sections {
			tab_4_section_1: DevKit.Form.Controls.ControlSection;
			tab_4_section_2: DevKit.Form.Controls.ControlSection;
			tab_4_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids_section: DevKit.Form.Controls.ControlSection;
			fstab_sub_grids_section_2: DevKit.Form.Controls.ControlSection;
			fstab_sub_grids_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_general_Sections;
		}
		interface tab_f1tab_journalDetails extends DevKit.Form.Controls.IControlTab {
			Section: tab_f1tab_journalDetails_Sections;
		}
		interface tab_fstab_other extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_other_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface Tabs {
			fstab_general: tab_fstab_general;
			f1tab_journalDetails: tab_f1tab_journalDetails;
			fstab_other: tab_fstab_other;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Shows the additional cost associated with this journal, if any. (This amount is not multiplied by quantity) */
			msdyn_AdditionalCost: DevKit.Form.Controls.ControlMoney;
			/** Shows if this journal is billable. */
			msdyn_Billable: DevKit.Form.Controls.ControlBoolean;
			/** This Resource Booking this journal pertains to */
			msdyn_Booking: DevKit.Form.Controls.ControlLookup;
			/** Enter the total duration of this journal record. */
			msdyn_Duration: DevKit.Form.Controls.ControlInteger;
			/** Enter the end time of this journal record. */
			msdyn_EndTime: DevKit.Form.Controls.ControlDateTime;
			/** Enter the type of journal. */
			msdyn_JournalType: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Unique identifier for Resource Pay Type associated with Booking Journal. */
			msdyn_PayType: DevKit.Form.Controls.ControlLookup;
			/** Enter the start time of this journal record. */
			msdyn_StartTime: DevKit.Form.Controls.ControlDateTime;
			/** Shows the total cost company pays to resource. */
			msdyn_TotalCost: DevKit.Form.Controls.ControlMoney;
			/** Enter the hourly cost that company pays to the resource. */
			msdyn_UnitCost: DevKit.Form.Controls.ControlMoney;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormBooking_Journal_Mobile extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Booking_Journal_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Booking_Journal_Mobile */
		Body: LuckyMokey.FormBooking_Journal_Mobile.Body;
		/** The Navigation of form Booking_Journal_Mobile */
		Navigation: LuckyMokey.FormBooking_Journal_Mobile.Navigation;
	}
	namespace Formmsdyn_bookingjournal_Information {
		interface tab_f1tab_journalDetails_Sections {
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
			f1tab_journalDetails_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_f1tab_journalDetails extends DevKit.Form.Controls.IControlTab {
			Section: tab_f1tab_journalDetails_Sections;
		}
		interface Tabs {
			f1tab_journalDetails: tab_f1tab_journalDetails;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Shows the additional cost associated with this journal, if any. (This amount is not multiplied by quantity) */
			msdyn_AdditionalCost: DevKit.Form.Controls.ControlMoney;
			/** Shows if this journal is billable. */
			msdyn_Billable: DevKit.Form.Controls.ControlBoolean;
			/** This Resource Booking this journal pertains to */
			msdyn_Booking: DevKit.Form.Controls.ControlLookup;
			/** Enter the total duration of this journal record. */
			msdyn_Duration: DevKit.Form.Controls.ControlInteger;
			/** Enter the end time of this journal record. */
			msdyn_EndTime: DevKit.Form.Controls.ControlDateTime;
			/** Enter the type of journal. */
			msdyn_JournalType: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Unique identifier for Resource Pay Type associated with Booking Journal. */
			msdyn_PayType: DevKit.Form.Controls.ControlLookup;
			/** Enter the start time of this journal record. */
			msdyn_StartTime: DevKit.Form.Controls.ControlDateTime;
			/** Shows the total cost company pays to resource. */
			msdyn_TotalCost: DevKit.Form.Controls.ControlMoney;
			/** Enter the hourly cost that company pays to the resource. */
			msdyn_UnitCost: DevKit.Form.Controls.ControlMoney;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Booking Journal */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_bookingjournal_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_bookingjournal_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_bookingjournal_Information */
		Body: LuckyMokey.Formmsdyn_bookingjournal_Information.Body;
		/** The Footer section of form msdyn_bookingjournal_Information */
		Footer: LuckyMokey.Formmsdyn_bookingjournal_Information.Footer;
		/** The Navigation of form msdyn_bookingjournal_Information */
		Navigation: LuckyMokey.Formmsdyn_bookingjournal_Information.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_bookingjournal {
		enum msdyn_JournalType {
			/** 690970000 */
			Working_Hours,
			/** 690970001 */
			Break,
			/** 690970002 */
			Travel,
			/** 690970003 */
			Overtime,
			/** 690970004 */
			Business_Closure
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
//{'JsForm':['Booking Journal - Mobile','Information'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}