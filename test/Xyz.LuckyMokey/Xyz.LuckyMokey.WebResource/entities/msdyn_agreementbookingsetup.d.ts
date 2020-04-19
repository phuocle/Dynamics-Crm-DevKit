//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormAgreement_Booking_Setup {
		interface tab__B08D1E73_C885_4AC5_8E1A_ECD3CF34E01D_Sections {
			_E2317057_FAF8_42F6_A483_57D828596C17: DevKit.Form.Controls.ControlSection;
			tab_4_section_1: DevKit.Form.Controls.ControlSection;
			_B08D1E73_C885_4AC5_8E1A_ECD3CF34E01D_SECTION_5: DevKit.Form.Controls.ControlSection;
			_B08D1E73_C885_4AC5_8E1A_ECD3CF34E01D_SECTION_6: DevKit.Form.Controls.ControlSection;
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
			_B08D1E73_C885_4AC5_8E1A_ECD3CF34E01D_SECTION_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_6_Sections {
			tab_6_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_7_Sections {
			tab_7_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_8_Sections {
			tab_8_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab__B08D1E73_C885_4AC5_8E1A_ECD3CF34E01D extends DevKit.Form.Controls.IControlTab {
			Section: tab__B08D1E73_C885_4AC5_8E1A_ECD3CF34E01D_Sections;
		}
		interface tab_tab_6 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_6_Sections;
		}
		interface tab_tab_7 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_7_Sections;
		}
		interface tab_tab_8 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_8_Sections;
		}
		interface Tabs {
			_B08D1E73_C885_4AC5_8E1A_ECD3CF34E01D: tab__B08D1E73_C885_4AC5_8E1A_ECD3CF34E01D;
			tab_6: tab_tab_6;
			tab_7: tab_tab_7;
			tab_8: tab_tab_8;
		}
		interface Body {
			Tab: Tabs;
			WebResource_PreferredStartTime_TimeField: DevKit.Form.Controls.ControlWebResource;
			WebResource_TimeWindowStart_TimeField: DevKit.Form.Controls.ControlWebResource;
			WebResource_TimeWindowEnd_TimeField: DevKit.Form.Controls.ControlWebResource;
			incidentsgrid: DevKit.Form.Controls.ControlGrid;
			schecduledategrid: DevKit.Form.Controls.ControlGrid;
			AgreementBookingProductsGrid: DevKit.Form.Controls.ControlGrid;
			AgreementBookingServicesGrid: DevKit.Form.Controls.ControlGrid;
			AgreementBookingServiceTasksGrid: DevKit.Form.Controls.ControlGrid;
			/** Agreement this Booking Setup relates to */
			msdyn_Agreement: DevKit.Form.Controls.ControlLookup;
			/** Enable if the system should automatically generate Order Bookings for the Booking Dates of this Booking Setup */
			msdyn_AutoGenerateBooking: DevKit.Form.Controls.ControlBoolean;
			/** Enable if the system should automatically generate Work Orders for the Booking Dates of this Booking Setup */
			msdyn_AutoGenerateWO: DevKit.Form.Controls.ControlBoolean;
			/** Type a description of this booking setup. */
			msdyn_Description: DevKit.Form.Controls.ControlString;
			/** Shows the duration of the booking. */
			msdyn_EstimatedDuration: DevKit.Form.Controls.ControlInteger;
			/** Specify how many days in advance of the Booking Date the system should automatically generate a Work Order */
			msdyn_GenerateWODaysInAdvance: DevKit.Form.Controls.ControlInteger;
			/** Only used when Work Location is a Facility. Latitude is used when trying to locate nearby facilities. */
			msdyn_Latitude: DevKit.Form.Controls.ControlDouble;
			/** Only used when Work Location is a Facility. Longitude is used when trying to locate nearby facilities. */
			msdyn_Longitude: DevKit.Form.Controls.ControlDouble;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Shows the flexibility of days after the booking date. */
			msdyn_PostBookingFlexibility: DevKit.Form.Controls.ControlInteger;
			/** Shows the flexibility of days prior to the booking date. */
			msdyn_PreBookingFlexibility: DevKit.Form.Controls.ControlInteger;
			/** Preferred Resource to booked */
			msdyn_PreferredResource: DevKit.Form.Controls.ControlLookup;
			/** Shows the preferred time to booking. */
			msdyn_PreferredStartTime: DevKit.Form.Controls.ControlDateTime;
			/** Booking Priority */
			msdyn_Priority: DevKit.Form.Controls.ControlLookup;
			/** Stores the booking recurrence settings. */
			msdyn_RecurrenceSettings: DevKit.Form.Controls.ControlString;
			/** Shows the time window up until when this can be booked. */
			msdyn_TimeWindowEnd: DevKit.Form.Controls.ControlDateTime;
			/** Shows the time window from when this can be booked. */
			msdyn_TimeWindowStart: DevKit.Form.Controls.ControlDateTime;
			msdyn_WorkLocation: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the work order summary to be set on the work orders generated. */
			msdyn_WorkOrderSummary: DevKit.Form.Controls.ControlString;
			/** Work Order Type to be used on generated Work Orders */
			msdyn_WorkOrderType: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Agreement Booking Setup */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingincident_AgreementBookingSetup: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingproduct_AgreementBookingSetup: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservice_AgreementBookingSetup: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservicetask_AgreementBookingSetup: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingdate_BookingSetup: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormAgreement_Booking_Setup extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Agreement_Booking_Setup
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Agreement_Booking_Setup */
		Body: LuckyMokey.FormAgreement_Booking_Setup.Body;
		/** The Footer section of form Agreement_Booking_Setup */
		Footer: LuckyMokey.FormAgreement_Booking_Setup.Footer;
		/** The Navigation of form Agreement_Booking_Setup */
		Navigation: LuckyMokey.FormAgreement_Booking_Setup.Navigation;
	}
	namespace FormAgreement_Booking_Setup_Mobile {
		interface tab_fstab_general_Sections {
			fstab_general_section_summary: DevKit.Form.Controls.ControlSection;
			fstab_general_section_work_order_settings: DevKit.Form.Controls.ControlSection;
			fstab_general_section_booking_settings: DevKit.Form.Controls.ControlSection;
			fstab_general_section_preferences: DevKit.Form.Controls.ControlSection;
			fstab_general_column_2_section_1: DevKit.Form.Controls.ControlSection;
			fstab_general_column_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_other_Sections {
			tab_4_section_2: DevKit.Form.Controls.ControlSection;
			tab_4_section_3: DevKit.Form.Controls.ControlSection;
			tab_4_section_4: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_sub_grids_Sections {
			tab_9_section_1: DevKit.Form.Controls.ControlSection;
			tab_9_section_2: DevKit.Form.Controls.ControlSection;
			tab_9_section_3: DevKit.Form.Controls.ControlSection;
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
			WebResource_TimeWindowStart_TimeField: DevKit.Form.Controls.ControlWebResource;
			WebResource_TimeWindowEnd_TimeField: DevKit.Form.Controls.ControlWebResource;
			WebResource_PreferredStartTime_TimeField: DevKit.Form.Controls.ControlWebResource;
			incidentsgrid: DevKit.Form.Controls.ControlGrid;
			AgreementBookingProductsGrid: DevKit.Form.Controls.ControlGrid;
			AgreementBookingServicesGrid: DevKit.Form.Controls.ControlGrid;
			AgreementBookingServiceTasksGrid: DevKit.Form.Controls.ControlGrid;
			schecduledategrid: DevKit.Form.Controls.ControlGrid;
			/** Agreement this Booking Setup relates to */
			msdyn_Agreement: DevKit.Form.Controls.ControlLookup;
			/** Enable if the system should automatically generate Order Bookings for the Booking Dates of this Booking Setup */
			msdyn_AutoGenerateBooking: DevKit.Form.Controls.ControlBoolean;
			/** Enable if the system should automatically generate Work Orders for the Booking Dates of this Booking Setup */
			msdyn_AutoGenerateWO: DevKit.Form.Controls.ControlBoolean;
			/** Type a description of this booking setup. */
			msdyn_Description: DevKit.Form.Controls.ControlString;
			/** Shows the duration of the booking. */
			msdyn_EstimatedDuration: DevKit.Form.Controls.ControlInteger;
			/** Specify how many days in advance of the Booking Date the system should automatically generate a Work Order */
			msdyn_GenerateWODaysInAdvance: DevKit.Form.Controls.ControlInteger;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Shows the flexibility of days after the booking date. */
			msdyn_PostBookingFlexibility: DevKit.Form.Controls.ControlInteger;
			/** Shows the flexibility of days prior to the booking date. */
			msdyn_PreBookingFlexibility: DevKit.Form.Controls.ControlInteger;
			/** Preferred Resource to booked */
			msdyn_PreferredResource: DevKit.Form.Controls.ControlLookup;
			/** Shows the preferred time to booking. */
			msdyn_PreferredStartTime: DevKit.Form.Controls.ControlDateTime;
			/** Booking Priority */
			msdyn_Priority: DevKit.Form.Controls.ControlLookup;
			/** Stores the booking recurrence settings. */
			msdyn_RecurrenceSettings: DevKit.Form.Controls.ControlString;
			/** Shows the time window up until when this can be booked. */
			msdyn_TimeWindowEnd: DevKit.Form.Controls.ControlDateTime;
			/** Shows the time window from when this can be booked. */
			msdyn_TimeWindowStart: DevKit.Form.Controls.ControlDateTime;
			/** Shows the work order summary to be set on the work orders generated. */
			msdyn_WorkOrderSummary: DevKit.Form.Controls.ControlString;
			/** Work Order Type to be used on generated Work Orders */
			msdyn_WorkOrderType: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingincident_AgreementBookingSetup: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingproduct_AgreementBookingSetup: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservice_AgreementBookingSetup: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservicetask_AgreementBookingSetup: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingdate_BookingSetup: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormAgreement_Booking_Setup_Mobile extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Agreement_Booking_Setup_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Agreement_Booking_Setup_Mobile */
		Body: LuckyMokey.FormAgreement_Booking_Setup_Mobile.Body;
		/** The Navigation of form Agreement_Booking_Setup_Mobile */
		Navigation: LuckyMokey.FormAgreement_Booking_Setup_Mobile.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_agreementbookingsetup {
		enum msdyn_WorkLocation {
			/** 690970000 */
			Onsite,
			/** 690970001 */
			Facility,
			/** 690970002 */
			Location_Agnostic
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
//{'JsForm':['Agreement Booking Setup','Agreement Booking Setup - Mobile'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}