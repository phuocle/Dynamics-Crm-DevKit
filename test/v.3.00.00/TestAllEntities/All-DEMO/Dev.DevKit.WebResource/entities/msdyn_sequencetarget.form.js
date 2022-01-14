'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_sequencetarget_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_name: {},
			msdyn_parentsequence: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			CreatedOn: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var navigation = {
			navAsyncOperations: {},
			navAudit: {},
			navConnections: {},
			navProcessSessions: {}
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
	OptionSet.msdyn_sequencetarget = {
		msdyn_currentstepsubtype : {
			Default: 0,
			LinkedInConnect: 3,
			LinkedInGetIntroduced: 2,
			LinkedInMail: 4,
			LinkedInResearch: 1
		},
		msdyn_currentsteptype : {
			Auto_action: 4,
			Automated_Email: 3,
			Email: 4202,
			LinkedIn_action: 5,
			Phone_call: 4210,
			Simple_Condition: 1,
			Task: 4212,
			Wait: 0
		},
		msdyn_deactivatereason : {
			Exit_Criterion_Met: 3,
			Parent_Sequence_Deactivated: 1,
			Regarding_Entity_Deactivated: 2,
			User_Disconnected: 0
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Completed: 3,
			Connected: 2,
			Connecting: 1,
			Disconnected: 5,
			Error: 4
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