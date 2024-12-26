'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsevtmgt_eventpurchasepass_Information = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_name: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msevtmgt_eventpurchasepass_adx_inviteredemptions: {},
			msevtmgt_eventpurchasepass_adx_portalcomments: {},
			msevtmgt_eventpurchasepass_Appointments: {},
			msevtmgt_eventpurchasepass_Emails: {},
			msevtmgt_eventpurchasepass_msdyn_bookingalerts: {},
			msevtmgt_eventpurchasepass_msdyn_copilottranscripts: {},
			msevtmgt_eventpurchasepass_msdyn_ocliveworkitems: {},
			msevtmgt_eventpurchasepass_msdyn_ocoutboundmessages: {},
			msevtmgt_eventpurchasepass_msdyn_ocsessions: {},
			msevtmgt_eventpurchasepass_msdyn_ocvoicemails: {},
			msevtmgt_eventpurchasepass_msfp_alerts: {},
			msevtmgt_eventpurchasepass_msfp_surveyinvites: {},
			msevtmgt_eventpurchasepass_msfp_surveyresponses: {},
			msevtmgt_eventpurchasepass_PhoneCalls: {},
			msevtmgt_eventpurchasepass_ServiceAppointments: {},
			msevtmgt_eventpurchasepass_Tasks: {}
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
	OptionSet.msevtmgt_eventpurchasepass = {
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