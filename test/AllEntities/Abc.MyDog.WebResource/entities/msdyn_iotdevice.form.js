'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.Formmsdyn_iotdevice_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_DeviceId_1: {},
			msdyn_DeviceId_2: {},
			msdyn_DeviceReportedProperties: {},
			msdyn_DeviceReportedProperties_1: {},
			msdyn_DeviceSettings: {},
			msdyn_DeviceSettings_1: {},
			msdyn_IoTProviderInstance: {},
			msdyn_IsSimulated: {},
			msdyn_LastActivityTime: {},
			msdyn_name: {},
			msdyn_RegistrationMessage: {},
			msdyn_RegistrationStatus: {},
			msdyn_Tags: {},
			msdyn_Tags_1: {},
			msdyn_Timezone: {},
			RegistrationHistory: {},
			WebResource_PowerBIDevice: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_1BCFF70D_5615_4084_953F_2196583D6E79: {
				Section: {
					_A9378EBB_2FCC_41B7_8039_B2B2A89490E2: {},
					DeviceStatusSection: {},
					DeviceSettingsSection: {},
					Device_Summary_Visualization: {},
					Connected_Device_Readings: {}
				}
			},
			Device_Data: {
				Section: {
					Device_Data: {}
				}
			},
			AlertsTab: {
				Section: {
					AlertsSection: {}
				}
			},
			DeviceInsightsTab: {
				Section: {
					DeviceInsightsSection: {}
				}
			},
			CommandsTab: {
				Section: {
					CommandsSection: {}
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
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			DeviceDataHistory: {},
			AlertsGrid: {},
			CommandsGrid: {},
			RegistrationHistory: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
	MyDog.FormIoT_Device_MFD = function(executionContext, defaultWebResourceName) {
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
					_804F2D0A_D93D_400B_9A90_B1C0D9992B5F: {},
					_column_2_section_1: {},
					_column_3_section_1: {},
					Device_Data: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			DeviceDataHistory: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
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