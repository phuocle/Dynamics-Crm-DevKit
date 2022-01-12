'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormEntitlement = function(executionContext, defaultWebResourceName) {
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
			AllocationTypeCode: {},
			CustomerId: {},
			DecreaseRemainingOn: {},
			Description: {},
			editableEntitlementChannelGridControl: {},
			EndDate: {},
			entitytype: {},
			grid_EntitlementApplications: {},
			grid_EntitlementChannel: {},
			grid_EntitlementContacts: {},
			grid_EntitlementProducts: {},
			IsDefault: {},
			msdyn_AppliesTo: {},
			msdyn_EntitlementPrioritization: {},
			msdyn_PercentDiscount: {},
			msdyn_PriceListToApply: {},
			Name: {},
			notescontrol: {},
			OwnerId: {},
			RemainingTerms: {},
			RestrictCaseCreation: {},
			SLAId: {},
			StartDate: {},
			TotalTerms: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					contacts: {},
					entitlementapplications: {},
					entitlementterms: {},
					entitlementterms_2: {},
					entitlementtermsInUCI: {},
					fieldservice: {},
					information: {},
					notes: {},
					products: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			CustomerId: {},
			EndDate: {},
			RemainingTerms: {},
			StateCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			editableEntitlementChannelGridControl: {},
			grid_EntitlementApplications: {},
			grid_EntitlementChannel: {},
			grid_EntitlementContacts: {},
			grid_EntitlementProducts: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			navCases: {}
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
	OptionSet.Entitlement = {
		AllocationTypeCode : {
			Discount_and_Price_List: 192350000,
			Number_of_cases: 0,
			Number_of_hours: 1
		},
		DecreaseRemainingOn : {
			Case_Creation: 1,
			Case_Resolution: 0
		},
		entitytype : {
			Case: 0,
			Work_Order: 192350000
		},
		KbAccessLevel : {
			None: 2,
			Premium: 1,
			Standard: 0
		},
		msdyn_AppliesTo : {
			Both_Work_Order_Products_Services: 690970002,
			Work_Order_Products: 690970000,
			Work_Order_Services: 690970001
		},
		StateCode : {
			Active: 1,
			Cancelled: 2,
			Draft: 0,
			Expired: 3,
			Waiting: 4
		},
		StatusCode : {
			Active: 1,
			Cancelled: 2,
			Draft: 0,
			Expired: 3,
			Waiting: 1200
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