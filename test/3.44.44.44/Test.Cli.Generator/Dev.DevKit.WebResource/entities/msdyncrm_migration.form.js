'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_migration_Information = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_migration_adx_inviteredemptions: {},
			msdyncrm_migration_adx_portalcomments: {},
			msdyncrm_migration_Appointments: {},
			msdyncrm_migration_Emails: {},
			msdyncrm_migration_msdyn_bookingalerts: {},
			msdyncrm_migration_msdyn_copilottranscripts: {},
			msdyncrm_migration_msdyn_ocliveworkitems: {},
			msdyncrm_migration_msdyn_ocoutboundmessages: {},
			msdyncrm_migration_msdyn_ocsessions: {},
			msdyncrm_migration_msdyn_ocvoicemails: {},
			msdyncrm_migration_msfp_alerts: {},
			msdyncrm_migration_msfp_surveyinvites: {},
			msdyncrm_migration_msfp_surveyresponses: {},
			msdyncrm_migration_PhoneCalls: {},
			msdyncrm_migration_ServiceAppointments: {},
			msdyncrm_migration_Tasks: {}
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
	OptionSet.msdyncrm_migration = {
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