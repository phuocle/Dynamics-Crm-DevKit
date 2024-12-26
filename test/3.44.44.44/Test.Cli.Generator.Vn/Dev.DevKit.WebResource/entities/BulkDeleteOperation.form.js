'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormThong_tin = function(executionContext, defaultWebResourceName) {
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
			advfindcontrol: {},
			CreatedBy: {},
			CreatedOn: {},
			FailureCount: {},
			IsRecurring: {},
			ModifiedBy: {},
			ModifiedOn: {},
			Name: {},
			NextRun: {},
			OwnerId: {},
			querylist: {},
			rdNotify: {},
			recipients: {},
			StatusCode: {},
			SuccessCount: {},
			totalcount: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			properties: {
				Section: {
					details: {},
					querydetails: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {

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
	OptionSet.BulkDeleteOperation = {
		StateCode : {
			Da_hoan_thanh: 3,
			Da_khoa: 2,
			Da_treo: 1,
			San_sang: 0
		},
		StatusCode : {
			Da_huy: 32,
			Da_tam_dung: 12,
			Da_thanh_cong: 30,
			Dang_cho: 10,
			Dang_cho_nguon_luc: 0,
			Dang_huy: 22,
			Dang_tam_dung: 21,
			Dang_thu_lai: 11,
			Dang_tien_hanh: 20,
			Khong_thanh_cong: 31
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