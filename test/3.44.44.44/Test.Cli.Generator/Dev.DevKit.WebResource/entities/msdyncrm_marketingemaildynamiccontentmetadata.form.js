'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_marketingemaildynamiccontentmetadata_Information = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_name: {},
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
			msdyncrm_marketingemaildynamiccontentmetadata_adx_inviteredemptions: {},
			msdyncrm_marketingemaildynamiccontentmetadata_adx_portalcomments: {},
			msdyncrm_marketingemaildynamiccontentmetadata_Appointments: {},
			msdyncrm_marketingemaildynamiccontentmetadata_Emails: {},
			msdyncrm_marketingemaildynamiccontentmetadata_Feedback: {},
			msdyncrm_marketingemaildynamiccontentmetadata_msdyn_bookingalerts: {},
			msdyncrm_marketingemaildynamiccontentmetadata_msdyn_copilottranscripts: {},
			msdyncrm_marketingemaildynamiccontentmetadata_msdyn_ocliveworkitems: {},
			msdyncrm_marketingemaildynamiccontentmetadata_msdyn_ocoutboundmessages: {},
			msdyncrm_marketingemaildynamiccontentmetadata_msdyn_ocsessions: {},
			msdyncrm_marketingemaildynamiccontentmetadata_msdyn_ocvoicemails: {},
			msdyncrm_marketingemaildynamiccontentmetadata_msfp_alerts: {},
			msdyncrm_marketingemaildynamiccontentmetadata_msfp_surveyinvites: {},
			msdyncrm_marketingemaildynamiccontentmetadata_msfp_surveyresponses: {},
			msdyncrm_marketingemaildynamiccontentmetadata_PhoneCalls: {},
			msdyncrm_marketingemaildynamiccontentmetadata_ServiceAppointments: {},
			msdyncrm_marketingemaildynamiccontentmetadata_Tasks: {}
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
	OptionSet.msdyncrm_marketingemaildynamiccontentmetadata = {
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