'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormWebinar_configuration = function(executionContext, defaultWebResourceName) {
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
			ModifiedOn: {},
			msevtmgt_accesstoken: {},
			msevtmgt_AccessTokenKey: {},
			msevtmgt_AccessTokenSecret: {},
			msevtmgt_appURL: {},
			msevtmgt_authorized: {},
			msevtmgt_ClientId: {},
			msevtmgt_LastUpdateDateTime: {},
			msevtmgt_Message: {},
			msevtmgt_name: {},
			msevtmgt_providerservicestatus: {},
			msevtmgt_UpdateCredentials: {},
			msevtmgt_WebinarProviderId: {},
			msevtmgt_WebinarProviderId1: {},
			notescontrol: {},
			WebResource_consent: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			CredentialsTab: {
				Section: {
					CredentialsTab_section_1: {}
				}
			},
			GeneralTab: {
				Section: {
					_6B4BA965_7EE1_4292_B589_5D5EF8961D16: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			statecode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {
			Terms: {
				msevtmgt_privacypolicy: {},
				msevtmgt_termsofservice: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			msevtmgt_msevtmgt_webinarconfiguration_msevtmgt_webinartype_webinarconfiguration: {},
			msevtmgt_webinarconfiguration_adx_inviteredemptions: {},
			msevtmgt_webinarconfiguration_adx_portalcomments: {},
			msevtmgt_webinarconfiguration_Appointments: {},
			msevtmgt_webinarconfiguration_Emails: {},
			msevtmgt_webinarconfiguration_msdyn_bookingalerts: {},
			msevtmgt_webinarconfiguration_msdyn_copilottranscripts: {},
			msevtmgt_webinarconfiguration_msdyn_ocliveworkitems: {},
			msevtmgt_webinarconfiguration_msdyn_ocoutboundmessages: {},
			msevtmgt_webinarconfiguration_msdyn_ocsessions: {},
			msevtmgt_webinarconfiguration_msdyn_ocvoicemails: {},
			msevtmgt_webinarconfiguration_msevtmgt_event_Web: {},
			msevtmgt_webinarconfiguration_msevtmgt_session_Web: {},
			msevtmgt_webinarconfiguration_msfp_alerts: {},
			msevtmgt_webinarconfiguration_msfp_surveyinvites: {},
			msevtmgt_webinarconfiguration_msfp_surveyresponses: {},
			msevtmgt_webinarconfiguration_PhoneCalls: {},
			msevtmgt_webinarconfiguration_ServiceAppointments: {},
			msevtmgt_webinarconfiguration_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msevtmgt_webinarconfiguration = {
		msevtmgt_authorized : {
			No: 100000001,
			Token_expired: 100000002,
			Yes: 100000000
		},
		msevtmgt_providerservicestatus : {
			Forbidden: 100000002,
			Healthy: 100000000,
			Not_authenticated: 100000001,
			Unhealthy: 100000003
		},
		msevtmgt_UpdateCredentials : {
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