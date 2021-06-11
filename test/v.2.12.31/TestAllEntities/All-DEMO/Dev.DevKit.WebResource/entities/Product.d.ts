//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormProduct {
		interface Header extends DevKit.Controls.IHeader {
			/** Status of the product. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_FieldService_Sections {
			tab_3_section_1: DevKit.Controls.Section;
			tab_3_section_3: DevKit.Controls.Section;
			tab_3_section_4: DevKit.Controls.Section;
		}
		interface tab_notes_Sections {
			notes: DevKit.Controls.Section;
		}
		interface tab_price_list_items_Sections {
			knowledgesection: DevKit.Controls.Section;
			msdynsales_pricing_information: DevKit.Controls.Section;
			price_list_items_section: DevKit.Controls.Section;
			productsubstitute_items_section: DevKit.Controls.Section;
		}
		interface tab_product_details_Sections {
			costs: DevKit.Controls.Section;
			product_information: DevKit.Controls.Section;
		}
		interface tab_product_dynamic_properties_Sections {
			product_dynamic_properties_section: DevKit.Controls.Section;
		}
		interface tab_productassocaition_items_Sections {
			DynamicProperties: DevKit.Controls.Section;
			productassocaition_items_section: DevKit.Controls.Section;
		}
		interface tab_FieldService extends DevKit.Controls.ITab {
			Section: tab_FieldService_Sections;
		}
		interface tab_notes extends DevKit.Controls.ITab {
			Section: tab_notes_Sections;
		}
		interface tab_price_list_items extends DevKit.Controls.ITab {
			Section: tab_price_list_items_Sections;
		}
		interface tab_product_details extends DevKit.Controls.ITab {
			Section: tab_product_details_Sections;
		}
		interface tab_product_dynamic_properties extends DevKit.Controls.ITab {
			Section: tab_product_dynamic_properties_Sections;
		}
		interface tab_productassocaition_items extends DevKit.Controls.ITab {
			Section: tab_productassocaition_items_Sections;
		}
		interface Tabs {
			FieldService: tab_FieldService;
			notes: tab_notes;
			price_list_items: tab_price_list_items;
			product_details: tab_product_details;
			product_dynamic_properties: tab_product_dynamic_properties;
			productassocaition_items: tab_productassocaition_items;
		}
		interface Body {
			Tab: Tabs;
			/** Current cost for the product item. Used in price calculations. */
			CurrentCost: DevKit.Controls.Money;
			/** Current cost for the product item. Used in price calculations. */
			CurrentCost_1: DevKit.Controls.Money;
			/** Default unit for the product. */
			DefaultUoMId: DevKit.Controls.Lookup;
			/** Default unit group for the product. */
			DefaultUoMScheduleId: DevKit.Controls.Lookup;
			/** Description of the product. */
			Description: DevKit.Controls.String;
			/** Specify whether a product is to be converted to a customer asset. When a product is used on a work order, the system will automatically convert it into a customer asset when the work order is closed. */
			msdyn_ConvertToCustomerAsset: DevKit.Controls.Boolean;
			/** Default vendor that supplies this product */
			msdyn_DefaultVendor: DevKit.Controls.Lookup;
			msdyn_FieldServiceProductType: DevKit.Controls.OptionSet;
			/** Type the name for the product when used on a purchase order. */
			msdyn_PurchaseName: DevKit.Controls.String;
			/** Select whether the item is taxable. If an item is set as not taxable, it won't be taxable even on a taxable work order. */
			msdyn_Taxable: DevKit.Controls.Boolean;
			/** Shows the UPC Code for product. Used for bar code scanning. */
			msdyn_UPCCode: DevKit.Controls.String;
			/** Name of the product. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Specifies the parent product family hierarchy. */
			ParentProductId: DevKit.Controls.Lookup;
			/** Specifies the parent product family hierarchy. */
			ParentProductId_1: DevKit.Controls.Lookup;
			/** List price for the product item. Used in price calculations. */
			Price: DevKit.Controls.Money;
			/** Select the default price list for the product. */
			PriceLevelId: DevKit.Controls.Lookup;
			/** User-defined product ID. */
			ProductNumber: DevKit.Controls.String;
			/** Number of decimal places that can be used in monetary amounts for the product. */
			QuantityDecimal: DevKit.Controls.Integer;
			/** Standard cost for the product item. Used in price calculations. */
			StandardCost: DevKit.Controls.Money;
			/** Standard cost for the product item. Used in price calculations. */
			StandardCost_1: DevKit.Controls.Money;
			/** Select a category for the product. */
			SubjectId: DevKit.Controls.Lookup;
			/** Date from which this product is valid. */
			ValidFromDate: DevKit.Controls.Date;
			/** Date to which this product is valid. */
			ValidToDate: DevKit.Controls.Date;
		}
		interface Navigation {
			nav_msdyn_product_msdyn_agreementbookingproduct_Product: DevKit.Controls.NavigationItem,
			nav_msdyn_product_msdyn_agreementbookingservice_Service: DevKit.Controls.NavigationItem,
			nav_msdyn_product_msdyn_agreementinvoiceproduct_Product: DevKit.Controls.NavigationItem,
			nav_msdyn_product_msdyn_customerasset_Product: DevKit.Controls.NavigationItem,
			nav_msdyn_product_msdyn_fieldservicepricelistitem_ProductService: DevKit.Controls.NavigationItem,
			nav_msdyn_product_msdyn_fieldservicesetting: DevKit.Controls.NavigationItem,
			nav_msdyn_product_msdyn_incidenttypeproduct_Product: DevKit.Controls.NavigationItem,
			nav_msdyn_product_msdyn_incidenttypeservice_Service: DevKit.Controls.NavigationItem,
			nav_msdyn_product_msdyn_inventoryadjustmentproduct_Product: DevKit.Controls.NavigationItem,
			nav_msdyn_product_msdyn_inventoryjournal_Product: DevKit.Controls.NavigationItem,
			nav_msdyn_product_msdyn_productinventory_Product: DevKit.Controls.NavigationItem,
			nav_msdyn_product_msdyn_purchaseorderproduct_Product: DevKit.Controls.NavigationItem,
			nav_msdyn_product_msdyn_rmaproduct_Product: DevKit.Controls.NavigationItem,
			nav_msdyn_product_msdyn_rtvproduct_Product: DevKit.Controls.NavigationItem,
			nav_msdyn_product_msdyn_workorderproduct_Product: DevKit.Controls.NavigationItem,
			nav_msdyn_product_msdyn_workorderservice_Service: DevKit.Controls.NavigationItem,
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navComps: DevKit.Controls.NavigationItem,
			navDocument: DevKit.Controls.NavigationItem,
			navPrices: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem,
			navProductBundles: DevKit.Controls.NavigationItem,
			navSalesLit: DevKit.Controls.NavigationItem,
			navSubs: DevKit.Controls.NavigationItem
		}
		interface Grid {
			productassocaition_items: DevKit.Controls.Grid;
			product_dynamic_properties: DevKit.Controls.Grid;
			product_dynamic_properties_offline: DevKit.Controls.Grid;
			Price_List_Items: DevKit.Controls.Grid;
			productsubstitute_items: DevKit.Controls.Grid;
			KnowledgeArticlesSubGrid: DevKit.Controls.Grid;
		}
	}
	class FormProduct extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Product
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Product */
		Body: DevKit.FormProduct.Body;
		/** The Header section of form Product */
		Header: DevKit.FormProduct.Header;
		/** The Navigation of form Product */
		Navigation: DevKit.FormProduct.Navigation;
		/** The Grid of form Product */
		Grid: DevKit.FormProduct.Grid;
	}
	namespace FormProduct_Project_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Status of the product. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_notes_Sections {
			notes: DevKit.Controls.Section;
		}
		interface tab_price_list_items_Sections {
			price_list_items_section: DevKit.Controls.Section;
			productsubstitute_items_section: DevKit.Controls.Section;
		}
		interface tab_product_computed_fields_Sections {
			tab_6_section_1: DevKit.Controls.Section;
			tab_6_section_2: DevKit.Controls.Section;
		}
		interface tab_product_details_Sections {
			costs: DevKit.Controls.Section;
			product_information: DevKit.Controls.Section;
		}
		interface tab_product_dynamic_properties_Sections {
			product_dynamic_properties_section: DevKit.Controls.Section;
		}
		interface tab_productassocaition_items_Sections {
			DynamicProperties: DevKit.Controls.Section;
			productassocaition_items_section: DevKit.Controls.Section;
		}
		interface tab_notes extends DevKit.Controls.ITab {
			Section: tab_notes_Sections;
		}
		interface tab_price_list_items extends DevKit.Controls.ITab {
			Section: tab_price_list_items_Sections;
		}
		interface tab_product_computed_fields extends DevKit.Controls.ITab {
			Section: tab_product_computed_fields_Sections;
		}
		interface tab_product_details extends DevKit.Controls.ITab {
			Section: tab_product_details_Sections;
		}
		interface tab_product_dynamic_properties extends DevKit.Controls.ITab {
			Section: tab_product_dynamic_properties_Sections;
		}
		interface tab_productassocaition_items extends DevKit.Controls.ITab {
			Section: tab_productassocaition_items_Sections;
		}
		interface Tabs {
			notes: tab_notes;
			price_list_items: tab_price_list_items;
			product_computed_fields: tab_product_computed_fields;
			product_details: tab_product_details;
			product_dynamic_properties: tab_product_dynamic_properties;
			productassocaition_items: tab_productassocaition_items;
		}
		interface Body {
			Tab: Tabs;
			/** Current cost for the product item. Used in price calculations. */
			CurrentCost: DevKit.Controls.Money;
			/** Default unit for the product. */
			DefaultUoMId: DevKit.Controls.Lookup;
			/** Default unit group for the product. */
			DefaultUoMScheduleId: DevKit.Controls.Lookup;
			/** Description of the product. */
			Description: DevKit.Controls.String;
			/** Name of the product. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Specifies the parent product family hierarchy. */
			ParentProductId: DevKit.Controls.Lookup;
			/** List price for the product item. Used in price calculations. */
			Price: DevKit.Controls.Money;
			/** Select the default price list for the product. */
			PriceLevelId: DevKit.Controls.Lookup;
			/** User-defined product ID. */
			ProductNumber: DevKit.Controls.String;
			/** Number of decimal places that can be used in monetary amounts for the product. */
			QuantityDecimal: DevKit.Controls.Integer;
			/** Standard cost for the product item. Used in price calculations. */
			StandardCost: DevKit.Controls.Money;
			/** Select a category for the product. */
			SubjectId: DevKit.Controls.Lookup;
			/** Date from which this product is valid. */
			ValidFromDate: DevKit.Controls.Date;
			/** Date to which this product is valid. */
			ValidToDate: DevKit.Controls.Date;
		}
		interface Navigation {
			navDocument: DevKit.Controls.NavigationItem,
			navPrices: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Grid {
			productassocaition_items: DevKit.Controls.Grid;
			product_dynamic_properties: DevKit.Controls.Grid;
			Computed_Fields: DevKit.Controls.Grid;
			Price_List_Items: DevKit.Controls.Grid;
			productsubstitute_items: DevKit.Controls.Grid;
		}
	}
	class FormProduct_Project_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Product_Project_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Product_Project_Information */
		Body: DevKit.FormProduct_Project_Information.Body;
		/** The Header section of form Product_Project_Information */
		Header: DevKit.FormProduct_Project_Information.Header;
		/** The Navigation of form Product_Project_Information */
		Navigation: DevKit.FormProduct_Project_Information.Navigation;
		/** The Grid of form Product_Project_Information */
		Grid: DevKit.FormProduct_Project_Information.Grid;
	}
	namespace FormProduct_Quick_Create_FS_5x5 {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Default unit for the product. */
			DefaultUoMId: DevKit.Controls.Lookup;
			/** Default unit group for the product. */
			DefaultUoMScheduleId: DevKit.Controls.Lookup;
			msdyn_FieldServiceProductType: DevKit.Controls.OptionSet;
			/** Name of the product. */
			Name: DevKit.Controls.String;
			/** User-defined product ID. */
			ProductNumber: DevKit.Controls.String;
		}
	}
	class FormProduct_Quick_Create_FS_5x5 extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Product_Quick_Create_FS_5x5
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Product_Quick_Create_FS_5x5 */
		Body: DevKit.FormProduct_Quick_Create_FS_5x5.Body;
	}
	namespace FormProduct_family_Quick_Create {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Default unit for the product. */
			DefaultUoMId: DevKit.Controls.Lookup;
			/** Default unit group for the product. */
			DefaultUoMScheduleId: DevKit.Controls.Lookup;
			/** Name of the product. */
			Name: DevKit.Controls.String;
			/** Specifies the parent product family hierarchy. */
			ParentProductId: DevKit.Controls.Lookup;
			/** User-defined product ID. */
			ProductNumber: DevKit.Controls.String;
			/** Number of decimal places that can be used in monetary amounts for the product. */
			QuantityDecimal: DevKit.Controls.Integer;
			/** Date from which this product is valid. */
			ValidFromDate: DevKit.Controls.Date;
			/** Date to which this product is valid. */
			ValidToDate: DevKit.Controls.Date;
		}
	}
	class FormProduct_family_Quick_Create extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Product_family_Quick_Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Product_family_Quick_Create */
		Body: DevKit.FormProduct_family_Quick_Create.Body;
	}
	namespace FormProduct_Quick_Create {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Default unit for the product. */
			DefaultUoMId: DevKit.Controls.Lookup;
			/** Default unit group for the product. */
			DefaultUoMScheduleId: DevKit.Controls.Lookup;
			/** Description of the product. */
			Description: DevKit.Controls.String;
			/** Name of the product. */
			Name: DevKit.Controls.String;
			/** Specifies the parent product family hierarchy. */
			ParentProductId: DevKit.Controls.Lookup;
			/** User-defined product ID. */
			ProductNumber: DevKit.Controls.String;
			/** Number of decimal places that can be used in monetary amounts for the product. */
			QuantityDecimal: DevKit.Controls.Integer;
			/** Select a category for the product. */
			SubjectId: DevKit.Controls.Lookup;
			/** Date from which this product is valid. */
			ValidFromDate: DevKit.Controls.Date;
			/** Date to which this product is valid. */
			ValidToDate: DevKit.Controls.Date;
		}
	}
	class FormProduct_Quick_Create extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Product_Quick_Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Product_Quick_Create */
		Body: DevKit.FormProduct_Quick_Create.Body;
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
			/** 3 */
			Product_Bundle,
			/** 2 */
			Product_Family
		}
		enum ProductTypeCode {
			/** 4 */
			Flat_Fees,
			/** 2 */
			Miscellaneous_Charges,
			/** 1 */
			Sales_Inventory,
			/** 3 */
			Services
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 2 */
			Draft,
			/** 1 */
			Retired,
			/** 3 */
			Under_Revision
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 0 */
			Draft,
			/** 2 */
			Retired,
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
//{'JsForm':['Product','Product Quick Create FS 5x5','Project Information','Quick Create','Quick Create'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}