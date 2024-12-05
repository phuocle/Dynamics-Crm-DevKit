'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_uicconfig_Information = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_StorageAccountAccessKey: {},
			msdyncrm_StorageAccountName: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyncrm_uicconfig_adx_inviteredemptions: {},
			msdyncrm_uicconfig_adx_portalcomments: {},
			msdyncrm_uicconfig_Appointments: {},
			msdyncrm_uicconfig_Emails: {},
			msdyncrm_uicconfig_msdyn_bookingalerts: {},
			msdyncrm_uicconfig_msdyn_copilottranscripts: {},
			msdyncrm_uicconfig_msdyn_ocliveworkitems: {},
			msdyncrm_uicconfig_msdyn_ocoutboundmessages: {},
			msdyncrm_uicconfig_msdyn_ocsessions: {},
			msdyncrm_uicconfig_msdyn_ocvoicemails: {},
			msdyncrm_uicconfig_msfp_alerts: {},
			msdyncrm_uicconfig_msfp_surveyinvites: {},
			msdyncrm_uicconfig_msfp_surveyresponses: {},
			msdyncrm_uicconfig_PhoneCalls: {},
			msdyncrm_uicconfig_ServiceAppointments: {},
			msdyncrm_uicconfig_Tasks: {}
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
	OptionSet.msdyncrm_uicconfig = {
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