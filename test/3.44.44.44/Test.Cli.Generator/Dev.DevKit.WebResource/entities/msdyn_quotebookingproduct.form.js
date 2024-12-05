'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_quotebookingproduct_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_EstimatedCost: {},
			msdyn_EstimatedSalesAmount: {},
			msdyn_name: {},
			msdyn_product: {},
			msdyn_quantity: {},
			msdyn_quotebookingsetup: {},
			msdyn_unit: {},
			msdyn_unitamount: {},
			msdyn_unitcostamount: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_79CC9DB9_6812_4613_8C6D_1A07F7AFF8B3: {
				Section: {
					_79CC9DB9_6812_4613_8C6D_1A07F7AFF8B3_COLUMN_3_SECTION_1: {},
					_79CC9DB9_6812_4613_8C6D_1A07F7AFF8B3_SECTION_3: {},
					_CC746554_B3E2_4B34_89C7_121A8D992983: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_quotebookingproduct_adx_inviteredemptions: {},
			msdyn_quotebookingproduct_adx_portalcomments: {},
			msdyn_quotebookingproduct_Appointments: {},
			msdyn_quotebookingproduct_Emails: {},
			msdyn_quotebookingproduct_msdyn_bookingalerts: {},
			msdyn_quotebookingproduct_msdyn_copilottranscripts: {},
			msdyn_quotebookingproduct_msdyn_ocliveworkitems: {},
			msdyn_quotebookingproduct_msdyn_ocoutboundmessages: {},
			msdyn_quotebookingproduct_msdyn_ocsessions: {},
			msdyn_quotebookingproduct_msdyn_ocvoicemails: {},
			msdyn_quotebookingproduct_msfp_alerts: {},
			msdyn_quotebookingproduct_msfp_surveyinvites: {},
			msdyn_quotebookingproduct_msfp_surveyresponses: {},
			msdyn_quotebookingproduct_PhoneCalls: {},
			msdyn_quotebookingproduct_ServiceAppointments: {},
			msdyn_quotebookingproduct_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyn_quotebookingproduct_Information2 = function(executionContext, defaultWebResourceName) {
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
		var navigation = {
			msdyn_quotebookingproduct_adx_inviteredemptions: {},
			msdyn_quotebookingproduct_adx_portalcomments: {},
			msdyn_quotebookingproduct_Appointments: {},
			msdyn_quotebookingproduct_Emails: {},
			msdyn_quotebookingproduct_msdyn_bookingalerts: {},
			msdyn_quotebookingproduct_msdyn_copilottranscripts: {},
			msdyn_quotebookingproduct_msdyn_ocliveworkitems: {},
			msdyn_quotebookingproduct_msdyn_ocoutboundmessages: {},
			msdyn_quotebookingproduct_msdyn_ocsessions: {},
			msdyn_quotebookingproduct_msdyn_ocvoicemails: {},
			msdyn_quotebookingproduct_msfp_alerts: {},
			msdyn_quotebookingproduct_msfp_surveyinvites: {},
			msdyn_quotebookingproduct_msfp_surveyresponses: {},
			msdyn_quotebookingproduct_PhoneCalls: {},
			msdyn_quotebookingproduct_ServiceAppointments: {},
			msdyn_quotebookingproduct_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyn_quotebookingproduct_Information3 = function(executionContext, defaultWebResourceName) {
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
			msdyn_EstimatedCost: {},
			msdyn_EstimatedSalesAmount: {},
			msdyn_product: {},
			msdyn_quantity: {},
			msdyn_quotebookingsetup: {},
			msdyn_unit: {},
			msdyn_unitamount: {},
			msdyn_unitcostamount: {}
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
	OptionSet.msdyn_quotebookingproduct = {
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