﻿'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.Formmsdyn_projectapproval_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_CostQuantity: {},
			msdyn_ExpenseEntry: {},
			msdyn_ExpenseEntry_1: {},
			msdyn_ExternalComments: {},
			msdyn_hasreceipt: {},
			msdyn_SalesPrice: {},
			msdyn_SalesQuantity: {},
			msdyn_SubmittedBy: {},
			msdyn_TimeEntry: {},
			msdyn_TimeEntry_1: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_6D5860C6_AEB2_4D17_9DB3_226A9D6466F5: {
				Section: {
					_D55B3080_93D0_497A_A1C6_823D788E066A: {},
					_column_2_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyn_ApprovedBy: {},
			msdyn_bookableresource: {},
			msdyn_recordstage: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {
			TimeEntryDetail: {},
			ExpenseEntryDetail: {}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
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
	OptionSet.msdyn_projectapproval = {
		msdyn_BillingType : {
			Chargeable: 192350001,
			Complimentary: 192350002,
			Non_Chargeable: 192350000,
			Not_Available: 192350003
		},
		msdyn_EntryType : {
			Expense: 1,
			Time: 0
		},
		msdyn_recordstage : {
			Approved: 2,
			Pending: 3,
			Recall_Request_Approved: 5,
			Recall_Request_Rejected: 6,
			Recall_Requested: 4,
			Rejected: 1,
			Submitted: 0
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