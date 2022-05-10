﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_orderlineresourcecategory_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_BillingType: {},
			msdyn_description: {},
			msdyn_ResourceCategory: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_2D187AD5_0373_4D39_B4E5_27AB42DFCF85: {
				Section: {
					_2D187AD5_0373_4D39_B4E5_27AB42DFCF85_SECTION_2: {}
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
	OptionSet.msdyn_orderlineresourcecategory = {
		msdyn_BillingType : {
			Chargeable: 192350001,
			Complimentary: 192350002,
			Non_Chargeable: 192350000,
			Not_Available: 192350003
		},
		msdyn_TransactionClassification : {
			Additional: 690970001,
			Commission: 690970000,
			Expense: 192350001,
			Fee: 192350004,
			Material: 192350002,
			Milestone: 192350003,
			Tax: 690970002,
			Time: 192350000
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