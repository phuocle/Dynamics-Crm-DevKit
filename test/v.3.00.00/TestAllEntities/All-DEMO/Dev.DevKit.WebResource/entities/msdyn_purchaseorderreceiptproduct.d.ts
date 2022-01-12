//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_purchaseorderreceiptproduct_Information {
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_4_Sections {
			tab_4_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface tab_tab_4 extends DevKit.Controls.ITab {
			Section: tab_tab_4_Sections;
		}
		interface Tabs {
			tab_3: tab_tab_3;
			tab_4: tab_tab_4;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier for Resource Booking associated with Purchase Order Receipt Product. */
			msdyn_AssociateToBooking: DevKit.Controls.Lookup;
			/** Unique identifier for Warehouse associated with Purchase Order Receipt Product. */
			msdyn_AssociateToWarehouse: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order associated with Purchase Order Receipt Product. */
			msdyn_AssociateToWorkOrder: DevKit.Controls.Lookup;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Purchase Order associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrder: DevKit.Controls.Lookup;
			/** Unique identifier for Purchase Order Bill associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrderBill: DevKit.Controls.Lookup;
			/** Unique identifier for Purchase Order Product associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrderProduct: DevKit.Controls.Lookup;
			/** Unique identifier for Purchase Order Receipt associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrderReceipt: DevKit.Controls.Lookup;
			msdyn_Quantity: DevKit.Controls.Double;
			msdyn_TotalCost: DevKit.Controls.Money;
			msdyn_UnitCost: DevKit.Controls.Money;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Purchase Order Receipt Product */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_purchaseorderreceiptproduct_msdyn_inventoryjournal_PurchaseOrderReceiptProduct: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_purchaseorderreceiptproduct_msdyn_workorderproduct_PurchaseOrderReceiptProduct: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_purchaseorderreceiptproduct_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_purchaseorderreceiptproduct_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_purchaseorderreceiptproduct_Information */
		Body: DevKit.Formmsdyn_purchaseorderreceiptproduct_Information.Body;
		/** The Footer section of form msdyn_purchaseorderreceiptproduct_Information */
		Footer: DevKit.Formmsdyn_purchaseorderreceiptproduct_Information.Footer;
		/** The Navigation of form msdyn_purchaseorderreceiptproduct_Information */
		Navigation: DevKit.Formmsdyn_purchaseorderreceiptproduct_Information.Navigation;
		/** The SidePanes of form msdyn_purchaseorderreceiptproduct_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormPurchase_Order_Receipt_Product_Mobile {
		interface tab_fstab_general_Sections {
			fstab_general_section_3: DevKit.Controls.Section;
			fstab_general_section_4: DevKit.Controls.Section;
			fstab_general_section_general: DevKit.Controls.Section;
			fstab_general_section_quantity_cost: DevKit.Controls.Section;
		}
		interface tab_fstab_other_Sections {
			fstab_other_section_3: DevKit.Controls.Section;
			fstab_quantity_cost_section_2: DevKit.Controls.Section;
			fstab_quantity_cost_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_product_associates_to_Sections {
			fstab_product_associates_to_section: DevKit.Controls.Section;
			fstab_product_associates_to_section_2: DevKit.Controls.Section;
			fstab_product_associates_to_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids_section: DevKit.Controls.Section;
			fstab_sub_grids_section_2: DevKit.Controls.Section;
			fstab_sub_grids_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_general extends DevKit.Controls.ITab {
			Section: tab_fstab_general_Sections;
		}
		interface tab_fstab_other extends DevKit.Controls.ITab {
			Section: tab_fstab_other_Sections;
		}
		interface tab_fstab_product_associates_to extends DevKit.Controls.ITab {
			Section: tab_fstab_product_associates_to_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Controls.ITab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface Tabs {
			fstab_general: tab_fstab_general;
			fstab_other: tab_fstab_other;
			fstab_product_associates_to: tab_fstab_product_associates_to;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier for Resource Booking associated with Purchase Order Receipt Product. */
			msdyn_AssociateToBooking: DevKit.Controls.Lookup;
			/** Unique identifier for Warehouse associated with Purchase Order Receipt Product. */
			msdyn_AssociateToWarehouse: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order associated with Purchase Order Receipt Product. */
			msdyn_AssociateToWorkOrder: DevKit.Controls.Lookup;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Purchase Order associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrder: DevKit.Controls.Lookup;
			/** Unique identifier for Purchase Order Bill associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrderBill: DevKit.Controls.Lookup;
			/** Unique identifier for Purchase Order Product associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrderProduct: DevKit.Controls.Lookup;
			/** Unique identifier for Purchase Order Receipt associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrderReceipt: DevKit.Controls.Lookup;
			msdyn_Quantity: DevKit.Controls.Double;
			msdyn_TotalCost: DevKit.Controls.Money;
			msdyn_UnitCost: DevKit.Controls.Money;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_purchaseorderreceiptproduct_msdyn_inventoryjournal_PurchaseOrderReceiptProduct: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_purchaseorderreceiptproduct_msdyn_workorderproduct_PurchaseOrderReceiptProduct: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
	}
	class FormPurchase_Order_Receipt_Product_Mobile extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Purchase_Order_Receipt_Product_Mobile Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Purchase_Order_Receipt_Product_Mobile */
		Body: DevKit.FormPurchase_Order_Receipt_Product_Mobile.Body;
		/** The Navigation of form Purchase_Order_Receipt_Product_Mobile */
		Navigation: DevKit.FormPurchase_Order_Receipt_Product_Mobile.Navigation;
		/** The SidePanes of form Purchase_Order_Receipt_Product_Mobile */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormQuick_Create_Purchase_Order_Receipt_Product {
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
			/** Unique identifier for Resource Booking associated with Purchase Order Receipt Product. */
			msdyn_AssociateToBooking: DevKit.Controls.Lookup;
			/** Unique identifier for Warehouse associated with Purchase Order Receipt Product. */
			msdyn_AssociateToWarehouse: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order associated with Purchase Order Receipt Product. */
			msdyn_AssociateToWorkOrder: DevKit.Controls.Lookup;
			/** Unique identifier for Purchase Order associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrder: DevKit.Controls.Lookup;
			/** Unique identifier for Purchase Order Product associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrderProduct: DevKit.Controls.Lookup;
			/** Unique identifier for Purchase Order Receipt associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrderReceipt: DevKit.Controls.Lookup;
			msdyn_Quantity: DevKit.Controls.Double;
			msdyn_UnitCost: DevKit.Controls.Money;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
	}
	class FormQuick_Create_Purchase_Order_Receipt_Product extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Quick_Create_Purchase_Order_Receipt_Product Quick Create
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Quick_Create_Purchase_Order_Receipt_Product */
		Body: DevKit.FormQuick_Create_Purchase_Order_Receipt_Product.Body;
	}
	class msdyn_purchaseorderreceiptproductApi {
		/**
		* DynamicsCrm.DevKit msdyn_purchaseorderreceiptproductApi
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
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the exchange rate for the currency associated with the entity with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for Resource Booking associated with Purchase Order Receipt Product. */
		msdyn_AssociateToBooking: DevKit.WebApi.LookupValue;
		/** Unique identifier for Warehouse associated with Purchase Order Receipt Product. */
		msdyn_AssociateToWarehouse: DevKit.WebApi.LookupValue;
		/** Unique identifier for Work Order associated with Purchase Order Receipt Product. */
		msdyn_AssociateToWorkOrder: DevKit.WebApi.LookupValue;
		/** Enter the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for Purchase Order associated with Purchase Order Receipt Product. */
		msdyn_PurchaseOrder: DevKit.WebApi.LookupValue;
		/** Unique identifier for Purchase Order Bill associated with Purchase Order Receipt Product. */
		msdyn_PurchaseOrderBill: DevKit.WebApi.LookupValue;
		/** Unique identifier for Purchase Order Product associated with Purchase Order Receipt Product. */
		msdyn_PurchaseOrderProduct: DevKit.WebApi.LookupValue;
		/** Unique identifier for Purchase Order Receipt associated with Purchase Order Receipt Product. */
		msdyn_PurchaseOrderReceipt: DevKit.WebApi.LookupValue;
		/** Shows the entity instances. */
		msdyn_purchaseorderreceiptproductId: DevKit.WebApi.GuidValue;
		msdyn_Quantity: DevKit.WebApi.DoubleValue;
		msdyn_TotalCost: DevKit.WebApi.MoneyValue;
		/** Shows the value of the total cost in the base currency. */
		msdyn_totalcost_Base: DevKit.WebApi.MoneyValueReadonly;
		msdyn_UnitCost: DevKit.WebApi.MoneyValue;
		/** Shows the value of the unit cost in the base currency. */
		msdyn_unitcost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Purchase Order Receipt Product */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Purchase Order Receipt Product */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_purchaseorderreceiptproduct {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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