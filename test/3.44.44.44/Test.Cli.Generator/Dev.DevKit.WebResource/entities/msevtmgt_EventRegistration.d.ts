//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsevtmgt_EventRegistration_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier of the user who created the record */
			CreatedBy: DevKit.Controls.Lookup;
			/** The date and time when the record was created */
			CreatedOn: DevKit.Controls.DateTime;
			/** Status of the event registration */
			statecode: DevKit.Controls.OptionSet;
		}
		interface tab_GeneralTab_Sections {
			_0AC965CC_F4C1_44D5_B2A2_C7235987D6AB_SECTION_3: DevKit.Controls.Section;
			_0AC965CC_F4C1_44D5_B2A2_C7235987D6AB_SECTION_4: DevKit.Controls.Section;
			_B8FB35BE_1401_4F23_8A93_62E520C669AD: DevKit.Controls.Section;
		}
		interface tab_RegistrationResponsesTab_Sections {
			registration_responses_section: DevKit.Controls.Section;
		}
		interface tab_SessionCheckinTab_Sections {
			SessionCheckinTab_section_1: DevKit.Controls.Section;
			SessionCheckinTab_section_2: DevKit.Controls.Section;
		}
		interface tab_SessionEligibleTab_Sections {
			eligible_sessions_section: DevKit.Controls.Section;
		}
		interface tab_SessionRegistrationTab_Sections {
			session_registrations_section: DevKit.Controls.Section;
		}
		interface tab_GeneralTab extends DevKit.Controls.ITab {
			Section: tab_GeneralTab_Sections;
		}
		interface tab_RegistrationResponsesTab extends DevKit.Controls.ITab {
			Section: tab_RegistrationResponsesTab_Sections;
		}
		interface tab_SessionCheckinTab extends DevKit.Controls.ITab {
			Section: tab_SessionCheckinTab_Sections;
		}
		interface tab_SessionEligibleTab extends DevKit.Controls.ITab {
			Section: tab_SessionEligibleTab_Sections;
		}
		interface tab_SessionRegistrationTab extends DevKit.Controls.ITab {
			Section: tab_SessionRegistrationTab_Sections;
		}
		interface Tabs {
			GeneralTab: tab_GeneralTab;
			RegistrationResponsesTab: tab_RegistrationResponsesTab;
			SessionCheckinTab: tab_SessionCheckinTab;
			SessionEligibleTab: tab_SessionEligibleTab;
			SessionRegistrationTab: tab_SessionRegistrationTab;
		}
		interface Body {
			Tab: Tabs;
			/** The date and time when the record was created */
			CreatedOn: DevKit.Controls.DateTime;
			msevtmgt_Area: DevKit.Controls.OptionSet;
			msevtmgt_CompanySize: DevKit.Controls.OptionSet;
			msevtmgt_ContactId: DevKit.Controls.Lookup;
			/** Unique identifier for the event associated with the event registration */
			msevtmgt_EventId: DevKit.Controls.Lookup;
			msevtmgt_Industry: DevKit.Controls.OptionSet;
			msevtmgt_iscanceled: DevKit.Controls.Boolean;
			/** Unique identifier of the registration record */
			msevtmgt_Name: DevKit.Controls.String;
			/** Primary role of the event attendee */
			msevtmgt_PrimaryRole: DevKit.Controls.OptionSet;
			msevtmgt_qrcode: DevKit.Controls.String;
			/** Indicates whether the registration creation notification has been seen */
			msevtmgt_registrationnotificationseen: DevKit.Controls.Boolean;
			msevtmgt_registrationstatus: DevKit.Controls.String;
			/** Webinar ID of the event registration */
			msevtmgt_WebinarRegistrationID: DevKit.Controls.String;
			msevtmgt_YearsInIndustry: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
			WebResource_QRCodeWrapper: DevKit.Controls.WebResource;
		}
		interface Navigation {
			msdynmkt_marketingformsubmission_eventregistration: DevKit.Controls.NavigationItem,
			msevtmgt_eventregistration_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msevtmgt_eventregistration_adx_portalcomments: DevKit.Controls.NavigationItem,
			msevtmgt_eventregistration_Appointments: DevKit.Controls.NavigationItem,
			msevtmgt_EventRegistration_AttendeePass: DevKit.Controls.NavigationItem,
			msevtmgt_eventregistration_Emails: DevKit.Controls.NavigationItem,
			msevtmgt_eventregistration_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msevtmgt_eventregistration_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msevtmgt_eventregistration_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msevtmgt_eventregistration_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msevtmgt_eventregistration_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msevtmgt_eventregistration_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msevtmgt_eventregistration_msevtmgt_checkin_RegistrationId: DevKit.Controls.NavigationItem,
			msevtmgt_EventRegistration_msevtmgt_eventpurchaseattendee: DevKit.Controls.NavigationItem,
			msevtmgt_eventregistration_msevtmgt_hotelroomreservation_Attendee: DevKit.Controls.NavigationItem,
			msevtmgt_eventregistration_msevtmgt_sessionregistration_RegistrationID: DevKit.Controls.NavigationItem,
			msevtmgt_EventRegistration_msevtmgt_Speaker: DevKit.Controls.NavigationItem,
			msevtmgt_eventregistration_msfp_alerts: DevKit.Controls.NavigationItem,
			msevtmgt_eventregistration_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msevtmgt_eventregistration_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msevtmgt_eventregistration_PhoneCalls: DevKit.Controls.NavigationItem,
			msevtmgt_eventregistration_ServiceAppointments: DevKit.Controls.NavigationItem,
			msevtmgt_eventregistration_Tasks: DevKit.Controls.NavigationItem,
			msevtmgt_msevtmgt_eventregistration_msevtmgt_registrationresponse_eventregistration: DevKit.Controls.NavigationItem
		}
		interface quickForm_CompanyForContact_Body {
			ParentCustomerId: DevKit.Controls.QuickView;
		}
		interface quickForm_CompanyForContact extends DevKit.Controls.IQuickView {
			Body: quickForm_CompanyForContact_Body;
		}
		interface QuickForm {
			CompanyForContact: quickForm_CompanyForContact;
		}
		interface Grid {
			AttendeePasses: DevKit.Controls.Grid;
			Attendees: DevKit.Controls.Grid;
			Checkins_by_Industry: DevKit.Controls.Grid;
			Checkins_by_Role: DevKit.Controls.Grid;
			Checkins_by_SessionType: DevKit.Controls.Grid;
			Registration_Responses: DevKit.Controls.Grid;
			Session_Registrations: DevKit.Controls.Grid;
			Sessions_Eligible_With_Pass: DevKit.Controls.Grid;
		}
	}
	class Formmsevtmgt_EventRegistration_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_EventRegistration_Information */
		Body: DevKit.Formmsevtmgt_EventRegistration_Information.Body;
		/** The Header section of form msevtmgt_EventRegistration_Information */
		Header: DevKit.Formmsevtmgt_EventRegistration_Information.Header;
		/** The Navigation of form msevtmgt_EventRegistration_Information */
		Navigation: DevKit.Formmsevtmgt_EventRegistration_Information.Navigation;
		/** The QuickForm of form msevtmgt_EventRegistration_Information */
		QuickForm: DevKit.Formmsevtmgt_EventRegistration_Information.QuickForm;
		/** The Grid of form msevtmgt_EventRegistration_Information */
		Grid: DevKit.Formmsevtmgt_EventRegistration_Information.Grid;
		/** The SidePanes of form msevtmgt_EventRegistration_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormEvent_registration_quick_create {
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
			msevtmgt_ContactId: DevKit.Controls.Lookup;
			/** Unique identifier for the event associated with the event registration */
			msevtmgt_EventId: DevKit.Controls.Lookup;
			/** Primary role of the event attendee */
			msevtmgt_PrimaryRole: DevKit.Controls.OptionSet;
		}
	}
	class FormEvent_registration_quick_create extends DevKit.IForm {
		/**
		* Event registration quick create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Event_registration_quick_create */
		Body: DevKit.FormEvent_registration_quick_create.Body;
	}
	class msevtmgt_EventRegistrationApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_EventRegistrationApi
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
		msdynmkt_linkedregistrationid: string;
		msevtmgt_Area: OptionSet.msevtmgt_EventRegistration.msevtmgt_Area;
		msevtmgt_CompanySize: OptionSet.msevtmgt_EventRegistration.msevtmgt_CompanySize;
		msevtmgt_ContactId: string;
		msevtmgt_correlationid: string;
		/** A flag that indicates the origin of the registration */
		msevtmgt_createdFromApi: boolean;
		/** Unique identifier for the event associated with the event registration */
		msevtmgt_EventId: string;
		/** Unique identifier for entity instances */
		msevtmgt_EventRegistrationId: string;
		msevtmgt_eventregistrationticketid: string;
		msevtmgt_Industry: OptionSet.msevtmgt_EventRegistration.msevtmgt_Industry;
		msevtmgt_internalregistrationstatus: OptionSet.msevtmgt_EventRegistration.msevtmgt_internalregistrationstatus;
		msevtmgt_iscanceled: boolean;
		msevtmgt_Memo: string;
		/** Unique identifier of the registration record */
		msevtmgt_Name: string;
		msevtmgt_originaltimestamp_TimezoneDateAndTime: Date;
		/** Primary role of the event attendee */
		msevtmgt_PrimaryRole: OptionSet.msevtmgt_EventRegistration.msevtmgt_PrimaryRole;
		/** The publishing state of the event registration */
		msevtmgt_publishingstate: OptionSet.msevtmgt_EventRegistration.msevtmgt_publishingstate;
		msevtmgt_qrcode: string;
		/** A lookup to the contact who created this event registration */
		msevtmgt_registeredby: string;
		/** Indicates whether the registration creation notification has been seen */
		msevtmgt_registrationnotificationseen: boolean;
		msevtmgt_registrationoperation: string;
		msevtmgt_registrationstatus: string;
		/** A flag that indicates that the registration was synced with the provider */
		msevtmgt_SyncedWithProvider: OptionSet.msevtmgt_EventRegistration.msevtmgt_SyncedWithProvider;
		/** Deprecated attribute */
		msevtmgt_TimesCheckedIn: number;
		/** Webinar ID of the event registration */
		msevtmgt_WebinarRegistrationID: string;
		msevtmgt_YearsInIndustry: OptionSet.msevtmgt_EventRegistration.msevtmgt_YearsInIndustry;
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
		/** Status of the event registration */
		statecode: OptionSet.msevtmgt_EventRegistration.statecode;
		/** Reason for the status of the event registration */
		statuscode: OptionSet.msevtmgt_EventRegistration.statuscode;
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
			readonly msdynmkt_linkedregistrationid: string;
			readonly msevtmgt_Area: string;
			readonly msevtmgt_CompanySize: string;
			readonly msevtmgt_ContactId: string;
			readonly msevtmgt_correlationid: string;
			/** A flag that indicates the origin of the registration */
			readonly msevtmgt_createdFromApi: string;
			/** Unique identifier for the event associated with the event registration */
			readonly msevtmgt_EventId: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_EventRegistrationId: string;
			readonly msevtmgt_eventregistrationticketid: string;
			readonly msevtmgt_Industry: string;
			readonly msevtmgt_internalregistrationstatus: string;
			readonly msevtmgt_iscanceled: string;
			readonly msevtmgt_Memo: string;
			/** Unique identifier of the registration record */
			readonly msevtmgt_Name: string;
			readonly msevtmgt_originaltimestamp_TimezoneDateAndTime: string;
			/** Primary role of the event attendee */
			readonly msevtmgt_PrimaryRole: string;
			/** The publishing state of the event registration */
			readonly msevtmgt_publishingstate: string;
			readonly msevtmgt_qrcode: string;
			/** A lookup to the contact who created this event registration */
			readonly msevtmgt_registeredby: string;
			/** Indicates whether the registration creation notification has been seen */
			readonly msevtmgt_registrationnotificationseen: string;
			readonly msevtmgt_registrationoperation: string;
			readonly msevtmgt_registrationstatus: string;
			/** A flag that indicates that the registration was synced with the provider */
			readonly msevtmgt_SyncedWithProvider: string;
			/** Deprecated attribute */
			readonly msevtmgt_TimesCheckedIn: string;
			/** Webinar ID of the event registration */
			readonly msevtmgt_WebinarRegistrationID: string;
			readonly msevtmgt_YearsInIndustry: string;
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
			/** Status of the event registration */
			readonly statecode: string;
			/** Reason for the status of the event registration */
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
	namespace msevtmgt_EventRegistration {
		enum msevtmgt_Area {
			/** 100000000 */
			Administration,
			/** 100000001 */
			Customer_service,
			/** 100000002 */
			Executivemanagement,
			/** 100000004 */
			Finance,
			/** 100000005 */
			HR,
			/** 100000006 */
			IT,
			/** 100000007 */
			Legal,
			/** 100000003 */
			Logistics,
			/** 100000008 */
			Marketing,
			/** 100000009 */
			Sales
		}
		enum msevtmgt_CompanySize {
			/** 100000008 */
			_10001_or_more,
			/** 100000005 */
			_1001_to_2500,
			/** 100000002 */
			_101_to_250,
			/** 100000006 */
			_2501_to_5000,
			/** 100000003 */
			_251_to_500,
			/** 100000000 */
			_50_or_less,
			/** 100000007 */
			_5001_to_10000,
			/** 100000004 */
			_501_to_1000,
			/** 100000001 */
			_51_to_100
		}
		enum msevtmgt_Industry {
			/** 100000000 */
			Architecture_and_engineering,
			/** 100000001 */
			Financial_services,
			/** 100000002 */
			Manufacturing,
			/** 100000003 */
			Media_entertainment,
			/** 100000008 */
			Other,
			/** 100000004 */
			Professional_services,
			/** 100000005 */
			Public_sector,
			/** 100000006 */
			Retail,
			/** 100000007 */
			Wholesale_and_distribution
		}
		enum msevtmgt_internalregistrationstatus {
			/** 100000000 */
			New,
			/** 100000001 */
			Ready
		}
		enum msevtmgt_PrimaryRole {
			/** 100000000 */
			Attendee,
			/** 100000001 */
			Journalist,
			/** 100000002 */
			Other
		}
		enum msevtmgt_publishingstate {
			/** 100000003 */
			Failed_to_publish,
			/** 100000002 */
			Parent_webinar_failed,
			/** 100000000 */
			Pending,
			/** 100000001 */
			Published,
			/** 100000004 */
			Webinar_provider_error
		}
		enum msevtmgt_SyncedWithProvider {
			/** 100000001 */
			No,
			/** 100000002 */
			Yes
		}
		enum msevtmgt_YearsInIndustry {
			/** 100000001 */
			_1_to_5_years,
			/** 100000002 */
			_5_to_10_years,
			/** 100000003 */
			Over_10_years,
			/** 100000000 */
			Under_one_year
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