'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formmsdyn_conversationaction_Information = function(executionContext, defaultWebResourceName) {
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
			Local_fields: {},
			msdyn_EventName: {},
			msdyn_EventParameter: {},
			msdyn_FunctionName: {},
			msdyn_Icon: {},
			msdyn_name: {},
			msdyn_Order: {},
			msdyn_WebResource: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_87D6AEF8_978D_4530_BFC7_EB7307C1BBD8: {
				Section: {
				}
			},
			ConversationActionLocale: {
				Section: {
					_87D6AEF8_978D_4530_BFC7_EB7307C1BBD8_SECTION_2: {}
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
		return form;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_conversationaction = {
		msdyn_EventName : {
			Open_App_Tab_Template: 100000000,
			Send_message: 100000001,
			Customer_Defined_Function: 100000002
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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