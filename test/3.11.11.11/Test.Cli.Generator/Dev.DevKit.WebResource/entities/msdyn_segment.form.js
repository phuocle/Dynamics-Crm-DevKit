﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_segment_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_description: {},
			msdyn_entityfieldname: {},
			msdyn_entityfilter: {},
			msdyn_name: {},
			msdyn_objecttypecode: {},
			msdyn_sequence: {},
			msdyn_triggertype: {},
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
	OptionSet.msdyn_segment = {
		msdyn_objecttypecode : {
			Lead: 4,
			Opportunity: 3,
			Other_Entity: 5
		},
		msdyn_triggertype : {
			Entity_Create: 0,
			FieldUpdate: 1
		},
		OwnerIdType : {
		},
		statecode : {
			Active: 0,
			Inactive: 1,
			Pause: 2
		},
		statuscode : {
			Active: 1,
			Inactive: 2,
			Pause: 3
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