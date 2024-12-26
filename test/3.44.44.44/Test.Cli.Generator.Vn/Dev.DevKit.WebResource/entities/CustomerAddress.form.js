'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormThong_tin = function(executionContext, defaultWebResourceName) {
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
					additional_information: {},
					customer_address_information: {},
					phone_numbers: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {

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
	OptionSet.CustomerAddress = {
		AddressTypeCode : {
			Chinh: 3,
			Khac: 4,
			Nhan_hang: 2,
			Nhan_hoa_don: 1
		},
		FreightTermsCode : {
			Cang_giao_hang: 1,
			Mien_phi: 2
		},
		ObjectTypeCode : {
			Nguoi_lien_he: 2,
			Tai_khoan: 1
		},
		ParentIdTypeCode : {
		},
		ShippingMethodCode : {
			Ban_le_dat_hang_truoc: 7,
			Chuyen_cho_bang_may_bay: 1,
			Day_tai: 6,
			DHL: 2,
			FedEx: 3,
			Thu_gui_buu_dien: 5,
			UPS: 4
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