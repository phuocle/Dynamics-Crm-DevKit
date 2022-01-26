'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_iotalert_Information = function(executionContext, defaultWebResourceName) {
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
			DeviceCommandsGrid: {},
			msdyn_AlertData: {},
			msdyn_AlertData1: {},
			msdyn_alertpriorityscore: {},
			msdyn_AlertTime: {},
			msdyn_AlertToken: {},
			msdyn_alerttype: {},
			msdyn_AlertURL: {},
			msdyn_CustomerAsset: {},
			msdyn_CustomerAsset1: {},
			msdyn_Description: {},
			msdyn_Device: {},
			msdyn_Device1: {},
			msdyn_Device2: {},
			msdyn_DeviceID: {},
			msdyn_ParentAlert: {},
			msdyn_ParentAlertToken: {},
			msdyn_suggestedincidenttype: {},
			msdyn_suggestedpriority: {},
			notescontrol: {},
			statuscode: {},
			WebResource_PowerBIAlert: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_B4D9BB28_1BD1_4896_AA83_A8CD2A781DDE: {
				Section: {
					AlertDataSection: {},
					AssetSection: {},
					Connected_Device_Readings: {},
					Device_Summary_Visualization: {},
					HierarchySection: {},
					SuggestionsSection: {}
				}
			},
			AssetDetailsTab: {
				Section: {
					AssetWorkOrdersSection: {}
				}
			},
			DeviceCommandsTab: {
				Section: {
					DeviceCommandsSection: {}
				}
			},
			DeviceInsightsTab: {
				Section: {
					DeviceInsightsSection: {}
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
		var _CFS_IoT_Alert_Process_Flow = {
			msdyn_AlertTime: {},
			msdyn_Description: {},
			msdyn_Device: {}
		}
		devKit.LoadFields(formContext, _CFS_IoT_Alert_Process_Flow, "header_process_");
		process.CFS_IoT_Alert_Process_Flow = _CFS_IoT_Alert_Process_Flow;
		var _IoT_Alert_to_Case_Process = {
			msdyn_AlertTime: {},
			msdyn_CustomerAsset: {},
			msdyn_Description: {}
		}
		devKit.LoadFields(formContext, _IoT_Alert_to_Case_Process, "header_process_");
		process.IoT_Alert_to_Case_Process = _IoT_Alert_to_Case_Process;
		form.Process = process;
		var quickForm = {
			AssetWorkOrdersView: {

			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			DeviceCommandsGrid: {},
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
	OptionSet.msdyn_iotalert = {
		msdyn_alerttype : {
			Anomaly: 192350000,
			Info: 192350001,
			Preventive_Maintenance: 192350002,
			Test: 192350003
		},
		msdyn_suggestedpriority : {
			Calculating: 192350000,
			High: 192350001,
			Low: 192350002,
			No_Suggestions: 192350003
		},
		statecode : {
			Active: 0,
			Closed: 3,
			Inactive: 1,
			InProgress: 2
		},
		statuscode : {
			Active: 1,
			Closed: 6,
			In_Progress_Case_Created: 3,
			In_Progress_Command_Failed: 7,
			In_Progress_Command_Sent: 5,
			In_Progress_Work_Order_Created: 4,
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