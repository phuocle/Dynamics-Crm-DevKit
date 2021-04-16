'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormRecord_Creation_and_Update_Rule = function(executionContext, defaultWebResourceName) {
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
		var grid = {
			ConvertRuleItemsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ConvertRule = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		SourceTypeCode : {
			Email: 2,
			Social_Monitoring: 1
		},
		StateCode : {
			Active: 1,
			Draft: 0
		},
		StatusCode : {
			Active: 2,
			Draft: 1
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