'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormCompetitor = function(executionContext, defaultWebResourceName) {
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
			Address1_Composite: {},
			ChartTest: {},
			Name: {},
			notescontrol: {},
			OpportunityCurrentFiscalYear: {},
			Strengths: {},
			TransactionCurrencyId: {},
			Weaknesses: {},
			WebSiteUrl: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			COMPETITOR: {
				Section: {
					Competitor_Information: {},
					notes: {},
					analysis: {}
				}
			},
			opportunities: {
				Section: {
					Opportunity: {},
					OpportunitiesChart: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			ReportedRevenue: {},
			TickerSymbol: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			navOpportunities: {},
			navConnections: {},
			navAsyncOperations: {},
			navProcessSessions: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	LuckyMokey.FormCompetitor_Information = function(executionContext, defaultWebResourceName) {
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
			Address1_City: {},
			Address1_Country: {},
			Address1_Line1: {},
			Address1_Line2: {},
			Address1_Line3: {},
			Address1_PostalCode: {},
			Address1_StateOrProvince: {},
			KeyProduct: {},
			Name: {},
			notescontrol: {},
			Opportunities: {},
			Overview: {},
			ReportedRevenue: {},
			StockExchange: {},
			Strengths: {},
			Threats: {},
			TransactionCurrencyId: {},
			Weaknesses: {},
			WebSiteUrl: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					competitor_information: {},
					address: {}
				}
			},
			analysis: {
				Section: {
					analysis: {}
				}
			},
			notes: {
				Section: {
					notes: {}
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
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Competitor = {
		Address1_AddressTypeCode : {
			Default_Value: 1
		},
		Address1_ShippingMethodCode : {
			Default_Value: 1
		},
		Address2_AddressTypeCode : {
			Default_Value: 1
		},
		Address2_ShippingMethodCode : {
			Default_Value: 1
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