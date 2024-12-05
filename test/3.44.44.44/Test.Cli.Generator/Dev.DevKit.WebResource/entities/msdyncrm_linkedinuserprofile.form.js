'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_linkedinuserprofile_Information = function(executionContext, defaultWebResourceName) {
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
			CreatedOn: {},
			LinkedInAccounts: {},
			LinkedInCampaignsGrid: {},
			LinkedInFormsGrid: {},
			msdyncrm_authorized: {},
			msdyncrm_expiresin: {},
			msdyncrm_LastSyncDate: {},
			msdyncrm_linkedinauthorizedname: {},
			msdyncrm_name: {},
			msdyncrm_SyncStatus: {},
			WebResource_Spacer: {},
			WebResource_UserProfileStatus: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			GeneralTab: {
				Section: {
					GeneralTab_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var grid = {
			LinkedInAccounts: {},
			LinkedInCampaignsGrid: {},
			LinkedInFormsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyncrm_linkedinuserprofile_adx_inviteredemptions: {},
			msdyncrm_linkedinuserprofile_adx_portalcomments: {},
			msdyncrm_linkedinuserprofile_Appointments: {},
			msdyncrm_linkedinuserprofile_Emails: {},
			msdyncrm_linkedinuserprofile_Feedback: {},
			msdyncrm_linkedinuserprofile_msdyn_bookingalerts: {},
			msdyncrm_linkedinuserprofile_msdyn_copilottranscripts: {},
			msdyncrm_linkedinuserprofile_msdyn_ocliveworkitems: {},
			msdyncrm_linkedinuserprofile_msdyn_ocoutboundmessages: {},
			msdyncrm_linkedinuserprofile_msdyn_ocsessions: {},
			msdyncrm_linkedinuserprofile_msdyn_ocvoicemails: {},
			msdyncrm_linkedinuserprofile_msfp_alerts: {},
			msdyncrm_linkedinuserprofile_msfp_surveyinvites: {},
			msdyncrm_linkedinuserprofile_msfp_surveyresponses: {},
			msdyncrm_linkedinuserprofile_PhoneCalls: {},
			msdyncrm_linkedinuserprofile_ServiceAppointments: {},
			msdyncrm_linkedinuserprofile_Tasks: {},
			msdyncrm_userprofile_linkedinformsubmission: {}
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
	OptionSet.msdyncrm_linkedinuserprofile = {
		msdyncrm_authorized : {
			Authorized: 192350001,
			Expired: 192350002,
			Not_Authorized: 192350000,
			Reauthorizing: 192350003
		},
		msdyncrm_SyncStatus : {
			Active: 192350002,
			No_Accounts_Available: 192350003,
			Not_Syncing: 192350000,
			Syncing_Accounts: 192350001
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