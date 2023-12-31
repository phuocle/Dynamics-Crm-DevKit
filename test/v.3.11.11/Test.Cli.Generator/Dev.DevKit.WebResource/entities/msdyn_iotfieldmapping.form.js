'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_iotfieldmapping_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_DirectPathOrKeyPath: {},
			msdyn_FieldDataFormat: {},
			msdyn_FieldName: {},
			msdyn_MappingType: {},
			msdyn_ModelInputFieldName: {},
			msdyn_SearchType: {},
			msdyn_ValuePath: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_4D9E1ADB_E5B9_4215_99CE_9028EC28EDF5: {
				Section: {
					_4D9E1ADB_E5B9_4215_99CE_9028EC28EDF5_SECTION_2: {},
					_F16376E7_2BAA_42D4_9A1A_3443CF1688C0: {}
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
	OptionSet.msdyn_iotfieldmapping = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_FieldDataFormat : {
			Direct: 192350000,
			JSON: 192350001
		},
		msdyn_MappingType : {
			Device_identifier: 192350000,
			Device_property: 192350002,
			Rule_identifier: 192350001
		},
		msdyn_SearchType : {
			Direct_Path: 192350000,
			Key_Value_Path: 192350001
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