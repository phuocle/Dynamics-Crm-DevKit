'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormPublisher_Information = function(executionContext, defaultWebResourceName) {
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
			Address1_City: {},
			Address1_Country: {},
			Address1_Line1: {},
			Address1_Line2: {},
			Address1_PostalCode: {},
			Address1_StateOrProvince: {},
			Address1_Telephone1: {},
			CustomizationOptionValuePrefix: {},
			CustomizationPrefix: {},
			Description: {},
			EMailAddress: {},
			FriendlyName: {},
			IFRAME_SolutionsMarketplace: {},
			preview_prefix: {},
			SupportingWebsiteUrl: {},
			UniqueName: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_70098AD5_4956_11DD_982E_00188B01DCE6: {
				Section: {
					_70098AD6_4956_11DD_982E_00188B01DCE6: {},
					_EAF2EDB4_7C5E_DD11_940F_00155D8AC303: {},
					description: {}
				}
			},
			_E1F7A9C9_A0E6_4C8B_ACBD_C6610FBD2343: {
				Section: {
					_6FE75F79_0CA8_4DBE_8C7B_6E68C17DE013: {},
					_CBF04024_5749_444C_BC51_CFAF839688BF: {}
				}
			},
			solutions_marketplace: {
				Section: {
					marketplacesection: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			publisher_appmodule: {},
			Publisher_PublisherAddress: {},
			publisher_solution: {}
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
	OptionSet.Publisher = {
		Address1_AddressTypeCode : {
			Default_Value: 1
		},
		Address1_ShippingMethodCode : {
			Default_Value: 1
		},
		Address2_AddressTypeCode : {
			Default_Value: 1
		},
		Address2_ShippingMethodCode : {
			Default_Value: 1
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