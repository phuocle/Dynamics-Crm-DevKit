'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_iotdevicecommand_Information = function(executionContext, defaultWebResourceName) {
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
			CreatedOn: {},
			msdyn_Command: {},
			msdyn_Command1: {},
			msdyn_CommandStatus: {},
			msdyn_CommandStatusReason: {},
			msdyn_CustomerAsset: {},
			msdyn_CustomerAsset1: {},
			msdyn_Device: {},
			msdyn_Device1: {},
			msdyn_DeviceID: {},
			msdyn_Message: {},
			msdyn_Message1: {},
			msdyn_Message2: {},
			msdyn_name: {},
			msdyn_name1: {},
			msdyn_ParentAlert: {},
			msdyn_SendToAllConnectedDevices: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_C820DAE9_B78D_4BBD_8FBE_DD255869040B: {
				Section: {
					_5E35860A_0CC6_4E8A_9288_9E77DDB50B1E: {},
					_C820DAE9_B78D_4BBD_8FBE_DD255869040B_SECTION_2: {},
					_C820DAE9_B78D_4BBD_8FBE_DD255869040B_SECTION_5: {},
					IoTAlert: {},
					MessageSection: {}
				}
			},
			mfdTab: {
				Section: {
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
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
	OptionSet.msdyn_iotdevicecommand = {
		msdyn_CommandStatus : {
			Error: 192350002,
			In_Progress: 192350000,
			Sent: 192350001
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