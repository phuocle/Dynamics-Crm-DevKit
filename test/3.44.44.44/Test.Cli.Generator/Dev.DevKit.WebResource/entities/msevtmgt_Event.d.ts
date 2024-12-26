//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormEvent {
		interface Header extends DevKit.Controls.IHeader {
			msevtmgt_istemplate: DevKit.Controls.OptionSet;
			msevtmgt_PublishStatus: DevKit.Controls.OptionSet;
			/** Event creation origin */
			msevtmgt_sourcesystem: DevKit.Controls.OptionSet;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the event */
			statecode: DevKit.Controls.OptionSet;
		}
		interface tab_AgendaTab_Sections {
			AgendaTab_section_1: DevKit.Controls.Section;
			AgendaTab_section_10: DevKit.Controls.Section;
			AgendaTab_section_4: DevKit.Controls.Section;
			AgendaTab_section_6: DevKit.Controls.Section;
			CustomAgendaSection: DevKit.Controls.Section;
			Session_Distributions: DevKit.Controls.Section;
			Track_Distributions: DevKit.Controls.Section;
		}
		interface tab_EventSeriesTab_Sections {
			tab_8_section_1: DevKit.Controls.Section;
		}
		interface tab_FinancialsTab_Sections {
			_B6526D8B_5DEA_4950_A054_CEFE795F506F_SECTION_3: DevKit.Controls.Section;
			_B6526D8B_5DEA_4950_A054_CEFE795F506F_SECTION_6: DevKit.Controls.Section;
			Calendar_content_section: DevKit.Controls.Section;
			FinancialsTab_section_1: DevKit.Controls.Section;
		}
		interface tab_GeneralTab_Sections {
			_6F16E2F5_AF38_4B8A_8026_94FBE9A5C155: DevKit.Controls.Section;
			_B6526D8B_5DEA_4950_A054_CEFE795F506F_SECTION_4: DevKit.Controls.Section;
			_B6526D8B_5DEA_4950_A054_CEFE795F506F_SECTION_5: DevKit.Controls.Section;
			_B6526D8B_5DEA_4950_A054_CEFE795F506F_SECTION_7: DevKit.Controls.Section;
			GeneralTab_section_Website: DevKit.Controls.Section;
			OrganizeTab_section_location: DevKit.Controls.Section;
			OrganizeTab_section_venueconstraints: DevKit.Controls.Section;
			OrganizeTab_section_webinarsetup: DevKit.Controls.Section;
			TeamsIntegrationSection: DevKit.Controls.Section;
			WaitlistSection: DevKit.Controls.Section;
		}
		interface tab_GuestLogisticsTab_Sections {
			GuestLogisticsTab_section_1: DevKit.Controls.Section;
		}
		interface tab_RecoveryItemsTab_Sections {
			RecoveryItemsSection: DevKit.Controls.Section;
		}
		interface tab_RegistrationAndAttendanceTab_Sections {
			InteractionsTab_EventRegistrationCanceledList: DevKit.Controls.Section;
			RegistrationAndAttendanceTab_section_1: DevKit.Controls.Section;
			RegistrationAndAttendanceTab_section_3: DevKit.Controls.Section;
			RegistrationAndAttendanceTab_section_4: DevKit.Controls.Section;
			RegistrationAndAttendanceTab_section_5: DevKit.Controls.Section;
			RegistrationAndAttendanceTab_section_6: DevKit.Controls.Section;
			RegistrationAndAttendanceTab_section_waitlist: DevKit.Controls.Section;
		}
		interface tab_RoomReservationsTab_Sections {
			RoomReservationsSection: DevKit.Controls.Section;
		}
		interface tab_RTMWebsiteAndFormTab_Sections {
			RTMWebsiteAndFormSection: DevKit.Controls.Section;
			RTMWebsiteAndFormSection2: DevKit.Controls.Section;
		}
		interface tab_WebsiteAndFormTab_Sections {
			CustomRegistrationFieldsSection: DevKit.Controls.Section;
			WebsiteAndRegistrationFormSection: DevKit.Controls.Section;
		}
		interface tab_AgendaTab extends DevKit.Controls.ITab {
			Section: tab_AgendaTab_Sections;
		}
		interface tab_EventSeriesTab extends DevKit.Controls.ITab {
			Section: tab_EventSeriesTab_Sections;
		}
		interface tab_FinancialsTab extends DevKit.Controls.ITab {
			Section: tab_FinancialsTab_Sections;
		}
		interface tab_GeneralTab extends DevKit.Controls.ITab {
			Section: tab_GeneralTab_Sections;
		}
		interface tab_GuestLogisticsTab extends DevKit.Controls.ITab {
			Section: tab_GuestLogisticsTab_Sections;
		}
		interface tab_RecoveryItemsTab extends DevKit.Controls.ITab {
			Section: tab_RecoveryItemsTab_Sections;
		}
		interface tab_RegistrationAndAttendanceTab extends DevKit.Controls.ITab {
			Section: tab_RegistrationAndAttendanceTab_Sections;
		}
		interface tab_RoomReservationsTab extends DevKit.Controls.ITab {
			Section: tab_RoomReservationsTab_Sections;
		}
		interface tab_RTMWebsiteAndFormTab extends DevKit.Controls.ITab {
			Section: tab_RTMWebsiteAndFormTab_Sections;
		}
		interface tab_WebsiteAndFormTab extends DevKit.Controls.ITab {
			Section: tab_WebsiteAndFormTab_Sections;
		}
		interface Tabs {
			AgendaTab: tab_AgendaTab;
			EventSeriesTab: tab_EventSeriesTab;
			FinancialsTab: tab_FinancialsTab;
			GeneralTab: tab_GeneralTab;
			GuestLogisticsTab: tab_GuestLogisticsTab;
			RecoveryItemsTab: tab_RecoveryItemsTab;
			RegistrationAndAttendanceTab: tab_RegistrationAndAttendanceTab;
			RoomReservationsTab: tab_RoomReservationsTab;
			RTMWebsiteAndFormTab: tab_RTMWebsiteAndFormTab;
			WebsiteAndFormTab: tab_WebsiteAndFormTab;
		}
		interface Body {
			Tab: Tabs;
			EventRegistrationCanceledList: DevKit.Controls.ActionCards;
			/** Unique identifier of the user who modified the record */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Unique identifier for the marketing form associated with the event. */
			msdyncrm_marketingformid: DevKit.Controls.Lookup;
			msdyncrm_usemarketingform: DevKit.Controls.Boolean;
			msevtmgt_allowanonymousregistrations: DevKit.Controls.Boolean;
			msevtmgt_allowanonymousregistrations1: DevKit.Controls.Boolean;
			msevtmgt_allowattendeestounmute: DevKit.Controls.Boolean;
			msevtmgt_allowcameraforattendees: DevKit.Controls.Boolean;
			msevtmgt_allowcustomagenda: DevKit.Controls.Boolean;
			msevtmgt_allowexternalpresenters: DevKit.Controls.Boolean;
			msevtmgt_allowmeetingchat: DevKit.Controls.OptionSet;
			msevtmgt_allowpstnsserstobypasslobby: DevKit.Controls.Boolean;
			msevtmgt_allowteamsmeetingreactions: DevKit.Controls.Boolean;
			msevtmgt_attendeeengagementreport: DevKit.Controls.Boolean;
			msevtmgt_attendeeurl: DevKit.Controls.String;
			msevtmgt_autoadmittedusers: DevKit.Controls.OptionSet;
			msevtmgt_autorecordingenabled: DevKit.Controls.Boolean;
			/** For free events, we will automatically register waitlisted contacts by default as soon as additional capacity becomes available */
			msevtmgt_autoregisterwaitlistitems: DevKit.Controls.Boolean;
			msevtmgt_baserecurrenteventid: DevKit.Controls.String;
			msevtmgt_BudgetAllocated: DevKit.Controls.Money;
			msevtmgt_building: DevKit.Controls.Lookup;
			/** Rich text calendar content for events. */
			msevtmgt_calendarcontent: DevKit.Controls.String;
			/** Plain text calendar content for events. */
			msevtmgt_calendarcontent_plaintext: DevKit.Controls.String;
			msevtmgt_changemeetingoptions: DevKit.Controls.Boolean;
			/** Check-in count */
			msevtmgt_CheckInCount: DevKit.Controls.Integer;
			msevtmgt_streamingenabled: DevKit.Controls.Boolean;
			msevtmgt_CountdownInDays: DevKit.Controls.Integer;
			/** Indicates whether a lead should be created each time somebody registers for this event */
			msevtmgt_createleadsforeventregistrations: DevKit.Controls.Boolean;
			/** Indicates whether a lead should be created each time somebody registers for this event */
			msevtmgt_createleadsforeventregistrations1: DevKit.Controls.Boolean;
			/** Indicates whether a lead should be created each time somebody registers for this event */
			msevtmgt_createleadsforeventregistrations2: DevKit.Controls.Boolean;
			/** Available event creation sources */
			msevtmgt_creationsource: DevKit.Controls.OptionSet;
			msevtmgt_customeventurl: DevKit.Controls.Boolean;
			msevtmgt_customeventurl1: DevKit.Controls.Boolean;
			msevtmgt_Description: DevKit.Controls.String;
			msevtmgt_descriptorsyncstatus: DevKit.Controls.OptionSet;
			msevtmgt_embedregistrationform: DevKit.Controls.Boolean;
			msevtmgt_enablecaptcha: DevKit.Controls.Boolean;
			msevtmgt_enablecaptcha1: DevKit.Controls.Boolean;
			msevtmgt_Enablemultiattendeeregistration: DevKit.Controls.Boolean;
			msevtmgt_Enablemultiattendeeregistration1: DevKit.Controls.Boolean;
			msevtmgt_entryexitannouncementsenabled: DevKit.Controls.Boolean;
			msevtmgt_EventEndDate: DevKit.Controls.DateTime;
			msevtmgt_EventFormat: DevKit.Controls.OptionSet;
			msevtmgt_eventimage: DevKit.Controls.Lookup;
			msevtmgt_eventimage1: DevKit.Controls.Lookup;
			msevtmgt_EventStartDate: DevKit.Controls.DateTime;
			msevtmgt_EventTimeZone: DevKit.Controls.Integer;
			msevtmgt_EventType: DevKit.Controls.OptionSet;
			msevtmgt_EventVenueCost: DevKit.Controls.Money;
			msevtmgt_ExpectedOutcome: DevKit.Controls.String;
			msevtmgt_formpagejavascriptcode: DevKit.Controls.String;
			/** Field specifying if a streamed event is out of synchronization with it's provider. */
			msevtmgt_isoutofsync: DevKit.Controls.Boolean;
			msevtmgt_IsRecurringEvent: DevKit.Controls.Boolean;
			/** The language of the webinar */
			msevtmgt_Language: DevKit.Controls.OptionSet;
			msevtmgt_layout: DevKit.Controls.Lookup;
			msevtmgt_ManageRegistrationCount: DevKit.Controls.OptionSet;
			/** Unique Identifier for the marketing form associated with the event */
			msevtmgt_marketingformid: DevKit.Controls.Lookup;
			msevtmgt_MaximumEventCapacity: DevKit.Controls.Integer;
			msevtmgt_MiscellaneousCosts: DevKit.Controls.Money;
			/** The name of the custom entity */
			msevtmgt_Name: DevKit.Controls.String;
			/** Specify the number of invitations to be sent for each available slot. This value is used by the waitlist function. */
			msevtmgt_numberofinvitations: DevKit.Controls.Integer;
			msevtmgt_PresentationManagerUrl: DevKit.Controls.String;
			msevtmgt_PrimaryGoal: DevKit.Controls.OptionSet;
			msevtmgt_producer: DevKit.Controls.Lookup;
			msevtmgt_publiceventurl: DevKit.Controls.String;
			msevtmgt_publiceventurl1: DevKit.Controls.String;
			msevtmgt_qna: DevKit.Controls.Boolean;
			msevtmgt_readableeventid: DevKit.Controls.String;
			msevtmgt_readableeventid1: DevKit.Controls.String;
			msevtmgt_recordingforattendees: DevKit.Controls.Boolean;
			msevtmgt_recordingforproducersandspeakers: DevKit.Controls.Boolean;
			msevtmgt_recoveryitems: DevKit.Controls.String;
			msevtmgt_RecurrencePattern: DevKit.Controls.String;
			msevtmgt_recurrenteventstatus: DevKit.Controls.Integer;
			/** Number of registrations for this event */
			msevtmgt_RegistrationCount: DevKit.Controls.Integer;
			msevtmgt_RevenueFromSponsorship: DevKit.Controls.Money;
			msevtmgt_room: DevKit.Controls.Lookup;
			msevtmgt_setregistrationsenddate: DevKit.Controls.Boolean;
			/** Show the automatic registration check box */
			msevtmgt_showautomaticregistrationcheckbox: DevKit.Controls.Boolean;
			msevtmgt_Stopwebsiteregistrationson: DevKit.Controls.DateTime;
			msevtmgt_streamingenabled: DevKit.Controls.Boolean;
			msevtmgt_streamingenabled1: DevKit.Controls.Boolean;
			/** A list of streaming providers */
			msevtmgt_streamingprovider: DevKit.Controls.OptionSet;
			/** User that owns the streamed event. */
			msevtmgt_streamowner: DevKit.Controls.Lookup;
			msevtmgt_TargetRevenue: DevKit.Controls.Money;
			msevtmgt_teamsinvitationhtml: DevKit.Controls.String;
			msevtmgt_TotalCostOfEventsActivities: DevKit.Controls.Money;
			msevtmgt_TotalCostOfExternalMembers: DevKit.Controls.Money;
			msevtmgt_TotalRegistrationFee: DevKit.Controls.Money;
			msevtmgt_TotalRevenueFromTheEvent: DevKit.Controls.Money;
			msevtmgt_WaitlistthisEvent: DevKit.Controls.OptionSet;
			/** Webinar configuration */
			msevtmgt_WebinarConfigurationId: DevKit.Controls.Lookup;
			msevtmgt_WebinarType: DevKit.Controls.Lookup;
			/** The URL of the webinar. This might belong to an external webinar provider. */
			msevtmgt_webinarURL: DevKit.Controls.String;
			/** Message that will be displayed on the event page if user tries to register after event registrations are closed. */
			msevtmgt_Websitemessage: DevKit.Controls.String;
			msevtmgt_websitepreference: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier of the currency associated with the entity */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			bpf_msevtmgt_event_msevtmgt_bpf_9623d46752ae497989f62ac0d11dad99: DevKit.Controls.NavigationItem,
			msdyncrm_msevtmgt_event_msdyncrm_deprecatedeventactivity_eventid: DevKit.Controls.NavigationItem,
			msdyncrm_msevtmgt_event_msdyncrm_formpage: DevKit.Controls.NavigationItem,
			msdynmkt_msevtmgt_event_team_associatedevent: DevKit.Controls.NavigationItem,
			msevtmgt_event_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msevtmgt_event_adx_portalcomments: DevKit.Controls.NavigationItem,
			msevtmgt_event_Appointments: DevKit.Controls.NavigationItem,
			msevtmgt_Event_AttendeePass: DevKit.Controls.NavigationItem,
			msevtmgt_event_Emails: DevKit.Controls.NavigationItem,
			msevtmgt_event_eventcustomregistrationfield: DevKit.Controls.NavigationItem,
			msevtmgt_Event_EventRegistration: DevKit.Controls.NavigationItem,
			msevtmgt_event_lead_originatingeventid: DevKit.Controls.NavigationItem,
			msevtmgt_event_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msevtmgt_event_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msevtmgt_event_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msevtmgt_event_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msevtmgt_event_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msevtmgt_event_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msevtmgt_event_msevtmgt_checkin_Event: DevKit.Controls.NavigationItem,
			msevtmgt_event_msevtmgt_pass_Event: DevKit.Controls.NavigationItem,
			msevtmgt_event_msevtmgt_roomreservation: DevKit.Controls.NavigationItem,
			msevtmgt_event_msevtmgt_session_Event: DevKit.Controls.NavigationItem,
			msevtmgt_event_msevtmgt_sessionregistration_Event: DevKit.Controls.NavigationItem,
			msevtmgt_event_msevtmgt_speakerengagement: DevKit.Controls.NavigationItem,
			msevtmgt_Event_msevtmgt_Sponsorship: DevKit.Controls.NavigationItem,
			msevtmgt_event_msfp_alerts: DevKit.Controls.NavigationItem,
			msevtmgt_event_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msevtmgt_event_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msevtmgt_event_PhoneCalls: DevKit.Controls.NavigationItem,
			msevtmgt_event_ServiceAppointments: DevKit.Controls.NavigationItem,
			msevtmgt_Event_SessionTrack: DevKit.Controls.NavigationItem,
			msevtmgt_Event_Speaker: DevKit.Controls.NavigationItem,
			msevtmgt_event_Tasks: DevKit.Controls.NavigationItem,
			msevtmgt_event_waitlistitem: DevKit.Controls.NavigationItem,
			msevtmgt_msevtmgt_event_contact_originatingeventid: DevKit.Controls.NavigationItem,
			msevtmgt_msevtmgt_event_hotelroomallocation_Event: DevKit.Controls.NavigationItem,
			msevtmgt_msevtmgt_event_msevtmgt_eventpurchase: DevKit.Controls.NavigationItem,
			msevtmgt_msevtmgt_event_msevtmgt_eventteamsproperties: DevKit.Controls.NavigationItem
		}
		interface ProcessEventMainBusinessProcessFlow {
			/** Flight reservations booking status */
			msevtmgt_BookedFlightReservations: DevKit.Controls.OptionSet;
			msevtmgt_BookRooms: DevKit.Controls.OptionSet;
			msevtmgt_CateringRequired: DevKit.Controls.OptionSet;
			/** Hotel choices confirmation status */
			msevtmgt_ConfirmedHotelChoices: DevKit.Controls.OptionSet;
			msevtmgt_CreateMarketingCollateral: DevKit.Controls.OptionSet;
			msevtmgt_DefinePackagesandPricing: DevKit.Controls.OptionSet;
			msevtmgt_DefineSessions: DevKit.Controls.OptionSet;
			msevtmgt_DefineTeam: DevKit.Controls.OptionSet;
			msevtmgt_DevelopMarketingPlan: DevKit.Controls.OptionSet;
			msevtmgt_EventEndDate: DevKit.Controls.DateTime;
			msevtmgt_EventStartDate: DevKit.Controls.DateTime;
			msevtmgt_EventTimeZone: DevKit.Controls.Integer;
			msevtmgt_ExpectedOutcome: DevKit.Controls.String;
			msevtmgt_FollowUpOnLeads: DevKit.Controls.OptionSet;
			/** Indicates whether guest logistics are required */
			msevtmgt_GuestLogistics: DevKit.Controls.OptionSet;
			msevtmgt_IdentifySpeakers: DevKit.Controls.OptionSet;
			msevtmgt_IdentifySponsors: DevKit.Controls.OptionSet;
			msevtmgt_MakePaymentsDue: DevKit.Controls.OptionSet;
			/** The name of the custom entity */
			msevtmgt_Name: DevKit.Controls.String;
			msevtmgt_NotifyAuthoritiesOfEvent: DevKit.Controls.OptionSet;
			msevtmgt_PlanRegistration: DevKit.Controls.OptionSet;
			msevtmgt_PrimaryGoal: DevKit.Controls.OptionSet;
			msevtmgt_PrimaryVenue: DevKit.Controls.Lookup;
			msevtmgt_RequestSponsorship: DevKit.Controls.OptionSet;
			/** Airport pickups scheduling status */
			msevtmgt_ScheduleAirportPickups: DevKit.Controls.OptionSet;
			msevtmgt_ScheduleSessions: DevKit.Controls.OptionSet;
			/** Event invitation sending status */
			msevtmgt_SendEventInvitation: DevKit.Controls.OptionSet;
			msevtmgt_SendMarketingMaterial: DevKit.Controls.OptionSet;
			msevtmgt_SendPreEventReminders: DevKit.Controls.OptionSet;
			msevtmgt_SendThankYouEmails: DevKit.Controls.OptionSet;
			msevtmgt_TeamDebriefing: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
			EventMainBusinessProcessFlow: ProcessEventMainBusinessProcessFlow;
		}
		interface Grid {
			CustomRegistrationFieldsSubGrid: DevKit.Controls.Grid;
			EventCheckins: DevKit.Controls.Grid;
			EventSponsoships: DevKit.Controls.Grid;
			External_Tracks_By_Publish: DevKit.Controls.Grid;
			HotelRoomAllocations: DevKit.Controls.Grid;
			msevtmgt_records_by_industry: DevKit.Controls.Grid;
			msevtmgt_records_by_role: DevKit.Controls.Grid;
			msevtmgt_registration_by_role: DevKit.Controls.Grid;
			msevtmgt_registrations_by_insustry: DevKit.Controls.Grid;
			Passes: DevKit.Controls.Grid;
			RecurrentEventsInSeriesGrid: DevKit.Controls.Grid;
			Registration: DevKit.Controls.Grid;
			RegistrationResponses: DevKit.Controls.Grid;
			RoomReservationsGrid: DevKit.Controls.Grid;
			Session_Tracks_By_Track_Type: DevKit.Controls.Grid;
			Sessions: DevKit.Controls.Grid;
			Sessions_By_Audience_Type: DevKit.Controls.Grid;
			Sessions_By_Industry_Status: DevKit.Controls.Grid;
			Sessions_by_Session_Type: DevKit.Controls.Grid;
			SessionsCalendarGrid: DevKit.Controls.Grid;
			SessionTracks: DevKit.Controls.Grid;
			Speakers: DevKit.Controls.Grid;
			TeamMembers: DevKit.Controls.Grid;
			Waitlist: DevKit.Controls.Grid;
		}
	}
	class FormEvent extends DevKit.IForm {
		/**
		* Event [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Event */
		Body: DevKit.FormEvent.Body;
		/** The Header section of form Event */
		Header: DevKit.FormEvent.Header;
		/** The Navigation of form Event */
		Navigation: DevKit.FormEvent.Navigation;
		/** The Process of form Event */
		Process: DevKit.FormEvent.Process;
		/** The Grid of form Event */
		Grid: DevKit.FormEvent.Grid;
		/** The SidePanes of form Event */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormEvent_quick_create {
		interface tab_GeneralTab_Sections {
			GeneralTab_column_1_section_1: DevKit.Controls.Section;
			OrganizeTab_section_location: DevKit.Controls.Section;
			OrganizeTab_section_webinarsetup: DevKit.Controls.Section;
			TeamsIntegrationSection: DevKit.Controls.Section;
		}
		interface tab_GeneralTab extends DevKit.Controls.ITab {
			Section: tab_GeneralTab_Sections;
		}
		interface Tabs {
			GeneralTab: tab_GeneralTab;
		}
		interface Body {
			Tab: Tabs;
			msevtmgt_building: DevKit.Controls.Lookup;
			msevtmgt_EventEndDate: DevKit.Controls.DateTime;
			msevtmgt_EventFormat: DevKit.Controls.OptionSet;
			msevtmgt_EventStartDate: DevKit.Controls.DateTime;
			msevtmgt_EventTimeZone: DevKit.Controls.Integer;
			/** The language of the webinar */
			msevtmgt_Language: DevKit.Controls.OptionSet;
			msevtmgt_layout: DevKit.Controls.Lookup;
			msevtmgt_MaximumEventCapacity: DevKit.Controls.Integer;
			/** The name of the custom entity */
			msevtmgt_Name: DevKit.Controls.String;
			msevtmgt_recordingforproducersandspeakers: DevKit.Controls.Boolean;
			msevtmgt_room: DevKit.Controls.Lookup;
			/** Event creation origin */
			msevtmgt_sourcesystem: DevKit.Controls.OptionSet;
			msevtmgt_streamingenabled: DevKit.Controls.Boolean;
			msevtmgt_streamingenabled1: DevKit.Controls.Boolean;
			/** A list of streaming providers */
			msevtmgt_streamingprovider: DevKit.Controls.OptionSet;
			/** Webinar configuration */
			msevtmgt_WebinarConfigurationId: DevKit.Controls.Lookup;
			msevtmgt_WebinarType: DevKit.Controls.Lookup;
		}
	}
	class FormEvent_quick_create extends DevKit.IForm {
		/**
		* Event quick create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Event_quick_create */
		Body: DevKit.FormEvent_quick_create.Body;
	}
	class msevtmgt_EventApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_EventApi
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
		/** Determines whether an event URL is specified */
		readonly msdyncrm_EventURLspecified: boolean;
		/** Unique identifier for the marketing form associated with the event. */
		msdyncrm_marketingformid: string;
		/** The number of sessions in this event */
		msdyncrm_SessionsCount: number;
		/** Last Updated time of rollup field Session count. */
		readonly msdyncrm_SessionsCount_Date_UtcDateAndTime: Date;
		/** State of rollup field Session count. */
		readonly msdyncrm_SessionsCount_State: number;
		msdyncrm_usemarketingform: boolean;
		msdynmkt_bannerimageid: string;
		/** Virtual Event Completion Date. */
		msdynmkt_completiondate_TimezoneDateAndTime: Date;
		msdynmkt_linkedvirtualeventid: string;
		msdynmkt_logoimageid: string;
		msevtmgt_allowanonymousregistrations: boolean;
		msevtmgt_allowattendeestounmute: boolean;
		msevtmgt_allowcameraforattendees: boolean;
		msevtmgt_allowcustomagenda: boolean;
		msevtmgt_allowexternalpresenters: boolean;
		msevtmgt_allowmeetingchat: OptionSet.msevtmgt_Event.msevtmgt_allowmeetingchat;
		msevtmgt_allowpstnsserstobypasslobby: boolean;
		msevtmgt_allowteamsmeetingreactions: boolean;
		msevtmgt_attendeeengagementreport: boolean;
		msevtmgt_attendeeurl: string;
		msevtmgt_autoadmittedusers: OptionSet.msevtmgt_Event.msevtmgt_autoadmittedusers;
		msevtmgt_autorecordingenabled: boolean;
		/** For free events, we will automatically register waitlisted contacts by default as soon as additional capacity becomes available */
		msevtmgt_autoregisterwaitlistitems: boolean;
		msevtmgt_baserecurrenteventid: string;
		/** Flight reservations booking status */
		msevtmgt_BookedFlightReservations: OptionSet.msevtmgt_Event.msevtmgt_BookedFlightReservations;
		msevtmgt_BookRooms: OptionSet.msevtmgt_Event.msevtmgt_BookRooms;
		msevtmgt_BudgetAllocated: number;
		/** Value of the budget allocated (in the base currency) */
		readonly msevtmgt_budgetallocated_Base: number;
		msevtmgt_building: string;
		/** Rich text calendar content for events. */
		msevtmgt_calendarcontent: string;
		/** Plain text calendar content for events. */
		msevtmgt_calendarcontent_plaintext: string;
		msevtmgt_calendarevent: string;
		msevtmgt_CateringRequired: OptionSet.msevtmgt_Event.msevtmgt_CateringRequired;
		msevtmgt_changemeetingoptions: boolean;
		/** Check-in count */
		msevtmgt_CheckInCount: number;
		/** Hotel choices confirmation status */
		msevtmgt_ConfirmedHotelChoices: OptionSet.msevtmgt_Event.msevtmgt_ConfirmedHotelChoices;
		readonly msevtmgt_CountdownInDays: number;
		/** Indicates whether a lead should be created each time somebody registers for this event */
		msevtmgt_createleadsforeventregistrations: boolean;
		msevtmgt_CreateMarketingCollateral: OptionSet.msevtmgt_Event.msevtmgt_CreateMarketingCollateral;
		/** Available event creation sources */
		msevtmgt_creationsource: OptionSet.msevtmgt_Event.msevtmgt_creationsource;
		msevtmgt_customeventurl: boolean;
		msevtmgt_DefinePackagesandPricing: OptionSet.msevtmgt_Event.msevtmgt_DefinePackagesandPricing;
		msevtmgt_DefineSessions: OptionSet.msevtmgt_Event.msevtmgt_DefineSessions;
		msevtmgt_DefineTeam: OptionSet.msevtmgt_Event.msevtmgt_DefineTeam;
		msevtmgt_Description: string;
		msevtmgt_descriptorsyncstatus: OptionSet.msevtmgt_Event.msevtmgt_descriptorsyncstatus;
		msevtmgt_DevelopMarketingPlan: OptionSet.msevtmgt_Event.msevtmgt_DevelopMarketingPlan;
		msevtmgt_EarlyBirdCutOffDate_UtcDateAndTime: Date;
		msevtmgt_embedregistrationform: boolean;
		msevtmgt_enablecaptcha: boolean;
		msevtmgt_Enablemultiattendeeregistration: boolean;
		msevtmgt_entryexitannouncementsenabled: boolean;
		msevtmgt_EventDebriefing: OptionSet.msevtmgt_Event.msevtmgt_EventDebriefing;
		msevtmgt_EventEndDate_TimezoneDateAndTime: Date;
		msevtmgt_EventFormat: OptionSet.msevtmgt_Event.msevtmgt_EventFormat;
		/** Unique identifier for entity instances */
		msevtmgt_EventId: string;
		msevtmgt_eventimage: string;
		msevtmgt_EventStartDate_TimezoneDateAndTime: Date;
		msevtmgt_EventTimeZone: number;
		msevtmgt_EventTimeZoneName: string;
		msevtmgt_EventType: OptionSet.msevtmgt_Event.msevtmgt_EventType;
		msevtmgt_EventVenueCost: number;
		/** Value of the event venue cost (in the base currency) */
		readonly msevtmgt_eventvenuecost_Base: number;
		msevtmgt_ExpectedOutcome: string;
		msevtmgt_FollowUpOnLeads: OptionSet.msevtmgt_Event.msevtmgt_FollowUpOnLeads;
		readonly msevtmgt_formpagejavascriptcode: string;
		/** Indicates whether guest logistics are required */
		msevtmgt_GuestLogistics: OptionSet.msevtmgt_Event.msevtmgt_GuestLogistics;
		msevtmgt_IdentifySpeakers: OptionSet.msevtmgt_Event.msevtmgt_IdentifySpeakers;
		msevtmgt_IdentifySponsors: OptionSet.msevtmgt_Event.msevtmgt_IdentifySponsors;
		/** Field specifying if a streamed event is out of synchronization with it's provider. */
		msevtmgt_isoutofsync: boolean;
		msevtmgt_IsRecurringEvent: boolean;
		msevtmgt_istemplate: OptionSet.msevtmgt_Event.msevtmgt_istemplate;
		/** The language of the webinar */
		msevtmgt_Language: OptionSet.msevtmgt_Event.msevtmgt_Language;
		msevtmgt_lastteamssyncdate_UtcDateAndTime: Date;
		msevtmgt_layout: string;
		msevtmgt_MakePaymentsDue: OptionSet.msevtmgt_Event.msevtmgt_MakePaymentsDue;
		msevtmgt_ManageRegistrationCount: OptionSet.msevtmgt_Event.msevtmgt_ManageRegistrationCount;
		/** Unique Identifier for the marketing form associated with the event */
		msevtmgt_marketingformid: string;
		msevtmgt_MaximumEventCapacity: number;
		msevtmgt_MaxNumberOfRegistrations: number;
		msevtmgt_MiscellaneousCosts: number;
		/** Value of the miscellaneous costs (in the base currency) */
		readonly msevtmgt_miscellaneouscosts_Base: number;
		/** The name of the custom entity */
		msevtmgt_Name: string;
		msevtmgt_NotifyAuthoritiesOfEvent: OptionSet.msevtmgt_Event.msevtmgt_NotifyAuthoritiesOfEvent;
		/** Specify the number of invitations to be sent for each available slot. This value is used by the waitlist function. */
		msevtmgt_numberofinvitations: number;
		msevtmgt_PlanRegistration: OptionSet.msevtmgt_Event.msevtmgt_PlanRegistration;
		/** User local aware event end date field used for Real-time Journeys portal integration only. */
		msevtmgt_portalspecificeventenddate_UtcDateAndTime: Date;
		/** User local aware event start date field used for Real-time Journeys portal integration only. */
		msevtmgt_portalspecificeventstartdate_UtcDateAndTime: Date;
		msevtmgt_PresentationManagerUrl: string;
		msevtmgt_previousnumberoffreeslots: number;
		msevtmgt_PrimaryGoal: OptionSet.msevtmgt_Event.msevtmgt_PrimaryGoal;
		msevtmgt_PrimaryVenue: string;
		msevtmgt_producer: string;
		msevtmgt_publiceventurl: string;
		msevtmgt_PublishStatus: OptionSet.msevtmgt_Event.msevtmgt_PublishStatus;
		msevtmgt_qna: boolean;
		msevtmgt_readableeventid: string;
		msevtmgt_recordingforattendees: boolean;
		msevtmgt_recordingforproducersandspeakers: boolean;
		msevtmgt_recoveryitems: string;
		msevtmgt_RecurrencePattern: string;
		msevtmgt_recurrenteventstatus: number;
		/** Number of registrations for this event */
		msevtmgt_RegistrationCount: number;
		msevtmgt_registrationcounterlock: string;
		msevtmgt_RegistrationsTarget: number;
		msevtmgt_RequestSponsorship: OptionSet.msevtmgt_Event.msevtmgt_RequestSponsorship;
		msevtmgt_RevenueFromSponsorship: number;
		/** Value of the revenue from sponsorship (in the base currency) */
		readonly msevtmgt_revenuefromsponsorship_Base: number;
		msevtmgt_room: string;
		/** Airport pickups scheduling status */
		msevtmgt_ScheduleAirportPickups: OptionSet.msevtmgt_Event.msevtmgt_ScheduleAirportPickups;
		msevtmgt_ScheduleSessions: OptionSet.msevtmgt_Event.msevtmgt_ScheduleSessions;
		msevtmgt_SelectSpeakers: OptionSet.msevtmgt_Event.msevtmgt_SelectSpeakers;
		msevtmgt_SelectVendors: OptionSet.msevtmgt_Event.msevtmgt_SelectVendors;
		/** Event invitation sending status */
		msevtmgt_SendEventInvitation: OptionSet.msevtmgt_Event.msevtmgt_SendEventInvitation;
		msevtmgt_SendMarketingMaterial: OptionSet.msevtmgt_Event.msevtmgt_SendMarketingMaterial;
		msevtmgt_SendPreEventReminders: OptionSet.msevtmgt_Event.msevtmgt_SendPreEventReminders;
		msevtmgt_SendThankYouEmails: OptionSet.msevtmgt_Event.msevtmgt_SendThankYouEmails;
		msevtmgt_setregistrationsenddate: boolean;
		/** Show the automatic registration check box */
		msevtmgt_showautomaticregistrationcheckbox: boolean;
		msevtmgt_showwaitlist: boolean;
		/** Event creation origin */
		msevtmgt_sourcesystem: OptionSet.msevtmgt_Event.msevtmgt_sourcesystem;
		msevtmgt_Stopwebsiteregistrationson_TimezoneDateAndTime: Date;
		msevtmgt_streamingenabled: boolean;
		/** A list of streaming providers */
		msevtmgt_streamingprovider: OptionSet.msevtmgt_Event.msevtmgt_streamingprovider;
		/** User that owns the streamed event. */
		msevtmgt_streamowner: string;
		msevtmgt_TargetRevenue: number;
		/** Value of the target revenue (in the base currency) */
		readonly msevtmgt_targetrevenue_Base: number;
		msevtmgt_TeamDebriefing: OptionSet.msevtmgt_Event.msevtmgt_TeamDebriefing;
		msevtmgt_teamsevent: string;
		msevtmgt_teamsinvitationhtml: string;
		msevtmgt_TotalCostOfEventsActivities: number;
		/** Value of the total cost of events activities (in the base currency) */
		readonly msevtmgt_totalcostofeventsactivities_Base: number;
		msevtmgt_TotalCostOfExternalMembers: number;
		/** Value of the total cost of external members (in the base currency) */
		readonly msevtmgt_totalcostofexternalmembers_Base: number;
		msevtmgt_TotalRegistrationFee: number;
		/** Value of the total registration fee (in the base currency) */
		readonly msevtmgt_totalregistrationfee_Base: number;
		msevtmgt_TotalRevenueFromTheEvent: number;
		/** Value of the total revenue from the event (in the base currency) */
		readonly msevtmgt_totalrevenuefromtheevent_Base: number;
		/** Unique identifier of the currency associated with the entity */
		msevtmgt_TransactionCurrencyId: string;
		/** Waitlist starting point */
		msevtmgt_WaitlistStartingPoint: number;
		msevtmgt_WaitlistthisEvent: OptionSet.msevtmgt_Event.msevtmgt_WaitlistthisEvent;
		/** Webinar configuration */
		msevtmgt_WebinarConfigurationId: string;
		/** Webinar ID of the event */
		msevtmgt_WebinarID: string;
		/** Indicates whether the webinar creation notification has been seen */
		msevtmgt_webinarnotificationseen: boolean;
		msevtmgt_webinaroperation: string;
		msevtmgt_webinarstatus: string;
		msevtmgt_webinarstatusreason: string;
		msevtmgt_WebinarType: string;
		/** The URL of the webinar. This might belong to an external webinar provider. */
		msevtmgt_webinarURL: string;
		/** Message that will be displayed on the event page if user tries to register after event registrations are closed. */
		msevtmgt_Websitemessage: string;
		msevtmgt_websitepreference: OptionSet.msevtmgt_Event.msevtmgt_websitepreference;
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
		/** Status of the event */
		statecode: OptionSet.msevtmgt_Event.statecode;
		/** Reason for the status of the event */
		statuscode: OptionSet.msevtmgt_Event.statuscode;
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
			/** Determines whether an event URL is specified */
			readonly msdyncrm_EventURLspecified: string;
			/** Unique identifier for the marketing form associated with the event. */
			readonly msdyncrm_marketingformid: string;
			/** The number of sessions in this event */
			readonly msdyncrm_SessionsCount: string;
			/** Last Updated time of rollup field Session count. */
			readonly msdyncrm_SessionsCount_Date_UtcDateAndTime: string;
			/** State of rollup field Session count. */
			readonly msdyncrm_SessionsCount_State: string;
			readonly msdyncrm_usemarketingform: string;
			readonly msdynmkt_bannerimageid: string;
			/** Virtual Event Completion Date. */
			readonly msdynmkt_completiondate_TimezoneDateAndTime: string;
			readonly msdynmkt_linkedvirtualeventid: string;
			readonly msdynmkt_logoimageid: string;
			readonly msevtmgt_allowanonymousregistrations: string;
			readonly msevtmgt_allowattendeestounmute: string;
			readonly msevtmgt_allowcameraforattendees: string;
			readonly msevtmgt_allowcustomagenda: string;
			readonly msevtmgt_allowexternalpresenters: string;
			readonly msevtmgt_allowmeetingchat: string;
			readonly msevtmgt_allowpstnsserstobypasslobby: string;
			readonly msevtmgt_allowteamsmeetingreactions: string;
			readonly msevtmgt_attendeeengagementreport: string;
			readonly msevtmgt_attendeeurl: string;
			readonly msevtmgt_autoadmittedusers: string;
			readonly msevtmgt_autorecordingenabled: string;
			/** For free events, we will automatically register waitlisted contacts by default as soon as additional capacity becomes available */
			readonly msevtmgt_autoregisterwaitlistitems: string;
			readonly msevtmgt_baserecurrenteventid: string;
			/** Flight reservations booking status */
			readonly msevtmgt_BookedFlightReservations: string;
			readonly msevtmgt_BookRooms: string;
			readonly msevtmgt_BudgetAllocated: string;
			/** Value of the budget allocated (in the base currency) */
			readonly msevtmgt_budgetallocated_Base: string;
			readonly msevtmgt_building: string;
			/** Rich text calendar content for events. */
			readonly msevtmgt_calendarcontent: string;
			/** Plain text calendar content for events. */
			readonly msevtmgt_calendarcontent_plaintext: string;
			readonly msevtmgt_calendarevent: string;
			readonly msevtmgt_CateringRequired: string;
			readonly msevtmgt_changemeetingoptions: string;
			/** Check-in count */
			readonly msevtmgt_CheckInCount: string;
			/** Hotel choices confirmation status */
			readonly msevtmgt_ConfirmedHotelChoices: string;
			readonly msevtmgt_CountdownInDays: string;
			/** Indicates whether a lead should be created each time somebody registers for this event */
			readonly msevtmgt_createleadsforeventregistrations: string;
			readonly msevtmgt_CreateMarketingCollateral: string;
			/** Available event creation sources */
			readonly msevtmgt_creationsource: string;
			readonly msevtmgt_customeventurl: string;
			readonly msevtmgt_DefinePackagesandPricing: string;
			readonly msevtmgt_DefineSessions: string;
			readonly msevtmgt_DefineTeam: string;
			readonly msevtmgt_Description: string;
			readonly msevtmgt_descriptorsyncstatus: string;
			readonly msevtmgt_DevelopMarketingPlan: string;
			readonly msevtmgt_EarlyBirdCutOffDate_UtcDateAndTime: string;
			readonly msevtmgt_embedregistrationform: string;
			readonly msevtmgt_enablecaptcha: string;
			readonly msevtmgt_Enablemultiattendeeregistration: string;
			readonly msevtmgt_entryexitannouncementsenabled: string;
			readonly msevtmgt_EventDebriefing: string;
			readonly msevtmgt_EventEndDate_TimezoneDateAndTime: string;
			readonly msevtmgt_EventFormat: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_EventId: string;
			readonly msevtmgt_eventimage: string;
			readonly msevtmgt_EventStartDate_TimezoneDateAndTime: string;
			readonly msevtmgt_EventTimeZone: string;
			readonly msevtmgt_EventTimeZoneName: string;
			readonly msevtmgt_EventType: string;
			readonly msevtmgt_EventVenueCost: string;
			/** Value of the event venue cost (in the base currency) */
			readonly msevtmgt_eventvenuecost_Base: string;
			readonly msevtmgt_ExpectedOutcome: string;
			readonly msevtmgt_FollowUpOnLeads: string;
			readonly msevtmgt_formpagejavascriptcode: string;
			/** Indicates whether guest logistics are required */
			readonly msevtmgt_GuestLogistics: string;
			readonly msevtmgt_IdentifySpeakers: string;
			readonly msevtmgt_IdentifySponsors: string;
			/** Field specifying if a streamed event is out of synchronization with it's provider. */
			readonly msevtmgt_isoutofsync: string;
			readonly msevtmgt_IsRecurringEvent: string;
			readonly msevtmgt_istemplate: string;
			/** The language of the webinar */
			readonly msevtmgt_Language: string;
			readonly msevtmgt_lastteamssyncdate_UtcDateAndTime: string;
			readonly msevtmgt_layout: string;
			readonly msevtmgt_MakePaymentsDue: string;
			readonly msevtmgt_ManageRegistrationCount: string;
			/** Unique Identifier for the marketing form associated with the event */
			readonly msevtmgt_marketingformid: string;
			readonly msevtmgt_MaximumEventCapacity: string;
			readonly msevtmgt_MaxNumberOfRegistrations: string;
			readonly msevtmgt_MiscellaneousCosts: string;
			/** Value of the miscellaneous costs (in the base currency) */
			readonly msevtmgt_miscellaneouscosts_Base: string;
			/** The name of the custom entity */
			readonly msevtmgt_Name: string;
			readonly msevtmgt_NotifyAuthoritiesOfEvent: string;
			/** Specify the number of invitations to be sent for each available slot. This value is used by the waitlist function. */
			readonly msevtmgt_numberofinvitations: string;
			readonly msevtmgt_PlanRegistration: string;
			/** User local aware event end date field used for Real-time Journeys portal integration only. */
			readonly msevtmgt_portalspecificeventenddate_UtcDateAndTime: string;
			/** User local aware event start date field used for Real-time Journeys portal integration only. */
			readonly msevtmgt_portalspecificeventstartdate_UtcDateAndTime: string;
			readonly msevtmgt_PresentationManagerUrl: string;
			readonly msevtmgt_previousnumberoffreeslots: string;
			readonly msevtmgt_PrimaryGoal: string;
			readonly msevtmgt_PrimaryVenue: string;
			readonly msevtmgt_producer: string;
			readonly msevtmgt_publiceventurl: string;
			readonly msevtmgt_PublishStatus: string;
			readonly msevtmgt_qna: string;
			readonly msevtmgt_readableeventid: string;
			readonly msevtmgt_recordingforattendees: string;
			readonly msevtmgt_recordingforproducersandspeakers: string;
			readonly msevtmgt_recoveryitems: string;
			readonly msevtmgt_RecurrencePattern: string;
			readonly msevtmgt_recurrenteventstatus: string;
			/** Number of registrations for this event */
			readonly msevtmgt_RegistrationCount: string;
			readonly msevtmgt_registrationcounterlock: string;
			readonly msevtmgt_RegistrationsTarget: string;
			readonly msevtmgt_RequestSponsorship: string;
			readonly msevtmgt_RevenueFromSponsorship: string;
			/** Value of the revenue from sponsorship (in the base currency) */
			readonly msevtmgt_revenuefromsponsorship_Base: string;
			readonly msevtmgt_room: string;
			/** Airport pickups scheduling status */
			readonly msevtmgt_ScheduleAirportPickups: string;
			readonly msevtmgt_ScheduleSessions: string;
			readonly msevtmgt_SelectSpeakers: string;
			readonly msevtmgt_SelectVendors: string;
			/** Event invitation sending status */
			readonly msevtmgt_SendEventInvitation: string;
			readonly msevtmgt_SendMarketingMaterial: string;
			readonly msevtmgt_SendPreEventReminders: string;
			readonly msevtmgt_SendThankYouEmails: string;
			readonly msevtmgt_setregistrationsenddate: string;
			/** Show the automatic registration check box */
			readonly msevtmgt_showautomaticregistrationcheckbox: string;
			readonly msevtmgt_showwaitlist: string;
			/** Event creation origin */
			readonly msevtmgt_sourcesystem: string;
			readonly msevtmgt_Stopwebsiteregistrationson_TimezoneDateAndTime: string;
			readonly msevtmgt_streamingenabled: string;
			/** A list of streaming providers */
			readonly msevtmgt_streamingprovider: string;
			/** User that owns the streamed event. */
			readonly msevtmgt_streamowner: string;
			readonly msevtmgt_TargetRevenue: string;
			/** Value of the target revenue (in the base currency) */
			readonly msevtmgt_targetrevenue_Base: string;
			readonly msevtmgt_TeamDebriefing: string;
			readonly msevtmgt_teamsevent: string;
			readonly msevtmgt_teamsinvitationhtml: string;
			readonly msevtmgt_TotalCostOfEventsActivities: string;
			/** Value of the total cost of events activities (in the base currency) */
			readonly msevtmgt_totalcostofeventsactivities_Base: string;
			readonly msevtmgt_TotalCostOfExternalMembers: string;
			/** Value of the total cost of external members (in the base currency) */
			readonly msevtmgt_totalcostofexternalmembers_Base: string;
			readonly msevtmgt_TotalRegistrationFee: string;
			/** Value of the total registration fee (in the base currency) */
			readonly msevtmgt_totalregistrationfee_Base: string;
			readonly msevtmgt_TotalRevenueFromTheEvent: string;
			/** Value of the total revenue from the event (in the base currency) */
			readonly msevtmgt_totalrevenuefromtheevent_Base: string;
			/** Unique identifier of the currency associated with the entity */
			readonly msevtmgt_TransactionCurrencyId: string;
			/** Waitlist starting point */
			readonly msevtmgt_WaitlistStartingPoint: string;
			readonly msevtmgt_WaitlistthisEvent: string;
			/** Webinar configuration */
			readonly msevtmgt_WebinarConfigurationId: string;
			/** Webinar ID of the event */
			readonly msevtmgt_WebinarID: string;
			/** Indicates whether the webinar creation notification has been seen */
			readonly msevtmgt_webinarnotificationseen: string;
			readonly msevtmgt_webinaroperation: string;
			readonly msevtmgt_webinarstatus: string;
			readonly msevtmgt_webinarstatusreason: string;
			readonly msevtmgt_WebinarType: string;
			/** The URL of the webinar. This might belong to an external webinar provider. */
			readonly msevtmgt_webinarURL: string;
			/** Message that will be displayed on the event page if user tries to register after event registrations are closed. */
			readonly msevtmgt_Websitemessage: string;
			readonly msevtmgt_websitepreference: string;
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
			/** Status of the event */
			readonly statecode: string;
			/** Reason for the status of the event */
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
	namespace msevtmgt_Event {
		enum msevtmgt_allowmeetingchat {
			/** 100000001 */
			Disabled,
			/** 100000000 */
			Enabled,
			/** 100000002 */
			In_meeting_only
		}
		enum msevtmgt_autoadmittedusers {
			/** 100000003 */
			Everyone,
			/** 100000005 */
			Only_me,
			/** 100000004 */
			People_I_invite,
			/** 100000001 */
			People_in_my_organization_and_guests,
			/** 100000002 */
			People_in_my_organization_trusted_organizations_and_guests
		}
		enum msevtmgt_BookedFlightReservations {
			/** 100000003 */
			Completed,
			/** 100000002 */
			In_progress,
			/** 100000004 */
			Not_applicable,
			/** 100000001 */
			Not_started
		}
		enum msevtmgt_BookRooms {
			/** 100000003 */
			Completed,
			/** 100000002 */
			In_progress,
			/** 100000004 */
			Not_applicable,
			/** 100000001 */
			Not_started
		}
		enum msevtmgt_CateringRequired {
			/** 100000001 */
			No,
			/** 100000002 */
			Yes
		}
		enum msevtmgt_ConfirmedHotelChoices {
			/** 100000003 */
			Completed,
			/** 100000002 */
			In_progress,
			/** 100000004 */
			Not_applicable,
			/** 100000001 */
			Not_started
		}
		enum msevtmgt_CreateMarketingCollateral {
			/** 100000003 */
			Completed,
			/** 100000002 */
			In_progress,
			/** 100000004 */
			Not_applicable,
			/** 100000001 */
			Not_started
		}
		enum msevtmgt_creationsource {
			/** 100000001 */
			Dynamics,
			/** 100000002 */
			Microsoft_Teams
		}
		enum msevtmgt_DefinePackagesandPricing {
			/** 100000003 */
			Completed,
			/** 100000002 */
			In_progress,
			/** 100000004 */
			Not_applicable,
			/** 100000001 */
			Not_started
		}
		enum msevtmgt_DefineSessions {
			/** 100000003 */
			Completed,
			/** 100000002 */
			In_progress,
			/** 100000004 */
			Not_applicable,
			/** 100000001 */
			Not_started
		}
		enum msevtmgt_DefineTeam {
			/** 100000003 */
			Completed,
			/** 100000002 */
			In_progress,
			/** 100000004 */
			Not_applicable,
			/** 100000001 */
			Not_started
		}
		enum msevtmgt_descriptorsyncstatus {
			/** 100000001 */
			Going_live,
			/** 100000002 */
			Going_live_failed,
			/** 100000003 */
			Modifying_capacity,
			/** 100000004 */
			Modifying_capacity_failed,
			/** 100000005 */
			Not_Synced,
			/** 100000000 */
			Synced
		}
		enum msevtmgt_DevelopMarketingPlan {
			/** 100000003 */
			Completed,
			/** 100000002 */
			In_progress,
			/** 100000004 */
			Not_applicable,
			/** 100000001 */
			Not_started
		}
		enum msevtmgt_EventDebriefing {
			/** 100000003 */
			Completed,
			/** 100000002 */
			In_progress,
			/** 100000004 */
			Not_applicable,
			/** 100000001 */
			Not_started
		}
		enum msevtmgt_EventFormat {
			/** 100000003 */
			Hybrid,
			/** 100000001 */
			On_site,
			/** 100000002 */
			Webinar
		}
		enum msevtmgt_EventType {
			/** 100000002 */
			Conference,
			/** 100000003 */
			Demonstration,
			/** 100000001 */
			Executive_briefing,
			/** 100000004 */
			Training,
			/** 100000005 */
			Webcast
		}
		enum msevtmgt_FollowUpOnLeads {
			/** 100000003 */
			Completed,
			/** 100000002 */
			In_progress,
			/** 100000004 */
			Not_applicable,
			/** 100000001 */
			Not_started
		}
		enum msevtmgt_GuestLogistics {
			/** 100000001 */
			No,
			/** 100000002 */
			Yes
		}
		enum msevtmgt_IdentifySpeakers {
			/** 100000003 */
			Completed,
			/** 100000002 */
			In_progress,
			/** 100000004 */
			Not_applicable,
			/** 100000001 */
			Not_started
		}
		enum msevtmgt_IdentifySponsors {
			/** 100000003 */
			Complete,
			/** 100000002 */
			Incomplete,
			/** 100000001 */
			Not_applicable
		}
		enum msevtmgt_istemplate {
			/** 100000002 */
			No,
			/** 100000001 */
			Yes
		}
		enum msevtmgt_Language {
			/** 100000009 */
			Chinese_Simplified,
			/** 100000013 */
			Chinese_Traditional,
			/** 100000006 */
			Dutch,
			/** 100000000 */
			English,
			/** 100000001 */
			French,
			/** 100000002 */
			German,
			/** 100000012 */
			Hebrew,
			/** 100000004 */
			Italian,
			/** 100000010 */
			Japanese,
			/** 100000011 */
			Korean,
			/** 100000008 */
			Portuguese,
			/** 100000005 */
			Russian,
			/** 100000003 */
			Spanish,
			/** 100000007 */
			Turkish
		}
		enum msevtmgt_MakePaymentsDue {
			/** 100000003 */
			Completed,
			/** 100000002 */
			In_progress,
			/** 100000004 */
			Not_applicable,
			/** 100000001 */
			Not_started
		}
		enum msevtmgt_ManageRegistrationCount {
			/** 100000002 */
			No,
			/** 100000001 */
			Yes
		}
		enum msevtmgt_NotifyAuthoritiesOfEvent {
			/** 100000003 */
			Completed,
			/** 100000002 */
			In_progress,
			/** 100000004 */
			Not_applicable,
			/** 100000001 */
			Not_started
		}
		enum msevtmgt_PlanRegistration {
			/** 100000003 */
			Completed,
			/** 100000002 */
			In_progress,
			/** 100000004 */
			Not_applicable,
			/** 100000001 */
			Not_started
		}
		enum msevtmgt_PrimaryGoal {
			/** 100000003 */
			Education,
			/** 100000001 */
			Marketing,
			/** 100000004 */
			Morale,
			/** 100000002 */
			Sales
		}
		enum msevtmgt_PublishStatus {
			/** 100000004 */
			Cancelled,
			/** 100000000 */
			Draft,
			/** 100000005 */
			Going_live,
			/** 100000002 */
			In_progress,
			/** 100000003 */
			Live,
			/** 100000001 */
			Ready_to_go_live
		}
		enum msevtmgt_RequestSponsorship {
			/** 100000003 */
			Completed,
			/** 100000002 */
			In_progress,
			/** 100000004 */
			Not_applicable,
			/** 100000001 */
			Not_started
		}
		enum msevtmgt_ScheduleAirportPickups {
			/** 100000003 */
			Completed,
			/** 100000002 */
			In_progress,
			/** 100000004 */
			Not_applicable,
			/** 100000001 */
			Not_started
		}
		enum msevtmgt_ScheduleSessions {
			/** 100000003 */
			Completed,
			/** 100000002 */
			In_progress,
			/** 100000004 */
			Not_applicable,
			/** 100000001 */
			Not_started
		}
		enum msevtmgt_SelectSpeakers {
			/** 100000003 */
			Completed,
			/** 100000002 */
			In_progress,
			/** 100000004 */
			Not_applicable,
			/** 100000001 */
			Not_started
		}
		enum msevtmgt_SelectVendors {
			/** 100000003 */
			Completed,
			/** 100000002 */
			In_progress,
			/** 100000004 */
			Not_applicable,
			/** 100000001 */
			Not_started
		}
		enum msevtmgt_SendEventInvitation {
			/** 100000003 */
			Completed,
			/** 100000002 */
			In_progress,
			/** 100000004 */
			Not_applicable,
			/** 100000001 */
			Not_started
		}
		enum msevtmgt_SendMarketingMaterial {
			/** 100000003 */
			Completed,
			/** 100000002 */
			In_progress,
			/** 100000004 */
			Not_applicable,
			/** 100000001 */
			Not_started
		}
		enum msevtmgt_SendPreEventReminders {
			/** 100000003 */
			Completed,
			/** 100000002 */
			In_progress,
			/** 100000004 */
			Not_applicable,
			/** 100000001 */
			Not_started
		}
		enum msevtmgt_SendThankYouEmails {
			/** 100000003 */
			Completed,
			/** 100000002 */
			In_progress,
			/** 100000004 */
			Not_applicable,
			/** 100000001 */
			Not_started
		}
		enum msevtmgt_sourcesystem {
			/** 100000001 */
			Outbound_marketing,
			/** 100000002 */
			Real_time_Journeys
		}
		enum msevtmgt_streamingprovider {
			/** 100000003 */
			Other,
			/** 100000001 */
			Teams_Live_Events,
			/** 100000002 */
			Teams_Meetings,
			/** 100000006 */
			Teams_Town_Hall,
			/** 100000005 */
			Teams_Virtual_Events,
			/** 100000004 */
			Teams_Webinars
		}
		enum msevtmgt_TeamDebriefing {
			/** 100000003 */
			Completed,
			/** 100000002 */
			In_progress,
			/** 100000004 */
			Not_applicable,
			/** 100000001 */
			Not_started
		}
		enum msevtmgt_WaitlistthisEvent {
			/** 100000001 */
			No,
			/** 100000002 */
			Yes
		}
		enum msevtmgt_websitepreference {
			/** 192350001 */
			On_a_standalone_registration_page,
			/** 192350002 */
			On_your_own_website,
			/** 192350003 */
			This_event_doesnt_have_a_website
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