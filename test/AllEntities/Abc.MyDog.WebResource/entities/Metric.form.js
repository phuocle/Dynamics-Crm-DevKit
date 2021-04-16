'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormMetric_Information = function(executionContext, defaultWebResourceName) {
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
			AmountDataType: {},
			Description: {},
			IsAmount: {},
			IsStretchTracked: {},
			MetricLineItemSubGrid: {},
			Name: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					_379F3DB8_82DF_4E44_930A_C7A22C0E5206: {}
				}
			},
			Rollup_Attributes: {
				Section: {
					_CEBD8001_3DD4_4ABB_99DE_9A3F2FD250EB: {}
				}
			},
			description: {
				Section: {
					description: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var footer = {
			StateCode: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
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
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Metric = {
		AmountDataType : {
			Money: 0,
			Decimal: 1,
			Integer: 2
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
			Open: 0,
			Closed: 1
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