'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormSpeakers = function(executionContext, defaultWebResourceName) {
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
			EventbyEventType: {},
			EventHistory: {},
			HotelRoomReservationsGrid: {},
			msevtmgt_About: {},
			msevtmgt_Accomplishments: {},
			msevtmgt_Blog: {},
			msevtmgt_Contact: {},
			msevtmgt_Contact1: {},
			msevtmgt_Email: {},
			msevtmgt_LinkedIn: {},
			msevtmgt_Name: {},
			msevtmgt_Publications: {},
			msevtmgt_SpeakerCost: {},
			msevtmgt_Title: {},
			msevtmgt_Twitter: {},
			msevtmgt_Type: {},
			msevtmgt_Website: {},
			notescontrol: {},
			NumberOfEngagementsOverTime: {},
			SessionHistory: {},
			SpeakerEngagements: {},
			SpeakerEngagementsCalendarGrid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_51C14EE7_B9F8_4F24_8C1D_EB7AFE82E863: {
				Section: {
					General_section_4: {}
				}
			},
			EngagementProfile: {
				Section: {
					EngagementProfile_section_1: {},
					EngagementProfile_section_2: {}
				}
			},
			HotelRoomReservationsTab: {
				Section: {
					HotelRoomReservationsSection: {}
				}
			},
			SpeakerEngagements: {
				Section: {
					SpeakerEngagements_section_1: {},
					SpeakerEngagementsCalendarSecion: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msevtmgt_Type: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {
			ContactCompanyQuickViewForm: {
				ParentCustomerId: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			EventbyEventType: {},
			EventHistory: {},
			HotelRoomReservationsGrid: {},
			NumberOfEngagementsOverTime: {},
			SessionHistory: {},
			SpeakerEngagements: {},
			SpeakerEngagementsCalendarGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msevtmgt_msevtmgt_speaker_msevtmgt_speakerengagement_Speaker: {},
			msevtmgt_speaker_adx_inviteredemptions: {},
			msevtmgt_speaker_adx_portalcomments: {},
			msevtmgt_speaker_Appointments: {},
			msevtmgt_speaker_Emails: {},
			msevtmgt_speaker_hotelroomreservation: {},
			msevtmgt_speaker_msdyn_bookingalerts: {},
			msevtmgt_speaker_msdyn_copilottranscripts: {},
			msevtmgt_speaker_msdyn_ocliveworkitems: {},
			msevtmgt_speaker_msdyn_ocoutboundmessages: {},
			msevtmgt_speaker_msdyn_ocsessions: {},
			msevtmgt_speaker_msdyn_ocvoicemails: {},
			msevtmgt_speaker_msevtmgt_Session: {},
			msevtmgt_speaker_msfp_alerts: {},
			msevtmgt_speaker_msfp_surveyinvites: {},
			msevtmgt_speaker_msfp_surveyresponses: {},
			msevtmgt_speaker_PhoneCalls: {},
			msevtmgt_speaker_ServiceAppointments: {},
			msevtmgt_speaker_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsevtmgt_Speaker_Quick_Create_Form = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_About: {},
			msevtmgt_Accomplishments: {},
			msevtmgt_Blog: {},
			msevtmgt_Contact: {},
			msevtmgt_Email: {},
			msevtmgt_LinkedIn: {},
			msevtmgt_Name: {},
			msevtmgt_Publications: {},
			msevtmgt_SpeakerCost: {},
			msevtmgt_Title: {},
			msevtmgt_Twitter: {},
			msevtmgt_Type: {},
			msevtmgt_Website: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			GeneralTab: {
				Section: {
					GeneralTab_column_1_section_1: {},
					GeneralTab_column_2_section_1: {},
					GeneralTab_column_3_section_1: {}
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
	OptionSet.msevtmgt_Speaker = {
		msevtmgt_Type : {
			External_speaker: 100000001,
			Internal_speaker: 100000000
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