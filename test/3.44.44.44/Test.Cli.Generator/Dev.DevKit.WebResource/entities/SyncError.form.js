﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormSync_Error = function(executionContext, defaultWebResourceName) {
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
			Conflict: 0,
			Others: 3,
			Record_already_exists: 2,
			Record_not_found: 1
		},
		RegardingObjectTypeCode : {
		},
		StateCode : {
			Active: 0,
			Resolved: 1
		},
		StatusCode : {
			Active: 0,
			Fixed: 1
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