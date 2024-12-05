'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_iotdevicevisualizationconfiguration_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_actionname: {},
			msdyn_Aggregation: {},
			msdyn_DeviceEvent: {},
			msdyn_IoTDevice: {},
			msdyn_IoTDeviceCategory: {},
			msdyn_Measurement: {},
			msdyn_name: {},
			msdyn_Position: {},
			msdyn_TimeRangeType: {},
			msdyn_TimeRangeValue: {},
			OwnerId: {}
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
	OptionSet.msdyn_iotdevicevisualizationconfiguration = {
		msdyn_Aggregation : {
			Avg: 192350001,
			Count: 192350005,
			Max: 192350003,
			Min: 192350002,
			None: 192350000,
			Sum: 192350004
		},
		msdyn_DeviceEvent : {
			Case: 192350001,
			IoT_Alert: 192350000,
			Work_Order: 192350002
		},
		msdyn_TimeRangeType : {
			Days: 192350001,
			Hours: 192350000,
			Latest: 192350002
		},
		msdyn_VisualizationConfigurationType : {
			Configuration_1: 192350000,
			Configuration_2: 192350001,
			Configuration_3: 192350002
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