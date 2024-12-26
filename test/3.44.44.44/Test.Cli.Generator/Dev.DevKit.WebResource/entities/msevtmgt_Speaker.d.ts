//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSpeakers {
		interface Header extends DevKit.Controls.IHeader {
			/** Speaker type */
			msevtmgt_Type: DevKit.Controls.OptionSet;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab__51C14EE7_B9F8_4F24_8C1D_EB7AFE82E863_Sections {
			General_section_4: DevKit.Controls.Section;
		}
		interface tab_EngagementProfile_Sections {
			EngagementProfile_section_1: DevKit.Controls.Section;
			EngagementProfile_section_2: DevKit.Controls.Section;
		}
		interface tab_HotelRoomReservationsTab_Sections {
			HotelRoomReservationsSection: DevKit.Controls.Section;
		}
		interface tab_SpeakerEngagements_Sections {
			SpeakerEngagements_section_1: DevKit.Controls.Section;
			SpeakerEngagementsCalendarSecion: DevKit.Controls.Section;
		}
		interface tab__51C14EE7_B9F8_4F24_8C1D_EB7AFE82E863 extends DevKit.Controls.ITab {
			Section: tab__51C14EE7_B9F8_4F24_8C1D_EB7AFE82E863_Sections;
		}
		interface tab_EngagementProfile extends DevKit.Controls.ITab {
			Section: tab_EngagementProfile_Sections;
		}
		interface tab_HotelRoomReservationsTab extends DevKit.Controls.ITab {
			Section: tab_HotelRoomReservationsTab_Sections;
		}
		interface tab_SpeakerEngagements extends DevKit.Controls.ITab {
			Section: tab_SpeakerEngagements_Sections;
		}
		interface Tabs {
			_51C14EE7_B9F8_4F24_8C1D_EB7AFE82E863: tab__51C14EE7_B9F8_4F24_8C1D_EB7AFE82E863;
			EngagementProfile: tab_EngagementProfile;
			HotelRoomReservationsTab: tab_HotelRoomReservationsTab;
			SpeakerEngagements: tab_SpeakerEngagements;
		}
		interface Body {
			Tab: Tabs;
			/** About */
			msevtmgt_About: DevKit.Controls.String;
			/** Accomplishments */
			msevtmgt_Accomplishments: DevKit.Controls.String;
			/** Blog */
			msevtmgt_Blog: DevKit.Controls.String;
			/** Lookup field for contact */
			msevtmgt_Contact: DevKit.Controls.Lookup;
			/** Speaker email */
			msevtmgt_Email: DevKit.Controls.String;
			/** LinkedIn */
			msevtmgt_LinkedIn: DevKit.Controls.String;
			/** The name of the custom entity */
			msevtmgt_Name: DevKit.Controls.String;
			/** Publications */
			msevtmgt_Publications: DevKit.Controls.String;
			/** Value of the speaker cost. */
			msevtmgt_SpeakerCost: DevKit.Controls.Money;
			/** Title */
			msevtmgt_Title: DevKit.Controls.String;
			/** Twitter */
			msevtmgt_Twitter: DevKit.Controls.String;
			/** Speaker type */
			msevtmgt_Type: DevKit.Controls.OptionSet;
			/** Website URL */
			msevtmgt_Website: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
		}
		interface Navigation {
			msevtmgt_msevtmgt_speaker_msevtmgt_speakerengagement_Speaker: DevKit.Controls.NavigationItem,
			msevtmgt_speaker_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msevtmgt_speaker_adx_portalcomments: DevKit.Controls.NavigationItem,
			msevtmgt_speaker_Appointments: DevKit.Controls.NavigationItem,
			msevtmgt_speaker_Emails: DevKit.Controls.NavigationItem,
			msevtmgt_speaker_hotelroomreservation: DevKit.Controls.NavigationItem,
			msevtmgt_speaker_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msevtmgt_speaker_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msevtmgt_speaker_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msevtmgt_speaker_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msevtmgt_speaker_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msevtmgt_speaker_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msevtmgt_speaker_msevtmgt_Session: DevKit.Controls.NavigationItem,
			msevtmgt_speaker_msfp_alerts: DevKit.Controls.NavigationItem,
			msevtmgt_speaker_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msevtmgt_speaker_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msevtmgt_speaker_PhoneCalls: DevKit.Controls.NavigationItem,
			msevtmgt_speaker_ServiceAppointments: DevKit.Controls.NavigationItem,
			msevtmgt_speaker_Tasks: DevKit.Controls.NavigationItem
		}
		interface quickForm_ContactCompanyQuickViewForm_Body {
			ParentCustomerId: DevKit.Controls.QuickView;
		}
		interface quickForm_ContactCompanyQuickViewForm extends DevKit.Controls.IQuickView {
			Body: quickForm_ContactCompanyQuickViewForm_Body;
		}
		interface QuickForm {
			ContactCompanyQuickViewForm: quickForm_ContactCompanyQuickViewForm;
		}
		interface Grid {
			EventbyEventType: DevKit.Controls.Grid;
			EventHistory: DevKit.Controls.Grid;
			HotelRoomReservationsGrid: DevKit.Controls.Grid;
			NumberOfEngagementsOverTime: DevKit.Controls.Grid;
			SessionHistory: DevKit.Controls.Grid;
			SpeakerEngagements: DevKit.Controls.Grid;
			SpeakerEngagementsCalendarGrid: DevKit.Controls.Grid;
		}
	}
	class FormSpeakers extends DevKit.IForm {
		/**
		* Speakers [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Speakers */
		Body: DevKit.FormSpeakers.Body;
		/** The Header section of form Speakers */
		Header: DevKit.FormSpeakers.Header;
		/** The Navigation of form Speakers */
		Navigation: DevKit.FormSpeakers.Navigation;
		/** The QuickForm of form Speakers */
		QuickForm: DevKit.FormSpeakers.QuickForm;
		/** The Grid of form Speakers */
		Grid: DevKit.FormSpeakers.Grid;
		/** The SidePanes of form Speakers */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsevtmgt_Speaker_Quick_Create_Form {
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
			/** About */
			msevtmgt_About: DevKit.Controls.String;
			/** Accomplishments */
			msevtmgt_Accomplishments: DevKit.Controls.String;
			/** Blog */
			msevtmgt_Blog: DevKit.Controls.String;
			/** Lookup field for contact */
			msevtmgt_Contact: DevKit.Controls.Lookup;
			/** Speaker email */
			msevtmgt_Email: DevKit.Controls.String;
			/** LinkedIn */
			msevtmgt_LinkedIn: DevKit.Controls.String;
			/** The name of the custom entity */
			msevtmgt_Name: DevKit.Controls.String;
			/** Publications */
			msevtmgt_Publications: DevKit.Controls.String;
			/** Value of the speaker cost. */
			msevtmgt_SpeakerCost: DevKit.Controls.Money;
			/** Title */
			msevtmgt_Title: DevKit.Controls.String;
			/** Twitter */
			msevtmgt_Twitter: DevKit.Controls.String;
			/** Speaker type */
			msevtmgt_Type: DevKit.Controls.OptionSet;
			/** Website URL */
			msevtmgt_Website: DevKit.Controls.String;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsevtmgt_Speaker_Quick_Create_Form extends DevKit.IForm {
		/**
		* Quick create form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_Speaker_Quick_Create_Form */
		Body: DevKit.Formmsevtmgt_Speaker_Quick_Create_Form.Body;
	}
	class msevtmgt_SpeakerApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_SpeakerApi
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
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		readonly EntityImageId: string;
		/** Exchange rate between the base currency and the currency associated with the entity */
		readonly ExchangeRate: number;
		/** The sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record */
		readonly ModifiedBy: string;
		/** The date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record */
		readonly ModifiedOnBehalfBy: string;
		/** About */
		msevtmgt_About: string;
		/** Accomplishments */
		msevtmgt_Accomplishments: string;
		/** Blog */
		msevtmgt_Blog: string;
		/** Lookup field for contact */
		msevtmgt_Contact: string;
		/** Speaker email */
		msevtmgt_Email: string;
		/** Unique identifier for the event associated with the speaker */
		msevtmgt_EventId: string;
		/** Lookup field for event registration */
		msevtmgt_EventRegistration: string;
		/** LinkedIn */
		msevtmgt_LinkedIn: string;
		/** The name of the custom entity */
		msevtmgt_Name: string;
		/** Publications */
		msevtmgt_Publications: string;
		/** Value of the speaker cost. */
		msevtmgt_SpeakerCost: number;
		/** Value of the speaker cost (in the base currency) */
		readonly msevtmgt_speakercost_Base: number;
		/** Unique identifier for entity instances */
		msevtmgt_SpeakerId: string;
		/** Title */
		msevtmgt_Title: string;
		/** Unique identifier of the currency associated with the entity */
		msevtmgt_TransactionCurrencyId: string;
		/** Twitter */
		msevtmgt_Twitter: string;
		/** Speaker type */
		msevtmgt_Type: OptionSet.msevtmgt_Speaker.msevtmgt_Type;
		/** Website URL */
		msevtmgt_Website: string;
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
		/** Contains the ID of the process associated with the entity */
		processid: string;
		/** Contains the ID of the stage where the entity is located */
		stageid: string;
		/** Status of the event speaker */
		statecode: OptionSet.msevtmgt_Speaker.statecode;
		/** Reason for the status of the event speaker */
		statuscode: OptionSet.msevtmgt_Speaker.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the entity */
		TransactionCurrencyId: string;
		/** A comma-separated list of string values representing the unique IDs of stages in a business-process flow instance, in the order that they occur. */
		traversedpath: string;
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
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly EntityImageId: string;
			/** Exchange rate between the base currency and the currency associated with the entity */
			readonly ExchangeRate: string;
			/** The sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record */
			readonly ModifiedBy: string;
			/** The date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record */
			readonly ModifiedOnBehalfBy: string;
			/** About */
			readonly msevtmgt_About: string;
			/** Accomplishments */
			readonly msevtmgt_Accomplishments: string;
			/** Blog */
			readonly msevtmgt_Blog: string;
			/** Lookup field for contact */
			readonly msevtmgt_Contact: string;
			/** Speaker email */
			readonly msevtmgt_Email: string;
			/** Unique identifier for the event associated with the speaker */
			readonly msevtmgt_EventId: string;
			/** Lookup field for event registration */
			readonly msevtmgt_EventRegistration: string;
			/** LinkedIn */
			readonly msevtmgt_LinkedIn: string;
			/** The name of the custom entity */
			readonly msevtmgt_Name: string;
			/** Publications */
			readonly msevtmgt_Publications: string;
			/** Value of the speaker cost. */
			readonly msevtmgt_SpeakerCost: string;
			/** Value of the speaker cost (in the base currency) */
			readonly msevtmgt_speakercost_Base: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_SpeakerId: string;
			/** Title */
			readonly msevtmgt_Title: string;
			/** Unique identifier of the currency associated with the entity */
			readonly msevtmgt_TransactionCurrencyId: string;
			/** Twitter */
			readonly msevtmgt_Twitter: string;
			/** Speaker type */
			readonly msevtmgt_Type: string;
			/** Website URL */
			readonly msevtmgt_Website: string;
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
			/** Contains the ID of the process associated with the entity */
			readonly processid: string;
			/** Contains the ID of the stage where the entity is located */
			readonly stageid: string;
			/** Status of the event speaker */
			readonly statecode: string;
			/** Reason for the status of the event speaker */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the entity */
			readonly TransactionCurrencyId: string;
			/** A comma-separated list of string values representing the unique IDs of stages in a business-process flow instance, in the order that they occur. */
			readonly traversedpath: string;
			/** The time zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msevtmgt_Speaker {
		enum msevtmgt_Type {
			/** 100000001 */
			External_speaker,
			/** 100000000 */
			Internal_speaker
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