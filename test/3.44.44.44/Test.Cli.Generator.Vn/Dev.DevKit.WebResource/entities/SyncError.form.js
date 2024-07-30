'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormLoi_dong_bo = function(executionContext, defaultWebResourceName) {
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
			Action: {},
			Description: {},
			ErrorCode: {},
			ErrorDetail: {},
			ErrorMessage: {},
			ErrorTime: {},
			ErrorType: {},
			Name: {},
			RegardingObjectId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Details: {
				Section: {
				}
			},
			General_Tab: {
				Section: {
					SYNCERROR_INFORMATION: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {},
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
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
	OptionSet.SyncError = {
		ErrorType : {
			Ban_ghi_da_ton_tai: 2,
			Khong_tim_thay_ban_ghi: 1,
			Loai_khac: 3,
			Xung_dot: 0
		},
		RegardingObjectTypeCode : {
		},
		StateCode : {
			Da_giai_quyet: 1,
			Hien_hoat: 0
		},
		StatusCode : {
			Da_khac_phuc: 1,
			Hien_hoat: 0
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