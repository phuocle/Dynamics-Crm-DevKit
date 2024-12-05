'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_linkedincampaign_Information = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_CampaignType: {},
			msdyncrm_EndDate: {},
			msdyncrm_LinkedInAccount: {},
			msdyncrm_linkedinid: {},
			msdyncrm_LinkedInStatus: {},
			msdyncrm_name: {},
			msdyncrm_StartDate: {},
			msdyncrm_totalleads: {},
			msdyncrm_totalsubmissions: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyncr2_msdyncrm_linkedincampaign_msdyncrm_customerjourney_LinkedInCampaign: {},
			msdyncrm_msdyncrm_linkedincampaign_lead_LinkedInCampaign: {},
			msdyncrm_msdyncrm_linkedincampaign_msdyncrm_linkedincampaignactivity_campaignid: {},
			msdyncrm_msdyncrm_linkedincampaign_msdyncrm_linkedinformsubmission_LinkedInCampaign: {}
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
	OptionSet.msdyncrm_linkedincampaign = {
		msdyncrm_CampaignType : {
			LinkedIn_Dynamic_Ad: 192350003,
			LinkedIn_Sponsored_Content: 192350001,
			LinkedIn_Sponsored_InMail: 192350002,
			Text_Advertisement: 192350000
		},
		msdyncrm_LinkedInStatus : {
			Active: 192350000,
			Archived: 192350002,
			Canceled: 192350004,
			Completed: 192350003,
			Draft: 192350005,
			Paused: 192350001
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