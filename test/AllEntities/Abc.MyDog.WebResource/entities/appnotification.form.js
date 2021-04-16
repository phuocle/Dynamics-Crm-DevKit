'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.Formappnotification_Information = function(executionContext, defaultWebResourceName) {
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
			Body: {},
			Data: {},
			ExpiresOn: {},
			IconType: {},
			OwnerId: {},
			Title: {},
			ToastType: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

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
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.appnotification = {
		IconType : {
			Info: 100000000,
			Success: 100000001,
			Failure: 100000002,
			Warning: 100000003,
			Mention: 100000004,
			Custom: 100000005
		},
		Priority : {
			Normal: 200000000,
			High: 200000001
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Unread: 1,
			Read: 2,
			Inactive: 3
		},
		ToastType : {
			Timed: 200000000,
			Hidden: 200000001
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