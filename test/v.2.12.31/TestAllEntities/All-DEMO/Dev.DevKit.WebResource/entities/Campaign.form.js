'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormCampaign = function(executionContext, defaultWebResourceName) {
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
			DETAILS: {
				Section: {
					ADMINISTRATION: {},
					DESCRIPTION: {},
					FINANCIALS: {},
					RESPONSES: {}
				}
			},
			SUMMARY: {
				Section: {
					CAMPAIGN: {},
					CAMPAIGN_ACTIVITIES: {},
					LEADS: {},
					LISTS: {},
					OFFER: {},
					RELATED_PANE: {},
					SCHEDULES: {}
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
		var grid = {
			Lists: {},
			Leads: {},
			Activities: {},
			Responses: {},
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
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Campaign = {
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
			Canceled: 4,
			Completed: 3,
			Inactive: 6,
			Launched: 2,
			Proposed: 0,
			Ready_To_Launch: 1,
			Suspended: 5
		},
		TypeCode : {
			Advertisement: 1,
			Co_branding: 4,
			Direct_Marketing: 2,
			Event: 3,
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