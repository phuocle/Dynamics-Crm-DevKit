'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormEvent = function(executionContext, defaultWebResourceName) {
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
			CustomRegistrationFieldsSubGrid: {},
			EventCheckins: {},
			EventRegistrationCanceledList: {},
			EventSponsoships: {},
			External_Tracks_By_Publish: {},
			HotelRoomAllocations: {},
			ModifiedBy: {},
			msdyncrm_marketingformid: {},
			msdyncrm_usemarketingform: {},
			msevtmgt_allowanonymousregistrations: {},
			msevtmgt_allowanonymousregistrations1: {},
			msevtmgt_allowattendeestounmute: {},
			msevtmgt_allowcameraforattendees: {},
			msevtmgt_allowcustomagenda: {},
			msevtmgt_allowexternalpresenters: {},
			msevtmgt_allowmeetingchat: {},
			msevtmgt_allowpstnsserstobypasslobby: {},
			msevtmgt_allowteamsmeetingreactions: {},
			msevtmgt_attendeeengagementreport: {},
			msevtmgt_attendeeurl: {},
			msevtmgt_autoadmittedusers: {},
			msevtmgt_autorecordingenabled: {},
			msevtmgt_autoregisterwaitlistitems: {},
			msevtmgt_baserecurrenteventid: {},
			msevtmgt_BudgetAllocated: {},
			msevtmgt_building: {},
			msevtmgt_calendarcontent: {},
			msevtmgt_calendarcontent_plaintext: {},
			msevtmgt_changemeetingoptions: {},
			msevtmgt_CheckInCount: {},
			msevtmgt_CountdownInDays: {},
			msevtmgt_createleadsforeventregistrations: {},
			msevtmgt_createleadsforeventregistrations1: {},
			msevtmgt_createleadsforeventregistrations2: {},
			msevtmgt_creationsource: {},
			msevtmgt_customeventurl: {},
			msevtmgt_customeventurl1: {},
			msevtmgt_Description: {},
			msevtmgt_descriptorsyncstatus: {},
			msevtmgt_embedregistrationform: {},
			msevtmgt_enablecaptcha: {},
			msevtmgt_enablecaptcha1: {},
			msevtmgt_Enablemultiattendeeregistration: {},
			msevtmgt_Enablemultiattendeeregistration1: {},
			msevtmgt_entryexitannouncementsenabled: {},
			msevtmgt_EventEndDate: {},
			msevtmgt_EventFormat: {},
			msevtmgt_eventimage: {},
			msevtmgt_eventimage1: {},
			msevtmgt_EventStartDate: {},
			msevtmgt_EventTimeZone: {},
			msevtmgt_EventType: {},
			msevtmgt_EventVenueCost: {},
			msevtmgt_ExpectedOutcome: {},
			msevtmgt_formpagejavascriptcode: {},
			msevtmgt_isoutofsync: {},
			msevtmgt_IsRecurringEvent: {},
			msevtmgt_Language: {},
			msevtmgt_layout: {},
			msevtmgt_ManageRegistrationCount: {},
			msevtmgt_marketingformid: {},
			msevtmgt_MaximumEventCapacity: {},
			msevtmgt_MiscellaneousCosts: {},
			msevtmgt_Name: {},
			msevtmgt_numberofinvitations: {},
			msevtmgt_PresentationManagerUrl: {},
			msevtmgt_PrimaryGoal: {},
			msevtmgt_producer: {},
			msevtmgt_publiceventurl: {},
			msevtmgt_publiceventurl1: {},
			msevtmgt_qna: {},
			msevtmgt_readableeventid: {},
			msevtmgt_readableeventid1: {},
			msevtmgt_recordingforattendees: {},
			msevtmgt_recordingforproducersandspeakers: {},
			msevtmgt_records_by_industry: {},
			msevtmgt_records_by_role: {},
			msevtmgt_recoveryitems: {},
			msevtmgt_RecurrencePattern: {},
			msevtmgt_recurrenteventstatus: {},
			msevtmgt_registration_by_role: {},
			msevtmgt_RegistrationCount: {},
			msevtmgt_registrations_by_insustry: {},
			msevtmgt_RevenueFromSponsorship: {},
			msevtmgt_room: {},
			msevtmgt_setregistrationsenddate: {},
			msevtmgt_showautomaticregistrationcheckbox: {},
			msevtmgt_Stopwebsiteregistrationson: {},
			msevtmgt_streamingenabled: {},
			msevtmgt_streamingenabled1: {},
			msevtmgt_streamingenabled2: {},
			msevtmgt_streamingprovider: {},
			msevtmgt_streamowner: {},
			msevtmgt_TargetRevenue: {},
			msevtmgt_teamsinvitationhtml: {},
			msevtmgt_TotalCostOfEventsActivities: {},
			msevtmgt_TotalCostOfExternalMembers: {},
			msevtmgt_TotalRegistrationFee: {},
			msevtmgt_TotalRevenueFromTheEvent: {},
			msevtmgt_WaitlistthisEvent: {},
			msevtmgt_WebinarConfigurationId: {},
			msevtmgt_WebinarType: {},
			msevtmgt_webinarURL: {},
			msevtmgt_Websitemessage: {},
			msevtmgt_websitepreference: {},
			notescontrol: {},
			Passes: {},
			RecurrentEventsInSeriesGrid: {},
			Registration: {},
			RegistrationResponses: {},
			RoomReservationsGrid: {},
			Session_Tracks_By_Track_Type: {},
			Sessions: {},
			Sessions_By_Audience_Type: {},
			Sessions_By_Industry_Status: {},
			Sessions_by_Session_Type: {},
			SessionsCalendarGrid: {},
			SessionTracks: {},
			Speakers: {},
			TeamMembers: {},
			TransactionCurrencyId: {},
			Waitlist: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			AgendaTab: {
				Section: {
					AgendaTab_section_1: {},
					AgendaTab_section_10: {},
					AgendaTab_section_4: {},
					AgendaTab_section_6: {},
					CustomAgendaSection: {},
					Session_Distributions: {},
					Track_Distributions: {}
				}
			},
			EventSeriesTab: {
				Section: {
					tab_8_section_1: {}
				}
			},
			FinancialsTab: {
				Section: {
					_B6526D8B_5DEA_4950_A054_CEFE795F506F_SECTION_3: {},
					_B6526D8B_5DEA_4950_A054_CEFE795F506F_SECTION_6: {},
					Calendar_content_section: {},
					FinancialsTab_section_1: {}
				}
			},
			GeneralTab: {
				Section: {
					_6F16E2F5_AF38_4B8A_8026_94FBE9A5C155: {},
					_B6526D8B_5DEA_4950_A054_CEFE795F506F_SECTION_4: {},
					_B6526D8B_5DEA_4950_A054_CEFE795F506F_SECTION_5: {},
					_B6526D8B_5DEA_4950_A054_CEFE795F506F_SECTION_7: {},
					GeneralTab_section_Website: {},
					OrganizeTab_section_location: {},
					OrganizeTab_section_venueconstraints: {},
					OrganizeTab_section_webinarsetup: {},
					TeamsIntegrationSection: {},
					WaitlistSection: {}
				}
			},
			GuestLogisticsTab: {
				Section: {
					GuestLogisticsTab_section_1: {}
				}
			},
			RecoveryItemsTab: {
				Section: {
					RecoveryItemsSection: {}
				}
			},
			RegistrationAndAttendanceTab: {
				Section: {
					InteractionsTab_EventRegistrationCanceledList: {},
					RegistrationAndAttendanceTab_section_1: {},
					RegistrationAndAttendanceTab_section_3: {},
					RegistrationAndAttendanceTab_section_4: {},
					RegistrationAndAttendanceTab_section_5: {},
					RegistrationAndAttendanceTab_section_6: {},
					RegistrationAndAttendanceTab_section_waitlist: {}
				}
			},
			RoomReservationsTab: {
				Section: {
					RoomReservationsSection: {}
				}
			},
			RTMWebsiteAndFormTab: {
				Section: {
					RTMWebsiteAndFormSection: {},
					RTMWebsiteAndFormSection2: {}
				}
			},
			WebsiteAndFormTab: {
				Section: {
					CustomRegistrationFieldsSection: {},
					WebsiteAndRegistrationFormSection: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msevtmgt_istemplate: {},
			msevtmgt_PublishStatus: {},
			msevtmgt_sourcesystem: {},
			OwnerId: {},
			statecode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _EventMainBusinessProcessFlow = {
			msevtmgt_BookedFlightReservations: {},
			msevtmgt_BookRooms: {},
			msevtmgt_CateringRequired: {},
			msevtmgt_ConfirmedHotelChoices: {},
			msevtmgt_CreateMarketingCollateral: {},
			msevtmgt_DefinePackagesandPricing: {},
			msevtmgt_DefineSessions: {},
			msevtmgt_DefineTeam: {},
			msevtmgt_DevelopMarketingPlan: {},
			msevtmgt_EventEndDate: {},
			msevtmgt_EventStartDate: {},
			msevtmgt_EventTimeZone: {},
			msevtmgt_ExpectedOutcome: {},
			msevtmgt_FollowUpOnLeads: {},
			msevtmgt_GuestLogistics: {},
			msevtmgt_IdentifySpeakers: {},
			msevtmgt_IdentifySponsors: {},
			msevtmgt_MakePaymentsDue: {},
			msevtmgt_Name: {},
			msevtmgt_NotifyAuthoritiesOfEvent: {},
			msevtmgt_PlanRegistration: {},
			msevtmgt_PrimaryGoal: {},
			msevtmgt_PrimaryVenue: {},
			msevtmgt_RequestSponsorship: {},
			msevtmgt_ScheduleAirportPickups: {},
			msevtmgt_ScheduleSessions: {},
			msevtmgt_SendEventInvitation: {},
			msevtmgt_SendMarketingMaterial: {},
			msevtmgt_SendPreEventReminders: {},
			msevtmgt_SendThankYouEmails: {},
			msevtmgt_TeamDebriefing: {}
		}
		devKit.LoadFields(formContext, _EventMainBusinessProcessFlow, "header_process_");
		process.EventMainBusinessProcessFlow = _EventMainBusinessProcessFlow;
		form.Process = process;
		var grid = {
			CustomRegistrationFieldsSubGrid: {},
			EventCheckins: {},
			EventSponsoships: {},
			External_Tracks_By_Publish: {},
			HotelRoomAllocations: {},
			msevtmgt_records_by_industry: {},
			msevtmgt_records_by_role: {},
			msevtmgt_registration_by_role: {},
			msevtmgt_registrations_by_insustry: {},
			Passes: {},
			RecurrentEventsInSeriesGrid: {},
			Registration: {},
			RegistrationResponses: {},
			RoomReservationsGrid: {},
			Session_Tracks_By_Track_Type: {},
			Sessions: {},
			Sessions_By_Audience_Type: {},
			Sessions_By_Industry_Status: {},
			Sessions_by_Session_Type: {},
			SessionsCalendarGrid: {},
			SessionTracks: {},
			Speakers: {},
			TeamMembers: {},
			Waitlist: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			bpf_msevtmgt_event_msevtmgt_bpf_9623d46752ae497989f62ac0d11dad99: {},
			msdyncrm_msevtmgt_event_msdyncrm_deprecatedeventactivity_eventid: {},
			msdyncrm_msevtmgt_event_msdyncrm_formpage: {},
			msdynmkt_msevtmgt_event_team_associatedevent: {},
			msevtmgt_Event__SessionTrack: {},
			msevtmgt_event_adx_inviteredemptions: {},
			msevtmgt_event_adx_portalcomments: {},
			msevtmgt_event_Appointments: {},
			msevtmgt_Event_AttendeePass: {},
			msevtmgt_event_Emails: {},
			msevtmgt_event_eventcustomregistrationfield: {},
			msevtmgt_Event_EventRegistration: {},
			msevtmgt_event_lead_originatingeventid: {},
			msevtmgt_event_msdyn_bookingalerts: {},
			msevtmgt_event_msdyn_copilottranscripts: {},
			msevtmgt_event_msdyn_ocliveworkitems: {},
			msevtmgt_event_msdyn_ocoutboundmessages: {},
			msevtmgt_event_msdyn_ocsessions: {},
			msevtmgt_event_msdyn_ocvoicemails: {},
			msevtmgt_event_msevtmgt_checkin_Event: {},
			msevtmgt_event_msevtmgt_pass_Event: {},
			msevtmgt_event_msevtmgt_roomreservation: {},
			msevtmgt_event_msevtmgt_session_Event: {},
			msevtmgt_event_msevtmgt_sessionregistration_Event: {},
			msevtmgt_event_msevtmgt_speakerengagement: {},
			msevtmgt_Event_msevtmgt_Sponsorship: {},
			msevtmgt_event_msfp_alerts: {},
			msevtmgt_event_msfp_surveyinvites: {},
			msevtmgt_event_msfp_surveyresponses: {},
			msevtmgt_event_PhoneCalls: {},
			msevtmgt_event_ServiceAppointments: {},
			msevtmgt_Event_Speaker: {},
			msevtmgt_event_Tasks: {},
			msevtmgt_event_waitlistitem: {},
			msevtmgt_msevtmgt_event_contact_originatingeventid: {},
			msevtmgt_msevtmgt_event_hotelroomallocation_Event: {},
			msevtmgt_msevtmgt_event_msevtmgt_eventpurchase: {},
			msevtmgt_msevtmgt_event_msevtmgt_eventteamsproperties: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormEvent_quick_create = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_EventEndDate: {},
			msevtmgt_EventFormat: {},
			msevtmgt_EventStartDate: {},
			msevtmgt_EventTimeZone: {},
			msevtmgt_Language: {},
			msevtmgt_layout: {},
			msevtmgt_MaximumEventCapacity: {},
			msevtmgt_Name: {},
			msevtmgt_recordingforproducersandspeakers: {},
			msevtmgt_room: {},
			msevtmgt_sourcesystem: {},
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
					OrganizeTab_section_location: {},
					OrganizeTab_section_webinarsetup: {},
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
	OptionSet.msevtmgt_Event = {
		msevtmgt_allowmeetingchat : {
			Disabled: 100000001,
			Enabled: 100000000,
			In_meeting_only: 100000002
		},
		msevtmgt_autoadmittedusers : {
			Everyone: 100000003,
			Only_me: 100000005,
			People_I_invite: 100000004,
			People_in_my_organization_and_guests: 100000001,
			People_in_my_organization_trusted_organizations_and_guests: 100000002
		},
		msevtmgt_BookedFlightReservations : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_BookRooms : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_CateringRequired : {
			No: 100000001,
			Yes: 100000002
		},
		msevtmgt_ConfirmedHotelChoices : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_CreateMarketingCollateral : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_creationsource : {
			Dynamics: 100000001,
			Microsoft_Teams: 100000002
		},
		msevtmgt_DefinePackagesandPricing : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_DefineSessions : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_DefineTeam : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_descriptorsyncstatus : {
			Going_live: 100000001,
			Going_live_failed: 100000002,
			Modifying_capacity: 100000003,
			Modifying_capacity_failed: 100000004,
			Not_Synced: 100000005,
			Synced: 100000000
		},
		msevtmgt_DevelopMarketingPlan : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_EventDebriefing : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_EventFormat : {
			Hybrid: 100000003,
			On_site: 100000001,
			Webinar: 100000002
		},
		msevtmgt_EventType : {
			Conference: 100000002,
			Demonstration: 100000003,
			Executive_briefing: 100000001,
			Training: 100000004,
			Webcast: 100000005
		},
		msevtmgt_FollowUpOnLeads : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_GuestLogistics : {
			No: 100000001,
			Yes: 100000002
		},
		msevtmgt_IdentifySpeakers : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_IdentifySponsors : {
			Complete: 100000003,
			Incomplete: 100000002,
			Not_applicable: 100000001
		},
		msevtmgt_istemplate : {
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
		msevtmgt_MakePaymentsDue : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_ManageRegistrationCount : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_NotifyAuthoritiesOfEvent : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_PlanRegistration : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_PrimaryGoal : {
			Education: 100000003,
			Marketing: 100000001,
			Morale: 100000004,
			Sales: 100000002
		},
		msevtmgt_PublishStatus : {
			Cancelled: 100000004,
			Draft: 100000000,
			Going_live: 100000005,
			In_progress: 100000002,
			Live: 100000003,
			Ready_to_go_live: 100000001
		},
		msevtmgt_RequestSponsorship : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_ScheduleAirportPickups : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_ScheduleSessions : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_SelectSpeakers : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_SelectVendors : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_SendEventInvitation : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_SendMarketingMaterial : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_SendPreEventReminders : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_SendThankYouEmails : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_sourcesystem : {
			Outbound_marketing: 100000001,
			Real_time_Journeys: 100000002
		},
		msevtmgt_streamingprovider : {
			Other: 100000003,
			Teams_Live_Events: 100000001,
			Teams_Meetings: 100000002,
			Teams_Town_Hall: 100000006,
			Teams_Virtual_Events: 100000005,
			Teams_Webinars: 100000004
		},
		msevtmgt_TeamDebriefing : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_WaitlistthisEvent : {
			No: 100000001,
			Yes: 100000002
		},
		msevtmgt_websitepreference : {
			On_a_standalone_registration_page: 192350001,
			On_your_own_website: 192350002,
			This_event_doesnt_have_a_website: 192350003
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