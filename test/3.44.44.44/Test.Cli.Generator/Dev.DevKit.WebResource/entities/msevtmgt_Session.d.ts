//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsevtmgt_Session_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Non disclosure agreement */
			msevtmgt_NDA: DevKit.Controls.OptionSet;
			/** Publish status of the session */
			msevtmgt_PublishStatus: DevKit.Controls.OptionSet;
			/** A code for the session */
			msevtmgt_SessionCode: DevKit.Controls.String;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_AdditionalInfoTab_Sections {
			CalendarContentSection: DevKit.Controls.Section;
		}
		interface tab_AgendaTab_Sections {
			AgendaTab_section_1: DevKit.Controls.Section;
			AgendaTab_section_2: DevKit.Controls.Section;
			AgendaTab_section_3: DevKit.Controls.Section;
			SessionTeamMembers: DevKit.Controls.Section;
		}
		interface tab_RegistrationAndAttendanceTab_Sections {
			InteractionsTab_SessionRegistrationCanceledList: DevKit.Controls.Section;
			RegistrationAndAttendanceTab_section_1: DevKit.Controls.Section;
			RegistrationAndAttendanceTab_section_1_2: DevKit.Controls.Section;
			RegistrationAndAttendanceTab_section_2: DevKit.Controls.Section;
			RegistrationAndAttendanceTab_section_3: DevKit.Controls.Section;
			RegistrationAndAttendanceTab_section_4: DevKit.Controls.Section;
			RegistrationAndAttendanceTab_section_5: DevKit.Controls.Section;
			RegistrationAndAttendanceTab_section_6: DevKit.Controls.Section;
			RegistrationAndAttendanceTab_section_waitlist: DevKit.Controls.Section;
		}
		interface tab_RelatedSessionsTab_Sections {
			RelatedSessionsTab_section_1: DevKit.Controls.Section;
			RelatedSessionsTab_section_2: DevKit.Controls.Section;
		}
		interface tab_SummaryTab_Sections {
			Recurrent_Session: DevKit.Controls.Section;
			SummaryTab_section_2: DevKit.Controls.Section;
			SummaryTab_section_3: DevKit.Controls.Section;
			SummaryTab_section_4: DevKit.Controls.Section;
			SummaryTab_section_Schedule: DevKit.Controls.Section;
			SummaryTab_section_venueconstraints: DevKit.Controls.Section;
			TeamsIntegrationSection: DevKit.Controls.Section;
			VenueTab_section_2: DevKit.Controls.Section;
			VenueTab_section_3: DevKit.Controls.Section;
			VenueTab_section_location: DevKit.Controls.Section;
			VenueTab_section_webinarsetup: DevKit.Controls.Section;
		}
		interface tab_AdditionalInfoTab extends DevKit.Controls.ITab {
			Section: tab_AdditionalInfoTab_Sections;
		}
		interface tab_AgendaTab extends DevKit.Controls.ITab {
			Section: tab_AgendaTab_Sections;
		}
		interface tab_RegistrationAndAttendanceTab extends DevKit.Controls.ITab {
			Section: tab_RegistrationAndAttendanceTab_Sections;
		}
		interface tab_RelatedSessionsTab extends DevKit.Controls.ITab {
			Section: tab_RelatedSessionsTab_Sections;
		}
		interface tab_SummaryTab extends DevKit.Controls.ITab {
			Section: tab_SummaryTab_Sections;
		}
		interface Tabs {
			AdditionalInfoTab: tab_AdditionalInfoTab;
			AgendaTab: tab_AgendaTab;
			RegistrationAndAttendanceTab: tab_RegistrationAndAttendanceTab;
			RelatedSessionsTab: tab_RelatedSessionsTab;
			SummaryTab: tab_SummaryTab;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the user who modified the record */
			ModifiedBy: DevKit.Controls.Lookup;
			msevtmgt_allowattendeestounmute: DevKit.Controls.Boolean;
			msevtmgt_allowcameraforattendees: DevKit.Controls.Boolean;
			msevtmgt_allowexternalpresenters: DevKit.Controls.Boolean;
			msevtmgt_allowmeetingchat: DevKit.Controls.OptionSet;
			msevtmgt_allowpstnsserstobypasslobby: DevKit.Controls.Boolean;
			msevtmgt_allowteamsmeetingreactions: DevKit.Controls.Boolean;
			msevtmgt_attendeeengagementreport: DevKit.Controls.Boolean;
			msevtmgt_attendeeurl: DevKit.Controls.String;
			/** The intended audience for the session */
			msevtmgt_AudienceType: DevKit.Controls.OptionSet;
			msevtmgt_autoadmittedusers: DevKit.Controls.OptionSet;
			msevtmgt_autorecordingenabled: DevKit.Controls.Boolean;
			/** Audio/video support */
			msevtmgt_AVSupport: DevKit.Controls.OptionSet;
			msevtmgt_baserecurrentsessionid: DevKit.Controls.String;
			msevtmgt_building: DevKit.Controls.Lookup;
			/** Access is by invitation only */
			msevtmgt_ByInvitationOnly: DevKit.Controls.OptionSet;
			/** Rich text calendar content for session. */
			msevtmgt_calendarcontent: DevKit.Controls.String;
			/** Plain text calendar content for sessions. */
			msevtmgt_calendarcontent_plaintext: DevKit.Controls.String;
			/** Are cameras permitted? */
			msevtmgt_CamerasPermitted: DevKit.Controls.OptionSet;
			msevtmgt_changemeetingoptions: DevKit.Controls.Boolean;
			/** Check-in count */
			msevtmgt_CheckInCount: DevKit.Controls.Integer;
			msevtmgt_streamingenabled: DevKit.Controls.Boolean;
			msevtmgt_descriptorsyncstatus: DevKit.Controls.OptionSet;
			/** Detailed description of the session */
			msevtmgt_DetailedDescription: DevKit.Controls.String;
			/** Session duration in minutes */
			msevtmgt_DurationMins: DevKit.Controls.Integer;
			/** End time of the session */
			msevtmgt_EndTime: DevKit.Controls.DateTime;
			msevtmgt_entryexitannouncementsenabled: DevKit.Controls.Boolean;
			/** Unique identifier for the event associated with the event session */
			msevtmgt_Event: DevKit.Controls.Lookup;
			/** External URL for the session */
			msevtmgt_ExternalUrl: DevKit.Controls.String;
			/** A flip-chart is available for the session */
			msevtmgt_FlipChart: DevKit.Controls.OptionSet;
			/** Industry of the session */
			msevtmgt_Industry: DevKit.Controls.OptionSet;
			/** Are internet connections available? */
			msevtmgt_InternetConnection: DevKit.Controls.OptionSet;
			/** Field specifying if a streamed session is out of synchronization with its provider. */
			msevtmgt_isoutofsync: DevKit.Controls.Boolean;
			/** A comma-delimited list of keywords for this session */
			msevtmgt_Keywords: DevKit.Controls.String;
			/** The language of the webinar */
			msevtmgt_Language: DevKit.Controls.OptionSet;
			msevtmgt_layout: DevKit.Controls.Lookup;
			/** The name of the custom entity */
			msevtmgt_Name: DevKit.Controls.String;
			/** Non disclosure agreement */
			msevtmgt_NDA: DevKit.Controls.OptionSet;
			msevtmgt_PresentationManagerUrl: DevKit.Controls.String;
			/** Producer of the session */
			msevtmgt_Producer: DevKit.Controls.Lookup;
			/** Publish status of the session */
			msevtmgt_PublishStatus: DevKit.Controls.OptionSet;
			msevtmgt_qna: DevKit.Controls.Boolean;
			msevtmgt_recordingforattendees: DevKit.Controls.Boolean;
			msevtmgt_recordingforproducersandspeakers: DevKit.Controls.Boolean;
			/** Are recordings permitted? */
			msevtmgt_RecordingsPermitted: DevKit.Controls.OptionSet;
			msevtmgt_recurrencepattern: DevKit.Controls.String;
			/** Number of registrations for this session */
			msevtmgt_RegistrationCount: DevKit.Controls.Integer;
			msevtmgt_room: DevKit.Controls.Lookup;
			msevtmgt_sessionformat: DevKit.Controls.OptionSet;
			/** Maximum capacity of the session */
			msevtmgt_SessionMaxCapacity: DevKit.Controls.Integer;
			/** Objectives of the session */
			msevtmgt_SessionObjectives: DevKit.Controls.String;
			/** Prerequisites for the session */
			msevtmgt_SessionPreRequisites: DevKit.Controls.String;
			/** Summary of the session */
			msevtmgt_SessionSummary: DevKit.Controls.String;
			/** Type of the session */
			msevtmgt_SessionType: DevKit.Controls.OptionSet;
			/** The time the session will begin */
			msevtmgt_StartTime: DevKit.Controls.DateTime;
			msevtmgt_streamingenabled: DevKit.Controls.Boolean;
			msevtmgt_streamingenabled1: DevKit.Controls.Boolean;
			msevtmgt_streamingprovider: DevKit.Controls.OptionSet;
			/** User that owns the streamed session. */
			msevtmgt_streamowner: DevKit.Controls.Lookup;
			msevtmgt_teamsinvitationhtml: DevKit.Controls.String;
			/** Total numbers of questions asked at the session */
			msevtmgt_TotalNumberOfQuestionsAsked: DevKit.Controls.Integer;
			/** Video conferencing is available for the session */
			msevtmgt_VideoConferencing: DevKit.Controls.OptionSet;
			msevtmgt_WaitlistthisSession: DevKit.Controls.OptionSet;
			/** Webinar configuration */
			msevtmgt_WebinarConfigurationId: DevKit.Controls.Lookup;
			msevtmgt_WebinarType: DevKit.Controls.Lookup;
			msevtmgt_webinarurl: DevKit.Controls.String;
			/** A white board is available for the session */
			msevtmgt_WhiteBoard: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			SessionRegistrationCanceledList: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msevtmgt_msevtmgt_session_msevtmgt_speakerengagement_Session: DevKit.Controls.NavigationItem,
			msevtmgt_session_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msevtmgt_session_adx_portalcomments: DevKit.Controls.NavigationItem,
			msevtmgt_session_Appointments: DevKit.Controls.NavigationItem,
			msevtmgt_session_Emails: DevKit.Controls.NavigationItem,
			msevtmgt_session_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msevtmgt_session_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msevtmgt_session_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msevtmgt_session_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msevtmgt_session_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msevtmgt_session_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msevtmgt_session_msevtmgt_checkin_SessionAttended: DevKit.Controls.NavigationItem,
			msevtmgt_session_msevtmgt_roomreservation: DevKit.Controls.NavigationItem,
			msevtmgt_session_msevtmgt_sessionregistration: DevKit.Controls.NavigationItem,
			msevtmgt_session_msfp_alerts: DevKit.Controls.NavigationItem,
			msevtmgt_session_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msevtmgt_session_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msevtmgt_session_PhoneCalls: DevKit.Controls.NavigationItem,
			msevtmgt_session_ServiceAppointments: DevKit.Controls.NavigationItem,
			msevtmgt_session_Tasks: DevKit.Controls.NavigationItem,
			msevtmgt_session_waitlistitem: DevKit.Controls.NavigationItem
		}
		interface Grid {
			CheckinRecordsByIndustry: DevKit.Controls.Grid;
			CheckinRecordsByPrimaryRole: DevKit.Controls.Grid;
			CheckinsSessionAttendees: DevKit.Controls.Grid;
			msevtmgt_SessionPasses: DevKit.Controls.Grid;
			msevtmgt_SessionPasses_2: DevKit.Controls.Grid;
			msevtmgt_SessionsInSameEvent: DevKit.Controls.Grid;
			msevtmgt_SessionTracksSubgrid: DevKit.Controls.Grid;
			msevtmgt_SimultaneousSessions: DevKit.Controls.Grid;
			RegistrationrecordsbyIndustry: DevKit.Controls.Grid;
			RegistrationRecordsByPrimaryRole: DevKit.Controls.Grid;
			RelatedRegistrationRecordsByCreatedOn: DevKit.Controls.Grid;
			SessionRegistrations: DevKit.Controls.Grid;
			SessionTeamMembers: DevKit.Controls.Grid;
			Speakers: DevKit.Controls.Grid;
			Waitlist: DevKit.Controls.Grid;
		}
	}
	class Formmsevtmgt_Session_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_Session_Information */
		Body: DevKit.Formmsevtmgt_Session_Information.Body;
		/** The Header section of form msevtmgt_Session_Information */
		Header: DevKit.Formmsevtmgt_Session_Information.Header;
		/** The Navigation of form msevtmgt_Session_Information */
		Navigation: DevKit.Formmsevtmgt_Session_Information.Navigation;
		/** The Grid of form msevtmgt_Session_Information */
		Grid: DevKit.Formmsevtmgt_Session_Information.Grid;
		/** The SidePanes of form msevtmgt_Session_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsevtmgt_Session_Information2 {
		interface tab_GeneralTab_Sections {
			GeneralTab_column_1_section_1: DevKit.Controls.Section;
			section_location: DevKit.Controls.Section;
			section_webinarsetup: DevKit.Controls.Section;
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
			/** End time of the session */
			msevtmgt_EndTime: DevKit.Controls.DateTime;
			/** Unique identifier for the event associated with the event session */
			msevtmgt_Event: DevKit.Controls.Lookup;
			/** The language of the webinar */
			msevtmgt_Language: DevKit.Controls.OptionSet;
			msevtmgt_layout: DevKit.Controls.Lookup;
			/** The name of the custom entity */
			msevtmgt_Name: DevKit.Controls.String;
			/** Publish status of the session */
			msevtmgt_PublishStatus: DevKit.Controls.OptionSet;
			msevtmgt_recordingforproducersandspeakers: DevKit.Controls.Boolean;
			msevtmgt_room: DevKit.Controls.Lookup;
			msevtmgt_sessionformat: DevKit.Controls.OptionSet;
			/** Maximum capacity of the session */
			msevtmgt_SessionMaxCapacity: DevKit.Controls.Integer;
			/** The time the session will begin */
			msevtmgt_StartTime: DevKit.Controls.DateTime;
			msevtmgt_streamingenabled: DevKit.Controls.Boolean;
			msevtmgt_streamingenabled1: DevKit.Controls.Boolean;
			msevtmgt_streamingprovider: DevKit.Controls.OptionSet;
			/** Webinar configuration */
			msevtmgt_WebinarConfigurationId: DevKit.Controls.Lookup;
			msevtmgt_WebinarType: DevKit.Controls.Lookup;
		}
	}
	class Formmsevtmgt_Session_Information2 extends DevKit.IForm {
		/**
		* Information [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_Session_Information2 */
		Body: DevKit.Formmsevtmgt_Session_Information2.Body;
	}
	class msevtmgt_SessionApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_SessionApi
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
		msevtmgt_allowattendeestounmute: boolean;
		msevtmgt_allowcameraforattendees: boolean;
		msevtmgt_allowexternalpresenters: boolean;
		msevtmgt_allowmeetingchat: OptionSet.msevtmgt_Session.msevtmgt_allowmeetingchat;
		msevtmgt_allowpstnsserstobypasslobby: boolean;
		msevtmgt_allowteamsmeetingreactions: boolean;
		msevtmgt_attendeeengagementreport: boolean;
		msevtmgt_attendeeurl: string;
		/** The intended audience for the session */
		msevtmgt_AudienceType: OptionSet.msevtmgt_Session.msevtmgt_AudienceType;
		msevtmgt_autoadmittedusers: OptionSet.msevtmgt_Session.msevtmgt_autoadmittedusers;
		msevtmgt_autorecordingenabled: boolean;
		/** Audio/video support */
		msevtmgt_AVSupport: OptionSet.msevtmgt_Session.msevtmgt_AVSupport;
		msevtmgt_baserecurrentsessionid: string;
		msevtmgt_building: string;
		/** Access is by invitation only */
		msevtmgt_ByInvitationOnly: OptionSet.msevtmgt_Session.msevtmgt_ByInvitationOnly;
		/** Rich text calendar content for session. */
		msevtmgt_calendarcontent: string;
		/** Plain text calendar content for sessions. */
		msevtmgt_calendarcontent_plaintext: string;
		/** Are cameras permitted? */
		msevtmgt_CamerasPermitted: OptionSet.msevtmgt_Session.msevtmgt_CamerasPermitted;
		msevtmgt_changemeetingoptions: boolean;
		/** Check-in count */
		msevtmgt_CheckInCount: number;
		/** Creation source */
		msevtmgt_creationsource: OptionSet.msevtmgt_Session.msevtmgt_creationsource;
		msevtmgt_descriptorsyncstatus: OptionSet.msevtmgt_Session.msevtmgt_descriptorsyncstatus;
		/** Detailed description of the session */
		msevtmgt_DetailedDescription: string;
		/** Session duration in minutes */
		readonly msevtmgt_DurationMins: number;
		/** End time of the session */
		msevtmgt_EndTime_TimezoneDateAndTime: Date;
		msevtmgt_entryexitannouncementsenabled: boolean;
		/** Unique identifier for the event associated with the event session */
		msevtmgt_Event: string;
		/** Unique identifier for the speaker associated with the session */
		msevtmgt_EventSpeakerId: string;
		/** External URL for the session */
		msevtmgt_ExternalUrl: string;
		/** A flip-chart is available for the session */
		msevtmgt_FlipChart: OptionSet.msevtmgt_Session.msevtmgt_FlipChart;
		/** Industry of the session */
		msevtmgt_Industry: OptionSet.msevtmgt_Session.msevtmgt_Industry;
		/** Are internet connections available? */
		msevtmgt_InternetConnection: OptionSet.msevtmgt_Session.msevtmgt_InternetConnection;
		/** Field specifying if a streamed session is out of synchronization with its provider. */
		msevtmgt_isoutofsync: boolean;
		/** A comma-delimited list of keywords for this session */
		msevtmgt_Keywords: string;
		/** The language of the webinar */
		msevtmgt_Language: OptionSet.msevtmgt_Session.msevtmgt_Language;
		msevtmgt_lastteamssyncdate_UtcDateAndTime: Date;
		msevtmgt_layout: string;
		/** The name of the custom entity */
		msevtmgt_Name: string;
		/** Non disclosure agreement */
		msevtmgt_NDA: OptionSet.msevtmgt_Session.msevtmgt_NDA;
		/** Unique identifier for the product associated with the session */
		msevtmgt_PassSessions: string;
		msevtmgt_PresentationManagerUrl: string;
		msevtmgt_previousnumberoffreeslots: number;
		/** Producer of the session */
		msevtmgt_Producer: string;
		/** Publish status of the session */
		msevtmgt_PublishStatus: OptionSet.msevtmgt_Session.msevtmgt_PublishStatus;
		msevtmgt_qna: boolean;
		msevtmgt_recordingforattendees: boolean;
		msevtmgt_recordingforproducersandspeakers: boolean;
		/** Are recordings permitted? */
		msevtmgt_RecordingsPermitted: OptionSet.msevtmgt_Session.msevtmgt_RecordingsPermitted;
		msevtmgt_recurrencepattern: string;
		/** Number of registrations for this session */
		msevtmgt_RegistrationCount: number;
		msevtmgt_registrationcounterlock: string;
		msevtmgt_room: string;
		/** A code for the session */
		msevtmgt_SessionCode: string;
		msevtmgt_sessionformat: OptionSet.msevtmgt_Session.msevtmgt_sessionformat;
		/** Unique identifier for entity instances */
		msevtmgt_SessionId: string;
		/** Maximum capacity of the session */
		msevtmgt_SessionMaxCapacity: number;
		/** Objectives of the session */
		msevtmgt_SessionObjectives: string;
		/** Prerequisites for the session */
		msevtmgt_SessionPreRequisites: string;
		/** Summary of the session */
		msevtmgt_SessionSummary: string;
		/** Type of the session */
		msevtmgt_SessionType: OptionSet.msevtmgt_Session.msevtmgt_SessionType;
		msevtmgt_showwaitlist: boolean;
		/** The time the session will begin */
		msevtmgt_StartTime_TimezoneDateAndTime: Date;
		msevtmgt_streamingenabled: boolean;
		msevtmgt_streamingprovider: OptionSet.msevtmgt_Session.msevtmgt_streamingprovider;
		/** User that owns the streamed session. */
		msevtmgt_streamowner: string;
		msevtmgt_teamsinvitationhtml: string;
		/** Total numbers of questions asked at the session */
		readonly msevtmgt_TotalNumberOfQuestionsAsked: number;
		/** Last Updated time of rollup field Total number of questions asked. */
		readonly msevtmgt_TotalNumberOfQuestionsAsked_Date_UtcDateAndTime: Date;
		/** State of rollup field Total number of questions asked. */
		readonly msevtmgt_TotalNumberOfQuestionsAsked_State: number;
		/** Active venue records for this session */
		msevtmgt_Venue: string;
		/** Video conferencing is available for the session */
		msevtmgt_VideoConferencing: OptionSet.msevtmgt_Session.msevtmgt_VideoConferencing;
		msevtmgt_WaitlistthisSession: OptionSet.msevtmgt_Session.msevtmgt_WaitlistthisSession;
		/** Webinar configuration */
		msevtmgt_WebinarConfigurationId: string;
		/** Webinar ID of the session */
		msevtmgt_WebinarID: string;
		/** Indicates whether the webinar notification has been seen */
		msevtmgt_webinarnotificationseen: boolean;
		msevtmgt_webinaroperation: string;
		msevtmgt_webinarstatus: string;
		msevtmgt_webinarstatusreason: string;
		msevtmgt_WebinarType: string;
		msevtmgt_webinarurl: string;
		/** A white board is available for the session */
		msevtmgt_WhiteBoard: OptionSet.msevtmgt_Session.msevtmgt_WhiteBoard;
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
		/** Status of the session */
		statecode: OptionSet.msevtmgt_Session.statecode;
		/** Reason for the status of the session */
		statuscode: OptionSet.msevtmgt_Session.statuscode;
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
			readonly msevtmgt_allowattendeestounmute: string;
			readonly msevtmgt_allowcameraforattendees: string;
			readonly msevtmgt_allowexternalpresenters: string;
			readonly msevtmgt_allowmeetingchat: string;
			readonly msevtmgt_allowpstnsserstobypasslobby: string;
			readonly msevtmgt_allowteamsmeetingreactions: string;
			readonly msevtmgt_attendeeengagementreport: string;
			readonly msevtmgt_attendeeurl: string;
			/** The intended audience for the session */
			readonly msevtmgt_AudienceType: string;
			readonly msevtmgt_autoadmittedusers: string;
			readonly msevtmgt_autorecordingenabled: string;
			/** Audio/video support */
			readonly msevtmgt_AVSupport: string;
			readonly msevtmgt_baserecurrentsessionid: string;
			readonly msevtmgt_building: string;
			/** Access is by invitation only */
			readonly msevtmgt_ByInvitationOnly: string;
			/** Rich text calendar content for session. */
			readonly msevtmgt_calendarcontent: string;
			/** Plain text calendar content for sessions. */
			readonly msevtmgt_calendarcontent_plaintext: string;
			/** Are cameras permitted? */
			readonly msevtmgt_CamerasPermitted: string;
			readonly msevtmgt_changemeetingoptions: string;
			/** Check-in count */
			readonly msevtmgt_CheckInCount: string;
			/** Creation source */
			readonly msevtmgt_creationsource: string;
			readonly msevtmgt_descriptorsyncstatus: string;
			/** Detailed description of the session */
			readonly msevtmgt_DetailedDescription: string;
			/** Session duration in minutes */
			readonly msevtmgt_DurationMins: string;
			/** End time of the session */
			readonly msevtmgt_EndTime_TimezoneDateAndTime: string;
			readonly msevtmgt_entryexitannouncementsenabled: string;
			/** Unique identifier for the event associated with the event session */
			readonly msevtmgt_Event: string;
			/** Unique identifier for the speaker associated with the session */
			readonly msevtmgt_EventSpeakerId: string;
			/** External URL for the session */
			readonly msevtmgt_ExternalUrl: string;
			/** A flip-chart is available for the session */
			readonly msevtmgt_FlipChart: string;
			/** Industry of the session */
			readonly msevtmgt_Industry: string;
			/** Are internet connections available? */
			readonly msevtmgt_InternetConnection: string;
			/** Field specifying if a streamed session is out of synchronization with its provider. */
			readonly msevtmgt_isoutofsync: string;
			/** A comma-delimited list of keywords for this session */
			readonly msevtmgt_Keywords: string;
			/** The language of the webinar */
			readonly msevtmgt_Language: string;
			readonly msevtmgt_lastteamssyncdate_UtcDateAndTime: string;
			readonly msevtmgt_layout: string;
			/** The name of the custom entity */
			readonly msevtmgt_Name: string;
			/** Non disclosure agreement */
			readonly msevtmgt_NDA: string;
			/** Unique identifier for the product associated with the session */
			readonly msevtmgt_PassSessions: string;
			readonly msevtmgt_PresentationManagerUrl: string;
			readonly msevtmgt_previousnumberoffreeslots: string;
			/** Producer of the session */
			readonly msevtmgt_Producer: string;
			/** Publish status of the session */
			readonly msevtmgt_PublishStatus: string;
			readonly msevtmgt_qna: string;
			readonly msevtmgt_recordingforattendees: string;
			readonly msevtmgt_recordingforproducersandspeakers: string;
			/** Are recordings permitted? */
			readonly msevtmgt_RecordingsPermitted: string;
			readonly msevtmgt_recurrencepattern: string;
			/** Number of registrations for this session */
			readonly msevtmgt_RegistrationCount: string;
			readonly msevtmgt_registrationcounterlock: string;
			readonly msevtmgt_room: string;
			/** A code for the session */
			readonly msevtmgt_SessionCode: string;
			readonly msevtmgt_sessionformat: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_SessionId: string;
			/** Maximum capacity of the session */
			readonly msevtmgt_SessionMaxCapacity: string;
			/** Objectives of the session */
			readonly msevtmgt_SessionObjectives: string;
			/** Prerequisites for the session */
			readonly msevtmgt_SessionPreRequisites: string;
			/** Summary of the session */
			readonly msevtmgt_SessionSummary: string;
			/** Type of the session */
			readonly msevtmgt_SessionType: string;
			readonly msevtmgt_showwaitlist: string;
			/** The time the session will begin */
			readonly msevtmgt_StartTime_TimezoneDateAndTime: string;
			readonly msevtmgt_streamingenabled: string;
			readonly msevtmgt_streamingprovider: string;
			/** User that owns the streamed session. */
			readonly msevtmgt_streamowner: string;
			readonly msevtmgt_teamsinvitationhtml: string;
			/** Total numbers of questions asked at the session */
			readonly msevtmgt_TotalNumberOfQuestionsAsked: string;
			/** Last Updated time of rollup field Total number of questions asked. */
			readonly msevtmgt_TotalNumberOfQuestionsAsked_Date_UtcDateAndTime: string;
			/** State of rollup field Total number of questions asked. */
			readonly msevtmgt_TotalNumberOfQuestionsAsked_State: string;
			/** Active venue records for this session */
			readonly msevtmgt_Venue: string;
			/** Video conferencing is available for the session */
			readonly msevtmgt_VideoConferencing: string;
			readonly msevtmgt_WaitlistthisSession: string;
			/** Webinar configuration */
			readonly msevtmgt_WebinarConfigurationId: string;
			/** Webinar ID of the session */
			readonly msevtmgt_WebinarID: string;
			/** Indicates whether the webinar notification has been seen */
			readonly msevtmgt_webinarnotificationseen: string;
			readonly msevtmgt_webinaroperation: string;
			readonly msevtmgt_webinarstatus: string;
			readonly msevtmgt_webinarstatusreason: string;
			readonly msevtmgt_WebinarType: string;
			readonly msevtmgt_webinarurl: string;
			/** A white board is available for the session */
			readonly msevtmgt_WhiteBoard: string;
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
			/** Status of the session */
			readonly statecode: string;
			/** Reason for the status of the session */
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
	namespace msevtmgt_Session {
		enum msevtmgt_allowmeetingchat {
			/** 100000001 */
			Disabled,
			/** 100000000 */
			Enabled,
			/** 100000002 */
			In_meeting_only
		}
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
		enum msevtmgt_AVSupport {
			/** 100000002 */
			No,
			/** 100000001 */
			Yes
		}
		enum msevtmgt_ByInvitationOnly {
			/** 100000002 */
			No,
			/** 100000001 */
			Yes
		}
		enum msevtmgt_CamerasPermitted {
			/** 100000002 */
			No,
			/** 100000001 */
			Yes
		}
		enum msevtmgt_creationsource {
			/** 100000001 */
			Dynamics,
			/** 100000002 */
			Microsoft_Teams
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
		enum msevtmgt_FlipChart {
			/** 100000002 */
			No,
			/** 100000001 */
			Yes
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
		enum msevtmgt_InternetConnection {
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
		enum msevtmgt_NDA {
			/** 100000002 */
			No,
			/** 100000001 */
			Yes
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
		enum msevtmgt_RecordingsPermitted {
			/** 100000002 */
			No,
			/** 100000001 */
			Yes
		}
		enum msevtmgt_sessionformat {
			/** 100000003 */
			Hybrid,
			/** 100000001 */
			On_site,
			/** 100000002 */
			Webinar
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
		enum msevtmgt_VideoConferencing {
			/** 100000002 */
			No,
			/** 100000001 */
			Yes
		}
		enum msevtmgt_WaitlistthisSession {
			/** 100000001 */
			No,
			/** 100000002 */
			Yes
		}
		enum msevtmgt_WhiteBoard {
			/** 100000002 */
			No,
			/** 100000001 */
			Yes
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