'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_linkedentityattributevalidity_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_attributename: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_linkedentityattributevalidity = {
		msdyn_attributetype : {
			Email: 0,
			Phone: 1
		},
		msdyn_datavalidity : {
			Invalid: 0,
			Unknown: 2,
			Valid: 1
		},
		msdyn_errorcode : {
			Address_Malformed: 380,
			Domain_exists: 210,
			Domain_Exists_But_Disposable: 360,
			Domain_Exists_But_Expired_Recently: 250,
			Domain_Exists_But_Expires_Soon: 220,
			Domain_Exists_But_Spam: 400,
			Domain_Expired: 320,
			Domain_Invalid: 340,
			Domain_Unknown: 350,
			Email_Does_Not_Exist: 390,
			Email_Exists: 200,
			Email_Exists_But_Hub: 370,
			Email_Exists_But_Spam: 420,
			Fake_Alias: 410,
			None: 230,
			Root_Domain_exists: 240,
			Unknown: 0,
			Validation_In_Progress: 300
		},
		msdyn_linkeditemlookupIdType : {
		},
		msdyn_validationstatus : {
			Failed: 2,
			In_Progress: 3,
			New: 0,
			Success: 1
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