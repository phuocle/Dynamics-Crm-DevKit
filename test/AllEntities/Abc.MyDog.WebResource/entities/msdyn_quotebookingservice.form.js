'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.Formmsdyn_quotebookingservice_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_duration: {},
			msdyn_EstimatedCostAmount: {},
			msdyn_EstimatedSalesAmount: {},
			msdyn_minimumchargeamount: {},
			msdyn_minimumchargeduration: {},
			msdyn_name: {},
			msdyn_quotebookingsetup: {},
			msdyn_Service: {},
			msdyn_unit: {},
			msdyn_unitamount: {},
			msdyn_unitcostamount: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_66B308CF_F821_44E8_997A_88593F18144F: {
				Section: {
					_8F706D5B_6CB5_4A94_A35A_8AADCF2D33F4: {},
					_66B308CF_F821_44E8_997A_88593F18144F_SECTION_3: {},
					_66B308CF_F821_44E8_997A_88593F18144F_COLUMN_3_SECTION_1: {}
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
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_quotebookingservice = {
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