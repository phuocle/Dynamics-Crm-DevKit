'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_timegroup_Information = function(executionContext, defaultWebResourceName) {
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
			detailsgrid: {},
			msdyn_DisplayTopXResultsInSATimeGroup: {},
			msdyn_HideBookingTimeOnSA: {},
			msdyn_interval: {},
			msdyn_intervalsbegin: {},
			msdyn_name: {},
			msdyn_ResetPerTimeGroupDetail: {},
			msdyn_resultsperinterval: {},
			OwnerId: {},
			WebResource_msdyn_intervalbegin: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_EB571BB4_B525_4254_A87C_716F6DC00062: {
				Section: {
					_9440EEEF_63F6_4682_8B8E_43760F0BBE48: {}
				}
			},
			Detailstab: {
				Section: {
				}
			},
			interval_tab: {
				Section: {
					tab_4_section_1: {},
					tab_4_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			detailsgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyn_msdyn_timegroup_msdyn_resourcerequirement_TimeGroup: {},
			msdyn_msdyn_timegroup_msdyn_timegroupdetail: {},
			msdyn_msdyn_timegroup_msdyn_workorder_TimeGroup: {},
			msdyn_timegroup_adx_inviteredemptions: {},
			msdyn_timegroup_adx_portalcomments: {},
			msdyn_timegroup_Appointments: {},
			msdyn_timegroup_Emails: {},
			msdyn_timegroup_msdyn_bookingalerts: {},
			msdyn_timegroup_msdyn_copilottranscripts: {},
			msdyn_timegroup_msdyn_ocliveworkitems: {},
			msdyn_timegroup_msdyn_ocoutboundmessages: {},
			msdyn_timegroup_msdyn_ocsessions: {},
			msdyn_timegroup_msdyn_ocvoicemails: {},
			msdyn_timegroup_msfp_alerts: {},
			msdyn_timegroup_msfp_surveyinvites: {},
			msdyn_timegroup_msfp_surveyresponses: {},
			msdyn_timegroup_PhoneCalls: {},
			msdyn_timegroup_QueueItems: {},
			msdyn_timegroup_ServiceAppointments: {},
			msdyn_timegroup_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormFulfillment_Preference_Quick_Create_Form = function(executionContext, defaultWebResourceName) {
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
			msdyn_interval: {},
			msdyn_name: {}
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
	OptionSet.msdyn_timegroup = {
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