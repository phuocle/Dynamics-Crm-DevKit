//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
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
			notescontrol: DevKit.Controls.Note;
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
			navProcessSessions: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_purchaseorderreceiptproduct_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_purchaseorderreceiptproduct_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_purchaseorderreceiptproduct_Information */
		Body: MyDog.Formmsdyn_purchaseorderreceiptproduct_Information.Body;
		/** The Footer section of form msdyn_purchaseorderreceiptproduct_Information */
		Footer: MyDog.Formmsdyn_purchaseorderreceiptproduct_Information.Footer;
		/** The Navigation of form msdyn_purchaseorderreceiptproduct_Information */
		Navigation: MyDog.Formmsdyn_purchaseorderreceiptproduct_Information.Navigation;
	}
	namespace FormPurchase_Order_Receipt_Product_Mobile {
		interface tab_fstab_general_Sections {
			fstab_general_section_general: DevKit.Controls.Section;
			fstab_general_section_quantity_cost: DevKit.Controls.Section;
			fstab_general_section_3: DevKit.Controls.Section;
			fstab_general_section_4: DevKit.Controls.Section;
		}
		interface tab_fstab_product_associates_to_Sections {
			fstab_product_associates_to_section: DevKit.Controls.Section;
			fstab_product_associates_to_section_2: DevKit.Controls.Section;
			fstab_product_associates_to_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_other_Sections {
			fstab_other_section_3: DevKit.Controls.Section;
			fstab_quantity_cost_section_2: DevKit.Controls.Section;
			fstab_quantity_cost_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids_section: DevKit.Controls.Section;
			fstab_sub_grids_section_2: DevKit.Controls.Section;
			fstab_sub_grids_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_general extends DevKit.Controls.ITab {
			Section: tab_fstab_general_Sections;
		}
		interface tab_fstab_product_associates_to extends DevKit.Controls.ITab {
			Section: tab_fstab_product_associates_to_Sections;
		}
		interface tab_fstab_other extends DevKit.Controls.ITab {
			Section: tab_fstab_other_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Controls.ITab {
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
			notescontrol: DevKit.Controls.Note;
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
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			navProcessSessions: DevKit.Controls.NavigationItem
		}
	}
	class FormPurchase_Order_Receipt_Product_Mobile extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Purchase_Order_Receipt_Product_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Purchase_Order_Receipt_Product_Mobile */
		Body: MyDog.FormPurchase_Order_Receipt_Product_Mobile.Body;
		/** The Navigation of form Purchase_Order_Receipt_Product_Mobile */
		Navigation: MyDog.FormPurchase_Order_Receipt_Product_Mobile.Navigation;
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
		* DynamicsCrm.DevKit form Quick_Create_Purchase_Order_Receipt_Product
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.WebApi;
		/** The Body section of form Quick_Create_Purchase_Order_Receipt_Product */
		Body: MyDog.FormQuick_Create_Purchase_Order_Receipt_Product.Body;
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
//{'JsForm':['Information','Purchase Order Receipt Product - Mobile','Quick Create Purchase Order Receipt Product'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}