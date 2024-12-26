'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormSession_registration = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_ContactId: {},
			msevtmgt_Event: {},
			msevtmgt_iscanceled: {},
			msevtmgt_Name: {},
			msevtmgt_RegistrationID: {},
			msevtmgt_SessionId: {},
			msevtmgt_SessionsByAudienceType: {},
			msevtmgt_SessionsBySessionType: {},
			msevtmgt_WebinarRegistrationID: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_613E4BEB_EBC4_466F_BB00_F8667A0D2D6A: {
				Section: {
					_97B8428E_9A49_423C_BCE7_2144713D6598: {}
				}
			},
			SessionBreakdownTab: {
				Section: {
					Session_by_Audience_Type_section: {},
					Sessions_by_Session_Type_section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			CreatedOn: {},
			msevtmgt_Name: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			msevtmgt_SessionsByAudienceType: {},
			msevtmgt_SessionsBySessionType: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msevtmgt_sessionregistration_adx_inviteredemptions: {},
			msevtmgt_sessionregistration_adx_portalcomments: {},
			msevtmgt_sessionregistration_Appointments: {},
			msevtmgt_sessionregistration_Emails: {},
			msevtmgt_sessionregistration_msdyn_bookingalerts: {},
			msevtmgt_sessionregistration_msdyn_copilottranscripts: {},
			msevtmgt_sessionregistration_msdyn_ocliveworkitems: {},
			msevtmgt_sessionregistration_msdyn_ocoutboundmessages: {},
			msevtmgt_sessionregistration_msdyn_ocsessions: {},
			msevtmgt_sessionregistration_msdyn_ocvoicemails: {},
			msevtmgt_SessionRegistration_msevtmgt_CheckIn_SessionRegistration: {},
			msevtmgt_sessionregistration_msfp_alerts: {},
			msevtmgt_sessionregistration_msfp_surveyinvites: {},
			msevtmgt_sessionregistration_msfp_surveyresponses: {},
			msevtmgt_sessionregistration_PhoneCalls: {},
			msevtmgt_sessionregistration_ServiceAppointments: {},
			msevtmgt_sessionregistration_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormSession_registration_quick_create = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_ContactId: {},
			msevtmgt_Event: {},
			msevtmgt_Name: {},
			msevtmgt_RegistrationID: {},
			msevtmgt_SessionId: {}
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
	OptionSet.msevtmgt_SessionRegistration = {
		msevtmgt_publishingstate : {
			Failed_to_publish: 100000003,
			Parent_webinar_failed: 100000002,
			Pending: 100000000,
			Published: 100000001,
			Webinar_provider_error: 100000004
		},
		msevtmgt_SyncedWithProvider : {
			No: 100000001,
			Yes: 100000002
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