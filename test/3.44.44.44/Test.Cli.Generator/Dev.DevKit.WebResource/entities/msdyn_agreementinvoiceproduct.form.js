'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormAgreement_Invoice_Product_Mobile = function(executionContext, defaultWebResourceName) {
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
			msdyn_Agreement: {},
			msdyn_AgreementInvoiceSetup: {},
			msdyn_LineOrder: {},
			msdyn_name: {},
			msdyn_PriceList: {},
			msdyn_Product: {},
			msdyn_Quantity: {},
			msdyn_Unit: {},
			msdyn_UnitAmount: {},
			notescontrol: {},
			OwnerId: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			fstab_general: {
				Section: {
					_409A2FFD_D248_4872_A23A_32EFC094082B: {},
					fstab_general_section_2: {},
					fstab_general_section_3: {},
					fstab_general_section_products_relates_to: {},
					fstab_general_section_quantity_sale_amount: {}
				}
			},
			fstab_other: {
				Section: {
					fstab_other_section: {},
					fstab_other_section_2: {},
					fstab_other_section_3: {}
				}
			},
			fstab_sub_grids: {
				Section: {
					fstab_sub_grids_section: {},
					fstab_sub_grids_section_2: {},
					fstab_sub_grids_section_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_agreementinvoiceproduct_adx_inviteredemptions: {},
			msdyn_agreementinvoiceproduct_adx_portalcomments: {},
			msdyn_agreementinvoiceproduct_Appointments: {},
			msdyn_agreementinvoiceproduct_Emails: {},
			msdyn_agreementinvoiceproduct_msdyn_bookingalerts: {},
			msdyn_agreementinvoiceproduct_msdyn_copilottranscripts: {},
			msdyn_agreementinvoiceproduct_msdyn_ocliveworkitems: {},
			msdyn_agreementinvoiceproduct_msdyn_ocoutboundmessages: {},
			msdyn_agreementinvoiceproduct_msdyn_ocsessions: {},
			msdyn_agreementinvoiceproduct_msdyn_ocvoicemails: {},
			msdyn_agreementinvoiceproduct_msfp_alerts: {},
			msdyn_agreementinvoiceproduct_msfp_surveyinvites: {},
			msdyn_agreementinvoiceproduct_msfp_surveyresponses: {},
			msdyn_agreementinvoiceproduct_PhoneCalls: {},
			msdyn_agreementinvoiceproduct_ServiceAppointments: {},
			msdyn_agreementinvoiceproduct_Tasks: {},
			msdyn_msdyn_agreementinvoiceproduct_invoicedetail_AgreementInvoiceProduct: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyn_agreementinvoiceproduct_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Agreement: {},
			msdyn_AgreementInvoiceSetup: {},
			msdyn_LineOrder: {},
			msdyn_name: {},
			msdyn_PriceList: {},
			msdyn_Product: {},
			msdyn_Quantity: {},
			msdyn_Unit: {},
			msdyn_UnitAmount: {},
			notescontrol: {},
			OwnerId: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_3: {
				Section: {
					tab_3_section_1: {}
				}
			},
			tab_4: {
				Section: {
					tab_4_section_1: {}
				}
			},
			tab_5: {
				Section: {
					tab_5_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_agreementinvoiceproduct_adx_inviteredemptions: {},
			msdyn_agreementinvoiceproduct_adx_portalcomments: {},
			msdyn_agreementinvoiceproduct_Appointments: {},
			msdyn_agreementinvoiceproduct_Emails: {},
			msdyn_agreementinvoiceproduct_msdyn_bookingalerts: {},
			msdyn_agreementinvoiceproduct_msdyn_copilottranscripts: {},
			msdyn_agreementinvoiceproduct_msdyn_ocliveworkitems: {},
			msdyn_agreementinvoiceproduct_msdyn_ocoutboundmessages: {},
			msdyn_agreementinvoiceproduct_msdyn_ocsessions: {},
			msdyn_agreementinvoiceproduct_msdyn_ocvoicemails: {},
			msdyn_agreementinvoiceproduct_msfp_alerts: {},
			msdyn_agreementinvoiceproduct_msfp_surveyinvites: {},
			msdyn_agreementinvoiceproduct_msfp_surveyresponses: {},
			msdyn_agreementinvoiceproduct_PhoneCalls: {},
			msdyn_agreementinvoiceproduct_ServiceAppointments: {},
			msdyn_agreementinvoiceproduct_Tasks: {},
			msdyn_msdyn_agreementinvoiceproduct_invoicedetail_AgreementInvoiceProduct: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_agreementinvoiceproduct = {
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