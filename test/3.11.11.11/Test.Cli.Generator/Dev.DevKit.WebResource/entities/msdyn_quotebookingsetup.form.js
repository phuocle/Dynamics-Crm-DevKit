'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_quotebookingsetup_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_name: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyn_quotebookingsetup_Information2 = function(executionContext, defaultWebResourceName) {
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
			IncidentsGrid: {},
			msdyn_autogenerateworkorder: {},
			msdyn_description: {},
			msdyn_EstimatedCost: {},
			msdyn_EstimatedMargin: {},
			msdyn_EstimatedMarginPerWO: {},
			msdyn_EstimatedProductCost: {},
			msdyn_EstimatedProductRevenue: {},
			msdyn_EstimatedRevenue: {},
			msdyn_EstimatedRevenuePerWO: {},
			msdyn_EstimatedServiceCost: {},
			msdyn_EstimatedServiceRevenue: {},
			msdyn_Latitude: {},
			msdyn_Longitude: {},
			msdyn_name: {},
			msdyn_quote: {},
			msdyn_QuoteDetailId: {},
			msdyn_recurrencesettings: {},
			msdyn_WorkLocation: {},
			msdyn_workordertype: {},
			OwnerId: {},
			productsGrid: {},
			ServicesGrid: {},
			ServiceTasksGrid: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_23ECC851_0E7D_4CE2_8482_97AFD671FD2F: {
				Section: {
					_985F1B59_B0DB_43C9_804C_EF1D9C6C6A74: {},
					IncidentsSection: {}
				}
			},
			MarginTab: {
				Section: {
					_23ECC851_0E7D_4CE2_8482_97AFD671FD2F_SECTION_4: {},
					EstimatedMarginSection: {},
					EstimatedRevenue: {}
				}
			},
			ProductsAndServicesTab: {
				Section: {
					productsSection: {},
					serviceSection: {}
				}
			},
			ServiceTaskTab: {
				Section: {
					tab_2_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			IncidentsGrid: {},
			productsGrid: {},
			ServicesGrid: {},
			ServiceTasksGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_msdyn_quotebookingsetup_msdyn_quotebookingincident_QuoteBookingSetup: {},
			nav_msdyn_msdyn_quotebookingsetup_msdyn_quotebookingproduct_QuoteBookingSetup: {},
			nav_msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservice_QuoteBookingSetup: {},
			nav_msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservicetask_QuoteBookingSetup: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyn_quotebookingsetup_Information3 = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			msdyn_description: {},
			msdyn_name: {},
			msdyn_QuoteDetailId: {},
			msdyn_workordertype: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_quotebookingsetup = {
		msdyn_WorkLocation : {
			Facility: 690970001,
			Location_Agnostic: 690970002,
			Onsite: 690970000
		},
		OwnerIdType : {
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