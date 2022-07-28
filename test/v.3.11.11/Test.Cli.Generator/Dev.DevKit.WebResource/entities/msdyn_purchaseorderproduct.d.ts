//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_purchaseorderproduct_Information {
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_3 extends DevKit.Controls.ITab {
			Section: tab_tab_3_Sections;
		}
		interface Tabs {
			tab_3: tab_tab_3;
		}
		interface Body {
			Tab: Tabs;
			/** Link this product to Booking. If specified and warehouse is not set then product will be added to Resource Booking */
			msdyn_AssociateToBooking: DevKit.Controls.Lookup;
			/** Warehouse to which this product should be received to */
			msdyn_AssociateToWarehouse: DevKit.Controls.Lookup;
			/** Link this product to Work Order. If specified and warehouse is not set then product will be added to work order */
			msdyn_AssociateToWorkOrder: DevKit.Controls.Lookup;
			/** Enter the date you expect this product to arrive to the shipping address. This value defaults to the date set on the PO. */
			msdyn_DateExpected: DevKit.Controls.Date;
			/** Enter the product description to display for the vendor. */
			msdyn_Description: DevKit.Controls.String;
			/** Enter the current status of this product. */
			msdyn_ItemStatus: DevKit.Controls.OptionSet;
			/** Shows the order of this product within the purchase order. */
			msdyn_LineOrder: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Product to order */
			msdyn_Product: DevKit.Controls.Lookup;
			/** Purchase order this line item relates to */
			msdyn_PurchaseOrder: DevKit.Controls.Lookup;
			/** Enter the quantity currently billed. */
			msdyn_QtyBilled: DevKit.Controls.Double;
			/** Enter the quantity currently received. */
			msdyn_QtyReceived: DevKit.Controls.Double;
			/** Enter the quantity ordered. */
			msdyn_Quantity: DevKit.Controls.Double;
			/** Shows the total cost of this product. This is calculated by (Unit Cost * Units) + Additional Cost + Commission Costs */
			msdyn_TotalCost: DevKit.Controls.Money;
			/** Unit for this product */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Enter the cost of this product per unit. */
			msdyn_UnitCost: DevKit.Controls.Money;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Purchase Order Product */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_purchaseorderproduct_msdyn_inventoryjournal_POProduct: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_purchaseorderproduct_msdyn_purchaseorderreceiptproduct_POProduct: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_purchaseorderproduct_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_purchaseorderproduct_Information */
		Body: DevKit.Formmsdyn_purchaseorderproduct_Information.Body;
		/** The Footer section of form msdyn_purchaseorderproduct_Information */
		Footer: DevKit.Formmsdyn_purchaseorderproduct_Information.Footer;
		/** The Navigation of form msdyn_purchaseorderproduct_Information */
		Navigation: DevKit.Formmsdyn_purchaseorderproduct_Information.Navigation;
		/** The Process of form msdyn_purchaseorderproduct_Information */
		Process: DevKit.Formmsdyn_purchaseorderproduct_Information.Process;
		/** The SidePanes of form msdyn_purchaseorderproduct_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormPurchase_Order_Product_Mobile {
		interface tab_fstab_general_Sections {
			_5AE19875_5712_4CB9_B3B7_F7583E96AE65_SECTION_3: DevKit.Controls.Section;
			fstab_general_section_general: DevKit.Controls.Section;
		}
		interface tab_fstab_other_Sections {
			tab_4_section_1: DevKit.Controls.Section;
			tab_4_section_2: DevKit.Controls.Section;
			tab_4_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_product_associates_to_Sections {
			fstab_product_associates_to_section: DevKit.Controls.Section;
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
		interface Tabs {
			fstab_general: tab_fstab_general;
			fstab_other: tab_fstab_other;
			fstab_product_associates_to: tab_fstab_product_associates_to;
		}
		interface Body {
			Tab: Tabs;
			/** Link this product to Booking. If specified and warehouse is not set then product will be added to Resource Booking */
			msdyn_AssociateToBooking: DevKit.Controls.Lookup;
			/** Warehouse to which this product should be received to */
			msdyn_AssociateToWarehouse: DevKit.Controls.Lookup;
			/** Link this product to Work Order. If specified and warehouse is not set then product will be added to work order */
			msdyn_AssociateToWorkOrder: DevKit.Controls.Lookup;
			/** Enter the date you expect this product to arrive to the shipping address. This value defaults to the date set on the PO. */
			msdyn_DateExpected: DevKit.Controls.Date;
			/** Enter the product description to display for the vendor. */
			msdyn_Description: DevKit.Controls.String;
			/** Enter the current status of this product. */
			msdyn_ItemStatus: DevKit.Controls.OptionSet;
			/** Shows the order of this product within the purchase order. */
			msdyn_LineOrder: DevKit.Controls.Integer;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Product to order */
			msdyn_Product: DevKit.Controls.Lookup;
			/** Purchase order this line item relates to */
			msdyn_PurchaseOrder: DevKit.Controls.Lookup;
			/** Enter the quantity currently billed. */
			msdyn_QtyBilled: DevKit.Controls.Double;
			/** Enter the quantity currently received. */
			msdyn_QtyReceived: DevKit.Controls.Double;
			/** Enter the quantity ordered. */
			msdyn_Quantity: DevKit.Controls.Double;
			/** Shows the total cost of this product. This is calculated by (Unit Cost * Units) + Additional Cost + Commission Costs */
			msdyn_TotalCost: DevKit.Controls.Money;
			/** Unit for this product */
			msdyn_Unit: DevKit.Controls.Lookup;
			/** Enter the cost of this product per unit. */
			msdyn_UnitCost: DevKit.Controls.Money;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_purchaseorderproduct_msdyn_inventoryjournal_POProduct: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_purchaseorderproduct_msdyn_purchaseorderreceiptproduct_POProduct: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormPurchase_Order_Product_Mobile extends DevKit.IForm {
		/**
		* Purchase Order Product - Mobile [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Purchase_Order_Product_Mobile */
		Body: DevKit.FormPurchase_Order_Product_Mobile.Body;
		/** The Navigation of form Purchase_Order_Product_Mobile */
		Navigation: DevKit.FormPurchase_Order_Product_Mobile.Navigation;
		/** The Process of form Purchase_Order_Product_Mobile */
		Process: DevKit.FormPurchase_Order_Product_Mobile.Process;
		/** The SidePanes of form Purchase_Order_Product_Mobile */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_purchaseorderproductApi {
		/**
		* DynamicsCrm.DevKit msdyn_purchaseorderproductApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the exchange rate for the currency associated with the entity with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Link this product to Booking. If specified and warehouse is not set then product will be added to Resource Booking */
		msdyn_AssociateToBooking: string;
		/** Warehouse to which this product should be received to */
		msdyn_AssociateToWarehouse: string;
		/** Link this product to Work Order. If specified and warehouse is not set then product will be added to work order */
		msdyn_AssociateToWorkOrder: string;
		/** Enter the date you expect this product to arrive to the shipping address. This value defaults to the date set on the PO. */
		msdyn_DateExpected_UtcDateOnly: Date;
		/** Enter the product description to display for the vendor. */
		msdyn_Description: string;
		msdyn_InternalFlags: string;
		msdyn_IsOrdered: boolean;
		/** Enter the current status of this product. */
		msdyn_ItemStatus: OptionSet.msdyn_purchaseorderproduct.msdyn_ItemStatus;
		/** Shows the order of this product within the purchase order. */
		msdyn_LineOrder: number;
		/** Enter the name of the custom entity. */
		msdyn_name: string;
		/** Product to order */
		msdyn_Product: string;
		/** Purchase order this line item relates to */
		msdyn_PurchaseOrder: string;
		/** Shows the entity instances. */
		msdyn_purchaseorderproductId: string;
		/** Enter the quantity currently billed. */
		msdyn_QtyBilled: number;
		/** Enter the quantity currently received. */
		msdyn_QtyReceived: number;
		/** Enter the quantity ordered. */
		msdyn_Quantity: number;
		/** Shows the total cost of this product. This is calculated by (Unit Cost * Units) + Additional Cost + Commission Costs */
		msdyn_TotalCost: number;
		/** Shows the value of the total cost in the base currency. */
		readonly msdyn_totalcost_Base: number;
		/** Unit for this product */
		msdyn_Unit: string;
		/** Enter the cost of this product per unit. */
		msdyn_UnitCost: number;
		/** Shows the value of the unit cost in the base currency. */
		readonly msdyn_unitcost_Base: number;
		/** Shows the date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the Purchase Order Product */
		statecode: OptionSet.msdyn_purchaseorderproduct.statecode;
		/** Reason for the status of the Purchase Order Product */
		statuscode: OptionSet.msdyn_purchaseorderproduct.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: string;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the exchange rate for the currency associated with the entity with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Shows the sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Link this product to Booking. If specified and warehouse is not set then product will be added to Resource Booking */
			readonly msdyn_AssociateToBooking: string;
			/** Warehouse to which this product should be received to */
			readonly msdyn_AssociateToWarehouse: string;
			/** Link this product to Work Order. If specified and warehouse is not set then product will be added to work order */
			readonly msdyn_AssociateToWorkOrder: string;
			/** Enter the date you expect this product to arrive to the shipping address. This value defaults to the date set on the PO. */
			readonly msdyn_DateExpected_UtcDateOnly: string;
			/** Enter the product description to display for the vendor. */
			readonly msdyn_Description: string;
			readonly msdyn_InternalFlags: string;
			readonly msdyn_IsOrdered: string;
			/** Enter the current status of this product. */
			readonly msdyn_ItemStatus: string;
			/** Shows the order of this product within the purchase order. */
			readonly msdyn_LineOrder: string;
			/** Enter the name of the custom entity. */
			readonly msdyn_name: string;
			/** Product to order */
			readonly msdyn_Product: string;
			/** Purchase order this line item relates to */
			readonly msdyn_PurchaseOrder: string;
			/** Shows the entity instances. */
			readonly msdyn_purchaseorderproductId: string;
			/** Enter the quantity currently billed. */
			readonly msdyn_QtyBilled: string;
			/** Enter the quantity currently received. */
			readonly msdyn_QtyReceived: string;
			/** Enter the quantity ordered. */
			readonly msdyn_Quantity: string;
			/** Shows the total cost of this product. This is calculated by (Unit Cost * Units) + Additional Cost + Commission Costs */
			readonly msdyn_TotalCost: string;
			/** Shows the value of the total cost in the base currency. */
			readonly msdyn_totalcost_Base: string;
			/** Unit for this product */
			readonly msdyn_Unit: string;
			/** Enter the cost of this product per unit. */
			readonly msdyn_UnitCost: string;
			/** Shows the value of the unit cost in the base currency. */
			readonly msdyn_unitcost_Base: string;
			/** Shows the date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the Purchase Order Product */
			readonly statecode: string;
			/** Reason for the status of the Purchase Order Product */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the entity. */
			readonly TransactionCurrencyId: string;
			/** Shows the time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_purchaseorderproduct {
		enum msdyn_ItemStatus {
			/** 690970002 */
			Canceled,
			/** 690970000 */
			Pending,
			/** 690970001 */
			Received
		}
		enum OwnerIdType {
		}
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}