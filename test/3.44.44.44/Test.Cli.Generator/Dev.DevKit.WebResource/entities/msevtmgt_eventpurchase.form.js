'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsevtmgt_eventpurchase_Information = function(executionContext, defaultWebResourceName) {
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
			EventPurchaseAttendees: {},
			msevtmgt_name: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			EventPurchaseAttendees: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msevtmgt_eventpurchase_adx_inviteredemptions: {},
			msevtmgt_eventpurchase_adx_portalcomments: {},
			msevtmgt_eventpurchase_Appointments: {},
			msevtmgt_eventpurchase_Emails: {},
			msevtmgt_eventpurchase_msdyn_bookingalerts: {},
			msevtmgt_eventpurchase_msdyn_copilottranscripts: {},
			msevtmgt_eventpurchase_msdyn_ocliveworkitems: {},
			msevtmgt_eventpurchase_msdyn_ocoutboundmessages: {},
			msevtmgt_eventpurchase_msdyn_ocsessions: {},
			msevtmgt_eventpurchase_msdyn_ocvoicemails: {},
			msevtmgt_eventpurchase_msfp_alerts: {},
			msevtmgt_eventpurchase_msfp_surveyinvites: {},
			msevtmgt_eventpurchase_msfp_surveyresponses: {},
			msevtmgt_eventpurchase_PhoneCalls: {},
			msevtmgt_eventpurchase_ServiceAppointments: {},
			msevtmgt_eventpurchase_Tasks: {},
			msevtmgt_msevtmgt_eventpurchase_msevtmgt_eventpurc: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsevtmgt_eventpurchase_Quick_Create_Form = function(executionContext, defaultWebResourceName) {
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
			msevtmgt_EventId: {},
			msevtmgt_name: {}
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
	OptionSet.msevtmgt_eventpurchase = {
		msevtmgt_Area : {
			Administration: 100000000,
			Customer_service: 100000001,
			Executivemanagement: 100000002,
			Finance: 100000004,
			HR: 100000005,
			IT: 100000006,
			Legal: 100000007,
			Logistics: 100000003,
			Marketing: 100000008,
			Sales: 100000009
		},
		msevtmgt_CompanySize : {
			_10001_or_more: 100000008,
			_1001_to_2500: 100000005,
			_101_to_250: 100000002,
			_2501_to_5000: 100000006,
			_251_to_500: 100000003,
			_50_or_less: 100000000,
			_5001_to_10000: 100000007,
			_501_to_1000: 100000004,
			_51_to_100: 100000001
		},
		msevtmgt_Industry : {
			Architecture_and_engineering: 100000000,
			Financial_services: 100000001,
			Manufacturing: 100000002,
			Media_entertainment: 100000003,
			Other: 100000008,
			Professional_services: 100000004,
			Public_sector: 100000005,
			Retail: 100000006,
			Wholesale_and_distribution: 100000007
		},
		msevtmgt_YearsInIndustry : {
			_1_to_5_years: 100000001,
			_5_to_10_years: 100000002,
			Over_10_years: 100000003,
			Under_one_year: 100000000
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