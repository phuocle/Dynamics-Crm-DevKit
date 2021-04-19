'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.Formmsdyn_geolocationsettings_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_EnableLocationTracking: {},
			msdyn_fridayendtime: {},
			msdyn_fridaystarttime: {},
			msdyn_mondayendtime: {},
			msdyn_mondaystarttime: {},
			msdyn_name: {},
			msdyn_refreshIntervalSeconds: {},
			msdyn_saturdayendtime: {},
			msdyn_saturdaystarttime: {},
			msdyn_sundayendtime: {},
			msdyn_sundaystarttime: {},
			msdyn_thursdayendtime: {},
			msdyn_thursdaystarttime: {},
			msdyn_tuesdayendtime: {},
			msdyn_tuesdaystarttime: {},
			msdyn_wednesdayendtime: {},
			msdyn_wednesdaystarttime: {}
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
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_geolocationsettings = {
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