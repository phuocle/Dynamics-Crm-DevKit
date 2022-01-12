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
			KnowledgeArticlesSubGrid: DevKit.Controls.Grid;
			Price_List_Items: DevKit.Controls.Grid;
			product_dynamic_properties: DevKit.Controls.Grid;
			product_dynamic_properties_offline: DevKit.Controls.Grid;
			productassocaition_items: DevKit.Controls.Grid;
			productsubstitute_items: DevKit.Controls.Grid;
		}
	}
	class FormProduct extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Product Main Form
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
		/** The SidePanes of form Product */
		SidePanes: DevKit.SidePanes;
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
			Computed_Fields: DevKit.Controls.Grid;
			Price_List_Items: DevKit.Controls.Grid;
			product_dynamic_properties: DevKit.Controls.Grid;
			productassocaition_items: DevKit.Controls.Grid;
			productsubstitute_items: DevKit.Controls.Grid;
		}
	}
	class FormProduct_Project_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Product_Project_Information Main Form
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
		/** The SidePanes of form Product_Project_Information */
		SidePanes: DevKit.SidePanes;
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
		* DynamicsCrm.DevKit form Product_family_Quick_Create Quick Create
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
		* DynamicsCrm.DevKit form Product_Quick_Create Quick Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Product_Quick_Create */
		Body: DevKit.FormProduct_Quick_Create.Body;
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
		* DynamicsCrm.DevKit form Product_Quick_Create_FS_5x5 Quick Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Product_Quick_Create_FS_5x5 */
		Body: DevKit.FormProduct_Quick_Create_FS_5x5.Body;
	}
	class ProductApi {
		/**
		* DynamicsCrm.DevKit ProductApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the product. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the external party who created the record. */
		CreatedByExternalParty: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the product. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Current cost for the product item. Used in price calculations. */
		CurrentCost: DevKit.WebApi.MoneyValue;
		/** Value of the Current Cost in base currency. */
		CurrentCost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Default unit for the product. */
		DefaultUoMId: DevKit.WebApi.LookupValue;
		/** Default unit group for the product. */
		DefaultUoMScheduleId: DevKit.WebApi.LookupValue;
		/** Description of the product. */
		Description: DevKit.WebApi.StringValue;
		/** Internal Use Only */
		DMTImportState: DevKit.WebApi.IntegerValue;
		/** Shows the default image for the record. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** Exchange rate for the currency associated with the product with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Hierarchy path of the product. */
		HierarchyPath: DevKit.WebApi.StringValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Information that specifies whether the product is a kit. */
		IsKit: DevKit.WebApi.BooleanValue;
		IsReparented: DevKit.WebApi.BooleanValue;
		/** Information about whether the product is a stock item. */
		IsStockItem: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the user who last modified the product. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the external party who modified the record. */
		ModifiedByExternalParty: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the product. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Specify whether a product is to be converted to a customer asset. When a product is used on a work order, the system will automatically convert it into a customer asset when the work order is closed. */
		msdyn_ConvertToCustomerAsset: DevKit.WebApi.BooleanValue;
		/** Default vendor that supplies this product */
		msdyn_DefaultVendor: DevKit.WebApi.LookupValue;
		msdyn_FieldServiceProductType: DevKit.WebApi.OptionSetValue;
		/** Type the name for the product when used on a purchase order. */
		msdyn_PurchaseName: DevKit.WebApi.StringValue;
		/** Select whether the item is taxable. If an item is set as not taxable, it won't be taxable even on a taxable work order. */
		msdyn_Taxable: DevKit.WebApi.BooleanValue;
		/** Select the transaction category for this product. */
		msdyn_TransactionCategory: DevKit.WebApi.LookupValue;
		/** Shows the UPC Code for product. Used for bar code scanning. */
		msdyn_UPCCode: DevKit.WebApi.StringValue;
		/** Name of the product. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Specifies the parent product family hierarchy. */
		ParentProductId: DevKit.WebApi.LookupValue;
		/** List price for the product item. Used in price calculations. */
		Price: DevKit.WebApi.MoneyValue;
		/** Value of the List Price in base currency. */
		Price_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Select the default price list for the product. */
		PriceLevelId: DevKit.WebApi.LookupValue;
		/** Contains the id of the process associated with the entity. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the product. */
		ProductId: DevKit.WebApi.GuidValue;
		/** User-defined product ID. */
		ProductNumber: DevKit.WebApi.StringValue;
		/** Product Structure. */
		ProductStructure: DevKit.WebApi.OptionSetValue;
		/** Type of product. */
		ProductTypeCode: DevKit.WebApi.OptionSetValue;
		/** URL for the Website associated with the product. */
		ProductUrl: DevKit.WebApi.StringValue;
		/** Number of decimal places that can be used in monetary amounts for the product. */
		QuantityDecimal: DevKit.WebApi.IntegerValue;
		/** Quantity of the product in stock. */
		QuantityOnHand: DevKit.WebApi.DecimalValue;
		/** Product size. */
		Size: DevKit.WebApi.StringValue;
		/** Contains the id of the stage where the entity is located. */
		StageId: DevKit.WebApi.GuidValue;
		/** Standard cost for the product item. Used in price calculations. */
		StandardCost: DevKit.WebApi.MoneyValue;
		/** Value of the Standard Cost in base currency. */
		StandardCost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Status of the product. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the product. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Stock volume of the product. */
		StockVolume: DevKit.WebApi.DecimalValue;
		/** Stock weight of the product. */
		StockWeight: DevKit.WebApi.DecimalValue;
		/** Select a category for the product. */
		SubjectId: DevKit.WebApi.LookupValue;
		/** Name of the product's supplier. */
		SupplierName: DevKit.WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the product. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Date from which this product is valid. */
		ValidFromDate_DateOnly: DevKit.WebApi.DateOnlyValue;
		/** Date to which this product is valid. */
		ValidToDate_DateOnly: DevKit.WebApi.DateOnlyValue;
		/** Unique identifier of vendor supplying the product. */
		VendorID: DevKit.WebApi.StringValue;
		/** Name of the product vendor. */
		VendorName: DevKit.WebApi.StringValue;
		/** Unique part identifier in vendor catalog of this product. */
		VendorPartNumber: DevKit.WebApi.StringValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}