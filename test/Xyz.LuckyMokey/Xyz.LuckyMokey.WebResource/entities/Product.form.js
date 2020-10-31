'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormProduct = function(executionContext, defaultWebResourceName) {
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
			CurrentCost: {},
			CurrentCost_1: {},
			DefaultUoMId: {},
			DefaultUoMScheduleId: {},
			Description: {},
			DynamicPropertiesList_LinkControl: {},
			msdyn_ConvertToCustomerAsset: {},
			msdyn_DefaultVendor: {},
			msdyn_FieldServiceProductType: {},
			msdyn_PurchaseName: {},
			msdyn_Taxable: {},
			msdyn_UPCCode: {},
			Name: {},
			notescontrol: {},
			ParentProductId: {},
			ParentProductId_1: {},
			Price: {},
			Price_List_Items: {},
			PriceLevelId: {},
			product_dynamic_properties: {},
			product_dynamic_properties_offline: {},
			productassocaition_items: {},
			ProductNumber: {},
			productsubstitute_items: {},
			QuantityDecimal: {},
			StandardCost: {},
			StandardCost_1: {},
			SubjectId: {},
			ValidFromDate: {},
			ValidToDate: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			product_details: {
				Section: {
					product_information: {},
					costs: {}
				}
			},
			productassocaition_items: {
				Section: {
					productassocaition_items_section: {},
					DynamicProperties: {}
				}
			},
			product_dynamic_properties: {
				Section: {
					product_dynamic_properties_section: {}
				}
			},
			price_list_items: {
				Section: {
					price_list_items_section: {},
					msdynsales_pricing_information: {},
					productsubstitute_items_section: {}
				}
			},
			notes: {
				Section: {
					notes: {}
				}
			},
			FieldService: {
				Section: {
					tab_3_section_1: {},
					tab_3_section_4: {},
					tab_3_section_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			StateCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			navPrices: {},
			navDocument: {},
			navAsyncOperations: {},
			navProcessSessions: {},
			navSubs: {},
			navComps: {},
			navProductBundles: {},
			navSalesLit: {},
			nav_msdyn_product_msdyn_fieldservicepricelistitem_ProductService: {},
			nav_msdyn_product_msdyn_productinventory_Product: {},
			nav_msdyn_product_msdyn_agreementbookingproduct_Product: {},
			nav_msdyn_product_msdyn_agreementbookingservice_Service: {},
			nav_msdyn_product_msdyn_agreementinvoiceproduct_Product: {},
			nav_msdyn_product_msdyn_customerasset_Product: {},
			nav_msdyn_product_msdyn_fieldservicesetting: {},
			nav_msdyn_product_msdyn_incidenttypeproduct_Product: {},
			nav_msdyn_product_msdyn_incidenttypeservice_Service: {},
			nav_msdyn_product_msdyn_inventoryadjustmentproduct_Product: {},
			nav_msdyn_product_msdyn_inventoryjournal_Product: {},
			nav_msdyn_product_msdyn_purchaseorderproduct_Product: {},
			nav_msdyn_product_msdyn_rmaproduct_Product: {},
			nav_msdyn_product_msdyn_rtvproduct_Product: {},
			nav_msdyn_product_msdyn_workorderproduct_Product: {},
			nav_msdyn_product_msdyn_workorderservice_Service: {}
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
	OptionSet.Product = {
		msdyn_FieldServiceProductType : {
			Inventory: 690970000,
			Non_Inventory: 690970001,
			Service: 690970002
		},
		ProductStructure : {
			Product: 1,
			Product_Family: 2,
			Product_Bundle: 3
		},
		ProductTypeCode : {
			Sales_Inventory: 1,
			Miscellaneous_Charges: 2,
			Services: 3,
			Flat_Fees: 4
		},
		StateCode : {
			Active: 0,
			Retired: 1,
			Draft: 2,
			Under_Revision: 3
		},
		StatusCode : {
			Active: 1,
			Retired: 2,
			Draft: 0,
			Under_Revision: 3
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