//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_purchaseorderproduct_Information {
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_3 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_3_Sections;
		}
		interface Tabs {
			tab_3: tab_tab_3;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Link this product to Booking. If specified and warehouse is not set then product will be added to Resource Booking */
			msdyn_AssociateToBooking: DevKit.Form.Controls.ControlLookup;
			/** Warehouse to which this product should be received to */
			msdyn_AssociateToWarehouse: DevKit.Form.Controls.ControlLookup;
			/** Link this product to Work Order. If specified and warehouse is not set then product will be added to work order */
			msdyn_AssociateToWorkOrder: DevKit.Form.Controls.ControlLookup;
			/** Enter the date you expect this product to arrive to the shipping address. This value defaults to the date set on the PO. */
			msdyn_DateExpected: DevKit.Form.Controls.ControlDate;
			/** Enter the product description to display for the vendor. */
			msdyn_Description: DevKit.Form.Controls.ControlString;
			/** Enter the current status of this product. */
			msdyn_ItemStatus: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the order of this product within the purchase order. */
			msdyn_LineOrder: DevKit.Form.Controls.ControlInteger;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Product to order */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			/** Purchase order this line item relates to */
			msdyn_PurchaseOrder: DevKit.Form.Controls.ControlLookup;
			/** Enter the quantity currently billed. */
			msdyn_QtyBilled: DevKit.Form.Controls.ControlDouble;
			/** Enter the quantity currently received. */
			msdyn_QtyReceived: DevKit.Form.Controls.ControlDouble;
			/** Enter the quantity ordered. */
			msdyn_Quantity: DevKit.Form.Controls.ControlDouble;
			/** Shows the total cost of this product. This is calculated by (Unit Cost * Units) + Additional Cost + Commission Costs */
			msdyn_TotalCost: DevKit.Form.Controls.ControlMoney;
			/** Unit for this product */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Enter the cost of this product per unit. */
			msdyn_UnitCost: DevKit.Form.Controls.ControlMoney;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Purchase Order Product */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_purchaseorderproduct_msdyn_purchaseorderreceiptproduct_POProduct: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_purchaseorderproduct_msdyn_inventoryjournal_POProduct: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_purchaseorderproduct_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_purchaseorderproduct_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_purchaseorderproduct_Information */
		Body: LuckyMokey.Formmsdyn_purchaseorderproduct_Information.Body;
		/** The Footer section of form msdyn_purchaseorderproduct_Information */
		Footer: LuckyMokey.Formmsdyn_purchaseorderproduct_Information.Footer;
		/** The Navigation of form msdyn_purchaseorderproduct_Information */
		Navigation: LuckyMokey.Formmsdyn_purchaseorderproduct_Information.Navigation;
	}
	namespace FormPurchase_Order_Product_Mobile {
		interface tab_fstab_general_Sections {
			fstab_general_section_general: DevKit.Form.Controls.ControlSection;
			_5AE19875_5712_4CB9_B3B7_F7583E96AE65_SECTION_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_product_associates_to_Sections {
			fstab_product_associates_to_section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_other_Sections {
			tab_4_section_1: DevKit.Form.Controls.ControlSection;
			tab_4_section_2: DevKit.Form.Controls.ControlSection;
			tab_4_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_general_Sections;
		}
		interface tab_fstab_product_associates_to extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_product_associates_to_Sections;
		}
		interface tab_fstab_other extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_other_Sections;
		}
		interface Tabs {
			fstab_general: tab_fstab_general;
			fstab_product_associates_to: tab_fstab_product_associates_to;
			fstab_other: tab_fstab_other;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Link this product to Booking. If specified and warehouse is not set then product will be added to Resource Booking */
			msdyn_AssociateToBooking: DevKit.Form.Controls.ControlLookup;
			/** Warehouse to which this product should be received to */
			msdyn_AssociateToWarehouse: DevKit.Form.Controls.ControlLookup;
			/** Link this product to Work Order. If specified and warehouse is not set then product will be added to work order */
			msdyn_AssociateToWorkOrder: DevKit.Form.Controls.ControlLookup;
			/** Enter the date you expect this product to arrive to the shipping address. This value defaults to the date set on the PO. */
			msdyn_DateExpected: DevKit.Form.Controls.ControlDate;
			/** Enter the product description to display for the vendor. */
			msdyn_Description: DevKit.Form.Controls.ControlString;
			/** Enter the current status of this product. */
			msdyn_ItemStatus: DevKit.Form.Controls.ControlOptionSet;
			/** Shows the order of this product within the purchase order. */
			msdyn_LineOrder: DevKit.Form.Controls.ControlInteger;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Product to order */
			msdyn_Product: DevKit.Form.Controls.ControlLookup;
			/** Purchase order this line item relates to */
			msdyn_PurchaseOrder: DevKit.Form.Controls.ControlLookup;
			/** Enter the quantity currently billed. */
			msdyn_QtyBilled: DevKit.Form.Controls.ControlDouble;
			/** Enter the quantity currently received. */
			msdyn_QtyReceived: DevKit.Form.Controls.ControlDouble;
			/** Enter the quantity ordered. */
			msdyn_Quantity: DevKit.Form.Controls.ControlDouble;
			/** Shows the total cost of this product. This is calculated by (Unit Cost * Units) + Additional Cost + Commission Costs */
			msdyn_TotalCost: DevKit.Form.Controls.ControlMoney;
			/** Unit for this product */
			msdyn_Unit: DevKit.Form.Controls.ControlLookup;
			/** Enter the cost of this product per unit. */
			msdyn_UnitCost: DevKit.Form.Controls.ControlMoney;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_purchaseorderproduct_msdyn_purchaseorderreceiptproduct_POProduct: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_purchaseorderproduct_msdyn_inventoryjournal_POProduct: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormPurchase_Order_Product_Mobile extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Purchase_Order_Product_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Purchase_Order_Product_Mobile */
		Body: LuckyMokey.FormPurchase_Order_Product_Mobile.Body;
		/** The Navigation of form Purchase_Order_Product_Mobile */
		Navigation: LuckyMokey.FormPurchase_Order_Product_Mobile.Navigation;
	}
}
declare namespace OptionSet {
	namespace msdyn_purchaseorderproduct {
		enum msdyn_ItemStatus {
			/** 690970000 */
			Pending,
			/** 690970001 */
			Received,
			/** 690970002 */
			Canceled
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
//{'JsForm':['Information','Purchase Order Product - Mobile'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}