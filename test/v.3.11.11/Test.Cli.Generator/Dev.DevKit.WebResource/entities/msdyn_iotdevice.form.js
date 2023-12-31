'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_iotdevice_Information = function(executionContext, defaultWebResourceName) {
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
			AlertsGrid: {},
			CommandsGrid: {},
			DeviceDataHistory: {},
			msdyn_Account: {},
			msdyn_Category: {},
			msdyn_ConnectionState: {},
			msdyn_DeviceId: {},
			msdyn_DeviceId1: {},
			msdyn_DeviceId2: {},
			msdyn_DeviceReportedProperties: {},
			msdyn_DeviceReportedProperties1: {},
			msdyn_DeviceSettings: {},
			msdyn_DeviceSettings1: {},
			msdyn_IoTProviderInstance: {},
			msdyn_IsSimulated: {},
			msdyn_LastActivityTime: {},
			msdyn_name: {},
			msdyn_RegistrationMessage: {},
			msdyn_RegistrationStatus: {},
			msdyn_Tags: {},
			msdyn_Tags1: {},
			msdyn_Timezone: {},
			RegistrationHistory: {},
			WebResource_PowerBIDevice: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_1BCFF70D_5615_4084_953F_2196583D6E79: {
				Section: {
					_A9378EBB_2FCC_41B7_8039_B2B2A89490E2: {},
					Connected_Device_Readings: {},
					Device_Summary_Visualization: {},
					DeviceSettingsSection: {},
					DeviceStatusSection: {}
				}
			},
			AlertsTab: {
				Section: {
					AlertsSection: {}
				}
			},
			CommandsTab: {
				Section: {
					CommandsSection: {}
				}
			},
			Device_Data: {
				Section: {
					Device_Data: {}
				}
			},
			DeviceInsightsTab: {
				Section: {
					DeviceInsightsSection: {}
				}
			},
			RegistrationHistory: {
				Section: {
					RegistrationHistorySection: {}
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
		var grid = {
			AlertsGrid: {},
			CommandsGrid: {},
			DeviceDataHistory: {},
			RegistrationHistory: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormIoT_Device_MFD = function(executionContext, defaultWebResourceName) {
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
			DeviceDataHistory: {},
			msdyn_ConnectionState: {},
			msdyn_DeviceReportedProperties: {},
			msdyn_DeviceSettings: {},
			msdyn_LastActivityTime: {},
			msdyn_name: {},
			msdyn_Tags: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_D56B7A88_6981_4F4B_9AE2_6D1AEC457231: {
				Section: {
					_column_2_section_1: {},
					_column_3_section_1: {},
					_804F2D0A_D93D_400B_9A90_B1C0D9992B5F: {},
					Device_Data: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			DeviceDataHistory: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_iotdevice = {
		msdyn_IsSimulated : {
			No: 192350001,
			Yes: 192350000
		},
		msdyn_RegistrationStatus : {
			Error: 192350004,
			In_Progress: 192350002,
			Registered: 192350003,
			Unknown: 192350000,
			Unregistered: 192350001
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