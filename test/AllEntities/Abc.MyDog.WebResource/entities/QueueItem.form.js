'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormQueueItem_Information = function(executionContext, defaultWebResourceName) {
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
			EnteredOn: {},
			ModifiedOn: {},
			QueueId: {},
			WorkerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					information: {}
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
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.QueueItem = {
		ObjectTypeCode : {
			Email: 4202,
			Task: 4212,
			Phone_Call: 4210,
			Custom_Activity: 10042,
			WebApi: 10030,
			Knowledge_Article_Template: 10022,
			Recurring_Appointment: 4251,
			Social_Activity: 4216,
			Appointment: 4201,
			Fax: 4204,
			Activity: 4200,
			Letter: 4207,
			Knowledge_Article: 9953
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
			Inactive: 2,
			Active: 1
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