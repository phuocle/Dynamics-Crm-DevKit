﻿'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.FormPartner_Application_Main_Form = function(executionContext, defaultWebResourceName) {
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
			ApplicationRole: {},
			Name: {},
			notescontrol: {},
			PrincipalId: {},
			UseAuthorizationServer: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

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
	OptionSet.PartnerApplication = {
		ApplicationRole : {
			Client: 0,
			Server: 1
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
			Disabled: 2,
			Enabled: 1
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