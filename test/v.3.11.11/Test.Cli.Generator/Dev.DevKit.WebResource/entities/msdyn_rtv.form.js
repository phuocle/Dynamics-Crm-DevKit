'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormRTV = function(executionContext, defaultWebResourceName) {
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
			msdyn_name: {},
			msdyn_OriginatingRMA: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_TotalAmount: {},
			msdyn_Vendor: {},
			msdyn_VendorContact: {},
			notescontrol: {},
			OwnerId: {},
			rtvproductsgrid: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_8B74A7E7_5EDB_4A59_9B52_77FBD784E116: {
				Section: {
					_7E0518DA_7EF7_44EE_922D_7BB9472EB9EF: {},
					_8B74A7E7_5EDB_4A59_9B52_77FBD784E116_SECTION_2: {}
				}
			},
			rtvproductstab: {
				Section: {
					tab_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var footer = {
			statecode: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			rtvproductsgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_msdyn_rtv_msdyn_rmareceiptproduct_RTV: {},
			nav_msdyn_msdyn_rtv_msdyn_rtvproduct_RTV: {},
			navProcessSessions: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_rtv = {
		msdyn_SystemStatus : {
			Approved: 690970001,
			Canceled: 690970004,
			Draft: 690970000,
			Received: 690970003,
			Shipped: 690970002
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