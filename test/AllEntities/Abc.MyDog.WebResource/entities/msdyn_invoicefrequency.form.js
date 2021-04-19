'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.Formmsdyn_invoicefrequency_Project_Information = function(executionContext, defaultWebResourceName) {
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
			InvoiceFrequencyDetails: {},
			InvoiceFrequencyDetails_1_Grid: {},
			InvoiceFrequencyDetails_2_Grid: {},
			msdyn_daysofrun: {},
			msdyn_name: {},
			msdyn_period: {},
			msdyn_runspermonth: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_7D8DF25F_4CE4_4FF8_B464_8D31B36593DF: {
				Section: {
					DetailsSection: {},
					_7D8DF25F_4CE4_4FF8_B464_8D31B36593DF_SECTION_2: {}
				}
			},
			InvoiceFrequencyDetails_Day: {
				Section: {
					tab_3_section_1: {}
				}
			},
			InvoiceFrequencyDetails_Weekday: {
				Section: {
					tab_2_section_1: {}
				}
			},
			InvoiceFrequencyDetails_Weekly: {
				Section: {
					tab_4_section_1: {}
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
			InvoiceFrequencyDetails_1_Grid: {},
			InvoiceFrequencyDetails: {},
			InvoiceFrequencyDetails_2_Grid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_msdyn_invoicefrequency_quotedetail_invoicefrequency: {},
			nav_msdyn_msdyn_invoicefrequency_salesorderdetail_invoicefrequency: {},
			nav_msdyn_msdyn_invoicefrequency_msdyn_invoicefrequencydetail_invoicefrequency: {},
			nav_msdyn_msdyn_invoicefrequency_msdyn_projectparameter_invoicefrequency: {}
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
	OptionSet.msdyn_invoicefrequency = {
		msdyn_daysofrun : {
			Day_of_period: 192350000,
			Weekday_of_period: 192350001
		},
		msdyn_period : {
			Biweekly: 192350002,
			Monthly: 192350001,
			Weekly: 192350000
		},
		msdyn_runspermonth : {
			_1: 1,
			_2: 2,
			_3: 3,
			_4: 4
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