//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormProduct {
		interface Header {
			/** Status of the product. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_product_details_Sections {
			product_information: DevKit.Form.Controls.ControlSection;
			costs: DevKit.Form.Controls.ControlSection;
		}
		interface tab_productassocaition_items_Sections {
			productassocaition_items_section: DevKit.Form.Controls.ControlSection;
			DynamicProperties: DevKit.Form.Controls.ControlSection;
		}
		interface tab_product_dynamic_properties_Sections {
			product_dynamic_properties_section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_price_list_items_Sections {
			price_list_items_section: DevKit.Form.Controls.ControlSection;
			msdynsales_pricing_information: DevKit.Form.Controls.ControlSection;
			productsubstitute_items_section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_notes_Sections {
			notes: DevKit.Form.Controls.ControlSection;
		}
		interface tab_FieldService_Sections {
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
			tab_3_section_4: DevKit.Form.Controls.ControlSection;
			tab_3_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_product_details extends DevKit.Form.Controls.IControlTab {
			Section: tab_product_details_Sections;
		}
		interface tab_productassocaition_items extends DevKit.Form.Controls.IControlTab {
			Section: tab_productassocaition_items_Sections;
		}
		interface tab_product_dynamic_properties extends DevKit.Form.Controls.IControlTab {
			Section: tab_product_dynamic_properties_Sections;
		}
		interface tab_price_list_items extends DevKit.Form.Controls.IControlTab {
			Section: tab_price_list_items_Sections;
		}
		interface tab_notes extends DevKit.Form.Controls.IControlTab {
			Section: tab_notes_Sections;
		}
		interface tab_FieldService extends DevKit.Form.Controls.IControlTab {
			Section: tab_FieldService_Sections;
		}
		interface Tabs {
			product_details: tab_product_details;
			productassocaition_items: tab_productassocaition_items;
			product_dynamic_properties: tab_product_dynamic_properties;
			price_list_items: tab_price_list_items;
			notes: tab_notes;
			FieldService: tab_FieldService;
		}
		interface Body {
			Tab: Tabs;
			productassocaition_items: DevKit.Form.Controls.ControlGrid;
			product_dynamic_properties: DevKit.Form.Controls.ControlGrid;
			product_dynamic_properties_offline: DevKit.Form.Controls.ControlGrid;
			Price_List_Items: DevKit.Form.Controls.ControlGrid;
			productsubstitute_items: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Current cost for the product item. Used in price calculations. */
			CurrentCost: DevKit.Form.Controls.ControlMoney;
			/** Current cost for the product item. Used in price calculations. */
			CurrentCost_1: DevKit.Form.Controls.ControlMoney;
			/** Default unit for the product. */
			DefaultUoMId: DevKit.Form.Controls.ControlLookup;
			/** Default unit group for the product. */
			DefaultUoMScheduleId: DevKit.Form.Controls.ControlLookup;
			/** Description of the product. */
			Description: DevKit.Form.Controls.ControlString;
			/** Specify whether a product is to be converted to a customer asset. When a product is used on a work order, the system will automatically convert it into a customer asset when the work order is closed. */
			msdyn_ConvertToCustomerAsset: DevKit.Form.Controls.ControlBoolean;
			/** Default vendor that supplies this product */
			msdyn_DefaultVendor: DevKit.Form.Controls.ControlLookup;
			msdyn_FieldServiceProductType: DevKit.Form.Controls.ControlOptionSet;
			/** Type the name for the product when used on a purchase order. */
			msdyn_PurchaseName: DevKit.Form.Controls.ControlString;
			/** Select whether the item is taxable. If an item is set as not taxable, it won't be taxable even on a taxable work order. */
			msdyn_Taxable: DevKit.Form.Controls.ControlBoolean;
			/** Shows the UPC Code for product. Used for bar code scanning. */
			msdyn_UPCCode: DevKit.Form.Controls.ControlString;
			/** Name of the product. */
			Name: DevKit.Form.Controls.ControlString;
			/** Specifies the parent product family hierarchy. */
			ParentProductId: DevKit.Form.Controls.ControlLookup;
			/** Specifies the parent product family hierarchy. */
			ParentProductId_1: DevKit.Form.Controls.ControlLookup;
			/** List price for the product item. Used in price calculations. */
			Price: DevKit.Form.Controls.ControlMoney;
			/** Select the default price list for the product. */
			PriceLevelId: DevKit.Form.Controls.ControlLookup;
			/** User-defined product ID. */
			ProductNumber: DevKit.Form.Controls.ControlString;
			/** Number of decimal places that can be used in monetary amounts for the product. */
			QuantityDecimal: DevKit.Form.Controls.ControlInteger;
			/** Standard cost for the product item. Used in price calculations. */
			StandardCost: DevKit.Form.Controls.ControlMoney;
			/** Standard cost for the product item. Used in price calculations. */
			StandardCost_1: DevKit.Form.Controls.ControlMoney;
			/** Select a category for the product. */
			SubjectId: DevKit.Form.Controls.ControlLookup;
			/** Date from which this product is valid. */
			ValidFromDate: DevKit.Form.Controls.ControlDate;
			/** Date to which this product is valid. */
			ValidToDate: DevKit.Form.Controls.ControlDate;
		}
		interface Navigation {
			navPrices: DevKit.Form.Controls.ControlNavigationItem,
			navDocument: DevKit.Form.Controls.ControlNavigationItem,
			navAsyncOperations: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			navSubs: DevKit.Form.Controls.ControlNavigationItem,
			navComps: DevKit.Form.Controls.ControlNavigationItem,
			navProductBundles: DevKit.Form.Controls.ControlNavigationItem,
			navSalesLit: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_product_msdyn_fieldservicepricelistitem_ProductService: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_product_msdyn_productinventory_Product: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_product_msdyn_agreementbookingproduct_Product: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_product_msdyn_agreementbookingservice_Service: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_product_msdyn_agreementinvoiceproduct_Product: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_product_msdyn_customerasset_Product: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_product_msdyn_fieldservicesetting: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_product_msdyn_incidenttypeproduct_Product: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_product_msdyn_incidenttypeservice_Service: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_product_msdyn_inventoryadjustmentproduct_Product: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_product_msdyn_inventoryjournal_Product: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_product_msdyn_purchaseorderproduct_Product: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_product_msdyn_rmaproduct_Product: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_product_msdyn_rtvproduct_Product: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_product_msdyn_workorderproduct_Product: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_product_msdyn_workorderservice_Service: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormProduct extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Product
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Product */
		Body: LuckyMokey.FormProduct.Body;
		/** The Header section of form Product */
		Header: LuckyMokey.FormProduct.Header;
		/** The Navigation of form Product */
		Navigation: LuckyMokey.FormProduct.Navigation;
	}
}
declare namespace OptionSet {
	namespace Product {
		enum msdyn_FieldServiceProductType {
			/** 690970000 */
			Inventory,
			/** 690970001 */
			Non_Inventory,
			/** 690970002 */
			Service
		}
		enum ProductStructure {
			/** 1 */
			Product,
			/** 2 */
			Product_Family,
			/** 3 */
			Product_Bundle
		}
		enum ProductTypeCode {
			/** 1 */
			Sales_Inventory,
			/** 2 */
			Miscellaneous_Charges,
			/** 3 */
			Services,
			/** 4 */
			Flat_Fees
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Retired,
			/** 2 */
			Draft,
			/** 3 */
			Under_Revision
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Retired,
			/** 0 */
			Draft,
			/** 3 */
			Under_Revision
		}
        enum RollupState {
            /** 0 - Attribute value is yet to be calculated */
            NotCalculated,
            /** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
            Calculated,
            /** 2 - Attribute value calculation lead to overflow error */
            OverflowError,
            /** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
            OtherError,
            /** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
            RetryLimitExceeded,
            /** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
            HierarchicalRecursionLimitReached,
            /** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
            LoopDetected
        }
	}
}
//{'JsForm':['Product'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}