'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormProcessSession_Information = function(executionContext, defaultWebResourceName) {
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
			Summary: {
				Section: {
					Summary: {}
				}
			},
			Comments: {
				Section: {
					Comments: {}
				}
			},
			Linked_Sessions: {
				Section: {
					Linked_Sessions: {}
				}
			},
			Details: {
				Section: {
					Details_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var footer = {
			StateCode: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ProcessSession = {
		StateCode : {
			Incomplete: 0,
			Complete: 1
		},
		StatusCode : {
			Not_Started: 1,
			In_Progress: 2,
			Paused: 3,
			Completed: 4,
			Canceled: 5,
			Failed: 6
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