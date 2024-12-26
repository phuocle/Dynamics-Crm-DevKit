'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_linkedinaccount_Information = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_defaultleadowner: {},
			msdyncrm_enabledforsync: {},
			msdyncrm_lastsynctimestamprollup: {},
			msdyncrm_name: {},
			msdyncrm_syncstatus: {},
			UserProfiles: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyncrm_statusdetails: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			UserProfiles: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyncrm_linkedinaccount_adx_inviteredemptions: {},
			msdyncrm_linkedinaccount_adx_portalcomments: {},
			msdyncrm_linkedinaccount_Appointments: {},
			msdyncrm_linkedinaccount_Emails: {},
			msdyncrm_linkedinaccount_Feedback: {},
			msdyncrm_linkedinaccount_msdyn_bookingalerts: {},
			msdyncrm_linkedinaccount_msdyn_copilottranscripts: {},
			msdyncrm_linkedinaccount_msdyn_ocliveworkitems: {},
			msdyncrm_linkedinaccount_msdyn_ocoutboundmessages: {},
			msdyncrm_linkedinaccount_msdyn_ocsessions: {},
			msdyncrm_linkedinaccount_msdyn_ocvoicemails: {},
			msdyncrm_linkedinaccount_msfp_alerts: {},
			msdyncrm_linkedinaccount_msfp_surveyinvites: {},
			msdyncrm_linkedinaccount_msfp_surveyresponses: {},
			msdyncrm_linkedinaccount_PhoneCalls: {},
			msdyncrm_linkedinaccount_ServiceAppointments: {},
			msdyncrm_linkedinaccount_Tasks: {},
			msdyncrm_msdyncrm_linkedinaccount_msdyncrm_linkedincampaign_LinkedInAccount: {},
			msdyncrm_msdyncrm_linkedinaccount_msdyncrm_linkedinform_LinkedInParentAccount: {}
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
	OptionSet.msdyncrm_linkedinaccount = {
		msdyncrm_campaignsyncstatus : {
			Active: 192350001,
			Forbidden: 192350003,
			No_Active_Campaigns_Available: 192350002,
			Pending_Synchronization: 192350000
		},
		msdyncrm_syncstatus : {
			Active: 192350001,
			Forbidden: 192350004,
			No_Forms_Available: 192350003,
			Not_Syncing: 192350002,
			Pending_Synchronization: 192350000
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