﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormProduct = function(executionContext, defaultWebResourceName) {
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
			CurrentCost1: {},
			DefaultUoMId: {},
			DefaultUoMScheduleId: {},
			Description: {},
			DynamicPropertiesList_LinkControl: {},
			KnowledgeArticlesSubGrid: {},
			msdyn_ConvertToCustomerAsset: {},
			msdyn_DefaultVendor: {},
			msdyn_FieldServiceProductType: {},
			msdyn_PurchaseName: {},
			msdyn_Taxable: {},
			msdyn_UPCCode: {},
			Name: {},
			notescontrol: {},
			ParentProductId: {},
			ParentProductId1: {},
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
			StandardCost1: {},
			SubjectId: {},
			ValidFromDate: {},
			ValidToDate: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			FieldService: {
				Section: {
					tab_3_section_1: {},
					tab_3_section_3: {},
					tab_3_section_4: {}
				}
			},
			notes: {
				Section: {
					notes: {}
				}
			},
			price_list_items: {
				Section: {
					knowledgesection: {},
					msdynsales_pricing_information: {},
					price_list_items_section: {},
					productsubstitute_items_section: {}
				}
			},
			product_details: {
				Section: {
					costs: {},
					product_information: {}
				}
			},
			product_dynamic_properties: {
				Section: {
					product_dynamic_properties_section: {}
				}
			},
			productassocaition_items: {
				Section: {
					DynamicProperties: {},
					productassocaition_items_section: {}
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
		var grid = {
			KnowledgeArticlesSubGrid: {},
			Price_List_Items: {},
			product_dynamic_properties: {},
			product_dynamic_properties_offline: {},
			productassocaition_items: {},
			productsubstitute_items: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyn_product_msdyn_actual_Product: {},
			msdyn_product_msdyn_agreementbookingproduct_Product: {},
			msdyn_product_msdyn_agreementbookingservice_Service: {},
			msdyn_product_msdyn_agreementinvoiceproduct_Product: {},
			msdyn_product_msdyn_customerasset_Product: {},
			msdyn_product_msdyn_fieldservicepricelistitem_ProductService: {},
			msdyn_product_msdyn_fieldservicesetting: {},
			msdyn_product_msdyn_incidenttypeproduct_Product: {},
			msdyn_product_msdyn_incidenttyperecommendationresult_ProductService: {},
			msdyn_product_msdyn_incidenttypeservice_Service: {},
			msdyn_product_msdyn_inventoryadjustmentproduct_Product: {},
			msdyn_product_msdyn_inventoryjournal_Product: {},
			msdyn_product_msdyn_orderinvoicingproduct_Product: {},
			msdyn_product_msdyn_productinventory_Product: {},
			msdyn_product_msdyn_purchaseorderproduct_Product: {},
			msdyn_product_msdyn_quotebookingproduct_Product: {},
			msdyn_product_msdyn_quotebookingservice_Service: {},
			msdyn_product_msdyn_quoteinvoicingproduct_Product: {},
			msdyn_product_msdyn_rmaproduct_Product: {},
			msdyn_product_msdyn_rtvproduct_Product: {},
			msdyn_product_msdyn_workorderproduct_Product: {},
			msdyn_product_msdyn_workorderservice_Service: {},
			opportunity_products: {},
			product_contract_line_items: {},
			Product_DynamicProperty: {},
			Product_DynamicPropertyAssociation: {},
			product_incidents: {},
			product_invoice_details: {},
			product_order_details: {},
			product_parent_product: {},
			product_price_levels: {},
			Product_ProductAssociation_Prod: {},
			product_ProductSubstitute_productid: {},
			product_ProductSubstitute_substitutedproductid: {},
			product_quote_details: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormProduct_family_Quick_Create = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			DefaultUoMId: {},
			DefaultUoMScheduleId: {},
			Name: {},
			ParentProductId: {},
			ProductNumber: {},
			QuantityDecimal: {},
			ValidFromDate: {},
			ValidToDate: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormProduct_Quick_Create = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			DefaultUoMId: {},
			DefaultUoMScheduleId: {},
			Description: {},
			Name: {},
			ParentProductId: {},
			ProductNumber: {},
			QuantityDecimal: {},
			SubjectId: {},
			ValidFromDate: {},
			ValidToDate: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormProduct_Quick_Create_FS_5x5 = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			DefaultUoMId: {},
			DefaultUoMScheduleId: {},
			msdyn_FieldServiceProductType: {},
			Name: {},
			ProductNumber: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
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
			Product_Bundle: 3,
			Product_Family: 2
		},
		ProductTypeCode : {
			Flat_Fees: 4,
			Miscellaneous_Charges: 2,
			Sales_Inventory: 1,
			Services: 3
		},
		StateCode : {
			Active: 0,
			Draft: 2,
			Retired: 1,
			Under_Revision: 3
		},
		StatusCode : {
			Active: 1,
			Draft: 0,
			Retired: 2,
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