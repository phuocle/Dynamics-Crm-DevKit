'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormAzure_Account = function(executionContext, defaultWebResourceName) {
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
			devkit_AccountId: {},
			devkit_AccountId_1: {},
			devkit_AzureAccountType: {},
			devkit_Category: {},
			devkit_City: {},
			devkit_CreatedOn: {},
			devkit_ModifiedOn: {},
			devkit_name: {},
			devkit_Price: {},
			devkit_Surface: {},
			EmailAddress: {},
			notescontrol: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_C8071FB9_2A55_4559_93CD_357478050384: {
				Section: {
				}
			},
			tab_3: {
				Section: {
					tab_3_section_1: {}
				}
			},
			tab_2: {
				Section: {
					tab_2_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {
			ACCOUNT: {}
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
	OptionSet.devkit_AzureAccount = {
		devkit_Category : {
			Organization: 1,
			Owner: 2
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