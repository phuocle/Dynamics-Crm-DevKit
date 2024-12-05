'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_ocphonenumber_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_name: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_ocphonenumber_msdyn_ocprovisioningstate_phonenumberid: {},
			msdyn_msdyn_ocphonenumber_msdyn_ocsmschannelsetting_phonenumberid: {},
			msdyn_msdyn_ocphonenumber_msdyn_smsnumber_phonenumberid: {},
			msdyn_msdyn_ocphonenumber_systemuser_phonenumberid: {},
			msdyn_ocphonenumber_msdyn_ocvoicechannelsetting_calleridphonenumberid: {},
			msdyn_ocphonenumber_msdyn_ocvoicechannelsetting_phonenumberid: {}
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
	OptionSet.msdyn_ocphonenumber = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_appmodule : {
			Service: 192350000
		},
		msdyn_Objective : {
			Conversation: 192350000,
			Lead: 192350001
		},
		msdyn_ocphonenumbersource : {
			Direct_Offer: 192350000,
			Direct_Routing: 192350001
		},
		msdyn_phonenumbertype : {
			ACS: 0,
			Teams: 1
		},
		msdyn_type : {
			Geo: 192350000,
			Short_code: 192350002,
			Toll_free: 192350001
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