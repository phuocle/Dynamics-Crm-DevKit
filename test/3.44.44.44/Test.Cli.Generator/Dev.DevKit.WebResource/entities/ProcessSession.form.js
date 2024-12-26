'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormProcessSession_Information = function(executionContext, defaultWebResourceName) {
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
			Complete: 1,
			Incomplete: 0
		},
		StatusCode : {
			Canceled: 5,
			Completed: 4,
			Failed: 6,
			In_Progress: 2,
			Not_Started: 1,
			Paused: 3
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