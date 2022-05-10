//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormAgreement_Booking_Setup {
		interface tab__B08D1E73_C885_4AC5_8E1A_ECD3CF34E01D_Sections {
			_B08D1E73_C885_4AC5_8E1A_ECD3CF34E01D_SECTION_3: DevKit.Controls.Section;
			_B08D1E73_C885_4AC5_8E1A_ECD3CF34E01D_SECTION_5: DevKit.Controls.Section;
			_B08D1E73_C885_4AC5_8E1A_ECD3CF34E01D_SECTION_6: DevKit.Controls.Section;
			_E2317057_FAF8_42F6_A483_57D828596C17: DevKit.Controls.Section;
			tab_3_section_1: DevKit.Controls.Section;
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_6_Sections {
			tab_6_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_7_Sections {
			tab_7_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_8_Sections {
			tab_8_section_1: DevKit.Controls.Section;
		}
		interface tab__B08D1E73_C885_4AC5_8E1A_ECD3CF34E01D extends DevKit.Controls.ITab {
			Section: tab__B08D1E73_C885_4AC5_8E1A_ECD3CF34E01D_Sections;
		}
		interface tab_tab_6 extends DevKit.Controls.ITab {
			Section: tab_tab_6_Sections;
		}
		interface tab_tab_7 extends DevKit.Controls.ITab {
			Section: tab_tab_7_Sections;
		}
		interface tab_tab_8 extends DevKit.Controls.ITab {
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
			/** Agreement this Booking Setup relates to */
			msdyn_Agreement: DevKit.Controls.Lookup;
			/** Enable if the system should automatically generate Order Bookings for the Booking Dates of this Booking Setup */
			msdyn_AutoGenerateBooking: DevKit.Controls.Boolean;
			/** Enable if the system should automatically generate Work Orders for the Booking Dates of this Booking Setup */
			msdyn_AutoGenerateWO: DevKit.Controls.Boolean;
			/** Type a description of this booking setup. */
			msdyn_Description: DevKit.Controls.String;
			/** Shows the duration of the booking. */
			msdyn_EstimatedDuration: DevKit.Controls.Integer;
			/** Specify how many days in advance of the Booking Date the system should automatically generate a Work Order */
			msdyn_GenerateWODaysInAdvance: DevKit.Controls.Integer;
			/** Only used when Work Location is a Facility. Latitude is used when trying to locate nearby facilities. */
			msdyn_Latitude: DevKit.Controls.Double;
			/** Only used when Work Location is a Facility. Longitude is used when trying to locate nearby facilities. */
			msdyn_Longitude: DevKit.Controls.Double;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Shows the flexibility of days after the booking date. */
			msdyn_PostBookingFlexibility: DevKit.Controls.Integer;
			/** Shows the flexibility of days prior to the booking date. */
			msdyn_PreBookingFlexibility: DevKit.Controls.Integer;
			/** Preferred Resource to booked */
			msdyn_PreferredResource: DevKit.Controls.Lookup;
			/** Shows the preferred time to booking. */
			msdyn_PreferredStartTime: DevKit.Controls.DateTime;
			/** Booking Priority */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Stores the booking recurrence settings. */
			msdyn_RecurrenceSettings: DevKit.Controls.String;
			/** Shows the time window up until when this can be booked. */
			msdyn_TimeWindowEnd: DevKit.Controls.DateTime;
			/** Shows the time window from when this can be booked. */
			msdyn_TimeWindowStart: DevKit.Controls.DateTime;
			msdyn_WorkLocation: DevKit.Controls.OptionSet;
			/** Shows the work order summary to be set on the work orders generated. */
			msdyn_WorkOrderSummary: DevKit.Controls.String;
			/** Work Order Type to be used on generated Work Orders */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			WebResource_PreferredStartTime_TimeField: DevKit.Controls.WebResource;
			WebResource_TimeWindowEnd_TimeField: DevKit.Controls.WebResource;
			WebResource_TimeWindowStart_TimeField: DevKit.Controls.WebResource;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Agreement Booking Setup */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingdate_BookingSetup: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingincident_AgreementBookingSetup: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingproduct_AgreementBookingSetup: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservice_AgreementBookingSetup: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservicetask_AgreementBookingSetup: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface ProcessAgreement_Business_Process {
			/** Enable if the system should automatically generate Work Orders for the Booking Dates of this Booking Setup */
			msdyn_AutoGenerateWO: DevKit.Controls.Boolean;
			/** Type a description of this booking setup. */
			msdyn_Description: DevKit.Controls.String;
			/** Shows the duration of the booking. */
			msdyn_EstimatedDuration: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Shows the flexibility of days after the booking date. */
			msdyn_PostBookingFlexibility: DevKit.Controls.Integer;
			/** Shows the flexibility of days prior to the booking date. */
			msdyn_PreBookingFlexibility: DevKit.Controls.Integer;
			/** Work Order Type to be used on generated Work Orders */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
			Agreement_Business_Process: ProcessAgreement_Business_Process;
		}
		interface Grid {
			AgreementBookingProductsGrid: DevKit.Controls.Grid;
			AgreementBookingServicesGrid: DevKit.Controls.Grid;
			AgreementBookingServiceTasksGrid: DevKit.Controls.Grid;
			incidentsgrid: DevKit.Controls.Grid;
			schecduledategrid: DevKit.Controls.Grid;
		}
	}
	class FormAgreement_Booking_Setup extends DevKit.IForm {
		/**
		* Agreement Booking Setup [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Agreement_Booking_Setup */
		Body: DevKit.FormAgreement_Booking_Setup.Body;
		/** The Footer section of form Agreement_Booking_Setup */
		Footer: DevKit.FormAgreement_Booking_Setup.Footer;
		/** The Navigation of form Agreement_Booking_Setup */
		Navigation: DevKit.FormAgreement_Booking_Setup.Navigation;
		/** The Process of form Agreement_Booking_Setup */
		Process: DevKit.FormAgreement_Booking_Setup.Process;
		/** The Grid of form Agreement_Booking_Setup */
		Grid: DevKit.FormAgreement_Booking_Setup.Grid;
		/** The SidePanes of form Agreement_Booking_Setup */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormAgreement_Booking_Setup_Mobile {
		interface tab_fstab_general_Sections {
			fstab_general_column_2_section_1: DevKit.Controls.Section;
			fstab_general_column_3_section_1: DevKit.Controls.Section;
			fstab_general_section_booking_settings: DevKit.Controls.Section;
			fstab_general_section_preferences: DevKit.Controls.Section;
			fstab_general_section_summary: DevKit.Controls.Section;
			fstab_general_section_work_order_settings: DevKit.Controls.Section;
		}
		interface tab_fstab_other_Sections {
			tab_4_section_2: DevKit.Controls.Section;
			tab_4_section_3: DevKit.Controls.Section;
			tab_4_section_4: DevKit.Controls.Section;
		}
		interface tab_fstab_sub_grids_Sections {
			tab_9_section_1: DevKit.Controls.Section;
			tab_9_section_2: DevKit.Controls.Section;
			tab_9_section_3: DevKit.Controls.Section;
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
			/** Agreement this Booking Setup relates to */
			msdyn_Agreement: DevKit.Controls.Lookup;
			/** Enable if the system should automatically generate Order Bookings for the Booking Dates of this Booking Setup */
			msdyn_AutoGenerateBooking: DevKit.Controls.Boolean;
			/** Enable if the system should automatically generate Work Orders for the Booking Dates of this Booking Setup */
			msdyn_AutoGenerateWO: DevKit.Controls.Boolean;
			/** Type a description of this booking setup. */
			msdyn_Description: DevKit.Controls.String;
			/** Shows the duration of the booking. */
			msdyn_EstimatedDuration: DevKit.Controls.Integer;
			/** Specify how many days in advance of the Booking Date the system should automatically generate a Work Order */
			msdyn_GenerateWODaysInAdvance: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Shows the flexibility of days after the booking date. */
			msdyn_PostBookingFlexibility: DevKit.Controls.Integer;
			/** Shows the flexibility of days prior to the booking date. */
			msdyn_PreBookingFlexibility: DevKit.Controls.Integer;
			/** Preferred Resource to booked */
			msdyn_PreferredResource: DevKit.Controls.Lookup;
			/** Shows the preferred time to booking. */
			msdyn_PreferredStartTime: DevKit.Controls.DateTime;
			/** Booking Priority */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Stores the booking recurrence settings. */
			msdyn_RecurrenceSettings: DevKit.Controls.String;
			/** Shows the time window up until when this can be booked. */
			msdyn_TimeWindowEnd: DevKit.Controls.DateTime;
			/** Shows the time window from when this can be booked. */
			msdyn_TimeWindowStart: DevKit.Controls.DateTime;
			/** Shows the work order summary to be set on the work orders generated. */
			msdyn_WorkOrderSummary: DevKit.Controls.String;
			/** Work Order Type to be used on generated Work Orders */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			WebResource_PreferredStartTime_TimeField: DevKit.Controls.WebResource;
			WebResource_TimeWindowEnd_TimeField: DevKit.Controls.WebResource;
			WebResource_TimeWindowStart_TimeField: DevKit.Controls.WebResource;
		}
		interface Navigation {
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingdate_BookingSetup: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingincident_AgreementBookingSetup: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingproduct_AgreementBookingSetup: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservice_AgreementBookingSetup: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservicetask_AgreementBookingSetup: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface ProcessAgreement_Business_Process {
			/** Enable if the system should automatically generate Work Orders for the Booking Dates of this Booking Setup */
			msdyn_AutoGenerateWO: DevKit.Controls.Boolean;
			/** Type a description of this booking setup. */
			msdyn_Description: DevKit.Controls.String;
			/** Shows the duration of the booking. */
			msdyn_EstimatedDuration: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Shows the flexibility of days after the booking date. */
			msdyn_PostBookingFlexibility: DevKit.Controls.Integer;
			/** Shows the flexibility of days prior to the booking date. */
			msdyn_PreBookingFlexibility: DevKit.Controls.Integer;
			/** Work Order Type to be used on generated Work Orders */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
			Agreement_Business_Process: ProcessAgreement_Business_Process;
		}
		interface Grid {
			AgreementBookingProductsGrid: DevKit.Controls.Grid;
			AgreementBookingServicesGrid: DevKit.Controls.Grid;
			AgreementBookingServiceTasksGrid: DevKit.Controls.Grid;
			incidentsgrid: DevKit.Controls.Grid;
			schecduledategrid: DevKit.Controls.Grid;
		}
	}
	class FormAgreement_Booking_Setup_Mobile extends DevKit.IForm {
		/**
		* Agreement Booking Setup - Mobile [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Agreement_Booking_Setup_Mobile */
		Body: DevKit.FormAgreement_Booking_Setup_Mobile.Body;
		/** The Navigation of form Agreement_Booking_Setup_Mobile */
		Navigation: DevKit.FormAgreement_Booking_Setup_Mobile.Navigation;
		/** The Process of form Agreement_Booking_Setup_Mobile */
		Process: DevKit.FormAgreement_Booking_Setup_Mobile.Process;
		/** The Grid of form Agreement_Booking_Setup_Mobile */
		Grid: DevKit.FormAgreement_Booking_Setup_Mobile.Grid;
		/** The SidePanes of form Agreement_Booking_Setup_Mobile */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_agreementbookingsetupApi {
		/**
		* DynamicsCrm.DevKit msdyn_agreementbookingsetupApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Agreement this Booking Setup relates to */
		msdyn_Agreement: string;
		/** Shows the entity instances. */
		msdyn_agreementbookingsetupId: string;
		/** Enable if the system should automatically generate Order Bookings for the Booking Dates of this Booking Setup */
		msdyn_AutoGenerateBooking: boolean;
		/** Enable if the system should automatically generate Work Orders for the Booking Dates of this Booking Setup */
		msdyn_AutoGenerateWO: boolean;
		/** Type a description of this booking setup. */
		msdyn_Description: string;
		/** Shows the duration of the booking. */
		msdyn_EstimatedDuration: number;
		/** Specify how many days in advance of the Booking Date the system should automatically generate a Work Order */
		msdyn_GenerateWODaysInAdvance: number;
		/** For internal use only. */
		msdyn_InternalFlags: string;
		/** Only used when Work Location is a Facility. Latitude is used when trying to locate nearby facilities. */
		msdyn_Latitude: number;
		/** Only used when Work Location is a Facility. Longitude is used when trying to locate nearby facilities. */
		msdyn_Longitude: number;
		/** Enter the name of the custom entity. */
		msdyn_name: string;
		/** Shows the flexibility of days after the booking date. */
		msdyn_PostBookingFlexibility: number;
		/** Intended for internal use. Manipulating values in this field is not supported and can lead to unexpected system behavior. */
		msdyn_PostponeGenerationUntil_TimezoneDateAndTime: Date;
		/** Shows the flexibility of days prior to the booking date. */
		msdyn_PreBookingFlexibility: number;
		/** Preferred Resource to booked */
		msdyn_PreferredResource: string;
		/** Shows the preferred time to booking. */
		msdyn_PreferredStartTime_UtcDateAndTime: Date;
		/** Booking Priority */
		msdyn_Priority: string;
		/** For internal use only */
		msdyn_ProcessStartedOn_TimezoneDateAndTime: Date;
		/** Stores the booking recurrence settings. */
		msdyn_RecurrenceSettings: string;
		/** For internal use only. */
		msdyn_Revision: number;
		/** Shows the time window up until when this can be booked. */
		msdyn_TimeWindowEnd_UtcDateAndTime: Date;
		/** Shows the time window from when this can be booked. */
		msdyn_TimeWindowStart_UtcDateAndTime: Date;
		msdyn_WorkLocation: OptionSet.msdyn_agreementbookingsetup.msdyn_WorkLocation;
		/** Shows the work order summary to be set on the work orders generated. */
		msdyn_WorkOrderSummary: string;
		/** Work Order Type to be used on generated Work Orders */
		msdyn_WorkOrderType: string;
		/** Shows the date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Contains the ID of the process associated with the entity. */
		processid: string;
		/** Contains the ID of the stage where the entity is located. */
		stageid: string;
		/** Status of the Agreement Booking Setup */
		statecode: OptionSet.msdyn_agreementbookingsetup.statecode;
		/** Reason for the status of the Agreement Booking Setup */
		statuscode: OptionSet.msdyn_agreementbookingsetup.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows a comma-separated list of string values that represent the unique identifiers of stages in a business process flow instance in the order that they occur. */
		traversedpath: string;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Agreement this Booking Setup relates to */
			readonly msdyn_Agreement: string;
			/** Shows the entity instances. */
			readonly msdyn_agreementbookingsetupId: string;
			/** Enable if the system should automatically generate Order Bookings for the Booking Dates of this Booking Setup */
			readonly msdyn_AutoGenerateBooking: string;
			/** Enable if the system should automatically generate Work Orders for the Booking Dates of this Booking Setup */
			readonly msdyn_AutoGenerateWO: string;
			/** Type a description of this booking setup. */
			readonly msdyn_Description: string;
			/** Shows the duration of the booking. */
			readonly msdyn_EstimatedDuration: string;
			/** Specify how many days in advance of the Booking Date the system should automatically generate a Work Order */
			readonly msdyn_GenerateWODaysInAdvance: string;
			/** For internal use only. */
			readonly msdyn_InternalFlags: string;
			/** Only used when Work Location is a Facility. Latitude is used when trying to locate nearby facilities. */
			readonly msdyn_Latitude: string;
			/** Only used when Work Location is a Facility. Longitude is used when trying to locate nearby facilities. */
			readonly msdyn_Longitude: string;
			/** Enter the name of the custom entity. */
			readonly msdyn_name: string;
			/** Shows the flexibility of days after the booking date. */
			readonly msdyn_PostBookingFlexibility: string;
			/** Intended for internal use. Manipulating values in this field is not supported and can lead to unexpected system behavior. */
			readonly msdyn_PostponeGenerationUntil_TimezoneDateAndTime: string;
			/** Shows the flexibility of days prior to the booking date. */
			readonly msdyn_PreBookingFlexibility: string;
			/** Preferred Resource to booked */
			readonly msdyn_PreferredResource: string;
			/** Shows the preferred time to booking. */
			readonly msdyn_PreferredStartTime_UtcDateAndTime: string;
			/** Booking Priority */
			readonly msdyn_Priority: string;
			/** For internal use only */
			readonly msdyn_ProcessStartedOn_TimezoneDateAndTime: string;
			/** Stores the booking recurrence settings. */
			readonly msdyn_RecurrenceSettings: string;
			/** For internal use only. */
			readonly msdyn_Revision: string;
			/** Shows the time window up until when this can be booked. */
			readonly msdyn_TimeWindowEnd_UtcDateAndTime: string;
			/** Shows the time window from when this can be booked. */
			readonly msdyn_TimeWindowStart_UtcDateAndTime: string;
			readonly msdyn_WorkLocation: string;
			/** Shows the work order summary to be set on the work orders generated. */
			readonly msdyn_WorkOrderSummary: string;
			/** Work Order Type to be used on generated Work Orders */
			readonly msdyn_WorkOrderType: string;
			/** Shows the date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Contains the ID of the process associated with the entity. */
			readonly processid: string;
			/** Contains the ID of the stage where the entity is located. */
			readonly stageid: string;
			/** Status of the Agreement Booking Setup */
			readonly statecode: string;
			/** Reason for the status of the Agreement Booking Setup */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Shows a comma-separated list of string values that represent the unique identifiers of stages in a business process flow instance in the order that they occur. */
			readonly traversedpath: string;
			/** Shows the time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_agreementbookingsetup {
		enum msdyn_WorkLocation {
			/** 690970001 */
			Facility,
			/** 690970002 */
			Location_Agnostic,
			/** 690970000 */
			Onsite
		}
		enum OwnerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}