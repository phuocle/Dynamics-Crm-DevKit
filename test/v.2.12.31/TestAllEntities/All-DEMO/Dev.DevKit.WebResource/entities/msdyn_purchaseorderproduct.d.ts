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
	}
	class Formmsdyn_purchaseorderproduct_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_purchaseorderproduct_Information
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
	}
	class FormPurchase_Order_Product_Mobile extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Purchase_Order_Product_Mobile
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
//{'JsForm':['Information','Purchase Order Product - Mobile'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}