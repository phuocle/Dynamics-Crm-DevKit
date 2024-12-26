'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_iotprovider_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_IoTSource: {},
			msdyn_name: {},
			msdyn_PullDeviceDataAction: {},
			msdyn_QueryDeviceReadingsAction: {},
			msdyn_RegisterAction: {},
			msdyn_SendCommandAction: {},
			msdyn_UpdateDeviceDataAction: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			General: {
				Section: {
					_6CF7B2C6_4BBF_4CFA_AA41_CDE683AAC5D2_SECTION_2: {},
					ActionNamesSection: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			msdyn_msdyn_iotprovider_msdyn_iotproviderinstance_IoTProvider: {}
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
	OptionSet.msdyn_iotprovider = {
		msdyn_IoTSource : {
			Azure_IoT_Central: 192350002,
			Azure_IoT_Suite: 192350001,
			Other: 192350000
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