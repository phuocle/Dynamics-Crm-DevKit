'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormCampaign = function(executionContext, defaultWebResourceName) {
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
			Activities: {},
			ActualEnd: {},
			ActualStart: {},
			BudgetedCost: {},
			CodeName: {},
			CreatedOn: {},
			Description: {},
			ExpectedResponse: {},
			Leads: {},
			Lists: {},
			ModifiedBy: {},
			ModifiedOn: {},
			Name: {},
			notescontrol: {},
			Objective: {},
			OtherCost: {},
			OwnerId: {},
			ProposedEnd: {},
			ProposedStart: {},
			Responses: {},
			TmpRegardingObjectId: {},
			TotalActualCost: {},
			TotalCampaignActivityActualCost: {},
			TransactionCurrencyId: {},
			TypeCode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			SUMMARY: {
				Section: {
					CAMPAIGN: {},
					SCHEDULES: {},
					OFFER: {},
					RELATED_PANE: {},
					LISTS: {},
					LEADS: {},
					CAMPAIGN_ACTIVITIES: {}
				}
			},
			DETAILS: {
				Section: {
					FINANCIALS: {},
					ADMINISTRATION: {},
					RESPONSES: {},
					DESCRIPTION: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			ExpectedRevenue: {},
			IsTemplate: {},
			OwnerId: {},
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
	OptionSet.Campaign = {
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
			Proposed: 0,
			Ready_To_Launch: 1,
			Launched: 2,
			Completed: 3,
			Canceled: 4,
			Suspended: 5,
			Inactive: 6
		},
		TypeCode : {
			Advertisement: 1,
			Direct_Marketing: 2,
			Event: 3,
			Co_branding: 4,
			Other: 5
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