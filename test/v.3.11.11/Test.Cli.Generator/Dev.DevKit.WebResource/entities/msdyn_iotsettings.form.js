'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_iotsettings_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_CommandNameProperty: {},
			msdyn_CommandParametersProperty: {},
			msdyn_DefaultIoTProviderInstance: {},
			msdyn_DeploymentAppURL: {},
			msdyn_devicedatapullfrequency: {},
			msdyn_EnableIoTSuggestions: {},
			msdyn_EnableIoTSuggestions1: {},
			msdyn_EnhancedBackgroundProcessing: {},
			msdyn_IoTAlertAggregationRule: {},
			msdyn_name: {},
			msdyn_NextDeviceDataPullTime: {},
			msdyn_ScheduledDeviceDataPull: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_EDDC3EA8_B755_416E_8D97_C3B1FEE65AAD: {
				Section: {
					_E07187A8_1C2C_40FF_8C3A_05845B3A09F2: {},
					_EDDC3EA8_B755_416E_8D97_C3B1FEE65AAD_SECTION_2: {}
				}
			},
			AlertAggregationRulesTab: {
				Section: {
					AlertAggregationRulesSection: {},
					tab_3_section_2: {}
				}
			},
			General: {
				Section: {
					Command_Settings_Section: {},
					Deployment: {},
					Other_Section: {},
					tab_2_section_2: {}
				}
			},
			IoTProviderSettingsTab: {
				Section: {
					DefaultIoTProviderInstanceSection: {},
					IoTProviderSettingsEmptySection: {}
				}
			},
			SuggestionsTab: {
				Section: {
					ModelStatusSection: {},
					SuggestionsEmptySection: {},
					SuggestionsSection: {}
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
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_iotsettings = {
		msdyn_defaultiotsource : {
			Azure_IoT_Central: 192350002,
			Azure_IoT_Suite: 192350001,
			Other: 192350000
		},
		OwnerIdType : {
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