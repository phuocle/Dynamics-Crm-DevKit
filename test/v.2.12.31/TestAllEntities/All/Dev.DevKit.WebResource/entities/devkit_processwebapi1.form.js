'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formdevkit_processwebapi1_Information = function(executionContext, defaultWebResourceName) {
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
			devkit_customerid: {},
			devkit_decimalnumber: {},
			devkit_floatingpointnumber: {},
			devkit_multipleliniesoftext: {},
			devkit_singlelineoftexttext: {},
			devkit_singleoptionsetcode: {},
			devkit_userlocaldateonly: {},
			devkit_wholenumbernone: {},
			devkit_yesandno: {},
			devkit_yesandnocalculated: {},
			ownerid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			StageStep3: {
				Section: {
					StageStep3_section1: {}
				}
			},
			StageStep9: {
				Section: {
					StageStep9_section1: {}
				}
			},
			StageStep17: {
				Section: {
					StageStep17_section1: {}
				}
			},
			StageStep23: {
				Section: {
					StageStep23_section1: {}
				}
			},
			StageStep36: {
				Section: {
					StageStep36_section1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
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
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.devkit_processwebapi1 = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Aborted: 3,
			Active: 1,
			Finished: 2
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