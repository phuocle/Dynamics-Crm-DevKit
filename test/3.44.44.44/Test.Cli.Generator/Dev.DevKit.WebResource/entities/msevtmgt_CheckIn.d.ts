//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsevtmgt_CheckIn_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Check-in time */
			msevtmgt_Checkintime: DevKit.Controls.DateTime;
			/** Check-out time */
			msevtmgt_CheckOutTime: DevKit.Controls.DateTime;
			/** Check-in records are used to log attendance at a particular event or session. */
			msevtmgt_Name: DevKit.Controls.String;
		}
		interface tab_tab_general_Sections {
			section_general: DevKit.Controls.Section;
		}
		interface tab_tab_general extends DevKit.Controls.ITab {
			Section: tab_tab_general_Sections;
		}
		interface Tabs {
			tab_general: tab_tab_general;
		}
		interface Body {
			Tab: Tabs;
			msevtmgt_CheckInType: DevKit.Controls.OptionSet;
			/** Contact records of the check-in */
			msevtmgt_Contact: DevKit.Controls.Lookup;
			/** Unique identifier for the event associated with the check-in */
			msevtmgt_Event: DevKit.Controls.Lookup;
			msevtmgt_NumberOfQuestionsAsked: DevKit.Controls.Integer;
			msevtmgt_RegistrationId: DevKit.Controls.Lookup;
			msevtmgt_registrationidfromqr: DevKit.Controls.String;
			/** The session attended */
			msevtmgt_SessionAttended: DevKit.Controls.Lookup;
			/** All active session registration records for this check-in */
			msevtmgt_SessionRegistration: DevKit.Controls.Lookup;
			msevtmgt_ViewingDurationInMins: DevKit.Controls.Integer;
			notescontrol: DevKit.Controls.Note;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msevtmgt_checkin_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msevtmgt_checkin_adx_portalcomments: DevKit.Controls.NavigationItem,
			msevtmgt_checkin_Appointments: DevKit.Controls.NavigationItem,
			msevtmgt_checkin_contact: DevKit.Controls.NavigationItem,
			msevtmgt_checkin_Emails: DevKit.Controls.NavigationItem,
			msevtmgt_checkin_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msevtmgt_checkin_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msevtmgt_checkin_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msevtmgt_checkin_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msevtmgt_checkin_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msevtmgt_checkin_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msevtmgt_checkin_msfp_alerts: DevKit.Controls.NavigationItem,
			msevtmgt_checkin_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msevtmgt_checkin_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msevtmgt_checkin_PhoneCalls: DevKit.Controls.NavigationItem,
			msevtmgt_checkin_ServiceAppointments: DevKit.Controls.NavigationItem,
			msevtmgt_checkin_Tasks: DevKit.Controls.NavigationItem
		}
	}
	class Formmsevtmgt_CheckIn_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_CheckIn_Information */
		Body: DevKit.Formmsevtmgt_CheckIn_Information.Body;
		/** The Header section of form msevtmgt_CheckIn_Information */
		Header: DevKit.Formmsevtmgt_CheckIn_Information.Header;
		/** The Navigation of form msevtmgt_CheckIn_Information */
		Navigation: DevKit.Formmsevtmgt_CheckIn_Information.Navigation;
		/** The SidePanes of form msevtmgt_CheckIn_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsevtmgt_CheckIn_Quick_Create_Form {
		interface tab_GeneralTab_Sections {
			GeneralTab_column_1_section_1: DevKit.Controls.Section;
			GeneralTab_column_2_section_1: DevKit.Controls.Section;
			GeneralTab_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_GeneralTab extends DevKit.Controls.ITab {
			Section: tab_GeneralTab_Sections;
		}
		interface Tabs {
			GeneralTab: tab_GeneralTab;
		}
		interface Body {
			Tab: Tabs;
			/** Check-in time */
			msevtmgt_Checkintime: DevKit.Controls.DateTime;
			msevtmgt_CheckInType: DevKit.Controls.OptionSet;
			/** Check-out time */
			msevtmgt_CheckOutTime: DevKit.Controls.DateTime;
			/** Contact records of the check-in */
			msevtmgt_Contact: DevKit.Controls.Lookup;
			/** Unique identifier for the event associated with the check-in */
			msevtmgt_Event: DevKit.Controls.Lookup;
			/** Check-in records are used to log attendance at a particular event or session. */
			msevtmgt_Name: DevKit.Controls.String;
			msevtmgt_NumberOfQuestionsAsked: DevKit.Controls.Integer;
			msevtmgt_RegistrationId: DevKit.Controls.Lookup;
			msevtmgt_registrationidfromqr: DevKit.Controls.String;
			/** The session attended */
			msevtmgt_SessionAttended: DevKit.Controls.Lookup;
			/** All active session registration records for this check-in */
			msevtmgt_SessionRegistration: DevKit.Controls.Lookup;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsevtmgt_CheckIn_Quick_Create_Form extends DevKit.IForm {
		/**
		* Quick create form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_CheckIn_Quick_Create_Form */
		Body: DevKit.Formmsevtmgt_CheckIn_Quick_Create_Form.Body;
	}
	class msevtmgt_CheckInApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_CheckInApi
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
		/** Unique identifier of the user who created the record */
		readonly CreatedBy: string;
		/** The date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record */
		readonly CreatedOnBehalfBy: string;
		/** The sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record */
		readonly ModifiedBy: string;
		/** The date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record */
		readonly ModifiedOnBehalfBy: string;
		/** Field representing a percentile approximation of time spent for an attendee in the virtual event. */
		msdynmkt_attendancepercentage: number;
		/** Audience type */
		msevtmgt_AudienceType: OptionSet.msevtmgt_CheckIn.msevtmgt_AudienceType;
		/** Unique identifier for entity instances */
		msevtmgt_CheckInId: string;
		/** Check-in time */
		msevtmgt_Checkintime_UtcDateAndTime: Date;
		msevtmgt_CheckInType: OptionSet.msevtmgt_CheckIn.msevtmgt_CheckInType;
		/** Check-out time */
		msevtmgt_CheckOutTime_UtcDateAndTime: Date;
		/** Contact records of the check-in */
		msevtmgt_Contact: string;
		/** Unique identifier for the event associated with the check-in */
		msevtmgt_Event: string;
		/** Check-in records are used to log attendance at a particular event or session. */
		msevtmgt_Name: string;
		msevtmgt_NumberOfQuestionsAsked: number;
		/** Unique identifier for the attendee pass associated with the check-in */
		msevtmgt_PurchasedPassesId: string;
		msevtmgt_RegistrationId: string;
		msevtmgt_registrationidfromqr: string;
		/** The session attended */
		msevtmgt_SessionAttended: string;
		msevtmgt_SessionCode: string;
		/** All active session registration records for this check-in */
		msevtmgt_SessionRegistration: string;
		msevtmgt_SessionType: OptionSet.msevtmgt_CheckIn.msevtmgt_SessionType;
		/** Unique identifier of the currency associated with the entity */
		msevtmgt_TransactionCurrencyId: string;
		msevtmgt_ViewingDurationInMins: number;
		/** The date and time when the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record */
		readonly OwningUser: string;
		/** Status of the check-in */
		statecode: OptionSet.msevtmgt_CheckIn.statecode;
		/** Reason for the status of the check-in */
		statuscode: OptionSet.msevtmgt_CheckIn.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** The time zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record */
			readonly CreatedBy: string;
			/** The date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record */
			readonly CreatedOnBehalfBy: string;
			/** The sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record */
			readonly ModifiedBy: string;
			/** The date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record */
			readonly ModifiedOnBehalfBy: string;
			/** Field representing a percentile approximation of time spent for an attendee in the virtual event. */
			readonly msdynmkt_attendancepercentage: string;
			/** Audience type */
			readonly msevtmgt_AudienceType: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_CheckInId: string;
			/** Check-in time */
			readonly msevtmgt_Checkintime_UtcDateAndTime: string;
			readonly msevtmgt_CheckInType: string;
			/** Check-out time */
			readonly msevtmgt_CheckOutTime_UtcDateAndTime: string;
			/** Contact records of the check-in */
			readonly msevtmgt_Contact: string;
			/** Unique identifier for the event associated with the check-in */
			readonly msevtmgt_Event: string;
			/** Check-in records are used to log attendance at a particular event or session. */
			readonly msevtmgt_Name: string;
			readonly msevtmgt_NumberOfQuestionsAsked: string;
			/** Unique identifier for the attendee pass associated with the check-in */
			readonly msevtmgt_PurchasedPassesId: string;
			readonly msevtmgt_RegistrationId: string;
			readonly msevtmgt_registrationidfromqr: string;
			/** The session attended */
			readonly msevtmgt_SessionAttended: string;
			readonly msevtmgt_SessionCode: string;
			/** All active session registration records for this check-in */
			readonly msevtmgt_SessionRegistration: string;
			readonly msevtmgt_SessionType: string;
			/** Unique identifier of the currency associated with the entity */
			readonly msevtmgt_TransactionCurrencyId: string;
			readonly msevtmgt_ViewingDurationInMins: string;
			/** The date and time when the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record */
			readonly OwningUser: string;
			/** Status of the check-in */
			readonly statecode: string;
			/** Reason for the status of the check-in */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** The time zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msevtmgt_CheckIn {
		enum msevtmgt_AudienceType {
			/** 100000003 */
			Advanced,
			/** 100000000 */
			General,
			/** 100000002 */
			Intermediate,
			/** 100000001 */
			Introductory
		}
		enum msevtmgt_CheckInType {
			/** 100000001 */
			Event_check_in,
			/** 100000000 */
			Session_check_in
		}
		enum msevtmgt_SessionType {
			/** 100000003 */
			Brainstorming,
			/** 100000004 */
			Breakout,
			/** 100000002 */
			General,
			/** 100000000 */
			Hands_onlab,
			/** 100000001 */
			Keynote,
			/** 100000005 */
			Training
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}