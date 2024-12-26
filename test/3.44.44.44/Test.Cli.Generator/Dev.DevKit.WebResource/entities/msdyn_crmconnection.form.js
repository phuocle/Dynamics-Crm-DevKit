'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_crmconnection_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_apimuri: {},
			msdyn_connectionstate: {},
			msdyn_connectorid: {},
			msdyn_connectoruri: {},
			msdyn_crmtype: {},
			msdyn_crmurl: {},
			msdyn_crmuserid: {},
			msdyn_environmentid: {},
			msdyn_name: {},
			msdyn_sfenvironmenttype: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_msdyn_crmconnection_msdyn_taggedrecord_connectionid: {}
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
	OptionSet.msdyn_crmconnection = {
		msdyn_connectionstate : {
			Active: 100000001,
			Created: 100000000,
			Inactive: 100000002
		},
		msdyn_producttype : {
			Copilot_for_Sales: 10000,
			Copilot_for_Service: 10001,
			Shared: 11000
		},
		msdyn_sfenvironmenttype : {
			Production: 100000000,
			Sandbox: 100000001
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