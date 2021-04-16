'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormProcessSession_Information = function(executionContext, defaultWebResourceName) {
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
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ProcessSession = {
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