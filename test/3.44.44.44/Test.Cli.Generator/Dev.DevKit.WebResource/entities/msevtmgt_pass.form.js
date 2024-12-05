'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormPass = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_descriptorsyncstatus: {},
			msevtmgt_eventid: {},
			msevtmgt_eventid1: {},
			msevtmgt_name: {},
			msevtmgt_noofpassesallocated: {},
			msevtmgt_noofpassesleft: {},
			msevtmgt_noofpassessold: {},
			msevtmgt_passprice: {},
			Sessions: {},
			Sessions_2: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			sessions: {
				Section: {
					sessions: {},
					sessions_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			statecode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {
			eventSummaryQuickView: {
				msevtmgt_building: {},
				msevtmgt_EventEndDate: {},
				msevtmgt_EventStartDate: {},
				msevtmgt_Name: {},
				msevtmgt_PrimaryGoal: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			Sessions: {},
			Sessions_2: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msevtmgt_pass_msevtmgt_attendeepass_Pass: {},
			msevtmgt_pass_msevtmgt_eventpurchasepass_Pass: {},
			msevtmgt_pass_msevtmgt_session_PassSessions: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsevtmgt_pass_Quick_Create_Form = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_eventid: {},
			msevtmgt_name: {},
			msevtmgt_noofpassesallocated: {},
			msevtmgt_noofpassessold: {},
			msevtmgt_passprice: {},
			OwnerId: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			GeneralTab: {
				Section: {
					GeneralTab_column_1_section_1: {},
					GeneralTab_column_2_section_1: {},
					GeneralTab_column_3_section_1: {}
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
	OptionSet.msevtmgt_pass = {
		msevtmgt_descriptorsyncstatus : {
			Going_live: 100000001,
			Going_live_failed: 100000002,
			Modifying_capacity: 100000003,
			Modifying_capacity_failed: 100000004,
			Not_Synced: 100000005,
			Synced: 100000000
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