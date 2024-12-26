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
			CanceledBy: {},
			CanceledOn: {},
			Comments: {},
			CompletedBy: {},
			CompletedOn: {},
			CreatedOn: {},
			Name: {},
			NextLinkedSessionId: {},
			OriginatingSessionId: {},
			OwnerId: {},
			PreviousLinkedSessionId: {},
			ProcessId: {},
			RegardingObjectId: {},
			StartedBy: {},
			StartedOn: {},
			StatusCode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_474B8A52_CB22_4194_A5A6_F21FD40B7417: {
				Section: {
					Details: {}
				}
			},
			Comments: {
				Section: {
					Comments: {}
				}
			},
			Details: {
				Section: {
					Details_2: {}
				}
			},
			Linked_Sessions: {
				Section: {
					Linked_Sessions: {}
				}
			},
			Summary: {
				Section: {
					Summary: {}
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
	OptionSet.ProcessSession = {
		RegardingObjectTypeCode : {
		},
		StateCode : {
			Hoan_thanh: 1,
			Khong_hoan_thanh: 0
		},
		StatusCode : {
			Chua_bat_dau: 1,
			Da_hoan_thanh: 4,
			Da_huy: 5,
			Da_tam_dung: 3,
			Dang_tien_hanh: 2,
			Khong_thanh_cong: 6
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