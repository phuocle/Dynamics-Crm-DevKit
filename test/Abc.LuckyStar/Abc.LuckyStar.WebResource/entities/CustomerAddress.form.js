'use strict';
/** @namespace LuckyStar */
var LuckyStar;
(function (LuckyStar) {
	'use strict';
	LuckyStar.FormCustomerAddress_Information = function(executionContext, defaultWebResourceName) {
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
			AddressTypeCode: {},
			City: {},
			Country: {},
			Fax: {},
			FreightTermsCode: {},
			Line1: {},
			Line2: {},
			Line3: {},
			Name: {},
			PostalCode: {},
			PrimaryContactName: {},
			ShippingMethodCode: {},
			StateOrProvince: {},
			Telephone1: {},
			Telephone2: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					customer_address_information: {},
					phone_numbers: {},
					additional_information: {}
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
})(LuckyStar || (LuckyStar = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.CustomerAddress = {
		AddressTypeCode : {
			Bill_To: 1,
			Ship_To: 2,
			Primary: 3,
			Other: 4
		},
		FreightTermsCode : {
			FOB: 1,
			No_Charge: 2
		},
		ShippingMethodCode : {
			Airborne: 1,
			DHL: 2,
			FedEx: 3,
			UPS: 4,
			Postal_Mail: 5,
			Full_Load: 6,
			Will_Call: 7
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