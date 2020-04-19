//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_purchaseorderreceiptproduct_Information {
		interface tab_tab_3_Sections {
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_4_Sections {
			tab_4_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_3 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_3_Sections;
		}
		interface tab_tab_4 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_4_Sections;
		}
		interface Tabs {
			tab_3: tab_tab_3;
			tab_4: tab_tab_4;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Unique identifier for Resource Booking associated with Purchase Order Receipt Product. */
			msdyn_AssociateToBooking: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Warehouse associated with Purchase Order Receipt Product. */
			msdyn_AssociateToWarehouse: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Work Order associated with Purchase Order Receipt Product. */
			msdyn_AssociateToWorkOrder: DevKit.Form.Controls.ControlLookup;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Unique identifier for Purchase Order associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrder: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Purchase Order Bill associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrderBill: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Purchase Order Product associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrderProduct: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Purchase Order Receipt associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrderReceipt: DevKit.Form.Controls.ControlLookup;
			msdyn_Quantity: DevKit.Form.Controls.ControlDouble;
			msdyn_TotalCost: DevKit.Form.Controls.ControlMoney;
			msdyn_UnitCost: DevKit.Form.Controls.ControlMoney;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Status of the Purchase Order Receipt Product */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_purchaseorderreceiptproduct_msdyn_inventoryjournal_PurchaseOrderReceiptProduct: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_purchaseorderreceiptproduct_msdyn_workorderproduct_PurchaseOrderReceiptProduct: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class Formmsdyn_purchaseorderreceiptproduct_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_purchaseorderreceiptproduct_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_purchaseorderreceiptproduct_Information */
		Body: LuckyMokey.Formmsdyn_purchaseorderreceiptproduct_Information.Body;
		/** The Footer section of form msdyn_purchaseorderreceiptproduct_Information */
		Footer: LuckyMokey.Formmsdyn_purchaseorderreceiptproduct_Information.Footer;
		/** The Navigation of form msdyn_purchaseorderreceiptproduct_Information */
		Navigation: LuckyMokey.Formmsdyn_purchaseorderreceiptproduct_Information.Navigation;
	}
	namespace FormPurchase_Order_Receipt_Product_Mobile {
		interface tab_fstab_general_Sections {
			fstab_general_section_general: DevKit.Form.Controls.ControlSection;
			fstab_general_section_quantity_cost: DevKit.Form.Controls.ControlSection;
			fstab_general_section_3: DevKit.Form.Controls.ControlSection;
			fstab_general_section_4: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_product_associates_to_Sections {
			fstab_product_associates_to_section: DevKit.Form.Controls.ControlSection;
			fstab_product_associates_to_section_2: DevKit.Form.Controls.ControlSection;
			fstab_product_associates_to_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_other_Sections {
			fstab_other_section_3: DevKit.Form.Controls.ControlSection;
			fstab_quantity_cost_section_2: DevKit.Form.Controls.ControlSection;
			fstab_quantity_cost_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids_section: DevKit.Form.Controls.ControlSection;
			fstab_sub_grids_section_2: DevKit.Form.Controls.ControlSection;
			fstab_sub_grids_section_3: DevKit.Form.Controls.ControlSection;
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
		interface tab_fstab_sub_grids extends DevKit.Form.Controls.IControlTab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface Tabs {
			fstab_general: tab_fstab_general;
			fstab_product_associates_to: tab_fstab_product_associates_to;
			fstab_other: tab_fstab_other;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Unique identifier for Resource Booking associated with Purchase Order Receipt Product. */
			msdyn_AssociateToBooking: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Warehouse associated with Purchase Order Receipt Product. */
			msdyn_AssociateToWarehouse: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Work Order associated with Purchase Order Receipt Product. */
			msdyn_AssociateToWorkOrder: DevKit.Form.Controls.ControlLookup;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Unique identifier for Purchase Order associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrder: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Purchase Order Bill associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrderBill: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Purchase Order Product associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrderProduct: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Purchase Order Receipt associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrderReceipt: DevKit.Form.Controls.ControlLookup;
			msdyn_Quantity: DevKit.Form.Controls.ControlDouble;
			msdyn_TotalCost: DevKit.Form.Controls.ControlMoney;
			msdyn_UnitCost: DevKit.Form.Controls.ControlMoney;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_purchaseorderreceiptproduct_msdyn_inventoryjournal_PurchaseOrderReceiptProduct: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_purchaseorderreceiptproduct_msdyn_workorderproduct_PurchaseOrderReceiptProduct: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormPurchase_Order_Receipt_Product_Mobile extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Purchase_Order_Receipt_Product_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Purchase_Order_Receipt_Product_Mobile */
		Body: LuckyMokey.FormPurchase_Order_Receipt_Product_Mobile.Body;
		/** The Navigation of form Purchase_Order_Receipt_Product_Mobile */
		Navigation: LuckyMokey.FormPurchase_Order_Receipt_Product_Mobile.Navigation;
	}
	namespace FormQuick_Create_Purchase_Order_Receipt_Product {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_1 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier for Resource Booking associated with Purchase Order Receipt Product. */
			msdyn_AssociateToBooking: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Warehouse associated with Purchase Order Receipt Product. */
			msdyn_AssociateToWarehouse: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Work Order associated with Purchase Order Receipt Product. */
			msdyn_AssociateToWorkOrder: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Purchase Order associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrder: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Purchase Order Product associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrderProduct: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Purchase Order Receipt associated with Purchase Order Receipt Product. */
			msdyn_PurchaseOrderReceipt: DevKit.Form.Controls.ControlLookup;
			msdyn_Quantity: DevKit.Form.Controls.ControlDouble;
			msdyn_UnitCost: DevKit.Form.Controls.ControlMoney;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormQuick_Create_Purchase_Order_Receipt_Product extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Quick_Create_Purchase_Order_Receipt_Product
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Quick_Create_Purchase_Order_Receipt_Product */
		Body: LuckyMokey.FormQuick_Create_Purchase_Order_Receipt_Product.Body;
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
//{'JsForm':['Information','Purchase Order Receipt Product - Mobile','Quick Create Purchase Order Receipt Product'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false}