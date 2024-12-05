'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsevtmgt_SessionTrack_Information = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_AudienceType: {},
			msevtmgt_Description: {},
			msevtmgt_EventId: {},
			msevtmgt_EventId1: {},
			msevtmgt_IndustryType: {},
			msevtmgt_Name: {},
			msevtmgt_numberofregistrations: {},
			msevtmgt_PublishStatus: {},
			msevtmgt_TrackCode: {},
			msevtmgt_TrackGoal: {},
			notescontrol: {},
			OwnerId: {},
			Sessions: {},
			sessionsbyAudienceType: {},
			sessionsbySessionType: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_DFBE1579_8F1B_40CA_8DF8_964010FBE6E5: {
				Section: {
					_A9EF0EBC_FFAC_4C0A_B87C_6F5B510F264E: {},
					_DFBE1579_8F1B_40CA_8DF8_964010FBE6E5_SECTION_3: {}
				}
			},
			SessionBreakdownTab: {
				Section: {
					SessionBreakdownTab_section_1: {},
					SessionBreakdownTab_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msevtmgt_SessionsInTrack: {},
			msevtmgt_TargetNumberOfSessions: {},
			msevtmgt_TrackType: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {
			Event: {
				msevtmgt_building: {},
				msevtmgt_EventEndDate: {},
				msevtmgt_EventStartDate: {},
				msevtmgt_Name: {},
				msevtmgt_PrimaryGoal: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			Sessions: {},
			sessionsbyAudienceType: {},
			sessionsbySessionType: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msevtmgt_sessiontrack_adx_inviteredemptions: {},
			msevtmgt_sessiontrack_adx_portalcomments: {},
			msevtmgt_sessiontrack_Appointments: {},
			msevtmgt_sessiontrack_Emails: {},
			msevtmgt_sessiontrack_msdyn_bookingalerts: {},
			msevtmgt_sessiontrack_msdyn_copilottranscripts: {},
			msevtmgt_sessiontrack_msdyn_ocliveworkitems: {},
			msevtmgt_sessiontrack_msdyn_ocoutboundmessages: {},
			msevtmgt_sessiontrack_msdyn_ocsessions: {},
			msevtmgt_sessiontrack_msdyn_ocvoicemails: {},
			msevtmgt_sessiontrack_msevtmgt_pass_Track: {},
			msevtmgt_sessiontrack_msfp_alerts: {},
			msevtmgt_sessiontrack_msfp_surveyinvites: {},
			msevtmgt_sessiontrack_msfp_surveyresponses: {},
			msevtmgt_sessiontrack_PhoneCalls: {},
			msevtmgt_sessiontrack_ServiceAppointments: {},
			msevtmgt_sessiontrack_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsevtmgt_SessionTrack_Quick_Create_Form = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_AudienceType: {},
			msevtmgt_Description: {},
			msevtmgt_EventId: {},
			msevtmgt_IndustryType: {},
			msevtmgt_Name: {},
			msevtmgt_numberofregistrations: {},
			msevtmgt_PublishStatus: {},
			msevtmgt_SessionsInTrack: {},
			msevtmgt_TargetNumberOfSessions: {},
			msevtmgt_TrackCode: {},
			msevtmgt_TrackGoal: {},
			msevtmgt_TrackType: {},
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
	OptionSet.msevtmgt_SessionTrack = {
		msevtmgt_AudienceType : {
			Advanced: 100000003,
			General: 100000000,
			Intermediate: 100000002,
			Introductory: 100000001
		},
		msevtmgt_IndustryType : {
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
		msevtmgt_PublishStatus : {
			Cancelled: 100000004,
			Draft: 100000000,
			Going_live: 100000005,
			In_progress: 100000002,
			Live: 100000003,
			Ready_to_go_live: 100000001
		},
		msevtmgt_TrackType : {
			External: 100000001,
			Internal: 100000000
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