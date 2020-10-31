'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formmsdyn_iotfieldmapping_Information = function(executionContext, defaultWebResourceName) {
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
					_F16376E7_2BAA_42D4_9A1A_3443CF1688C0: {},
					_4D9E1ADB_E5B9_4215_99CE_9028EC28EDF5_SECTION_2: {}
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
	OptionSet.msdyn_iotfieldmapping = {
		ComponentState : {
			Published: 0,
			Unpublished: 1,
			Deleted: 2,
			Deleted_Unpublished: 3
		},
		msdyn_FieldDataFormat : {
			Direct: 192350000,
			JSON: 192350001
		},
		msdyn_MappingType : {
			Device_identifier: 192350000,
			Rule_identifier: 192350001,
			Device_property: 192350002
		},
		msdyn_SearchType : {
			Direct_Path: 192350000,
			Key_Value_Path: 192350001
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