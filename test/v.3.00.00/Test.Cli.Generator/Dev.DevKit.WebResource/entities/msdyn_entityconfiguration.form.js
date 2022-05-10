'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_entityconfiguration_Main_Form = function(executionContext, defaultWebResourceName) {
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
			msdyn_CopyGeoDataFromURS: {},
			msdyn_DateFilter1FieldName: {},
			msdyn_DateFilter1LastXDay: {},
			msdyn_DateFilter1NextXDay: {},
			msdyn_DateFilter2FieldName: {},
			msdyn_DateFilter2LastXDay: {},
			msdyn_DateFilter2NextXDay: {},
			msdyn_EnabledAs: {},
			msdyn_EnableTriggerFilters: {},
			msdyn_Entity: {},
			msdyn_LatitudeFieldName: {},
			msdyn_LongitudeFieldName: {},
			msdyn_name: {},
			msdyn_Radius: {},
			msdyn_timestampfieldname: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

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
	OptionSet.msdyn_entityconfiguration = {
		msdyn_EnabledAs : {
			Geofence: 192350000,
			Geotracked: 192350001
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