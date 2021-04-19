'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.Formmsdyn_ocwhatsappchannelaccount_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_authenticationtoken: {},
			msdyn_name: {},
			msdyn_provideraccountid: {},
			msdyn_TwilioInboundURL: {},
			OwnerId: {},
			Subgrid_ValidationResult: {},
			Subgrid_WhatsAppNumbers: {},
			WebResource_WhatsAppAccountInstructions: {},
			WebResource_WhatsAppAccountValidation: {},
			WebResource_WhatsAppCallbackUrl: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab1_general: {
				Section: {
					Section1_Step1: {},
					Section2_Step2: {},
					Section3_Step3: {},
					Section4_Step4: {}
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
		var grid = {
			Subgrid_WhatsAppNumbers: {},
			Subgrid_ValidationResult: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
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
	OptionSet.msdyn_ocwhatsappchannelaccount = {
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