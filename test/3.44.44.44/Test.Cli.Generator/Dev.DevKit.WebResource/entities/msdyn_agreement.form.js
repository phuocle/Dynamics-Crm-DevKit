'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_agreement_Agreement = function(executionContext, defaultWebResourceName) {
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
			bookingsgrid: {},
			ContractLines: {},
			invoicegrid: {},
			msdyn_AgreementDetails: {},
			msdyn_AgreementRecordGeneration: {},
			msdyn_AgreementRecordGeneration1: {},
			msdyn_BillingAccount: {},
			msdyn_DateCanceled: {},
			msdyn_Description: {},
			msdyn_Duration: {},
			msdyn_EndDate: {},
			msdyn_name: {},
			msdyn_OriginatingAgreement: {},
			msdyn_PriceList: {},
			msdyn_SalesTaxCode: {},
			msdyn_ServiceAccount: {},
			msdyn_ServiceTerritory: {},
			msdyn_StartDate: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_Taxable: {},
			notescontrol: {},
			OwnerId: {},
			QuotesLinesGrid: {},
			WebResource_AgreementRecordGeneration_TimeField: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_4C8BEF3B_E06C_4411_B312_59F180556E4D: {
				Section: {
					_3568BE1D_2A14_40A9_B8CD_B04E3806E3E2: {},
					_4C8BEF3B_E06C_4411_B312_59F180556E4D_SECTION_2: {},
					_4C8BEF3B_E06C_4411_B312_59F180556E4D_SECTION_3: {},
					tab_1_section_2: {},
					tab_4_section_1: {}
				}
			},
			_7A6686D3_72AD_4724_9C46_5BA3C5FAE32D: {
				Section: {
					_2BCF1BE9_1CEB_434D_9866_6486738F2ACC: {},
					_7A6686D3_72AD_4724_9C46_5BA3C5FAE32D_SECTION_3: {},
					_BC490053_F7D4_44E2_BFB7_1CA938F59E1B: {}
				}
			},
			tab_3: {
				Section: {
					tab_3_section_3: {},
					tab_3_section_4: {}
				}
			},
			tab_4: {
				Section: {
					tab_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyn_name: {},
			msdyn_ServiceAccount: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Agreement_Business_Process = {
			msdyn_BillingAccount: {},
			msdyn_Duration: {},
			msdyn_EndDate: {},
			msdyn_PriceList: {},
			msdyn_ServiceAccount: {},
			msdyn_StartDate: {},
			msdyn_SubStatus: {},
			msdyn_SubStatus_1: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus_1: {},
			msdyn_SystemStatus_2: {}
		}
		devKit.LoadFields(formContext, _Agreement_Business_Process, "header_process_");
		process.Agreement_Business_Process = _Agreement_Business_Process;
		form.Process = process;
		var grid = {
			bookingsgrid: {},
			ContractLines: {},
			invoicegrid: {},
			QuotesLinesGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			bpf_msdyn_agreement_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: {},
			msdyn_agreement_adx_inviteredemptions: {},
			msdyn_agreement_adx_portalcomments: {},
			msdyn_agreement_Appointments: {},
			msdyn_agreement_Emails: {},
			msdyn_agreement_msdyn_bookingalerts: {},
			msdyn_agreement_msdyn_copilottranscripts: {},
			msdyn_agreement_msdyn_ocliveworkitems: {},
			msdyn_agreement_msdyn_ocoutboundmessages: {},
			msdyn_agreement_msdyn_ocsessions: {},
			msdyn_agreement_msdyn_ocvoicemails: {},
			msdyn_agreement_msfp_alerts: {},
			msdyn_agreement_msfp_surveyinvites: {},
			msdyn_agreement_msfp_surveyresponses: {},
			msdyn_agreement_PhoneCalls: {},
			msdyn_agreement_ServiceAppointments: {},
			msdyn_agreement_Tasks: {},
			msdyn_msdyn_agreement_invoicedetail_Agreement: {},
			msdyn_msdyn_agreement_msdyn_actual_Agreement: {},
			msdyn_msdyn_agreement_msdyn_agreement_OriginatingAgreement: {},
			msdyn_msdyn_agreement_msdyn_agreementbookingdate_Agreement: {},
			msdyn_msdyn_agreement_msdyn_agreementbookingincident_Agreement: {},
			msdyn_msdyn_agreement_msdyn_agreementbookingproduct_Agreement: {},
			msdyn_msdyn_agreement_msdyn_agreementbookingservice_Agreement: {},
			msdyn_msdyn_agreement_msdyn_agreementbookingservicetask_Agreement: {},
			msdyn_msdyn_agreement_msdyn_agreementbookingsetup_Agreement: {},
			msdyn_msdyn_agreement_msdyn_agreementinvoicedate_Agreement: {},
			msdyn_msdyn_agreement_msdyn_agreementinvoiceproduct_Agreement: {},
			msdyn_msdyn_agreement_msdyn_agreementinvoicesetup_Agreement: {},
			msdyn_msdyn_agreement_msdyn_workorder_Agreement: {},
			msdyn_msdyn_agreement_quotedetail_Agreement: {},
			msdyn_msdyn_agreement_salesorderdetail_Agreement: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormAgreement_Mobile = function(executionContext, defaultWebResourceName) {
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
			bookingsgrid: {},
			invoicegrid: {},
			msdyn_AgreementDetails: {},
			msdyn_AgreementRecordGeneration: {},
			msdyn_BillingAccount: {},
			msdyn_DateCanceled: {},
			msdyn_Description: {},
			msdyn_Duration: {},
			msdyn_EndDate: {},
			msdyn_name: {},
			msdyn_OriginatingAgreement: {},
			msdyn_PriceList: {},
			msdyn_SalesTaxCode: {},
			msdyn_ServiceAccount: {},
			msdyn_ServiceTerritory: {},
			msdyn_StartDate: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_Taxable: {},
			notescontrol: {},
			OwnerId: {},
			WebResource_AgreementRecordGeneration_TimeField: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_7A6686D3_72AD_4724_9C46_5BA3C5FAE32D: {
				Section: {
					_2BCF1BE9_1CEB_434D_9866_6486738F2ACC: {},
					_7A6686D3_72AD_4724_9C46_5BA3C5FAE32D_SECTION_3: {},
					_BC490053_F7D4_44E2_BFB7_1CA938F59E1B: {}
				}
			},
			fstab_general: {
				Section: {
					_4C8BEF3B_E06C_4411_B312_59F180556E4D_SECTION_3: {},
					fstab_general_column_2_section_1: {},
					fstab_general_section_details: {},
					fstab_general_section_summary: {},
					tab_3_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		var _Agreement_Business_Process = {
			msdyn_BillingAccount: {},
			msdyn_Duration: {},
			msdyn_EndDate: {},
			msdyn_PriceList: {},
			msdyn_ServiceAccount: {},
			msdyn_StartDate: {},
			msdyn_SubStatus: {},
			msdyn_SubStatus_1: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus_1: {},
			msdyn_SystemStatus_2: {}
		}
		devKit.LoadFields(formContext, _Agreement_Business_Process, "header_process_");
		process.Agreement_Business_Process = _Agreement_Business_Process;
		form.Process = process;
		var grid = {
			bookingsgrid: {},
			invoicegrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			bpf_msdyn_agreement_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: {},
			msdyn_agreement_adx_inviteredemptions: {},
			msdyn_agreement_adx_portalcomments: {},
			msdyn_agreement_Appointments: {},
			msdyn_agreement_Emails: {},
			msdyn_agreement_msdyn_bookingalerts: {},
			msdyn_agreement_msdyn_copilottranscripts: {},
			msdyn_agreement_msdyn_ocliveworkitems: {},
			msdyn_agreement_msdyn_ocoutboundmessages: {},
			msdyn_agreement_msdyn_ocsessions: {},
			msdyn_agreement_msdyn_ocvoicemails: {},
			msdyn_agreement_msfp_alerts: {},
			msdyn_agreement_msfp_surveyinvites: {},
			msdyn_agreement_msfp_surveyresponses: {},
			msdyn_agreement_PhoneCalls: {},
			msdyn_agreement_ServiceAppointments: {},
			msdyn_agreement_Tasks: {},
			msdyn_msdyn_agreement_invoicedetail_Agreement: {},
			msdyn_msdyn_agreement_msdyn_actual_Agreement: {},
			msdyn_msdyn_agreement_msdyn_agreement_OriginatingAgreement: {},
			msdyn_msdyn_agreement_msdyn_agreementbookingdate_Agreement: {},
			msdyn_msdyn_agreement_msdyn_agreementbookingincident_Agreement: {},
			msdyn_msdyn_agreement_msdyn_agreementbookingproduct_Agreement: {},
			msdyn_msdyn_agreement_msdyn_agreementbookingservice_Agreement: {},
			msdyn_msdyn_agreement_msdyn_agreementbookingservicetask_Agreement: {},
			msdyn_msdyn_agreement_msdyn_agreementbookingsetup_Agreement: {},
			msdyn_msdyn_agreement_msdyn_agreementinvoicedate_Agreement: {},
			msdyn_msdyn_agreement_msdyn_agreementinvoiceproduct_Agreement: {},
			msdyn_msdyn_agreement_msdyn_agreementinvoicesetup_Agreement: {},
			msdyn_msdyn_agreement_msdyn_workorder_Agreement: {},
			msdyn_msdyn_agreement_quotedetail_Agreement: {},
			msdyn_msdyn_agreement_salesorderdetail_Agreement: {}
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
	OptionSet.msdyn_agreement = {
		msdyn_SystemStatus : {
			Active: 690970001,
			Canceled: 690970003,
			Estimate: 690970000,
			Expired: 690970002
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