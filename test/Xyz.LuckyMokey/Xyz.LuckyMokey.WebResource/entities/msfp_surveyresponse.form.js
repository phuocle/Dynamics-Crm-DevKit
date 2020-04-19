'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formmsfp_surveyresponse_Information = function(executionContext, defaultWebResourceName) {
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
			From: {},
			IFRAME_SurveyResponse: {},
			msfp_embedcontextparameters: {},
			msfp_language: {},
			msfp_locale: {},
			msfp_name: {},
			msfp_npsscore: {},
			msfp_otherproperties: {},
			msfp_respondent: {},
			msfp_respondentemailaddress: {},
			msfp_sentiment: {},
			msfp_sourcesurveyidentifier: {},
			msfp_submitdate: {},
			msfp_surveyid: {},
			msfp_surveyinviteid: {},
			msfp_surveyresponseurl: {},
			OwnerId: {},
			QuestionResponses: {},
			RegardingObjectId: {},
			ScheduledStart: {},
			Subject: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_FE5BE043_870F_4D0F_B79F_195DCBA93F38: {
				Section: {
					General: {},
					_FE5BE043_870F_4D0F_B79F_195DCBA93F38_SECTION_4: {},
					QuestionResponses: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			PriorityCode: {},
			ScheduledEnd: {},
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
	OptionSet.msfp_surveyresponse = {
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
		msfp_sentiment : {
			Positive: 647390000,
			Neutral: 647390001,
			Negative: 647390002
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