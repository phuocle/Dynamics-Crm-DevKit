﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormAgreement_Invoice_Setup_Mobile = function(executionContext, defaultWebResourceName) {
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
			AgreementInvoiceProductsGrid: {},
			msdyn_Agreement: {},
			msdyn_Description: {},
			msdyn_name: {},
			msdyn_RecurrenceSettings: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			fstab_general: {
				Section: {
					_C90EDE9C_D381_4377_8978_2CA09270310C_SECTION_2: {},
					_C90EDE9C_D381_4377_8978_2CA09270310C_SECTION_3: {},
					fstab_general_section_gemeral: {}
				}
			},
			fstab_other: {
				Section: {
					tab_3_section_4: {},
					tab_3_section_5: {},
					tab_3_section_6: {}
				}
			},
			fstab_sub_grids: {
				Section: {
					tab_3_section_1: {},
					tab_3_section_2: {},
					tab_3_section_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		var _Agreement_Business_Process = {
			msdyn_Description: {}
		}
		devKit.LoadFields(formContext, _Agreement_Business_Process, "header_process_");
		process.Agreement_Business_Process = _Agreement_Business_Process;
		form.Process = process;
		var grid = {
			AgreementInvoiceProductsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			bpf_msdyn_agreementinvoicesetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: {},
			msdyn_agreementinvoicesetup_adx_inviteredemptions: {},
			msdyn_agreementinvoicesetup_adx_portalcomments: {},
			msdyn_agreementinvoicesetup_Appointments: {},
			msdyn_agreementinvoicesetup_Emails: {},
			msdyn_agreementinvoicesetup_msdyn_bookingalerts: {},
			msdyn_agreementinvoicesetup_msdyn_copilottranscripts: {},
			msdyn_agreementinvoicesetup_msdyn_ocliveworkitems: {},
			msdyn_agreementinvoicesetup_msdyn_ocoutboundmessages: {},
			msdyn_agreementinvoicesetup_msdyn_ocsessions: {},
			msdyn_agreementinvoicesetup_msdyn_ocvoicemails: {},
			msdyn_agreementinvoicesetup_msfp_alerts: {},
			msdyn_agreementinvoicesetup_msfp_surveyinvites: {},
			msdyn_agreementinvoicesetup_msfp_surveyresponses: {},
			msdyn_agreementinvoicesetup_PhoneCalls: {},
			msdyn_agreementinvoicesetup_QueueItems: {},
			msdyn_agreementinvoicesetup_ServiceAppointments: {},
			msdyn_agreementinvoicesetup_Tasks: {},
			msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoicedate_InvoiceSetup: {},
			msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoiceproduct_AgreementInvoiceSetup: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyn_agreementinvoicesetup_Information = function(executionContext, defaultWebResourceName) {
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
			AgreementInvoiceProductsGrid: {},
			msdyn_Agreement: {},
			msdyn_Description: {},
			msdyn_name: {},
			msdyn_RecurrenceSettings: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_3: {
				Section: {
					tab_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		var _Agreement_Business_Process = {
			msdyn_Description: {}
		}
		devKit.LoadFields(formContext, _Agreement_Business_Process, "header_process_");
		process.Agreement_Business_Process = _Agreement_Business_Process;
		form.Process = process;
		var grid = {
			AgreementInvoiceProductsGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			bpf_msdyn_agreementinvoicesetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: {},
			msdyn_agreementinvoicesetup_adx_inviteredemptions: {},
			msdyn_agreementinvoicesetup_adx_portalcomments: {},
			msdyn_agreementinvoicesetup_Appointments: {},
			msdyn_agreementinvoicesetup_Emails: {},
			msdyn_agreementinvoicesetup_msdyn_bookingalerts: {},
			msdyn_agreementinvoicesetup_msdyn_copilottranscripts: {},
			msdyn_agreementinvoicesetup_msdyn_ocliveworkitems: {},
			msdyn_agreementinvoicesetup_msdyn_ocoutboundmessages: {},
			msdyn_agreementinvoicesetup_msdyn_ocsessions: {},
			msdyn_agreementinvoicesetup_msdyn_ocvoicemails: {},
			msdyn_agreementinvoicesetup_msfp_alerts: {},
			msdyn_agreementinvoicesetup_msfp_surveyinvites: {},
			msdyn_agreementinvoicesetup_msfp_surveyresponses: {},
			msdyn_agreementinvoicesetup_PhoneCalls: {},
			msdyn_agreementinvoicesetup_QueueItems: {},
			msdyn_agreementinvoicesetup_ServiceAppointments: {},
			msdyn_agreementinvoicesetup_Tasks: {},
			msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoicedate_InvoiceSetup: {},
			msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoiceproduct_AgreementInvoiceSetup: {}
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
	OptionSet.msdyn_agreementinvoicesetup = {
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