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
			CurrentCost1: DevKit.Controls.Money;
			/** Default unit for the product. */
			DefaultUoMId: DevKit.Controls.Lookup;
			/** Default unit group for the product. */
			DefaultUoMScheduleId: DevKit.Controls.Lookup;
			/** Description of the product. */
			Description: DevKit.Controls.String;
			/** Specifies the parent product family hierarchy. */
			ParentProductId: DevKit.Controls.Lookup;
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
			StandardCost1: DevKit.Controls.Money;
			/** Select a category for the product. */
			SubjectId: DevKit.Controls.Lookup;
			/** Date from which this product is valid. */
			ValidFromDate: DevKit.Controls.Date;
			/** Date to which this product is valid. */
			ValidToDate: DevKit.Controls.Date;
		}
		interface Navigation {
			msdyn_product_msdyn_actual_Product: DevKit.Controls.NavigationItem,
			msdyn_product_msdyn_agreementbookingproduct_Product: DevKit.Controls.NavigationItem,
			msdyn_product_msdyn_agreementbookingservice_Service: DevKit.Controls.NavigationItem,
			msdyn_product_msdyn_agreementinvoiceproduct_Product: DevKit.Controls.NavigationItem,
			msdyn_product_msdyn_customerasset_Product: DevKit.Controls.NavigationItem,
			msdyn_product_msdyn_fieldservicepricelistitem_ProductService: DevKit.Controls.NavigationItem,
			msdyn_product_msdyn_fieldservicesetting: DevKit.Controls.NavigationItem,
			msdyn_product_msdyn_incidenttypeproduct_Product: DevKit.Controls.NavigationItem,
			msdyn_product_msdyn_incidenttyperecommendationresult_ProductService: DevKit.Controls.NavigationItem,
			msdyn_product_msdyn_incidenttypeservice_Service: DevKit.Controls.NavigationItem,
			msdyn_product_msdyn_inventoryadjustmentproduct_Product: DevKit.Controls.NavigationItem,
			msdyn_product_msdyn_inventoryjournal_Product: DevKit.Controls.NavigationItem,
			msdyn_product_msdyn_orderinvoicingproduct_Product: DevKit.Controls.NavigationItem,
			msdyn_product_msdyn_productinventory_Product: DevKit.Controls.NavigationItem,
			msdyn_product_msdyn_purchaseorderproduct_Product: DevKit.Controls.NavigationItem,
			msdyn_product_msdyn_quotebookingproduct_Product: DevKit.Controls.NavigationItem,
			msdyn_product_msdyn_quotebookingservice_Service: DevKit.Controls.NavigationItem,
			msdyn_product_msdyn_quoteinvoicingproduct_Product: DevKit.Controls.NavigationItem,
			msdyn_product_msdyn_rmaproduct_Product: DevKit.Controls.NavigationItem,
			msdyn_product_msdyn_rtvproduct_Product: DevKit.Controls.NavigationItem,
			msdyn_product_msdyn_workorderproduct_Product: DevKit.Controls.NavigationItem,
			msdyn_product_msdyn_workorderservice_Service: DevKit.Controls.NavigationItem,
			opportunity_products: DevKit.Controls.NavigationItem,
			product_contract_line_items: DevKit.Controls.NavigationItem,
			Product_DynamicProperty: DevKit.Controls.NavigationItem,
			Product_DynamicPropertyAssociation: DevKit.Controls.NavigationItem,
			product_incidents: DevKit.Controls.NavigationItem,
			product_invoice_details: DevKit.Controls.NavigationItem,
			product_order_details: DevKit.Controls.NavigationItem,
			product_parent_product: DevKit.Controls.NavigationItem,
			product_price_levels: DevKit.Controls.NavigationItem,
			Product_ProductAssociation_Prod: DevKit.Controls.NavigationItem,
			product_ProductSubstitute_productid: DevKit.Controls.NavigationItem,
			product_ProductSubstitute_substitutedproductid: DevKit.Controls.NavigationItem,
			product_quote_details: DevKit.Controls.NavigationItem
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
		* Product [Main Form]
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
		* Product family Quick Create [Quick Create]
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
		* Product Quick Create [Quick Create]
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
		* Product Quick Create FS 5x5 [Quick Create]
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
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the product. */
		readonly CreatedBy: string;
		/** Shows the external party who created the record. */
		readonly CreatedByExternalParty: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the product. */
		readonly CreatedOnBehalfBy: string;
		/** Current cost for the product item. Used in price calculations. */
		CurrentCost: number;
		/** Value of the Current Cost in base currency. */
		readonly CurrentCost_Base: number;
		/** Default unit for the product. */
		DefaultUoMId: string;
		/** Default unit group for the product. */
		DefaultUoMScheduleId: string;
		/** Description of the product. */
		Description: string;
		/** Internal Use Only */
		DMTImportState: number;
		/** Shows the default image for the record. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		readonly EntityImageId: string;
		/** Exchange rate for the currency associated with the product with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Hierarchy path of the product. */
		readonly HierarchyPath: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Information that specifies whether the product is a kit. */
		IsKit: boolean;
		IsReparented: boolean;
		/** Information about whether the product is a stock item. */
		IsStockItem: boolean;
		/** Unique identifier of the user who last modified the product. */
		readonly ModifiedBy: string;
		/** Shows the external party who modified the record. */
		readonly ModifiedByExternalParty: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the product. */
		readonly ModifiedOnBehalfBy: string;
		/** Specify whether a product is to be converted to a customer asset. When a product is used on a work order, the system will automatically convert it into a customer asset when the work order is closed. */
		msdyn_ConvertToCustomerAsset: boolean;
		/** Default vendor that supplies this product */
		msdyn_DefaultVendor: string;
		msdyn_FieldServiceProductType: OptionSet.Product.msdyn_FieldServiceProductType;
		/** Describes whether product is opted out or not */
		msdyn_gdproptout: boolean;
		/** Type the name for the product when used on a purchase order. */
		msdyn_PurchaseName: string;
		/** Select whether the item is taxable. If an item is set as not taxable, it won't be taxable even on a taxable work order. */
		msdyn_Taxable: boolean;
		/** Shows the UPC Code for product. Used for bar code scanning. */
		msdyn_UPCCode: string;
		/** Name of the product. */
		Name: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Specifies the parent product family hierarchy. */
		ParentProductId: string;
		/** List price for the product item. Used in price calculations. */
		Price: number;
		/** Value of the List Price in base currency. */
		readonly Price_Base: number;
		/** Select the default price list for the product. */
		PriceLevelId: string;
		/** Contains the id of the process associated with the entity. */
		ProcessId: string;
		/** Unique identifier of the product. */
		ProductId: string;
		/** User-defined product ID. */
		ProductNumber: string;
		/** Product Structure. */
		ProductStructure: OptionSet.Product.ProductStructure;
		/** Type of product. */
		ProductTypeCode: OptionSet.Product.ProductTypeCode;
		/** URL for the Website associated with the product. */
		ProductUrl: string;
		/** Number of decimal places that can be used in monetary amounts for the product. */
		QuantityDecimal: number;
		/** Quantity of the product in stock. */
		QuantityOnHand: number;
		/** Product size. */
		Size: string;
		/** Contains the id of the stage where the entity is located. */
		StageId: string;
		/** Standard cost for the product item. Used in price calculations. */
		StandardCost: number;
		/** Value of the Standard Cost in base currency. */
		readonly StandardCost_Base: number;
		/** Status of the product. */
		StateCode: OptionSet.Product.StateCode;
		/** Reason for the status of the product. */
		StatusCode: OptionSet.Product.StatusCode;
		/** Stock volume of the product. */
		StockVolume: number;
		/** Stock weight of the product. */
		StockWeight: number;
		/** Select a category for the product. */
		SubjectId: string;
		/** Name of the product's supplier. */
		SupplierName: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the product. */
		TransactionCurrencyId: string;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Date from which this product is valid. */
		ValidFromDate_DateOnly: Date;
		/** Date to which this product is valid. */
		ValidToDate_DateOnly: Date;
		/** Unique identifier of vendor supplying the product. */
		VendorID: string;
		/** Name of the product vendor. */
		VendorName: string;
		/** Unique part identifier in vendor catalog of this product. */
		VendorPartNumber: string;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the product. */
			readonly CreatedBy: string;
			/** Shows the external party who created the record. */
			readonly CreatedByExternalParty: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the product. */
			readonly CreatedOnBehalfBy: string;
			/** Current cost for the product item. Used in price calculations. */
			readonly CurrentCost: string;
			/** Value of the Current Cost in base currency. */
			readonly CurrentCost_Base: string;
			/** Default unit for the product. */
			readonly DefaultUoMId: string;
			/** Default unit group for the product. */
			readonly DefaultUoMScheduleId: string;
			/** Description of the product. */
			readonly Description: string;
			/** Internal Use Only */
			readonly DMTImportState: string;
			/** Shows the default image for the record. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly EntityImageId: string;
			/** Exchange rate for the currency associated with the product with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Hierarchy path of the product. */
			readonly HierarchyPath: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Information that specifies whether the product is a kit. */
			readonly IsKit: string;
			readonly IsReparented: string;
			/** Information about whether the product is a stock item. */
			readonly IsStockItem: string;
			/** Unique identifier of the user who last modified the product. */
			readonly ModifiedBy: string;
			/** Shows the external party who modified the record. */
			readonly ModifiedByExternalParty: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the product. */
			readonly ModifiedOnBehalfBy: string;
			/** Specify whether a product is to be converted to a customer asset. When a product is used on a work order, the system will automatically convert it into a customer asset when the work order is closed. */
			readonly msdyn_ConvertToCustomerAsset: string;
			/** Default vendor that supplies this product */
			readonly msdyn_DefaultVendor: string;
			readonly msdyn_FieldServiceProductType: string;
			/** Describes whether product is opted out or not */
			readonly msdyn_gdproptout: string;
			/** Type the name for the product when used on a purchase order. */
			readonly msdyn_PurchaseName: string;
			/** Select whether the item is taxable. If an item is set as not taxable, it won't be taxable even on a taxable work order. */
			readonly msdyn_Taxable: string;
			/** Shows the UPC Code for product. Used for bar code scanning. */
			readonly msdyn_UPCCode: string;
			/** Name of the product. */
			readonly Name: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Specifies the parent product family hierarchy. */
			readonly ParentProductId: string;
			/** List price for the product item. Used in price calculations. */
			readonly Price: string;
			/** Value of the List Price in base currency. */
			readonly Price_Base: string;
			/** Select the default price list for the product. */
			readonly PriceLevelId: string;
			/** Contains the id of the process associated with the entity. */
			readonly ProcessId: string;
			/** Unique identifier of the product. */
			readonly ProductId: string;
			/** User-defined product ID. */
			readonly ProductNumber: string;
			/** Product Structure. */
			readonly ProductStructure: string;
			/** Type of product. */
			readonly ProductTypeCode: string;
			/** URL for the Website associated with the product. */
			readonly ProductUrl: string;
			/** Number of decimal places that can be used in monetary amounts for the product. */
			readonly QuantityDecimal: string;
			/** Quantity of the product in stock. */
			readonly QuantityOnHand: string;
			/** Product size. */
			readonly Size: string;
			/** Contains the id of the stage where the entity is located. */
			readonly StageId: string;
			/** Standard cost for the product item. Used in price calculations. */
			readonly StandardCost: string;
			/** Value of the Standard Cost in base currency. */
			readonly StandardCost_Base: string;
			/** Status of the product. */
			readonly StateCode: string;
			/** Reason for the status of the product. */
			readonly StatusCode: string;
			/** Stock volume of the product. */
			readonly StockVolume: string;
			/** Stock weight of the product. */
			readonly StockWeight: string;
			/** Select a category for the product. */
			readonly SubjectId: string;
			/** Name of the product's supplier. */
			readonly SupplierName: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the product. */
			readonly TransactionCurrencyId: string;
			/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
			readonly TraversedPath: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Date from which this product is valid. */
			readonly ValidFromDate_DateOnly: string;
			/** Date to which this product is valid. */
			readonly ValidToDate_DateOnly: string;
			/** Unique identifier of vendor supplying the product. */
			readonly VendorID: string;
			/** Name of the product vendor. */
			readonly VendorName: string;
			/** Unique part identifier in vendor catalog of this product. */
			readonly VendorPartNumber: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}