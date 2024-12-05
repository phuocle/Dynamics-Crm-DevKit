'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_taskactivitymarketingtemplate_Information = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_description: {},
			msdyncrm_name: {},
			msdyncrm_prioritycode: {},
			msdyncrm_scheduleddurationminutes: {},
			msdyncrm_scheduletype: {},
			msdyncrm_startdate: {},
			msdyncrm_startdelay: {},
			msdyncrm_starttimehour: {},
			msdyncrm_starttimeminute: {},
			msdyncrm_subject: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_9F29B748_C028_487D_BB1E_E4F023BCE788: {
				Section: {
					_9F29B748_C028_487D_BB1E_E4F023BCE788_SECTION_2: {},
					_9F29B748_C028_487D_BB1E_E4F023BCE788_SECTION_3: {},
					_9F29B748_C028_487D_BB1E_E4F023BCE788_SECTION_4: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyncrm_msdyncrm_taskactivitymarketingtemplate_msdyncrm_taskactivity_tasktemplate: {},
			msdyncrm_taskactivitymarketingtemplate_Feedback: {},
			msdyncrm_taskactivitymarketingtemplate_QueueItems: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyncrm_taskactivitymarketingtemplate_New_Form = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_description: {},
			msdyncrm_name: {},
			msdyncrm_prioritycode: {},
			msdyncrm_scheduleddurationminutes: {},
			msdyncrm_scheduletype: {},
			msdyncrm_startdate: {},
			msdyncrm_startdelay: {},
			msdyncrm_starttimehour: {},
			msdyncrm_starttimeminute: {},
			msdyncrm_subject: {},
			OwnerId: {}
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
	OptionSet.msdyncrm_taskactivitymarketingtemplate = {
		msdyncrm_prioritycode : {
			High: 2,
			Low: 0,
			Normal: 1
		},
		msdyncrm_scheduletype : {
			Delay_in_days: 1,
			Fixed_date: 0
		},
		msdyncrm_starttimehour : {
			_00: 0,
			_01: 1,
			_02: 2,
			_03: 3,
			_04: 4,
			_05: 5,
			_06: 6,
			_07: 7,
			_08: 8,
			_09: 9,
			_10: 10,
			_11: 11,
			_12: 12,
			_13: 13,
			_14: 14,
			_15: 15,
			_16: 16,
			_17: 17,
			_18: 18,
			_19: 19,
			_20: 20,
			_21: 21,
			_22: 22,
			_23: 23
		},
		msdyncrm_starttimeminute : {
			_00: 0,
			_15: 15,
			_30: 30,
			_45: 45
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