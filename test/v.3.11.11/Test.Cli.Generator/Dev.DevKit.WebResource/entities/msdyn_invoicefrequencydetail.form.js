'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_invoicefrequencydetail_Project_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_dayofmonth: {},
			msdyn_invoicefrequency: {},
			msdyn_name: {},
			msdyn_occurrenceofweekday: {},
			msdyn_weekday: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_invoicefrequencydetail = {
		msdyn_dayofmonth : {
			_1: 192350001,
			_10: 192350010,
			_11: 192350011,
			_12: 192350012,
			_13: 192350013,
			_14: 192350014,
			_15: 192350015,
			_16: 192350016,
			_17: 192350017,
			_18: 192350018,
			_19: 192350019,
			_2: 192350002,
			_20: 192350020,
			_21: 192350021,
			_22: 192350022,
			_23: 192350023,
			_24: 192350024,
			_25: 192350025,
			_26: 192350026,
			_27: 192350027,
			_28: 192350028,
			_29: 192350029,
			_3: 192350003,
			_30: 192350030,
			_31: 192350031,
			_4: 192350004,
			_5: 192350005,
			_6: 192350006,
			_7: 192350007,
			_8: 192350008,
			_9: 192350009
		},
		msdyn_occurrenceofweekday : {
			First: 192350000,
			Fourth: 192350003,
			Last: 192350004,
			Second: 192350001,
			Third: 192350002
		},
		msdyn_weekday : {
			Friday: 192350005,
			Monday: 192350001,
			Saturday: 192350006,
			Sunday: 192350000,
			Thursday: 192350004,
			Tuesday: 192350002,
			Wednesday: 192350003
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