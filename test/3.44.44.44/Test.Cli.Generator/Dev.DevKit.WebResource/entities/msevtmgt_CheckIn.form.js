'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsevtmgt_CheckIn_Information = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_CheckInType: {},
			msevtmgt_Contact: {},
			msevtmgt_Event: {},
			msevtmgt_NumberOfQuestionsAsked: {},
			msevtmgt_RegistrationId: {},
			msevtmgt_registrationidfromqr: {},
			msevtmgt_SessionAttended: {},
			msevtmgt_SessionRegistration: {},
			msevtmgt_ViewingDurationInMins: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_general: {
				Section: {
					section_general: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msevtmgt_Checkintime: {},
			msevtmgt_CheckOutTime: {},
			msevtmgt_Name: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			msevtmgt_checkin_adx_inviteredemptions: {},
			msevtmgt_checkin_adx_portalcomments: {},
			msevtmgt_checkin_Appointments: {},
			msevtmgt_checkin_contact: {},
			msevtmgt_checkin_Emails: {},
			msevtmgt_checkin_msdyn_bookingalerts: {},
			msevtmgt_checkin_msdyn_copilottranscripts: {},
			msevtmgt_checkin_msdyn_ocliveworkitems: {},
			msevtmgt_checkin_msdyn_ocoutboundmessages: {},
			msevtmgt_checkin_msdyn_ocsessions: {},
			msevtmgt_checkin_msdyn_ocvoicemails: {},
			msevtmgt_checkin_msfp_alerts: {},
			msevtmgt_checkin_msfp_surveyinvites: {},
			msevtmgt_checkin_msfp_surveyresponses: {},
			msevtmgt_checkin_PhoneCalls: {},
			msevtmgt_checkin_ServiceAppointments: {},
			msevtmgt_checkin_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsevtmgt_CheckIn_Quick_Create_Form = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_Checkintime: {},
			msevtmgt_CheckInType: {},
			msevtmgt_CheckOutTime: {},
			msevtmgt_Contact: {},
			msevtmgt_Event: {},
			msevtmgt_Name: {},
			msevtmgt_NumberOfQuestionsAsked: {},
			msevtmgt_RegistrationId: {},
			msevtmgt_registrationidfromqr: {},
			msevtmgt_SessionAttended: {},
			msevtmgt_SessionRegistration: {},
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
	OptionSet.msevtmgt_CheckIn = {
		msevtmgt_AudienceType : {
			Advanced: 100000003,
			General: 100000000,
			Intermediate: 100000002,
			Introductory: 100000001
		},
		msevtmgt_CheckInType : {
			Event_check_in: 100000001,
			Session_check_in: 100000000
		},
		msevtmgt_SessionType : {
			Brainstorming: 100000003,
			Breakout: 100000004,
			General: 100000002,
			Hands_onlab: 100000000,
			Keynote: 100000001,
			Training: 100000005
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