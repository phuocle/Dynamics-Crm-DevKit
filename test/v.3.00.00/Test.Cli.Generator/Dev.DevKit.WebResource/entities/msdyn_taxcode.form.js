'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_taxcode_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_ActasTaxGroup: {},
			msdyn_AgreementTaxable: {},
			msdyn_name: {},
			msdyn_ProductsTaxable: {},
			msdyn_ServicesTaxable: {},
			msdyn_TaxRate: {},
			notescontrol: {},
			OwnerId: {},
			taxcodedetailsgrid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			f1tab_taxinfo: {
				Section: {
				}
			},
			taxcodedetailstab: {
				Section: {
					taxcodedetailssection: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var footer = {
			statecode: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			taxcodedetailsgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_msdyn_taxcode_account_SalesTaxCode: {},
			nav_msdyn_msdyn_taxcode_msdyn_agreement_SalesTaxCode: {},
			nav_msdyn_msdyn_taxcode_msdyn_purchaseorderbill_TaxCode: {},
			nav_msdyn_msdyn_taxcode_msdyn_rma_TaxCode: {},
			nav_msdyn_msdyn_taxcode_msdyn_rtv_TaxCode: {},
			nav_msdyn_msdyn_taxcode_msdyn_taxcodedetail_ParentTaxCode: {},
			nav_msdyn_msdyn_taxcode_msdyn_taxcodedetail_TaxCode: {},
			nav_msdyn_msdyn_taxcode_msdyn_workorder_TaxCode: {},
			navProcessSessions: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormTax_Code_Quick_Create_FS_5x5 = function(executionContext, defaultWebResourceName) {
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
			msdyn_AgreementTaxable: {},
			msdyn_name: {},
			msdyn_ProductsTaxable: {},
			msdyn_ServicesTaxable: {},
			msdyn_TaxRate: {}
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
	OptionSet.msdyn_taxcode = {
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