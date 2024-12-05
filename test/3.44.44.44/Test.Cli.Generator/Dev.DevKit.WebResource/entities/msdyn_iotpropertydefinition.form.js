﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_iotpropertydefinition_Information = function(executionContext, defaultWebResourceName) {
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
			ChildParameters: {},
			IoTDeviceCommandDefinitions: {},
			msdyn_AdditionalProperties: {},
			msdyn_AdditionalProperties1: {},
			msdyn_Editable: {},
			msdyn_name: {},
			msdyn_ParentProperty: {},
			msdyn_Type: {},
			msdyn_unit: {},
			msdyn_Visible: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			General: {
				Section: {
					ChildParameters: {},
					Commands: {},
					General: {}
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
		var grid = {
			ChildParameters: {},
			IoTDeviceCommandDefinitions: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyn_iotdevicevisualizationconfiguration_measurement: {},
			msdyn_msdyn_iotpropertydefinition_msdyn_iotdeviceproperty_Property: {},
			msdyn_msdyn_iotpropertydefinition_msdyn_iotpropertydefinition_ParentParameter: {}
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
	OptionSet.msdyn_iotpropertydefinition = {
		msdyn_Type : {
			Boolean: 192350003,
			Date_and_Time: 192350002,
			Decimal_Number: 192350005,
			Object: 192350001,
			String: 192350000,
			Whole_Number: 192350004
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