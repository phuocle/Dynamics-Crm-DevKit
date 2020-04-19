'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formmsdyn_taxcode_Information = function(executionContext, defaultWebResourceName) {
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
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			nav_msdyn_msdyn_taxcode_msdyn_taxcodedetail_TaxCode: {},
			nav_msdyn_msdyn_taxcode_msdyn_taxcodedetail_ParentTaxCode: {},
			nav_msdyn_msdyn_taxcode_account_SalesTaxCode: {},
			nav_msdyn_msdyn_taxcode_msdyn_workorder_TaxCode: {},
			navProcessSessions: {},
			nav_msdyn_msdyn_taxcode_msdyn_agreement_SalesTaxCode: {},
			nav_msdyn_msdyn_taxcode_msdyn_purchaseorderbill_TaxCode: {},
			nav_msdyn_msdyn_taxcode_msdyn_rma_TaxCode: {},
			nav_msdyn_msdyn_taxcode_msdyn_rtv_TaxCode: {}
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