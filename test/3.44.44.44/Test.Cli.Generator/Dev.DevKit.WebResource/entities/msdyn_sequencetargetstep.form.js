'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_sequencetargetstep_Information = function(executionContext, defaultWebResourceName) {
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
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_advancedfromstep_msdyn_sequencetarget: {},
			msdyn_advancedfromstep_msdyn_sequencetargetstep: {}
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
	OptionSet.msdyn_sequencetargetstep = {
		msdyn_advancedfromwaitstate : {
			NA: 0,
			None: 1,
			Waiting: 2,
			Waiting_Completed: 3
		},
		msdyn_convertedtomanualfrom : {
			Auto_action: 4,
			Automated_Email: 3,
			Automated_Experimentation: 7,
			Automated_text_message: 6,
			Email: 4202,
			LinkedIn_action: 5,
			Phone_call: 4210,
			Simple_Condition: 1,
			Task: 4212,
			Text_message: 4213,
			Wait: 0
		},
		msdyn_errorstate : {
			Automated_text_message_failed: 2,
			Field_update_failed: 1,
			NA: 0,
			Use_email_template_failed: 3
		},
		msdyn_subtype : {
			AdvanceToOtherSequence: 5,
			Default: 0,
			LinkedInConnect: 3,
			LinkedInGetIntroduced: 2,
			LinkedInMail: 4,
			LinkedInResearch: 1
		},
		msdyn_type : {
			Auto_action: 4,
			Automated_Email: 3,
			Automated_Experimentation: 7,
			Automated_text_message: 6,
			Email: 4202,
			LinkedIn_action: 5,
			Phone_call: 4210,
			Simple_Condition: 1,
			Task: 4212,
			Text_message: 4213,
			Wait: 0
		},
		msdyn_waitstate : {
			NA: 0,
			Skipped: 2,
			Waiting: 1,
			Waiting_completed: 4,
			Waiting_for_update: 3
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Cancelled: 4,
			Completed: 2,
			Open: 1,
			Skipped: 3
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