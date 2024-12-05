'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsevtmgt_Session_Information = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			CheckinRecordsByIndustry: {},
			CheckinRecordsByPrimaryRole: {},
			CheckinsSessionAttendees: {},
			ModifiedBy: {},
			msevtmgt_allowattendeestounmute: {},
			msevtmgt_allowcameraforattendees: {},
			msevtmgt_allowexternalpresenters: {},
			msevtmgt_allowmeetingchat: {},
			msevtmgt_allowpstnsserstobypasslobby: {},
			msevtmgt_allowteamsmeetingreactions: {},
			msevtmgt_attendeeengagementreport: {},
			msevtmgt_attendeeurl: {},
			msevtmgt_AudienceType: {},
			msevtmgt_autoadmittedusers: {},
			msevtmgt_autorecordingenabled: {},
			msevtmgt_AVSupport: {},
			msevtmgt_baserecurrentsessionid: {},
			msevtmgt_building: {},
			msevtmgt_ByInvitationOnly: {},
			msevtmgt_calendarcontent: {},
			msevtmgt_calendarcontent_plaintext: {},
			msevtmgt_CamerasPermitted: {},
			msevtmgt_changemeetingoptions: {},
			msevtmgt_CheckInCount: {},
			msevtmgt_descriptorsyncstatus: {},
			msevtmgt_DetailedDescription: {},
			msevtmgt_DurationMins: {},
			msevtmgt_EndTime: {},
			msevtmgt_entryexitannouncementsenabled: {},
			msevtmgt_Event: {},
			msevtmgt_ExternalUrl: {},
			msevtmgt_FlipChart: {},
			msevtmgt_Industry: {},
			msevtmgt_InternetConnection: {},
			msevtmgt_isoutofsync: {},
			msevtmgt_Keywords: {},
			msevtmgt_Language: {},
			msevtmgt_layout: {},
			msevtmgt_Name: {},
			msevtmgt_NDA: {},
			msevtmgt_PresentationManagerUrl: {},
			msevtmgt_Producer: {},
			msevtmgt_PublishStatus: {},
			msevtmgt_qna: {},
			msevtmgt_recordingforattendees: {},
			msevtmgt_recordingforproducersandspeakers: {},
			msevtmgt_RecordingsPermitted: {},
			msevtmgt_recurrencepattern: {},
			msevtmgt_RegistrationCount: {},
			msevtmgt_room: {},
			msevtmgt_sessionformat: {},
			msevtmgt_SessionMaxCapacity: {},
			msevtmgt_SessionObjectives: {},
			msevtmgt_SessionPasses: {},
			msevtmgt_SessionPasses_2: {},
			msevtmgt_SessionPreRequisites: {},
			msevtmgt_SessionsInSameEvent: {},
			msevtmgt_SessionSummary: {},
			msevtmgt_SessionTracksSubgrid: {},
			msevtmgt_SessionType: {},
			msevtmgt_SimultaneousSessions: {},
			msevtmgt_StartTime: {},
			msevtmgt_streamingenabled: {},
			msevtmgt_streamingenabled1: {},
			msevtmgt_streamingenabled2: {},
			msevtmgt_streamingprovider: {},
			msevtmgt_streamowner: {},
			msevtmgt_teamsinvitationhtml: {},
			msevtmgt_TotalNumberOfQuestionsAsked: {},
			msevtmgt_VideoConferencing: {},
			msevtmgt_WaitlistthisSession: {},
			msevtmgt_WebinarConfigurationId: {},
			msevtmgt_WebinarType: {},
			msevtmgt_webinarurl: {},
			msevtmgt_WhiteBoard: {},
			notescontrol: {},
			RegistrationrecordsbyIndustry: {},
			RegistrationRecordsByPrimaryRole: {},
			RelatedRegistrationRecordsByCreatedOn: {},
			SessionRegistrationCanceledList: {},
			SessionRegistrations: {},
			SessionTeamMembers: {},
			Speakers: {},
			Waitlist: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			AdditionalInfoTab: {
				Section: {
					CalendarContentSection: {}
				}
			},
			AgendaTab: {
				Section: {
					AgendaTab_section_1: {},
					AgendaTab_section_2: {},
					AgendaTab_section_3: {},
					SessionTeamMembers: {}
				}
			},
			RegistrationAndAttendanceTab: {
				Section: {
					InteractionsTab_SessionRegistrationCanceledList: {},
					RegistrationAndAttendanceTab_section_1: {},
					RegistrationAndAttendanceTab_section_1_2: {},
					RegistrationAndAttendanceTab_section_2: {},
					RegistrationAndAttendanceTab_section_3: {},
					RegistrationAndAttendanceTab_section_4: {},
					RegistrationAndAttendanceTab_section_5: {},
					RegistrationAndAttendanceTab_section_6: {},
					RegistrationAndAttendanceTab_section_waitlist: {}
				}
			},
			RelatedSessionsTab: {
				Section: {
					RelatedSessionsTab_section_1: {},
					RelatedSessionsTab_section_2: {}
				}
			},
			SummaryTab: {
				Section: {
					Recurrent_Session: {},
					SummaryTab_section_2: {},
					SummaryTab_section_3: {},
					SummaryTab_section_4: {},
					SummaryTab_section_Schedule: {},
					SummaryTab_section_venueconstraints: {},
					TeamsIntegrationSection: {},
					VenueTab_section_2: {},
					VenueTab_section_3: {},
					VenueTab_section_location: {},
					VenueTab_section_webinarsetup: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msevtmgt_NDA: {},
			msevtmgt_PublishStatus: {},
			msevtmgt_SessionCode: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			CheckinRecordsByIndustry: {},
			CheckinRecordsByPrimaryRole: {},
			CheckinsSessionAttendees: {},
			msevtmgt_SessionPasses: {},
			msevtmgt_SessionPasses_2: {},
			msevtmgt_SessionsInSameEvent: {},
			msevtmgt_SessionTracksSubgrid: {},
			msevtmgt_SimultaneousSessions: {},
			RegistrationrecordsbyIndustry: {},
			RegistrationRecordsByPrimaryRole: {},
			RelatedRegistrationRecordsByCreatedOn: {},
			SessionRegistrations: {},
			SessionTeamMembers: {},
			Speakers: {},
			Waitlist: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msevtmgt_msevtmgt_session_msevtmgt_speakerengagement_Session: {},
			msevtmgt_session_adx_inviteredemptions: {},
			msevtmgt_session_adx_portalcomments: {},
			msevtmgt_session_Appointments: {},
			msevtmgt_session_Emails: {},
			msevtmgt_session_msdyn_bookingalerts: {},
			msevtmgt_session_msdyn_copilottranscripts: {},
			msevtmgt_session_msdyn_ocliveworkitems: {},
			msevtmgt_session_msdyn_ocoutboundmessages: {},
			msevtmgt_session_msdyn_ocsessions: {},
			msevtmgt_session_msdyn_ocvoicemails: {},
			msevtmgt_session_msevtmgt_checkin_SessionAttended: {},
			msevtmgt_session_msevtmgt_roomreservation: {},
			msevtmgt_session_msevtmgt_sessionregistration: {},
			msevtmgt_session_msfp_alerts: {},
			msevtmgt_session_msfp_surveyinvites: {},
			msevtmgt_session_msfp_surveyresponses: {},
			msevtmgt_session_PhoneCalls: {},
			msevtmgt_session_ServiceAppointments: {},
			msevtmgt_session_Tasks: {},
			msevtmgt_session_waitlistitem: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsevtmgt_Session_Information2 = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			msevtmgt_building: {},
			msevtmgt_EndTime: {},
			msevtmgt_Event: {},
			msevtmgt_Language: {},
			msevtmgt_layout: {},
			msevtmgt_Name: {},
			msevtmgt_PublishStatus: {},
			msevtmgt_recordingforproducersandspeakers: {},
			msevtmgt_room: {},
			msevtmgt_sessionformat: {},
			msevtmgt_SessionMaxCapacity: {},
			msevtmgt_StartTime: {},
			msevtmgt_streamingenabled: {},
			msevtmgt_streamingenabled1: {},
			msevtmgt_streamingprovider: {},
			msevtmgt_WebinarConfigurationId: {},
			msevtmgt_WebinarType: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			GeneralTab: {
				Section: {
					GeneralTab_column_1_section_1: {},
					section_location: {},
					section_webinarsetup: {},
					TeamsIntegrationSection: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msevtmgt_Session = {
		msevtmgt_allowmeetingchat : {
			Disabled: 100000001,
			Enabled: 100000000,
			In_meeting_only: 100000002
		},
		msevtmgt_AudienceType : {
			Advanced: 100000003,
			General: 100000000,
			Intermediate: 100000002,
			Introductory: 100000001
		},
		msevtmgt_autoadmittedusers : {
			Everyone: 100000003,
			Only_me: 100000005,
			People_I_invite: 100000004,
			People_in_my_organization_and_guests: 100000001,
			People_in_my_organization_trusted_organizations_and_guests: 100000002
		},
		msevtmgt_AVSupport : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_ByInvitationOnly : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_CamerasPermitted : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_creationsource : {
			Dynamics: 100000001,
			Microsoft_Teams: 100000002
		},
		msevtmgt_descriptorsyncstatus : {
			Going_live: 100000001,
			Going_live_failed: 100000002,
			Modifying_capacity: 100000003,
			Modifying_capacity_failed: 100000004,
			Not_Synced: 100000005,
			Synced: 100000000
		},
		msevtmgt_FlipChart : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_Industry : {
			Architecture_and_engineering: 100000000,
			Financial_services: 100000001,
			Manufacturing: 100000002,
			Media_entertainment: 100000003,
			Other: 100000008,
			Professional_services: 100000004,
			Public_sector: 100000005,
			Retail: 100000006,
			Wholesale_and_distribution: 100000007
		},
		msevtmgt_InternetConnection : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_Language : {
			Chinese_Simplified: 100000009,
			Chinese_Traditional: 100000013,
			Dutch: 100000006,
			English: 100000000,
			French: 100000001,
			German: 100000002,
			Hebrew: 100000012,
			Italian: 100000004,
			Japanese: 100000010,
			Korean: 100000011,
			Portuguese: 100000008,
			Russian: 100000005,
			Spanish: 100000003,
			Turkish: 100000007
		},
		msevtmgt_NDA : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_PublishStatus : {
			Cancelled: 100000004,
			Draft: 100000000,
			Going_live: 100000005,
			In_progress: 100000002,
			Live: 100000003,
			Ready_to_go_live: 100000001
		},
		msevtmgt_RecordingsPermitted : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_sessionformat : {
			Hybrid: 100000003,
			On_site: 100000001,
			Webinar: 100000002
		},
		msevtmgt_SessionType : {
			Brainstorming: 100000003,
			Breakout: 100000004,
			General: 100000002,
			Hands_onlab: 100000000,
			Keynote: 100000001,
			Training: 100000005
		},
		msevtmgt_streamingprovider : {
			Other: 100000003,
			Teams_Live_Events: 100000001,
			Teams_Meetings: 100000002,
			Teams_Town_Hall: 100000006,
			Teams_Virtual_Events: 100000005,
			Teams_Webinars: 100000004
		},
		msevtmgt_VideoConferencing : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_WaitlistthisSession : {
			No: 100000001,
			Yes: 100000002
		},
		msevtmgt_WhiteBoard : {
			No: 100000002,
			Yes: 100000001
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
		},
		RollupState : {
			NotCalculated: 0,
			Calculated: 1,
			OverflowError: 2,
			OtherError: 3,
			RetryLimitExceeded: 4,
			HierarchicalRecursionLimitReached: 5,
			LoopDetected: 6
		}
	};
})(OptionSet || (OptionSet = {}));