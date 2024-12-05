'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_linkedinleadmatchingstrategy_Information = function(executionContext, defaultWebResourceName) {
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
			Fields: {},
			msdyncrm_activated: {},
			msdyncrm_alwayscreatelead: {},
			msdyncrm_enablecontactcreation: {},
			msdyncrm_name: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			statecode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			Fields: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyncrm_linkedinleadmatchingstrategy_adx_inviteredemptions: {},
			msdyncrm_linkedinleadmatchingstrategy_adx_portalcomments: {},
			msdyncrm_linkedinleadmatchingstrategy_Appointments: {},
			msdyncrm_linkedinleadmatchingstrategy_Emails: {},
			msdyncrm_linkedinleadmatchingstrategy_Feedback: {},
			msdyncrm_linkedinleadmatchingstrategy_msdyn_bookingalerts: {},
			msdyncrm_linkedinleadmatchingstrategy_msdyn_copilottranscripts: {},
			msdyncrm_linkedinleadmatchingstrategy_msdyn_ocliveworkitems: {},
			msdyncrm_linkedinleadmatchingstrategy_msdyn_ocoutboundmessages: {},
			msdyncrm_linkedinleadmatchingstrategy_msdyn_ocsessions: {},
			msdyncrm_linkedinleadmatchingstrategy_msdyn_ocvoicemails: {},
			msdyncrm_linkedinleadmatchingstrategy_msfp_alerts: {},
			msdyncrm_linkedinleadmatchingstrategy_msfp_surveyinvites: {},
			msdyncrm_linkedinleadmatchingstrategy_msfp_surveyresponses: {},
			msdyncrm_linkedinleadmatchingstrategy_PhoneCalls: {},
			msdyncrm_linkedinleadmatchingstrategy_ServiceAppointments: {},
			msdyncrm_linkedinleadmatchingstrategy_Tasks: {}
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
	OptionSet.msdyncrm_linkedinleadmatchingstrategy = {
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