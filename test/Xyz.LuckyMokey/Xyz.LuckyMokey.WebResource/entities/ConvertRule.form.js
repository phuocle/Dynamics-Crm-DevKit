'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormRecord_Creation_and_Update_Rule = function(executionContext, defaultWebResourceName) {
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
			AllowUnknownSender: {},
			ChannelPropertyGroupId: {},
			CheckActiveEntitlement: {},
			CheckBlockedSocialProfile: {},
			CheckDirectMessages: {},
			CheckIfResolved: {},
			ConvertRuleItemsGrid: {},
			Name: {},
			OwnerId: {},
			QueueId: {},
			ResolvedSince: {},
			ResponseTemplateId: {},
			SendAutomaticResponse: {},
			SourceChannelTypeCode: {},
			SourceTypeCode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					ConvertToCaseSettings: {},
					ChannelProperties: {},
					SocialMonitoringCaseConditions: {},
					EmailCaseConditions: {},
					AutoResponseSettings: {},
					CaseDetails: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
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
	LuckyMokey.FormRecord_Creation_and_Update_Rule_UCI = function(executionContext, defaultWebResourceName) {
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
			AllowUnknownSender: {},
			CheckActiveEntitlement: {},
			CheckIfResolved: {},
			ConvertRuleItemsGrid: {},
			ConvertRuleType: {},
			Name: {},
			OwnerId: {},
			QueueId: {},
			ResolvedSince: {},
			ResponseTemplateId: {},
			SendAutomaticResponse: {},
			SourceChannelTypeCode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Basic: {
				Section: {
					Details: {},
					Conditions_To_Evaluate: {},
					Frequently_Used_Configurations: {},
					Basic_empty_section: {}
				}
			},
			Advanced: {
				Section: {
					Before_Evaluating_Conditions: {},
					Advanced_Settings: {},
					Advanced_empty_section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			CreatedOn: {},
			StatusCode: {}
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
	OptionSet.ConvertRule = {
		ComponentState : {
			Published: 0,
			Unpublished: 1,
			Deleted: 2,
			Deleted_Unpublished: 3
		},
		SourceTypeCode : {
			Social_Monitoring: 1,
			Email: 2
		},
		StateCode : {
			Draft: 0,
			Active: 1
		},
		StatusCode : {
			Draft: 1,
			Active: 2
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