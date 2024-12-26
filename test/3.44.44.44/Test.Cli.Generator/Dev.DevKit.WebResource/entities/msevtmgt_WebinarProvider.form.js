'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormWebinar_provider = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_base_service_url: {},
			msevtmgt_clientid: {},
			msevtmgt_clientsecret: {},
			msevtmgt_MaxDurationInMinutes: {},
			msevtmgt_name: {},
			msevtmgt_privacypolicy: {},
			msevtmgt_termsofservice: {},
			msevtmgt_updatecredentials: {},
			notescontrol: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			GeneralTab: {
				Section: {
					CredentialsSection: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msevtmgt_msevtmgt_webinarprovider_msevtmgt_webinartype_WebinarProviderId: {},
			msevtmgt_webinarprovider_adx_inviteredemptions: {},
			msevtmgt_webinarprovider_adx_portalcomments: {},
			msevtmgt_webinarprovider_Appointments: {},
			msevtmgt_webinarprovider_Emails: {},
			msevtmgt_webinarprovider_msdyn_bookingalerts: {},
			msevtmgt_webinarprovider_msdyn_copilottranscripts: {},
			msevtmgt_webinarprovider_msdyn_ocliveworkitems: {},
			msevtmgt_webinarprovider_msdyn_ocoutboundmessages: {},
			msevtmgt_webinarprovider_msdyn_ocsessions: {},
			msevtmgt_webinarprovider_msdyn_ocvoicemails: {},
			msevtmgt_webinarprovider_msevtmgt_webinarconf_Prov: {},
			msevtmgt_webinarprovider_msfp_alerts: {},
			msevtmgt_webinarprovider_msfp_surveyinvites: {},
			msevtmgt_webinarprovider_msfp_surveyresponses: {},
			msevtmgt_webinarprovider_PhoneCalls: {},
			msevtmgt_webinarprovider_ServiceAppointments: {},
			msevtmgt_webinarprovider_Tasks: {},
			msevtmgt_webinarprovider_webinarconsent: {}
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
	OptionSet.msevtmgt_WebinarProvider = {
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