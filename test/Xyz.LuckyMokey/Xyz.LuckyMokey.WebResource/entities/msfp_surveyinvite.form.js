'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formmsfp_surveyinvite_Information = function(executionContext, defaultWebResourceName) {
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
			msfp_channel: {},
			msfp_inviteemailaddress: {},
			msfp_invitesentdate: {},
			msfp_invitestatus: {},
			msfp_otherproperties: {},
			msfp_respondent: {},
			msfp_sourcesurveyidentifier: {},
			msfp_surveyid: {},
			msfp_surveyinvitationurl: {},
			OwnerId: {},
			RegardingObjectId: {},
			StatusCode: {},
			Subject: {},
			To: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_9556FAF0_FB19_453F_A229_3F55E2787722: {
				Section: {
					_D2018D44_DE86_424D_889D_319B33BF6825: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			StateCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msfp_surveyinvite = {
		Community : {
			Facebook: 1,
			Twitter: 2,
			Other: 0
		},
		DeliveryPriorityCode : {
			Low: 0,
			Normal: 1,
			High: 2
		},
		InstanceTypeCode : {
			Not_Recurring: 0,
			Recurring_Master: 1,
			Recurring_Instance: 2,
			Recurring_Exception: 3,
			Recurring_Future_Exception: 4
		},
		msfp_channel : {
			Email: 647390000,
			Flow: 647390001
		},
		msfp_invitestatus : {
			Queued: 647390000,
			UnSubscribed: 647390001,
			Sent: 647390002,
			Responded: 647390003,
			Failed: 647390004,
			Created: 647390005,
			Read: 647390006,
			Started: 647390007,
			Delayed: 647390008
		},
		PriorityCode : {
			Low: 0,
			Normal: 1,
			High: 2
		},
		StateCode : {
			Open: 0,
			Completed: 1,
			Canceled: 2,
			Scheduled: 3
		},
		StatusCode : {
			Open: 1,
			Completed: 2,
			Canceled: 3,
			Scheduled: 4
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