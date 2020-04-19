'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormUII_action_Information = function(executionContext, defaultWebResourceName) {
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
			notescontrol: {},
			OwnerId: {},
			UII_AutomationMode: {},
			UII_ExtensionsXML: {},
			uii_hostedapplicationid: {},
			UII_isDefault: {},
			UII_isFocussedApplication: {},
			UII_isRunModeAsynchronous: {},
			UII_Method: {},
			UII_name: {},
			UII_QueryString: {},
			UII_URL: {},
			UII_WorkflowAssemblyType: {},
			UII_WorkflowXAML: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			General: {
				Section: {
					General: {},
					URLNavigation: {},
					Automation: {}
				}
			},
			_80C2EEB7_9ADD_DE11_8E80_00155D289C61: {
				Section: {
					_AAA1F133_9BDD_DE11_8E80_00155D289C61: {}
				}
			},
			_49A2FDF8_1814_49B5_BE5A_E7CAC97E0EE3: {
				Section: {
					_B4B540BD_52D0_4CC9_BD42_16F4DDAEDDAD: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var footer = {
			statecode: {}
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
	OptionSet.UII_action = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
		},
		UII_AutomationMode : {
			No_Automation: 1,
			Use_Workflow_Assembly: 2,
			Use_Workflow_XAML: 3
		},
		UII_Method : {
			GET: 1,
			POST: 2
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