'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormEntitlement = function(executionContext, defaultWebResourceName) {
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
					information: {},
					notes: {},
					entitlementterms: {},
					fieldservice: {},
					entitlementterms_2: {},
					entitlementapplications: {},
					entitlementtermsInUCI: {},
					products: {},
					contacts: {}
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
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			navCases: {}
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
	OptionSet.Entitlement = {
		AllocationTypeCode : {
			Number_of_cases: 0,
			Number_of_hours: 1,
			Discount_and_Price_List: 192350000
		},
		DecreaseRemainingOn : {
			Case_Resolution: 0,
			Case_Creation: 1
		},
		entitytype : {
			Work_Order: 192350000,
			Case: 0
		},
		KbAccessLevel : {
			Standard: 0,
			Premium: 1,
			None: 2
		},
		msdyn_AppliesTo : {
			Work_Order_Products: 690970000,
			Work_Order_Services: 690970001,
			Both_Work_Order_Products_Services: 690970002
		},
		StateCode : {
			Draft: 0,
			Active: 1,
			Cancelled: 2,
			Expired: 3,
			Waiting: 4
		},
		StatusCode : {
			Draft: 0,
			Active: 1,
			Cancelled: 2,
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