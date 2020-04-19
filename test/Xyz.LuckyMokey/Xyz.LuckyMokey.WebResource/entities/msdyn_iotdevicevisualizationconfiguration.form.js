'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formmsdyn_iotdevicevisualizationconfiguration_Information = function(executionContext, defaultWebResourceName) {
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
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_iotdevicevisualizationconfiguration = {
		msdyn_Aggregation : {
			None: 192350000,
			Avg: 192350001,
			Min: 192350002,
			Max: 192350003,
			Sum: 192350004,
			Count: 192350005
		},
		msdyn_DeviceEvent : {
			IoT_Alert: 192350000,
			Case: 192350001,
			Work_Order: 192350002
		},
		msdyn_TimeRangeType : {
			Hours: 192350000,
			Days: 192350001,
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